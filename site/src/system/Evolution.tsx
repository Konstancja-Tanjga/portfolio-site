import { useId, useState } from "react";

import type { Version } from "../content/types";
import { Lane } from "./Wall";

/**
 * How a design system changed hands, one version at a time.
 *
 * A row of tabs carries the versions and their claims ("The file is the
 * system"), and only the selected one shows its detail: the source of
 * truth, how a change ships, what it costs. The claims are the argument;
 * the detail is there for the reader who wants it. Arrow keys move
 * between tabs, and the panel is always in the document for a screen
 * reader and a search engine.
 */
export function Evolution({ items }: { items: Version[] }) {
  const [current, setCurrent] = useState(items.length - 1);
  const id = useId();

  const onKey = (e: React.KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = items.length;
    const next = e.key === "ArrowRight" ? (i + 1) % n : e.key === "ArrowLeft" ? (i - 1 + n) % n : null;
    if (next === null) return;
    e.preventDefault();
    setCurrent(next);
    (e.currentTarget.parentElement?.children[next] as HTMLElement | undefined)?.focus();
  };

  return (
    <Lane width="wall">
      <div className="evo">
        <div className="evo__tabs" role="tablist" aria-label="Versions of the design system">
          {items.map((v, i) => (
            <button
              key={v.version}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={i === current}
              aria-controls={`${id}-panel-${i}`}
              tabIndex={i === current ? 0 : -1}
              className="evo__tab"
              onClick={() => setCurrent(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className="evo__version">{v.version}</span>
              <span className="evo__claim">{v.claim}</span>
            </button>
          ))}
        </div>
        {items.map((v, i) => (
          <div
            key={v.version}
            role="tabpanel"
            id={`${id}-panel-${i}`}
            aria-labelledby={`${id}-tab-${i}`}
            hidden={i !== current}
            className="evo__panel"
          >
            <dl className="evo__grid">
              <div>
                <dt className="field__label">Source of truth</dt>
                <dd>{v.sourceOfTruth}</dd>
              </div>
              <div>
                <dt className="field__label">How a change ships</dt>
                <dd>{v.ships}</dd>
              </div>
              <div>
                <dt className="field__label">What it costs</dt>
                <dd>{v.costs}</dd>
              </div>
            </dl>
            {v.moved && <p className="evo__moved">{v.moved}</p>}
          </div>
        ))}
      </div>
    </Lane>
  );
}
