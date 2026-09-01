import { Lane } from "./Wall";

/** The numbers row. Nothing here that isn't a real figure. */
export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <Lane width="wall">
      <dl className="stats">
        {items.map((item) => (
          <div className="stats__item" key={item.label}>
            <dt className="stats__value">{item.value}</dt>
            <dd className="stats__label">{item.label}</dd>
          </div>
        ))}
      </dl>
    </Lane>
  );
}

/**
 * Key/value in mono. Token tables, component APIs, permission
 * matrices — the things a picture can't carry.
 */
export function Spec({
  rows,
  caption,
}: {
  rows: { key: string; value: string }[];
  caption?: string;
}) {
  return (
    <Lane width="column">
      <div className="spec">
        {rows.map((row) => (
          <div className="spec__row" key={row.key}>
            <span className="spec__key">{row.key}</span>
            <span className="spec__value">{row.value}</span>
          </div>
        ))}
      </div>
      {caption && <p className="spec__caption">{caption}</p>}
    </Lane>
  );
}

/** The strip under a project title. */
export function MetaStrip({ items }: { items: { label: string; value: string }[] }) {
  return (
    <Lane width="wall">
      <dl className="meta">
        {items.map((item) => (
          <div className="meta__item" key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </Lane>
  );
}
