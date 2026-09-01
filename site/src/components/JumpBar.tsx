import { useEffect, useState } from "react";
import type { Chapter } from "../content/types";

/**
 * A sticky index for a long wall. Behance has no equivalent, which is
 * its worst problem: ten screens of scroll and no way back to the
 * part you wanted. Marks the chapter you are in.
 */
export function JumpBar({ title, chapters }: { title: string; chapters: Chapter[] }) {
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

  if (!named.length) return null;

  return (
    <div className="jump">
      <div className="jump__inner">
        <span className="jump__title">{title}</span>
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
      </div>
    </div>
  );
}
