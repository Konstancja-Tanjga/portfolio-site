import type { BriefRow } from "../content/types";
import { asset } from "./asset";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * The summary at the top of a wall, across its full width: what a reader
 * with sixty seconds leaves with.
 *
 * Label on the left, text on the right, one row per fact; the decisions
 * sit in a row of their own as cards, because they are what a reader
 * should carry away. A decision that names a screen shows it, and the
 * card links to the chapter where the screen is argued. Rows reveal one
 * after another.
 */
export function Brief({ rows }: { rows: BriefRow[] }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const decisions = rows.filter((r) => /^decision/i.test(r.key));
  const before = rows.slice(0, rows.findIndex((r) => /^decision/i.test(r.key)));
  const after = rows.filter((r) => !/^decision/i.test(r.key) && !before.includes(r));
  let i = 0;
  const row = (r: BriefRow) => (
    <div className="brief__row" key={r.key} style={{ transitionDelay: `${i++ * 80}ms` }}>
      <dt className="brief__key">{r.key}</dt>
      <dd className="brief__value">{r.value}</dd>
    </div>
  );
  return (
    <Lane width="wall">
      <div ref={ref} className={shown ? "brief is-shown" : "brief"}>
        <dl className="brief__rows">{before.map(row)}</dl>
        {decisions.length > 0 && (
          <dl className="brief__decisions">
            {decisions.map((r) => (
              <div className={r.shot ? "brief__decision brief__decision--shot" : "brief__decision"} key={r.key} style={{ transitionDelay: `${i++ * 80}ms` }}>
                {r.shot && (
                  <a className="brief__shot" href={r.shot.to} aria-label={`${r.shot.alt}: see the chapter`}>
                    <img src={asset(r.shot.src)} alt="" loading="lazy" decoding="async" />
                  </a>
                )}
                <dt className="brief__key">{r.key}</dt>
                <dd className="brief__value">{r.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <dl className="brief__rows">{after.map(row)}</dl>
      </div>
    </Lane>
  );
}
