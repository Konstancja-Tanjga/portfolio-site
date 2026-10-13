import { useEffect, useRef, useState } from "react";

import { scrollToTop, useScroll } from "../system/useScroll";

export type QuickStop = { id: string; label: string };

/**
 * The phone's way around a long page. When the reader scrolls up past
 * the first screen, two things float in at the bottom right: Top, and a
 * menu that lists the stops on this page (chapters on a wall, sections
 * on the home page), so the next stop is one tap away instead of a
 * scroll to the jump bar.
 *
 * Shown only while scrolling up, like the jump bar, and only on narrow
 * screens; the desktop keeps the sticky jump bar and its own Top.
 */
export function QuickNav({ stops }: { stops: QuickStop[] }) {
  const { deep, direction } = useScroll();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | undefined>(stops[0]?.id);
  const root = useRef<HTMLDivElement | null>(null);
  const show = deep && direction === "up";

  // close when it hides, and on a tap outside
  useEffect(() => { if (!show) setOpen(false); }, [show]);
  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", away);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("pointerdown", away); document.removeEventListener("keydown", esc); };
  }, [open]);

  // which stop the reader is in: the last one above a third of the viewport.
  // Measured when the sheet opens as well, so the mark is right on first tap.
  useEffect(() => {
    if (!stops.length) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const marker = window.innerHeight * 0.3;
      let current = stops[0].id;
      for (const s of stops) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top > marker) break;
        current = s.id;
      }
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(measure); };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, [stops, open]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // land under the sticky jump bar, not behind it
    const bar = document.querySelector<HTMLElement>(".jump");
    const offset = bar ? bar.getBoundingClientRect().height + 12 : 12;
    const top = window.scrollY + el.getBoundingClientRect().top - offset;
    window.scrollTo({ top, behavior: reduced ? "instant" : "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div ref={root} className="qnav" hidden={!show}>
      {open && (
        <nav className="qnav__sheet" aria-label="On this page">
          <ol className="qnav__list">
            {stops.map((s) => (
              <li key={s.id}>
                <button type="button" className={s.id === active ? "qnav__stop is-current" : "qnav__stop"} aria-current={s.id === active ? "true" : undefined} onClick={() => go(s.id)}>
                  {s.label}
                </button>
              </li>
            ))}
          </ol>
        </nav>
      )}
      <div className="qnav__bar">
        {stops.length > 0 && (
          <button type="button" className="qnav__btn" aria-expanded={open} aria-haspopup="menu" onClick={() => setOpen((v) => !v)}>
            <span aria-hidden="true">{open ? "×" : "≡"}</span>
            <span className="qnav__label">Menu</span>
          </button>
        )}
        <button type="button" className="qnav__btn" onClick={() => { setOpen(false); scrollToTop(); }} title="Back to top">
          <span aria-hidden="true">↑</span>
          <span className="qnav__label">Top</span>
        </button>
      </div>
    </div>
  );
}
