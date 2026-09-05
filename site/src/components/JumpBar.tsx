import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import type { Chapter } from "../content/types";
import { useScroll } from "../system/useScroll";

/** The line down the viewport that decides which chapter you are "in". */
const MARKER = 0.3;

const idFromHash = (hash: string) =>
  hash ? decodeURIComponent(hash.replace(/^#/, "")) : undefined;

/**
 * A sticky index for a long wall. Behance has no equivalent, which is
 * its worst problem: ten screens of scroll and no way back to the
 * part you wanted. Marks the chapter you are in.
 *
 * Position, not intersection. A chapter here is a short heading followed by
 * an image several thousand pixels tall, and only the heading carries the id
 * — the chapter wrapper is display:contents and has no box. So an observer
 * band only ever sees a heading for the moment it crosses, and reports
 * nothing at all for the rest of the chapter. Measuring instead means the
 * answer is derived from where the page actually is, and is therefore right
 * on the first frame, after a reflow, and after a deep link alike.
 */
export function JumpBar({ title, chapters }: { title: string; chapters: Chapter[] }) {
  const { direction } = useScroll();
  const location = useLocation();
  const named = useMemo(() => chapters.filter((c) => c.heading), [chapters]);

  /**
   * A hash names the chapter outright, so it wins until the reader moves.
   *
   * It has to: the images are lazy and carry no dimensions, so on arrival the
   * wall is collapsed to a fraction of its height and every heading is within
   * a screen of every other. Measuring that layout answers a question about a
   * page that is about to stop existing. Pinning holds the answer the URL
   * gave us across the reflow.
   */
  const pinned = useRef<string | undefined>(idFromHash(location.hash));
  const [active, setActive] = useState<string | undefined>(
    () => pinned.current ?? named[0]?.id,
  );

  useEffect(() => {
    if (!named.length) return;
    let frame = 0;

    const measure = () => {
      frame = 0;
      if (pinned.current) {
        setActive(pinned.current);
        return;
      }
      const marker = window.innerHeight * MARKER;
      // Headings are in document order, so the last one above the marker is
      // the chapter the reader is in. Above the first heading, it is the first.
      let current = named[0].id;
      for (const c of named) {
        const el = document.getElementById(c.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top > marker) break;
        current = c.id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    /** The reader moved under their own steam, so the URL no longer speaks
        for them. A scroll event alone is not this signal — lazy images firing
        reflows produce plenty of those without anybody touching anything. */
    const release = () => {
      pinned.current = undefined;
      onScroll();
    };

    const onHashChange = () => {
      const id = idFromHash(window.location.hash);
      if (id && named.some((c) => c.id === id)) {
        pinned.current = id;
        setActive(id);
      } else {
        release();
      }
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("wheel", release, { passive: true });
    window.addEventListener("touchmove", release, { passive: true });
    window.addEventListener("keydown", release);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchmove", release);
      window.removeEventListener("keydown", release);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [named]);

  /** A router navigation to a hash — hashchange does not fire for those. */
  useEffect(() => {
    const id = idFromHash(location.hash);
    if (id && named.some((c) => c.id === id)) {
      pinned.current = id;
      setActive(id);
    }
  }, [location.key, location.hash, named]);

  return (
    <div className={direction === "down" ? "jump is-tucked" : "jump"}>
      <div className="jump__inner">
        {/* Always present, sticky, first in the tab order after the masthead:
            a project page is long, and browser Back is not an interface. */}
        <Link to="/" className="jump__back">
          <span aria-hidden="true">←</span> Work
        </Link>
        <span className="jump__title">{title}</span>
        {named.length > 0 && (
        <nav className="jump__nav" aria-label="Chapters">
          {named.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              aria-current={active === c.id ? "true" : undefined}
            >
              {c.heading}
            </a>
          ))}
        </nav>
        )}
      </div>
    </div>
  );
}
