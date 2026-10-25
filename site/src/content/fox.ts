import type { CaseStudy } from "./types";

/**
 * October 2026, rebuilt the Analytics way (docs/copy-edit/log-fox.md,
 * 25 October): chapter 00 is the sixty-second page with a screen per
 * decision; the pipeline and the agent loop are one drawing sheet in 02;
 * the version history, the two code blocks and the drift definitions are
 * folded; the closing stats, which repeated the metadata strip, are gone.
 *
 * A practice study, not a product one: the stack from
 * docs/case-study-kit/RULES.md is applied with the chapters a design system
 * has facts for. No personas, no use cases, no handoff chapter and no
 * reflection are on record here, so none is written. Chapter numbers were
 * written for this page.
 *
 * FOX is Asseco's design system; Konstancja leads it. The agent claims are
 * on record in bi.ts, dms.ts, or the inventory; the 02b counts are her July
 * 2026 audit; Codex first, then Claude Code, is confirmed. The FOX agent
 * rules are internal, so the method is shown verbatim on the public Big Hat
 * skill instead.
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
    { label: "Role", value: "Lead Designer, UX Engineer. I lead FOX: the tokens, the component API, and the review gate on every component pull request" },
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
              key: "What",
              value:
                "FOX, the design system of APplus ERP at Asseco Solutions: around 80 components, consumed by six products across Angular, React, and web components.",
            },
            {
              key: "Problem",
              value:
                "The Figma library and the product disagreed, nobody knew which was right, and agents now build UI from the same sources.",
            },
            {
              key: "My role",
              value:
                "Built FOX from nothing and lead it: the tokens, the component API, the agent rules, and the review of every component pull request.",
            },
            {
              key: "Decision 1",
              value: "One token set behind the Figma library and the code, built once into CSS custom properties and TS types for every framework.",
              shot: { frame: "macbook", src: "/work/fox-design-system/device/v3-colors-1600.webp", alt: "Colours in the v3.0 Storybook, one token applied three ways", to: "#tokens" },
            },
            {
              key: "Decision 2",
              value: "The code is the system: versioned packages on Nexus, Storybook on Chromatic as the reference, Code Connect binding the Figma library to it.",
              shot: { frame: "macbook", src: "/work/fox-design-system/device/v3-nexus-versions-1600.webp", alt: "fox-dialog in the Nexus registry, one versioned package per release", to: "#evolution" },
            },
            {
              key: "Decision 3",
              value: "Agents get the contract engineers get, through Code Connect and the Figma MCP server; AGENTS.md sets the rules; I merge every component change.",
              shot: { frame: "macbook", src: "/work/fox-design-system/device/v3-button-docs-1600.webp", alt: "fox-button documentation in the v3.0 Storybook, written for a person and an agent", to: "#ready-for-agents" },
            },
            {
              key: "Outcome",
              value:
                "Around 80 components and six products on one system, migrated to v3, with handoff specs generated from the design and pulled into Jira.",
            },
            {
              key: "Period and team",
              value: "November 2023 to present. I lead the system and review component changes with engineering.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      standfirst: "The live library, as a product installs it.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>FOX is Asseco's. <strong>The Storybook screens on this page are v3.0</strong>, which stays inside the company; the public Storybook documents the v1 line, at <a href=\"https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs\">design-system-v1.assecosolutions.com</a>.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/device/v3-get-started-2400.webp",
          frame: "macbook",
          caption: "Get started in the v3.0 Storybook: fox-common-styles installed with npm or yarn, its styles imported, its assets added to the Angular config. Utilities, atoms, molecules, organisms, and templates in one navigation, published on Chromatic.",
        },
      ],
    },
    {
      id: "source-of-truth",
      n: "02",
      heading: "Source of truth",
      standfirst: "One component through the tools it passes, drawn: where it lives, what each station hands on, and where an agent joins.",
      blocks: [
        {
          kind: "sheet",
          sheet: {
            tools: [
              { name: "Figma", mark: "figma", what: "variables, Code Connect, MCP server" },
              { name: "Codex", mark: "openai", what: "the first agent" },
              { name: "Claude", mark: "claude", what: "Claude Code, now" },
              { name: "Storybook", mark: "storybook", what: "v3.0, the reference" },
              { name: "Chromatic", mark: "chromatic", what: "the published catalogue" },
              { name: "Pull request", mark: "", glyph: "PR", what: "reviewed and merged by me" },
              { name: "Nexus", mark: "sonatype", what: "versioned packages" },
            ],
            stations: [
              { drawing: "figma", tool: "Figma", mark: "figma", file: "library · Code Connect", title: "Bound to the code", body: "Variables mapped to the published tokens; every component tied to its implementation." },
              { image: { src: "/work/fox-design-system/device/v3-button-docs-1600.webp", alt: "fox-button documentation in the v3.0 Storybook, written for a person and an agent" }, tool: "Codex, Claude Code", mark: "claude", file: "AGENTS.md, skills", title: "Agents build on the package", body: "Component context over the Figma MCP server, under written rules." },
              { drawing: "storybook", tool: "Storybook", mark: "storybook", file: "FOX v3.0", title: "The reference", body: "What design and engineering check a component against; the API and the tokens are my responsibility." },
              { drawing: "chromatic", tool: "Chromatic", mark: "chromatic", file: "published", title: "The live catalogue", body: "Where the Storybook is published." },
              { drawing: "merge", lines: ["Storybook", "Chromatic", "Reviewed and merged, by me"], tool: "Pull request", mark: "", file: "component change", title: "A person merges every change", body: "Generated or hand-written, it arrives as a pull request." },
              { image: { src: "/work/fox-design-system/device/v3-nexus-versions-1600.webp", alt: "fox-dialog in the Nexus registry, from 1.13.8 to 3.0.5" }, tool: "Nexus", mark: "sonatype", file: "package", title: "One package per release", body: "Six products install FOX from the internal npm registry." },
              { drawing: "code", tool: "Figma MCP", mark: "figma", file: "written back", title: "The file follows the code", body: "What is done in code is written back into the library over MCP." },
            ],
            block: [
              ["Sheet", "How FOX ships"],
              ["Drawn for", "One component, from the Figma library to the package six products install"],
              ["Governed by", "AGENTS.md and the skills, which I maintain; every component change reviewed and merged by me"],
            ],
          },
        },
      ],
    },
    {
      id: "ready-for-agents",
      n: "02a",
      heading: "Built for agents",
      maxim: "A design system that only people can read is half a system once agents build screens.",
      standfirst: "What agents read, what they are told, and what they build.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Agents get the contract engineers get.</strong> Code Connect binds every Figma component to its implementation, and the Figma MCP server hands that context to the agent: Codex first, Claude Code now.",
            "<strong>The rules are written down, not assumed.</strong> An AGENTS.md and a set of skills, which I maintain, keep generated UI on the system.",
            "<strong>Documentation in four layers</strong>: tokens, components, patterns, and templates. The pattern catalogue is Markdown that a person and an agent read alike.",
          ],
        },
        {
          kind: "tabs",
          label: "What the agent reads and what it builds",
          items: [
            {
              label: "What it reads",
              blocks: [
                {
                  kind: "shot",
                  src: "/work/fox-design-system/device/v3-button-docs-2400.webp",
                  frame: "macbook",
                  caption:
                    "fox-button in the v3.0 Storybook. Purpose, Use when, Avoid when, Common pairings, and Important limitations above the live example and the props table: one guidance for a person and an agent.",
                },
              ],
            },
            {
              label: "What it builds",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  frame: "macbook",
                  src: "/work/applus-analytics/clips/new-query.mp4",
                  poster: "/work/applus-analytics/clips/new-query.webp",
                  title: "A prototype generated on FOX components",
                  caption:
                    "A prototype for APplus Analytics, generated on FOX components from a settled requirement, clickable within hours. The implementation is the developers' code on the same package.",
                },
              ],
            },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>The FOX rules are internal, so the method is shown on my public system, <a href=\"https://konstancja-tanjga.github.io/portfolio-site/work/bighat-design-system\">Big Hat</a>. <strong>Its agent skill writes down the rules that type-checking, lint-passing code can still break</strong>, starting with the token rule.</p>",
        },
        {
          kind: "fold",
          title: "Rule 1 of the Big Hat agent skill, verbatim",
          hint: "Open: one rule, twelve lines",
          blocks: [
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
                "Generated code uses semantic tokens only; a missing role is reported in DS-GAPS.md, not hand-rolled.",
              source: {
                text: "Source: Big Hat design system, agent/SKILL.md.",
                href: "https://github.com/Konstancja-Tanjga/bighat-design-system/blob/main/agent/SKILL.md",
              },
            },
          ],
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
            "<strong>Every component mapped</strong> between the Figma library and Storybook, the naming mismatches resolved.",
            "<strong>Every remaining gap classified</strong> as token, component, state, behaviour, or documentation drift, or as noise, so a list of work replaced opinions.",
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
          kind: "fold",
          title: "What each category means",
          hint: "Open: six definitions",
          blocks: [
            {
              kind: "spec",
              caption: "Source: my FOX audit, July 2026.",
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
      ],
    },
    {
      id: "tokens",
      n: "03",
      heading: "Token architecture",
      standfirst:
        "One token build, emitting CSS custom properties and TS types, read by six products on three frameworks.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/device/v3-colors-2400.webp",
          frame: "macbook",
          caption:
            "Colours in the v3.0 Storybook. One token applied three ways, as a CSS variable, a text class, or a background class; the scales follow: primary, primary opacity and highlight, brand, and secondary.",
        },
      ],
    },
    {
      id: "one-component",
      n: "04",
      heading: "One component's API",
      standfirst:
        "Each component gets an API table and code to copy. fox-list-extended shows the first; fox-dialog, folded, the second.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/device/v3-list-extended-api-2400.webp",
          frame: "macbook",
          caption:
            "fox-list-extended, one of the templates in the v3.0 Storybook. One page holds the whole contract: the attributes, each with its type and a live control; the list-item-clicked event; the listItemTemplate slot.",
        },
        {
          kind: "fold",
          title: "fox-dialog, the Default story, verbatim",
          hint: "Open: 20 lines of HTML",
          blocks: [
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
                "A heading attribute; named slots for the side actions, the subline, and the actions; buttons that close or confirm. A developer and an agent read the same contract.",
              source: { text: "Source: FOX Storybook v3.0 (internal), organisms / fox-dialog, Default story." },
            },
          ],
        },
      ],
    },
    {
      id: "evolution",
      n: "05",
      heading: "How it moved",
      standfirst: "Three versions, and where the truth lived in each. The authority moved from the file that described the system to the code that is it.",
      blocks: [
        {
          kind: "fold",
          title: "v2.0 to v3.0: what each version changed",
          hint: "Open: three versions, four lines each",
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
          kind: "shot",
          width: "wall",
          src: "/work/fox-design-system/device/v3-nexus-versions-2400.webp",
          frame: "macbook",
          caption:
            "fox-dialog in the internal npm registry on Nexus. Each release its own versioned package, from 1.13.8 through the 2.2 and 2.3 lines to 3.0.5. The side panel belongs to another package, identifying values blurred.",
        },
      ],
    },
  ],
};
