/**
 * Case-study template. Copy to site/src/content/<slug>.ts, fill every
 * slot, delete the chapters the project has nothing for. The order is
 * fixed; see RULES.md for what each chapter must say.
 *
 * Replace every "TODO" string. A slot you cannot fill with a fact on
 * record is deleted, not guessed.
 */
import type { CaseStudy } from "./types";

/** device mockups, exported from Figma at 2x and keyed, as WebP */
const D = "/work/<slug>/device";
/** flat boards and diagrams */
const S = "/work/<slug>/screens";

export const study: CaseStudy = {
  slug: "<slug>",
  title: "TODO Product name",
  what: "TODO one line, on the card",
  lead: "TODO Two sentences: what the product is and what it replaced.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["TODO line one", "TODO line two"],
    subline: "TODO for which product",
    stamp: "TODO AREA · AREA · AREA",
    credit: "TODO Role · Company · Year",
    shot: { src: "/work/<slug>/00-cover.png" },
    layers: [
      // four to six screens that cycle with opacity; the cover says what
      // the product is before the title does
      { src: `${D}/home-2400.webp`, label: "TODO Home" },
      { src: `${D}/screen-2-2400.webp`, label: "TODO" },
      { src: `${D}/screen-3-2400.webp`, label: "TODO" },
      { src: `${D}/screen-4-2400.webp`, label: "TODO" },
    ],
  },
  meta: [
    { label: "Role", value: "TODO as on the contract" },
    { label: "Company", value: "TODO" },
    { label: "Product", value: "TODO" },
    { label: "Design system", value: "TODO name and version", href: "https://TODO" },
    { label: "Team", value: "TODO how many, who" },
    { label: "Period", value: "TODO Month to Month Year" },
    { label: "Launch", value: "TODO or delete the row" },
    { label: "Product context", value: "TODO one line" },
  ],
  chapters: [
    {
      id: "in-short",
      n: "00",
      heading: "In short",
      blocks: [
        {
          kind: "brief",
          rows: [
            { key: "Context", value: "TODO" },
            { key: "Problem", value: "TODO" },
            { key: "My role and scope", value: "TODO" },
            { key: "Decision 1", value: "TODO" },
            { key: "Decision 2", value: "TODO" },
            { key: "Decision 3", value: "TODO" },
            { key: "Outcome", value: "TODO measured, or 'not measured'" },
            { key: "Period and team", value: "TODO" },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim: "TODO one sentence the chapter earns.",
      standfirst: "TODO what is on this page.",
      blocks: [
        { kind: "points", items: ["<strong>TODO claim.</strong> One reason.", "<strong>TODO claim.</strong> One reason."] },
        {
          kind: "carousel",
          items: [{ src: `${D}/home-2400.webp`, frame: "macbook", title: "TODO part", body: "TODO what it is for" }],
        },
      ],
    },
    {
      id: "hard-brief",
      n: "01a",
      heading: "Why this is a hard brief",
      blocks: [{ kind: "points", items: ["<strong>TODO hardest constraint first.</strong> Why."] }],
    },
    {
      id: "who-for",
      n: "02",
      heading: "Who it is for",
      blocks: [
        {
          kind: "personas",
          items: [
            {
              n: "01",
              name: "The TODO role",
              badge: "TODO JOB · DEPARTMENT",
              quote: "TODO one line in their words",
              context: "TODO what they own and know",
              goals: ["TODO", "TODO"],
              breaks: "TODO where it breaks today",
              must: "TODO so the product must",
              job: "BUILD",
            },
          ],
        },
      ],
    },
    {
      id: "discovery",
      n: "03",
      heading: "Discovery and research",
      blocks: [
        { kind: "points", items: ["<strong>TODO finding.</strong> Source."] },
        { kind: "shot", width: "wall", src: `${S}/diagram.png`, folded: true, caption: "TODO what to look at" },
      ],
    },
    {
      id: "initial-idea",
      n: "04",
      heading: "What the audit asked",
      blocks: [
        {
          kind: "duo",
          items: [
            {
              src: `${D}/audit-1-2400.webp`,
              frame: "macbook",
              caption: "TODO",
              hotspots: [{ x: 50, y: 40, text: "TODO the question this screen provoked" }],
            },
          ],
        },
      ],
    },
    {
      id: "prototypes",
      n: "05",
      heading: "First prototypes",
      blocks: [{ kind: "flow", stages: [{ title: "TODO stage", body: "TODO one sentence" }] }],
    },
    {
      id: "design-system",
      n: "06",
      heading: "Design system",
      blocks: [
        {
          kind: "evolution",
          items: [
            { version: "vX.Y", claim: "TODO one line", sourceOfTruth: "TODO", ships: "TODO who edits, who reimplements", costs: "TODO what it costs", moved: "TODO what moved, or delete" },
          ],
        },
      ],
    },
    {
      id: "screen-architecture",
      n: "06a",
      heading: "Screen architecture",
      blocks: [
        {
          kind: "annotated",
          items: [
            {
              id: "01",
              title: "TODO screen",
              standfirst: "TODO what this screen sets",
              shot: { src: `${D}/screen-2400.webp`, frame: "macbook" },
              rules: [{ id: "R1", text: "TODO rule" }],
              notes: [{ label: "TODO", body: "TODO" }],
            },
          ],
        },
      ],
    },
    {
      id: "sign-off",
      n: "07",
      heading: "Design and sign-off",
      blocks: [{ kind: "set", items: [{ src: `${D}/final-2400.webp`, frame: "macbook", caption: "TODO" }] }],
    },
    {
      id: "use-cases",
      n: "08",
      heading: "Three use cases",
      maxim: "TODO what the three have in common.",
      standfirst: "One per area. Open a tile and the use case unfolds to the right.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "uc-area-1",
              n: "01",
              title: "TODO Area",
              maxim: "TODO the rule, as one sentence.",
              standfirst: "Goal: TODO.",
              cover: { src: `${D}/area-1-2400.webp`, frame: "macbook" },
              blocks: [
                { kind: "shot", width: "wall", src: `${D}/area-1-2400.webp`, frame: "macbook", caption: "TODO" },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-01",
                    title: "TODO goal as a verb phrase",
                    actor: { name: "01, the role", body: "TODO", note: "TODO state of mind" },
                    trigger: { body: "TODO", note: "TODO" },
                    precondition: { body: "TODO" },
                    flow: [{ n: "1", text: "TODO what happens", note: "TODO why" }],
                    exits: [
                      { label: "TODO Apply", text: "TODO" },
                      { label: "TODO Discard", text: "TODO" },
                    ],
                    exitsNote: "TODO",
                    postcondition: { body: "TODO" },
                    why: "Rejected: TODO alternative, and why it lost.",
                    rule: "TODO one sentence the rest of the product obeys.",
                    ruleNote: "TODO where else it applies.",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "handoff",
      n: "09",
      heading: "Handoff",
      blocks: [{ kind: "steps", items: [{ n: "01", stage: "TODO", title: "TODO", rule: { label: "Rule", body: "TODO" } }] }],
    },
    {
      id: "evidence",
      n: "10",
      heading: "Evidence",
      blocks: [
        { kind: "stats", items: [{ value: "TODO", label: "TODO with a source" }] },
        { kind: "video", clip: true, src: "/work/<slug>/clips/clip-1.mp4", poster: "/work/<slug>/clips/clip-1.webp", title: "TODO", caption: "TODO" },
      ],
    },
    {
      id: "reflection",
      n: "11",
      heading: "What I would do differently",
      blocks: [
        { kind: "joint", question: "What would I do differently?", answers: ["<strong>TODO.</strong> Why."] },
        { kind: "joint", question: "What will I measure, and how?", answers: ["<strong>TODO.</strong> How."] },
      ],
    },
  ],
};
