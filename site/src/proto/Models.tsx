import { useRef, useState } from "react";
import { Badge, Button, SidePanel, useToast } from "@bighatpoland/ui";

import { QUERIES, type Query } from "./data";

type Port = { q: string; col: string; type: Query["columns"][number]["type"] };
type Join = { from: Port; to: Port; kind: "INNER" | "LEFT" };

/**
 * The data-model canvas: two query tiles with typed columns; a relationship
 * is dragged from a column port to another. A STRING to a FLOAT is refused
 * at the endpoint; a matching type draws the join as an object that states
 * its direction and type, and lists it in the panel.
 */
export function Models() {
  const [joins, setJoins] = useState<Join[]>([]);
  const [drag, setDrag] = useState<null | { from: Port; x: number; y: number; over?: Port | null; ok?: boolean }>(null);
  const canvas = useRef<HTMLDivElement | null>(null);
  const ports = useRef(new Map<string, HTMLElement>());
  const { notify } = useToast();
  const tiles = [QUERIES[1], QUERIES[2]];
  const key = (p: Port) => `${p.q}.${p.col}`;

  const at = (p: Port) => {
    const el = ports.current.get(key(p));
    const c = canvas.current;
    if (!el || !c) return { x: 0, y: 0 };
    const r = el.getBoundingClientRect();
    const cr = c.getBoundingClientRect();
    return { x: r.left + r.width / 2 - cr.left, y: r.top + r.height / 2 - cr.top };
  };
  const compatible = (a: Port, b: Port) => a.q !== b.q && a.type === b.type;

  const start = (p: Port) => (e: React.PointerEvent) => {
    e.preventDefault();
    const c = canvas.current!.getBoundingClientRect();
    setDrag({ from: p, x: e.clientX - c.left, y: e.clientY - c.top });
  };
  const move = (e: React.PointerEvent) => {
    if (!drag) return;
    const c = canvas.current!.getBoundingClientRect();
    const el = document.elementFromPoint(e.clientX, e.clientY)?.closest("[data-port]") as HTMLElement | null;
    let over: Port | null = null;
    if (el) {
      const [q, col, type] = el.dataset.port!.split("|");
      over = { q, col, type: type as Port["type"] };
    }
    setDrag({ ...drag, x: e.clientX - c.left, y: e.clientY - c.top, over, ok: over ? compatible(drag.from, over) : undefined });
  };
  const end = () => {
    if (!drag) return;
    if (drag.over && drag.ok) {
      setJoins((j) => [...j, { from: drag.from, to: drag.over!, kind: "INNER" }]);
      notify({ tone: "success", title: "Relationship added", description: `${drag.from.col} → ${drag.over.col}, INNER`, duration: 1800 });
    } else if (drag.over && drag.ok === false) {
      notify({ tone: "warning", title: "Types do not match", description: `${drag.from.type} cannot join ${drag.over.type}`, duration: 2200 });
    }
    setDrag(null);
  };

  return (
    <div className="p-page">
      <ol className="p-gates" aria-label="Steps">
        {["Select query", "Define relationships", "Validate model", "Publish"].map((g, i) => (
          <li key={g} className={i === 1 ? "is-current" : i < 1 ? "is-done" : ""}>{g}</li>
        ))}
      </ol>
      <div className="p-work p-work--sheet">
        <div ref={canvas} className="p-canvas" onPointerMove={move} onPointerUp={end} onPointerLeave={end} data-test="canvas">
          <svg className="p-canvas__wires" aria-hidden="true">
            {joins.map((j, i) => {
              const a = at(j.from), b = at(j.to);
              const mx = (a.x + b.x) / 2;
              return (
                <g key={i} className="p-wire">
                  <path d={`M${a.x} ${a.y} C${mx} ${a.y} ${mx} ${b.y} ${b.x} ${b.y}`} />
                  <circle cx={b.x} cy={b.y} r="5" />
                  <g transform={`translate(${mx} ${(a.y + b.y) / 2})`}>
                    <rect x="-34" y="-11" width="68" height="22" rx="11" />
                    <text textAnchor="middle" y="4">{j.kind} →</text>
                  </g>
                </g>
              );
            })}
            {drag && (() => {
              const a = at(drag.from);
              const cls = drag.over ? (drag.ok ? "p-wire p-wire--ok" : "p-wire p-wire--bad") : "p-wire p-wire--live";
              return (
                <g className={cls}>
                  <path d={`M${a.x} ${a.y} C${(a.x + drag.x) / 2} ${a.y} ${(a.x + drag.x) / 2} ${drag.y} ${drag.x} ${drag.y}`} />
                  {drag.over && drag.ok === false && <text x={drag.x + 10} y={drag.y - 10}>{drag.from.type} ≠ {drag.over.type}</text>}
                </g>
              );
            })()}
          </svg>
          {tiles.map((t, ti) => (
            <div key={t.id} className="p-tile" style={{ left: ti === 0 ? "8%" : "56%", top: ti === 0 ? "10%" : "28%" }} data-test={`tile-${t.id}`}>
              <header className="p-tile__head">
                <strong>{t.name}</strong>
                <Badge>{t.source}</Badge>
              </header>
              <ul className="p-tile__cols">
                {t.columns.map((c) => {
                  const p: Port = { q: t.id, col: c.name, type: c.type };
                  const k = key(p);
                  const isOver = drag?.over && key(drag.over) === k;
                  return (
                    <li key={c.name} className={isOver ? (drag!.ok ? "is-ok" : "is-bad") : ""}>
                      <span className="p-tile__name">{c.name}</span>
                      <span className="p-tile__type">{c.type}</span>
                      <button
                        type="button"
                        className="p-port bh-focusable"
                        data-port={`${t.id}|${c.name}|${c.type}`}
                        data-test={`port-${t.id}-${c.name}`}
                        aria-label={`Connect ${c.name}`}
                        ref={(el) => { if (el) ports.current.set(k, el); }}
                        onPointerDown={start(p)}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <SidePanel side="end" ariaLabel="Relationships" title="Relationships" width={300}>
          <div className="p-form" data-test="relationships">
            {joins.length === 0 ? (
              <p className="p-muted p-small">Drag from a column to a column of the same type.</p>
            ) : (
              <ul className="p-rels">
                {joins.map((j, i) => (
                  <li key={i}>
                    <span>{j.from.col} → {j.to.col}</span>
                    <select className="p-rels__kind bh-focusable" aria-label="Join type" value={j.kind} onChange={(e) => setJoins((all) => all.map((x, k) => (k === i ? { ...x, kind: e.target.value as Join["kind"] } : x)))}>
                      <option>INNER</option><option>LEFT</option>
                    </select>
                  </li>
                ))}
              </ul>
            )}
            <Button size="sm" variant="secondary" disabled={joins.length === 0}>Validate model</Button>
          </div>
        </SidePanel>
      </div>
    </div>
  );
}
