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
    credit: "Sole designer · Asseco Solutions · 2026",
    shot: { src: "/work/applus-analytics/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Sole product designer on the product, design lead" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP — Analytics" },
    {
      label: "Design system",
      value: "FOX, which I own; the v2.3 → v3.0 migration done with one other designer",
      href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs",
    },
    { label: "Team", value: "Seven: three developers, a requirements engineer, QA, a PM and me" },
    { label: "Period", value: "January – September 2026, released September 2026" },
  ],
  chapters: [
    {
      id: "in-short",
      n: "00",
      heading: "In short",
      blocks: [
        {
          kind: "spec",
          rows: [
            {
              key: "Problem",
              value:
                "APplus customers did their reporting in an external BI tool, outside the ERP. The PM had built a working prototype of an in-house replacement in Lovable, which showed it could be built but left open how people would find, trust and share a number.",
            },
            {
              key: "My part",
              value:
                "The audit, information architecture, personas and flows, the surface rules, requirement-level design, a clickable React prototype on FOX, and design review of the build.",
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
              key: "Evidence",
              value:
                "7 of 7 audit questions answered. 8 validation sessions with subject-matter experts. Every app-bar action and every render panel in the prototype checked against the rules.",
            },
            { key: "Shipped", value: "September 2026" },
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
          kind: "shot",
          width: "wall",
          src: `${S}/hero-analyst.png`,
          caption:
            "The AI Data Analyst with a detail thread open: one fragment of an answer questioned without touching the main analysis.",
        },
        {
          kind: "pull",
          text: "Design and code stay one system. The Figma library and tokens mirror what ships, Code Connect links every component to its implementation, and the spec engineers build from is frozen with the code it describes.",
        },
        {
          kind: "passage",
          html:
            "<p><strong>What I owned:</strong> the audit of the existing concept, the shape of the product, its information architecture, personas and user flows, market and competitor analysis, the surface rules the whole application obeys, requirement-level design and sign-off, and day-to-day work with the developers. FOX, the design system it is built on, is mine to own: its tokens and component API. I did its migration from v2.3 to v3.0 with one other designer.</p>",
        },
      ],
    },
    {
      id: "hard-brief",
      n: "01a",
      heading: "Why this is a hard brief",
      maxim: "Most BI interfaces optimise one thing: drawing the chart. Here the chart is the last problem.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>A number is only as true as the model behind it, the period it covers and the role of the person reading it, and all three are invisible by default. Two people can open the same dashboard and be entitled to different rows. A year-on-year comparison can be wrong because the current year has not finished loading, while the query itself is correct. Each of those is a UI constraint before it is a backend constraint, because the UI is where a user forms a false belief about a number they will then repeat in a meeting.</p>",
        },
        {
          kind: "pull",
          text: "The work was making authorship, reach and freshness legible on the artefact itself, in a product where the person who builds a query is almost never the person who has to defend the number it produces.",
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
          html:
            "<p>I did not start by drawing. A working prototype already existed, built in Lovable by the PM, so I imported all of it into Figma and audited it screen by screen: against market practice for BI tools, and against what APplus users already know how to do. I grouped the screens into four clusters (entry and shell, data foundation, discovery and collaboration, insight assets) and pinned each open question to the screen that raised it.</p>" +
            "<p>There is no dedicated researcher on the team, so I ran the validation myself: eight sessions with subject-matter experts, the PM and the requirements engineer, each walking a prototype flow end to end on real questions from their own work. Weak options were dropped in the room, before anything was designed in detail.</p>",
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
        "The purple notes are the questions as I pinned them on the Lovable screens. The table is what answered each one.",
      blocks: [
        {
          kind: "duo",
          items: [{ src: `${S}/audit-1.png` }, { src: `${S}/audit-2.png` }],
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
          kind: "passage",
          html:
            "<p>Before a frame was drawn, a settled requirement went into Codex, and later Claude, and came back as something clickable within hours. Those prototypes were what the SME sessions argued over. I lead the implementation through Claude Code: skills, AGENTS.md, tokens, review and merge, so development starts from running code instead of rebuilding a picture from a spec.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/prototype.png`,
          caption: "A generated prototype of Settings → Version & updates, with the changelog open before an update is installed.",
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
              ships: "Figma → Storybook → dev, with code-side work written back into the file over MCP.",
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
            "<p>A FOX component, as a developer meets it. Every screen in this case study is assembled from elements like this one: attributes for state, named slots for content, and actions the dialog itself resolves. The object-scope rule (R1 below) ends in exactly this element.</p>",
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
            "fox-dialog, the Default story, copied verbatim. FOX components are Lit web components published one package per component, e.g. @assecosolutions/fox-dialog. The public Storybook documents the v1 line; v3.0 stays inside the company.",
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
      id: "surface-rules",
      n: "06b",
      heading: "Surface rules",
      maxim: "The surface follows the scope of what is acted on, never the location of the button.",
      standfirst:
        "Nine rules, one question each time: what is being acted on? Location is a consequence of scope, which is what makes the rules work for controls that do not exist yet. Each rule was checked against every control in the prototype (PR-07).",
      blocks: [
        {
          kind: "spec",
          caption: "The scope test: what is being acted on decides the surface, and the surface decides where the control lives. Every row is a real case in the prototype.",
          rows: [
            { key: "The whole object the page shows", value: "Modal · in fox-app-bar" },
            { key: "How the body content is rendered", value: "Right side sheet · in the body view toolbar" },
            { key: "An object inside the body: a card, a widget", value: "Modal · in that object's overflow menu" },
            { key: "A short choice with no inputs", value: "Anchored menu · next to its trigger" },
            { key: "Something destructive", value: "Modal naming the object · wherever the object is" },
            { key: "An immediate commit or view state", value: "No surface, a toast confirms · in the bar that owns the state" },
            { key: "An object in another domain", value: "Route to the owning page · the action stays, the surface moves" },
            { key: "The application's own configuration", value: "Full overlay · from the profile and tenant footer" },
          ],
        },
        {
          kind: "points",
          items: [
            "<strong>R1 · Object scope → modal.</strong> An action on the whole object the page shows opens a modal, so it belongs in fox-app-bar. <em>In the prototype:</em> 6 of 6 app-bar actions obey it (share, permissions, edit analysis on four pages, create data model, copy analysis, query create and edit).",
            "<strong>R2 · Render scope → right side sheet.</strong> Changing how the body is rendered opens the side sheet, without a scrim, from the body toolbar. <em>In the prototype:</em> 6 of 6 panels obey it.",
            "<strong>R3 · Object inside the body → modal.</strong> A card or a widget is still an object, so its actions open a modal from its own overflow menu. <em>In the prototype:</em> the controls that looked like exceptions (widget settings, card edit, copy, delete, permissions) all pass the scope test.",
            "<strong>R4 · Short choice → anchored menu.</strong> No inputs, no scrim, closes on an outside click. If it needs a field it is a modal; if it must stay open it is a sheet.",
            "<strong>R5 · Destructive → modal that names the object.</strong> The trigger may only ask. <em>In the prototype:</em> delete data model (REQ-2764, REQ-2783, REQ-2784), delete analysis (REQ-2290), delete query, author only (REQ-2332).",
            "<strong>R6 · Immediate commit or view state → no surface.</strong> It acts on click and a toast confirms: save, enlarge, grid/list, the verified toggle. Safe only when the act is cheap to undo; otherwise it is R5.",
            "<strong>R7 · One entry point per action.</strong> Never the same control in the app bar and the body. The one sanctioned exception is Enlarge, which graph and pivot both delegate up to the page.",
            "<strong>R8 · Another object's domain → route.</strong> Go to the page that owns it and open its surface there, carrying the intent. <em>In the prototype:</em> query permissions route to /queries with Eligible roles highlighted, because the Queries SRS puts access in that field (REQ-2392, REQ-2399, REQ-2336, REQ-2401).",
            "<strong>R9 · Application configuration → full overlay.</strong> Settings replaces the page area. It is a place you work in, not a single decision, and it has nothing to do with the page you came from.",
          ],
        },
        {
          kind: "spec",
          caption: "Three things the rules changed after they were written.",
          rows: [
            {
              key: "Sort and Smart filter",
              value: "Sat in the detail app bar. They change how the body renders (R2), so they moved to the body toolbar and open in the side sheet.",
            },
            {
              key: "PDF export",
              value: "Was added to the Analyses app bar, then removed. Export keeps one entry point, the PNG/PDF menu in the graph toolbar (R7).",
            },
            {
              key: "Settings",
              value: "The structure frames said “opens as overlay, not side sheet”. R9 is that note generalised: scope wider than the page means a surface wider than the page.",
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
        "A frame is tied to its requirement: the SRS it comes from, the REQ number, a date and a status, then design sign-off. For example, REQ-1735 from the SRS “APplus BI Analysis” carries a sign-off dated 03.06.2026 and the status Review.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${S}/home.png`,
          caption:
            "Home, the landing surface for people who consume rather than author. Ask AI Data Analyst sits on top with four ready-made questions; favourite dashboards and analyses below. Every card shows its role badges, its author and its date.",
        },
        {
          kind: "duo",
          items: [
            {
              src: `${S}/dashboards.png`,
              caption:
                "Dashboards: the same object as a library, sorted by domain (revenue, pipeline, retention, finance, risk), with all, favourites and shared with me.",
            },
            {
              src: `${S}/analysis.png`,
              caption:
                "Analyses reuse the card, the badges and the filters of dashboards exactly. What differs is what the object does, not how it is found.",
            },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/analyst-preview.png`,
          caption:
            "The AI Data Analyst answers with a live preview instead of a paragraph: detected columns, grouping, chart type, sorting, filter and a match score, plus a warning that the query will be built as a pivot table. Everything it inferred is visible before anything is saved.",
        },
        {
          kind: "duo",
          items: [
            {
              src: `${S}/data-models.png`,
              caption:
                "Data models: two queries on the canvas with typed columns, and the join drawn as an object that states its direction and type.",
            },
            {
              src: `${S}/settings.png`,
              caption:
                "Settings: data sources with server, port and authentication, and the admin spine on the left. The New menu is split by intent: build, connect, schedule and share.",
            },
          ],
        },
      ],
    },
    {
      id: "uc-ai-analyst",
      n: "08",
      heading: "AI Data Analyst",
      maxim: "A follow-up question is a branch, not a turn.",
      standfirst:
        "Goal: question a fragment of an analysis without derailing the analysis. The branch is anchored to the fragment that provoked it and ends in exactly one of two ways, applied or discarded.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${S}/thread-diagram.png`,
          caption: "Main analysis thread on the left, the detail thread on the right. Apply returns one step with its reason; discard returns nothing.",
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/analyst-thread.png`,
          caption:
            "The detail thread in the product: the selection restated, its context as chips, the evidence card with Show SQL, and Apply or Discard at the bottom.",
        },
        {
          kind: "usecase",
          uc: {
            id: "UC-01",
            title: "Question a fragment of an analysis without derailing the analysis",
            actor: {
              name: "02 — The controller",
              body: "Reading an AI-generated analysis, and not yet willing to believe it.",
              note: "The state of mind is the requirement. Everything below exists to serve someone who is unconvinced.",
            },
            trigger: {
              body: "One phrase in the answer looks wrong: “overall revenue for the years 2024 and 2025”. 2025 is lower, and the reader cannot tell whether that is a fact or an artefact.",
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
                text: "The panel restates the selection verbatim and pins the context that produced it as chips: measure revenue, group by product category, filter booking date 2024–2025.",
                note: "The chips make the branch reproducible. Without them it is a question about nothing in particular.",
              },
              { n: "4", text: "The follow-up is asked inside the panel: why is 2025 lower than 2024 here?" },
              {
                n: "5",
                text: "The answer names the cause instead of restating the number: 2025 is not a full year, bookings load only to 30 November, so the comparison is not like-for-like.",
              },
              {
                n: "6",
                text: "An evidence card carries the same-period figures for both years with the delta, and the answer can be verified: Show SQL · Open as pivot · Copy.",
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
      n: "09",
      heading: "Queries",
      maxim: "If a property determines who can see an object, it belongs on the object, not one click away from it.",
      standfirst:
        "Goal: publish a query other people can use, and let everyone see who else can use it without opening a permissions dialog.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${S}/queries-shelf.png`,
          caption:
            "The shelf. A query arrives with the system it came from and how many fields it has, so anyone reusing it can see what they are standing on before they build.",
        },
        {
          kind: "duo",
          items: [
            {
              src: `${S}/queries-card.png`,
              caption:
                "The query itself: its SQL, a result preview, and a Governance panel with permissions, tags, lineage and validation next to it. Who can use it is part of the query, not a separate screen.",
            },
            {
              src: `${S}/queries-settings.png`,
              caption:
                "Settings holds the other half of the same permission model, so the reading screens and the admin screens cannot drift apart.",
            },
          ],
        },
        {
          kind: "usecase",
          uc: {
            id: "UC-02",
            title: "Publish a query other people can use, and see who can use it",
            actor: {
              name: "01 — The key user, publishing",
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
                text: "Each card states on its face who it reaches, who made it, when, and what it reads: Administrator, Moderator, Users; data model, author, date.",
                note: "Exposure is visible at rest.",
              },
              {
                n: "3",
                text: "Settings is organised by what an admin owns: system configuration (connections, column glossary, master data sources), users and permissions, and system (ERP links, version and updates).",
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
      n: "10",
      heading: "Data models",
      maxim: "Anything that changes the number a model produces is stated on the canvas, in words, before it is committed.",
      standfirst:
        "Goal: build a model other people's numbers can rest on. The same two queries joined two different ways produce two different numbers, and in a settings dialog that difference stays hidden until two people bring incompatible figures to the same meeting.",
      blocks: [
        {
          kind: "duo",
          items: [
            {
              src: `${S}/models-select.png`,
              caption:
                "Select query. The unit is a query, not a table: everything on the shelf was validated upstream. The builder composes what exists; it does not invent data.",
            },
            {
              src: `${S}/models-empty.png`,
              caption:
                "The empty canvas says what it expects: one validated query, then relationships, then validation. It offers exactly one action, so there is no second path into the flow.",
            },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/models-relationship.png`,
          caption:
            "Define relationships. The join states its direction and type, INNER or LEFT, and the same relationship exists as an editable row in the right panel, so the drawing is a view of the list rather than the only copy of it.",
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/models-anatomy.png`,
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
                body: "Everything on the shelf was already written and validated upstream, and each card carries its source system and field count: mssql, oracle, bigquery; 18, 25, 12 fields.",
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
    {
      id: "handoff",
      n: "11",
      heading: "Handoff",
      maxim: "When the system lives in code and the file only consumes it, there is no second copy to forget.",
      standfirst:
        "What development receives is working FOX code in the repository, reviewed and merged, not a spec sheet to rebuild from.",
      blocks: [
        {
          kind: "spec",
          caption:
            "The loop. By v3.0 the binding is the distribution model: FOX ships as a versioned package, and six products pick it up by moving a version. I own the component API and the tokens, and I review and merge every pull request into the library.",
          rows: [
            { key: "Figma → code", value: "Code Connect binds each design component to the implementation that ships it." },
            { key: "Code → Figma", value: "Work done in code is written back into the file over MCP from Claude Code, so the file follows the code instead of drifting from it." },
            { key: "Code → product", value: "The working prototype answers behaviour questions; its FOX code goes into the implementation." },
          ],
        },
        {
          kind: "spec",
          caption: "Three requirements that were in the tokens and templates from the start, not added in review.",
          rows: [
            { key: "Accessibility", value: "WCAG AA was the target from the start, not a review step at the end." },
            {
              key: "Colour modes",
              value: "Light, dark and high contrast, implemented in tokens rather than per screen. A screen cannot fall out of high contrast if it never hard-codes a colour.",
            },
            {
              key: "Language",
              value: "German is the default, English second. Layouts were tested against German compound words, where a layout that survives English quietly breaks. The screens on this page are the English variant.",
            },
          ],
        },
      ],
    },
    {
      id: "after-development",
      n: "12",
      heading: "After development",
      maxim: "A merged pull request is not a finished feature. It is the first time the design exists at all.",
      standfirst:
        "Handoff delivers FOX code, so what reaches review is already built from the right parts. What is left to check is what a component library cannot guarantee: composition, states, real data, German, and whether the requirement was met.",
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
      n: "13",
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
            { value: "1", label: "designer: the shape of the product, its rules and the component code it ships on" },
          ],
        },
        {
          kind: "passage",
          html: "<p><strong>What I will measure after release, and how.</strong> Each measure tests whether one rule on this page holds up with real users.</p>",
        },
        {
          kind: "points",
          items: [
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
