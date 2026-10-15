import { useId, useState } from "react";
import type { ReactNode } from "react";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/** Prose at reading measure. */
export function Passage({ html }: { html: string }) {
  return (
    <Lane width="column" className="passage">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Lane>
  );
}

/** Bullets that arrive one after another the first time they are seen. */
export function Points({ items, fold }: { items: string[]; fold?: string }) {
  const { ref, shown } = useReveal<HTMLUListElement>();
  const [open, setOpen] = useState(false);
  const id = useId();
  // A folded list is revealed by its drawer, not by scrolling into view.
  const list = (
    <ul ref={fold ? undefined : ref} className={shown || fold ? "points is-shown" : "points"}>
      {items.map((item, i) => (
        <li key={item} style={{ transitionDelay: `${i * 90}ms` }} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </ul>
  );
  if (fold) {
    // The drawer a folded Shot uses, so a reader learns one control.
    return (
      <Lane width="wall">
        <div className={["drawer drawer--text is-shown", open ? "is-open" : ""].join(" ")}>
          <button type="button" className="drawer__head" aria-expanded={open} aria-controls={`${id}-body`} onClick={() => setOpen((v) => !v)}>
            <span className="drawer__title">{fold}</span>
            <span className="drawer__hint" aria-hidden="true">{open ? "Close" : `Open the list (${items.length})`}</span>
            <span className="drawer__chevron" aria-hidden="true" />
          </button>
          <div id={`${id}-body`} className="drawer__body passage passage--points" hidden={!open}>
            {list}
          </div>
        </div>
      </Lane>
    );
  }
  return (
    <Lane width="wall" className="passage passage--points">
      {list}
    </Lane>
  );
}

/** One sentence, set large. Once per wall, twice at the outside. */
export function Pull({ text }: { text: string }) {
  return (
    <Lane width="column">
      <p className="pull">{text}</p>
    </Lane>
  );
}

/** A claim the wall is built to prove, on the yellow field. */
export function Thesis({ label, text }: { label?: string; text: string }) {
  return (
    <Lane width="wall">
      <aside className="thesis">
        {label && <p className="kicker">{label}</p>}
        <p className="thesis__text">{text}</p>
      </aside>
    </Lane>
  );
}

/** Tracked caps. The wall's smallest voice. */
export function Kicker({ children }: { children: ReactNode }) {
  return <p className="kicker">{children}</p>;
}
