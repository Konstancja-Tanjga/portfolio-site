import { StateBlock } from "@bighatpoland/ui";

import { watercolours } from "../content/watercolours";

/**
 * A gallery, not a wall. Deliberately kept off the work page: it says
 * something true, and it should not be the second thing a hiring
 * manager scrolls past.
 */
export function Watercolours() {
  return (
    <div className="page">
      <section className="opening">
        <h1 className="opening__claim">Watercolours</h1>
        <p className="opening__body">
          Watercolour and urban sketching, mostly on location. Nothing here is
          client work.
        </p>
      </section>

      {watercolours.map((category) => (
        <section key={category.id} aria-labelledby={`wc-${category.id}`}>
          <h2 id={`wc-${category.id}`} className="section-label">
            {category.name}
          </h2>
          {category.blurb && <p className="band__note">{category.blurb}</p>}
          {category.paintings.length ? (
            <div className="plates">
              {category.paintings.map((painting) => (
                <figure className="plate" key={painting.src}>
                  <img src={painting.src} alt={painting.title ?? ""} loading="lazy" />
                  {(painting.title || painting.note) && (
                    <figcaption>
                      {painting.title}
                      {painting.note && <span> · {painting.note}</span>}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          ) : (
            <StateBlock
              state="empty"
              density="section"
              title={`No ${category.name.toLowerCase()} here yet`}
              description={
                <>
                  Drop files into <code>public/watercolours/{category.id}/</code> and
                  list them in <code>src/content/watercolours.ts</code>.
                </>
              }
            />
          )}
        </section>
      ))}
    </div>
  );
}
