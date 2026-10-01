import { Lane } from "./Wall";

/**
 * A few lines of real source, in the same well as a step's artefact.
 *
 * Verbatim or not at all: the caption names where the lines were copied
 * from, so the reader can open the page and find them.
 */
export function Code({
  code,
  caption,
  source,
}: {
  code: string;
  caption?: string;
  source?: { text: string; href?: string };
}) {
  return (
    <Lane width="column">
      <figure className="artefact">
        <pre className="artefact__code">
          <code>{code}</code>
        </pre>
        {(caption || source) && (
          <figcaption className="artefact__caption">
            {caption}
            {caption && source && " "}
            {source &&
              (source.href ? (
                <a href={source.href} target="_blank" rel="noopener noreferrer">
                  {source.text}
                </a>
              ) : (
                source.text
              ))}
          </figcaption>
        )}
      </figure>
    </Lane>
  );
}
