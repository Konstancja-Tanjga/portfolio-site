import { useId, useState } from "react";

import type { Attribution } from "../content/types";
import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * Source code, copied verbatim from where it lives.
 *
 * A closed drawer, like a diagram: a title bar with the file name, the
 * caption as the one-line summary and where it comes from; the code
 * itself opens on a click. The reader who skims sees that there is code
 * and whose it is; the reader who wants it gets it with line numbers.
 */
export function Code({ code, caption, source }: { code: string; caption?: string; source: Attribution }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  const id = useId();
  const lines = code.replace(/\n$/, "").split("\n");
  const file = source.text.replace(/^Source:\s*/i, "").replace(/\.$/, "");
  return (
    <Lane width="wall">
      <div ref={ref} className={[shown ? "codebox is-shown" : "codebox", open ? "is-open" : ""].join(" ")}>
        <button type="button" className="codebox__head" aria-expanded={open} aria-controls={`${id}-body`} onClick={() => setOpen((v) => !v)}>
          <span className="codebox__dots" aria-hidden="true"><i /><i /><i /></span>
          <span className="codebox__file">{file}</span>
          <span className="codebox__lines">{lines.length} lines</span>
          <span className="codebox__hint" aria-hidden="true">{open ? "Close" : "Open the code"}</span>
          <span className="codebox__chevron" aria-hidden="true" />
        </button>
        {caption && <p className="codebox__caption">{caption}</p>}
        <div id={`${id}-body`} className="codebox__body" hidden={!open}>
          <pre className="codebox__pre">
            <code>
              {lines.map((l, i) => (
                <span className="codebox__line" key={i}>
                  <span className="codebox__n" aria-hidden="true">{i + 1}</span>
                  {l || " "}
                  {"\n"}
                </span>
              ))}
            </code>
          </pre>
          <p className="codebox__source">
            {source.href ? (
              <a href={source.href} target="_blank" rel="noopener noreferrer">{source.text}</a>
            ) : (
              source.text
            )}
          </p>
        </div>
      </div>
    </Lane>
  );
}
