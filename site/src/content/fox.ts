import type { CaseStudy } from "./types";

/**
 * October 2026, second pass: the study now says that FOX is built for
 * agents as well as people (chapter 02a), and how the design-code gap was
 * found (02b). Every claim in them is already on record in bi.ts, dms.ts,
 * or the inventory; no number was added. The FOX agent rules are internal,
 * so the method is shown verbatim on the public Big Hat skill instead.
 *
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
    art: { src: "/work/fox-design-system/device/catalogue-2400.webp" },
    shot: { src: "/work/fox-design-system/colors.png" },
  },
  meta: [
    { label: "Role", value: "Lead Designer, UX Engineer; owner of the design system. I review and merge the component pull requests" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Scale", value: "Around 80 components, 6 consuming products" },
    { label: "Frameworks", value: "Angular, React, web components" },
    { label: "Pipeline", value: "Figma to Storybook to Chromatic to Nexus" },
    { label: "AI tooling", value: "Code Connect, Figma MCP server, Claude Code, Codex, AGENTS.md and skills" },
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
                "The Figma library and the product disagreed, and nobody knew which was right. Agents now build UI too, and they read the same sources.",
            },
            {
              key: "My role and scope",
              value:
                "I built FOX from nothing, own its tokens, component API, and agent rules, and review and merge every component pull request.",
            },
            {
              key: "Decision 1",
              value: "One token set behind the Figma library and the code. One build emits CSS custom properties and TS types for every framework.",
            },
            {
              key: "Decision 2",
              value: "The code is the system: versioned packages, Storybook on Chromatic as the reference, and Code Connect binding the Figma library to it.",
            },
            {
              key: "Decision 3",
              value: "Built for agents: Code Connect and the Figma MCP server give AI tools the real components; AGENTS.md sets the rules; I merge every change.",
            },
            {
              key: "Outcome",
              value:
                "Around 80 components and six products on one system, migrated to v3. Handoff specs are generated from the design and pulled into Jira.",
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
            "<p>FOX is Asseco's, and it is public: <strong>the catalogue below is the live library</strong>, not a mockup of it. <a href=\"https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs\">design-system-v1.assecosolutions.com</a>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>One token set</strong> behind both the Figma library and the code.",
            "<strong>Every component mapped</strong> between Figma and code through Code Connect.",
            "<strong>Storybook on Chromatic</strong> as the reference designers and engineers both check against.",
            "<strong>Handoff specs generated</strong> from the design and pulled into Jira, instead of written by hand.",
            "<strong>Built for agents</strong>: Code Connect, the Figma MCP server, and written rules give AI tools the contract engineers get.",
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
      id: "ready-for-agents",
      n: "02a",
      heading: "Built for agents",
      maxim: "A design system that only people can read is half a system once agents build screens.",
      standfirst: "How agents read FOX, what they are told, and who checks what they build.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Agents get the contract engineers get.</strong> Code Connect binds every Figma component to its implementation, and the Figma MCP server hands that context to Claude Code and Codex.",
            "<strong>The rules are written down, not assumed.</strong> An AGENTS.md and a set of skills, which I own, keep generated UI on the system.",
            "<strong>Documentation in four layers.</strong> Tokens, components, patterns, and templates; the pattern catalogue is Markdown that a person and an agent read alike.",
            "<strong>A person merges every change.</strong> Generated code arrives as a pull request, and I review and merge every component change.",
            "<strong>The file follows the code.</strong> What is done in code is written back into Figma over MCP, so the file does not drift from it.",
          ],
        },
        {
          kind: "loop",
          centre: "One contract for people and agents",
          stations: [
            { label: "Figma", title: "The file", body: "Every component bound to the implementation that ships it, through Code Connect." },
            { label: "Code", title: "The FOX package", body: "What engineers and agents both build on, one versioned package per component." },
            { label: "Agent", title: "Claude Code and Codex", body: "Read the component context over MCP and follow AGENTS.md and the skills. Every change is a pull request I review." },
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
            "Rule 1 of the agent skill, copied verbatim: generated code uses semantic tokens only, and a missing role is reported in DS-GAPS.md, not hand-rolled.",
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
            "<strong>Every remaining gap classified</strong> as code-only, design-only, or noise, so the list of work replaced opinions.",
            "<strong>One reference for review.</strong> Storybook on Chromatic is what design and engineering check a component against.",
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
        {
          kind: "code",
          code: `<fox-dialog heading="Dialog Default Header" id="dialog">
  <div>Dialog Default Content</div>
  <fox-button
    label="Cancel"
    slot="secondaryAction"
    dialogAction="cancel"
  ></fox-button>
  <fox-button
    slot="primaryAction"
    dialogAction="save"
    primary
    raised
    label="save"
  ></fox-button>
</fox-dialog>`,
          caption:
            "fox-dialog, the Default story, copied verbatim: attributes for state, named slots for content, and actions the dialog resolves. The contract a developer and an agent both read.",
          source: {
            text: "Source: FOX Storybook (public v1 line), atoms / fox-dialog.",
            href: "https://design-system-v1.assecosolutions.com/?path=/story/atoms-fox-dialog--default-story",
          },
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
