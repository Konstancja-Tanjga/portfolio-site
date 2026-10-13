import { useEffect, useRef, useState } from "react";

import type { Video as VideoData, Width } from "../content/types";
import { track } from "../components/Analytics";
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
 * Two kinds of film. A film (the default) has sound, controls and
 * `preload="none"`: it is fetched on play, not on scroll, because an 11MB
 * download for every visitor who never presses the button would be the
 * wrong trade. A `clip` is a stretch of the prototype, seconds to a minute, showing one
 * behaviour: muted, looping, playing by itself while it is in view and
 * paused when it leaves, with one visible pause button for keyboard
 * users. Under prefers-reduced-motion a clip shows its poster and waits
 * to be played.
 */
export function Video({
  src,
  title,
  poster,
  caption,
  subtitles,
  credit,
  clip,
  width = "wall",
}: VideoData & { width?: Width }) {
  const { ref, shown } = useReveal<HTMLElement>();
  const player = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [reduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  // A clip plays while it is on screen and stops when it is not.
  useEffect(() => {
    const el = player.current;
    if (!clip || !el || reduced || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [clip, reduced]);

  const toggle = () => {
    const el = player.current;
    if (!el) return;
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  };

  return (
    <Lane width={width}>
      <figure ref={ref} className={[shown ? "video is-shown" : "video", clip ? "video--clip" : ""].join(" ")}>
        <div className="video__frame">
          <video
            ref={player}
            className="video__player"
            src={clip ? undefined : asset(src)}
            poster={poster ? asset(poster) : undefined}
            title={title}
            controls={!clip}
            muted={clip}
            loop={clip}
            playsInline
            preload={clip ? "metadata" : "none"}
            crossOrigin={subtitles ? "anonymous" : undefined}
            onPlay={() => {
              setPlaying(true);
              track("video", { title });
            }}
            onPause={() => setPlaying(false)}
          >
            {clip && (
              /* A clip ships as WebM and MP4; the WebM is usually smaller, so it
                 goes first and the MP4 is the fallback. */
              <>
                <source src={asset(src.replace(/\.mp4$/, ".webm"))} type='video/webm; codecs="vp9"' />
                <source src={asset(src)} type="video/mp4" />
              </>
            )}
            {subtitles && (
              /* `default` so the track is on without anyone hunting for the
                 CC menu — the film is in German and the page is not. */
              <track
                kind="subtitles"
                src={asset(subtitles.src)}
                label={subtitles.label}
                srcLang={subtitles.srclang}
                default
              />
            )}
          </video>
          {clip && (
            <button
              type="button"
              className="video__toggle"
              onClick={toggle}
              aria-pressed={playing}
              aria-label={playing ? `Pause: ${title}` : `Play: ${title}`}
            >
              {playing ? "Pause" : "Play"}
            </button>
          )}
        </div>
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
