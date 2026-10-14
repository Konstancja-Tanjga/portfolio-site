import type { CaseStudy } from "./types";

/**
 * My own system, and the one place on this site where the artefacts can be
 * shown in full, including the source. Nothing here is shared with FOX:
 * different employer, different codebase, different decisions.
 *
 * Ordered the way a design system is read: what it is, the logo,
 * foundations, components, the design-to-code workflow, quality, templates,
 * governance, and what it does not claim. Kept short on purpose: the
 * pictures carry it. Chapter ids and numbers are kept as deep-link targets.
 */
const D = "/work/bighat-design-system/device";
const V = "/work/bighat-design-system/v6";

export const bighat: CaseStudy = {
  slug: "bighat-design-system",
  title: "Big Hat design system",
  what: "My own design system, in code and in Figma, and the site you are reading is built on it",
  lead:
    "A design system I built from nothing: a React package with its Storybook, and a Figma library generated from the same tokens. Accessibility is held by the build, and Figma and code are kept in step by variables and Code Connect rather than by hand.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "DESIGN SYSTEMS IN CODE AND FIGMA · MY OWN",
    headline: ["A design system", "built from zero"],
    subline: "Big Hat, and this site runs on it",
    stamp: "TOKENS · FIGMA LIBRARY · COMPONENTS · CONTRAST GATE · CODE CONNECT · MIT",
    credit: "Sole author · Big Hat · 2025–2026",
    shot: { src: `${V}/cover.png` },
    // the tiles: one component set in two themes, drawn like the futures cone
    // (source in scripts/art/bighat-components.html); the case hero keeps the screens
    art: { src: "/work/bighat-design-system/cover-art.webp" },
    layers: [
      { src: `${D}/kanban-2400.webp`, label: "Kanban template" },
      { src: `${D}/records-2400.webp`, label: "Records template" },
      { src: `${D}/ai-chat-2400.webp`, label: "AI chat template" },
      { src: `${D}/storybook-button-2400.webp`, label: "Button in Storybook" },
    ],
  },
  meta: [
    { label: "Role", value: "Sole author: design, Figma library, and code" },
    { label: "Package", value: "@bighat/ui, React, with an Angular sibling" },
    { label: "Scale", value: "46 components, 4 templates, 126 semantic tokens" },
    { label: "Figma", value: "Team library: all 46 components, 233 variables, Code Connect" },
    { label: "Version", value: "6.0, October 2026, with its own logo" },
    { label: "Enforced", value: "124 contrast assertions, 300+ tests in CI" },
    { label: "Licence", value: "MIT; Storybook and source are public" },
    { label: "Period", value: "2025 to 2026" },
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
            {
              key: "Context",
              value:
                "A design system of my own, built from nothing for my own projects: this site, Docu Manager, and World of Raptors are built with it. Public under MIT, so the tokens, the contrast gate, and the source can be read in full.",
            },
            {
              key: "Problem",
              value:
                "A Figma library and a component library drift apart unless something other than discipline holds them together.",
            },
            {
              key: "My role and scope",
              value:
                "Sole author: the tokens, the Figma library, the React package with its Storybook, the contracts, the tests, and the governance of one breaking change.",
            },
            {
              key: "Decision 1",
              value:
                "Two layers of tokens, one API. Primitives say what a value is; semantic roles say what it means, and product design and product code may use only the roles.",
            },
            {
              key: "Decision 2",
              value:
                "Every component starts as a machine-readable contract and is built from it in Figma, React, and Storybook.",
            },
            {
              key: "Decision 3",
              value:
                "When Figma and code disagree, the code wins. A decision that starts in Figma is done only when it reaches the tokens.",
            },
            {
              key: "Outcome",
              value:
                "Version 6.0, October 2026: 46 components in Storybook and in the Figma library, 233 variables from the same tokens, 124 contrast assertions and 300+ tests in CI. No screen reader has been run against it; nothing was measured with users.",
            },
            {
              key: "Period and team",
              value: "2025 to 2026. One person: me.",
            },
          ],
        },
      ],
    },
    {
      id: "overview",
      n: "01",
      heading: "Overview",
      maxim: "Every decision is written down with what it cost.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p><strong>Small on purpose</strong>: not every surface an enterprise product needs, but each decision legible, why it was made and what it cost. <a href=\"https://konstancja-tanjga.github.io/bighat-design-system/\">Storybook</a> · <a href=\"https://github.com/Konstancja-Tanjga/bighat-design-system\">source</a>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Three things run on it.</strong> This site, Docu Manager, and World of Raptors.",
            "<strong>One set of tokens feeds both sides.</strong> The React package and the Figma library are generated from the same token files.",
            "<strong>Dark is one variable mode</strong>, not a second set of components.",
            "<strong>Storybook and source are public</strong>, under MIT, so every claim on this page can be checked.",
          ],
        },
        {
          kind: "stats",
          items: [
            { value: "46", label: "components in Storybook" },
            { value: "233", label: "Figma variables, from the same tokens" },
            { value: "124", label: "contrast assertions in CI" },
            { value: "46", label: "of them in the Figma library, with Code Connect" },
          ],
        },
        {
          kind: "carousel",
          items: [
            { src: `${D}/kanban-2400.webp`, frame: "macbook", title: "Kanban template", body: "Filters as chips above the columns; cards move without a pointer." },
            { src: `${D}/kanban-dark-2400.webp`, frame: "macbook", title: "Kanban in Dark", body: "The same screen in Dark, from the same components and one variable mode." },
            { src: `${D}/records-2400.webp`, frame: "macbook", title: "Records template", body: "One quiet actions button at the end of each row, and nothing else competing with the data." },
            { src: `${D}/records-empty-2400.webp`, frame: "macbook", title: "Records, empty", body: "“No invoices match these filters” offers a way out of the filter, not “Create invoice”." },
            { src: `${D}/ai-chat-2400.webp`, frame: "macbook", title: "AI chat template", body: "The prompt is a form and the modes are a radio group, so keyboard and ARIA come from the library." },
            { src: `${D}/storybook-button-2400.webp`, frame: "macbook", title: "Button in Storybook", body: "When to use it, what to use instead, and every do and don't rendered live with its reason." },
            { src: `${D}/colour-roles-2400.webp`, frame: "macbook", title: "Colour roles in Figma", body: "Light and Dark. Each role carries its CSS name as code syntax, so Dev Mode answers with a variable, not a hex." },
            { src: `${D}/primitives-2400.webp`, frame: "macbook", title: "Primitives", body: "The palette and the space, radius, and type scales on a 4px grid, hidden from every picker." },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${V}/cover.webp`,
          caption:
            "Big Hat 6.0: the new logo, and library components composed into a form and a toolbar, in Light and Dark. Dark is one variable mode, not a second set of components. All 46 components are in Storybook and in the Figma library, with all 233 variables.",
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
          html: "<p>The logo draws <strong>the two layers of tokens</strong>, and the gap between them.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>The crown is the primitives.</strong> There, but never touched.",
            "<strong>The brim is the semantic layer</strong>, wider than what is under it and the only layer a product may use. Everything in the product stands in its shade.",
            "<strong>The gap between them is the boundary</strong> the build enforces.",
            "<strong>The dot on the i is the brim again.</strong>",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${V}/logo.png`,
          caption: "The mark, the horizontal lockup, and the stacked lockup, in brand colour and in one colour.",
        },
        {
          kind: "shot",
          width: "column",
          src: `${V}/logo-use.png`,
          folded: true,
          caption:
            "The logo's page in Figma. On a 4px grid, 48 × 32: a 28 × 20 crown, a 4 gap, and a 48 × 8 brim. Ink is text.primary and the brim is action.primary.bg, so the logo follows the theme like any component.",
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
          src: `${D}/colour-roles-2400.webp`,
          frame: "macbook",
          caption:
            "Colour roles in Figma, Light and Dark. Each carries its CSS name as code syntax, so Dev Mode answers with var(--bh-action-primary-bg), not a hex.",
        },
        {
          kind: "shot",
          width: "wall",
          src: `${D}/primitives-2400.webp`,
          frame: "macbook",
          caption:
            "Primitives: the palette and the space, radius, and type scales on a 4px grid. Hidden from every picker, because they are banned from product CSS.",
        },
        {
          kind: "thesis",
          label: "The cost",
          text: "A new colour needs a role before it can be used, in Figma as much as in code. That friction is the feature.",
        },
      ],
    },
    {
      id: "components",
      n: "04",
      heading: "Components: one contract, three surfaces",
      standfirst:
        "Every component starts as a machine-readable contract (purpose, what it is not for, anatomy, states, keyboard, ARIA) and is built from it in Figma, React, and Storybook.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${V}/button-contract.png`,
          caption:
            "Button's page in the Figma library opens with its contract: what it is, what it is not for, and links to Storybook and the contract file. A script draws this header from spec/components/button.json, so a change is made in the contract and an edit in Figma is overwritten.",
        },
        {
          kind: "shot",
          width: "wall",
          src: `${V}/button-variants.png`,
          caption:
            "Button's variants, named after the props code uses: primary, secondary, and ghost; sm, md, and lg; default, hover, and disabled.",
        },
        {
          kind: "shot",
          width: "wall",
          src: `${D}/storybook-button-2400.webp`,
          frame: "macbook",
          caption:
            "The same component in Storybook: when to use it, what to use instead, and every do and don't rendered live with its reason.",
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
              { n: "3", title: "Code", kicker: "CSS, React, tests", body: "Tokens only; a literal fails the build. A test for every state." },
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
        {
          kind: "loop",
          centre: "When they disagree, the code wins",
          stations: [
            { label: "Tokens", title: "The token files", body: "tokens/*.tokens.json. One set of tokens feeds both sides, and a decision is done only when it reaches them." },
            { label: "Figma", title: "The library", body: "Generated from the token files by an agent through Figma's MCP server, not redrawn: 233 variables, and every value in a component bound to one." },
            { label: "Code", title: "The React package", body: "Tokens only; a literal fails the build. Through Code Connect, Dev Mode shows the component a developer would write." },
          ],
          edges: [
            { label: "Generated over MCP" },
            { label: "Code Connect" },
            { label: "Pull requests" },
          ],
          caption:
            "The loop. The library is generated from the tokens, Code Connect binds it to the package, and a decision that starts in Figma, such as the 4px grid for radius and the smallest type sizes, reaches the tokens through pull requests.",
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
            "<strong>Contrast is a build error.</strong> Every text and non-text pair is asserted at the WCAG level that applies to it, in both themes: 124 assertions.",
            "<strong>Glass is measured as seen.</strong> It is composited over what sits beneath it before the contrast is measured.",
            "<strong>ARIA is checked against the contract.</strong> A generated report checks each contract against the pattern it claims.",
            "<strong>Colour is never the only cue.</strong> Badges need a label, and a pressed filter shows a check mark.",
            "<strong>Empty, loading, and error are one component</strong>, with three announcement strategies.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${D}/records-empty-2400.webp`,
          frame: "macbook",
          caption:
            "“No invoices match these filters” offers a way out of the filter, not “Create invoice”. Empty is two different screens.",
        },
      ],
    },
    {
      id: "templates",
      n: "07",
      heading: "Templates",
      maxim: "A template is assembled only from library components, with its loading and error states drawn.",
      standfirst:
        "Three of the four templates, one tile each. Open a tile and the template unfolds to the right, with the rule it sets.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "tpl-kanban",
              n: "01",
              title: "Kanban",
              maxim: "Filters are chips, and cards move without a pointer.",
              standfirst: "A board of cards in columns, in Light and in Dark. Dark is one variable mode, not a second set of components.",
              cover: { src: `${D}/kanban-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "duo",
                  items: [
                    { src: `${D}/kanban-2400.webp`, frame: "macbook", caption: "Kanban in Light: filters as chips above the columns; cards move without a pointer." },
                    { src: `${D}/kanban-dark-2400.webp`, frame: "macbook", caption: "The same screen in Dark, from the same components and one variable mode." },
                  ],
                },
              ],
            },
            {
              id: "tpl-records",
              n: "02",
              title: "Records",
              maxim: "One quiet actions button per row.",
              standfirst: "A list of records with its filters. The empty state of this screen is in chapter 06.",
              cover: { src: `${D}/records-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${D}/records-2400.webp`,
                  frame: "macbook",
                  caption: "Records: one quiet actions button at the end of each row, and nothing else competing with the data.",
                },
              ],
            },
            {
              id: "tpl-ai-chat",
              n: "03",
              title: "AI chat",
              maxim: "The prompt is a form, and the modes are a radio group.",
              standfirst: "A chat screen built from form components, so keyboard and ARIA come from the library.",
              cover: { src: `${D}/ai-chat-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${D}/ai-chat-2400.webp`,
                  frame: "macbook",
                  caption: "AI chat: the prompt is a form and the modes are a radio group, so the screen inherits the library's keyboard and ARIA behaviour.",
                },
              ],
            },
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
            "<strong>No screen reader has been run against it.</strong> The announcement rules are tested in code, not in NVDA or VoiceOver.",
            "<strong>Pressed states are not drawn in Figma.</strong> The browser draws them.",
            "<strong>Glass is a little flatter in Figma</strong> than in the browser, because Figma cannot saturate a backdrop.",
          ],
        },
      ],
    },
  ],
};
