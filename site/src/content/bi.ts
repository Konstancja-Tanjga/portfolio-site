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
/** the prototype route, under the deployment base */
const P = ((import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? "/").replace(/\/$/, "") + "/prototype/analytics";

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
    headline: ["Business", "Intelligence"],
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
      value: "FOX, which I own. The migration from v2.3 to v3.0, with one other designer",
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
              key: "Context",
              value:
                "APplus customers already had analytics, through a third-party BI tool outside the ERP. Analytics is the in-house replacement: a data warehouse and the application on top of it, informed by how customers used the old tool and by market practice for BI.",
            },
            {
              key: "Problem",
              value:
                "The PM had built a working prototype of the replacement in Lovable. It showed the product could be built and left open how people would find, trust and share a number.",
            },
            {
              key: "My role and scope",
              value:
                "The only designer on the product. The audit of the prototype, the information architecture, personas and flows, the nine surface rules the whole application obeys, requirement-level design and sign-off, a working prototype on FOX components alongside the Figma file, and design review of every pull request that changes a screen. I ran the eight validation sessions myself; the team has no researcher.",
            },
            {
              key: "Decision 1",
              value:
                "The surface follows the scope of what is acted on. Nine rules give every action type exactly one surface.",
            },
            {
              key: "Decision 2",
              value:
                "A follow-up question to the AI analyst is a branch with two exits, apply or discard, so the analysis never changes without a stated reason.",
            },
            {
              key: "Decision 3",
              value:
                "Reach, authorship and join type are printed on the object itself. Nobody has to open a dialog to learn who can see a query.",
            },
            {
              key: "Outcome",
              value:
                "Shipped. 7 of 7 audit questions answered by a rule or a template; 8 validation sessions with subject-matter experts; every app-bar action and every render panel in the prototype checked against the rules. Presented at Vision Days on 22 September 2026, generally available from October 2026.",
            },
            {
              key: "Period and team",
              value:
                "January to September 2026. Seven people: three developers, a requirements engineer, QA, a PM and me.",
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
          kind: "passage",
          html: `<p><strong>A working prototype</strong> of the application, built on FOX design system components with fictional data, is open at <a href="${P}" target="_blank" rel="noopener">${P.replace(/^\//, "")}</a>. The clips on this page are recorded from it.</p>`,
        },
        {
          kind: "carousel",
          items: [
            { src: `${D}/home-2400.webp`, frame: "macbook", title: "Home", body: "The landing surface for people who consume rather than author: the biggest forecast change of the week on top, recent dashboards below." },
            { src: `${D}/dashboards-2400.webp`, frame: "macbook", title: "Dashboards", body: "The same object as a library: all, continue where you left off, favourites, shared with you, popular." },
            { src: `${D}/analysis-2400.webp`, frame: "macbook", title: "Analyses", body: "The same library as dashboards: all, continue where you left off, favourites, shared with you and popular, each card with its reach and its run count." },
            { src: `${D}/analysis-sheet-2400.webp`, frame: "macbook", title: "Chart configuration", body: "The side sheet opens from the view toolbar and the chart reflows beside it; nothing is covered." },
            { src: `${D}/analysis-pivot-2400.webp`, frame: "macbook", title: "Pivot", body: "The grid with a total row, and the view toolbar that stays with the workspace." },
            { src: `${D}/dashboard-open-2400.webp`, frame: "macbook", title: "A dashboard", body: "Regional sales review, opened: two widgets from saved analyses on the canvas, and the view toolbar with Edit on the right." },
            { src: `${D}/analyst-chat-2400.webp`, frame: "macbook", title: "AI Data Analyst", body: "An answer that names its cause, the chart under it, and where the number came from: the query, the run time, the tables joined, Show SQL." },
            { src: `${D}/analyst-thread-2400.webp`, frame: "macbook", title: "Detail thread", body: "One fragment of an answer questioned beside the analysis, without touching it; Apply or Discard." },
            { src: `${D}/queries-shelf-2400.webp`, frame: "macbook", title: "Queries", body: "The shelf: every query arrives with its reach, the system it reads, its author and its date." },
            { src: `${D}/queries-card-2400.webp`, frame: "macbook", title: "A query", body: "Access, data model, owner and eligible roles on top, the SQL under them, a result preview below. Who can use it is part of the query." },
            { src: `${D}/models-select-2400.webp`, frame: "macbook", title: "Data models", body: "Saved models with their role badges, and the New menu split by intent: build an analysis or a dashboard, connect a query or a data model." },
            { src: `${D}/models-relationship-2400.webp`, frame: "macbook", title: "Relationships", body: "The join states its direction and type on the canvas, and exists as a row in the panel." },
            { src: `${D}/settings-2400.webp`, frame: "macbook", title: "Settings", body: "Master data sources as a table, and the admin spine on the left: translations, data sources, AI and analytics, users and permissions, system." },
          ],
        },
        {
          kind: "passage",
          html: "<p><strong>What I owned.</strong> The only designer on the product, from the audit to the review of the build.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>The audit</strong> of the existing concept, and <strong>the shape of the product</strong> that came out of it.",
            "<strong>Information architecture</strong>, personas and user flows; <strong>market and competitor analysis</strong>.",
            "<strong>The nine surface rules</strong> the whole application obeys.",
            "<strong>Requirement-level design and sign-off</strong>: every frame tied to its REQ number, dated and signed.",
            "<strong>Design review of every pull request</strong> that changes a screen, on its preview build.",
            "<strong>FOX, the design system it runs on</strong>: its tokens and its component API are mine. I did its migration from v2.3 to v3.0 with one other designer.",
          ],
        },
        {
          kind: "pull",
          text: "Concepts in Claude Design, the design in Figma, the handoff through Dev Mode, Code Connect and Storybook. The prototype answers the behaviour questions; the implementation is the developers' code on the FOX package.",
        },
      ],
    },
    {
      id: "who-for",
      n: "02",
      heading: "Who it is for",
      standfirst:
        "The mid-sized and large manufacturers that run APplus across Germany, Austria and Italy, and inside each of them four audiences with different jobs against one data foundation.",
      blocks: [
        {
          kind: "personas",
          standfirst:
            "The numbering is the handoff: a number is built at 01 and believed at 04, or it is not believed at all. Every surface rule in this project first answers which of the four a screen is serving.",
          items: [
            {
              n: "01",
              name: "The key user",
              badge: "AUTHOR · IT OR DEPARTMENT POWER USER",
              quote: "I build the query once. Then twelve people live off it.",
              context: "Owns the data models and the queries. Knows which ERP tables can be joined and which must not be.",
              goals: [
                "Turn ERP tables into a model others can reuse",
                "Publish a query without publishing the fields its readers are not cleared to see",
                "Change one model, not twelve copies of it",
              ],
              breaks: "Every request becomes a bespoke Excel export that they maintain by hand, forever.",
              must: "Make authoring and sharing two separate, visible acts, never one accidental one.",
              job: "BUILD",
            },
            {
              n: "02",
              name: "The controller",
              badge: "INTERROGATOR · FINANCE",
              quote: "Margin is down four points. I need the reason by Thursday.",
              context: "Monthly close. Plan against actual, margin per order, per customer, per product line.",
              goals: [
                "Get from a number to the rows behind it",
                "Compare two periods without rebuilding the chart from scratch",
                "Leave a path somebody else can walk again",
              ],
              breaks: "The drill-down happens in Excel, off the record, and cannot be repeated next month.",
              must: "Treat filtering and drill-down as the primary interaction. Export is the exit, not the tool.",
              job: "INTERROGATE",
            },
            {
              n: "03",
              name: "The production lead",
              badge: "MONITOR · OPERATIONS",
              quote: "Before the shift meeting I need to know what is late.",
              context: "Throughput, utilisation, late orders. Reads one board, often on a shared screen, standing up.",
              goals: [
                "See today's bottleneck in one glance",
                "Know, without asking, how old the number is",
                "Configure nothing, ever",
              ],
              breaks: "Reads yesterday's report and learns about the delay after the meeting it mattered in.",
              must: "Make freshness, empty and failure as legible as the data. A stale board must say so.",
              job: "MONITOR",
            },
            {
              n: "04",
              name: "The managing director",
              badge: "CONSUMER · LEADERSHIP",
              quote: "I don't want to build one. I want the right one to be there.",
              context: "Five numbers, weekly. Never an author, always a consumer of work somebody else published.",
              goals: [
                "Open a favourite and understand it at once",
                "Ask the follow-up question in words",
                "Send what they are looking at to someone else",
              ],
              breaks: "Receives a PDF by e-mail that nobody in the thread can question or drill into.",
              must: "Have a reading mode with no authoring chrome, and an export that survives the forward.",
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
            "<strong>Audited it screen by screen.</strong> The whole prototype imported into Figma and read against market practice for BI tools and against what APplus users already know how to do.",
            "<strong>Four clusters.</strong> Entry and shell, data foundation, discovery and collaboration, insight assets.",
            "<strong>Seven questions, pinned to the screens that raised them.</strong> Each one is answered by a rule or a template in chapter 04.",
            "<strong>Eight validation sessions, run by me.</strong> The team has no researcher. Subject-matter experts, the PM and the requirements engineer each walked a flow end to end on questions from their own work.",
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
              value: "Every page is one of two templates, main or detail, and both carry breadcrumbs and the title in fox-app-bar.",
            },
            {
              key: "The same screen, rendered without breadcrumbs",
              value: "One template per page type, so one screen cannot appear two ways.",
            },
            {
              key: "What is the correct path, and where does “Visualisierung” come from?",
              value: "Visualisation stopped being a place. Graph, pivot and table are views of an analysis, switched in its view toolbar.",
            },
            {
              key: "Two searches on one shell",
              value: "One search field in the app bar, shared with Ask AI.",
            },
            {
              key: "What should be shown instead of an error?",
              value: "Empty, loading, error and no permission are four separate states, checked on every screen in design QA.",
            },
            {
              key: "Third-party or in-house for the designer surface, like Board Designer?",
              value: "In-house, on FOX: the data-model builder and the analysis views are FOX screens.",
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
      maxim:
        "A generated prototype is cheap enough to throw away. A designed and signed-off screen is not, so the disagreements happen here.",
      blocks: [
        {
          kind: "flow",
          stages: [
            { title: "A settled requirement", body: "Before a frame was drawn, it went into Codex, and later Claude." },
            { title: "Clickable within hours", body: "A generated prototype on FOX components: cheap enough to throw away." },
            { title: "Argued over in the room", body: "The eight SME sessions walked these prototypes, not slides." },
            { title: "Proven, then handed on", body: "The prototype answers the behaviour questions and proves the composition. The implementation is the developers' code on the FOX package." },
          ],
          note: "On that side I own the skills and the AGENTS.md that keep generated UI on-system, the tokens, and the review and merge of every component change.",
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
            "New data model, in the prototype: name and description, then the empty canvas that says what to add first, two queries added and given an alias, a relationship drawn between their key columns, and a live preview of the joined rows. A model is composed from queries that already exist; nothing in it is drawn from nothing.",
        },
      ],
    },
    {
      id: "design-system",
      n: "06",
      heading: "Design system",
      standfirst:
        "Same system, three homes. What changed each time was where the truth lived, and therefore who was allowed to change it.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>On this product I was both a consumer of FOX and its owner, which is why the update loop is worth showing: it ran in days, not quarters. Once the library lived in Storybook and shipped through Nexus, version control followed. We started on Bitbucket and then moved to GitHub: the design system source, the skills, the prototypes and the rest of the UX repository, owned and maintained by design.</p>",
        },
        {
          kind: "evolution",
          items: [
            {
              version: "v2.0",
              claim: "The file is the system",
              sourceOfTruth: "The Figma library. Code is a rendering of it, produced from a spec and a conversation.",
              ships: "A designer edits the component and writes it up; a developer reimplements it downstream.",
              costs: "Two artefacts claim to be the component, and only one of them runs in production. Drift is found by a person, too late.",
            },
            {
              version: "v2.3",
              claim: "The file is bound to the code",
              sourceOfTruth: "Still Figma, but every component is tied to its implementation through Code Connect.",
              ships: "Figma to Storybook to development, with code-side work written back into the file over MCP.",
              costs: "The binding is real, the ownership is not: the file still has to be kept honest by hand every time code moves first.",
            },
            {
              version: "v3.0",
              claim: "The code is the system",
              sourceOfTruth: "Storybook. The library is authored, reviewed and versioned as code and published as a package through Nexus.",
              ships: "A component is changed where it runs. Products pick it up by moving a version, not by copying a frame.",
              costs: "Design loses the comfort of the file. Reviewing the system means reading a story, not opening a page.",
              moved: "What moved was the authority: from the file that describes the system to the code that is the system.",
            },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>A FOX component, as a developer meets it. Every screen in this case study is assembled from elements like this one: attributes for state, named slots for content, and actions the dialog itself resolves. The object-scope rule, R1 on the screen architecture folders, ends in exactly this element.</p>",
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
            "fox-dialog, the Default story, copied verbatim. FOX components are Lit web components published one package per component, for example @assecosolutions/fox-dialog. The public Storybook documents the v1 line; v3.0 stays inside the company.",
          source: {
            text: "Source: FOX Storybook, atoms / fox-dialog.",
            href: "https://design-system-v1.assecosolutions.com/?path=/story/atoms-fox-dialog--default-story",
          },
        },
      ],
    },
    {
      id: "screen-architecture",
      n: "06a",
      heading: "Screen architecture",
      standfirst:
        "Every screen in the product is one of five layouts with different content in the same zones. That is what made the layout arguments reusable instead of per-screen. Zone map from the Analytics prototype; one rectangle is one real container, and sizes are the values in code.",
      blocks: [
        {
          kind: "duo",
          items: [
            {
              src: `${D}/analysis-sheet-2400.webp`,
              frame: "macbook",
              caption: "Graph view with the side sheet open. Changing how the body renders (R2) opens the sheet from the view toolbar, without a scrim, and the chart reflows beside it.",
            },
            {
              src: `${D}/analysis-pivot-2400.webp`,
              frame: "macbook",
              caption: "Pivot view: the grid with its total row, and the view toolbar that travels with the workspace (R6, R7).",
            },
          ],
        },

        {
          kind: "annotated",
          items: [
            {
              id: "01",
              title: "Main page: nav rail and panel",
              standfirst: "The default gallery page. fox-navigation-bar rail 56 + sub-level panel 248 = 304.",
              shot: { src: `${S}/tpl-main.png` },
              notes: [
                {
                  label: "Layer stack, bottom to top",
                  body: "fox-navigation-bar (persistent, outside the page) · fox-back-layer · fox-app-bar (breadcrumbs, title, actions) · fox-content-layer (scroll body, layout-isolated) · fox-side-sheet (inside the content layer) · fox-menu (anchored, no scrim) · fox-dialog with scrim · fox-notification-container (toasts, top right).",
                },
                {
                  label: "Key sizes",
                  body: "App bar 64 on main pages, 96 on detail pages. Search max-width 420. Card grid minmax(280px, 1fr), gap 40. Card media 136.",
                },
                {
                  label: "Guardrails",
                  body: "Main actions only in the app bar; secondaries collapse into the burger. Settings opens as an overlay, never as a side sheet. Sort and filter belong to gallery pages only. One export entry point per page. Toasts mount in a single container.",
                },
              ],
              rules: [
                { id: "R1", text: "Object → modal" },
                { id: "R3", text: "The card is an object" },
                { id: "R4", text: "Choice → anchored menu" },
                { id: "R5", text: "Destructive → modal" },
                { id: "R6", text: "View state → no surface" },
              ],
            },
            {
              id: "04",
              title: "Main page: anchored menu",
              standfirst: "fox-menu, anchored to its trigger, above the content layer, without a scrim.",
              shot: { src: `${S}/tpl-menu.png` },
              notes: [
                {
                  label: "Where it sits",
                  body: "It must render above fox-content-layer, never inside it: the layout-isolated content layer would clip it. Two anchors on a gallery page: the card overflow (Edit · Copy · Share · Permissions · Delete) and the app-bar burger.",
                },
                {
                  label: "Guardrails",
                  body: "A menu offers a choice, never a form. A menu item may only ask for a destructive act; the modal performs it. One menu open at a time.",
                },
              ],
              rules: [
                { id: "R4", text: "A choice, never a form" },
                { id: "R7", text: "One entry point per action" },
              ],
            },
            {
              id: "07",
              title: "Detail page: side sheet open",
              standfirst: "fox-side-sheet inside the content layer. The body reflows beside it (1584 → 1136) instead of being covered.",
              shot: { src: `${S}/tpl-sheet.png` },
              notes: [
                {
                  label: "Panels",
                  body: "Chart configuration · Table grouping · Table calculation · Table columns · Smart filter · Sorting. One sheet host, one panel at a time.",
                },
                {
                  label: "Guardrails",
                  body: "No scrim: you watch the content react while you configure it. Never opened from the app bar. Closing a panel keeps the filter or sort already applied; only Save commits and clears the Unsaved changes badge.",
                },
              ],
              rules: [{ id: "R2", text: "Render scope → side sheet" }],
            },
            {
              id: "08",
              title: "Detail page: split workspace",
              standfirst: "Pivot view: available fields (340), three drop areas, the pivot toolbar and the result grid (1196).",
              shot: { src: `${S}/tpl-split.png` },
              notes: [
                {
                  label: "A gap in the system",
                  body: "The pivot result grid needs grouped two-level headers, collapsible row groups and row and column totals. fox-table-executor cannot express this, so the grid is a native table.",
                },
              ],
              rules: [
                { id: "R2", text: "Render scope → side sheet" },
                { id: "R7", text: "Pivot actions stay inside the view" },
              ],
            },
            {
              id: "09",
              title: "Detail page: enlarged",
              standfirst: "viz-workspace--enlarged, inset: 0 inside the layout-isolated content layer.",
              shot: { src: `${S}/tpl-enlarged.png` },
              notes: [
                {
                  label: "Why inset: 0",
                  body: "fox-content-layer is layout-isolated, so it is the containing block for the fixed child and already starts below the app bar. Offsetting by the app-bar height again would push the workspace 96px too low.",
                },
                {
                  label: "Guardrails",
                  body: "A maximised body, not fullscreen: the rail, the panel and the app bar stay usable. The view toolbar travels with the workspace, so Enlarge is reversible in one click from inside.",
                },
              ],
              rules: [
                { id: "R6", text: "No surface, reversible in one click" },
                { id: "R7", text: "The one sanctioned exception" },
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
        "A frame is tied to its requirement: the SRS it comes from, the REQ number, a date and a status, then design sign-off. For example, REQ-1735 from the SRS “APplus BI Analysis” carries a sign-off dated 3 June 2026 and the status Review. Design acceptance is part of the definition of done.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${D}/home-2400.webp`,
          frame: "macbook",
          caption:
            "Home, the landing surface for people who consume rather than author. The biggest forecast change of the week sits on top, with Read analysis, Save and Ask AI Data Analyst about this; recent dashboards below, each with its author and its last opened date.",
        },
        {
          kind: "duo",
          items: [
            {
              src: `${D}/dashboards-2400.webp`,
          frame: "macbook",
              caption:
                "Dashboards: the same object as a library, with all, continue where you left off, favourites, shared with you and popular. Each card carries its reach, its key figure, its author and its date.",
            },
            {
              src: `${D}/analysis-2400.webp`,
          frame: "macbook",
              caption:
                "Analyses reuse the card, the badges and the filters of dashboards exactly. What differs is what the object does, not how it is found.",
            },
          ],
        },
        {
          kind: "video",
          clip: true,
          frame: "macbook",
          width: "wall",
          src: `${C}/new-dashboard.mp4`,
          poster: `${C}/new-dashboard.webp`,
          title: "A dashboard created, a widget added, the layout saved",
          caption: "New dashboard, in the prototype: name and description in a dialog (R1), the empty state, then two widgets, each chosen from the saved analyses and configured in the side sheet (R2), and the layout saved.",
        },
        {
          kind: "video",
          clip: true,
          frame: "macbook",
          width: "wall",
          src: `${C}/new-analysis.mp4`,
          poster: `${C}/new-analysis.webp`,
          title: "A new analysis in four steps",
          caption: "New analysis, in the prototype: query, columns, formatting, save. The saved query and its SQL are shown before a column is picked, and nothing exists until the last step.",
        },
        {
          kind: "shot",
          width: "wall",
          src: `${D}/analyst-chat-2400.webp`,
          frame: "macbook",
          caption:
            "The AI Data Analyst names the cause with the number: up 8.2 per cent, but most of it is price. Under the chart, the provenance line says what it stands on: the query, the run time, the tables joined, when the data was refreshed, and Show SQL.",
        },
        {
          kind: "duo",
          items: [
            {
              src: `${D}/models-relationship-2400.webp`,
          frame: "macbook",
              caption:
                "Data models: two queries on the canvas with typed columns, and the join drawn as an object that states its direction and type.",
            },
            {
              src: `${D}/settings-2400.webp`,
          frame: "macbook",
              caption:
                "Settings: master data sources as a table with their type, columns and filter, and the admin spine on the left: translations, data sources, AI and analytics, users and permissions, system.",
            },
          ],
        },
      ],
    },
    {
      id: "use-cases",
      n: "08",
      heading: "Three use cases",
      maxim: "Each one makes the thing that could mislead you legible before it does.",
      standfirst:
        "One per area: the AI Data Analyst, Queries and Data models. Open a tile and the use case unfolds to the right, one panel at a time: screens, the template, the rule it sets.",
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
                  caption: "The thread model: main analysis on the left, the detail thread on the right. Apply returns one step with its reason; discard returns nothing.",
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${D}/analyst-thread-2400.webp`,
                  frame: "macbook",
                  caption:
                    "The detail thread in the product: the selection restated, its context as chips, the evidence card with Show SQL, and Apply or Discard at the bottom.",
                },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-01",
                    title: "Question a fragment of an analysis without derailing the analysis",
                    actor: {
                      name: "02, the controller",
                      body: "Reading an AI-generated analysis, and not yet willing to believe it.",
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
                      { label: "Apply to main analysis", text: "The correction enters the main thread as a new step, with the reason attached to it." },
                      { label: "Discard", text: "The branch closes and nothing propagates. The main analysis is exactly what it was." },
                    ],
                    exitsNote: "A branch that can end ambiguously is not a branch.",
                    postcondition: {
                      body: "Either the main analysis gained one step that names its own reason, or it gained nothing. It never gains a transcript of the investigation.",
                    },
                    why: "Rejected: a plain threaded reply. It can carry the question, but it cannot carry a decision back, and the analysis drifts while nobody is watching.",
                    rule: "An action on a fragment opens a surface scoped to that fragment, and returns exactly one thing to its parent: a change, or nothing.",
                    ruleNote: "The same rule governs widget settings inside a dashboard.",
                  },
                },
              ],
            },
            {
              id: "uc-queries",
              n: "02",
              cover: { src: `${D}/queries-shelf-2400.webp`, frame: "macbook" },
              title: "Queries",
              maxim: "If a property determines who can see an object, it belongs on the object, not one click away from it.",
              standfirst:
                "Goal: publish a query other people can use, and let everyone see who else can use it without opening a permissions dialog.",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${D}/queries-shelf-2400.webp`,
                  frame: "macbook",
                  caption:
                    "The shelf. A query arrives with its reach, the system it reads, its author and its date, so anyone reusing it can see what they are standing on before they build.",
                },
                {
                  kind: "duo",
                  items: [
                    {
                      src: `${D}/queries-card-2400.webp`,
                  frame: "macbook",
                      caption:
                        "The query itself: access, data model, owner and eligible roles on top, the SQL definition under them, and a result preview below. Who can use it is part of the query, not a separate screen.",
                    },
                    {
                      src: `${D}/queries-add-2400.webp`,
                      frame: "macbook",
                      caption:
                        "Edit query. Name, data source and eligible roles are one form, and the roles sit beside the query, not behind a permissions dialog. A query with no eligible role is visible only to its author.",
                    },
                  ],
                },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-02",
                    title: "Publish a query other people can use, and see who can use it",
                    actor: {
                      name: "01, the key user, publishing",
                      body: "02, 03 and 04 appear here only as readers of what was published. They never open this screen, and they inherit its consequences anyway.",
                      note: "One author, three kinds of reader.",
                    },
                    trigger: {
                      body: "A query built for one department turns out to be useful to three. Its reach starts growing before anyone decides that it should.",
                      note: "Success is the trigger, which is exactly when exposure grows without a decision behind it.",
                    },
                    precondition: {
                      body: "The query runs against a named data model, and roles exist in the system, so “who can see this” is already an answerable question.",
                    },
                    flow: [
                      { n: "1", text: "Saved queries are presented as cards, not rows: the unit is an object with an owner, not a record in a list." },
                      {
                        n: "2",
                        text: "Each card states on its face who it reaches, who made it, when, and what it reads: Public or Private; data source, author, date.",
                        note: "Exposure is visible at rest.",
                      },
                      {
                        n: "3",
                        text: "Settings is organised by what an admin owns: data sources (connections, column glossary, master data sources), users and permissions, and system (ERP links, version and updates).",
                      },
                      {
                        n: "4",
                        text: "Column links are configured against a template, /customers/{value}, and tested in place with a column name and a test value before they are saved.",
                        note: "Configuration you can verify where you write it does not become a support ticket next month.",
                      },
                      { n: "5", text: "Translations, versions and update policy live in the same shell." },
                    ],
                    postcondition: {
                      body: "Reach is a property of the artefact, visible wherever the artefact is. Nobody has to open a permissions dialog to find out who can see their work.",
                    },
                    why: "The dangerous failure in BI on an ERP is a query that quietly reaches further than its author thought. Rejected: permissions behind a per-item dialog. Fewer pixels, but exposure becomes something you have to go and check.",
                    rule: "If a property determines who can see an object, it belongs on the object, not one click away from it.",
                    ruleNote: "Both use cases make the thing that could mislead you legible before it does.",
                  },
                },
              ],
            },
            {
              id: "uc-data-models",
              n: "03",
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
                      src: `${D}/models-select-2400.webp`,
                  frame: "macbook",
                      caption:
                        "The data models shelf. A model carries the roles that can read it on its face, so reach is visible before anyone opens it; one with no roles is the author's alone.",
                    },
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
                    "Define relationships. The join states its direction and type, INNER or LEFT, and the same relationship exists as an editable row in the right panel, so the drawing is a view of the list rather than the only copy of it.",
                },
                {
                  kind: "video",
                  clip: true,
                  frame: "macbook",
                  width: "wall",
                  src: `${C}/models-join.mp4`,
                  poster: `${C}/models-join.webp`,
                  title: "A join refused, then a join accepted",
                  caption: "In the prototype: a STRING dragged onto a FLOAT is refused at the endpoint; customer_id onto customer_id draws the join, states INNER, and lists it in the panel.",
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${S}/models-anatomy.png`,
                  folded: true,
                  caption:
                    "One relationship. Provenance rides on the tile, the column type is visible before the link is made, and joining a STRING to a FLOAT is refused at the endpoint, not at run time.",
                },
                {
                  kind: "steps",
                  standfirst:
                    "Building a model is a sequence of gates, not a form with a save button. Each gate refuses something, and only the last one changes what other people see.",
                  items: [
                    {
                      n: "01",
                      stage: "Select query",
                      title: "The unit is a query, not a table",
                      rule: {
                        label: "Rule",
                        body: "Everything on the shelf was already written and validated upstream, and each card carries its source system: SQL Server, Oracle, PostgreSQL, Supabase.",
                      },
                    },
                    {
                      n: "02",
                      stage: "Define relationships",
                      title: "The join is an object, not a line",
                      rule: {
                        label: "Rule",
                        body: "It states its direction and type on the canvas, and its endpoints are drawn valid or invalid before you commit them.",
                      },
                      why: {
                        label: "Why",
                        body: "Hiding the join type in a settings dialog hides the discrepancy until somebody argues about it in a meeting.",
                      },
                    },
                    {
                      n: "03",
                      stage: "Validate model",
                      title: "A step, not a checkbox",
                      rule: {
                        label: "Rule",
                        body: "Readiness is checked while the model is still private. A model can be finished and still not be publishable, and the interface says so.",
                      },
                    },
                    {
                      n: "04",
                      stage: "Publish",
                      title: "The only irreversible audience change",
                      rule: {
                        label: "Rule",
                        body: "Everything before this point affects one person. Publishing affects everyone who will later open a dashboard built on the model, so it is a separate act from saving, with its own affordance.",
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
      maxim: "When the system lives in code and the file only consumes it, there is no second copy to forget.",
      standfirst:
        "What development receives: the Figma file through Dev Mode, every component bound to its implementation by Code Connect, Storybook as the reference, and a working prototype that answers the behaviour questions. The implementation is the developers' code on the FOX package.",
      blocks: [
        {
          kind: "loop",
          centre: "One system, no second copy",
          stations: [
            { label: "Figma", title: "The file", body: "Every component bound to the implementation that ships it, through Code Connect. Dev Mode is what development opens." },
            { label: "Code", title: "The FOX package", body: "By v3.0 the binding is the distribution model: a versioned package six products pick up by moving a version. I own the component API and the tokens, and I review and merge every pull request into the library." },
            { label: "Prototype", title: "The running prototype", body: "Composed on the package, it answers the behaviour questions and proves the composition. The implementation is the developers' code on the same package." },
          ],
          edges: [
            { label: "Code Connect" },
            { label: "Composed on the package" },
            { label: "Written back over MCP" },
          ],
          caption:
            "The loop. The file binds to the code through Code Connect; the prototype is composed on that code; what is done in code is written back into the file over MCP from Claude Code, so the file follows the code instead of drifting from it.",
        },
        {
          kind: "flow",
          stages: [
            { title: "Accessibility", body: "WCAG AA was the target from the start, not a review step at the end." },
            { title: "Colour modes", body: "Light, dark and high contrast, implemented in tokens rather than per screen. A screen cannot fall out of high contrast if it never hard-codes a colour." },
            { title: "Language", body: "German is the default, English second. Layouts were tested against German compound words, where a layout that survives English quietly breaks. The screens on this page are the English variant." },
          ],
          note: "Three requirements that were in the tokens and templates from the start, not added in review.",
        },
      ],
    },
    {
      id: "after-development",
      n: "10",
      heading: "After development",
      maxim: "A merged pull request is not a finished feature. It is the first time the design exists at all.",
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
                body: "Every pull request that changes a screen is reviewed by design on its preview build, beside the frame it implements. Comments go on the pull request, where the developer is already working.",
              },
              why: {
                label: "Why",
                body: "Screenshots show the state someone chose to capture. The build shows the others: the hover, the focus ring, the column that wraps at 1280px.",
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
                body: "The REQ number on the frame is the one on the ticket, so design QA walks its acceptance criteria one by one, and then the states no frame shows in full.",
              },
              why: {
                label: "Why",
                body: "“It doesn't look right” is an opinion a developer has every reason to argue with. “Acceptance criterion 3: the empty state offers a next step, and this one doesn't” is a defect with an owner.",
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
                body: "Development surfaces things design did not see: a query that cannot return in time, a table that needs pagination. Each deviation is rejected as a defect or accepted, and an accepted one is written back into the frame over MCP the same week.",
              },
              why: {
                label: "Why",
                body: "A file that describes what was designed instead of what shipped is worse than no file, because the next feature is built from it.",
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
        "Analytics shipped in September 2026, so these are the results that exist at release. The screens will be redrawn; the parts that can be checked are the ones that last.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "7/7", label: "audit questions answered by a rule or a template" },
            { value: "8", label: "validation sessions with SMEs" },
            { value: "9", label: "surface rules, one surface per action type" },
            { value: "6/6", label: "app-bar actions obeying R1, and 6/6 panels obeying R2" },
          ],
        },
        {
          kind: "stats",
          items: [
            { value: "9", label: "months, January to September 2026" },
            { value: "7", label: "people: three developers, a requirements engineer, QA, a PM and me" },
            { value: "1", label: "designer: the shape of the product, its rules, and the design system it ships on" },
          ],
        },
        {
          kind: "joint",
          question: "What would I do differently?",
          answers: [
            "<strong>Write the surface rules before the first prototype</strong>, not after the audit. Three controls moved after the rules were written, and each move cost a round of review and a frame redrawn.",
            "<strong>Not accept the pivot grid as a native table.</strong> fox-table-executor could not express grouped headers, I took the gap to ship on time, and the system now owes the product a component that the next pivot will need too.",
          ],
        },
        {
          kind: "joint",
          question: "What will I measure after release, and how?",
          answers: [
            "<strong>Whether controllers verify the AI analyst.</strong> How often a detail thread ends in Apply versus Discard, and how often Show SQL is opened before Apply.",
            "<strong>Whether reach stays visible.</strong> How many published queries are reused outside the department that built them, set against the permission questions that reach support.",
            "<strong>Whether drill-down left Excel.</strong> Exports per controller during the monthly close, before and after rollout, from the export logs.",
            "<strong>Whether models get used.</strong> Time from publishing a data model to the first dashboard built on it.",
          ],
        },
      ],
    },
  ],
};
