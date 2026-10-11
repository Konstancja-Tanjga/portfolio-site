import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * Three or four cards in a row, set in perspective: each one a little
 * further back and a little fainter than the one before, so the chain
 * reads as depth as well as order. They arrive one after another; the
 * one under the cursor comes forward.
 */
export function Flow({ stages, note }: { stages: { title: string; body: string }[]; note?: string }) {
  const { ref, shown } = useReveal<HTMLOListElement>();
  return (
    <Lane width="wall">
      <ol ref={ref} className={shown ? "flow is-shown" : "flow"}>
        {stages.map((s, i) => (
          <li className="flow__stage" key={s.title} style={{ "--i": i, transitionDelay: `${i * 140}ms` } as React.CSSProperties}>
            <span className="flow__n">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="flow__title">{s.title}</h3>
            <p className="flow__body">{s.body}</p>
          </li>
        ))}
      </ol>
      {note && <p className="flow__note">{note}</p>}
    </Lane>
  );
}
