import { Link } from "react-router-dom";
import { byGroup } from "../content";
import type { CaseStudy, Group } from "../content/types";
import { asset } from "../system/asset";

/**
 * One band of a listing page: a label, a line on what is in it, and its cards.
 * Renders nothing if the group has no published walls.
 */
export function Band({
  id,
  label,
  note,
  compact,
  feature,
}: {
  id: Group;
  label: string;
  note: string;
  compact?: boolean;
  /** The first wall in the band is the one to read first: give it the full width. */
  feature?: boolean;
}) {
  const items = byGroup(id);
  if (!items.length) return null;
  return (
    <section aria-labelledby={`band-${id}`}>
      <h2 id={`band-${id}`} className="section-label">
        {label}
      </h2>
      <p className="band__note">{note}</p>
      <div className={compact ? "grid grid--compact" : feature ? "grid grid--feature" : "grid"}>
        {items.map((c, i) => (
          <Card key={c.slug} study={c} compact={compact} featured={feature && i === 0} />
        ))}
      </div>
    </section>
  );
}

function Card({
  study,
  compact,
  featured,
}: {
  study: CaseStudy;
  compact?: boolean;
  featured?: boolean;
}) {
  return (
    <Link to={`/work/${study.slug}`} className={featured ? "card card--feature" : "card"}>
      <div className="card__cover">
        {study.cover.shot.src ? (
          <img src={asset(study.cover.shot.src)} alt="" loading="lazy" decoding="async" />
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
