import { Link } from "react-router-dom";
import { byGroup, earlier } from "../content";
import type { CaseStudy } from "../content/types";

export function Home() {
  return (
    <div className="page">
      <section className="opening">
        <h1 className="opening__claim">
          I design products and lead the implementation of the design system{" "}
          <em>they run on</em>.
        </h1>
        <p className="opening__body">
          Ten years in complex, data-rich software — ERP, banking, insurance, legal
          and regulatory, industrial energy. Currently Lead Designer / UX Engineer
          for APplus ERP, where I have designed three new applications from zero on
          a design system of nearly 80 components that six products run on.
          Development receives a working React prototype built from those
          components, not a picture of one.
        </p>
      </section>

      <Band
        id="product"
        label="Products"
        note="Shipped software. Each one is a single long page: the reasoning, the screens, the numbers."
      />
      <Band
        id="practice"
        label="Practice"
        note="How the work gets done — the design system, and the methods I run."
      />
      <Band
        id="recognition"
        label="Recognition"
        note="Awards and competition entries. Short pages, not case studies."
        compact
      />

      <section className="earlier" aria-labelledby="earlier-heading">
        <h2 id="earlier-heading" className="section-label">
          Earlier, without a page
        </h2>
        <div>
          {earlier.map((e) => (
            <div className="earlier__row" key={e.client}>
              <div className="earlier__client">{e.client}</div>
              <div className="earlier__what">{e.what}</div>
              <div className="earlier__when">{e.when}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Band({
  id,
  label,
  note,
  compact,
}: {
  id: "product" | "practice" | "recognition";
  label: string;
  note: string;
  compact?: boolean;
}) {
  const items = byGroup(id);
  if (!items.length) return null;
  return (
    <section aria-labelledby={`band-${id}`}>
      <h2 id={`band-${id}`} className="section-label">
        {label}
      </h2>
      <p className="band__note">{note}</p>
      <div className={compact ? "grid grid--compact" : "grid"}>
        {items.map((c) => (
          <Card key={c.slug} study={c} compact={compact} />
        ))}
      </div>
    </section>
  );
}

function Card({ study, compact }: { study: CaseStudy; compact?: boolean }) {
  return (
    <Link to={`/work/${study.slug}`} className="card">
      <div className="card__cover">
        {study.cover.shot.src ? (
          <img src={study.cover.shot.src} alt="" loading="lazy" decoding="async" />
        ) : (
          <div className="card__slot">
            <span className="kicker">{study.cover.kicker}</span>
            <span className="card__slot-title">{study.cover.headline.join(" ")}</span>
          </div>
        )}
      </div>
      <div className="card__text">
        <h3 className="card__title">{study.title}</h3>
        {!compact && <p className="card__what">{study.what}</p>}
        <p className="card__meta">{study.cover.credit}</p>
      </div>
    </Link>
  );
}
