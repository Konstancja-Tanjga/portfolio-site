import { StateBlock } from "@bighatpoland/ui";

import { countPaintings, watercolours } from "../content/watercolours";
import type { Painting } from "../content/watercolours";
import { asset } from "../system/asset";
import { Lightbox, useLightbox } from "../system/Lightbox";

/**
 * A gallery, not a wall. Deliberately kept off the work page: it says
 * something true, and it should not be the second thing a hiring
 * manager scrolls past.
 */
export function Watercolours() {
  const lightbox = useLightbox();

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

          {category.paintings?.length ? (
            <Plates paintings={category.paintings} onOpen={lightbox.show} />
          ) : null}

          {category.series?.map((series) => (
            <div className="series" key={series.id}>
              <h3 className="series__name">{series.name}</h3>
              {series.blurb && <p className="series__blurb">{series.blurb}</p>}
              <Plates paintings={series.paintings} onOpen={lightbox.show} />
            </div>
          ))}

          {countPaintings(category) === 0 && (
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

      {lightbox.open && <Lightbox shot={lightbox.open} onClose={lightbox.close} />}
    </div>
  );
}

function Plates({
  paintings,
  onOpen,
}: {
  paintings: Painting[];
  onOpen: (shot: { src: string; caption?: string }) => void;
}) {
  return (
    <div className="plates">
      {paintings.map((painting) => {
        const caption = [painting.title, painting.note].filter(Boolean).join(" · ");
        return (
          <figure className="plate" key={painting.src}>
            <button
              type="button"
              className="plate__open"
              onClick={() => onOpen({ src: asset(painting.src), caption })}
              aria-label={caption ? `${caption} — view full size` : "View full size"}
            >
              <img src={asset(painting.src)} alt={caption} loading="lazy" decoding="async" />
            </button>
            {caption && (
              <figcaption>
                {painting.title}
                {painting.note && <span className="plate__note"> · {painting.note}</span>}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}
