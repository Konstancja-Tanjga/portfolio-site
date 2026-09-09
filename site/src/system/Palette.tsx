import type { Swatch } from "../content/types";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * A palette as an argument, not a mood board.
 *
 * Every swatch carries the job it is allowed to do, because a row of colours
 * with no roles attached tells a reader nothing they could disagree with. The
 * hex comes from the content: these are facts about the system being
 * described, so the stylesheet stays colour-free and this component paints
 * whatever it is handed.
 *
 * The value is always printed, never only shown. A reader who cannot
 * distinguish two of the swatches — which is the entire subject of some of
 * these palettes — still gets the information from the text.
 */
export function Palette({
  items,
  standfirst,
  caption,
}: {
  items: Swatch[];
  standfirst?: string;
  caption?: string;
}) {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <Lane width="wall">
      {standfirst && <p className="standfirst palette__lead">{standfirst}</p>}
      <figure ref={ref} className={shown ? "palette is-shown" : "palette"}>
        <div className="palette__row">
          {items.map((s, i) => (
            <div
              className="palette__swatch"
              key={s.hex + s.name}
              /* Staggered only far enough to read as one gesture rather than
                 as items arriving separately. Reveal already no-ops under
                 prefers-reduced-motion, so this rides along with it. */
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="palette__chip" style={{ background: s.hex }} aria-hidden="true" />
              <p className="palette__hex">{s.hex}</p>
              <p className="palette__name">{s.name}</p>
              <p className="palette__role">{s.role}</p>
              {s.note && <p className="palette__note">{s.note}</p>}
            </div>
          ))}
        </div>
        {caption && <figcaption className="shot__caption">{caption}</figcaption>}
      </figure>
    </Lane>
  );
}
