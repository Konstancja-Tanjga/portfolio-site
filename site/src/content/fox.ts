import type { CaseStudy } from "./types";

export const fox: CaseStudy = {
  slug: "fox-design-system",
  title: "FOX design system",
  what: "Around 80 components, six consuming products — and the pull requests I merge",
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
    { label: "Scale", value: "Around 80 components, 6 consuming products" },
    { label: "Frameworks", value: "Angular, React, web components" },
    { label: "Pipeline", value: "Figma → Storybook → Chromatic → Nexus" },
    { label: "Period", value: "November 2023 – present" },
    { label: "Storybook", value: "Public — design-system-v1.assecosolutions.com", href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs" },
  ],
  chapters: [
    /* The opening, before the numbered chapters. No heading on purpose: it is
       the case in three sentences, not a jump-bar entry. */
    {
      id: "opening",
      blocks: [
        {
          kind: "passage",
          html:
            "<p><strong>The problem.</strong> Every design system team knows the moment: the Figma library says one thing, the product says another, and nobody is sure which is right. Tokens are copied by hand, specs are rewritten for every ticket, and each release widens the gap.</p>" +
            "<p><strong>What I did.</strong> I built FOX from nothing for APplus ERP and set it up so the two sides stay aligned: one token set behind both the Figma library and the code, every component mapped between them through Code Connect, Storybook on Chromatic as the reference designers and engineers both check against, and handoff specs generated from the design and pulled into Jira instead of written by hand.</p>" +
            "<p><strong>The result.</strong> Around 80 components and six products on one system, migrated to v3 across product lines.</p>",
        },
      ],
    },
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
      id: "source-of-truth",
      n: "02",
      heading: "Source of truth",
      blocks: [
        {
          kind: "points",
          items: [
            "Shipped components live in code, as versioned packages.",
            "The Figma library mirrors them through variables and Code Connect.",
            "Storybook on Chromatic is the reference both design and engineering check against.",
          ],
        },
      ],
    },
    {
      id: "tokens",
      n: "03",
      heading: "Token architecture",
      standfirst:
        "One token build and one output that every product reads, whatever its framework.",
      blocks: [
        {
          kind: "spec",
          caption: "What the build emits.",
          rows: [
            { key: "emits", value: "CSS custom properties, TS types" },
            { key: "consumers", value: "6 products, 3 frameworks" },
          ],
        },
      ],
    },
    {
      id: "one-component",
      n: "04",
      heading: "One component's API",
      standfirst:
        "The button's public API in Storybook: the page a developer reads before using it.",
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
      n: "05",
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
      id: "handoff",
      n: "06",
      heading: "What it changed",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "~80", label: "components" },
            { value: "6", label: "consuming products" },
            { value: "3", label: "frameworks" },
            { value: "v3.0", label: "migrated across product lines" },
          ],
        },
      ],
    },
  ],
};
