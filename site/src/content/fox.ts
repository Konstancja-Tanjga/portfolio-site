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
    shot: { src: "/work/fox-design-system/colors.png" },
  },
  meta: [
    { label: "Role", value: "Design system owner — I review and merge the component pull requests" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Scale", value: "50 components, 6 consuming products" },
    { label: "Frameworks", value: "Angular, React, web components" },
    { label: "Pipeline", value: "Figma → Storybook → Chromatic → Nexus" },
    { label: "Period", value: "November 2023 – present" },
    { label: "Storybook", value: "Public — design-system-v1.assecosolutions.com", href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs" },
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
            "<p>FOX is Asseco's, and it is public: the catalogue below is the live library, not a mock-up of it. <a href=\"https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs\">design-system-v1.assecosolutions.com</a>.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/catalogue.png",
          caption: "Atoms, molecules and organisms in one navigation, published on Chromatic \u2014 the end of the pipeline the case study describes.",
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
          src: "/work/fox-design-system/button-api.png",
          caption: "fox-button as a consuming developer meets it: every prop with its default, and controls that change the rendered component rather than a picture of it.",
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
        { kind: "shot", width: "wall", slot: "A failing contrast check. 2400px." },
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
