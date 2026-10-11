import { useEffect, useState } from "react";

import { asset } from "./asset";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

type Item = { src: string; title: string; body?: string; frame?: "macbook" };

/**
 * One screen at a time, with the part of the application it shows named
 * beside it. Arrows and dots move it; it also moves itself every few
 * seconds while in view, and stops while the pointer is over it or when
 * the reader has taken the wheel. Keyboard: left and right.
 */
export function Carousel({ items }: { items: Item[] }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const [i, setI] = useState(0);
  const [manual, setManual] = useState(false);
  const [hover, setHover] = useState(false);
  const n = items.length;
  const go = (k: number, byHand = true) => { setI(((k % n) + n) % n); if (byHand) setManual(true); };

  useEffect(() => {
    if (!shown || manual || hover || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 4200);
    return () => clearInterval(t);
  }, [shown, manual, hover, n]);

  const current = items[i];
  const variants = (src: string) => {
    const m = src.match(/^(.*?)-(?:1600|2400|full)\.webp$/);
    return m ? { small: `${m[1]}-1600.webp`, large: `${m[1]}-2400.webp` } : { small: src, large: src };
  };

  return (
    <Lane width="wall">
      <div
        ref={ref}
        className={shown ? "car is-shown" : "car"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onKeyDown={(e) => { if (e.key === "ArrowRight") go(i + 1); if (e.key === "ArrowLeft") go(i - 1); }}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="The parts of the application"
      >
        <div className="car__stage" aria-live="polite">
          {items.map((it, k) => {
            const v = variants(it.src);
            const pos = k === i ? "is-current" : k === (i + 1) % n ? "is-next" : k === (i - 1 + n) % n ? "is-prev" : "";
            return (
              <figure className={`car__slide ${pos}`} key={it.src} aria-hidden={k !== i}>
                <img
                  className={it.frame === "macbook" ? "car__img car__img--device" : "car__img"}
                  src={asset(v.large)}
                  srcSet={`${asset(v.small)} 1600w, ${asset(v.large)} 2400w`}
                  sizes="(max-width: 48rem) 100vw, 72rem"
                  alt={it.title}
                  loading={k < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </figure>
            );
          })}
          <button type="button" className="car__arrow car__arrow--prev" onClick={() => go(i - 1)} aria-label="Previous screen">←</button>
          <button type="button" className="car__arrow car__arrow--next" onClick={() => go(i + 1)} aria-label="Next screen">→</button>
        </div>
        <div className="car__bar">
          <div className="car__text" key={current.src}>
            <span className="car__n">{String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
            <h3 className="car__title">{current.title}</h3>
            {current.body && <p className="car__body">{current.body}</p>}
          </div>
          <ol className="car__dots">
            {items.map((it, k) => (
              <li key={it.src}>
                <button type="button" className={k === i ? "car__dot is-current" : "car__dot"} onClick={() => go(k)} aria-label={it.title} aria-current={k === i ? "true" : undefined}>
                  <span className="car__dot-label">{it.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Lane>
  );
}
