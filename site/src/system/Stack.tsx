import type { StackRow } from "../content/types";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * The stack, assembling itself.
 *
 * Same data a Spec would carry, but the order is the argument: this is a
 * pipeline read top to bottom, so the rows arrive in sequence rather than all
 * at once, and the ones that are mine rather than the documented workflow's
 * announce themselves a beat after the row they belong to.
 *
 * The animation is an enhancement, not the content — useReveal hands back
 * `shown: true` immediately under prefers-reduced-motion or with no
 * IntersectionObserver, and the rows are legible with no animation at all.
 */
export function Stack({ rows, caption }: { rows: StackRow[]; caption?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <Lane width="column">
      <div ref={ref} className={shown ? "stack is-running" : "stack"}>
        {rows.map((row, i) => (
          <div
            className={row.mine ? "stack__row stack__row--mine" : "stack__row"}
            key={row.key}
            /* One beat per row, so the eye follows the order the pipeline
               actually runs in rather than picking a row at random. */
            style={{ "--stack-delay": `${i * 90}ms` } as React.CSSProperties}
          >
            <span className="stack__key">{row.key}</span>
            <span className="stack__value">{row.value}</span>
            {row.mine && (
              <span className="stack__mark" aria-label="my addition to the documented workflow">
                mine
              </span>
            )}
          </div>
        ))}
      </div>
      {caption && <p className="stack__caption">{caption}</p>}
    </Lane>
  );
}
