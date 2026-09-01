import type { Shot as ShotData, Width } from "../content/types";
import { Lane } from "./Wall";

/** One image in the wall, or the slot where it will go. */
export function Shot({ width = "wall", src, slot, caption }: ShotData & { width?: Width }) {
  return (
    <Lane width={width}>
      <figure className="shot">
        <ShotFrame src={src} slot={slot} caption={caption} />
        {caption && <figcaption className="shot__caption">{caption}</figcaption>}
      </figure>
    </Lane>
  );
}

/** Two shots side by side: before and after, two states, a mobile pair. */
export function Duo({ items, caption }: { items: ShotData[]; caption?: string }) {
  return (
    <Lane width="wall">
      <figure className="shot shot--duo">
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
  if (!src) {
    return (
      <div className="shot__slot">
        <span>{slot ?? "image"}</span>
      </div>
    );
  }
  return <img className="shot__img" src={src} alt={caption ?? ""} loading="lazy" decoding="async" />;
}
