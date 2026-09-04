import type { CSSProperties } from "react";

import type { Step } from "../content/types";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * A numbered flow where each stage carries two things: the rule it
 * sets, and why that rule is not decoration. The second half is the
 * one that does the work in an interview.
 *
 * Seven of those at once reads as a slab, which is the opposite of a
 * flow, so the stages arrive in order — same treatment as Stack, and
 * for the same reason: the sequence is the argument. The rule above
 * each stage draws itself as the stage lands.
 *
 * Animation only; useReveal hands back `shown: true` immediately under
 * prefers-reduced-motion or without an IntersectionObserver, and the
 * list is complete and legible with none of it running.
 */
export function Steps({ items, standfirst }: { items: Step[]; standfirst?: string }) {
  const { ref, shown } = useReveal<HTMLOListElement>();

  return (
    <Lane width="wall">
      {standfirst && <p className="standfirst">{standfirst}</p>}
      <ol ref={ref} className={shown ? "steps is-running" : "steps"}>
        {items.map((s, i) => (
          <li
            className="step"
            key={s.n}
            style={{ "--step-delay": `${i * 110}ms` } as CSSProperties}
          >
            <span className="step__n">{s.n}</span>
            <h3 className="step__title">{s.title}</h3>
            <div className="step__half">
              <p className="field__label">{s.rule.label}</p>
              <p>{s.rule.body}</p>
            </div>
            {s.why && (
              <div className="step__half step__half--why">
                <p className="field__label">{s.why.label}</p>
                <p>{s.why.body}</p>
              </div>
            )}
          </li>
        ))}
      </ol>
    </Lane>
  );
}
