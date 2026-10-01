import type { Attribution } from "../content/types";
import { Lane } from "./Wall";

/**
 * A few lines of real source, styled like a step's artefact (Steps.tsx).
 *
 * `source` names where the lines were copied from, linked when it has a
 * public URL, so the reader can open the page and find them. `caption` is
 * commentary on top of that.
 */
export function Code({
  code,
  caption,
  source,
}: {
  code: string;
  caption?: string;
  source: Attribution;
}) {
  return (
    <Lane width="column">
      <figure className="artefact">
        <pre className="artefact__code">
          <code>{code}</code>
        </pre>
        <figcaption className="artefact__caption">
          {caption && `${caption} `}
          {source.href ? (
            <a href={source.href} target="_blank" rel="noopener noreferrer">
              {source.text}
            </a>
          ) : (
            source.text
          )}
        </figcaption>
      </figure>
    </Lane>
  );
}
