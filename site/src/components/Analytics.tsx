import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Private visitor counting, via Umami Cloud.
 *
 * GitHub Pages keeps no access logs you can read, so the only way to know
 * anyone visited is for the page to say so itself. Umami is a hosted
 * counter: one script, no cookies, no cross-site identifiers, and a
 * dashboard only the account holder can open — the numbers are not public
 * the way a badge-style hit counter is.
 *
 * Two things are deliberate here.
 *
 * Tracking is manual (`data-auto-track="false"`). Umami's own auto-tracking
 * patches the History API to notice navigations, which works, but it means
 * two independent things decide what counts as a page view. Sending them
 * from the router instead makes this file the only place that decides.
 *
 * And it only loads in a production build with an ID configured — running
 * `npm run dev` must never add to the counts, and a fork without the ID
 * should build clean rather than call somebody else's dashboard.
 */

const SCRIPT_SRC = "https://cloud.umami.is/script.js";

// Umami's own opt-out key. The tracker checks it before sending anything, so
// setting it also covers the events this file does not send.
const DISABLED_KEY = "umami.disabled";

declare global {
  interface Window {
    umami?: {
      track: (
        payload?: (props: Record<string, unknown>) => Record<string, unknown>,
      ) => void;
    };
  }
}

/**
 * Your own visits, excluded.
 *
 * Open the site once with `?skipcount=1` on each browser you use and this
 * stores the opt-out; `?skipcount=0` undoes it. It is per-browser and
 * survives until site data is cleared — there is no way to recognise you
 * across devices without storing something that identifies you, which is
 * the thing a cookie-less counter exists to avoid.
 */
function readOptOut(search: string): boolean {
  const asked = new URLSearchParams(search).get("skipcount");

  try {
    if (asked === "1") localStorage.setItem(DISABLED_KEY, "1");
    if (asked === "0") localStorage.removeItem(DISABLED_KEY);
    return localStorage.getItem(DISABLED_KEY) === "1";
  } catch {
    // Private browsing, or storage blocked entirely. Treat an unreadable
    // opt-out as no opt-out rather than dropping every visit.
    return asked === "1";
  }
}

export function Analytics() {
  const { pathname, search } = useLocation();
  const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
  const enabled = Boolean(websiteId) && import.meta.env.PROD;

  // The first view would otherwise be sent twice: React 18's StrictMode runs
  // effects twice in development, and the script's own load can race the
  // first navigation.
  const lastSent = useRef<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    if (readOptOut(search)) return;

    // `search` is dropped on purpose. The only query strings this site uses
    // are the opt-out above and whatever a referrer appends (utm_*, fbclid),
    // and keeping them would split one page across dozens of dashboard rows.
    const url = pathname;
    if (lastSent.current === url) return;

    const send = () => {
      if (!window.umami) return false;
      window.umami.track((props) => ({ ...props, url }));
      lastSent.current = url;
      return true;
    };

    if (send()) return;

    // Script not there yet — either it is still loading or this is the first
    // render, which is when it gets added.
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );

    if (existing) {
      existing.addEventListener("load", send, { once: true });
      return () => existing.removeEventListener("load", send);
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.dataset.websiteId = websiteId;
    script.dataset.autoTrack = "false";
    script.addEventListener("load", send, { once: true });
    document.head.appendChild(script);
  }, [enabled, websiteId, pathname, search]);

  return null;
}
