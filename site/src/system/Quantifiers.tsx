import { Fragment, type CSSProperties, type ReactNode } from "react";
import { asset } from "./asset";

/**
 * ∀ and ∃ in a headline, drawn as glyphs instead of set as characters.
 *
 * Bricolage Grotesque, the display face, has neither symbol, so the browser
 * falls back to a thin system font and the two symbols that carry the
 * Ogólnopolska Strefa Talentu headline look borrowed. The programme's brand
 * book solves the same problem the same way (page 26): the quantifiers come
 * from glyph files, at cap height, in the colour of the text. The files are
 * the programme's own glyphs, used as a mask over `currentColor`, so the
 * glyph takes the colour of the text around it.
 *
 * The drawn glyph is hidden from assistive technology and the character sits
 * beside it, visually hidden. A screen reader reads the symbol once, as it
 * would in plain text, and copy or find-in-page still finds ∀ and ∃.
 */
const GLYPHS: Record<string, { file: string; cls: string }> = {
  "∀": { file: "/work/ogolnopolska-strefa-talentu/glyph-forall.svg", cls: "q q--forall" },
  "∃": { file: "/work/ogolnopolska-strefa-talentu/glyph-exists.svg", cls: "q q--exists" },
};

export function withQuantifiers(text: string): ReactNode {
  if (!/[∀∃]/.test(text)) return text;
  return text.split(/([∀∃])/).map((part, i) => {
    const g = GLYPHS[part];
    if (!g) return part;
    const url = `url("${asset(g.file)}")`;
    return (
      <Fragment key={i}>
        <span className={g.cls} aria-hidden="true" style={{ WebkitMaskImage: url, maskImage: url } as CSSProperties} />
        <span className="sr-only">{part}</span>
      </Fragment>
    );
  });
}

/** A headline line that opens with a quantifier starts on its own line. */
export const opensWithQuantifier = (line: string) => /^[∀∃]/.test(line);
