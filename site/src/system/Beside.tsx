import { useEffect, useRef, useState } from "react";

import { asset } from "./asset";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * Prose on the left, a phone-sized clip on the right that stays in view
 * while the text scrolls past it, so a flow can be read and watched at
 * once. The clip is muted, loops, plays only while on screen, and under
 * reduced motion shows its poster with a play button.
 */
export function Beside({ html, video, caption }: { html: string; video: { src: string; poster?: string; title: string }; caption?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const player = useRef<HTMLVideoElement | null>(null);
  const [reduced] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    const el = player.current;
    if (!el || reduced || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.play().catch(() => {}); else el.pause(); }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);
  return (
    <Lane width="wall">
      <div ref={ref} className={shown ? "beside is-shown" : "beside"}>
        <div className="beside__text" dangerouslySetInnerHTML={{ __html: html }} />
        <figure className="beside__media">
          <video
            ref={player}
            className="beside__player"
            poster={video.poster ? asset(video.poster) : undefined}
            title={video.title}
            muted
            loop
            playsInline
            controls={reduced}
            preload="metadata"
          >
            <source src={asset(video.src.replace(/\.mp4$/, ".webm"))} type='video/webm; codecs="vp9"' />
            <source src={asset(video.src)} type="video/mp4" />
          </video>
          {caption && <figcaption className="beside__caption">{caption}</figcaption>}
        </figure>
      </div>
    </Lane>
  );
}
