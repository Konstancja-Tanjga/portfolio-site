import { Link } from "react-router-dom";
import { Band } from "../components/Band";
import { earlier, howIWork } from "../content";
import { ProcessBoard } from "../system";

export function Home() {
  return (
    <div className="page">
      <section className="opening">
        <h1 className="opening__claim">
          I design products and lead the implementation of the design system{" "}
          <em>they run on</em>.
        </h1>
        <p className="opening__body">
          Lead Product Designer for complex enterprise software. Ten years
          designing products people run their work through — ERP, document
          management, analytics, AI assistance. I take a product from the first
          interview to the shipped screen, and I build design systems that keep
          what is designed and what is built the same thing.
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
      <section className="how" aria-labelledby="how-heading">
        <h2 id="how-heading" className="section-label">
          How I work
        </h2>
        <ProcessBoard process={howIWork} />
      </section>

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
