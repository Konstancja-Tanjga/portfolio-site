import type { CaseStudy } from "./types";

/**
 * Chapter numbers follow the Figma wall (page "BI" in the portfolio file;
 * frames 01, 01a, 02–11), so the file and the canvas stay walkable side by
 * side. 00, 06a, 06b, 12 and 13 have no frame there: they were written for
 * this page.
 *
 * The words are text, not pictures of text. The wall used to be twelve PNG
 * exports with every paragraph typeset inside them, which a reader could not
 * search, select or enlarge on a phone, and a screen reader could not read.
 * Apart from the cover, images are screens and diagrams only, exported one
 * by one from the Figma file into /work/applus-analytics/screens/.
 *
 * Every number on this page has a source: the Figma file (audit stickies,
 * surface-rule cards and their PR-07 evidence), the About page's research
 * counts, or the author's confirmation. Nothing is rounded up.
 */
const S = "/work/applus-analytics/screens";
const D = "/work/applus-analytics/device";
const C = "/work/applus-analytics/clips";

export const bi: CaseStudy = {
  slug: "applus-analytics",
  title: "APplus Analytics",
  what: "Business intelligence for an ERP platform, designed from zero",
  lead:
    "A standalone BI platform inside APplus ERP: a data warehouse and the analytics application on top of it. It replaced the external BI tool APplus customers had used for their reporting until then.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["APplus", "Analytics"],
    subline: "for APplus ERP",
    stamp: "DASHBOARDS · QUERIES · DATA MODELS · AI ANALYST",
    credit: "Lead Designer, UX Engineer · Asseco Solutions · 2026",
    shot: { src: "/work/applus-analytics/00-cover.png" },
    layers: [
      { src: "/work/applus-analytics/device/dashboards-2400.webp", label: "Dashboards" },
      { src: "/work/applus-analytics/device/analyst-chat-2400.webp", label: "AI Data Analyst" },
      { src: "/work/applus-analytics/device/models-relationship-2400.webp", label: "Data models" },
      { src: "/work/applus-analytics/device/home-2400.webp", label: "Home" },
    ],
  },
  meta: [
    { label: "Role", value: "Lead Designer, UX Engineer; the only designer on this product" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP, Analytics" },
    {
      label: "Design system",
      value: "FOX, Asseco's design system, which I lead: tokens, component API and the review gate. The migration from v2.3 to v3.0 with one other designer. The link opens the public v1 Storybook",
      href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs",
    },
    { label: "Team", value: "Seven: three developers, a requirements engineer, QA, a PM and me" },
    { label: "Period", value: "January to September 2026" },
    { label: "Launch", value: "Presented at Vision Days on 22 September 2026; generally available from October 2026" },
    { label: "Product context", value: "APplus: ERP-System des Jahres, Gold in the User Experience category, 2025 and 2026" },
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
                "The in-house replacement for the third-party BI tool APplus customers used: a data warehouse, and the application on top of it.",
            },
            {
              key: "Problem",
              value:
                "The PM's Lovable prototype proved the product could be built. Open: how people find, trust and share a number.",
            },
            {
              key: "My role",
              value:
                "The only designer. The audit, the information architecture, the nine surface rules, sign-off against every requirement, the design review of every pull request; eight validation sessions, run by me.",
            },
            {
              key: "Decision 1",
              value:
                "The surface follows the scope of what is acted on. Nine rules give every action type exactly one surface.",
              shot: { frame: "macbook", src: `${D}/analysis-sheet-1600.webp`, alt: "Graph view with the render side sheet open", to: "#sign-off" },
            },
            {
              key: "Decision 2",
              value:
                "A follow-up question to the AI analyst is a branch with two exits, apply or discard, so the analysis never changes without a stated reason.",
              shot: { frame: "macbook", src: `${D}/analyst-thread-1600.webp`, alt: "A detail thread beside the main analysis", to: "#use-cases" },
            },
            {
              key: "Decision 3",
              value:
                "Reach, authorship and join type are printed on the object itself. Nobody has to open a dialog to learn who can see a query.",
              shot: { frame: "macbook", src: `${D}/models-relationship-1600.webp`, alt: "A join stated on the model canvas", to: "#use-cases" },
            },
            {
              key: "Outcome",
              value:
                "Shipped. 7 of 7 audit questions answered by a rule; every app-bar action and render panel checked against them. Vision Days, 22 September 2026; generally available from October.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Analytics is the new business intelligence module inside APplus ERP. It turns the data a company already has into numbers it can act on, and it does that on the data the ERP is already producing.</p>",
        },
        {
          kind: "carousel",
          items: [
            { src: `${D}/home-2400.webp`, frame: "macbook", title: "Home", body: "For people who consume: the biggest forecast change of the week, then recent dashboards." },
            { src: `${D}/dashboards-2400.webp`, frame: "macbook", title: "Dashboards", body: "A library: all, continue, favourites, shared with you, popular." },
            { src: `${D}/dashboard-open-2400.webp`, frame: "macbook", title: "A dashboard", body: "Two widgets from saved analyses, and the view toolbar with Edit." },
            { src: `${D}/analyst-chat-2400.webp`, frame: "macbook", title: "AI Data Analyst", body: "An answer that names its cause, and where the number came from, down to Show SQL." },
            { src: `${D}/analyst-thread-2400.webp`, frame: "macbook", title: "Detail thread", body: "One fragment questioned beside the analysis; Apply or Discard." },
            { src: `${D}/queries-card-2400.webp`, frame: "macbook", title: "A query", body: "Access, owner and eligible roles on the query itself, the SQL and a preview below." },
            { src: `${D}/models-relationship-2400.webp`, frame: "macbook", title: "Data models", body: "The join states its direction and type on the canvas." },
            { src: `${D}/settings-2400.webp`, frame: "macbook", title: "Settings", body: "Master data sources, and the admin spine: translations, data sources, AI, users, system." },
          ],
        },
      ],
    },
    {
      id: "who-for",
      n: "02",
      heading: "Who it is for",
      standfirst:
        "Four people in every manufacturer that runs APplus, with different jobs against one data foundation. Composites from the old tool's usage and the validation sessions; the quotes are paraphrases.",
      blocks: [
        {
          kind: "personas",
          items: [
            {
              n: "01",
              name: "The key user",
              badge: "AUTHOR · IT OR DEPARTMENT POWER USER",
              quote: "I build the query once. Then twelve people live off it.",
              context: "Owns the models and the queries; knows which ERP tables may be joined.",
              goals: ["A model others can reuse", "Publish without over-sharing"],
              breaks: "Every request becomes a hand-maintained Excel export.",
              must: "Authoring and sharing as two visible acts.",
              job: "BUILD",
            },
            {
              n: "02",
              name: "The controller",
              badge: "INTERROGATOR · FINANCE",
              quote: "Margin is down four points. I need the reason by Thursday.",
              context: "Monthly close: plan against actual, margin per order and customer.",
              goals: ["From a number to the rows behind it", "A path others can walk again"],
              breaks: "The drill-down happens in Excel and cannot be repeated.",
              must: "Drill-down is the primary interaction; export is the exit.",
              job: "INTERROGATE",
            },
            {
              n: "03",
              name: "The production lead",
              badge: "MONITOR · OPERATIONS",
              quote: "Before the shift meeting I need to know what is late.",
              context: "Throughput, utilisation, late orders; one board on a shared screen.",
              goals: ["Today's bottleneck at a glance", "Configure nothing"],
              breaks: "Learns about the delay after the meeting it mattered in.",
              must: "A stale board must say so.",
              job: "MONITOR",
            },
            {
              n: "04",
              name: "The managing director",
              badge: "CONSUMER · LEADERSHIP",
              quote: "I don't want to build one. I want the right one to be there.",
              context: "Five numbers, weekly; never an author.",
              goals: ["Understand a favourite at once", "Ask the follow-up in words"],
              breaks: "A PDF by e-mail nobody can question.",
              must: "A reading mode, and an export that survives the forward.",
              job: "CONSUME",
            },
          ],
        },
      ],
    },
    {
      id: "discovery",
      n: "03",
      heading: "Discovery and research",
      maxim: "A prototype proves a thing can be built. It does not prove it can be found, named, or returned to.",
      blocks: [
        {
          kind: "passage",
          html: "<p>The PM's Lovable prototype was the starting point, not a blank page.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Audited screen by screen</strong>, in Figma, against market practice for BI and against what APplus users already know.",
            "<strong>Validated in eight sessions</strong>: subject-matter experts, the PM and the requirements engineer each walked a flow on questions from their own work.",
          ],
        },
        {
          kind: "stats",
          items: [
            { value: "1", label: "prototype audited, screen by screen" },
            { value: "4", label: "screen clusters" },
            { value: "7", label: "open questions, each pinned to its screen" },
            { value: "8", label: "validation sessions with SMEs" },
          ],
        },
      ],
    },
    {
      id: "initial-idea",
      n: "04",
      heading: "What the audit asked",
      standfirst:
        "The purple notes are the seven questions as I pinned them on the Lovable screens. Each one became a product rule or a template; the table is what answered each one.",
      blocks: [
        {
          kind: "duo",
          items: [
            {
              src: `${S}/audit-1.png`,
              hotspots: [
                { x: 18, y: 14, text: "Where does this page belong? No breadcrumb, no back." },
                { x: 52, y: 38, text: "The same screen, rendered without breadcrumbs." },
                { x: 30, y: 70, text: "What is the correct path, and where does “Visualisierung” come from?" },
                { x: 72, y: 82, text: "Two searches on one shell." },
              ],
            },
            {
              src: `${S}/audit-2.png`,
              hotspots: [
                { x: 22, y: 22, text: "What should be shown instead of an error?" },
                { x: 58, y: 52, text: "Third-party or in-house for the designer surface, like Board Designer?" },
                { x: 40, y: 84, text: "“AI Support”: is that Elly?" },
              ],
            },
          ],
          caption: "The PM's prototype, imported into Figma and annotated screen by screen.",
        },
        {
          kind: "spec",
          caption: "Seven questions, seven decisions. Every decision is a rule or a template the rest of the product reuses.",
          rows: [
            {
              key: "Where does this page belong? No breadcrumb, no back.",
              value: "Two templates, main and detail, both with breadcrumbs and the title in the app bar.",
            },
            {
              key: "The same screen, rendered without breadcrumbs",
              value: "One template per page type; no screen appears two ways.",
            },
            {
              key: "What is the correct path, and where does “Visualisierung” come from?",
              value: "Graph, pivot and table as views of one analysis, switched in its toolbar.",
            },
            {
              key: "Two searches on one shell",
              value: "One search field in the app bar, shared with Ask AI.",
            },
            {
              key: "What should be shown instead of an error?",
              value: "Empty, loading, error and no permission as four states, checked in design QA.",
            },
            {
              key: "Third-party or in-house for the designer surface, like Board Designer?",
              value: "In-house, on FOX.",
            },
            {
              key: "“AI Support”: is that Elly?",
              value: "One assistant, one name: AI Data Analyst.",
            },
          ],
        },
      ],
    },
    {
      id: "prototypes",
      n: "05",
      heading: "First prototypes",
      standfirst: "Before a frame was drawn, the requirement went into a generated prototype on FOX components, where a screen was still cheap to throw away.",
      blocks: [
        {
          kind: "flow",
          stages: [
            { title: "A settled requirement", body: "Before a frame was drawn, it went into Codex, and later Claude." },
            { title: "Clickable within hours", body: "A generated prototype on FOX components: cheap enough to throw away." },
            { title: "Argued over in the room", body: "The eight SME sessions walked these prototypes, not slides." },
            { title: "Proven, then handed on", body: "The prototype answers the behaviour questions; development builds the same screens on the FOX package." },
          ],
          note: "I maintain the skills and the AGENTS.md that keep generated UI on-system.",
        },
        {
          kind: "video",
          clip: true,
          frame: "macbook",
          width: "wall",
          src: `${C}/new-data-model.mp4`,
          poster: `${C}/new-data-model.webp`,
          title: "A data model built from two queries",
          caption:
            "In the prototype: two existing queries added, a relationship drawn between their key columns, and a live preview of the joined rows.",
        },
      ],
    },
    {
      id: "design-system",
      n: "06",
      heading: "Design system",
      standfirst:
        "How I worked on this product, drawn: one requirement through the tools it passed, from the PM's prototype to the shipped screen. Then the system itself, in its three homes.",
      blocks: [
        {
          kind: "sheet",
          sheet: {
            tools: [
              { name: "Lovable", mark: "", glyph: "L", what: "the PM's prototype, audited" },
              { name: "Claude", mark: "claude", what: "Design, Code, Figma MCP" },
              { name: "Codex", mark: "openai", what: "the first prototypes" },
              { name: "Figma", mark: "figma", what: "Dev Mode, Code Connect, sign-off" },
              { name: "Storybook", mark: "storybook", what: "FOX v3.0, the contract" },
              { name: "Nexus", mark: "sonatype", what: "versioned packages" },
              { name: "GitHub", mark: "github", what: "pull requests; Bitbucket before" },
              { name: "Web components", mark: "", what: "Lit, one package each" },
            ],
            stations: [
              { tool: "Lovable", mark: "", file: "the PM's prototype", title: "Audited, screen by screen", body: "Seven questions pinned where they arose; each became a rule.", image: { src: "/work/applus-analytics/screens/audit-1.png", alt: "The PM's Lovable prototype imported into Figma, with purple question notes pinned to the screens" } },
              { tool: "Codex, Claude", mark: "openai", file: "AGENTS.md, FOX skills", title: "A prototype within hours", body: "Generated on the FOX package, walked with the SMEs.", image: { src: "/work/applus-analytics/screens/prototype.png", alt: "A generated prototype of the application, built on FOX components" } },
              { drawing: "figma", tool: "Figma", mark: "figma", file: "REQ-1735 · Review", title: "Redrawn, tied to its requirement", body: "Every frame carries its REQ number, date and sign-off." },
              { drawing: "storybook", tool: "Storybook", mark: "storybook", file: "FOX v3.0", title: "The library as code", body: "Authored and versioned in Storybook; the API and the tokens are my responsibility." },
              { drawing: "nexus", tool: "Nexus", mark: "sonatype", file: "package", title: "Six products move a version", body: "A component changes where it runs." },
              { drawing: "merge", lines: ["Storybook", "Design QA against the REQ", "Reviewed on the build, by me"], tool: "GitHub", mark: "github", file: "pull request", title: "Reviewed on the running build", body: "Every pull request that changes a screen." },
              { drawing: "code", tool: "Claude Code", mark: "claude", file: "Figma MCP", title: "The file follows the code", body: "An accepted deviation is written back into the frame over MCP." },
              { drawing: "shipped", tool: "APplus", mark: "", file: "Analytics", title: "Shipped", body: "Vision Days, 22 September 2026; generally available from October." },
            ],
            block: [
              ["Sheet", "How I worked on Analytics"],
              ["Drawn for", "One requirement, from the PM's prototype to the shipped screen"],
              ["Governed by", "nine surface rules, AGENTS.md and the FOX skills; design acceptance in the definition of done"],
              ["Repository", "Bitbucket, then GitHub, maintained by design"],
            ],
          },
        },
        {
          kind: "fold",
          title: "FOX under the product: v2.0 to v3.0",
          hint: "Open: three versions, what each one changed",
          blocks: [
            {
              kind: "evolution",
              items: [
                {
                  version: "v2.0",
                  claim: "The file is the system",
                  sourceOfTruth: "The Figma library; code a rendering of it, from a spec and a conversation.",
                  ships: "Designer edits and writes up; developer reimplements downstream.",
                  costs: "Two artefacts claim to be the component; drift found by a person, too late.",
                },
                {
                  version: "v2.3",
                  claim: "The file is bound to the code",
                  sourceOfTruth: "Still Figma, every component tied to its code through Code Connect.",
                  ships: "Figma to Storybook to development; code-side work written back over MCP.",
                  costs: "Binding real, ownership not: the file kept honest by hand whenever code moves first.",
                },
                {
                  version: "v3.0",
                  claim: "The code is the system",
                  sourceOfTruth: "Storybook: the library authored, reviewed and versioned as code, published through Nexus.",
                  ships: "A component changed where it runs; products move a version, not a frame.",
                  costs: "No file to lean on: reviewing the system means reading a story.",
                  moved: "What moved: the authority, from the file that describes the system to the code that is it.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "sign-off",
      n: "07",
      heading: "Design and sign-off",
      standfirst:
        "Every frame carries its REQ number, a date and a status, then sign-off; REQ-1735 was signed off on 3 June 2026. Two screens that set the layout rules and two flows, one per tab.",
      blocks: [
        {
          kind: "tabs",
          label: "Screens and flows as signed off",
          items: [
            {
              label: "Graph view",
              blocks: [
                {
                  kind: "shot",
                  src: `${D}/analysis-sheet-2400.webp`,
                  frame: "macbook",
                  caption: "The side sheet, opened from the view toolbar: render scope, no scrim, the chart reflows beside it.",
                },
              ],
            },
            {
              label: "Pivot view",
              blocks: [
                {
                  kind: "shot",
                  src: `${D}/analysis-pivot-2400.webp`,
                  frame: "macbook",
                  caption: "The grid with its total row; the view toolbar travels with the workspace. A view state has no surface; one entry point per action.",
                },
              ],
            },
            {
              label: "A dashboard built",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  frame: "macbook",
                  width: "wall",
                  src: `${C}/new-dashboard.mp4`,
                  poster: `${C}/new-dashboard.webp`,
                  title: "A dashboard created, a widget added, the layout saved",
                  caption: "In the prototype: a dashboard named in a dialog, two widgets configured in the side sheet, the layout saved.",
                },
              ],
            },
            {
              label: "The analyst asked",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  frame: "macbook",
                  width: "wall",
                  src: `${C}/ai-analyst.mp4`,
                  poster: `${C}/ai-analyst.webp`,
                  title: "The AI Data Analyst, from question to applied correction",
                  caption: "In the prototype: a question, the answer that names its cause, one phrase questioned in a detail thread, the correction applied as one step.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "use-cases",
      n: "08",
      heading: "Two use cases",
      maxim: "Each one makes the thing that could mislead you legible before it does.",
      standfirst:
        "One per area: the AI Data Analyst and Data models. Open a tile and the use case unfolds to the right, one panel at a time: screens, the template, the rule it sets.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "uc-ai-analyst",
              n: "01",
              cover: { src: `${D}/analyst-thread-2400.webp`, frame: "macbook" },
              title: "AI Data Analyst",
              maxim: "A follow-up question is a branch, not a turn.",
              standfirst:
                "Goal: question a fragment of an analysis without derailing the analysis. The branch is anchored to the fragment that provoked it and ends in exactly one of two ways, applied or discarded.",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${S}/thread-diagram.png`,
                  folded: true,
                  caption: "The thread model: main analysis left, detail thread right. Apply returns one step with its reason; discard returns nothing.",
                },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-01",
                    title: "Question a fragment of an analysis without derailing the analysis",
                    actor: {
                      name: "02, the controller",
                      body: "Reading an AI-generated analysis, not yet willing to believe it.",
                      note: "The state of mind is the requirement. Everything below exists to serve someone who is unconvinced.",
                    },
                    trigger: {
                      body: "One phrase in the answer looks wrong: “the DACH region contributes almost all of it, while the rest of EMEA was flat”. Flat is a strong word, and the reader cannot tell whether that is a fact or an artefact.",
                      note: "The trigger is doubt, not a task.",
                    },
                    precondition: {
                      body: "An analysis exists in the main thread as a live preview: chart, measure, grouping and filters visible before anything is saved.",
                    },
                    flow: [
                      { n: "1", text: "Select the fragment inside the answer." },
                      {
                        n: "2",
                        text: "A detail thread opens beside the analysis, headed with what it is scoped to: one fragment, and the main chat stays untouched.",
                        note: "The user is told what will and will not be affected before they type.",
                      },
                      {
                        n: "3",
                        text: "The panel restates the selection verbatim and pins the context that produced it as chips: invoiced revenue, last 12 months; measure, invoiced quantity; group by, region; source, FV_RECHNUNG.",
                        note: "The chips make the branch reproducible. Without them it is a question about nothing in particular.",
                      },
                      { n: "4", text: "The follow-up is asked inside the panel: why is the rest of EMEA flat while DACH grew 14 per cent?" },
                      {
                        n: "5",
                        text: "The answer names the cause instead of restating the number: Benelux orders shifted from Q3 to Q4, so the quarter looks flat while the half-year is not.",
                      },
                      {
                        n: "6",
                        text: "An evidence card carries Q3 against Q4 aligned, 2.05 to 2.11 million euro, plus 3.1 per cent, and the answer can be verified: Show SQL · Open as pivot · Copy.",
                        note: "A controller will be asked where the number came from. “The assistant said so” cannot be repeated to an auditor.",
                      },
                    ],
                    exits: [
                      { label: "Apply to main analysis", text: "One new step in the main thread, with its reason." },
                      { label: "Discard", text: "The branch closes; the main analysis unchanged." },
                    ],
                    exitsNote: "A branch that can end ambiguously is not a branch.",
                    postcondition: {
                      body: "One step with its reason, or nothing; never a transcript of the investigation.",
                    },
                    why: "Rejected: a plain threaded reply; it carries the question but no decision back, and the analysis drifts.",
                    rule: "An action on a fragment opens a surface scoped to it and returns one thing to its parent: a change, or nothing.",
                    ruleNote: "The same rule governs widget settings inside a dashboard.",
                  },
                },
              ],
            },
            {
              id: "uc-data-models",
              n: "02",
              cover: { src: `${D}/models-relationship-2400.webp`, frame: "macbook" },
              title: "Data models",
              maxim: "Anything that changes the number a model produces is stated on the canvas, in words, before it is committed.",
              standfirst:
                "Goal: build a model other people's numbers can rest on. The same two queries joined two different ways produce two different numbers, and in a settings dialog that difference stays hidden until two people bring incompatible figures to the same meeting.",
              blocks: [
                {
                  kind: "duo",
                  items: [
                        {
                      src: `${D}/models-empty-2400.webp`,
                  frame: "macbook",
                      caption:
                        "The empty canvas says what it expects: one validated query, then relationships, then validation. It offers exactly one action, so there is no second path into the flow.",
                    },
                  ],
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${D}/models-relationship-2400.webp`,
                  frame: "macbook",
                  caption:
                    "Define relationships: the join states its direction and type on the canvas, and exists as an editable row in the panel.",
                },
                {
                  kind: "video",
                  clip: true,
                  frame: "macbook",
                  width: "wall",
                  src: `${C}/models-join.mp4`,
                  poster: `${C}/models-join.webp`,
                  title: "A join refused, then a join accepted",
                  caption: "In the prototype: STRING onto FLOAT refused at the endpoint; customer_id onto customer_id joined, INNER, listed in the panel.",
                },
                {
                  kind: "steps",
                  standfirst:
                    "A sequence of gates, not a form: each refuses something, and only the last changes what others see.",
                  items: [
                    {
                      n: "01",
                      stage: "Select query",
                      title: "The unit is a query, not a table",
                      rule: {
                        label: "Rule",
                        body: "Only queries already written and validated upstream, each with its source system.",
                      },
                    },
                    {
                      n: "02",
                      stage: "Define relationships",
                      title: "The join is an object, not a line",
                      rule: {
                        label: "Rule",
                        body: "Direction and type stated on the canvas; endpoints drawn valid or invalid before commit.",
                      },
                      why: {
                        label: "Why",
                        body: "A join type hidden in a dialog surfaces as two numbers in one meeting.",
                      },
                    },
                    {
                      n: "03",
                      stage: "Validate model",
                      title: "A step, not a checkbox",
                      rule: {
                        label: "Rule",
                        body: "Readiness checked while the model is still private; finished is not publishable.",
                      },
                    },
                    {
                      n: "04",
                      stage: "Publish",
                      title: "The only irreversible audience change",
                      rule: {
                        label: "Rule",
                        body: "Everything before affects one person; publishing affects every dashboard built on the model, so it is its own act.",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "handoff",
      n: "09",
      heading: "Handoff",
      standfirst:
        "Development receives the Figma file through Dev Mode, every component bound to its code by Code Connect, Storybook as the reference, and the working prototype. Three requirements were in the tokens and templates from the start.",
      blocks: [
        {
          kind: "flow",
          stages: [
            { title: "Accessibility", body: "WCAG AA from the start, not a review step." },
            { title: "Colour modes", body: "Light, dark and high contrast in tokens, never per screen." },
            { title: "Language", body: "German default, English second; layouts tested against German compound words. The screens here: English." },
          ],
        },
      ],
    },
    {
      id: "after-development",
      n: "10",
      heading: "After development",
      standfirst:
        "The developers build on the FOX package, so what reaches review is already made from the right parts. What is left to check is what a component library cannot guarantee: composition, states, real data, German, and whether the requirement was met.",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              n: "01",
              stage: "Design review",
              flow: { from: "A pull request", to: "Review comments before merge" },
              title: "I review the running build, not a screenshot of it",
              rule: {
                label: "Rule",
                body: "Every screen-changing pull request reviewed on its preview build, beside its frame; comments on the pull request.",
              },
              why: {
                label: "Why",
                body: "A screenshot shows one chosen state; the build shows the hover, the focus ring, the column that wraps at 1280px.",
              },
            },
            {
              n: "02",
              stage: "Design QA",
              flow: { from: "A REQ identifier", to: "Every acceptance criterion checked" },
              feature: true,
              title: "Design QA runs against the requirement, not against taste",
              rule: {
                label: "Rule",
                body: "The REQ on the frame is the REQ on the ticket: acceptance criteria walked one by one, then the states no frame shows.",
              },
              why: {
                label: "Why",
                body: "“It doesn't look right” is an opinion; “criterion 3: the empty state offers no next step” is a defect with an owner.",
              },
              artefact: {
                caption: "The checklist every screen goes through.",
                lines: [
                  "REQ-xxx · acceptance criteria        each one, in order",
                  "states      empty · loading · error · no permission",
                  "data        real volumes, long values, nulls",
                  "language    DE default, EN second — no truncated label",
                  "themes      light · dark · high contrast",
                  "a11y        keyboard path, focus order, AA contrast",
                  "widths      1280 · 1440 · 1920",
                ],
              },
            },
            {
              n: "03",
              stage: "Reconcile",
              flow: { from: "A deviation in code", to: "One version of the truth" },
              title: "When the code is right and the file is wrong, the file changes",
              rule: {
                label: "Rule",
                body: "Development surfaces what design did not see; each deviation rejected as a defect or accepted and written back into the frame over MCP that week.",
              },
              why: {
                label: "Why",
                body: "A file that describes what was designed, not what shipped, misleads the next feature.",
              },
            },
          ],
        },
      ],
    },
    {
      id: "results",
      n: "11",
      heading: "What it adds up to",
      standfirst:
        "What exists at release, September 2026. The screens will be redrawn; the parts that can be checked are the ones that last.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "7/7", label: "audit questions answered by a rule or a template" },
            { value: "9", label: "surface rules, one surface per action type" },
            { value: "6/6", label: "app-bar actions that open a modal (R1), and 6/6 render panels in a side sheet (R2)" },
          ],
        },
        {
          kind: "joint",
          question: "What would I do differently?",
          answers: [
            "<strong>Surface rules before the first prototype</strong>, not after the audit: three controls moved after the rules, each a round of review and a redrawn frame.",
            "<strong>No native table for the pivot grid.</strong> fox-table-executor lacked grouped headers; I took the gap to ship on time, and the system owes the product that component.",
          ],
        },
        {
          kind: "joint",
          question: "What will I measure after release, and how?",
          answers: [
            "<strong>Whether controllers verify the AI analyst:</strong> Apply versus Discard, and Show SQL opened before Apply.",
            "<strong>Whether reach stays visible:</strong> queries reused outside their department, against permission tickets at support.",
            "<strong>Whether drill-down left Excel:</strong> exports per controller during the close, before and after, from the logs.",
          ],
        },
      ],
    },
  ],
};
