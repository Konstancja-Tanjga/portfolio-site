import { useId, useState, type KeyboardEvent, type ReactNode } from "react";

import type { Block } from "../content/types";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * Peer content behind one row of tabs. Four screens of a sign-off stacked
 * one under the other are four screens of scroll; behind tabs they are one,
 * and the reader picks. Only for content of equal rank: the chapters of the
 * story stay in the scroll, because a tab hides what is not chosen.
 *
 * `render` is the wall's own block renderer, passed in so this file does
 * not depend on the mapping. The panel is keyed by its tab, so a clip
 * starts from its first frame each time it is chosen.
 */
export function Tabs({
  label,
  items,
  render,
}: {
  label: string;
  items: { label: string; blocks: Block[] }[];
  render: (b: Block) => ReactNode;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const [current, setCurrent] = useState(0);
  const id = useId();

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = items.length;
    const next = e.key === "ArrowRight" ? (i + 1) % n : e.key === "ArrowLeft" ? (i - 1 + n) % n : e.key === "Home" ? 0 : e.key === "End" ? n - 1 : null;
    if (next === null) return;
    e.preventDefault();
    setCurrent(next);
    (e.currentTarget.parentElement?.children[next] as HTMLElement | undefined)?.focus();
  };

  return (
    <Lane width="wall">
      <div ref={ref} className={shown ? "tabs is-shown" : "tabs"}>
        <div className="tabs__list" role="tablist" aria-label={label}>
          {items.map((t, i) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={i === current}
              aria-controls={`${id}-panel`}
              tabIndex={i === current ? 0 : -1}
              className="tabs__tab"
              onClick={() => setCurrent(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className="tabs__n">{String(i + 1).padStart(2, "0")}</span>
              <span className="tabs__label">{t.label}</span>
            </button>
          ))}
        </div>
        <div
          key={items[current].label}
          role="tabpanel"
          id={`${id}-panel`}
          aria-labelledby={`${id}-tab-${current}`}
          className="tabs__panel"
        >
          {items[current].blocks.map((b, i) => (
            <div key={i} className="tabs__block">{render(b)}</div>
          ))}
        </div>
      </div>
    </Lane>
  );
}
