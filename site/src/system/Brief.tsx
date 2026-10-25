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
  const first = rows.findIndex((r) => /^decision/i.test(r.key));
  const before = first === -1 ? rows : rows.slice(0, first);
  const after = first === -1 ? [] : rows.slice(first).filter((r) => !/^decision/i.test(r.key));
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
                {/* The picture lives in the dt: a dt may hold a link, a
                    dl's group may hold only dt and dd. */}
                <dt className="brief__key">
                  {r.shot && (
                    <a className={r.shot.frame ? "brief__shot brief__shot--macbook" : "brief__shot"} href={r.shot.to} aria-label={`${r.shot.alt}: see the chapter`}>
                      <img src={asset(r.shot.src)} alt="" loading="lazy" decoding="async" />
                    </a>
                  )}
                  {r.key}
                </dt>
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
