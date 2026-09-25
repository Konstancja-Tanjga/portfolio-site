import type { CaseStudy } from "./types";

/**
 * Structure mirrors the Figma wall — twelve frames, in its numbering,
 * so the file and the canvas stay walkable side by side.
 *
 * Chapters carry a heading and their frame, and nothing else. Every
 * maxim, standfirst and paragraph this wall wants is typeset inside the
 * frame itself; repeating it here printed the same sentence twice.
 *
 * Two exceptions: chapter 12 has no frame and is written as blocks, and
 * the closing numbers are cut from the bottom of ch11 so it can sit
 * between them and the handoff.
 */
export const bi: CaseStudy = {
  slug: "applus-analytics",
  title: "APplus Analytics",
  what: "Business intelligence for an ERP platform, designed from zero",
  lead:
    "A standalone BI platform inside APplus ERP: a data warehouse and the analytics application on top of it. No analytics surface existed before — the numbers lived in module lists and Excel exports.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Business", "Intelligence"],
    subline: "for APplus ERP",
    stamp: "DASHBOARDS · QUERIES · DATA MODELS · AI ANALYST",
    credit: "Lead designer · Asseco Solutions · 2026",
    shot: { src: "/work/applus-analytics/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Lead designer — sole designer on the product" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP — Analytics" },
    {
      label: "Design system",
      value: "FOX v2.3 → v3.0, co-authored with one other designer",
      href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs",
    },
    { label: "Team", value: "Seven: three developers, a requirements engineer, QA, a PM and one designer" },
    { label: "Period", value: "January – September 2026" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch01.png" }],
    },
    {
      id: "hard-brief",
      n: "01a",
      heading: "Why it is a hard design brief",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch01a.png" }],
    },
    {
      id: "who-for",
      n: "02",
      heading: "Who it is for",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch02.png" }],
    },
    {
      id: "discovery",
      n: "03",
      heading: "Discovery and research",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch03.png" }],
    },
    {
      id: "initial-idea",
      n: "04",
      heading: "Analysis of the initial idea",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch04.png" }],
    },
    {
      id: "prototypes",
      n: "05",
      heading: "First prototypes",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch05.png" }],
    },
    {
      id: "design-system",
      n: "06",
      heading: "Design system",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch06.png" }],
    },
    {
      id: "sign-off",
      n: "07",
      heading: "Design and sign-off",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch07.png" }],
    },
    {
      id: "uc-ai-analyst",
      n: "08",
      heading: "AI Data Analyst",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch08.png" }],
    },
    {
      id: "uc-queries",
      n: "09",
      heading: "Queries",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch09.png" }],
    },
    {
      id: "uc-data-models",
      n: "10",
      heading: "Data models",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch10.png" }],
    },
    {
      id: "handoff",
      n: "11",
      heading: "Handoff",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch11.png" }],
    },
    /* Not a Figma frame: the one chapter of this wall written as native
       blocks. Handoff ends where the frame does; what happens to a feature
       after it is built is a sequence, and the steps block is that shape. */
    {
      id: "after-development",
      n: "12",
      heading: "After development",
      maxim: "A merged pull request is not a finished feature. It is the first time the design exists at all.",
      standfirst:
        "Handoff delivers FOX code, so what reaches review is already built from the right parts. What is left to check is everything a component library cannot guarantee: composition, states, real data, German, and whether the requirement was met. Six stages, from preview build to the next iteration.",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              n: "01",
              stage: "Design review",
              flow: { from: "A pull request", to: "Review comments before merge" },
              title: "I review the running build, not a screenshot of it",
              rule: {
                label: "Rule",
                body: "Every pull request that changes a screen is reviewed by design on its preview build, beside the frame it implements. Comments go on the pull request, where the developer is already working — not into a chat thread that nobody reads again.",
              },
              why: {
                label: "Why it isn't decoration",
                body: "Screenshots show the state someone chose to capture. The build shows the others — the hover, the focus ring, the column that wraps at 1280px. Reviewing before merge costs a comment; reviewing after release costs a ticket, a sprint slot and a second release.",
              },
              contrast: {
                does: "Design reviews the preview build, before merge.",
                instead: "A screenshot in a chat after the release went out.",
              },
            },
            {
              n: "02",
              stage: "Design QA",
              flow: { from: "A REQ identifier", to: "Every acceptance criterion checked" },
              feature: true,
              title: "Design QA runs against the requirement, not against taste",
              rule: {
                label: "Rule",
                body: "The REQ number on the frame is the same one on the ticket, so design QA walks its acceptance criteria one by one — and then the states no frame shows in full: empty, loading, error, no permission, a thousand rows, a German label three times the English length.",
              },
              why: {
                label: "Why it isn't decoration",
                body: "“It doesn’t look right” is an opinion a developer has every reason to argue with. “REQ-214, criterion 3: the empty state offers a next step, and this one doesn’t” is a defect with an owner. The identifier turns a review into a check.",
              },
              contrast: {
                does: "Each finding cites the criterion it fails.",
                instead: "“Can you make it a bit more like the design?”",
              },
              artefact: {
                caption: "The checklist every screen goes through, whatever it is.",
                lines: [
                  "REQ-xxx · acceptance criteria        each one, in order",
                  "states      empty · loading · error · no permission",
                  "data        real volumes, long values, nulls",
                  "language    DE default, EN second — no truncated label",
                  "themes      light · dark · high contrast",
                  "a11y        keyboard path, focus order, AA contrast",
                  "widths      1280 · 1440 · 1920",
                ],
              },
            },
            {
              n: "03",
              stage: "Triage",
              flow: { from: "A list of findings", to: "Blocker, fix, or backlog" },
              title: "Every finding gets a severity and a place to live",
              rule: {
                label: "Rule",
                body: "Findings are filed as tickets with the REQ, a link to the exact Figma node, expected against actual, and one of three severities: blocks release, fix before release, or polish for the backlog. The severity is agreed with the developer and the PM, not assigned by me alone.",
              },
              why: {
                label: "Why it isn't decoration",
                body: "A designer who flags everything as critical is a designer whose flags stop being read. Three levels make the trade-off explicit — and put the decision to ship with a known polish item where it belongs, with the people who own the release.",
              },
              contrast: {
                does: "Three severities, agreed in the room.",
                instead: "Forty equal comments and no order to fix them in.",
              },
            },
            {
              n: "04",
              stage: "Reconcile",
              flow: { from: "A deviation in code", to: "One version of the truth" },
              title: "When the code is right and the file is wrong, the file changes",
              rule: {
                label: "Rule",
                body: "Development surfaces things design did not see: a query that cannot return in time, a table that needs pagination, a better order of fields. Each deviation is either rejected as a defect or accepted — and an accepted one is written back into the frame, over MCP, the same week.",
              },
              why: {
                label: "Why it isn't decoration",
                body: "A file that describes what was designed instead of what shipped is worse than no file: the next feature is built from it. Keeping the loop in both directions is what makes the Figma file worth opening a year later.",
              },
              contrast: {
                does: "Accepted deviations are merged back into the file.",
                instead: "The file keeps the plan; production quietly keeps the truth.",
              },
            },
            {
              n: "05",
              stage: "Acceptance",
              flow: { from: "A fixed build", to: "Design accepted, on the ticket" },
              title: "Design acceptance is part of the Definition of Done",
              rule: {
                label: "Rule",
                body: "A ticket that changes a screen does not close on QA alone. Design acceptance is a dated status on it — the build counterpart of the sign-off each frame carries — recorded next to functional QA, not instead of it.",
              },
              why: {
                label: "Why it isn't decoration",
                body: "Frame sign-off approves an intention. Build acceptance approves the thing a customer will use. Without the second one, the first is a promise nobody checked, and the gap between them is where products slowly stop looking designed.",
              },
              contrast: {
                does: "Two sign-offs: on the frame, and on the build.",
                instead: "The frame is approved, so the feature is assumed to be.",
              },
            },
            {
              n: "06",
              stage: "After release",
              flow: { from: "A shipped feature", to: "The next backlog" },
              title: "Release is where the evidence starts",
              rule: {
                label: "Rule",
                body: "After release I go back to the people from discovery: how the feature is used, where support tickets cluster, what the power users work around. Findings go into the backlog with the same REQ structure, so the next iteration starts from evidence rather than from the loudest request.",
              },
              why: {
                label: "Why it isn't decoration",
                body: "Discovery predicts how people will work; release shows how they do. A process that stops at the merge learns nothing from its own product and repeats its assumptions in the next one.",
              },
              contrast: {
                does: "Post-release findings feed the backlog as requirements.",
                instead: "The team moves on and the feature is never looked at again.",
              },
            },
          ],
        },
      ],
    },
    {
      id: "adds-up",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch11-close.png" }],
    },
  ],
};
