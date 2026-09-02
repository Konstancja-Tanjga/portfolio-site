import { useState } from "react";

import type { Width } from "../content/types";
import { asset } from "./asset";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * An embedded video, played in place.
 *
 * Nothing is loaded from YouTube until someone clicks. Until then this is
 * the poster — a JPEG in public/ like any other shot — and a play button.
 * A bare <iframe> would pull ~700KB of Google script into every project
 * page whether or not the video is ever watched, and would hand YouTube a
 * pageview for every visitor who scrolls past it.
 *
 * On click it swaps to youtube-nocookie.com with autoplay, so the click
 * that reveals the player is also the click that starts it.
 */
export function Video({
  youtube,
  title,
  poster,
  caption,
  width = "wall",
}: {
  /** the id, not a URL: "eFn6maci6mA" */
  youtube: string;
  /** names the player for screen readers, so it cannot be "iframe" */
  title: string;
  poster?: string;
  caption?: string;
  width?: Width;
}) {
  const { ref, shown } = useReveal<HTMLElement>();
  const [playing, setPlaying] = useState(false);

  return (
    <Lane width={width}>
      <figure ref={ref} className={shown ? "video is-shown" : "video"}>
        <div className="video__frame">
          {playing ? (
            <iframe
              className="video__player"
              src={`https://www.youtube-nocookie.com/embed/${youtube}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="video__start"
              onClick={() => setPlaying(true)}
              aria-label={`Play: ${title}`}
            >
              {poster && (
                <img
                  className="video__poster"
                  src={asset(poster)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              )}
              <span className="video__play" aria-hidden="true" />
            </button>
          )}
        </div>
        {caption && <figcaption className="shot__caption">{caption}</figcaption>}
      </figure>
    </Lane>
  );
}
