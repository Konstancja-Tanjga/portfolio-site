import { useEffect, useState } from "react";

import type { Process } from "../content/types";
import { focusStages, subscribeToStages } from "./pipelineFocus";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * The board: eight stages from idea to published prototype.
 *
 * It used to be a PNG export of a Figma frame. That cost more than the
 * resolution: a picture of a diagram cannot be searched, selected, translated,
 * read aloud, or pointed at — and pointing at it is the point, because every
 * stage here is governed by one of the rules below, and until now the reader
 * had to hold the mapping in their head.
 *
 * Drawn in text and boxes rather than in SVG, because it *is* text and boxes.
 * An SVG would have made the stages targetable and kept every other problem:
 * type that does not reflow, copy that cannot be copied, and a second place to
 * maintain the words.
 */
export function ProcessBoard({ process }: { process: Process }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const [lit, setLit] = useState<readonly string[]>([]);

  useEffect(() => subscribeToStages(setLit), []);

  const stageClass = (n: string) =>
    lit.includes(n) ? "process__stage is-lit" : "process__stage";

  return (
    <Lane width="wall">
      <div ref={ref} className={shown ? "process is-running" : "process"}>
        <header className="process__head">
          <p className="process__label">{process.label}</p>
          <p className="process__count">{process.count}</p>
        </header>

        <ol className="process__stages">
          {process.stages.map((stage) => (
            <li key={stage.n} id={`process-${stage.n}`} className={stageClass(stage.n)}>
              <p className="process__n">{stage.n}</p>
              <h4 className="process__title">{stage.title}</h4>
              {stage.kicker && <p className="process__kicker">{stage.kicker}</p>}
              <p className="process__body">{stage.body}</p>
              {stage.note && (
                <div className="process__note">
                  <p className="process__kicker">{stage.note.label}</p>
                  <p className="process__body">{stage.note.body}</p>
                </div>
              )}
            </li>
          ))}
        </ol>

        {process.underneath && (
          <footer
            id="process-skills"
            className={lit.includes("skills") ? "process__under is-lit" : "process__under"}
            /* The footer is a stage in everything but position: it runs beside
               all eight rather than after them, so it lights like one. */
            onMouseEnter={() => focusStages(["skills"])}
            onMouseLeave={() => focusStages([])}
          >
            <div>
              <p className="process__label">{process.underneath.label}</p>
              {process.underneath.kicker && (
                <p className="process__kicker">{process.underneath.kicker}</p>
              )}
            </div>
            <div>
              <p className="process__chips">
                {process.underneath.chips.map((chip) => (
                  <span key={chip} className="process__chip">
                    {chip}
                  </span>
                ))}
              </p>
              <p className="process__body">{process.underneath.body}</p>
            </div>
          </footer>
        )}
      </div>
    </Lane>
  );
}
