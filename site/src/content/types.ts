/* ---------------------------------------------------------------
   The content model.

   A project page is data, never markup. Everything below has a
   component in src/system that renders it, and the set is closed:
   if a wall needs something that isn't here, the answer is a new
   block type plus a new component — not markup in a content file.

   The vocabulary mirrors the Figma walls: cover, personas, steps,
   use cases, system evolution, annotated screens.
   --------------------------------------------------------------- */

/** How wide something sits in the wall. */
export type Width = "column" | "wall" | "bleed";

export type Shot = {
  /** file in public/work/<slug>/, e.g. "/work/applus-analytics/01-home.png" */
  src?: string;
  /** rendered in place of a missing export, so the wall is walkable while empty */
  slot?: string;
  caption?: string;
};

/* ---------- the repeating content components ---------- */

/**
 * A video file in public/work/<slug>/, with the source it came from.
 *
 * Self-hosted rather than embedded — see Video.tsx for why a portfolio
 * cannot rent its evidence from someone else's channel.
 */
export type Video = {
  /** "/work/elly-ai-assistant/elly-help.mp4" */
  src: string;
  /** names the player for screen readers, so it cannot be "video" */
  title: string;
  /** a still, shown before play and while the file loads */
  poster?: string;
  caption?: string;
  /**
   * A WebVTT file in public/, and the language it is in. Present when the
   * film is not in the language of the page: this site is in English and
   * the Elly film is in German, so without a track half the evidence is
   * inaudible to the people it is meant to convince.
   */
  subtitles?: { src: string; label: string; srclang: string };
  /** whose film this is, and where it was published */
  credit?: { text: string; href?: string };
};


/** One of the four-up persona cards. Same slots every time. */
export type Persona = {
  n: string;
  name: string;
  /** "AUTHOR · IT OR DEPARTMENT POWER USER" */
  badge: string;
  quote: string;
  context: string;
  goals: string[];
  /** where it breaks today */
  breaks: string;
  /** so the product must… */
  must: string;
  /** the one-word job: BUILD / INTERROGATE / MONITOR / CONSUME */
  job?: string;
};

/** A numbered stage in a flow: the rule, and why it isn't decoration. */
export type Step = {
  n: string;
  title: string;
  rule: { label: string; body: string };
  /** The second half — why the rule is not decoration. Omit when there
   *  isn't one worth writing; a required field only invites a placeholder. */
  why?: { label: string; body: string };
};

/**
 * A photograph beside the claim — the opening of the About wall.
 *
 * Only that wall has one, and only one of them. A second portrait block
 * would be a person appearing twice, which is not a layout problem.
 */
export type Portrait = {
  shot: Shot;
  kicker?: string;
  /** set large, the claim the rest of the wall earns */
  claim: string;
  /** the paragraph beside the photograph */
  lead: string;
  /** location, availability, languages — a person's meta strip */
  facts?: { label: string; value: string }[];
};

/** The use-case template. Every UC on every wall fills the same slots. */
export type UseCase = {
  /** "UC-01" */
  id: string;
  title: string;
  actor: { name: string; body: string; note?: string };
  trigger: { body: string; note?: string };
  precondition: { body: string; note?: string };
  flow: { n: string; text: string; note?: string }[];
  /** Two exits and no third — the shape most of these take. Optional
   *  because a use case may not have had them written yet. */
  exits?: { label: string; text: string }[];
  exitsNote?: string;
  postcondition: { body: string; note?: string };
  /** why this shape, and the rule it sets for the rest of the product */
  why: string;
  rule: string;
  ruleNote?: string;
};

/** A version of the design system and what changed about its ownership. */
export type Version = {
  version: string;
  claim: string;
  sourceOfTruth: string;
  ships: string;
  costs: string;
  moved?: string;
};

/** A screen with the reasoning drawn on it: legend, zones, guardrails. */
export type Annotated = {
  id?: string;
  title?: string;
  standfirst?: string;
  shot: Shot;
  legend?: { swatch?: string; label: string }[];
  /** R1…R7 — the surface rules this screen demonstrates */
  rules?: { id: string; text: string }[];
  notes?: { label: string; body: string }[];
};

/* ---------- blocks ---------- */

export type Block =
  | { kind: "passage"; html: string }
  | { kind: "points"; items: string[] }
  | ({ kind: "shot"; width?: Width } & Shot)
  | { kind: "duo"; items: Shot[]; caption?: string }
  /**
   * Several small screens laid out across the wall instead of one per
   * screenful. A 360x800 phone export stretched to the full wall is both
   * unreadable and endless to scroll; in a row of five it is legible and the
   * set can be compared, which is the point of showing five.
   *
   * `size` is what the images are, not how many columns to draw — the grid
   * works that out from the width available.
   */
  | {
      kind: "set";
      items: Shot[];
      /** phone: tall handset · square: an icon or illustration · wide: a screen */
      size?: "phone" | "square" | "wide";
      caption?: string;
    }
  | ({ kind: "video"; width?: Width } & Video)
  | { kind: "stats"; items: { value: string; label: string }[] }
  | { kind: "pull"; text: string }
  | { kind: "thesis"; label?: string; text: string }
  | { kind: "spec"; caption?: string; rows: { key: string; value: string }[] }
  | { kind: "portrait"; portrait: Portrait }
  | { kind: "personas"; standfirst?: string; items: Persona[] }
  | { kind: "steps"; standfirst?: string; items: Step[] }
  | { kind: "usecase"; uc: UseCase }
  | { kind: "evolution"; items: Version[] }
  | { kind: "annotated"; items: Annotated[] };

/** A named stretch of the wall. Chapters drive the jump bar. */
export type Chapter = {
  /** used in the URL hash and the jump bar */
  id: string;
  /** the number on the wall, keeping the Figma numbering: "01", "17" */
  n?: string;
  heading?: string;
  /**
   * The sharp claim, one or two sentences, directly under the heading.
   * Not a summary of the chapter — an assertion the chapter then earns.
   * "A frame without an identifier is an opinion."
   */
  maxim?: string;
  /** The explanatory line: what this chapter actually covers. */
  standfirst?: string;
  blocks: Block[];
};

/** The cover, on the card and at the top of the wall. */
export type Cover = {
  /** "PRODUCT DESIGN · ENTERPRISE SOFTWARE" */
  kicker: string;
  /** two lines, set large */
  headline: string[];
  subline: string;
  /** "DASHBOARDS · QUERIES · DATA MODELS · AI ANALYST" */
  stamp: string;
  /** "Lead designer · Asseco Solutions · 2026" */
  credit: string;
  /**
   * The thumbnail on the work page. Not drawn on the intro — see Cover.tsx
   * for why sixteen projects share one typeset frame instead.
   */
  shot: Shot;
};

/**
 * live — on the work wall and in the build
 * held — finished, published on `until`. Excluded from the production
 *        bundle; visible locally with `npm run dev`.
 */
export type Status = { state: "live" } | { state: "held"; until: string; why: string };

/**
 * Which band of the work page a wall sits in.
 *
 * product      — the shipped products. The main grid.
 * practice     — how I work: methods, systems, workshops.
 * recognition  — awards and competition entries. Short, not case studies.
 */
export type Group = "product" | "practice" | "recognition";

export type CaseStudy = {
  slug: string;
  title: string;
  /** one line, on the card */
  what: string;
  lead: string;
  status: Status;
  group: Group;
  cover: Cover;
  /** the strip under the title */
  meta: { label: string; value: string }[];
  chapters: Chapter[];
};
