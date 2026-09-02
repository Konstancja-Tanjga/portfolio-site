import type { CaseStudy } from "./types";

export const fox: CaseStudy = {
  slug: "fox-design-system",
  title: "FOX design system",
  what: "Fifty components, six consuming products — and the pull requests I merge",
  lead:
    "A design system in code, not a Figma library with a code appendix. I built it from nothing and led its migration to v3 across the platform's product lines, across Angular, React and web components.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "DESIGN SYSTEMS IN CODE · ENTERPRISE PLATFORM",
    headline: ["Design system", "as code"],
    subline: "for a six-product ERP platform",
    stamp: "TOKENS · COMPONENTS · STORYBOOK · CHROMATIC · VERSIONED PACKAGES",
    credit: "Design system owner · Asseco Solutions · 2023–2026",
    shot: { src: "/work/fox-design-system/bighat-records.png" },
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
          html:
            "<p>FOX belongs to Asseco, so the screens below are Big Hat — my own design system, built on the same principles and published in the open. Where a FOX artefact cannot be shown, this is the equivalent artefact I can show in full: <a href=\"https://konstancja-tanjga.github.io/bighat-design-system/\">the Big Hat Storybook</a>.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/bighat-catalogue.png",
          caption: "The catalogue as a consuming team meets it: Storybook, with foundations, templates and components in one navigation. Big Hat.",
        },
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
          kind: "spec",
          caption: "What the build emits.",
          rows: [            { key: "emits", value: "CSS custom properties, TS types" },
            { key: "consumers", value: "6 products, 3 frameworks" },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/bighat-tokens.png",
          caption: "The semantic layer, as it is published: every token with its CSS variable and its value in both themes. Big Hat.",
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
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/bighat-stateblock.png",
          caption: "StateBlock in Big Hat — empty, loading and error as one component, each with its own announcement strategy, and a do/don't for the two situations \u201cempty\u201d actually covers.",
        },
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
          kind: "set",
          size: "wide",
          items: [
            { src: "/work/fox-design-system/bighat-records.png", caption: "Records" },
            { src: "/work/fox-design-system/bighat-kanban.png", caption: "Kanban board" },
            { src: "/work/fox-design-system/bighat-ai-chat.png", caption: "AI chat" },
          ],
          caption: "What adoption looks like from the system's side: three unrelated surfaces, one token set, no product-local components. Big Hat templates.",
        },
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
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/bighat-contrast.png",
          caption: "Every foreground/background pair the system promises to keep legible, asserted in CI in both themes at the WCAG level that applies to it \u2014 4.5:1 for text, 3:1 for focus rings and control boundaries. A regression fails the build rather than the review. Big Hat.",
        },
      ],
    },
    {
      id: "handoff",
      n: "07",
      heading: "What it changed",
      blocks: [
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
