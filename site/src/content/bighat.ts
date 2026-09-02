import type { CaseStudy } from "./types";

/**
 * My own system, and the one place on this site where the artefacts can be
 * shown in full — including the source. Nothing here is shared with FOX:
 * different employer, different codebase, different decisions.
 */
export const bighat: CaseStudy = {
  slug: "bighat-design-system",
  title: "Big Hat design system",
  what: "My own design system, built from zero — and the site you are reading is built on it",
  lead:
    "@bighatpoland/ui — a design system I built from nothing for my own projects, published under MIT with its reasoning attached. Thirty-nine components, two token layers, WCAG AA held by a failing build rather than a review comment, and one breaking change carried from announcement to removal across two major versions.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "DESIGN SYSTEMS IN CODE · MY OWN",
    headline: ["A design system", "built from zero"],
    subline: "Big Hat — and this site runs on it",
    stamp: "TOKENS · COMPONENTS · CONTRAST GATE · MIGRATION · MIT",
    credit: "Sole author · Big Hat · 2025–2026",
    shot: { src: "/work/bighat-design-system/template-records.png" },
  },
  meta: [
    { label: "Role", value: "Sole author — design and code" },
    { label: "Package", value: "@bighatpoland/ui" },
    { label: "Scale", value: "39 components, 3 page templates, 2 token layers" },
    { label: "Enforced", value: "58 contrast assertions in CI, 134 tests" },
    { label: "Used by", value: "This portfolio site, and Docu Manager" },
    { label: "Licence", value: "MIT — Storybook and source are public" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim:
        "What a decision cost is the part of design systems work that never survives into a portfolio.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>A design system of my own, unconnected to any employer's: I built it from nothing, for my own projects, and it is what this site and Docu Manager are made of. It is deliberately small. It is not trying to cover every surface an enterprise product needs — it is trying to be legible about <em>why</em> each decision was made and <em>what each one cost</em>. <a href=\"https://konstancja-tanjga.github.io/bighat-design-system/\">Storybook</a> · <a href=\"https://github.com/bighatpoland/bighat-design-system\">source</a>.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/catalogue.png",
          caption: "The catalogue as a consuming team meets it: foundations, templates and components in one navigation.",
        },
        {
          kind: "stats",
          items: [
            { value: "39", label: "components, in two layers" },
            { value: "2", label: "token layers — one of them an API" },
            { value: "58", label: "contrast assertions in CI" },
            { value: "134", label: "tests, including the contrast gate" },
          ],
        },
      ],
    },
    {
      id: "tokens",
      n: "02",
      heading: "Two layers, and only one is an API",
      standfirst:
        "The test of whether a token split is real is the dark theme.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/token-layers.png",
          caption: "Primitives say what a value is; semantics say what it means, and semantics are the only colour API product code sees. Dark theme redefines the second layer alone — 150 lines, no second stylesheet, no theme selector inside a component.",
        },
        {
          kind: "thesis",
          label: "The cost, named",
          text:
            "Every new colour needs a role before it can be used, so a designer cannot hand over a hex and be done. That friction is the feature — it is why teams argue with the system in week two rather than week forty.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/tokens.png",
          caption: "The semantic layer as it is published: every token with its CSS variable and its value in both themes.",
        },
        {
          kind: "spec",
          caption: "Generated, not maintained.",
          rows: [
            { key: "source", value: "src/tokens/*.ts" },
            { key: "emits", value: "src/styles/tokens.css — CSS custom properties, TS types" },
            { key: "enforced by", value: "npm run tokens:check — CI fails if the committed CSS has drifted" },
          ],
        },
      ],
    },
    {
      id: "contrast",
      n: "03",
      heading: "Contrast is a build error",
      maxim: "A stated accessibility target with no mechanism is a stated target.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/contrast-gate.png",
          caption: "The gate, and the candidate it rejected: neutral.400 proposed as text.muted measures 2.53:1 against a 4.5:1 requirement, and the build stops. The requirement column is the design — a checker that demanded 4.5:1 for a focus ring too would push the palette to mud and be switched off inside a month.",
        },
        {
          kind: "points",
          items: [
            "Every foreground/background pair the system promises to keep legible is declared alongside the WCAG rule that actually applies to it — 4.5:1 for body text, 3:1 for non-text like focus rings and control boundaries",
            "58 assertions across both themes, run in CI before the documentation deploys",
            "Adding a token that renders text means adding a line to the pair list, so forgetting is a review comment rather than a silent gap — the pair list is the coverage",
            "Colour is never the only cue: Badge has no colour prop and requires a label, and the contrast table writes “pass” and “FAIL” in words next to the swatch",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/contrast-measured.png",
          caption: "The measured table, as published in the documentation.",
        },
      ],
    },
    {
      id: "states",
      n: "04",
      heading: "The states nobody designs",
      standfirst:
        "Empty, loading and error get reinvented by every team that builds a list, in a different tone of voice each time and none of them announced correctly.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/stateblock.png",
          caption: "One component, three announcement strategies: polite for loading, assertive for error, silent for empty — because announcing a successful response with no rows interrupts the user to say nothing went wrong.",
        },
        {
          kind: "thesis",
          label: "The mistake it exists to prevent",
          text:
            "“Empty” is two different screens. You have no invoices yet needs an onboarding action; no invoices match these filters needs a way out of the filter. Building one and using it for both is the single most common mistake with this component.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/stateblock-docs.png",
          caption: "Table and Board delegate their empty bodies to it rather than owning a second vocabulary for “nothing here”. Every component page carries a do/don't with the reason rather than the instruction.",
        },
      ],
    },
    {
      id: "breaking-change",
      n: "05",
      heading: "One breaking change, with the argument written down",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/variant-tone.png",
          caption: "One enum was describing visual weight and consequence at once, so a quiet destructive action was inexpressible and product code filled with inline hex. 2.0 split it into variant and tone.",
        },
        {
          kind: "evolution",
          items: [
            {
              version: "1.x",
              claim: "One enum, two jobs",
              sourceOfTruth: "variant: primary · secondary · ghost · link · danger.",
              ships: "Four values describe weight, one describes consequence.",
              costs: "A delete inside a row of table actions is not expressible, so product code writes the hex itself.",
            },
            {
              version: "2.0",
              claim: "Split, with the door held open",
              sourceOfTruth: "variant (weight) × tone (consequence).",
              ships: "variant=\"danger\" renders byte-identically to its replacement, asserted by a test, and warns once in development.",
              costs: "Two APIs to maintain for the length of the window.",
              moved: "The version bump and the migration became two separate decisions — a team could take the major on a Tuesday and rename whenever they got to it.",
            },
            {
              version: "3.0",
              claim: "The window closes",
              sourceOfTruth: "variant × tone, and nothing else.",
              ships: "The old value is removed; it is now a type error, with a scripted rename in MIGRATION.md.",
              costs: "Anyone who ignored the whole of 2.x has work to do.",
              moved: "A deprecation that never ends is not a deprecation. It is a second API you have quietly agreed to maintain forever.",
            },
          ],
        },
      ],
    },
    {
      id: "omissions",
      n: "06",
      heading: "What it deliberately does not do",
      standfirst:
        "Each of these would have made the repository look bigger without making a new argument.",
      blocks: [
        {
          kind: "points",
          items: [
            "Select wraps the native element, Dialog is the native <dialog>, DatePicker a date input, Slider a range — focus trapping, autofill and the mobile picker are not worth reimplementing badly",
            "Combobox is the one place that bargain is refused, because a native select cannot be typed into — so it pays the full ARIA bill instead: aria-activedescendant, a live result count, Escape twice to clear",
            "ScrollArea styles the platform scrollbar rather than drawing one out of divs",
            "Templates live in the Storybook, not in the package — a template you can install becomes a dependency, and then a team is blocked on the design system to change its own layout",
            "Do/don't examples are rendered components, not screenshots: a screenshot of guidance goes stale the moment the component changes, and nobody notices, because images have no build step",
          ],
        },
      ],
    },
    {
      id: "templates",
      n: "07",
      heading: "Three templates, four states each",
      standfirst:
        "Assembling a happy path from good components is the easy half. Remembering on every screen that a request can return nothing is the half that costs teams weeks.",
      blocks: [
        {
          kind: "set",
          size: "wide",
          items: [
            { src: "/work/bighat-design-system/template-records.png", caption: "Records — reading one record never costs the reader their place among the others" },
            { src: "/work/bighat-design-system/template-kanban.png", caption: "Kanban — moving a card works without a pointer, WCAG 2.5.1" },
            { src: "/work/bighat-design-system/template-ai-chat.png", caption: "AI chat — the prompt is a textarea in a form, the modes are a radio group" },
          ],
          caption: "Each ships four or five stories: ready, loading, empty and error. Records splits empty in two, because nothing exists and nothing matches are the same zero rows with opposite meanings and opposite actions.",
        },
      ],
    },
    {
      id: "agents",
      n: "08",
      heading: "Rules an agent can follow",
      maxim: "Whether a skill file changes what an agent writes is a testable claim, not a slogan.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The system ships a skill file encoding what the types cannot — never reach for a primitive, never invent an empty state, never let colour be the only cue, never remove a focus ring — and a machine-readable inventory saying what each component is <em>not</em> for.</p>",
        },
        {
          kind: "passage",
          html:
            "<p>So it was tested: same model, same prompt, skill file present or absent, both outputs committed verbatim. <strong>The result contradicted the hypothesis.</strong> None of the four failures the protocol predicted occurred in either arm — because the rules are also in the component source, in the README, and in required props. What the file actually changed was architectural: without it, a table with a toolbar and no landmarks; with it, a full app shell with named regions and a skip link. Both arms then left raw font sizes inline, because the system exports no typography tokens — the second gap an outside consumer found that I could not see.</p>",
        },
      ],
    },
  ],
};
