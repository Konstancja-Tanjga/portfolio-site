import type { CaseStudy } from "./types";
import { hubExploded } from "./exploded";

/**
 * Written to the same pattern as `bi.ts`: the words are text, the images are
 * screens. The Figma wall (page "BPH" in the portfolio file) was the source;
 * its frames ran 2–14 with gaps after three sections were cut late, so the
 * chapters here follow the kit's section stack (docs/case-study-kit/RULES.md)
 * and keep their original ids as deep-link targets.
 *
 * Screens of the new Hub are exported one by one into
 * /work/applus-best-practice-hub/screens/ with realistic template names. The
 * legacy modal is cropped from the audit board so that no customer or
 * employee name from the background table is visible.
 *
 * Product figures are public (applus-erp.de, cobus-concept.de); project
 * figures and the research description come from the author.
 */
const S = "/work/applus-best-practice-hub/screens";
const D = "/work/applus-best-practice-hub/device";

export const bph: CaseStudy = {
  slug: "applus-best-practice-hub",
  title: "APplus Best Practice Hub",
  what: "A library of process templates, moved out of a modal and onto cards",
  lead:
    "Over 50 field-tested Flowboard templates that customers install into a running ERP. The old Hub was a table in a modal dialog with a version dropdown on every row: nothing searchable, nothing filterable, and status as an unlabelled dot. I rebuilt it as a catalogue you can narrow, judge, and install without leaving the screen.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Best Practice", "Hub"],
    subline: "for APplus ERP",
    stamp: "TEMPLATE LIBRARY · SEARCH · FILTER · VERSIONING · INSTALL",
    credit: "Lead Designer, UX Engineer · Asseco Solutions · 2024–2025",
    shot: { src: "/work/applus-best-practice-hub/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Lead Designer, UX Engineer; the only designer on this product" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP, Best Practice Hub" },
    {
      label: "Design system",
      value: "FOX, Asseco's design system, which I lead: tokens, component API and the review gate. The migration from v2.3 to v3.0 with one other designer. The link opens the public v1 Storybook",
      href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs",
    },
    {
      label: "Team",
      value: "Six: two developers, an architect, a requirements engineer, a PM, and me",
    },
    { label: "Period", value: "August 2024 to August 2025, thirteen months" },
    { label: "Launch", value: "Shipped inside APplus ERP" },
    {
      label: "Product context",
      value: "APplus: ERP-System des Jahres, Gold in the User Experience category, 2025 and 2026",
    },
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
                "A library of over 50 field-tested Flowboard templates inside APplus ERP; a customer installs one instead of drawing the process from scratch.",
            },
            {
              key: "Problem",
              value:
                "Templates were installed from a modal table in the Board Designer: no search, no filter, a version dropdown per row, status as an unlabelled dot.",
            },
            {
              key: "My role",
              value:
                "The only designer. The audit of the old modal, the benchmark, the entry point, the card and list concepts, the signed-off user stories, the Hub's FOX components.",
            },
            {
              key: "Decision 1",
              value: "The Hub becomes a page of its own, opened from a link in the side drawer, not a dialog behind an import action.",
              shot: { frame: "macbook", src: `${D}/grid-1600.webp`, alt: "The catalogue as a page of its own, with Explore and Installed tabs and a filter field", to: "#what-the-audit-asked" },
            },
            {
              key: "Decision 2",
              value:
                "The card carries the decision: version, its state against the system, documentation per version. Installed boards with an update available sort first.",
              shot: { src: `${S}/concept.png`, alt: "Installed boards with their state and the update menu open on one of them", to: "#concept" },
            },
            {
              key: "Decision 3",
              value: "Installing from the new Hub costs no extra step compared with the old modal: version and install button sit side by side.",
              shot: { frame: "macbook", src: `${D}/detail-1600.webp`, alt: "A template's detail view with the latest version and Install now side by side", to: "#use-cases" },
            },
            {
              key: "Outcome",
              value:
                "Shipped inside APplus ERP. Evidence before release: the annotated audit, the benchmark, reviews with the PM and subject-matter experts. Use after release not measured.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      standfirst: "The Hub's three parts, one screen per slide.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The Best Practice Hub is <strong>a library of ready-made process templates inside APplus ERP</strong>: over 50 field-tested Flowboard templates for purchasing, production, warehousing, and accounting. Installing one is configuration, not custom code.</p>",
        },
        {
          kind: "carousel",
          items: [
            { src: `${D}/grid-2400.webp`, frame: "macbook", title: "The catalogue", body: "A card per template: process area, complexity, a short description, install." },
            { src: `${D}/detail-2400.webp`, frame: "macbook", title: "A template", body: "Latest version beside one install button; documentation per language; previous versions underneath." },
            { src: `${S}/concept.png`, title: "Installed boards", body: "Each with its documentation language and its state against the system; the update menu lists the versions it can move to." },
          ],
        },
      ],
    },
    {
      id: "hard-brief",
      n: "01a",
      heading: "Why this is a hard brief",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>A template lands in a system that is <strong>already running a company's processes</strong>, and the old modal handled every case below in one table.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>The install could not cost one step more than the old modal.</strong> A redesign that slows the primary action is a regression, however it looks.",
            "<strong>Every template has versions</strong>, and a customer may need an older release on purpose.",
            "<strong>Each version has its own documentation</strong>, so documentation belongs to the version, not to the board.",
          ],
        },
      ],
    },
    {
      id: "who-for",
      n: "02",
      heading: "Who it is for",
      standfirst:
        "Two audiences on one screen. APplus runs at over 2 000 customers, mostly mid-sized manufacturers with 50 to 1 000 employees.",
      blocks: [
        {
          kind: "spec",
          rows: [
            {
              key: "Installs",
              value:
                "An APplus consultant or a customer-side administrator. Searches the library, checks whether a template fits their APplus version, installs it.",
            },
            {
              key: "Publishes",
              value:
                "The person at Asseco who maintains the templates. Edits the same cards in place: name, process-area tags, description, documentation links, version.",
            },
          ],
          caption: "The installer has to judge a template quickly; the publisher needs the card to say exactly what was published.",
        },
      ],
    },
    {
      id: "audit",
      n: "03",
      heading: "Discovery and research",
      standfirst: "Before the rework, the Hub was a modal dialog inside the Board Designer.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The old table had six columns, <strong>and nothing in it could be searched, filtered, or judged without reading the row</strong>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>The audit, in place.</strong> I walked the existing screen action by action and annotated it on the board; five findings, each answered by a rule in chapter 04.",
            "<strong>The benchmark.</strong> A product with the same structural problem: a large catalogue, versioned items, and an install that must not break what is already running.",
            "<strong>Reviews</strong> of the findings with the PM and subject-matter experts.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/benchmark.webp`,
          folded: true,
          hotspots: [
            { x: 76, y: 10, text: "The catalogue: one card per app, with its state and one action." },
            { x: 62, y: 40, text: "Updates announced as a list, each with what changed." },
            { x: 62, y: 62, text: "An update runs after a confirmation dialog with its options." },
            { x: 56, y: 92, text: "Progress shown in place, with Cancel." },
          ],
          caption:
            "Benchmark, step by step: the Adobe Creative Cloud desktop app listing its catalogue, announcing updates, and running one behind a confirmation dialog.",
        },
      ],
    },
    {
      id: "what-the-audit-asked",
      n: "04",
      heading: "What the audit asked",
      maxim: "The first approved change was one line in the side drawer.",
      standfirst:
        "The questions, pinned to the places on the old modal that raised them; the table says what answered each one.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${S}/old-modal.webp`,
          hotspots: [
            { x: 32, y: 19, text: "No entry point of its own: the Hub sits behind an import action in the Board Designer." },
            { x: 43, y: 26, text: "Nothing searchable, nothing filterable: one table, read row by row." },
            { x: 54, y: 30, text: "Status as a coloured dot with no label. What does yellow mean?" },
            { x: 62, y: 30, text: "A version dropdown on every row, with documentation tied to none of them." },
          ],
          caption:
            "The starting point, “Board aus Best Practices Hub importieren”: one table in a modal, a version dropdown on every row, and status as a coloured dot with no label.",
        },
        {
          kind: "spec",
          caption: "What the audit found, and what answered it.",
          rows: [
            { key: "No entry point of its own", value: "A Best Practice Hub link in the side drawer, below Board Designer and Process Designer, opening in a new tab; nothing else in the drawer moved" },
            { key: "Nothing searchable or filterable", value: "Text search over name and description; complexity and the nine process-area tags from the product itself as filter chips" },
            { key: "A version dropdown on every row", value: "The version on the card, next to its state against the system" },
            { key: "Status as an unlabelled dot", value: "Labelled states: up to date, update available, legacy version" },
            { key: "Documentation not tied to a version", value: "A language select per version" },
          ],
        },
      ],
    },
    {
      id: "design-system",
      n: "05",
      heading: "Design system",
      standfirst:
        "The screen in its pieces, then how I worked on this product, drawn: one template card through the tools it passed. The project started on FOX 2.3 and moved to FOX 3.0 part-way through; I lead FOX, so on this product I was both a consumer of the system and the person changing it.",
      blocks: [
        { kind: "exploded", screen: hubExploded },
        {
          kind: "sheet",
          sheet: {
            tools: [
              { name: "Figma", mark: "figma", what: "the audit board, the signed-off screens" },
              { name: "Figma Make", mark: "figma", what: "the concept as a prototype" },
              { name: "Storybook", mark: "storybook", what: "FOX v3.0, the library as code" },
              { name: "Bitbucket", mark: "", glyph: "Bb", what: "pull requests" },
            ],
            stations: [
              { tool: "Figma", mark: "figma", file: "audit board", title: "The old modal, audited", body: "Four questions pinned where they arose; five findings, each answered by a rule.", image: { src: `${S}/old-modal.webp`, alt: "The legacy import modal: a table with a version dropdown on every row" } },
              { tool: "Figma Make", mark: "figma", file: "concept", title: "The concept, as a prototype", body: "Installed boards with their state on top, available boards as cards below.", image: { src: `${S}/concept.png`, alt: "The concept prototype: installed boards with their state, available boards as cards" } },
              { drawing: "figma", tool: "Figma", mark: "figma", file: "grid · detail · sign-off", title: "Signed off", body: "The catalogue and the template, the two screens the use cases are built on." },
              { drawing: "storybook", tool: "Storybook", mark: "storybook", file: "FOX v3.0", title: "Library first, product second", body: "BPH Card, card grid BPH, and secondary app bar BPH published in the library before the product used them. The rest is FOX: menu, select, tooltip." },
              { drawing: "merge", lines: ["Storybook", "Component API", "The review gate"], tool: "Bitbucket", mark: "", file: "pull request", title: "Through the review gate", body: "Tokens, component API, and the review gate are mine on FOX." },
              { tool: "APplus", mark: "", file: "Best Practice Hub", title: "Shipped inside APplus ERP", body: "The catalogue as it runs: Explore and Installed, a filter field, a card per template.", image: { src: `${S}/grid-flat.png`, alt: "The shipped catalogue of the Best Practice Hub" } },
            ],
            block: [
              ["Sheet", "How I worked on the Best Practice Hub"],
              ["Drawn for", "One template card, from the audited modal to the shipped catalogue"],
              ["Governed by", "five audit findings, each answered by a rule; FOX v3.0 tokens and component API; the review gate"],
              ["Repository", "Bitbucket"],
            ],
          },
        },
        {
          kind: "fold",
          title: "FOX under the product: v2.3 to v3.0",
          hint: "Open: two versions, what each one changed",
          blocks: [
            {
              kind: "evolution",
              items: [
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
                  moved: "What moved: the authority, from the file that describes the system to the code that is it. The Hub's three pieces were published in 3.0 before the product used them.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "concept",
      n: "06",
      heading: "Design and sign-off",
      maxim: "If something a customer already relies on can be updated, that is the first thing the screen shows.",
      standfirst: "The entry carries the decision: every card says what you need to know before you act on it. The concept, then the two signed-off screens, one per tab.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>An installed board</strong> shows the state of its version against the system, up to date or update available, and an update menu with the versions it can move to.",
            "<strong>Its documentation language</strong> is chosen per version, because documentation exists per version, not per board.",
            "<strong>An available board</strong> shows version, complexity, and process area, and says when it needs a newer APplus release.",
            "<strong>The sort rule:</strong> among installed boards, “update available” sorts first.",
          ],
        },
        {
          kind: "tabs",
          label: "Concept and signed-off screens",
          items: [
            {
              label: "Concept",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${S}/concept.png`,
                  caption:
                    "Installed boards on top, each with its documentation language and state, the update menu open on one. Available boards below as cards, marked where a template needs a newer APplus release.",
                },
              ],
            },
            {
              label: "Catalogue",
              blocks: [
                {
                  kind: "shot",
                  src: `${D}/grid-2400.webp`,
                  frame: "macbook",
                  caption: "Signed off: Explore and Installed as tabs, a filter field, a card per template with complexity, process area, and install action.",
                },
              ],
            },
            {
              label: "Template",
              blocks: [
                {
                  kind: "shot",
                  src: `${D}/detail-2400.webp`,
                  frame: "macbook",
                  caption: "Signed off: latest version and Install now side by side, German and English documentation, previous versions with their status.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "use-cases",
      n: "07",
      heading: "Two use cases",
      standfirst:
        "One per area, search and filter, then install and import; both protect what the old modal already did well, getting a board into the Board Designer. Open a tile and the use case unfolds to the right.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "uc-search",
              n: "01",
              title: "Search and filter",
              maxim: "Multiple tags resolve the same way everywhere.",
              standfirst: "Goal: narrow the catalogue to the templates that fit, with words and chips that combine into one list.",
              cover: { src: `${D}/grid-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-01",
                    title: "Narrow the catalogue down to the templates that fit",
                    actor: {
                      name: "The installer",
                      body: "A consultant or a customer administrator looking for a template for one process area.",
                    },
                    trigger: { body: "A process needs setting up; a template may already exist for it." },
                    precondition: {
                      body: "The Hub open from the side drawer, showing the templates for the customer's APplus version.",
                    },
                    flow: [
                      { n: "1", text: "Type into search: name and description." },
                      { n: "2", text: "Add process-area tags and complexity as chips; several at once." },
                      { n: "3", text: "Search and chips combine into one result list." },
                      { n: "4", text: "One action resets both." },
                    ],
                    postcondition: { body: "A short list of templates matching both the words and the chips." },
                    why: "Rejected: a filter whose logic depends on which chip was clicked. AND or OR is a product decision, but if the same selection returned different results in two places, nobody could trust the filter.",
                    rule: "Multiple tags resolve the same way everywhere.",
                  },
                },
              ],
            },
            {
              id: "uc-install",
              n: "02",
              title: "Install and import",
              maxim: "A redesign must not add a step to the primary action.",
              standfirst: "Goal: install a template, or a specific older version, with no more steps than the old modal took.",
              cover: { src: `${D}/detail-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-02",
                    title: "Install a template, or a specific older version",
                    actor: {
                      name: "The installer",
                      body: "Installing a new Flowboard, or updating one already in use.",
                    },
                    trigger: { body: "A template fits, or an installed board shows “update available”." },
                    precondition: { body: "A template picked in the catalogue." },
                    flow: [
                      { n: "1", text: "The detail view: latest version and install action side by side." },
                      { n: "2", text: "Install sends the board straight into the Board Designer, as the old modal did." },
                      { n: "3", text: "The previous-versions table covers a customer who deliberately needs an older release." },
                    ],
                    exits: [
                      { label: "Install latest", text: "One action, no extra step compared with the old modal." },
                      { label: "Install an older version", text: "From the previous-versions table, with its own documentation." },
                    ],
                    postcondition: { body: "The board in the Board Designer, installed or updated exactly as before the redesign." },
                    why: "Rejected: a detail view that separates judging a template from installing it. Direct installation into the Board Designer had to keep working as it did, so version and action sit next to each other.",
                    rule: "A redesign must not add a step to the primary action.",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "results",
      n: "08",
      heading: "What it adds up to",
      standfirst: "The Hub shipped inside APplus ERP. Product figures are public (applus-erp.de and cobus-concept.de); use after release was not measured.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "2 000+", label: "customers running APplus ERP" },
            { value: "50+", label: "field-tested process templates in the Hub" },
            { value: "30", label: "years of APplus in the ERP market" },
          ],
        },
        {
          kind: "joint",
          question: "What will I measure next, and how?",
          answers: [
            "<strong>How long an install takes</strong> from opening the Hub, against the old modal.",
            "<strong>How many boards with “update available”</strong> are updated.",
            "<strong>Which process-area tags people filter by</strong>, to see whether the nine areas match how customers look.",
          ],
        },
      ],
    },
  ],
};
