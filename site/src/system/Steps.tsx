import { useEffect, useRef, useState, type CSSProperties } from "react";

import type { Step } from "../content/types";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * The pipeline. Seven stages, each carrying the rule it sets and why that
 * rule is not decoration.
 *
 * It was a list of seven identical two-column rows, and a list is the wrong
 * shape for it: this is a sequence, every stage takes what the one before it
 * produced, and none of that was visible. Four things changed and each one
 * encodes something true rather than decorating something flat.
 *
 *  - The rail names the stages and marks where the reader is. Numbering is
 *    honest here — 03 cannot happen before 02 — so the index is information.
 *  - Each stage declares what it receives and what it hands on. That is what
 *    makes it a pipeline on the page rather than in the writer's head.
 *  - The rule and the thing it replaces sit as a pair, in the system's own
 *    success and critical tones. Both halves are one line: the pair is for
 *    scanning, the prose above it is for reading.
 *  - Three stages carry an artefact — a spec, a diff, an import — and take the
 *    full width for it. Seven would be wallpaper; three is an argument.
 *
 * The "why" is never hidden. It is the best writing on the page and hiding it
 * behind a click would be the easy version of this redesign and the wrong one.
 * It sits typographically subordinate and lifts to full strength when the
 * stage is hovered or focused — a pointer-only nicety, so a touch reader and
 * a keyboard reader get it at full strength from the start.
 */
export function Steps({
  items,
  standfirst,
}: {
  items: Step[];
  standfirst?: string;
}) {
  const { ref, shown } = useReveal<HTMLOListElement>();
  const [current, setCurrent] = useState(items[0]?.n ?? "");
  const stageRefs = useRef(new Map<string, HTMLLIElement>());

  /* Which stage the reader is in. The rail is a position report, so it
     follows the scroll rather than the click, and a click is only a shortcut
     to a place the same report will then describe. */
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        const n = visible?.target.getAttribute("data-n");
        if (n) setCurrent(n);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );
    for (const el of stageRefs.current.values()) observer.observe(el);
    return () => observer.disconnect();
  }, [items]);

  return (
    <Lane width="wall">
      {standfirst && <p className="standfirst">{standfirst}</p>}

      <div className="pipeline">
        <nav className="pipeline__rail" aria-label="Pipeline stages">
          <p className="rail__head">Stage</p>
          <ol>
            {items.map((s) => (
              <li key={s.n}>
                <a
                  href={`#stage-${s.n}`}
                  className={
                    s.n === current ? "rail__link is-current" : "rail__link"
                  }
                  aria-current={s.n === current ? "true" : undefined}
                >
                  <span className="rail__n">{s.n}</span>
                  <span className="rail__stage">{s.stage ?? s.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <ol ref={ref} className={shown ? "stages is-running" : "stages"}>
          {items.map((s, i) => (
            <li
              key={s.n}
              id={`stage-${s.n}`}
              data-n={s.n}
              ref={(el) => {
                if (el) stageRefs.current.set(s.n, el);
                else stageRefs.current.delete(s.n);
              }}
              className={s.feature ? "stage stage--feature" : "stage"}
              style={{ "--step-delay": `${i * 90}ms` } as CSSProperties}
            >
              <div className="stage__head">
                <span className="stage__n">{s.n}</span>
                <h3 className="stage__title">{s.title}</h3>
                {s.flow && (
                  <p className="stage__flow">
                    <span className="flow__end">{s.flow.from}</span>
                    <span className="flow__arrow" aria-hidden="true">
                      →
                    </span>
                    <span className="flow__end">{s.flow.to}</span>
                  </p>
                )}
              </div>

              <div className="stage__body">
                <p className="stage__rule">{s.rule.body}</p>

                {s.contrast && (
                  <div className="verdict">
                    <p className="verdict__side verdict__side--does">
                      <span className="verdict__mark" aria-hidden="true">
                        ✓
                      </span>
                      {s.contrast.does}
                    </p>
                    <p className="verdict__side verdict__side--instead">
                      <span className="verdict__mark" aria-hidden="true">
                        ✕
                      </span>
                      {s.contrast.instead}
                    </p>
                  </div>
                )}
              </div>

              {s.why && (
                <aside className="stage__why">
                  <p className="why__label">{s.why.label}</p>
                  <p className="why__body">{s.why.body}</p>
                </aside>
              )}

              {s.artefact && (
                <figure className="artefact">
                  <pre className="artefact__code">
                    <code>{s.artefact.lines.join("\n")}</code>
                  </pre>
                  <figcaption className="artefact__caption">
                    {s.artefact.caption}
                  </figcaption>
                </figure>
              )}
            </li>
          ))}
        </ol>
      </div>
    </Lane>
  );
}
