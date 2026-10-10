import { useEffect, useRef } from "react";

import type { Cover as CoverData } from "../content/types";
import { asset } from "./asset";
import { Lane } from "./Wall";

/**
 * The intro. The title first, set very large on the ground, with the
 * kicker above it and the subline, the stamp as a row of tags and the
 * credit under it. Then the cover art as one wide image that drifts a
 * little slower than the page (parallax, a few pixels, off under
 * prefers-reduced-motion).
 *
 * Every cover artboard carries its own type, so it is shown whole below
 * the title rather than behind it: two titles on top of each other was
 * the one thing the old intro could not do.
 */
export function Cover({ cover }: { cover: CoverData }) {
  const art = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = art.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const move = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      // The image travels at 85% of the page's speed, a few pixels either way.
      const y = Math.max(-r.height, Math.min(r.height, r.top)) * -0.15;
      el.style.setProperty("--cover-shift", `${y.toFixed(1)}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(move);
    };
    move();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const tags = cover.stamp.split(/\s*[·•]\s*/).filter(Boolean);

  return (
    <>
      <Lane width="wall">
        <header className="cover">
          <p className="cover__kicker">{cover.kicker}</p>
          <h1 className="cover__headline">
            {cover.headline.map((line, i) => (
              <span className="cover__line" key={line} style={{ animationDelay: `${120 + i * 110}ms` }}>
                {i > 0 && " "}
                {line}
              </span>
            ))}
          </h1>
          <p className="cover__subline">{cover.subline}</p>
          <div className="cover__row">
            <ul className="cover__tags" aria-label="What the project covers">
              {tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="cover__credit">{cover.credit}</p>
          </div>
        </header>
      </Lane>
      {cover.shot.src && (
        <Lane width="bleed">
          <div className="cover__art" ref={art} aria-hidden="true">
            <img src={asset(cover.shot.src)} alt="" />
          </div>
        </Lane>
      )}
    </>
  );
}
