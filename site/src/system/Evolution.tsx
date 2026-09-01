import type { Version } from "../content/types";
import { Lane } from "./Wall";

/**
 * How the design system moved, version by version, on the only axis
 * that matters: where the source of truth lives, how a change ships,
 * and what that costs.
 */
export function Evolution({ items }: { items: Version[] }) {
  return (
    <Lane width="wall">
      <ol className="evo">
        {items.map((v) => (
          <li className="evo__step" key={v.version}>
            <p className="evo__version">{v.version}</p>
            <h3 className="evo__claim">{v.claim}</h3>
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
          </li>
        ))}
      </ol>
    </Lane>
  );
}
