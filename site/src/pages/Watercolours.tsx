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

/**
 * A regular grid of mounts.
 *
 * The paintings are 1:1 and 4:3 and a few taller, so filling a uniform tile
 * would crop them. Instead every tile is the same 4:3 mount and the painting
 * sits inside it, centred and whole — which is how a framed set hangs, and
 * the reason the grid reads as one wall rather than a pile.
 */
function Plates({
  paintings,
  onOpen,
}: {
  paintings: Painting[];
  onOpen: (shot: { src: string; caption?: string }) => void;
}) {
  return (
    <ul className="plates">
      {paintings.map((painting, index) => {
        const caption = [painting.title, painting.note].filter(Boolean).join(" · ");
        return (
          <li
            className="plate"
            key={painting.src}
            // Staggered arrival, capped so a long series does not make the
            // last painting wait two seconds for its turn.
            style={{ ["--plate-delay" as string]: `${Math.min(index, 7) * 45}ms` }}
          >
            <button
              type="button"
              className="plate__mount"
              onClick={() => onOpen({ src: asset(painting.src), caption })}
              aria-label={caption ? `${caption} — view full size` : "View full size"}
            >
              <img src={asset(painting.src)} alt={caption} loading="lazy" decoding="async" />
              <span className="plate__zoom" aria-hidden="true">
                Full size
              </span>
            </button>
            {caption && (
              <p className="plate__caption">
                {painting.title}
                {painting.note && <span className="plate__note"> · {painting.note}</span>}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
