import { NavLink, Link } from "react-router-dom";
import type { ReactNode } from "react";

import { version as dsVersion } from "@bighatpoland/ui/package.json";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="page">
        <header className="masthead">
          <Link to="/" className="masthead__name">
            Konstancja Tanjga-Nawrot
          </Link>
          <nav className="masthead__nav" aria-label="Sections">
            <NavLink to="/">Work</NavLink>
            <NavLink to="/watercolours">Watercolours</NavLink>
            <NavLink to="/about">About</NavLink>
            <a href="https://github.com/konstancja-tanjga">GitHub</a>
            <a href="https://linkedin.com/in/konstancja-tanjga">LinkedIn</a>
          </nav>
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
            <a href="https://github.com/bighatpoland/bighat-design-system">
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
