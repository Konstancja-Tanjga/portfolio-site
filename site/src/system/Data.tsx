import { useEffect, useState } from "react";

import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * A figure that counts up from zero the first time it scrolls into view.
 *
 * Only the leading number moves; a prefix, a suffix or a unit around it
 * ("~80", "12 of 13", "22%") is printed as written. A value with no number
 * in it is printed as is. Under prefers-reduced-motion the final value
 * is shown at once.
 */
export function Counter({ value, run }: { value: string; run: boolean }) {
  const match = value.match(/^(\D*?)(\d[\d\s,.]*)(.*)$/);
  const target = match ? parseFloat(match[2].replace(/[\s,]/g, "")) : NaN;
  const decimals = match && match[2].includes(".") ? match[2].split(".")[1].length : 0;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run || !match || Number.isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    const start = performance.now();
    const duration = 900;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(target * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // `match` is derived from `value`; the array identity changes every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run, target, value]);

  if (!match || Number.isNaN(target)) return <>{value}</>;
  return (
    <>
      {match[1]}
      {(run ? n : 0).toFixed(decimals)}
      {match[3]}
    </>
  );
}

/** The numbers row. Nothing here that isn't a real figure. */
export function Stats({ items }: { items: { value: string; label: string }[] }) {
  const { ref, shown } = useReveal<HTMLDListElement>();
  return (
    <Lane width="wall">
      <dl ref={ref} className={shown ? "stats is-shown" : "stats"}>
        {items.map((item) => (
          <div className="stats__item" key={item.label}>
            <dt className="stats__value">
              <Counter value={item.value} run={shown} />
            </dt>
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
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <Lane width="wall">
      <div ref={ref} className={shown ? "spec is-shown" : "spec"}>
        {rows.map((row, i) => (
          <div className="spec__row" key={row.key} style={{ transitionDelay: `${i * 70}ms` }}>
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
export function MetaStrip({ items }: { items: { label: string; value: string; href?: string }[] }) {
  return (
    <Lane width="wall">
      <dl className="meta">
        {items.map((item) => (
          <div className="meta__item" key={item.label}>
            <dt>{item.label}</dt>
            <dd>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Lane>
  );
}
