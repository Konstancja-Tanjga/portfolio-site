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
}: {
  width?: Width;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={["lane", `lane--${width}`, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
