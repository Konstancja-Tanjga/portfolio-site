import type { Step } from "../content/types";
import { Lane } from "./Wall";

/**
 * A numbered flow where each stage carries two things: the rule it
 * sets, and why that rule is not decoration. The second half is the
 * one that does the work in an interview.
 */
export function Steps({ items, standfirst }: { items: Step[]; standfirst?: string }) {
  return (
    <Lane width="wall">
      {standfirst && <p className="standfirst">{standfirst}</p>}
      <ol className="steps">
        {items.map((s) => (
          <li className="step" key={s.n}>
            <span className="step__n">{s.n}</span>
            <h3 className="step__title">{s.title}</h3>
            <div className="step__half">
              <p className="field__label">{s.rule.label}</p>
              <p>{s.rule.body}</p>
            </div>
            <div className="step__half step__half--why">
              <p className="field__label">{s.why.label}</p>
              <p>{s.why.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Lane>
  );
}
