import { useId } from "react";

import { useReveal } from "./Reveal";
import { useTilt } from "./motion";
import { Lane } from "./Wall";

type Station = { title: string; body: string; label?: string };

/**
 * A cycle as a ring. The stations sit on a circle, set in perspective
 * and tilting toward the cursor; the connectors between them are arcs
 * that draw themselves the first time the ring is seen, then keep a slow
 * flow of dashes running the way the loop runs. Each edge carries its
 * label on the arc. The centre names what the loop is for.
 *
 * Geometry is computed once per station count, so three and four
 * stations both close the ring.
 */
export function Loop({ stations, edges, centre, caption }: { stations: Station[]; edges: { label: string }[]; centre?: string; caption?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const tilt = useTilt<HTMLDivElement>(5);
  const head = useId();
  const n = stations.length;
  const R = 50;
  const C = 50;
  // stations sit a little inside the ring on the horizontal axis, so the
  // side cards keep clear of the viewport edge on a narrow desktop
  const pos = (i: number) => {
    const a = -Math.PI / 2 + (i / n) * Math.PI * 2;
    return { x: C + Math.cos(a) * R * 0.88, y: C + Math.sin(a) * R, a };
  };
  // the arc from station i to the next: a sweep on the same circle, trimmed
  // so it starts and ends outside each card
  const gap = (Math.PI * 2) / n * 0.3;
  const r = R * 0.82;
  const span = (i: number) => {
    const a0 = pos(i).a + gap;
    const a1 = pos((i + 1) % n).a - gap + (i + 1 === n ? Math.PI * 2 : 0);
    return { a0, a1 };
  };
  const arc = (i: number) => {
    const { a0, a1 } = span(i);
    const p0 = { x: C + Math.cos(a0) * r, y: C + Math.sin(a0) * r };
    const p1 = { x: C + Math.cos(a1) * r, y: C + Math.sin(a1) * r };
    return `M${p0.x.toFixed(2)} ${p0.y.toFixed(2)} A${r} ${r} 0 0 1 ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`;
  };
  // the label sits level, just outside the midpoint of its arc, as HTML so
  // it stays crisp inside the tilted layer
  const mid = (i: number) => {
    const { a0, a1 } = span(i);
    const a = (a0 + a1) / 2;
    const rr = r + 6;
    return { x: C + Math.cos(a) * rr, y: C + Math.sin(a) * rr, side: Math.cos(a) > 0.3 ? "right" : Math.cos(a) < -0.3 ? "left" : "mid" };
  };
  return (
    <Lane width="wall">
      <div ref={ref} className={shown ? "loop is-shown" : "loop"}>
        <div ref={tilt} className="loop__ring" >
          <svg className="loop__arcs" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id={head} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                <path className="loop__head" d="M0 0 L10 5 L0 10 z" />
              </marker>
            </defs>
            <circle className="loop__orbit" cx={C} cy={C} r={R * 0.82} />
            {edges.map((_, i) => (
              <g key={i} className="loop__edge" style={{ "--d": `${400 + i * 500}ms` } as React.CSSProperties}>
                <path className="loop__draw" d={arc(i)} markerEnd={`url(#${head})`} />
                <path className="loop__dash" d={arc(i)} />
              </g>
            ))}
          </svg>
          {edges.map((e, i) => {
            const m = mid(i);
            return (
              <span key={i} className={`loop__label loop__label--${m.side}`} style={{ left: `${m.x}%`, top: `${m.y}%`, transitionDelay: `${1300 + i * 500}ms` }} aria-hidden="true">
                {e.label}
              </span>
            );
          })}
          {centre && <p className="loop__centre">{centre}</p>}
          {stations.map((s, i) => {
            const p = pos(i);
            return (
              <article
                key={i}
                className="loop__station"
                style={{ left: `${p.x}%`, top: `${p.y}%`, transitionDelay: `${i * 160}ms` } as React.CSSProperties}
              >
                {s.label && <span className="loop__n">{s.label}</span>}
                <h3 className="loop__title">{s.title}</h3>
                <p className="loop__body">{s.body}</p>
                {/* on a phone the ring is a stack, and the hop between cards names the edge */}
                {edges[i] && <span className="loop__hop">{edges[i].label} <span aria-hidden="true">↓</span></span>}
              </article>
            );
          })}
        </div>
        {caption && <p className="loop__caption">{caption}</p>}
      </div>
    </Lane>
  );
}
