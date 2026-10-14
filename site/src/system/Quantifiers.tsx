import type { CSSProperties, ReactNode } from "react";
import { asset } from "./asset";

/**
 * ∀ and ∃ in a headline, drawn as glyphs instead of set as characters.
 *
 * The display face has neither symbol, so the browser falls back to a thin
 * system font and the two words that carry the Ogólnopolska Strefa Talentu
 * headline look borrowed. The programme's brand book solves the same problem
 * the same way (page 26): the quantifiers come from glyph files, at cap
 * height, in the colour of the text. The files are the programme's own
 * glyphs; they are used as a mask so the colour follows the skin.
 *
 * The character stays in the accessible name, so a screen reader still reads
 * "for all" and "there exists".
 */
const GLYPHS: Record<string, { file: string; name: string; cls: string }> = {
  "∀": { file: "/work/ogolnopolska-strefa-talentu/glyph-forall.svg", name: "for all", cls: "q q--forall" },
  "∃": { file: "/work/ogolnopolska-strefa-talentu/glyph-exists.svg", name: "there exists", cls: "q q--exists" },
};

export function withQuantifiers(text: string): ReactNode {
  if (!/[∀∃]/.test(text)) return text;
  return text.split(/([∀∃])/).map((part, i) => {
    const g = GLYPHS[part];
    if (!g) return part;
    const url = `url("${asset(g.file)}")`;
    return (
      <span
        key={i}
        className={g.cls}
        role="img"
        aria-label={`${part}, ${g.name}`}
        style={{ WebkitMaskImage: url, maskImage: url } as CSSProperties}
      />
    );
  });
}

/** A headline line that opens with a quantifier starts on its own line. */
export const opensWithQuantifier = (line: string) => /^[∀∃]/.test(line);
