import { Badge } from "@bighatpoland/ui";

import type { Annotated as AnnotatedData } from "../content/types";
import { Lane } from "./Wall";

/**
 * A screen with the reasoning drawn on it — zone map, legend, the
 * guardrails, and the surface rules (R1…Rn) it demonstrates.
 *
 * This is the block that separates a portfolio from a gallery: the
 * image shows what it looks like, the annotation shows what it obeys.
 */
export function AnnotatedSet({ items }: { items: AnnotatedData[] }) {
  return (
    <>
      {items.map((a, i) => (
        <Lane width="wall" key={a.id ?? i}>
          <section className="anno">
            {(a.id || a.title) && (
              <header className="anno__head">
                {a.id && <span className="anno__id">{a.id}</span>}
                {a.title && <h3 className="anno__title">{a.title}</h3>}
              </header>
            )}
            {a.standfirst && <p className="anno__standfirst">{a.standfirst}</p>}

            <figure className="shot">
              {a.shot.src ? (
                <img className="shot__img" src={a.shot.src} alt={a.shot.caption ?? ""} loading="lazy" />
              ) : (
                <div className="shot__slot">
                  <span>{a.shot.slot ?? "annotated screen"}</span>
                </div>
              )}
              {a.shot.caption && <figcaption className="shot__caption">{a.shot.caption}</figcaption>}
            </figure>

            {(a.legend || a.notes || a.rules) && (
              <div className="anno__apparatus">
                {a.legend && (
                  <div className="anno__legend">
                    <p className="field__label">Colour code</p>
                    <ul>
                      {a.legend.map((l) => (
                        <li key={l.label}>
                          <span
                            className="anno__swatch"
                            style={l.swatch ? { background: l.swatch } : undefined}
                            aria-hidden="true"
                          />
                          {l.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {a.notes?.map((n) => (
                  <div key={n.label}>
                    <p className="field__label">{n.label}</p>
                    <p>{n.body}</p>
                  </div>
                ))}
                {a.rules && (
                  <div className="anno__rules">
                    <p className="field__label">Surface rules</p>
                    <ul>
                      {a.rules.map((r) => (
                        <li key={r.id}>
                          <Badge tone="info">{r.id}</Badge>
                          {r.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </section>
        </Lane>
      ))}
    </>
  );
}
