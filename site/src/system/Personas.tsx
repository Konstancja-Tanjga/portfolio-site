import type { Persona } from "../content/types";
import { Lane } from "./Wall";

/**
 * Four jobs against one product. Every card fills the same slots, so
 * the set can be read across as well as down.
 */
export function Personas({ items, standfirst }: { items: Persona[]; standfirst?: string }) {
  return (
    <Lane width="wall">
      {standfirst && <p className="standfirst">{standfirst}</p>}
      <div className="personas">
        {items.map((p) => (
          <article className="persona" key={p.n}>
            <header className="persona__head">
              <span className="persona__n">{p.n}</span>
              <h3 className="persona__name">{p.name}</h3>
              <p className="persona__badge">{p.badge}</p>
            </header>
            <blockquote className="persona__quote">{p.quote}</blockquote>
            <Field label="Context">{p.context}</Field>
            <Field label="Goals">
              <ul>
                {p.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </Field>
            <Field label="Where it breaks today">{p.breaks}</Field>
            <Field label="So the product must" strong>
              {p.must}
            </Field>
            {p.job && <p className="persona__job">{p.job}</p>}
          </article>
        ))}
      </div>
    </Lane>
  );
}

function Field({
  label,
  children,
  strong,
}: {
  label: string;
  children: React.ReactNode;
  strong?: boolean;
}) {
  return (
    <div className={strong ? "field field--strong" : "field"}>
      <p className="field__label">{label}</p>
      <div className="field__body">{children}</div>
    </div>
  );
}
