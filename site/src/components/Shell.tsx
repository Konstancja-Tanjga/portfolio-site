import { NavLink, Link } from "react-router-dom";
import type { ReactNode } from "react";

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
            <NavLink to="/about">About</NavLink>
            <a href="https://github.com/konstancja-tanjga">GitHub</a>
            <a href="https://linkedin.com/in/konstancja-tanjga">LinkedIn</a>
          </nav>
        </header>
      </div>
      <main className="page">{children}</main>
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
          <p>Warsaw, CET. Remote only, permanent or B2B.</p>
        </footer>
      </div>
    </>
  );
}
