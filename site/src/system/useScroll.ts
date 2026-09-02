import { useEffect, useState } from "react";

export type ScrollState = {
  /** Past the first screenful — far enough that "back to top" is worth offering. */
  deep: boolean;
  /** Which way the reader is going. "up" also means "at the very top". */
  direction: "up" | "down";
};

/**
 * Where the reader is, and which way they are heading.
 *
 * Both of the behaviours built on this care about direction rather than
 * position: a bar that hides going down and returns going up is answering the
 * reader's intent — scrolling up on a long page almost always means looking
 * for the navigation.
 *
 * The threshold matters. Without it a trackpad's sub-pixel jitter flips the
 * direction several times a second and the bar flickers.
 */
const THRESHOLD = 8;
const DEEP = 320;

export function useScroll(): ScrollState {
  const [state, setState] = useState<ScrollState>({ deep: false, direction: "up" });

  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;

    const measure = () => {
      frame = 0;
      const y = window.scrollY;
      const moved = y - last;

      if (Math.abs(moved) < THRESHOLD) {
        // Not a real move; only the depth flag can change.
        setState((prev) => (prev.deep === y > DEEP ? prev : { ...prev, deep: y > DEEP }));
        return;
      }

      last = y;
      // Near the top there is nothing above to go back to, so treat it as up
      // regardless — otherwise the bar stays hidden at the very top of the page.
      const direction = y <= DEEP || moved < 0 ? "up" : "down";
      setState((prev) =>
        prev.direction === direction && prev.deep === y > DEEP
          ? prev
          : { deep: y > DEEP, direction },
      );
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return state;
}

/** Send the page back to the top, honouring the motion preference. */
export function scrollToTop() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduced ? "instant" : "smooth" });
}
