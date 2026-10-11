import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * The summary at the top of a wall, across its full width.
 *
 * Label on the left, text on the right, one row per fact; the decisions
 * sit in a row of their own as cards, because they are what a reader
 * should carry away. Rows reveal one after another.
 */
export function Brief({ rows }: { rows: { key: string; value: string }[] }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const decisions = rows.filter((r) => /^decision/i.test(r.key));
  const before = rows.slice(0, rows.findIndex((r) => /^decision/i.test(r.key)));
  const after = rows.filter((r) => !/^decision/i.test(r.key) && !before.includes(r));
  let i = 0;
  const row = (r: { key: string; value: string }) => (
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
              <div className="brief__decision" key={r.key} style={{ transitionDelay: `${i++ * 80}ms` }}>
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
