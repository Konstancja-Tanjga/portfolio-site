import type { CaseStudy } from "./types";

/**
 * A practice study, not a product one: the stack from
 * docs/case-study-kit/RULES.md is applied with the chapters a design system
 * has facts for. No personas, no use cases, no handoff chapter and no
 * reflection are on record here, so none is written. Chapter numbers were
 * written for this page.
 *
 * The three images are flat exports of the live Storybook: colors.png on
 * the card, catalogue.png in the MacBook mockup under device/ (on the cover
 * and on the wall), and button-api.png flat on the wall, as a scrolling
 * Storybook page is. Paths are literal strings so that
 * scripts/check-content.mjs sees them.
 */

export const fox: CaseStudy = {
  slug: "fox-design-system",
  title: "FOX design system",
  what: "Around 80 components, six consuming products, and the pull requests I merge",
  lead:
    "A design system in code, not a Figma library with a code appendix. I built it from nothing and led its migration to v3 across the platform's product lines, across Angular, React, and web components.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "DESIGN SYSTEMS IN CODE · ENTERPRISE PLATFORM",
    headline: ["Design system", "as code"],
    subline: "for a six-product ERP platform",
    stamp: "TOKENS · COMPONENTS · STORYBOOK · CHROMATIC · VERSIONED PACKAGES",
    credit: "Lead Designer, UX Engineer · Asseco Solutions · 2023–2026",
    art: { src: "/work/fox-design-system/device/catalogue-2400.webp" },
    shot: { src: "/work/fox-design-system/colors.png" },
  },
  meta: [
    { label: "Role", value: "Lead Designer, UX Engineer; owner of the design system. I review and merge the component pull requests" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Scale", value: "Around 80 components, 6 consuming products" },
    { label: "Frameworks", value: "Angular, React, web components" },
    { label: "Pipeline", value: "Figma to Storybook to Chromatic to Nexus" },
    { label: "Period", value: "November 2023 to present" },
    { label: "Storybook", value: "Public, design-system-v1.assecosolutions.com", href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs" },
  ],
  chapters: [
    {
      id: "opening",
      n: "00",
      heading: "In short",
      blocks: [
        {
          kind: "brief",
          rows: [
            {
              key: "Context",
              value:
                "FOX is the design system of APplus ERP at Asseco Solutions: around 80 components, consumed by six products across Angular, React, and web components.",
            },
            {
              key: "Problem",
              value:
                "The Figma library said one thing and the product another, and nobody was sure which was right. Tokens were copied by hand, specs were rewritten for every ticket, and each release widened the gap.",
            },
            {
              key: "My role and scope",
              value:
                "I built FOX from nothing, own its tokens and its component API, review and merge every component pull request, and led the migration to v3 across the product lines.",
            },
            {
              key: "Decision 1",
              value: "One token set behind both the Figma library and the code. One build emits CSS custom properties and TS types that every product reads, whatever its framework.",
            },
            {
              key: "Decision 2",
              value: "Every component mapped between Figma and code through Code Connect, with Storybook on Chromatic as the reference designers and engineers both check against.",
            },
            {
              key: "Decision 3",
              value: "The code is the system. Shipped components live in versioned packages, and a change is a pull request against the library.",
            },
            {
              key: "Outcome",
              value:
                "Around 80 components and six products on one system, migrated to v3 across product lines. Handoff specs are generated from the design and pulled into Jira instead of written by hand.",
            },
            {
              key: "Period and team",
              value: "November 2023 to present, as the owner of the system.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      standfirst: "The live library, and the four things that keep its two sides aligned.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>FOX is Asseco's, and it is public: <strong>the catalogue below is the live library</strong>, not a mockup of it. <a href=\"https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs\">design-system-v1.assecosolutions.com</a>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>One token set</strong> behind both the Figma library and the code.",
            "<strong>Every component mapped</strong> between Figma and code through Code Connect.",
            "<strong>Storybook on Chromatic</strong> as the reference designers and engineers both check against.",
            "<strong>Handoff specs generated</strong> from the design and pulled into Jira, instead of written by hand.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/device/catalogue-2400.webp",
          frame: "macbook",
          caption: "Atoms, molecules, and organisms in one navigation, published on Chromatic: the end of the pipeline the case study describes.",
        },
      ],
    },
    {
      id: "hard-brief",
      n: "01a",
      heading: "Why this is a hard brief",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Six products, three frameworks.</strong> Angular, React, and web components all have to read one system.",
            "<strong>Two artefacts claimed to be the component.</strong> With Figma as the source of truth, the file and the product disagreed within a sprint.",
            "<strong>A change meant asking six teams.</strong> A designer changed the component, then asked six teams to match it.",
          ],
        },
      ],
    },
    {
      id: "source-of-truth",
      n: "02",
      heading: "Source of truth",
      standfirst: "Where the component lives, and what each stage of the pipeline hands on.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Shipped components live in code</strong>, as versioned packages.",
            "<strong>The Figma library mirrors them</strong> through variables and Code Connect.",
            "<strong>Storybook on Chromatic is the reference</strong> both design and engineering check against.",
          ],
        },
        {
          kind: "flow",
          stages: [
            { title: "Figma", body: "The library mirrors the code through variables and Code Connect." },
            { title: "Storybook", body: "The reference both design and engineering check against." },
            { title: "Chromatic", body: "Where the Storybook is published, as the live catalogue." },
            { title: "Nexus", body: "Where the versioned packages ship from, one per component." },
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
      standfirst: "Three versions, and where the truth lived in each.",
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
              costs: "The binding has to be maintained, and it silently rots when it is not.",
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
