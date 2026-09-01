import { useCallback, useEffect, useState } from "react";

/**
 * A wall graphic exported from Figma is 1800px wide and up to 5000 tall.
 * Fitted to the column it is legible as a composition and unreadable as
 * a document, so it needs a way to be seen at full size.
 *
 * Deliberately not a library: escape closes it, focus returns to the
 * figure that opened it, the background is inert, and that is the whole
 * requirement.
 */
export function useLightbox() {
  const [open, setOpen] = useState<{ src: string; caption?: string } | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, close]);

  return { open, show: setOpen, close };
}

export function Lightbox({
  shot,
  onClose,
}: {
  shot: { src: string; caption?: string };
  onClose: () => void;
}) {
  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={shot.caption ?? "Full size"}
      onClick={onClose}
    >
      <button type="button" className="lightbox__close" onClick={onClose}>
        Close <span aria-hidden="true">✕</span>
      </button>
      <div className="lightbox__scroll" onClick={(e) => e.stopPropagation()}>
        <img src={shot.src} alt={shot.caption ?? ""} />
      </div>
    </div>
  );
}
