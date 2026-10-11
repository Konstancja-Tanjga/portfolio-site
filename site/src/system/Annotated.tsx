import { useId, useState } from "react";
import { Badge } from "@bighatpoland/ui";

import type { Annotated as AnnotatedData } from "../content/types";
import { asset } from "./asset";
import { useTilt } from "./motion";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * A set of annotated screens as a row of folders.
 *
 * Each folder shows its number, its title and a thumbnail of the screen
 * inside, so a reader sees what is there before opening it. One click
 * opens that screen under the row: the full image, its standfirst, the
 * notes and the rules it demonstrates; the same click, or another
 * folder, closes it. Nothing scrolls past unseen, and nothing is hidden
 * from a screen reader: the open panel is in the document.
 */
export function AnnotatedSet({ items }: { items: AnnotatedData[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const id = useId();
  const { ref, shown } = useReveal<HTMLDivElement>();
  const current = open === null ? null : items[open];

  return (
    <Lane width="wall">
      <div ref={ref} className={shown ? "folders is-shown" : "folders"}>
        <div className="folders__row" role="list">
          {items.map((a, i) => (
            <Folder
              key={a.id ?? i}
              item={a}
              index={i}
              open={open === i}
              controls={`${id}-panel`}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
        <div id={`${id}-panel`} className="folders__panel" hidden={current === null}>
          {current && (
            <section className="anno" key={open ?? -1}>
              <header className="anno__head">
                {current.id && <span className="anno__id">{current.id}</span>}
                {current.title && <h3 className="anno__title">{current.title}</h3>}
                <button type="button" className="folders__close" onClick={() => setOpen(null)}>
                  Close
                </button>
              </header>
              {current.standfirst && <p className="anno__standfirst">{current.standfirst}</p>}
              <figure className="shot is-shown">
                {current.shot.src ? (
                  <img className="shot__img" src={asset(current.shot.src)} alt="" />
                ) : (
                  <div className="shot__slot">
                    <span>{current.shot.slot ?? "annotated screen"}</span>
                  </div>
                )}
                {current.shot.caption && <figcaption className="shot__caption">{current.shot.caption}</figcaption>}
              </figure>
              {current.legend?.length || current.notes?.length || current.rules?.length ? (
                <div className="anno__apparatus">
                  {current.legend?.length ? (
                    <div className="anno__legend">
                      <p className="field__label">Colour code</p>
                      <ul>
                        {current.legend.map((l) => (
                          <li key={l.label}>
                            <span className="anno__swatch" style={l.swatch ? { background: l.swatch } : undefined} aria-hidden="true" />
                            {l.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {current.notes?.map((n) => (
                    <div key={n.label}>
                      <p className="field__label">{n.label}</p>
                      <p>{n.body}</p>
                    </div>
                  ))}
                  {current.rules?.length ? (
                    <div className="anno__rules">
                      <p className="field__label">Surface rules</p>
                      <ul>
                        {current.rules.map((r) => (
                          <li key={r.id}>
                            <Badge tone="info">{r.id}</Badge>
                            {r.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </section>
          )}
        </div>
      </div>
    </Lane>
  );
}

function Folder({
  item,
  index,
  open,
  controls,
  onToggle,
}: {
  item: AnnotatedData;
  index: number;
  open: boolean;
  controls: string;
  onToggle: () => void;
}) {
  const tilt = useTilt<HTMLButtonElement>(5);
  return (
    <button
      ref={tilt}
      type="button"
      role="listitem"
      className={open ? "folder is-open" : "folder"}
      style={{ transitionDelay: `${index * 90}ms` }}
      aria-expanded={open}
      aria-controls={controls}
      onClick={onToggle}
    >
      <span className="folder__tab">
        {item.id && <span className="folder__id">{item.id}</span>}
        <span className="folder__title">{item.title}</span>
      </span>
      <span className="folder__body">
        {item.shot.src ? (
          <img src={asset(item.shot.src)} alt="" loading="lazy" decoding="async" />
        ) : (
          <span className="folder__slot">{item.shot.slot ?? "screen"}</span>
        )}
        <span className="folder__hint">{open ? "Close" : "Open"}</span>
      </span>
    </button>
  );
}
