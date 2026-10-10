import { createContext, useContext } from "react";

import type { Shot as ShotData, Width } from "../content/types";
import { asset } from "./asset";
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
export function Shot({ width = "wall", src, slot, caption, device }: ShotData & { width?: Width }) {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <Lane width={width}>
      <figure ref={ref} className={shown ? "shot is-shown" : "shot"}>
        <ShotFrame src={src} slot={slot} caption={caption} device={device} />
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

/**
 * A set of small screens, laid out across the wall.
 *
 * Each item is still openable at full size, because a phone screen at 200px
 * wide is legible as a layout and not as a document.
 */
export function ShotSet({
  items,
  size = "phone",
  caption,
}: {
  items: ShotData[];
  size?: "phone" | "square" | "wide";
  caption?: string;
}) {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <Lane width="wall">
      <figure ref={ref} className={shown ? "shot shot--set is-shown" : "shot shot--set"}>
        <div className={`shot__set shot__set--${size}`}>
          {items.map((item, i) => (
            <div className="shot__cell" key={item.src ?? i}>
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

function ShotFrame({ src, slot, caption, device }: ShotData) {
  const view = useContext(ShotViewer);

  if (!src) {
    return (
      <div className="shot__slot">
        <span>{slot ?? "image"}</span>
      </div>
    );
  }

  // When a shot has a caption, every caller prints it next to the image
  // (figcaption or subcaption), so the image and its button are not named
  // with it here: that made a screen reader read each caption twice. A shot
  // without a caption has no accessible name.
  const img = (
    <img className="shot__img" src={asset(src)} alt="" loading="lazy" decoding="async" />
  );

  const framed = device === "laptop" ? <Laptop>{img}</Laptop> : img;

  if (!view) return framed;

  return (
    <button
      type="button"
      className="shot__open"
      onClick={() => view({ src: asset(src), caption })}
      aria-label="View full size"
    >
      {framed}
    </button>
  );
}

/**
 * A laptop drawn in CSS rather than a mock-up image, so the screen keeps its
 * own resolution. The body is a fixed device colour in both themes. The
 * lightbox opens the bare screen.
 */
function Laptop({ children }: { children: React.ReactNode }) {
  return (
    <span className="laptop">
      <span className="laptop__lid">
        <span className="laptop__screen">{children}</span>
      </span>
      <span className="laptop__base" />
    </span>
  );
}
