import type { Cover as CoverData } from "../content/types";
import { Lane } from "./Wall";

/**
 * The cover. Yellow field, black display, the product bleeding off
 * the right edge — the same frame every project opens on, which is
 * what makes eight projects read as one body of work.
 */
export function Cover({ cover }: { cover: CoverData }) {
  return (
    <Lane width="bleed">
      <div className="cover">
        <div className="cover__text">
          <p className="kicker">{cover.kicker}</p>
          <h1 className="cover__headline">
            {cover.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="cover__subline">{cover.subline}</p>
          <p className="kicker cover__stamp">{cover.stamp}</p>
          <p className="cover__credit">{cover.credit}</p>
        </div>
        <div className="cover__shot">
          {cover.shot.src ? (
            <img src={cover.shot.src} alt="" />
          ) : (
            <div className="cover__slot">{cover.shot.slot ?? "hero"}</div>
          )}
        </div>
      </div>
    </Lane>
  );
}
