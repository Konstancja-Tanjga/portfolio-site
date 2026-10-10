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
export function Points({ items }: { items: string[] }) {
  const { ref, shown } = useReveal<HTMLUListElement>();
  return (
    <Lane width="wall" className="passage passage--points">
      <ul ref={ref} className={shown ? "points is-shown" : "points"}>
        {items.map((item, i) => (
          <li key={item} style={{ transitionDelay: `${i * 90}ms` }} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
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
