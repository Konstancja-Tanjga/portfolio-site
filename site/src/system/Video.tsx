import type { Video as VideoData, Width } from "../content/types";
import { asset } from "./asset";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * A video on the wall, with the source it came from named under it.
 *
 * The file is served from public/, not embedded from YouTube. A portfolio
 * has to outlive the marketing channel it borrows from: if the vendor
 * takes the film down, an <iframe> becomes an apology and this stays
 * evidence that the product shipped. The credit line points at the
 * original for as long as the original exists.
 *
 * `preload="none"` means the file is fetched on play, not on scroll — an
 * 11MB download for every visitor who never presses the button would be
 * the wrong trade.
 */
export function Video({
  src,
  title,
  poster,
  caption,
  credit,
  width = "wall",
}: VideoData & { width?: Width }) {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <Lane width={width}>
      <figure ref={ref} className={shown ? "video is-shown" : "video"}>
        <video
          className="video__player"
          src={asset(src)}
          poster={poster ? asset(poster) : undefined}
          title={title}
          controls
          playsInline
          preload="none"
        />
        {(caption || credit) && (
          <figcaption className="shot__caption">
            {caption}
            {credit && (
              <>
                {caption && " "}
                <span className="video__credit">
                  {credit.href ? (
                    <a href={credit.href} target="_blank" rel="noopener noreferrer">
                      {credit.text}
                    </a>
                  ) : (
                    credit.text
                  )}
                </span>
              </>
            )}
          </figcaption>
        )}
      </figure>
    </Lane>
  );
}
