import type { CaseStudy } from "./types";

/**
 * My own system, and the one place on this site where the artefacts can be
 * shown in full — including the source. Nothing here is shared with FOX:
 * different employer, different codebase, different decisions.
 *
 * Ordered the way a design system is read: what it is, foundations,
 * components, the design-to-code workflow, quality, templates, governance and
 * what it does not claim. Kept short on purpose: the pictures carry it.
 */
export const bighat: CaseStudy = {
  slug: "bighat-design-system",
  title: "Big Hat design system",
  what: "My own design system, in code and in Figma — and the site you are reading is built on it",
  lead:
    "A design system I built from nothing: a React package with its Storybook, and a Figma library generated from the same tokens. Accessibility is held by the build, and Figma and code are kept in step by variables and Code Connect rather than by hand.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "DESIGN SYSTEMS IN CODE AND FIGMA · MY OWN",
    headline: ["A design system", "built from zero"],
    subline: "Big Hat — and this site runs on it",
    stamp: "TOKENS · FIGMA LIBRARY · COMPONENTS · CONTRAST GATE · CODE CONNECT · MIT",
    credit: "Sole author · Big Hat · 2025–2026",
    shot: { src: "/work/bighat-design-system/v6/cover.png" },
  },
  meta: [
    { label: "Role", value: "Sole author — design, Figma library and code" },
    { label: "Package", value: "@bighat/ui — React, with an Angular sibling" },
    { label: "Scale", value: "46 components, 4 templates, 126 semantic tokens" },
    { label: "Figma", value: "Team library: 16 components, 233 variables, Code Connect" },
    { label: "Version", value: "6.0, October 2026, with its own logo" },
    { label: "Enforced", value: "124 contrast assertions, 300+ tests in CI" },
    { label: "Licence", value: "MIT — Storybook and source are public" },
  ],
  chapters: [
    {
      id: "overview",
      n: "01",
      heading: "Overview",
      maxim: "Every decision is written down with what it cost.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Small on purpose: not every surface an enterprise product needs, but each decision legible — why it was made, and what it cost. It is what this site, Docu Manager and World of Raptors are built with. <a href=\"https://konstancja-tanjga.github.io/bighat-design-system/\">Storybook</a> · <a href=\"https://github.com/Konstancja-Tanjga/bighat-design-system\">source</a>.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "46", label: "components" },
            { value: "233", label: "Figma variables, from the same tokens" },
            { value: "124", label: "contrast assertions in CI" },
            { value: "16", label: "components in the Figma library, with Code Connect" },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/v6/cover.png",
          caption: "Big Hat 6.0: the new logo, and library components composed into a form and a toolbar, in Light and Dark. Dark is one variable mode, not a second set of components.",
        },
      ],
    },
    {
      id: "logo",
      n: "02",
      heading: "A hat over the product",
      standfirst: "Version 6.0 gave the system a logo, and the logo says what the system is.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Big Hat is two layers of tokens. The crown is the primitives: there, but never touched. The brim is the semantic layer, wider than what is under it, the only layer a product may use, and everything in the product stands in its shade. The gap between them is the boundary the build enforces. The dot on the i is the brim again.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/v6/logo.png",
          caption: "The mark, the horizontal lockup and the stacked lockup, in brand colour and in one colour.",
        },
        {
          kind: "shot",
          width: "column",
          src: "/work/bighat-design-system/v6/logo-use.png",
          caption: "The logo's page in Figma. On a 4px grid, 48 × 32: a 28 × 20 crown, a 4 gap and a 48 × 8 brim. Ink is text.primary and the brim is action.primary.bg, so the logo follows the theme like any component.",
        },
      ],
    },
    {
      id: "foundations",
      n: "03",
      heading: "Foundations: two layers, one API",
      standfirst:
        "Primitives say what a value is; semantic roles say what it means. Product design and product code may use only the roles.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/figma-color-roles.png",
          caption: "Colour roles in Figma, Light and Dark. Each carries its CSS name as code syntax, so Dev Mode answers with var(--bh-action-primary-bg), not a hex.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/figma-primitives.png",
          caption: "Primitives: the palette and the space, radius and type scales on a 4px grid. Hidden from every picker, as they are banned from product CSS.",
        },
        {
          kind: "thesis",
          label: "The cost",
          text:
            "A new colour needs a role before it can be used, in Figma as much as in code. That friction is the feature.",
        },
      ],
    },
    {
      id: "components",
      n: "04",
      heading: "Components: one contract, three surfaces",
      standfirst:
        "Every component starts as a machine-readable contract — purpose, what it is not for, anatomy, states, keyboard, ARIA — and is built from it in Figma, React and Storybook.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/v6/button-contract.png",
          caption: "Button's page in the Figma library opens with its contract: what it is, what it is not for, and links to Storybook and the contract file. A script draws this header from spec/components/button.json, so a change is made in the contract and an edit in Figma is overwritten.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/v6/button-variants.png",
          caption: "Button's variants, named after the props code uses: primary, secondary and ghost; sm, md and lg; default, hover and disabled.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/catalogue.png",
          caption: "The same component in Storybook: when to use it, what to use instead, and every do/don't rendered live with its reason.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/figma-dialog.png",
          caption: "Dialog, built from library Buttons, on thick glass over a scrim. The buttons name the outcome — never OK and Cancel.",
        },
      ],
    },
    {
      id: "workflow",
      n: "05",
      heading: "Design and code, kept in step",
      maxim: "A Figma library and a component library drift apart unless something other than discipline holds them together.",
      blocks: [
        {
          kind: "process",
          process: {
            label: "How a component moves",
            count: "6 stages",
            stages: [
              { n: "1", title: "Contract", kicker: "spec/components/*.json", body: "Purpose, not-for, anatomy, states, keyboard, ARIA. Validated in CI." },
              { n: "2", title: "Figma", kicker: "library variables", body: "Every value bound to a variable; variants named after the props." },
              { n: "3", title: "Code", kicker: "CSS, React, tests", body: "Tokens only — a literal fails the build. A test for every state." },
              { n: "4", title: "Docs", kicker: "Storybook", body: "Scaffolded from the contract; the judgement written by hand." },
              { n: "5", title: "Code Connect", kicker: "figma/*.figma.ts", body: "Dev Mode shows the component a developer would write." },
              { n: "6", title: "Release", kicker: "changeset + publish", body: "A versioned package and a new library publish, both a person's call." },
            ],
            underneath: {
              label: "Underneath",
              chips: ["tokens/*.tokens.json", "Figma MCP", "contrast gate"],
              body: "The library was generated from the token files by an agent through Figma's MCP server, not redrawn. When the two disagree, the code wins; a decision that starts in Figma is done only when it reaches the tokens.",
            },
          },
        },
        {
          kind: "code",
          code: `const variant = instance.getEnum('variant', {
  primary: '',
  secondary: ' variant="secondary"',
  ghost: ' variant="ghost"',
});
// …
export default {
  example: figma.code\`<Button\${variant}\${size}\${loading}\${disabled}>\${label}</Button>\`,
  // …`,
          caption: "Part of the Code Connect template for Button. Defaults are left out, so a primary medium button reads <Button>Save</Button>.",
          source: { text: "figma/Button.figma.ts", href: "https://github.com/Konstancja-Tanjga/bighat-design-system/blob/main/figma/Button.figma.ts" },
        },
        {
          kind: "thesis",
          label: "A decision that started in Figma",
          text:
            "Radius and the smallest type sizes moved onto a 4px grid in the library first, then reached the tokens through pull requests. Table cells stayed at 12px: at 10px, figures stop being readable.",
        },
      ],
    },
    {
      id: "quality",
      n: "06",
      heading: "Accessibility and states, held by the build",
      maxim: "A stated accessibility target with no mechanism is a stated target.",
      blocks: [
        {
          kind: "points",
          items: [
            "Contrast is a build error: every text and non-text pair is asserted at the WCAG level that applies to it, in both themes — 124 assertions",
            "Glass is composited over what sits beneath it before it is measured",
            "A generated ARIA report checks each contract against the pattern it claims",
            "Colour is never the only cue: badges need a label, a pressed filter shows a check mark",
            "Empty, loading and error are one component with three announcement strategies",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/template-records-empty.png",
          caption: "“No invoices match these filters” offers a way out of the filter, not “Create invoice” — empty is two different screens.",
        },
      ],
    },
    {
      id: "templates",
      n: "07",
      heading: "Templates",
      standfirst: "Screens assembled only from library components, each with its loading, empty and error states.",
      blocks: [
        {
          kind: "duo",
          items: [
            { src: "/work/bighat-design-system/template-kanban.png", caption: "Kanban — filters as chips; cards move without a pointer" },
            { src: "/work/bighat-design-system/template-kanban-dark.png", caption: "The same screen in Dark" },
          ],
        },
        {
          kind: "duo",
          items: [
            { src: "/work/bighat-design-system/template-records.png", caption: "Records — one quiet actions button per row" },
            { src: "/work/bighat-design-system/template-ai-chat.png", caption: "AI chat — the prompt is a form, the modes a radio group" },
          ],
        },
      ],
    },
    {
      id: "governance",
      n: "08",
      heading: "Governance: one breaking change, argued in full",
      blocks: [
        {
          kind: "evolution",
          items: [
            {
              version: "1.x",
              claim: "One enum, two jobs",
              sourceOfTruth: "variant: primary · secondary · ghost · link · danger.",
              ships: "Weight and consequence in one prop.",
              costs: "A quiet destructive action cannot be expressed, so product code writes the hex.",
            },
            {
              version: "2.0",
              claim: "Split, with the door held open",
              sourceOfTruth: "variant (weight) × tone (consequence).",
              ships: "The old value still works and warns once.",
              costs: "Two APIs for the length of the window.",
            },
            {
              version: "3.0",
              claim: "The window closes",
              sourceOfTruth: "variant × tone, and nothing else.",
              ships: "The old value is a type error, with a scripted rename.",
              costs: "Anyone who ignored 2.x has work to do.",
              moved: "A deprecation that never ends is a second API you agreed to maintain forever.",
            },
          ],
        },
      ],
    },
    {
      id: "limits",
      n: "09",
      heading: "What it does not claim",
      blocks: [
        {
          kind: "points",
          items: [
            "No screen reader has been run against it; the announcement rules are tested in code, not in NVDA or VoiceOver",
            "The Figma library covers 16 components; the rest exist in code and Storybook first",
            "Pressed states are not drawn in Figma — the browser draws them",
            "Figma cannot saturate a backdrop, so glass is a little flatter there than in the browser",
          ],
        },
      ],
    },
  ],
};
