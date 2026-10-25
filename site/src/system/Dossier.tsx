import { useEffect, useId, useRef, useState, type ReactNode } from "react";

import type { Block, Dossier as DossierData } from "../content/types";
import { asset } from "./asset";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * Three tiles, one open at a time. The open tile becomes a spine on the
 * left and its blocks unfold to the right as a row of panels the reader
 * steps through sideways. The wall underneath stays as short as the
 * tiles; the detail is only as long as the reader makes it.
 *
 * `render` is the wall's own block renderer, passed in so this file
 * does not depend on the mapping.
 */
export function Dossier({ items, render }: { items: DossierData[]; render: (b: Block) => ReactNode }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const track = useRef<HTMLDivElement | null>(null);
  const base = useId();
  const current = open === null ? null : items[open];
  const count = current ? current.blocks.length + 1 : 0;

  // A deep link to a tile opens it: on arrival, and on an in-page hash
  // change too, so a decision card in "In short" can land on an open tile.
  useEffect(() => {
    const fromHash = () => {
      const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      const i = items.findIndex((d) => d.id === hash);
      if (i >= 0) {
        setOpen(i);
        setPage(0);
        requestAnimationFrame(() => track.current?.scrollTo({ left: 0 }));
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [items]);

  // which panel is in view
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const panels = Array.from(el.children) as HTMLElement[];
      const x = el.scrollLeft + el.clientWidth * 0.3;
      let i = 0;
      panels.forEach((p, k) => { if (p.offsetLeft <= x) i = k; });
      setPage(i);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [open]);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const panels = Array.from(el.children) as HTMLElement[];
    const target = panels[Math.max(0, Math.min(panels.length - 1, i))];
    if (target) el.scrollTo({ left: target.offsetLeft - 24, behavior: "smooth" });
  };
  /** The URL names the open tile, so a card that links to it works twice. */
  const setHash = (id?: string) => history.replaceState(null, "", id ? `#${id}` : window.location.pathname + window.location.search);
  const choose = (i: number) => {
    setOpen(i);
    setPage(0);
    setHash(items[i].id);
    requestAnimationFrame(() => {
      track.current?.scrollTo({ left: 0 });
      track.current?.closest(".dossier")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <Lane width="bleed">
      <div ref={ref} className={["dossier", shown && "is-shown", current && "is-open"].filter(Boolean).join(" ")}>
        <div className="dossier__tiles" role="tablist" aria-label="Use cases">
          {items.map((d, i) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              // The tile id is the hash target, so a deep link scrolls here
              // (ScrollToTop) as well as opening the tile (the effect above).
              id={d.id}
              aria-selected={open === i}
              aria-controls={`${base}-wing`}
              className={open === i ? "dossier__tile is-current" : "dossier__tile"}
              style={{ transitionDelay: open === null ? `${i * 120}ms` : "0ms" }}
              onClick={() => { if (open === i) { setOpen(null); setHash(); } else choose(i); }}
            >
              <span className="dossier__cover" aria-hidden="true">
                <img src={asset(d.cover.src)} alt="" loading="lazy" decoding="async" />
              </span>
              <span className="dossier__n">{d.n}</span>
              <span className="dossier__title">{d.title}</span>
              <span className="dossier__maxim">{d.maxim}</span>
              <span className="dossier__cta">{open === i ? "Close" : "Open"}<span aria-hidden="true"> →</span></span>
            </button>
          ))}
        </div>

        <div id={`${base}-wing`} role="tabpanel" aria-labelledby={current ? current.id : undefined} className="dossier__wing" hidden={!current}>
          {current && (
            <>
              <aside className="dossier__spine">
                <span className="dossier__spine-n">{current.n}</span>
                <span className="dossier__spine-title">{current.title}</span>
                <span className="dossier__spine-count">{page + 1} / {count}</span>
              </aside>
              <div ref={track} className="dossier__track" tabIndex={0} aria-label={`${current.title}, panels`}
                onKeyDown={(e) => { if (e.key === "ArrowRight") { e.preventDefault(); go(page + 1); } if (e.key === "ArrowLeft") { e.preventDefault(); go(page - 1); } }}
              >
                <section className="dossier__panel dossier__panel--lead" key={`${current.id}-lead`}>
                  <span className="dossier__panel-n">01</span>
                  <h3 className="dossier__lead-title">{current.title}</h3>
                  <p className="dossier__lead-maxim">{current.maxim}</p>
                  <p className="dossier__lead-standfirst">{current.standfirst}</p>
                  <button type="button" className="dossier__next" onClick={() => go(1)}>Read on <span aria-hidden="true">→</span></button>
                </section>
                {current.blocks.map((b, i) => (
                  <section className="dossier__panel" key={`${current.id}-${i}`}>
                    <span className="dossier__panel-n">{String(i + 2).padStart(2, "0")}</span>
                    {render(b)}
                  </section>
                ))}
              </div>
              <nav className="dossier__nav" aria-label="Panels">
                <button type="button" className="dossier__arrow" onClick={() => go(page - 1)} disabled={page === 0} aria-label="Previous panel">←</button>
                <span className="dossier__progress" aria-hidden="true"><span style={{ transform: `scaleX(${(page + 1) / count})` }} /></span>
                <button type="button" className="dossier__arrow" onClick={() => go(page + 1)} disabled={page >= count - 1} aria-label="Next panel">→</button>
                <button type="button" className="dossier__close" onClick={() => { setOpen(null); setHash(); }}>Close</button>
              </nav>
            </>
          )}
        </div>
      </div>
    </Lane>
  );
}
