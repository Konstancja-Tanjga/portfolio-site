import { createContext, useContext } from "react";

import type { Shot as ShotData, Width } from "../content/types";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * Set by the page so a shot can ask for itself to be opened full size.
 * A shot outside a provider is simply not clickable — no crash, no
 * dead-looking control.
 */
export const ShotViewer = createContext<
  ((shot: { src: string; caption?: string }) => void) | null
>(null);

/** One image in the wall, or the slot where it will go. */
export function Shot({ width = "wall", src, slot, caption }: ShotData & { width?: Width }) {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <Lane width={width}>
      <figure ref={ref} className={shown ? "shot is-shown" : "shot"}>
        <ShotFrame src={src} slot={slot} caption={caption} />
        {caption && <figcaption className="shot__caption">{caption}</figcaption>}
      </figure>
    </Lane>
  );
}

/** Two shots side by side: before and after, two states, a mobile pair. */
export function Duo({ items, caption }: { items: ShotData[]; caption?: string }) {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <Lane width="wall">
      <figure ref={ref} className={shown ? "shot shot--duo is-shown" : "shot shot--duo"}>
        <div className="shot__pair">
          {items.map((item, i) => (
            <div key={i}>
              <ShotFrame {...item} />
              {item.caption && <span className="shot__subcaption">{item.caption}</span>}
            </div>
          ))}
        </div>
        {caption && <figcaption className="shot__caption">{caption}</figcaption>}
      </figure>
    </Lane>
  );
}

function ShotFrame({ src, slot, caption }: ShotData) {
  const view = useContext(ShotViewer);

  if (!src) {
    return (
      <div className="shot__slot">
        <span>{slot ?? "image"}</span>
      </div>
    );
  }

  const img = (
    <img className="shot__img" src={src} alt={caption ?? ""} loading="lazy" decoding="async" />
  );

  if (!view) return img;

  return (
    <button
      type="button"
      className="shot__open"
      onClick={() => view({ src, caption })}
      aria-label={caption ? `${caption} — view full size` : "View full size"}
    >
      {img}
      <span className="shot__hint" aria-hidden="true">Full size</span>
    </button>
  );
}
