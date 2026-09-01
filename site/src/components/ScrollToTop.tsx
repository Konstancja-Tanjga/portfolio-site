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
 * A hash is left alone: that navigation asked for a specific place.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    // `instant`, not smooth: an animated scroll on arrival reads as the page
    // moving under you before you have looked at it.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
