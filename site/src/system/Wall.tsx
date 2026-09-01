import type { ReactNode } from "react";
import type { Width } from "../content/types";

/**
 * The wall. A single vertical column with three widths available to
 * anything inside it: column (reading measure), wall (the default
 * image width), bleed (edge to edge).
 */
export function Wall({ children }: { children: ReactNode }) {
  return <div className="wall">{children}</div>;
}

export function Lane({
  width = "wall",
  children,
  className,
  id,
}: {
  width?: Width;
  children: ReactNode;
  className?: string;
  /** Anchor and scroll target. Must sit on a Lane, not on the chapter
      wrapper: that wrapper is display:contents, so it has no box and
      IntersectionObserver would never see it. */
  id?: string;
}) {
  return (
    <div
      id={id}
      className={["lane", `lane--${width}`, className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}
