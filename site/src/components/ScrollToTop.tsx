import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Start every page at the top.
 *
 * A single-page app keeps the scroll position across a navigation, so
 * clicking a project from halfway down the work page opens that project
 * halfway down — which looks like the cover has been cut off. The browser
 * does this correctly for real page loads and not at all for these.
 *
 * A hash asked for a specific place instead, and is honoured rather than
 * overridden — but it has to be honoured more than once. The wall's images
 * are lazy and carry no dimensions, so at the moment the browser resolves
 * the anchor the document is a fraction of its final height and every
 * chapter is within a screen of every other. Landing on the right element
 * in that layout means landing somewhere else entirely once the images
 * arrive, so the position is asserted again as the page settles.
 */
export function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      // `instant`, not smooth: an animated scroll on arrival reads as the page
      // moving under you before you have looked at it.
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const id = decodeURIComponent(hash.replace(/^#/, ""));
    let cancelled = false;

    const settle = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    };

    settle();
    // Once on the next frame, for anything laid out during this commit, then
    // on a short tail while lazy images resolve and grow the document above us.
    const frame = requestAnimationFrame(settle);
    const timers = [120, 400, 900].map((ms) => window.setTimeout(settle, ms));
    window.addEventListener("load", settle);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
      window.removeEventListener("load", settle);
    };
  }, [pathname, hash, key]);

  return null;
}
