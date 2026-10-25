import { useId, useState, type ReactNode } from "react";

import type { Block } from "../content/types";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * Material a first reading can skip, closed under one title. The same
 * drawer a folded shot or list uses, so a reader learns one control and
 * finds it everywhere: the title says what is inside, the hint says how
 * much, and the chevron says it opens.
 */
export function Fold({
  title,
  hint,
  blocks,
  render,
}: {
  title: string;
  hint?: string;
  blocks: Block[];
  render: (b: Block) => ReactNode;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <Lane width="wall">
      <div ref={ref} className={["drawer drawer--text drawer--fold", shown && "is-shown", open && "is-open"].filter(Boolean).join(" ")}>
        <button type="button" className="drawer__head" aria-expanded={open} aria-controls={`${id}-body`} onClick={() => setOpen((v) => !v)}>
          <span className="drawer__title">{title}</span>
          <span className="drawer__hint" aria-hidden="true">{open ? "Close" : hint ?? "Open"}</span>
          <span className="drawer__chevron" aria-hidden="true" />
        </button>
        <div id={`${id}-body`} className="drawer__body" hidden={!open}>
          {blocks.map((b, i) => (
            <div key={i} className="drawer__block">{render(b)}</div>
          ))}
        </div>
      </div>
    </Lane>
  );
}
