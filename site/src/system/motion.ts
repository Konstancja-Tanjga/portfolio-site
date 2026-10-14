import { useEffect, useRef } from "react";

export const reduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * A control that leans a few pixels toward the cursor while it is near,
 * and settles back when the cursor leaves. The lean is capped so the
 * control never leaves its own hit area.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35, radius = 80) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced() || !window.matchMedia("(hover: hover)").matches) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const d = Math.hypot(dx, dy);
      if (d > radius + Math.max(r.width, r.height) / 2) {
        el.style.transform = "";
        return;
      }
      el.style.transform = `translate(${(dx * strength).toFixed(1)}px, ${(dy * strength).toFixed(1)}px)`;
    };
    const leave = () => {
      el.style.transform = "";
    };
    window.addEventListener("mousemove", move, { passive: true });
    el.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [strength, radius]);
  return ref;
}

/**
 * A card that tilts toward the cursor, a few degrees at most, and lies
 * flat again when the cursor leaves. Sets --rx and --ry on the element;
 * the stylesheet applies them.
 */
export function useTilt<T extends HTMLElement>(max = 4) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced() || !window.matchMedia("(hover: hover)").matches) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--ry", `${(x * max * 2).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${(-y * max * 2).toFixed(2)}deg`);
    };
    const leave = () => {
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--rx", "0deg");
    };
    el.addEventListener("mousemove", move, { passive: true });
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [max]);
  return ref;
}
