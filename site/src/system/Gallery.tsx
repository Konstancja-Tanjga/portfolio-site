import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { asset } from "./asset";

export type GalleryItem = {
  src: string;
  title?: string;
  note?: string;
};

type Open = { items: GalleryItem[]; index: number };

/**
 * State for a full-screen gallery.
 *
 * The set is passed in at open time rather than held here, so a painting
 * opened from the France series scrolls through France and not through all
 * forty-three — the set the reader clicked into is the set they meant.
 */
export function useGallery() {
  const [open, setOpen] = useState<Open | null>(null);
  const returnTo = useRef<HTMLElement | null>(null);

  const show = useCallback((items: GalleryItem[], index: number) => {
    // Remember where the reader was so focus can go back there on close.
    returnTo.current = document.activeElement as HTMLElement | null;
    setOpen({ items, index });
  }, []);

  const close = useCallback(() => {
    setOpen(null);
    returnTo.current?.focus?.();
  }, []);

  const goto = useCallback((index: number) => {
    setOpen((prev) => {
      if (!prev) return prev;
      const count = prev.items.length;
      // Wraps, because a set of nine has no natural end and stopping dead at
      // the last one reads as broken.
      return { ...prev, index: ((index % count) + count) % count };
    });
  }, []);

  return { open, show, close, goto };
}

export function Gallery({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onIndex: (index: number) => void;
}) {
  const frame = useRef<HTMLDivElement | null>(null);
  const strip = useRef<HTMLDivElement | null>(null);
  const current = items[index];

  const next = useCallback(() => onIndex(index + 1), [index, onIndex]);
  const prev = useCallback(() => onIndex(index - 1), [index, onIndex]);

  /* Keyboard: the arrows people already expect, and Escape to leave. */
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          prev();
          break;
        case "Home":
          event.preventDefault();
          onIndex(0);
          break;
        case "End":
          event.preventDefault();
          onIndex(items.length - 1);
          break;
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [next, prev, onClose, onIndex, items.length]);

  /* The page behind must not scroll while this is over it. */
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  /* Focus the viewer so the arrow keys work without a click first. */
  useEffect(() => {
    frame.current?.focus();
  }, []);

  /* Fetch the neighbours now, so a press of → shows a painting rather than a
     gap. Two either side covers a fast scroll through the strip. */
  useEffect(() => {
    for (const offset of [1, -1, 2, -2]) {
      const item = items[(((index + offset) % items.length) + items.length) % items.length];
      if (item) new Image().src = asset(item.src);
    }
  }, [index, items]);

  /* Keep the active thumbnail in view. Layout effect, so it never lands one
     frame late and slides after the image has already changed. */
  useLayoutEffect(() => {
    const active = strip.current?.querySelector<HTMLElement>('[aria-current="true"]');
    active?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }, [index]);

  /* Swipe. Pointer events, so a trackpad drag and a thumb both work. */
  const drag = useRef<{ x: number; y: number } | null>(null);
  const onPointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") return;
    drag.current = { x: event.clientX, y: event.clientY };
  };
  const onPointerUp = (event: React.PointerEvent) => {
    const start = drag.current;
    drag.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    // Horizontal intent only: a vertical drag is a scroll attempt, not a swipe.
    if (Math.abs(dx) < 44 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next();
    else prev();
  };

  const caption = [current?.title, current?.note].filter(Boolean).join(" · ");

  return (
    <div
      className="gal"
      role="dialog"
      aria-modal="true"
      aria-label={caption || "Gallery"}
      ref={frame}
      tabIndex={-1}
    >
      <header className="gal__bar">
        <p className="gal__count">
          {index + 1} <span aria-hidden="true">/</span> {items.length}
        </p>
        <button type="button" className="gal__close" onClick={onClose}>
          Close <span aria-hidden="true">✕</span>
        </button>
      </header>

      <div className="gal__stage" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
        <button
          type="button"
          className="gal__step gal__step--prev"
          onClick={prev}
          aria-label="Previous"
          disabled={items.length < 2}
        >
          <span aria-hidden="true">‹</span>
        </button>

        {/* Keyed on src so the browser treats each painting as a new element
            and the fade actually runs between them. */}
        <figure className="gal__figure" key={current?.src}>
          <img src={asset(current.src)} alt={caption} />
        </figure>

        <button
          type="button"
          className="gal__step gal__step--next"
          onClick={next}
          aria-label="Next"
          disabled={items.length < 2}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      {caption && (
        <p className="gal__caption">
          <span className="gal__title">{current.title}</span>
          {current.note && <span className="gal__note"> · {current.note}</span>}
        </p>
      )}

      {items.length > 1 && (
        <div className="gal__strip" ref={strip} role="tablist" aria-label="Paintings">
          {items.map((item, i) => (
            <button
              type="button"
              role="tab"
              key={item.src}
              className="gal__thumb"
              aria-current={i === index ? "true" : undefined}
              aria-selected={i === index}
              aria-label={item.title ?? `Painting ${i + 1}`}
              onClick={() => onIndex(i)}
            >
              <img src={asset(item.src)} alt="" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
