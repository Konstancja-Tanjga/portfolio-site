import { Link, useLocation } from "react-router-dom";
import { findCase, listingFor } from "../content";
import type { ReactNode } from "react";
import { SkinSwitcher } from "../skins/SkinContext";

import { version as dsVersion } from "@bighatpoland/ui/package.json";

export function Shell({ children }: { children: ReactNode }) {
  // A listing is the current page on its own page ("page"), and the current
  // location on every wall it lists ("true"), so a reader deep in a practice
  // wall still sees where they are without a screen reader calling the
  // listing the page they are on. NavLink only matches its own `to`, so the
  // state is worked out here. An unknown wall marks nothing.

  // GitHub Pages can serve /practice as /practice/ (from practice/index.html).
  // Drop trailing slashes before comparing, but keep the bare "/" for Work.
  const pathname = useLocation().pathname.replace(/(.)\/+$/, "$1");
  const wall = pathname.match(/^\/work\/([^/]+)/);
  const study = wall ? findCase(wall[1]) : undefined;
  const current = (to: string) =>
    pathname === to
      ? { "aria-current": "page" as const }
      : study && listingFor(study).to === to
        ? { "aria-current": "true" as const }
        : {};

  return (
    <>
      <div className="page">
        <header className="masthead">
          <Link to="/" className="masthead__name">
            Konstancja Tanjga-Nawrot
          </Link>
          <nav className="masthead__nav" aria-label="Sections">
            <Link to="/" {...current("/")}>Work</Link>
            <Link to="/practice" {...current("/practice")}>Practice</Link>
            <Link to="/watercolours" {...current("/watercolours")}>Watercolours</Link>
            <Link to="/about" {...current("/about")}>About</Link>
            <a href="https://github.com/konstancja-tanjga">GitHub</a>
            <a href="https://linkedin.com/in/konstancja-tanjga">LinkedIn</a>
          </nav>
          <SkinSwitcher />
        </header>
      </div>
      <main>{children}</main>
      <div className="page">
        <footer className="footer">
          <div className="footer__links">
            <a href="mailto:tanjgakonstancja@gmail.com">tanjgakonstancja@gmail.com</a>
            <a href="https://konstancja-tanjga.github.io/bighat-design-system/">
              Design system in Storybook
            </a>
            <a href="https://github.com/konstancja-tanjga">GitHub</a>
            <a href="https://linkedin.com/in/konstancja-tanjga">LinkedIn</a>
          </div>
          <p>
            Built on{" "}
            <a href="https://konstancja-tanjga.github.io/bighat-design-system/">
              @bighatpoland/ui v{dsVersion}
            </a>{" "}
            — my own design system, installed as a package. Its tokens drive every
            colour on this page, and its components render the badges and states.
            Warsaw, CET. Remote only, permanent or B2B.
          </p>
        </footer>
      </div>
    </>
  );
}
