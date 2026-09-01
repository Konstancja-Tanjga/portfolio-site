import { useEffect, useRef, useState } from "react";

/**
 * Reveal on first scroll into view, once, never again.
 *
 * Two rules this obeys and most scroll animation does not:
 *  - Content is visible if the observer never fires. The animation is an
 *    enhancement on top of a page that already works.
 *  - `prefers-reduced-motion` skips it entirely, not "slower".
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(
    () =>
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window),
  );

  useEffect(() => {
    if (shown || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shown]);

  return { ref, shown };
}
