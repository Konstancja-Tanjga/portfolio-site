import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

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
 * The "why" is never hidden. It is the best writing on the page, and hiding it
 * behind a click would be the easy version of this redesign and the wrong one.
 * It sits typographically subordinate and lifts to full strength when the
 * stage is hovered or focused — a pointer-only nicety, so a touch reader and a
 * keyboard reader get it at full strength from the start.
 *
 * Folding is the reader's choice, not the page's: every stage is open on
 * arrival, and "collapse all" folds them to their heads. That state is worth
 * having rather than tolerating — seven heads, each still showing what the
 * stage takes and what it hands on, is the pipeline as a diagram, on one
 * screen. `<details>` does the work, so it survives with no JavaScript, obeys
 * the keyboard, and announces itself as expanded or collapsed without a
 * hand-rolled aria-expanded to get wrong.
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
  const [closed, setClosed] = useState<ReadonlySet<string>>(new Set());
  const stageRefs = useRef(new Map<string, HTMLLIElement>());
  const allClosed = items.length > 0 && closed.size === items.length;

  const setOpen = useCallback((n: string, open: boolean) => {
    setClosed((previous) => {
      if (open === !previous.has(n)) return previous;
      const next = new Set(previous);
      if (open) next.delete(n);
      else next.add(n);
      return next;
    });
  }, []);

  /* Which stage the reader is in. The rail is a position report, so it follows
     the scroll rather than the click, and a click is only a shortcut to a
     place the same report will then describe. */
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
                  /* A stage the reader asked for opens on the way. Landing on
                     a folded head would answer the question with its title. */
                  onClick={() => setOpen(s.n, true)}
                >
                  <span className="rail__n">{s.n}</span>
                  <span className="rail__stage">{s.stage ?? s.title}</span>
                </a>
              </li>
            ))}
          </ol>
          <button
            type="button"
            className="rail__fold"
            onClick={() =>
              setClosed(allClosed ? new Set() : new Set(items.map((s) => s.n)))
            }
          >
            {allClosed ? "Expand all" : "Collapse all"}
          </button>
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
              <details
                className="stage__fold"
                open={!closed.has(s.n)}
                onToggle={(event) => setOpen(s.n, event.currentTarget.open)}
              >
                <summary className="stage__head">
                  <span className="stage__n">{s.n}</span>
                  <h3 className="stage__title">{s.title}</h3>
                  {s.flow && (
                    <span className="stage__flow">
                      <span className="flow__end">{s.flow.from}</span>
                      <span className="flow__arrow" aria-hidden="true">
                        →
                      </span>
                      <span className="flow__end">{s.flow.to}</span>
                    </span>
                  )}
                </summary>

                <div className="stage__panel">
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
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </Lane>
  );
}
