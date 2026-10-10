import { Link } from "react-router-dom";
import { byGroup, findCase } from "../content";
import type { CaseStudy } from "../content/types";
import { asset } from "../system/asset";
import { useSkin } from "../skins/SkinContext";
import { AquarelleOrnament, BlueprintOrnament, DecoOrnament } from "../home/ornaments";
import { career, offScreen, practices } from "../home/story";

/**
 * The home page: one argument, in the reader's chosen skin.
 *
 * The argument is that the same eye that draws a buzzard's primary from
 * life designs the ERP a factory runs on — observation, then structure.
 * The sections carry it in order: who, what is on the desk now, the work
 * itself, where it came from, and what the same hands do off screen.
 */
export function Home() {
  const { skin } = useSkin();
  const products = byGroup("product");
  const practice = byGroup("practice");
  const award = findCase("erp-of-the-year");

  return (
    <div className="hm">
      {/* ---------- the opening ---------- */}
      <section className="hm-hero" aria-labelledby="hero-claim">
        <div className="hm-hero__art" key={skin}>
          {skin === "deco" && <DecoOrnament />}
          {skin === "blueprint" && <BlueprintOrnament />}
          {skin === "aquarelle" && <AquarelleOrnament />}
        </div>
        <div className="page hm-hero__text">
          <p className="hm-hero__who">Konstancja Tanjga-Nawrot</p>
          <h1 id="hero-claim" className="hm-hero__claim">
            <span className="hm-hero__line">I design the software</span>
            <span className="hm-hero__line">factories run on.</span>
            <span className="hm-hero__line hm-hero__line--turn">Then I go out and paint birds.</span>
          </h1>
          <p className="hm-hero__lead">
            Lead Designer for APplus ERP at Asseco Solutions, where I lead a team of two
            and own a design system six products install as code. Watercolourist, birder,
            botanical illustrator. Warsaw, working remotely across the DACH region.
          </p>
          <dl className="hm-ledger">
            <div>
              <dt>ERP System of the Year, 2025 and 2026</dt>
              <dd>
                {award ? (
                  <Link to={`/work/${award.slug}`}>Gold in User Experience, two years running</Link>
                ) : (
                  "Gold in User Experience, two years running"
                )}
              </dd>
            </div>
            <div>
              <dt>Three applications</dt>
              <dd>designed from zero and shipped since 2024</dd>
            </div>
            <div>
              <dt>Around eighty components</dt>
              <dd>in a design system published as a package</dd>
            </div>
            <div>
              <dt>Ten years</dt>
              <dd>in data-heavy software: ERP, banking, insurance, legal, energy</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ---------- now ---------- */}
      <section className="page hm-now" aria-labelledby="now-heading">
        <div className="hm-now__text">
          <h2 id="now-heading" className="hm-h2">
            On the desk now
          </h2>
          <p className="hm-standfirst">
            Since November 2023 I have led design for APplus, a web ERP for mid-sized
            manufacturers in Germany, Austria and Switzerland, on desktop and on the shop
            floor. Two senior designers work with me. Between us we own the product's design
            system as a released thing rather than a Figma file: tokens and component APIs
            authored in Figma, implemented in Angular, React and web components, documented
            in Storybook, regression-tested in Chromatic, and published to Nexus, where six
            product teams install them as a dependency. I author and merge component pull
            requests myself and check the snapshots against the design intent.
          </p>
          <p className="hm-standfirst">
            The eye does not change between the field and the desk. A buzzard is identified
            from twenty field marks in the right order; an ERP screen is designed from the
            handful of facts a planner needs before the rest. Both begin with looking long
            enough to see what is actually there.
          </p>
        </div>
        <ul className="hm-practices">
          {practices.map((p) => (
            <li key={p.title} className="hm-practice">
              <h3 className="hm-practice__title">{p.title}</h3>
              <p className="hm-practice__body">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- the work ---------- */}
      <section className="page hm-work" aria-labelledby="work-heading">
        <h2 id="work-heading" className="hm-h2">
          Shipped work
        </h2>
        <p className="hm-note">
          Each one is a single long page: the reasoning, the screens, the numbers.
        </p>
        <div className="hm-cards">
          {products.map((c, i) => (
            <WorkCard key={c.slug} study={c} big={i === 0} />
          ))}
        </div>

        <h2 className="hm-h2 hm-h2--second">The practice</h2>
        <p className="hm-note">
          The design systems, and the projects I build to put them on a real brief.{" "}
          <Link to="/practice">All practice work</Link>
        </p>
        <div className="hm-cards hm-cards--practice">
          {practice.map((c) => (
            <WorkCard key={c.slug} study={c} />
          ))}
        </div>
      </section>

      {/* ---------- where it came from ---------- */}
      <section className="page hm-career" aria-labelledby="career-heading">
        <h2 id="career-heading" className="hm-h2">
          Where it came from
        </h2>
        <ol className="hm-timeline">
          {career.map((c) => (
            <li key={c.org + c.years} className="hm-stop">
              <span className="hm-stop__years">{c.years}</span>
              <span className="hm-stop__org">{c.org}</span>
              <span className="hm-stop__role">{c.role}</span>
              <span className="hm-stop__what">{c.what}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- off screen ---------- */}
      <section className="page hm-off" aria-labelledby="off-heading">
        <div className="hm-off__text">
          <h2 id="off-heading" className="hm-h2">
            Off screen
          </h2>
          <p className="hm-standfirst">
            I paint in watercolour, mostly on location: cathedrals, raptors, the odd
            flamingo. I keep a field list of birds of prey and wrote a course on telling
            them apart in flight. I draw plants the way botanical plates do, one specimen,
            every part labelled. None of it is a hobby kept away from the work. It is where
            the habit of looking first comes from.
          </p>
          <p className="hm-off__links">
            <Link to="/watercolours">The paintings</Link>
            {findCase("world-of-raptors") && (
              <Link to="/work/world-of-raptors">World of Raptors</Link>
            )}
          </p>
        </div>
        <ul className="hm-plates">
          {offScreen.map((p) => (
            <li key={p.src} className="hm-plate">
              <img src={asset(p.src)} alt={p.alt} loading="lazy" decoding="async" />
              <span className="hm-plate__caption">{p.caption}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- contact ---------- */}
      <section className="page hm-contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="hm-h2">
          Write to me
        </h2>
        <p className="hm-standfirst">
          Open to a lead or principal design role, remote, permanent or B2B.
        </p>
        <p className="hm-contact__links">
          <a href="mailto:tanjgakonstancja@gmail.com">tanjgakonstancja@gmail.com</a>
          <a href="https://linkedin.com/in/konstancja-tanjga">LinkedIn</a>
          <a href="https://github.com/konstancja-tanjga">GitHub</a>
          <a href="https://konstancja-tanjga.github.io/bighat-design-system/">
            Design system in Storybook
          </a>
        </p>
      </section>
    </div>
  );
}

function WorkCard({ study, big }: { study: CaseStudy; big?: boolean }) {
  return (
    <Link to={`/work/${study.slug}`} className={big ? "hm-card hm-card--big" : "hm-card"}>
      <span className="hm-card__cover">
        {study.cover.shot.src ? (
          <img src={asset(study.cover.shot.src)} alt="" loading="lazy" decoding="async" />
        ) : (
          <span className="hm-card__slot">{study.cover.headline.join(" ")}</span>
        )}
      </span>
      <span className="hm-card__text">
        <span className="hm-card__title">{study.title}</span>
        <span className="hm-card__what">{study.what}</span>
        <span className="hm-card__credit">{study.cover.credit}</span>
      </span>
    </Link>
  );
}
