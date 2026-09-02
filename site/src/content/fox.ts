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
          src: "/work/fox-design-system/bighat-contrast-gate.png",
          caption: "The gate, and the candidate it rejected: neutral.400 proposed as text.muted measures 2.53:1 against a 4.5:1 requirement, and the build stops. The requirement column is the design — a checker that demanded 4.5:1 for a focus ring too would push the palette to mud and get switched off inside a month. Big Hat.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/bighat-contrast.png",
          caption: "Every foreground/background pair the system promises to keep legible, asserted in CI in both themes at the WCAG level that applies to it \u2014 4.5:1 for text, 3:1 for focus rings and control boundaries. A regression fails the build rather than the review. Big Hat.",
        },
      ],
    },
    {
      id: "big-hat",
      n: "06a",
      heading: "Big Hat, in the open",
      maxim:
        "What a decision cost is the part of design systems work that never survives into a portfolio.",
      standfirst:
        "FOX cannot be exported. So I built the same argument as a system of my own, published under MIT with its reasoning attached — and the screens above come from it.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Thirty-nine components in two layers, four decisions written down with their costs, and a deprecation carried from announcement to removal across two major versions. It is deliberately small: it is not trying to cover every surface an enterprise product needs, it is trying to be legible about <em>why</em> each decision was made. <a href=\"https://konstancja-tanjga.github.io/bighat-design-system/\">Storybook</a> \u00b7 <a href=\"https://github.com/bighatpoland/bighat-design-system\">source</a>.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "39", label: "components, in two layers" },
            { value: "2", label: "token layers \u2014 one of them an API" },
            { value: "58", label: "contrast assertions in CI" },
            { value: "134", label: "tests, including the contrast gate" },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/bighat-token-layers.png",
          caption: "Primitives say what a value is; semantics say what it means, and semantics are the only colour API product code sees. The test of whether the split is real is the dark theme: here it redefines the second layer alone \u2014 150 lines, no second stylesheet, no theme selector inside a component.",
        },
        {
          kind: "thesis",
          label: "The cost, named",
          text:
            "Every new colour needs a role before it can be used, so a designer cannot hand over a hex and be done. That friction is the feature, and it is the reason teams argue with the system in week two rather than week forty.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/bighat-stateblock-states.png",
          caption: "Empty, loading and error as one component with three announcement strategies \u2014 polite for loading, assertive for error, silent for empty, because announcing a successful response with no rows interrupts the user to say nothing went wrong. Table and Board delegate their empty bodies to it rather than owning a second vocabulary for \u201cnothing here\u201d.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/bighat-variant-tone.png",
          caption: "The one breaking change the system has shipped. One enum was describing visual weight and consequence at once, so a quiet destructive action was inexpressible and product code filled with inline hex. 2.0 split it into variant and tone; variant=\"danger\" then rendered byte-identically for the whole of 2.x \u2014 asserted by a test \u2014 so taking the major and doing the rename stayed two separate decisions. 3.0 closed the window.",
        },
        {
          kind: "points",
          items: [
            "Select wraps the native element, Dialog is native <dialog>, DatePicker a date input, Slider a range \u2014 focus trapping, autofill and mobile pickers are not worth reimplementing badly",
            "Combobox is the one place that bargain is refused, and pays the full ARIA bill instead: aria-activedescendant, a live result count, Escape twice to clear",
            "Templates live in the Storybook, not in the package \u2014 a template you can install becomes a dependency, and then a team is blocked on the design system to change its own layout",
            "Every component ships a do/don't page with the reason rather than the instruction, as rendered components rather than screenshots, because a screenshot of guidance goes stale and nothing catches it",
            "src/styles/tokens.css is generated from src/tokens/*.ts and CI fails if the committed CSS has drifted \u2014 one source of truth, enforced rather than agreed",
          ],
        },
        {
          kind: "passage",
          html:
            "<p>The system also ships rules an agent can follow \u2014 a skill file and a machine-readable inventory saying what each component is <em>not</em> for. Whether that changes what an agent writes is a testable claim, so it was tested: same model, same prompt, skill file present or absent, both outputs committed verbatim. <strong>The result contradicted the hypothesis.</strong> None of the four predicted failures occurred in either arm, because the rules are also in the component source and in required props. What the file actually changed was architectural \u2014 without it, a table with a toolbar and no landmarks; with it, a full app shell with named regions and a skip link. Both arms left raw font sizes inline, because the system exports no typography tokens: the second gap an outside consumer found that I could not see.</p>",
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
