import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import type { Chapter } from "../content/types";
import { useScroll } from "../system/useScroll";

/**
 * A sticky index for a long wall. Behance has no equivalent, which is
 * its worst problem: ten screens of scroll and no way back to the
 * part you wanted. Marks the chapter you are in.
 */
export function JumpBar({ title, chapters }: { title: string; chapters: Chapter[] }) {
  const { direction } = useScroll();
  const named = chapters.filter((c) => c.heading);
  const [active, setActive] = useState<string | undefined>(named[0]?.id);

  useEffect(() => {
    if (!named.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    named.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [chapters]);

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
