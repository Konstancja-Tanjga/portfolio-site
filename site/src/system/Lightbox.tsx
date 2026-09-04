import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * A wall graphic exported from Figma is 2300px wide and up to 5000 tall.
 * Fitted to the column it is legible as a composition and unreadable as
 * a document, so it needs a way to be seen at full size — and, for a
 * dense diagram, above full size.
 *
 * Deliberately not a library: Escape closes it, focus returns to the
 * figure that opened it, the background is inert, and zoom is four
 * controls and three keys.
 */
export function useLightbox() {
  const [open, setOpen] = useState<{ src: string; caption?: string } | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;

    // Captured on open. By close time the opener may have scrolled out of
    // the viewport but it is still the element the reader came from.
    const opener = document.activeElement as HTMLElement | null;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      opener?.focus();
    };
  }, [open]);

  return { open, show: setOpen, close };
}

/** 1 is fit-to-stage, not 100% of the file. Below 1 for a wide diagram
    whose fit is already taller than the stage; above for reading labels. */
const STEPS = [0.5, 0.75, 1, 1.5, 2, 3, 4] as const;
const FIT = STEPS.indexOf(1);

export function Lightbox({
  shot,
  onClose,
}: {
  shot: { src: string; caption?: string };
  onClose: () => void;
}) {
  const [step, setStep] = useState(FIT);
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);
  const [stage, setStage] = useState<{ w: number; h: number } | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const zoom = STEPS[step];

  const zoomIn = useCallback(() => setStep((s) => Math.min(s + 1, STEPS.length - 1)), []);
  const zoomOut = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);
  const fit = useCallback(() => setStep(FIT), []);

  // The stage drives the fit, so its size is measured rather than assumed.
  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const read = () => setStage({ w: el.clientWidth, h: el.clientHeight });
    read();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(read);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // The dialog is modal, so the keys belong to it while it is open.
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key === "+" || e.key === "=") return zoomIn();
      if (e.key === "-" || e.key === "_") return zoomOut();
      if (e.key === "0") return fit();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, zoomIn, zoomOut, fit]);

  /**
   * Fit first, then the step multiplies it. Capped at 1 so a small image is
   * not upscaled just because the stage is large — "fit" should never mean
   * "blurred". Computed from the natural size rather than measured off the
   * rendered image, so it cannot feed back into its own layout.
   */
  const fitScale =
    natural && stage ? Math.min(stage.w / natural.w, stage.h / natural.h, 1) : null;
  const width = natural && fitScale ? Math.round(natural.w * fitScale * zoom) : undefined;
  // Only the grab cursor depends on this; whether panning actually does
  // anything is decided from the real overflow in the pointer handler.
  const zoomed = zoom > 1;

  // Drag to pan, because at 4x a diagram is mostly off-stage and reaching
  // for a scrollbar loses the place you were reading.
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
  const onPointerDown = (e: React.PointerEvent) => {
    const el = stageRef.current;
    if (!el || (el.scrollWidth <= el.clientWidth && el.scrollHeight <= el.clientHeight)) return;
    drag.current = { x: e.clientX, y: e.clientY, left: el.scrollLeft, top: el.scrollTop };
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = stageRef.current;
    if (!el || !drag.current) return;
    el.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
    el.scrollTop = drag.current.top - (e.clientY - drag.current.y);
  };
  const endDrag = () => {
    drag.current = null;
  };

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={shot.caption ?? "Full size"}
      onClick={onClose}
    >
      <div className="lightbox__sheet" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox__bar">
          <div className="lightbox__zoom">
            <button
              type="button"
              className="lightbox__btn"
              onClick={zoomOut}
              disabled={step === 0}
              aria-label="Zoom out"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h10" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
            <button type="button" className="lightbox__level" onClick={fit}>
              {zoom === 1 ? "Fit" : `${zoom}×`}
            </button>
            <button
              type="button"
              className="lightbox__btn"
              onClick={zoomIn}
              disabled={step === STEPS.length - 1}
              aria-label="Zoom in"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>

          <button ref={closeRef} type="button" className="lightbox__close" onClick={onClose}>
            Close <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div
          ref={stageRef}
          className={zoomed ? "lightbox__stage is-zoomed" : "lightbox__stage"}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <img
            className="lightbox__img"
            src={shot.src}
            alt={shot.caption ?? ""}
            style={width ? { width } : undefined}
            draggable={false}
            onLoad={(e) =>
              setNatural({
                w: e.currentTarget.naturalWidth,
                h: e.currentTarget.naturalHeight,
              })
            }
          />
        </div>

        {shot.caption && <p className="lightbox__caption">{shot.caption}</p>}
      </div>
    </div>
  );
}
