import { Link } from "react-router-dom";
import { earlier, published } from "../content";

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

      <section aria-labelledby="work-heading">
        <h2 id="work-heading" className="section-label">
          Work
        </h2>
        <div className="grid">
          {published.map((c) => (
            <Link key={c.slug} to={`/work/${c.slug}`} className="card">
              <div className="card__cover">
                {c.cover.shot.src ? (
                  <img src={c.cover.shot.src} alt="" loading="lazy" />
                ) : (
                  <div className="card__slot">
                    <span className="kicker">{c.cover.kicker}</span>
                    <span className="card__slot-title">{c.cover.headline.join(" ")}</span>
                  </div>
                )}
              </div>
              <div className="card__text">
                <h3 className="card__title">{c.title}</h3>
                <p className="card__what">{c.what}</p>
                <p className="card__meta">{c.cover.credit}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="earlier" aria-labelledby="earlier-heading">
        <h2 id="earlier-heading" className="section-label">
          Earlier
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
