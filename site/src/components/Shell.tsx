import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { findCase, listingFor } from "../content";
import type { ReactNode, Ref } from "react";
import { useMagnetic } from "../system/motion";
import { useScroll } from "../system/useScroll";
import { BackToTop } from "./BackToTop";

import { version as dsVersion } from "@bighatpoland/ui/package.json";

export function Shell({ children }: { children: ReactNode }) {
  const talk = useMagnetic<HTMLAnchorElement>();
  const { deep, direction } = useScroll();
  // The masthead scrolls away with the page. Scrolling back up past the
  // first screen almost always means looking for the way out, so a copy
  // of it slides in at the top; a wall's jump bar moves down under it.
  const bar = deep && direction === "up";
  useEffect(() => {
    document.documentElement.classList.toggle("has-appbar", bar);
    return () => document.documentElement.classList.remove("has-appbar");
  }, [bar]);
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
            <span className="masthead__dot" aria-hidden="true" />
            Konstancja Tanjga-Nawrot
          </Link>
          <nav className="masthead__nav" aria-label="Sections">
            <Sections current={current} talkRef={talk} />
          </nav>
        </header>
      </div>
      <div className={bar ? "appbar is-shown" : "appbar"}>
        <div className="appbar__inner">
          <Link to="/" className="masthead__name">
            <span className="masthead__dot" aria-hidden="true" />
            Konstancja Tanjga-Nawrot
          </Link>
          <nav className="masthead__nav" aria-label="Sections, pinned">
            <Sections current={current} />
          </nav>
        </div>
      </div>
      <main>{children}</main>
      <BackToTop />
      <div className="footer__mark" aria-hidden="true">
        <span>Konstancja</span>
      </div>
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
            installed as a package. The design system is my own: its tokens drive
            every colour on this page, and its components render the badges and states.
            Warsaw, CET. Remote only, B2B only.
          </p>
        </footer>
      </div>
    </>
  );
}

type Current = (to: string) => { "aria-current"?: "page" | "true" };

/** The site's sections, shared by the masthead and the app bar. */
function Sections({ current, talkRef }: { current: Current; talkRef?: Ref<HTMLAnchorElement> }) {
  return (
    <>
      <Link to="/" {...current("/")}>Work</Link>
      <Link to="/practice" {...current("/practice")}>Practice</Link>
      <Link to="/watercolours" {...current("/watercolours")}>Watercolours</Link>
      <Link to="/about" {...current("/about")}>About</Link>
      <a href="https://github.com/konstancja-tanjga">GitHub</a>
      <a href="https://linkedin.com/in/konstancja-tanjga">LinkedIn</a>
      <a ref={talkRef} className="masthead__talk" href="mailto:tanjgakonstancja@gmail.com">Let's talk</a>
    </>
  );
}
