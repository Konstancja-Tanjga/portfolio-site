import { Link } from "react-router-dom";
import { Band } from "../components/Band";
import { earlier } from "../content";

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
      <p className="band__more">
        The design system, the methods I run and the projects I build to test them
        are on a page of their own: <Link to="/practice">Practice</Link>.
      </p>
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
