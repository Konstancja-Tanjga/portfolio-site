import { CATEGORIES, REVENUE_2024, REVENUE_2025 } from "./data";

export type ChartKind = "bar" | "line" | "area";

/**
 * Revenue 2024 against 2025 by category, drawn in SVG. The kind switches
 * live from the side sheet, which is the point of the second clip: the
 * body reacts while the sheet stays open.
 */
export function Chart({ kind, grouping, height = 320 }: { kind: ChartKind; grouping: "category" | "year"; height?: number }) {
  const W = 760;
  const H = height;
  const pad = { l: 44, r: 16, t: 20, b: 36 };
  const max = 20;
  const iw = W - pad.l - pad.r;
  const ih = H - pad.t - pad.b;
  const n = CATEGORIES.length;
  const x = (i: number) => pad.l + (i + 0.5) * (iw / n);
  const y = (v: number) => pad.t + ih - (v / max) * ih;
  const series = grouping === "category" ? [REVENUE_2024, REVENUE_2025] : [REVENUE_2024.map((a, i) => (a + REVENUE_2025[i]) / 2)];
  const colours = ["var(--p-blue)", "var(--p-green)"];
  const path = (vals: number[]) => vals.map((v, i) => `${i ? "L" : "M"}${x(i)} ${y(v)}`).join(" ");
  return (
    <svg className="p-chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Revenue by ${grouping}, ${kind} chart`}>
      {[0, 5, 10, 15, 20].map((v) => (
        <g key={v}>
          <line x1={pad.l} x2={W - pad.r} y1={y(v)} y2={y(v)} className="p-chart__grid" />
          <text x={pad.l - 8} y={y(v) + 4} textAnchor="end" className="p-chart__tick">{v}</text>
        </g>
      ))}
      {CATEGORIES.map((c, i) => (
        <text key={c} x={x(i)} y={H - 12} textAnchor="middle" className="p-chart__tick">{c}</text>
      ))}
      {series.map((vals, s) => {
        if (kind === "bar") {
          const bw = (iw / n) * (series.length === 1 ? 0.5 : 0.3);
          return vals.map((v, i) => (
            <rect
              key={`${s}-${i}`}
              className="p-chart__bar"
              x={x(i) - bw * series.length * 0.5 + s * bw}
              y={y(v)}
              width={bw - 4}
              height={ih - (y(v) - pad.t)}
              rx="3"
              fill={colours[s]}
            />
          ));
        }
        return (
          <g key={s}>
            {kind === "area" && (
              <path className="p-chart__area" d={`${path(vals)} L${x(n - 1)} ${y(0)} L${x(0)} ${y(0)} Z`} fill={colours[s]} opacity="0.18" />
            )}
            <path className="p-chart__line" d={path(vals)} fill="none" stroke={colours[s]} strokeWidth="2.5" />
            {vals.map((v, i) => (
              <circle key={i} cx={x(i)} cy={y(v)} r="4" fill="var(--p-paper)" stroke={colours[s]} strokeWidth="2" />
            ))}
          </g>
        );
      })}
      {grouping === "category" && (
        <g className="p-chart__legend" transform={`translate(${pad.l} ${pad.t - 8})`}>
          <rect width="10" height="10" rx="2" fill={colours[0]} /><text x="14" y="9" className="p-chart__tick">2024</text>
          <rect x="54" width="10" height="10" rx="2" fill={colours[1]} /><text x="68" y="9" className="p-chart__tick">2025</text>
        </g>
      )}
    </svg>
  );
}

export function Pivot() {
  return (
    <table className="p-pivot">
      <thead>
        <tr>
          <th rowSpan={2}>Category</th>
          <th colSpan={2}>2024</th>
          <th colSpan={2}>2025</th>
          <th rowSpan={2}>Delta</th>
        </tr>
        <tr><th>Revenue</th><th>Orders</th><th>Revenue</th><th>Orders</th></tr>
      </thead>
      <tbody>
        {CATEGORIES.map((c, i) => (
          <tr key={c}>
            <td>{c}</td>
            <td>{REVENUE_2024[i].toFixed(1)} M€</td>
            <td>{Math.round(REVENUE_2024[i] * 37)}</td>
            <td>{REVENUE_2025[i].toFixed(1)} M€</td>
            <td>{Math.round(REVENUE_2025[i] * 34)}</td>
            <td className={REVENUE_2025[i] >= REVENUE_2024[i] ? "is-up" : "is-down"}>
              {(((REVENUE_2025[i] - REVENUE_2024[i]) / REVENUE_2024[i]) * 100).toFixed(1)}%
            </td>
          </tr>
        ))}
        <tr className="p-pivot__total">
          <td>Total</td>
          <td>{REVENUE_2024.reduce((a, b) => a + b, 0).toFixed(1)} M€</td>
          <td>{Math.round(REVENUE_2024.reduce((a, b) => a + b, 0) * 37)}</td>
          <td>{REVENUE_2025.reduce((a, b) => a + b, 0).toFixed(1)} M€</td>
          <td>{Math.round(REVENUE_2025.reduce((a, b) => a + b, 0) * 34)}</td>
          <td />
        </tr>
      </tbody>
    </table>
  );
}
