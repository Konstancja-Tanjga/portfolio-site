import type { CaseStudy } from "./types";

/**
 * My own system, and the one place on this site where the artefacts can be
 * shown in full, including the source. Nothing here is shared with FOX:
 * different employer, different codebase, different decisions.
 *
 * Ordered the way a design system is read: what it is, the logo,
 * foundations, components, the design-to-code workflow, quality,
 * governance, and what it does not claim. Kept short on purpose: the
 * pictures carry it. Chapter ids are kept as deep-link targets; the
 * templates chapter went into the chapter 01 carousel on 25 October 2026.
 */
const D = "/work/bighat-design-system/device";
const V = "/work/bighat-design-system/v6";
const F = "/work/bighat-design-system";

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
    art: { src: `${F}/cover-art.webp` },
    motif: "tokens",
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
              key: "What",
              value:
                "My own design system: a React package with its Storybook, and a Figma library from the same tokens. This site, Docu Manager, and World of Raptors run on it.",
            },
            {
              key: "Problem",
              value:
                "A Figma library and a component library drift apart unless something other than discipline holds them together.",
            },
            {
              key: "My role",
              value:
                "Sole author: the tokens, the Figma library, the React package with its Storybook, the contracts, the tests, and the governance of one breaking change.",
            },
            {
              key: "Decision 1",
              value:
                "Two layers of tokens, one API: primitives say what a value is, semantic roles say what it means, and a product may use only the roles.",
              shot: { frame: "macbook", src: `${D}/colour-roles-1600.webp`, alt: "Colour roles in Figma, Light and Dark, each carrying its CSS variable name", to: "#foundations" },
            },
            {
              key: "Decision 2",
              value:
                "Every component starts as a machine-readable contract and is built from it in Figma, React, and Storybook.",
              shot: { src: `${V}/button-contract.png`, alt: "Button's page in the Figma library, headed by its contract", to: "#components" },
            },
            {
              key: "Decision 3",
              value:
                "When Figma and code disagree, the code wins. A decision that starts in Figma is done only when it reaches the tokens.",
              shot: { frame: "macbook", src: `${D}/storybook-button-1600.webp`, alt: "Button in Storybook, the component as code documents it", to: "#workflow" },
            },
            {
              key: "Outcome",
              value:
                "Version 6.0, October 2026: 46 components in Storybook and in Figma, 233 variables, 124 contrast assertions, 300+ tests in CI. Nothing measured with users.",
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
            "<p><strong>Small on purpose</strong>: not every surface an enterprise product needs, but each decision legible, why it was made and what it cost. Four templates, each assembled only from library components, with its loading and error states drawn. <a href=\"https://konstancja-tanjga.github.io/bighat-design-system/\">Storybook</a> · <a href=\"https://github.com/Konstancja-Tanjga/bighat-design-system\">source</a>.</p>",
        },
        {
          kind: "carousel",
          items: [
            { src: `${D}/kanban-2400.webp`, frame: "macbook", title: "Kanban template", body: "Filters as chips above the columns; cards move without a pointer." },
            { src: `${D}/kanban-dark-2400.webp`, frame: "macbook", title: "Kanban in Dark", body: "The same screen from the same components; Dark is one variable mode." },
            { src: `${D}/records-2400.webp`, frame: "macbook", title: "Records template", body: "One quiet actions button at the end of each row, nothing else competing with the data." },
            { src: `${D}/ai-chat-2400.webp`, frame: "macbook", title: "AI chat template", body: "The prompt is a form and the modes a radio group, so keyboard and ARIA come from the library." },
            { src: `${D}/storybook-button-2400.webp`, frame: "macbook", title: "Button in Storybook", body: "When to use it, what to use instead, every do and don't rendered live with its reason." },
            { src: `${D}/colour-roles-2400.webp`, frame: "macbook", title: "Colour roles in Figma", body: "Light and Dark; each role carries its CSS name, so Dev Mode answers with a variable, not a hex." },
          ],
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
            "<strong>The brim is the semantic layer</strong>, wider than what is under it and the only layer a product may use.",
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
            "The logo's page in Figma: a 4px grid, 48 × 32; a 28 × 20 crown, a 4 gap, a 48 × 8 brim. Ink is text.primary and the brim is action.primary.bg, so the logo follows the theme like any component.",
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
          kind: "tabs",
          label: "The two layers in Figma",
          items: [
            {
              label: "Colour roles",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${D}/colour-roles-2400.webp`,
                  frame: "macbook",
                  caption:
                    "Colour roles, Light and Dark. Each carries its CSS name as code syntax, so Dev Mode answers with var(--bh-action-primary-bg), not a hex.",
                },
              ],
            },
            {
              label: "Primitives",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${D}/primitives-2400.webp`,
                  frame: "macbook",
                  caption:
                    "Primitives: the palette and the space, radius, and type scales on a 4px grid. Hidden from every picker, because they are banned from product CSS.",
                },
              ],
            },
          ],
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
        "Every component starts as a machine-readable contract (purpose, what it is not for, anatomy, states, keyboard, ARIA) and is built from it in Figma, React, and Storybook. Button, on its three surfaces.",
      blocks: [
        {
          kind: "tabs",
          label: "Button on three surfaces",
          items: [
            {
              label: "Contract",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${V}/button-contract.png`,
                  caption:
                    "Button's page in the Figma library opens with its contract: what it is, what it is not for, links to Storybook and the contract file. A script draws the header from spec/components/button.json, so an edit in Figma is overwritten.",
                },
              ],
            },
            {
              label: "Variants",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${V}/button-variants.png`,
                  caption:
                    "Variants named after the props code uses: primary, secondary, and ghost; sm, md, and lg; default, hover, and disabled.",
                },
              ],
            },
            {
              label: "Storybook",
              blocks: [
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
          ],
        },
      ],
    },
    {
      id: "workflow",
      n: "05",
      heading: "Design and code, kept in step",
      standfirst:
        "How a component moves, drawn: Button from its contract to the 6.0 release, through the tools it passes. When Figma and code disagree, the code wins.",
      blocks: [
        {
          kind: "sheet",
          sheet: {
            tools: [
              { name: "Contract", mark: "", glyph: "{ }", what: "spec/components/*.json, validated in CI" },
              { name: "Figma", mark: "figma", what: "library variables, Code Connect, Dev Mode" },
              { name: "React", mark: "react", what: "@bighat/ui: CSS, components, tests" },
              { name: "Storybook", mark: "storybook", what: "the docs, public" },
              { name: "GitHub", mark: "github", what: "pull requests, the source under MIT" },
            ],
            stations: [
              { tool: "Contract", mark: "", file: "spec/components/button.json", title: "A contract before a frame", body: "Purpose, not-for, anatomy, states, keyboard, ARIA. Validated in CI; the Figma header is drawn from it.", image: { src: `${V}/button-contract.png`, alt: "Button's page in the Figma library, its header drawn from the contract file" } },
              { tool: "Figma", mark: "figma", file: "library variables", title: "Generated from the tokens, not redrawn", body: "By an agent over Figma's MCP server: 233 variables, every value in a component bound to one.", image: { src: `${F}/colour-roles.png`, alt: "Colour roles in the Figma library, Light and Dark, each with its CSS variable name" } },
              { tool: "React", mark: "react", file: "CSS, React, tests", title: "Tokens only", body: "A literal fails the build. A test for every state; Dark is one variable mode, not a second set of components.", image: { src: `${F}/kanban-dark.png`, alt: "The Kanban template in Dark, built from the React package" } },
              { tool: "Storybook", mark: "storybook", file: "docs", title: "Scaffolded from the contract", body: "The judgement written by hand: when to use it, what instead, every do and don't live.", image: { src: `${F}/storybook-button.png`, alt: "Button's page in Storybook" } },
              { tool: "Figma", mark: "figma", file: "figma/Button.figma.ts", title: "Dev Mode shows the code", body: "Code Connect: variants named after the props, so Dev Mode shows the component a developer would write.", image: { src: `${V}/button-variants.png`, alt: "Button's variants in Figma, named after the props code uses" } },
              { drawing: "merge", lines: ["Contract validated", "Contrast gate, both themes", "300+ tests"], tool: "GitHub", mark: "github", file: "pull request", title: "A decision from Figma lands here", body: "Radius and the smallest type sizes moved to a 4px grid in the library first, then reached the tokens through pull requests." },
              { tool: "Release", mark: "", file: "changeset + publish", title: "Version 6.0, October 2026", body: "A versioned package and a new library publish, both a person's call.", image: { src: `${V}/cover.png`, alt: "Big Hat 6.0: the logo and library components in Light and Dark" } },
            ],
            block: [
              ["Sheet", "How a component moves through Big Hat"],
              ["Drawn for", "Button, from its contract to the 6.0 release"],
              ["Governed by", "the contract validated in CI, the contrast gate, Code Connect; when Figma and code disagree, the code wins"],
              ["Repository", "GitHub, public under MIT"],
            ],
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
            "<strong>Contrast is a build error.</strong> Every text and non-text pair asserted at the WCAG level that applies to it, in both themes: 124 assertions.",
            "<strong>Glass is measured as seen.</strong> Composited over what sits beneath it before the contrast is measured.",
            "<strong>ARIA is checked against the contract.</strong> A generated report checks each contract against the pattern it claims.",
            "<strong>Colour is never the only cue.</strong> Badges need a label; a pressed filter shows a check mark.",
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
      id: "governance",
      n: "07",
      heading: "Governance: one breaking change, argued in full",
      standfirst:
        "Button's variant prop carried weight and consequence in one enum. Splitting it into variant and tone took three versions, with a window held open between them.",
      blocks: [
        {
          kind: "fold",
          title: "The split, 1.x to 3.0",
          hint: "Open: three versions, what each one changed and cost",
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
      ],
    },
    {
      id: "limits",
      n: "08",
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
