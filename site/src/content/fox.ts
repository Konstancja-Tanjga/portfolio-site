import type { CaseStudy } from "./types";

export const fox: CaseStudy = {
  slug: "fox-design-system",
  title: "FOX design system",
  what: "Fifty components, six consuming products — and the pull requests I merge",
  lead:
    "A design system in code, not a Figma library with a code appendix. I built it from nothing and led its migration to v3 across the platform's product lines, across Angular, React and web components.",
  status: { state: "live" },
  cover: {
    kicker: "DESIGN SYSTEMS IN CODE · ENTERPRISE PLATFORM",
    headline: ["Design system", "as code"],
    subline: "for a six-product ERP platform",
    stamp: "TOKENS · COMPONENTS · STORYBOOK · CHROMATIC · VERSIONED PACKAGES",
    credit: "Design system owner · Asseco Solutions · 2023–2026",
    shot: { slot: "Cover hero — export 2400px wide, product bleeding off the right edge." },
  },
  meta: [
    { label: "Role", value: "Design system owner — I review and merge the component pull requests" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Scale", value: "50 components, 6 consuming products" },
    { label: "Frameworks", value: "Angular, React, web components" },
    { label: "Pipeline", value: "Figma → Storybook → Chromatic → Nexus" },
    { label: "Period", value: "November 2023 – present" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — what FOX is, what it is not, and what it replaced.</p>",
        },
        { kind: "shot", width: "wall", slot: "Component catalogue in Storybook. 2400px." },
      ],
    },
    {
      id: "tokens",
      n: "02",
      heading: "Token architecture",
      standfirst:
        "Three layers, and why not two.",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — primitive, semantic, component. What the build emits, and what a consumer is allowed to reach for.</p>",
        },
        {
          kind: "spec",
          caption: "What the build emits.",
          rows: [
            { key: "source", value: "TODO — tokens.json" },
            { key: "emits", value: "CSS custom properties, TS types" },
            { key: "consumers", value: "6 products, 3 frameworks" },
          ],
        },
      ],
    },
    {
      id: "one-component",
      n: "03",
      heading: "One component in full",
      standfirst:
        "The API, the states, the keyboard behaviour, the test — one component shown completely beats fifty listed.",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — the component. What the API takes, what was rejected, and why.</p>",
        },
        { kind: "shot", width: "wall", slot: "The component's states, as a matrix. 2400px." },
      ],
    },
    {
      id: "evolution",
      n: "04",
      heading: "How it moved",
      blocks: [
        {
          kind: "evolution",
          items: [
            {
              version: "v2.0",
              claim: "The file is the system",
              sourceOfTruth: "Figma.",
              ships: "A designer changes the component, then asks six teams to match it.",
              costs: "Two artefacts both claim to be the component, and they disagree within a sprint.",
            },
            {
              version: "v2.3",
              claim: "The file is bound to the code",
              sourceOfTruth: "Figma variables mapped to published tokens.",
              ships: "A token change propagates; a structural change needs both sides edited.",
              costs: "The binding has to be maintained, and it silently rots when it isn't.",
            },
            {
              version: "v3.0",
              claim: "The code is the system",
              sourceOfTruth: "The published package.",
              ships: "A pull request against the library. I review and merge it.",
              costs: "Breaking changes need a deprecation window and a migration path.",
            },
          ],
        },
      ],
    },
    {
      id: "migration",
      n: "05",
      heading: "Migrating v3 across six products",
      standfirst:
        "The hard part was never the components.",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — breaking changes, the deprecation window, how six product teams were brought across, and what it cost.</p>",
        },
        { kind: "shot", width: "wall", slot: "Adoption across the product lines. 2400px." },
      ],
    },
    {
      id: "enforced",
      n: "06",
      heading: "What is enforced in code",
      standfirst:
        "Contrast tokens so colour decisions can't fail silently; keyboard and focus behaviour defined at component level.",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — the checks that run, and what happens when one fails.</p>",
        },
        { kind: "shot", width: "wall", slot: "A failing contrast check. 2400px." },
      ],
    },
    {
      id: "handoff",
      n: "07",
      heading: "What it changed",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — what six products got out of it, and one thing I would do differently.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "50", label: "components" },
            { value: "6", label: "consuming products" },
            { value: "3", label: "frameworks" },
            { value: "v3.0", label: "migrated across product lines" },
          ],
        },
      ],
    },
  ],
};
