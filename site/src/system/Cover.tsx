import type { Cover as CoverData } from "../content/types";
import { asset } from "./asset";
import { Lane } from "./Wall";

/**
 * The intro. One frame every project opens on: the mark as a full field, the
 * kicker, headline, subline, stamp and credit typeset by the site, and a
 * fragment of the project's cover art running off the right edge.
 *
 * The fragment is anchored right on purpose. Every cover artboard is laid out
 * the same way — type on the left, the product bleeding off the right — so
 * cropping to the right edge shows the product and never the artboard's own
 * type. Setting the whole artboard here printed the credit line twice.
 *
 * Sixteen identical intros is what makes sixteen projects read as one body of
 * work rather than a folder of files.
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

        {cover.shot.src && (
          <div className="cover__shot" aria-hidden="true">
            <img src={asset(cover.shot.src)} alt="" />
          </div>
        )}
      </div>
    </Lane>
  );
}
