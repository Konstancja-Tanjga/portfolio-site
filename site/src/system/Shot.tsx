import { createContext, useContext, useId, useState } from "react";

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
export function Shot({ width = "wall", src, slot, caption, frame, hotspots, folded, inset }: ShotData & { width?: Width }) {
  const { ref, shown } = useReveal<HTMLElement>();
  const [open, setOpen] = useState(false);
  const id = useId();
  if (folded) {
    return (
      <Lane width={width}>
        <div ref={ref as React.RefObject<HTMLDivElement>} className={[shown ? "drawer is-shown" : "drawer", open ? "is-open" : ""].join(" ")}>
          <button type="button" className="drawer__head" aria-expanded={open} aria-controls={`${id}-body`} onClick={() => setOpen((v) => !v)}>
            {src && <span className="drawer__thumb" aria-hidden="true"><img src={asset(src)} alt="" loading="lazy" decoding="async" /></span>}
            <span className="drawer__title">{caption ?? slot ?? "Diagram"}</span>
            <span className="drawer__hint" aria-hidden="true">{open ? "Close" : "Open the diagram"}</span>
            <span className="drawer__chevron" aria-hidden="true" />
          </button>
          <figure id={`${id}-body`} className="shot is-shown drawer__body" hidden={!open}>
            <ShotFrame src={src} slot={slot} caption={caption} frame={frame} hotspots={hotspots} />
          </figure>
        </div>
      </Lane>
    );
  }
  return (
    <Lane width={width}>
      <figure ref={ref} className={["shot", inset && "shot--inset", shown && "is-shown"].filter(Boolean).join(" ")}>
        <ShotFrame src={src} slot={slot} caption={caption} frame={frame} hotspots={hotspots} />
        {caption && <figcaption className="shot__caption">{caption}</figcaption>}
      </figure>
    </Lane>
  );
}

/** Two shots side by side: before and after, two states, a mobile pair. */
export function Duo({ items, caption, width = "wall" }: { items: ShotData[]; caption?: string; width?: Width }) {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <Lane width={width}>
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

/** `/x/name-2400.webp` → the 1600, 2400 and full variants of the same screen. */
function variants(src: string) {
  const m = src.match(/^(.*?)-(?:1600|2400|full)\.webp$/);
  const base = m ? m[1] : null;
  return base
    ? { small: `${base}-1600.webp`, large: `${base}-2400.webp`, full: `${base}-full.webp` }
    : { small: src, large: src, full: src };
}

function ShotFrame({ src, slot, caption, frame, hotspots }: ShotData) {
  const view = useContext(ShotViewer);
  const [hover, setHover] = useState(false);

  if (!src) {
    return (
      <div className="shot__slot">
        <span>{slot ?? "image"}</span>
      </div>
    );
  }

  const v = variants(src);
  // When a shot has a caption, every caller prints it next to the image
  // (figcaption or subcaption), so the image and its button are not named
  // with it here: that made a screen reader read each caption twice. A shot
  // without a caption has no accessible name.
  // A device export from Figma: the MacBook is in the picture, so the
  // image is the whole mockup, served at two page sizes and opened full.
  const img =
    frame === "macbook" ? (
      <img
        className="shot__img shot__img--device"
        src={asset(v.large)}
        srcSet={`${asset(v.small)} 1600w, ${asset(v.large)} 2400w`}
        sizes="(max-width: 48rem) 100vw, 72rem"
        alt=""
        loading="lazy"
        decoding="async"
        width={2530}
        height={1583}
      />
    ) : (
      <img className="shot__img" src={asset(src)} alt="" loading="lazy" decoding="async" />
    );

  const pins = hotspots?.length ? (
    <>
      <span className={hover ? "pins is-live" : "pins"} aria-hidden="true">
        {hotspots.map((h, i) => (
          <span
            key={i}
            className={`pin${h.x > 60 ? " pin--left" : ""}`}
            style={{ left: `${h.x}%`, top: `${h.y}%`, transitionDelay: `${i * 60}ms` }}
          >
            <span className="pin__dot" />
            <span className="pin__bubble">{h.text}</span>
          </span>
        ))}
      </span>
      <ul className="pins__list">
        {hotspots.map((h, i) => (
          <li key={i}>{h.text}</li>
        ))}
      </ul>
    </>
  ) : null;

  if (!view) {
    return (
      <span className="shot__stage" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {img}
        {pins}
      </span>
    );
  }

  return (
    <span className="shot__stage" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <button
        type="button"
        className="shot__open"
        onClick={() => view({ src: asset(v.full), caption })}
        aria-label="View full size"
      >
        {img}
      </button>
      {pins}
    </span>
  );
}
