import type { CaseStudy } from "./types";

/**
 * October 2026, second pass: the study now says that FOX is built for
 * agents as well as people (chapter 02a), and how the design-code gap was
 * found (02b). The agent claims are on record in bi.ts, dms.ts, or the
 * inventory; the 02b counts are Konstancja's July audit. The FOX agent rules are internal,
 * so the method is shown verbatim on the public Big Hat skill instead.
 *
 * A practice study, not a product one: the stack from
 * docs/case-study-kit/RULES.md is applied with the chapters a design system
 * has facts for. No personas, no use cases, no handoff chapter and no
 * reflection are on record here, so none is written. Chapter numbers were
 * written for this page.
 *
 * The images are the v3.0 Storybook and the Nexus registry, captured by
 * Konstancja in October 2026 (screenshots/fox-v3/ in the repository root)
 * and set into the MacBook mockup under device/, cropped from the right
 * to the screen's proportions. v3.0 is internal, so no image links to it;
 * the public link is the v1 line and says so. Paths are literal strings so
 * that scripts/check-content.mjs sees them.
 */

export const fox: CaseStudy = {
  slug: "fox-design-system",
  title: "FOX design system",
  what: "Around 80 components, six consuming products, and the rules agents build by",
  lead:
    "A design system in code, read by people and by agents. I built it from nothing and led its migration to v3 across the platform's product lines, across Angular, React, and web components.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "DESIGN SYSTEMS IN CODE · ENTERPRISE PLATFORM",
    headline: ["Design system", "as code"],
    subline: "for a six-product ERP platform, ready for agents",
    stamp: "TOKENS · COMPONENTS · STORYBOOK · CHROMATIC · CODE CONNECT · MCP · AGENTS.MD",
    credit: "Lead Designer, UX Engineer · Asseco Solutions · 2023–2026",
    art: { src: "/work/fox-design-system/device/v3-get-started-2400.webp" },
    shot: { src: "/work/fox-design-system/device/v3-colors-2400.webp" },
  },
  meta: [
    { label: "Role", value: "Lead Designer, UX Engineer; owner of the design system. I review and merge the component pull requests" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Scale", value: "Around 80 components, 6 consuming products" },
    { label: "Frameworks", value: "Angular, React, web components" },
    { label: "Pipeline", value: "Figma to Storybook to Chromatic to Nexus" },
    { label: "AI tooling", value: "Code Connect, Figma MCP server, Codex and then Claude Code, AGENTS.md, and skills" },
    { label: "Period", value: "November 2023 to present" },
    { label: "Storybook", value: "Public v1 line, design-system-v1.assecosolutions.com. The v3.0 Storybook is internal", href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs" },
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
                "The Figma library and the product disagreed, nobody knew which was right, and agents now build UI from the same sources.",
            },
            {
              key: "My role and scope",
              value:
                "I built FOX from nothing; own its tokens, component API, and agent rules; and review and merge every component pull request.",
            },
            {
              key: "Decision 1",
              value: "One token set behind the Figma library and the code, built once into CSS custom properties and TS types for every framework.",
            },
            {
              key: "Decision 2",
              value: "The code is the system: versioned packages, Storybook on Chromatic as the reference, and Code Connect binding the Figma library to it.",
            },
            {
              key: "Decision 3",
              value: "Code Connect and the Figma MCP server give AI tools the real components, AGENTS.md sets the rules, and I merge every component change.",
            },
            {
              key: "Outcome",
              value:
                "Around 80 components and six products on one system, migrated to v3, with handoff specs generated from the design and pulled into Jira.",
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
      standfirst: "The live library, and the five things that keep it aligned for people and agents.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>FOX is Asseco's. <strong>The Storybook screens on this page are v3.0</strong>, which stays inside the company; the public Storybook documents the v1 line, at <a href=\"https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs\">design-system-v1.assecosolutions.com</a>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>One token set</strong> behind both the Figma library and the code.",
            "<strong>Every component mapped</strong> between Figma and code through Code Connect.",
            "<strong>Storybook on Chromatic</strong> as the reference designers and engineers both check against.",
            "<strong>Handoff specs generated</strong> from the design and pulled into Jira, instead of written by hand.",
            "<strong>The same contract for AI tools</strong> through Code Connect, the Figma MCP server, and written rules.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/device/v3-get-started-2400.webp",
          frame: "macbook",
          caption: "Get started in the v3.0 Storybook. A product installs fox-common-styles with npm or yarn, imports its styles, and adds its assets to the Angular config, so FOX arrives as packages. Utilities, atoms, molecules, organisms, and templates sit in one navigation, published on Chromatic.",
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
            "<strong>Nexus holds every release</strong>, one versioned package per component in the internal npm registry, and the products install FOX from there.",
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
      id: "ready-for-agents",
      n: "02a",
      heading: "Built for agents",
      maxim: "A design system that only people can read is half a system once agents build screens.",
      standfirst: "How agents read FOX, what they are told, and who checks what they build.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Agents get the contract engineers get.</strong> Code Connect binds every Figma component to its implementation, and the Figma MCP server hands that context to the agent: Codex first, Claude Code now.",
            "<strong>The rules are written down, not assumed.</strong> An AGENTS.md and a set of skills, which I own, keep generated UI on the system.",
            "<strong>Documentation in four layers.</strong> The layers are tokens, components, patterns, and templates, and the pattern catalogue is Markdown that a person and an agent read alike.",
            "<strong>A person merges every component change.</strong> Generated code arrives as a pull request, and I review and merge it.",
            "<strong>The file follows the code.</strong> What is done in code is written back into Figma over MCP, so the file follows the code.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/device/v3-button-docs-2400.webp",
          frame: "macbook",
          caption:
            "fox-button in the v3.0 Storybook. The description is written in labelled parts (Purpose, Use when, Avoid when, Common pairings, and Important limitations) above the live example and the props table, so a person and an agent read the same guidance.",
        },
        {
          kind: "loop",
          centre: "One contract for people and agents",
          stations: [
            { label: "Figma", title: "The file", body: "Every component bound to the implementation that ships it, through Code Connect." },
            { label: "Code", title: "The FOX package", body: "What engineers and agents both build on, one versioned package per component." },
            { label: "Agent", title: "Codex, then Claude Code", body: "The agents, reading the component context over MCP under AGENTS.md and the skills. Every component change is a pull request I review." },
          ],
          edges: [
            { label: "Code Connect" },
            { label: "Built on the package" },
            { label: "Written back over MCP" },
          ],
          caption:
            "The loop. The file binds to the code through Code Connect; agents build on that code under written rules; what is done in code is written back into the file over MCP.",
        },
        {
          kind: "video",
          clip: true,
          frame: "macbook",
          width: "wall",
          src: "/work/applus-analytics/clips/new-query.mp4",
          poster: "/work/applus-analytics/clips/new-query.webp",
          title: "A prototype generated on FOX components",
          caption:
            "A prototype for APplus Analytics, generated on FOX components from a settled requirement and clickable within hours. The implementation is the developers' code on the same package.",
        },
        {
          kind: "passage",
          html:
            "<p>The FOX rules are internal, so the method is shown on my public system, <a href=\"https://konstancja-tanjga.github.io/portfolio-site/work/bighat-design-system\">Big Hat</a>. <strong>Its agent skill writes down the rules that type-checking, lint-passing code can still break</strong>, starting with the token rule below.</p>",
        },
        {
          kind: "code",
          code: `## 1. Never use a primitive token

The system exports two token layers and only one of them is an API.

Primitives (\`color.blue.500\`, \`space.4\`) say what a value _is_. Semantics
(\`action.primary.hover\`, \`text.muted\`, \`border.focus\`) say what it _means_.
Product code and generated code may reference semantics only.

If no semantic token fits what you are building, that is a signal the system is
missing a role — not a licence to reach one layer down. **Say so and stop.**
Write it in \`DS-GAPS.md\` with what you reached for, what you would have to
hand-roll, and what the hand-rolled version does worse.`,
          caption:
            "Rule 1 of the agent skill, copied verbatim. Generated code uses semantic tokens only, and a missing role is reported in DS-GAPS.md, not hand-rolled.",
          source: {
            text: "Source: Big Hat design system, agent/SKILL.md.",
            href: "https://github.com/Konstancja-Tanjga/bighat-design-system/blob/main/agent/SKILL.md",
          },
        },
      ],
    },
    {
      id: "finding-drift",
      n: "02b",
      heading: "Finding the drift",
      standfirst: "How the gap between the Figma library and the code was found and sorted.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Every component mapped.</strong> I mapped each FOX component between the Figma library and Storybook and resolved the naming mismatches.",
            "<strong>Every remaining gap classified</strong> as token, component, state, behaviour, or documentation drift, or as noise, so the list of work replaced opinions.",
            "<strong>One reference for review.</strong> Storybook on Chromatic is what design and engineering check a component against.",
          ],
        },
        {
          kind: "passage",
          html: "<p>I audited the Figma library against Storybook and against the APplus Analytics product twice, in March and July 2026. <strong>The July audit found 115 differences: 110 real gaps and 5 that were noise.</strong></p>",
        },
        {
          kind: "stats",
          items: [
            { value: "18", label: "token drift" },
            { value: "44", label: "component drift" },
            { value: "29", label: "state drift" },
            { value: "7", label: "behaviour drift" },
            { value: "12", label: "documentation drift" },
            { value: "5", label: "noise" },
          ],
        },
        {
          kind: "spec",
          caption: "What each category means. Source: my FOX audit, July 2026.",
          rows: [
            { key: "token drift", value: "Values that no longer match the tokens" },
            { key: "component drift", value: "Components built outside the library, or variants improvised in code" },
            { key: "state drift", value: "Loading, empty, error, hover, focus, and disabled states that differ between design and code" },
            { key: "behaviour drift", value: "One component that behaves differently on different screens" },
            { key: "documentation drift", value: "Docs that say one thing while the code does another" },
            { key: "noise", value: "Differences that do not affect users, recorded and left alone" },
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
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/device/v3-colors-2400.webp",
          frame: "macbook",
          caption:
            "Colours in the v3.0 Storybook. One token is applied three ways, as a CSS variable, a text class, or a background class, and the colour scales follow: primary, primary opacity and highlight, brand, and secondary.",
        },
      ],
    },
    {
      id: "one-component",
      n: "04",
      heading: "One component's API",
      standfirst:
        "The v3.0 Storybook gives each component an API table and code to copy. fox-list-extended shows the first, fox-dialog the second.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/device/v3-list-extended-api-2400.webp",
          frame: "macbook",
          caption:
            "fox-list-extended, one of the templates in the v3.0 Storybook. One page holds the whole contract: the attributes, each with its type and a live control; the list-item-clicked event; and the listItemTemplate slot.",
        },
        {
          kind: "code",
          code: `<fox-button label="Trigger Dialog"></fox-button>

<fox-dialog heading="HeaderText" id="dialog">
  <div slot="leftAction">
    <fox-icon icon="warning" large=""></fox-icon>
  </div>
  <div slot="rightAction">
    <fox-icon-button icon="close" action="close"></fox-icon-button>
  </div>
  <div slot="subline">subline of the dialog</div>
  <div class="content">
    <p>This is the content of the dialog.</p>
  </div>

  <div slot="actions">
    <fox-button action="close" label="Text button" class="mr-auto"></fox-button>
    <fox-button action="close" filled="" label="Secondary"></fox-button>
    <fox-button action="confirm" primary="" filled="" label="Primary"></fox-button>
  </div>
</fox-dialog>`,
          caption:
            "fox-dialog in the v3.0 Storybook, the Default story, copied verbatim. It shows a heading attribute; named slots for the side actions, the subline, and the actions; and buttons that close or confirm the dialog. A developer and an agent read the same contract.",
          source: { text: "Source: FOX Storybook v3.0 (internal), organisms / fox-dialog, Default story." },
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
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/device/v3-nexus-versions-2400.webp",
          frame: "macbook",
          caption:
            "fox-dialog in the internal npm registry on Nexus. Each release is its own versioned package, from 1.13.8 through the 2.2 and 2.3 lines to 3.0.5, the v3.0 line. The side panel belongs to another package, with identifying values blurred.",
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
