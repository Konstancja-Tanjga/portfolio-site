import type { Chapter } from "./types";

/**
 * The About wall, as data — same model as every project page.
 *
 * It is a wall and not a prose page on purpose: if the site's claim is
 * that a closed block set can carry any argument, the page describing
 * how I work is the one that must not need an exception.
 *
 * Illustrations live in public/about/ and are drawn in Claude Design.
 * A block with no `src` renders its `slot` label, so the wall is
 * walkable before the export lands.
 */
export const aboutChapters: Chapter[] = [
  {
    id: "opening",
    blocks: [
      {
        kind: "portrait",
        portrait: {
          kicker: "Lead designer · UX engineer",
          claim:
            "Design, the design system and the code that proves it are one job on my desk.",
          lead: "Ten years in complex, data-rich software — ERP, banking, insurance, legal and regulatory, industrial energy. I run a design-to-code pipeline: the Figma library is the source of truth, Claude Code implements against a specification I author, Storybook is the contract, and Nexus versions the result so six products can adopt it on their own schedule.",
          facts: [
            { label: "Based", value: "Warsaw, CET" },
            { label: "Working", value: "Remote only · permanent or B2B" },
            {
              label: "Languages",
              value: "Polish native · English C2 · German, Spanish basic",
            },
          ],
          shot: {
            src: "/about/portrait.jpg",
            slot: "portrait — public/about/portrait.jpg",
            caption: "Konstancja Tanjga-Nawrot",
          },
        },
      },
    ],
  },

  {
    id: "pipeline",
    n: "01",
    heading: "The pipeline",
    maxim:
      "A screenshot is not a specification, and a designer who hands one over has already lost the parity argument.",
    standfirst:
      "The shape is the design-to-code workflow documented in the Claude Code Ultimate Guide: Figma as the source of truth, read through the Figma MCP server, implemented by Claude Code against a written specification. I run it with two additions the guide does not cover — Storybook as the acceptance contract, and Nexus for storing and versioning the design system as a package.",
    blocks: [
      {
        kind: "process",
        process: {
          label: "Idea to published prototype",
          count: "Eight stages",
          stages: [
            {
              n: "01",
              title: "The idea",
              kicker: "Requirement engineer & PM",
              body: "The starting point, talked through with the requirement engineer and the PM.",
            },
            {
              n: "02",
              title: "Ideation in Claude Design",
              kicker: "Several options, iterated",
              body: "I iterate ideations in Claude Design, and put up several options rather than one.",
              note: {
                label: "Alongside",
                body: "Architecture and security discussed with our specialists.",
              },
            },
            {
              n: "03",
              title: "One candidate chosen",
              kicker: "From the options I made",
              body: "We pick one of the several options, and the rest are set aside.",
            },
            {
              n: "04",
              title: "Redrawn in Figma",
              kicker: "On design components",
              body: "The work moves to Figma, where the chosen solution is redrawn on design components.",
            },
            {
              n: "05",
              title: "Published through Figma MCP",
              kicker: "And Code Connect",
              body: "The element goes to the repository and to the hub through Figma MCP and Code Connect.",
            },
            {
              n: "06",
              title: "Specs and walkthrough",
              kicker: "Stakeholders & AI Harvester",
              body: "Specs and a walkthrough travel with the element \u2014 for the stakeholders, and for the AI Harvester.",
            },
            {
              n: "07",
              title: "A clickable prototype",
              kicker: "As code",
              body: "Several elements assembled into a clickable prototype, built on design system components, in code.",
            },
            {
              n: "08",
              title: "Published to GitHub",
              kicker: "Where the process ends",
              body: "The prototype is published to GitHub.",
            },
          ],
          underneath: {
            label: "Running underneath",
            kicker: "Updated once a quarter",
            chips: [
              "design-system-compliance skill",
              "handoff-readiness skill",
            ],
            body: "Built for Claude on Anthropic\u2019s skill-creator and on best practices, and updated once a quarter \u2014 so the stages above are governed by something written down, not by whoever is at the keyboard.",
          },
        },
      },
      {
        kind: "steps",
        items: [
          {
            n: "01",
            governs: ["04"],
            stage: "Source of truth",
            flow: { from: "A brand decision", to: "Named variables" },
            title: "The Figma library is the source of truth",
            rule: {
              label: "Rule",
              body: "Variables and styles, Auto Layout, no detached layers, and tokens in three tiers — base primitives, composite patterns, semantic aliases. A value that is not a variable does not exist.",
            },
            why: {
              label: "Why it isn't decoration",
              body: "An agent extracts structured data, not intent. A hard-coded fill reads out as a hex string with no name, and whatever gets generated from it is a magic number the moment the brand shifts by five degrees. The discipline has to sit upstream of the codegen, which means it sits with me.",
            },
            contrast: {
              does: "A value that is not a variable does not exist.",
              instead: "A fill picked off the colour wheel, named #2F6FED.",
            },
          },
          {
            n: "02",
            governs: ["05"],
            stage: "Read",
            flow: { from: "A Figma URL", to: "Exact spacing and variants" },
            title: "Claude Code reads the frame, nobody transcribes it",
            rule: {
              label: "Rule",
              body: "The frame goes over as a Figma URL and Claude Code reads it through the Figma MCP server in Dev Mode — exact spacing, variants, constraints, referenced variables, Code Connect annotations where they exist.",
            },
            why: {
              label: "Why it isn't decoration",
              body: "Manual transcription and screenshots-as-specs are the first two anti-patterns in the guide, and both fail the same way: the numbers arrive as approximations and drift is inevitable from the handoff onward. Reading the file removes the step where a human retypes a spacing value.",
            },
            contrast: {
              does: "The agent reads the frame in Dev Mode.",
              instead: "A PNG in the ticket and spacing retyped by hand.",
            },
          },
          {
            n: "03",
            governs: ["06", "skills"],
            stage: "Specify",
            flow: {
              from: "What the component is for",
              to: "Standing rules in the repo",
            },
            feature: true,
            title: "I write the specification, not the prompt",
            rule: {
              label: "Rule",
              body: "Component API, token contract, states, keyboard behaviour and accessibility criteria are authored as skills and a project constitution that govern how the agent operates — standing rules in the repository, not instructions retyped per session.",
            },
            why: {
              label: "Why it isn't decoration",
              body: "The agent is fast and has no opinions worth inheriting. A prompt governs one component; a constitution governs the eightieth one as strictly as the first, including the ones written on a Friday afternoon.",
            },
            contrast: {
              does: "Rules that outlive the session, in version control.",
              instead:
                "A prompt retyped per component, different every Friday.",
            },
            artefact: {
              caption:
                "Two of the rules an agent reads before it writes a line. Neither was written for a particular component.",
              lines: [
                "agent/SKILL.md",
                "  Semantic tokens only. A primitive in component CSS fails the build.",
                "  Every state is a story: empty, loading, error, disabled, long content.",
                "",
                "spec/components/button.json",
                '  "notFor":   ["Navigation — use a link"]',
                '  "keyboard": { "Enter": "Activates", "Space": "Activates" }',
              ],
            },
          },
          {
            n: "04",
            governs: ["07"],
            stage: "Contract",
            flow: { from: "An implementation", to: "Enumerated states" },
            title: "Storybook is the contract",
            rule: {
              label: "Rule",
              body: "A component is not done until every variant and every state is a story — including empty, loading, error, disabled and long-content — with the accessibility checks running on the story set. Chromatic takes the visual baseline and diffs it on every pull request.",
            },
            why: {
              label: "Why it isn't decoration",
              body: "This is my substitution for the guide's Playwright screenshot loop. Stories make the states enumerable, so the story set is the acceptance criteria rather than a description of it: a state nobody wrote a story for is a state nobody designed, and the gap is visible before review rather than in production.",
            },
            contrast: {
              does: "Every variant and state is a story, checked on the set.",
              instead: "A screenshot loop that proves the happy path renders.",
            },
          },
          {
            n: "05",
            governs: ["05"],
            stage: "Review",
            flow: {
              from: "A component pull request",
              to: "Merged, or sent back",
            },
            feature: true,
            title: "I review and merge the pull request",
            rule: {
              label: "Rule",
              body: "Every component pull request into the library comes to me, across Angular, React and web components. I check token use, API shape, states and contrast, then merge.",
            },
            why: {
              label: "Why it isn't decoration",
              body: "The guide splits it designer designs → agent codes → developer reviews, and lists a designer writing code as an anti-pattern. That division assumes the designer cannot read the diff. Here the person who set the token contract is the person who enforces it, so intent is never translated twice.",
            },
            contrast: {
              does: "The person who set the token contract enforces it.",
              instead: "A designer signing off on a picture of the diff.",
            },
            artefact: {
              caption:
                "One review, four checks. Three of them the build already runs; the fourth is the one only a person catches.",
              lines: [
                "- background: #ffffff;                    ← primitive in component CSS",
                "+ background: var(--bh-surface-raised);",
                "",
                "  contrast   action.primary.fg on bg      9.28:1   pass",
                "  stories    6 of 7                       long content missing",
                "  api        `dismissible` or `closable`  — the system says dismissible",
              ],
            },
          },
          {
            n: "06",
            governs: ["08"],
            stage: "Version",
            flow: { from: "A merged component", to: "@bighat/ui@3.2.0" },
            title: "Nexus stores and versions the system",
            rule: {
              label: "Rule",
              body: "The library publishes as a semver package to our Nexus registry. Consuming products adopt by moving a version, with a migration note whenever something breaks.",
            },
            why: {
              label: "Why it isn't decoration",
              body: "The guide's stack ends at production, and this is the gap it leaves. A design system nobody can pin is not a system, it is a folder that changed under you. Versioning turns adoption into a decision each product makes on its own release schedule — which is how a v3 migration reaches six product lines without stopping any of them.",
            },
            contrast: {
              does: "A pinned version, with a migration note when it breaks.",
              instead: "A shared folder that changes under you.",
            },
          },
          {
            n: "07",
            governs: ["07", "08"],
            stage: "Hand off",
            flow: {
              from: "The published package",
              to: "A clickable prototype",
            },
            feature: true,
            title: "Development receives a prototype, not a picture",
            rule: {
              label: "Rule",
              body: "The handoff is a working React prototype assembled from the published package — real components, real tokens, real states, at the version the product is on.",
            },
            why: {
              label: "Why it isn't decoration",
              body: "A flow that only exists as frames gets its interactions invented during implementation. A prototype built from the same package the product consumes cannot disagree with the design system, because it is the design system.",
            },
            contrast: {
              does: "A prototype assembled from the package the product ships.",
              instead:
                "Frames whose interactions get invented during implementation.",
            },
            artefact: {
              caption:
                "The prototype's import line, and the whole argument in it: a flow built from the package cannot disagree with the system, because it is the system.",
              lines: [
                "import { Button, Dialog, StateBlock } from '@bighat/ui';",
                "import '@bighat/ui/styles.css';",
                "",
                "// the same package, at the version the product is on",
              ],
            },
          },
        ],
      },
      {
        kind: "stack",
        caption:
          "The stack, stage by stage. The four marked stages are not in the documented workflow — they are what I added to it.",
        rows: [
          {
            key: "Source of truth",
            value: "Figma — variables, styles, Auto Layout, Code Connect",
          },
          {
            key: "Token model",
            value: "Three tiers: base → composite → semantic",
          },
          { key: "Read path", value: "Figma MCP server, Dev Mode, read-only" },
          {
            key: "Implementation",
            value:
              "Claude Code, under authored skills and a project constitution",
          },
          {
            key: "Contract",
            value:
              "Storybook — every variant and state as a story, a11y checks on the set",
            mine: true,
          },
          {
            key: "Visual regression",
            value: "Chromatic, diffed on every pull request",
            mine: true,
          },
          {
            key: "Review gate",
            value: "My merge — Angular, React, web components",
            mine: true,
          },
          {
            key: "Storage and versioning",
            value: "Nexus, semver packages",
            mine: true,
          },
          {
            key: "Adoption",
            value: "Six products, each on the version it chooses",
          },
        ],
      },
      {
        kind: "passage",
        html: '<p>The shape comes from <a href="https://github.com/FlorianBruniaux/claude-code-ultimate-guide/blob/main/guide/workflows/design-to-code.md">design-to-code with Figma MCP</a>, in Florian Bruniaux&rsquo;s Claude Code Ultimate Guide. Mine adds the specification layer, the Storybook contract and the Nexus versioning.</p>',
      },
    ],
  },

  {
    id: "systems",
    n: "02",
    heading: "Two different design systems",
    blocks: [
      {
        kind: "passage",
        html:
          "<p><strong>FOX is Asseco's.</strong> I own it there &mdash; the tokens, the component API, the review gate &mdash; and the products I designed for that platform are built on it. Its artefacts stay inside the company.</p>" +
          "<p><strong>Big Hat is mine.</strong> I built it from nothing for my own projects, it shares no code with FOX, and it is public under MIT &mdash; so it is the one where the tokens, the contrast gate, the migration and the source can all be read in full. This site is built on it.</p>",
      },
    ],
  },

  {
    id: "research",
    n: "03",
    heading: "Research",
    maxim:
      "There is no dedicated researcher on the team, so I field it myself.",
    blocks: [
      {
        kind: "stats",
        items: [
          { value: "195", label: "internal survey respondents" },
          { value: "37", label: "external survey respondents" },
          { value: "13", label: "participants, AI assistant study" },
          { value: "8", label: "sessions validating analytics" },
        ],
      },
      {
        kind: "passage",
        html: "<p>In-depth interviews, contextual observation of real workflows, moderated and unmoderated usability testing, survey and analytics synthesis — plus quarterly interviews with power users, which is the part that catches the things a survey cannot ask about.</p>",
      },
    ],
  },

  {
    id: "practice",
    n: "04",
    heading: "Practice",
    blocks: [
      {
        kind: "spec",
        rows: [
          {
            key: "Research & discovery",
            value:
              "Interviews, contextual observation, usability testing, survey and analytics synthesis",
          },
          {
            key: "Structure & mapping",
            value:
              "Information architecture, navigation models and taxonomy for large multi-module systems; journeys, personas",
          },
          {
            key: "Craft",
            value:
              "Figma — design systems, variants, variables and tokens, advanced prototyping, developer handoff; interaction and motion, data visualisation, UX writing, HTML/CSS",
          },
          {
            key: "Design system stack",
            value:
              "Storybook · Chromatic · Nexus · Git, pull requests, VS Code",
          },
          {
            key: "AI tooling",
            value:
              "Claude, Claude Code · Codex · Cursor · Figma Make · v0 · Vercel · Builder.io",
          },
          {
            key: "Accessibility",
            value:
              "Contrast tokens, component-level focus behaviour, WCAG AA as a standing review criterion",
          },
          {
            key: "Domains",
            value:
              "Enterprise ERP · banking and payments · insurance and healthcare · legal and regulatory · industrial energy",
          },
        ],
      },
    ],
  },

  {
    id: "recognition",
    n: "05",
    heading: "Recognition and education",
    blocks: [
      {
        kind: "points",
        items: [
          "<strong>ERP System of the Year 2025</strong>, winner in the User Experience category, for APplus.",
          "<strong>WUD Silesia 10.5</strong> speculative design competition — distinction, <em>Possible Reality</em>.",
          "<strong>Bydgoszcz Design Challenge</strong> — competition entry, distinction.",
          "<strong>HR Dream Team</strong>, Deloitte.",
          "<strong>MA English Philology, BA Management of Organisations</strong>, University of Białystok. Interaction Design (UC San Diego), Creativity &amp; A.I. (Parsons), Google UX Design, Graphic Design and UI/UX Design (CalArts).",
        ],
      },
    ],
  },
];
