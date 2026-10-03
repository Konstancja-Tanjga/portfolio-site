import type { CaseStudy } from "./types";

/**
 * My own system, and the one place on this site where the artefacts can be
 * shown in full — including the source. Nothing here is shared with FOX:
 * different employer, different codebase, different decisions.
 *
 * Ordered the way a design system is read: what it is and what it set out to
 * do, then foundations, components, the design-to-code workflow, the quality
 * gates, documentation, governance, and what it does not claim.
 */
export const bighat: CaseStudy = {
  slug: "bighat-design-system",
  title: "Big Hat design system",
  what: "My own design system, built from zero in code and in Figma — and the site you are reading is built on it",
  lead:
    "Big Hat is a design system I built from nothing for my own projects: a React package, a Storybook, and a published Figma library generated from the same tokens. Forty-six components, two token layers, WCAG AA held by a failing build rather than a review comment, and Figma and code kept in step by variables and Code Connect rather than by hand.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "DESIGN SYSTEMS IN CODE AND FIGMA · MY OWN",
    headline: ["A design system", "built from zero"],
    subline: "Big Hat — and this site runs on it",
    stamp: "TOKENS · FIGMA LIBRARY · COMPONENTS · CONTRAST GATE · CODE CONNECT · MIT",
    credit: "Sole author · Big Hat · 2025–2026",
    shot: { src: "/work/bighat-design-system/cover-ai-chat.png" },
  },
  meta: [
    { label: "Role", value: "Sole author — design, Figma library and code" },
    { label: "Package", value: "@bighatpoland/ui — React, with an Angular sibling" },
    { label: "Scale", value: "46 components, 4 page templates, 126 semantic tokens" },
    { label: "Figma", value: "Published library: 224 variables, Light and Dark, Code Connect" },
    { label: "Enforced", value: "124 contrast assertions and 313 tests in CI" },
    { label: "Used by", value: "This portfolio site, Docu Manager and World of Raptors" },
    { label: "Licence", value: "MIT — Storybook and source are public" },
  ],
  chapters: [
    {
      id: "overview",
      n: "01",
      heading: "Overview",
      maxim:
        "What a decision cost is the part of design systems work that never survives into a portfolio.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>A design system of my own, unconnected to any employer's: I built it from nothing, for my own projects, and it is what this site, Docu Manager and World of Raptors are made of. It is deliberately small. It is not trying to cover every surface an enterprise product needs — it is trying to be legible about <em>why</em> each decision was made and <em>what each one cost</em>, on both sides of the handoff. <a href=\"https://konstancja-tanjga.github.io/bighat-design-system/\">Storybook</a> · <a href=\"https://github.com/bighatpoland/bighat-design-system\">source</a>.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "46", label: "components, in two layers" },
            { value: "224", label: "Figma variables, generated from the tokens" },
            { value: "124", label: "contrast assertions in CI" },
            { value: "313", label: "tests, including the contrast gate" },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/catalogue.png",
          caption: "The catalogue as a consuming team meets it: foundations, templates and components in one navigation.",
        },
      ],
    },
    {
      id: "principles",
      n: "02",
      heading: "What it set out to do",
      standfirst:
        "Four principles, each one enforced by something other than goodwill.",
      blocks: [
        {
          kind: "spec",
          caption: "Principle, and what holds it.",
          rows: [
            { key: "One source of truth", value: "The tokens and the component contracts. Figma is generated from them, not redrawn — and a decision made in Figma first has to land in the tokens before it counts." },
            { key: "Meaning, not values", value: "Product design and product code may use semantic roles only. Primitives are hidden from Figma's pickers and banned from product CSS." },
            { key: "Accessible by construction", value: "Contrast is a build error, labels are required props, and every component carries its keyboard map and ARIA contract." },
            { key: "Every state designed", value: "Empty, loading and error are one component with three announcement strategies, used by every template." },
          ],
        },
      ],
    },
    {
      id: "foundations",
      n: "03",
      heading: "Foundations: two layers, and only one is an API",
      standfirst:
        "The test of whether a token split is real is the dark theme — and, now, whether a designer in Figma reaches for the same names a developer writes.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/token-layers.png",
          caption: "Primitives say what a value is; semantics say what it means, and semantics are the only colour API product code sees. Dark theme redefines the second layer alone — no second stylesheet, no theme selector inside a component.",
        },
        {
          kind: "code",
          code: `"action": {
  "primary": {
    "bg": {
      "$value": "{color.green.400}"
    },
    "bgHover": {
      "$value": "{color.green.500}"
    },`,
          caption: "The source, in the W3C design tokens format. A semantic role is an alias, never a value. The build turns it into --bh-action-primary-bg for code and into a Figma variable whose code syntax is that same name.",
          source: { text: "tokens/semantic.tokens.json", href: "https://github.com/bighatpoland/bighat-design-system/blob/main/tokens/semantic.tokens.json" },
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/figma-primitives.png",
          caption: "Primitives in the Figma library: the palette and the space, radius and type scales. Every swatch is bound to a variable, and every one of those variables is hidden from the pickers — a designer cannot fill a frame with green/400 any more than product code can write it.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/figma-color-roles.png",
          caption: "The roles designers actually use, in both modes. One variable per role with a Light and a Dark value, and the CSS custom property as its code syntax — so Dev Mode answers “which colour is this” with var(--bh-action-primary-bg), not a hex.",
        },
        {
          kind: "thesis",
          label: "The cost, named",
          text:
            "Every new colour needs a role before it can be used, in Figma as much as in code, so a designer cannot hand over a hex and be done. That friction is the feature — it is why teams argue with the system in week two rather than week forty.",
        },
      ],
    },
    {
      id: "components",
      n: "04",
      heading: "Components: one contract, three surfaces",
      standfirst:
        "Each component starts as a machine-readable contract — purpose, what it is not for, anatomy, states, keyboard, ARIA, tokens — and is then built in Figma and in code from it. Button, as the worked example.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/figma-library.png",
          caption: "Button and Button / Critical in the Figma library: three variants, three sizes, default, hover and disabled, and a Loading property. Variant properties are named after the props and take the values code uses, so the component panel and the props table read the same.",
        },
        {
          kind: "spec",
          caption: "The same API in both places.",
          rows: [
            { key: "variant", value: "primary · secondary · ghost — visual weight" },
            { key: "tone", value: "default · critical — consequence. A separate axis since 2.0, and a separate component set in Figma, so a destructive action can still be quiet." },
            { key: "size", value: "sm · md · lg — bound to control.sm/md/lg; lg is the 44px touch target" },
            { key: "state", value: "default · hover · disabled in Figma; pressed and focus are drawn by the browser, not by a variant" },
            { key: "Loading", value: "A boolean in Figma, the loading prop in code: the label stays, so the button never changes width mid-click" },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/figma-button-review.png",
          caption: "The review frame: the same instances in Light and Dark. Dark is one Color mode switched on a frame, not a second set of components — which is the cheapest place to find a state nobody drew.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bighat-design-system/storybook-button.png",
          caption: "The same component as a developer meets it in Storybook: what it is for, what to use instead, and every do/don't rendered live with its reason, rather than as a picture that goes stale.",
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
              { n: "1", title: "Contract", kicker: "spec/components/*.json", body: "Purpose, what it is not for, anatomy, states, keyboard map, ARIA, tokens consumed. Validated in CI." },
              { n: "2", title: "Figma", kicker: "from the library's variables", body: "Every fill, stroke, radius and gap bound to a variable; variant properties named after the props; the purpose and the not-for line in the component description." },
              { n: "3", title: "Code", kicker: "CSS, React, tests", body: "BEM parts matching the anatomy, tokens only — a literal fails the drift audit. A test for every state in the contract." },
              { n: "4", title: "Docs", kicker: "Storybook", body: "Scaffolded from the contract; the judgement — when to use it, do and don't with reasons — written by hand, and the build fails while a TODO remains." },
              { n: "5", title: "Code Connect", kicker: "figma/*.figma.ts", body: "Dev Mode shows the <Button> a developer would write, linked to its source, instead of CSS read off the canvas." },
              { n: "6", title: "Release", kicker: "changeset + library publish", body: "A versioned package with a changelog and a migration note for anything breaking, and a new publish of the Figma library. Publishing is a person's step on both sides." },
            ],
            underneath: {
              label: "Underneath every stage",
              chips: ["tokens/*.tokens.json", "Figma MCP", "contrast gate", "ARIA audit"],
              body: "The Figma variables were generated from the token files by an agent working through Figma's MCP server, not retyped — 224 of them, with scopes and code syntax. When the two disagree, the code wins; when a decision starts in Figma, it is not done until it reaches the tokens.",
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
// hover is a pointer state, not a prop.
const disabled = instance.getEnum('state', {
  default: '',
  hover: '',
  disabled: ' disabled',
});

export default {
  example: figma.code\`<Button\${variant}\${size}\${loading}\${disabled}>\${label}</Button>\`,
  imports: ['import { Button } from "@bighat/ui"'],`,
          caption: "The Code Connect template behind Button. Defaults are left out, so a primary medium button reads <Button>Save</Button> — the snippet a developer copies should be the one they would have written.",
          source: { text: "figma/Button.figma.ts", href: "https://github.com/bighatpoland/bighat-design-system/blob/main/figma/Button.figma.ts" },
        },
        {
          kind: "thesis",
          label: "A decision that started in Figma",
          text:
            "The radius scale and the two smallest type sizes were moved onto a 4px grid in the Figma library first. Under the rule above, that was drift until it reached the tokens — so it went back as a pull request that changed the primitives, rewrote the token descriptions, superseded a recorded decision against 10px type, and kept that decision's warning as a rule: 10px is for labels and metadata, never for a figure the reader has to read.",
        },
      ],
    },
    {
      id: "contrast",
      n: "06",
      heading: "Accessibility: contrast is a build error",
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
            "Translucent surfaces are composited over what sits beneath them before they are measured, so glass is held to the same bar as paint",
            "58 assertions when the gate shipped, 124 now — across both themes, run in CI before the documentation deploys. The pair list grows with every token that renders text",
            "A generated ARIA conformance report checks each component's contract against the WAI-ARIA pattern it claims, and names what was never built",
            "Colour is never the only cue: Badge has no colour prop and requires a label, and a pressed filter chip carries a check mark as well as a tint",
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
      n: "07",
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
      id: "templates",
      n: "08",
      heading: "Templates, four states each",
      standfirst:
        "Assembling a happy path from good components is the easy half. Remembering on every screen that a request can return nothing is the half that costs teams weeks.",
      blocks: [
        {
          kind: "set",
          size: "wide",
          items: [
            { src: "/work/bighat-design-system/template-records.png", caption: "Records — reading one record never costs the reader their place among the others; row actions are one icon per row, named after the row" },
            { src: "/work/bighat-design-system/template-kanban.png", caption: "Kanban — filters are chips you can see and remove; moving a card works without a pointer, WCAG 2.5.1" },
            { src: "/work/bighat-design-system/template-ai-chat.png", caption: "AI chat — the prompt is a textarea in a form, the modes are a radio group" },
          ],
          caption: "Each ships ready, loading, empty and error stories. Records splits empty in two, because nothing exists and nothing matches are the same zero rows with opposite meanings and opposite actions.",
        },
      ],
    },
    {
      id: "breaking-change",
      n: "09",
      heading: "Governance: one breaking change, with the argument written down",
      standfirst:
        "Every change ships as a versioned release with a changeset; anything a consumer's own code would notice is a major, with a migration note.",
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
      n: "10",
      heading: "What it deliberately does not do",
      standfirst:
        "Each of these would have made the repository look bigger without making a new argument.",
      blocks: [
        {
          kind: "points",
          items: [
            "Select wraps the native element, Dialog is the native <dialog>, DatePicker a date input, Slider a range — focus trapping, autofill and the mobile picker are not worth reimplementing badly",
            "Combobox is the one place that bargain is refused, because a native select cannot be typed into — so it pays the full ARIA bill instead: aria-activedescendant, a live result count, Escape twice to clear",
            "Text fields are not glass, though the buttons beside them are: a field has no text of its own to identify it, so its edge is held to 3:1",
            "Templates live in the Storybook, not in the package — a template you can install becomes a dependency, and then a team is blocked on the design system to change its own layout",
            "Do/don't examples are rendered components, not screenshots: a screenshot of guidance goes stale the moment the component changes, and nobody notices, because images have no build step",
          ],
        },
      ],
    },
    {
      id: "agents",
      n: "11",
      heading: "Rules an agent can follow",
      maxim: "Whether a skill file changes what an agent writes is a testable claim, not a slogan.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The system ships a skill file encoding what the types cannot — never reach for a primitive, never invent an empty state, never let colour be the only cue, never remove a focus ring — and a machine-readable contract per component saying what it is <em>not</em> for.</p>",
        },
        {
          kind: "passage",
          html:
            "<p>So it was tested: same model, same prompt, skill file present or absent, both outputs committed verbatim. <strong>The result contradicted the hypothesis.</strong> None of the four failures the protocol predicted occurred in either arm — because the rules are also in the component source, in the README, and in required props. What the file actually changed was architectural: without it, a table with a toolbar and no landmarks; with it, a full app shell with named regions and a skip link. Both arms then left raw font sizes inline, because the system exported no typography tokens at the time — the second gap an outside consumer found that I could not see.</p>",
        },
        {
          kind: "passage",
          html:
            "<p>The same contracts are what let an agent build the Figma library: it read the token files and the specs, generated the variables and the Button component sets through Figma's MCP server, and reported what Figma cannot reproduce — backdrop saturation on glass, and the dark theme's floating shadow geometry — instead of approximating it silently.</p>",
        },
      ],
    },
    {
      id: "limits",
      n: "12",
      heading: "What it does not claim yet",
      blocks: [
        {
          kind: "points",
          items: [
            "No screen reader has been run against it. The announcement policies are testable claims, and nobody has tested them in NVDA or VoiceOver",
            "The Figma library has the foundations and Button; the other components exist in code and Storybook first, and are being added to the library one by one",
            "Pressed and focus are not drawn in Figma — the browser draws them, and the library says so rather than faking them",
            "10px labels are a recent decision; dense tables are the place to watch it",
          ],
        },
      ],
    },
  ],
};
