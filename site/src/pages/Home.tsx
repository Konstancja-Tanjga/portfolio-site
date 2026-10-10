import { Link } from "react-router-dom";
import { byGroup, findCase } from "../content";
import type { CaseStudy } from "../content/types";
import { asset } from "../system/asset";
import { offScreen, practices } from "../home/story";

/**
 * The home page.
 *
 * Image first: the portrait under the claim, then the work as large tiles
 * that carry the colour, then the numbers, then who she is and how she
 * works, then a way to write. Every section is readable by its heading.
 */
export function Home() {
  const products = byGroup("product");
  const practice = byGroup("practice");
  const award = findCase("erp-of-the-year");

  return (
    <div className="hm">
      <section className="hm-hero" aria-labelledby="hero-claim">
        <div className="hm-hero__photo" aria-hidden="true">
          <img src={asset("/about/portrait.jpg")} alt="" />
        </div>
        <div className="hm-hero__text">
          <h1 id="hero-claim" className="hm-hero__claim">
            <span className="hm-hero__line">Enterprise software,</span>
            <span className="hm-hero__line">designed from zero</span>
            <span className="hm-hero__line hm-hero__line--quiet">and built to be used.</span>
          </h1>
          <p className="hm-hero__lead">
            I am Konstancja, Lead Designer and UX Engineer for APplus ERP at Asseco
            Solutions. I lead a team of two, own a design system that six products
            install as code, and run the research myself.
          </p>
          <ul className="hm-chips">
            <li className="hm-chip">
              <strong>Gold, twice</strong>
              <span>
                {award ? (
                  <Link to={`/work/${award.slug}`}>ERP-System des Jahres, User Experience, 2025 and 2026</Link>
                ) : (
                  "ERP-System des Jahres, User Experience, 2025 and 2026"
                )}
              </span>
            </li>
            <li className="hm-chip">
              <strong>Four products</strong>
              <span>designed from zero and shipped since 2024</span>
            </li>
            <li className="hm-chip">
              <strong>Ten years</strong>
              <span>in data-dense, regulated software</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="page hm-work" aria-labelledby="work-heading">
        <h2 id="work-heading" className="hm-h2">Selected work</h2>
        <p className="hm-note">Shipped products. Each page is the reasoning, the screens and the numbers.</p>
        <div className="hm-tiles">
          {products.map((c) => (
            <Tile key={c.slug} study={c} />
          ))}
        </div>

        <h2 className="hm-h2" style={{ marginTop: "var(--bh-space-8)" }}>Practice</h2>
        <p className="hm-note">
          The design systems, and the projects I build to put them on a real brief.{" "}
          <Link className="hm-link" to="/practice">All practice work</Link>
        </p>
        <div className="hm-tiles hm-tiles--practice">
          {practice.map((c) => (
            <Tile key={c.slug} study={c} compact />
          ))}
        </div>

        <dl className="hm-numbers">
          <div><dd>2</dd><dt>Golds in User Experience, ERP-System des Jahres 2025 and 2026</dt></div>
          <div><dd>4</dd><dt>products designed from zero at Asseco: Elly, Best Practice Hub, Documents, Analytics</dt></div>
          <div><dd>6</dd><dt>products that install the FOX design system as a versioned package</dt></div>
          <div><dd>10</dd><dt>years in ERP, insurance and healthcare, legal, industrial energy</dt></div>
        </dl>
      </section>

      <section className="page hm-about" aria-labelledby="about-heading">
        <div>
          <h2 id="about-heading" className="hm-h2">How I work</h2>
          <p className="hm-about__claim">
            Design, the design system and the code that proves it are one job on my desk.
          </p>
          <p className="hm-about__body">
            Tokens and component APIs are authored in Figma, implemented in Angular, React
            and web components, documented in Storybook, tested in Chromatic and published
            to Nexus. I author and merge the pull requests, review the build against the
            frames, and reconcile the file to the code. Research runs on a rhythm:
            quarterly interviews, journey mapping, usability testing every release.{" "}
            <Link className="hm-link" to="/about">More about how I work</Link>
          </p>
        </div>
        <ul className="hm-practices">
          {practices.slice(0, 5).map((p) => (
            <li key={p.title} className="hm-practice">
              <h3 className="hm-practice__title">{p.title}</h3>
              <p className="hm-practice__body">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="page hm-off" aria-labelledby="off-heading">
        <h2 id="off-heading" className="hm-h2">Off screen</h2>
        <p className="hm-note">
          Watercolour, mostly on location. Birds of prey, and a course on telling them
          apart in flight. Botanical illustration.{" "}
          <Link className="hm-link" to="/watercolours">The paintings</Link>
        </p>
        <ul className="hm-plates">
          {offScreen.map((p) => (
            <li key={p.src} className="hm-plate">
              <img src={asset(p.src)} alt={p.alt} loading="lazy" decoding="async" />
              <span className="hm-plate__caption">{p.caption}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="page hm-contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="hm-contact__claim">
          Open to a lead or principal role, remote, B2B.
        </h2>
        <a className="hm-contact__mail" href="mailto:tanjgakonstancja@gmail.com">tanjgakonstancja@gmail.com</a>
        <p className="hm-contact__links">
          <a href="https://linkedin.com/in/konstancja-tanjga">LinkedIn</a>
          <a href="https://github.com/konstancja-tanjga">GitHub</a>
          <a href="https://konstancja-tanjga.github.io/bighat-design-system/">Design system in Storybook</a>
        </p>
      </section>
    </div>
  );
}

function Tile({ study, compact }: { study: CaseStudy; compact?: boolean }) {
  const year = study.cover.credit.match(/\d{4}(?:[–-]\d{4})?/)?.[0];
  return (
    <Link to={`/work/${study.slug}`} className="hm-tile">
      <span className="hm-tile__cover">
        {study.cover.shot.src ? (
          <img src={asset(study.cover.shot.src)} alt="" loading="lazy" decoding="async" />
        ) : (
          <span className="hm-tile__slot">{study.cover.headline.join(" ")}</span>
        )}
      </span>
      <span className="hm-tile__text">
        <span className="hm-tile__title">{study.title}</span>
        {year && <span className="hm-tile__meta">{year}</span>}
        {!compact && <span className="hm-tile__what">{study.what}</span>}
      </span>
    </Link>
  );
}
