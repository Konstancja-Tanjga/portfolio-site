import type { CaseStudy } from "./types";

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
      value: "FOX, which I own. The migration from v2.3 to v3.0, with one other designer",
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
              key: "Context",
              value:
                "The Best Practice Hub is a library of over 50 field-tested Flowboard templates inside APplus ERP. A customer installs one into a running system instead of drawing the process from scratch.",
            },
            {
              key: "Problem",
              value:
                "Customers installed templates from a modal table inside the Board Designer: no search, no filter, a version dropdown on every row, and status as an unlabelled dot.",
            },
            {
              key: "My role and scope",
              value:
                "The only designer on the product, with two developers, an architect, a requirements engineer, and a PM. The audit of the old modal, the benchmark, the entry point, the card and list concepts, the user stories designed and signed off, and the components the Hub added to FOX.",
            },
            {
              key: "Decision 1",
              value: "One entry point of its own: a link in the side drawer, below Board Designer and Process Designer.",
            },
            {
              key: "Decision 2",
              value:
                "The card carries the decision: version, the state of that version against the system, and documentation per version. Installed boards with an update available sort first.",
            },
            {
              key: "Decision 3",
              value: "Installing from the new Hub costs no extra step compared with the old modal.",
            },
            {
              key: "Outcome",
              value:
                "Shipped inside APplus ERP. Evidence before release: an annotated audit of the old screen, a benchmark of comparable libraries, and reviews with the PM and subject-matter experts. Use after release was not measured.",
            },
            {
              key: "Period and team",
              value:
                "August 2024 to August 2025, thirteen months. Six people: two developers, an architect, a requirements engineer, a PM, and me.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim: "A catalogue you can narrow, judge, and install from, without leaving the screen.",
      standfirst: "What the Hub is and what I owned on it, then its parts, one screen per slide.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The Best Practice Hub is <strong>a library of ready-made process templates inside APplus ERP</strong>: over 50 field-tested Flowboard templates for purchasing, production, warehousing, and accounting. A customer installs one into a running system instead of drawing the process from scratch, so the work is configuration rather than custom code.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>The audit</strong> of the old modal, action by action, and <strong>the benchmark</strong> of comparable libraries.",
            "<strong>The entry point</strong>, and <strong>the card and list concepts</strong> for the catalogue.",
            "<strong>The user stories</strong>, designed and signed off; two of them are on this page.",
            "<strong>The components the Hub added to FOX</strong>: proposed, built, and published in the library before the product used them.",
          ],
        },
        {
          kind: "carousel",
          items: [
            { src: `${D}/grid-2400.webp`, frame: "macbook", title: "The catalogue", body: "Every template is a card with its process area, complexity, a short description, and an install action." },
            { src: `${D}/detail-2400.webp`, frame: "macbook", title: "A template", body: "The latest version and one install button side by side, what the template includes, documentation per language, and the previous versions underneath." },
            { src: `${S}/concept.png`, title: "Installed boards", body: "Each installed board with its documentation language and its state against the system; the update menu lists the versions it can move to." },
          ],
        },
      ],
    },
    {
      id: "hard-brief",
      n: "01a",
      heading: "Why this is a hard brief",
      maxim: "Installing into the Board Designer had to keep working exactly as it did, for new Flowboards and for updates.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>A template lands in a system that is <strong>already running a company's processes</strong>, and the old modal handled every case below in one table.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>The install could not cost one step more than the old modal.</strong> A redesign that makes the primary action slower is a regression, however much better it looks.",
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
        "Two audiences meet on one screen. APplus runs at over 2 000 customers, mostly mid-sized manufacturers with 50 to 1 000 employees.",
      blocks: [
        {
          kind: "spec",
          rows: [
            {
              key: "Installs",
              value:
                "An APplus consultant or a customer-side administrator who sets a workflow up. Searches the library, checks whether a template fits their APplus version, and installs it.",
            },
            {
              key: "Publishes",
              value:
                "The person at Asseco who publishes and maintains the templates. Edits the same cards in place: name, process-area tags, description, documentation links, version.",
            },
          ],
          caption: "The installer needs to judge a template quickly; the publisher needs the card to say exactly what was published.",
        },
      ],
    },
    {
      id: "audit",
      n: "03",
      heading: "Discovery and research",
      maxim: "Before the rework, the Best Practice Hub was a modal dialog inside the Board Designer.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The old table had six columns, <strong>and nothing in it could be searched, filtered, or judged without reading the row</strong>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Six columns.</strong> Name, description, installed version, status, available versions, and action.",
            "<strong>The audit, in place.</strong> I walked the existing screen action by action and annotated it on the board.",
            "<strong>The benchmark.</strong> Products that solve the same structural problem: a large catalogue, versioned items, and an install step that must not break what is already running.",
            "<strong>Reviews.</strong> The findings went through reviews with the PM and subject-matter experts.",
          ],
        },
        {
          kind: "stats",
          items: [
            { value: "6", label: "columns in the old table: name, description, installed version, status, available versions, and action" },
            { value: "5", label: "audit findings, each answered by a rule in chapter 04" },
            { value: "1", label: "product benchmarked step by step: the Adobe Creative Cloud desktop app" },
            { value: "9", label: "process-area tags, taken from the product itself" },
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
            "Benchmark, step by step: how the Adobe Creative Cloud desktop app lists its catalogue, announces updates, and runs an update with a confirmation dialog.",
        },
      ],
    },
    {
      id: "what-the-audit-asked",
      n: "04",
      heading: "What the audit asked",
      standfirst:
        "The questions, pinned to the places on the old modal that raised them. The table says what answered each one.",
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
            { key: "No entry point of its own; the Hub sat behind a menu action", value: "A Best Practice Hub link in the side drawer, opening in a new tab" },
            { key: "Nothing searchable or filterable", value: "Text search over name and description, with tags and complexity as filter chips" },
            { key: "A version dropdown on every row", value: "The version moves onto the card, next to the state of that version against the system" },
            { key: "Status as an unlabelled dot", value: "Labelled states: up to date, update available, legacy version" },
            { key: "Documentation not tied to a version", value: "A language select per version, because documentation exists per version, not per board" },
          ],
        },
      ],
    },
    {
      id: "exploration",
      n: "05",
      heading: "First prototypes",
      maxim: "The first approved change was one line in the side drawer.",
      blocks: [
        {
          kind: "flow",
          stages: [
            {
              title: "An entry point",
              body: "A Best Practice Hub link in the side drawer, below Board Designer and Process Designer, opening in a new browser tab. Nothing else in the drawer moved.",
            },
            {
              title: "Narrowing the catalogue",
              body: "How you get from over 50 templates to the few that fit: text search, process-area tags, and complexity.",
            },
            {
              title: "What one item must say",
              body: "How much a single card has to tell you before you commit to installing it: version, state against the system, documentation.",
            },
          ],
          note:
            "The process areas came from the product itself: nine German tags, from Produktion and Lager und Logistik through to Qualitätsmanagement and Projektverwaltung.",
        },
      ],
    },
    {
      id: "design-system",
      n: "06",
      heading: "Design system",
      standfirst:
        "The project started on FOX 2.3 and moved to FOX 3.0 part-way through. I own FOX; the 3.0 migration I did with one other designer, so on this product I was both a consumer of the system and the person changing it.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The screens are assembled from <strong>named, reusable pieces rather than one-off layouts</strong>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Three pieces are the Hub's own:</strong> BPH Card, card grid BPH, and secondary app bar BPH.",
            "<strong>The rest is FOX:</strong> the menu, the select, and the tooltip.",
            "<strong>Library first, product second.</strong> Anything the Hub needed that 3.0 did not have yet was proposed, built, and published in the library before the product used it.",
          ],
        },
        {
          kind: "evolution",
          items: [
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
              moved: "What moved was the authority: from the file that describes the system to the code that is the system. The Hub's three pieces were published in 3.0 before the product used them.",
            },
          ],
        },
        {
          kind: "spec",
          caption: "Tools on this project.",
          rows: [
            { key: "design", value: "Figma, Figma Make" },
            { key: "code", value: "Bitbucket, Codex" },
            { key: "system", value: "Storybook, Chromatic" },
          ],
        },
      ],
    },
    {
      id: "concept",
      n: "07",
      heading: "Design and sign-off",
      maxim: "If something a customer already relies on can be updated, that is the first thing the screen shows.",
      standfirst: "The concept for the installed and available boards, then the two signed-off screens the use cases are built on.",
      blocks: [
        {
          kind: "passage",
          html: "<p><strong>The entry carries the decision.</strong> Every card says what you need to know before you act on it.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>An installed board</strong> shows the state of its version against the system, up to date or update available, and an update menu with the versions it can move to.",
            "<strong>Its documentation language</strong> is chosen per version, because documentation exists per version, not per board.",
            "<strong>An available board</strong> shows its version, complexity, and process area, and says when it needs a newer APplus release.",
            "<strong>The sort rule:</strong> in installed boards, “installed and update available” sorts first.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/concept.png`,
          caption:
            "The concept. Installed boards on top, each with its documentation language and state, and the update menu open on one of them. Available boards below as cards, marked where a template needs a newer APplus release.",
        },
        {
          kind: "duo",
          items: [
            {
              src: `${D}/grid-2400.webp`,
              frame: "macbook",
              caption: "Signed off: the catalogue. Explore and Installed as tabs, a filter field, and a card per template with its complexity, process area, and install action.",
            },
            {
              src: `${D}/detail-2400.webp`,
              frame: "macbook",
              caption: "Signed off: a template. Latest version and Install now side by side, German and English documentation, and the previous versions with their status.",
            },
          ],
        },
      ],
    },
    {
      id: "use-cases",
      n: "08",
      heading: "Two use cases",
      maxim: "Both protect the thing the old modal already did well: getting a board into the Board Designer.",
      standfirst:
        "One per area: search and filter, then install and import. Open a tile and the use case unfolds to the right: the screen, the template, the rule it sets.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "uc-search",
              n: "01",
              title: "Search and filter",
              maxim: "Multiple tags resolve the same way everywhere.",
              standfirst: "Goal: narrow the catalogue down to the templates that fit, with words and chips that combine into one list.",
              cover: { src: `${D}/grid-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${D}/grid-2400.webp`,
                  frame: "macbook",
                  caption:
                    "The catalogue with the filter field in the app bar. Complexity and process area are printed on every card, so the chips that narrow the list are the same words the cards carry.",
                },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-01",
                    title: "Narrow the catalogue down to the templates that fit",
                    actor: {
                      name: "The installer",
                      body: "An APplus consultant or a customer administrator looking for a template for one process area.",
                    },
                    trigger: { body: "A process needs setting up, and a template may already exist for it." },
                    precondition: {
                      body: "The Hub is open from the side drawer, showing the templates available for the customer's APplus version.",
                    },
                    flow: [
                      { n: "1", text: "Type into search. Text search runs across name and description." },
                      { n: "2", text: "Add process-area tags and complexity as filter chips. Several tags can be active at once." },
                      { n: "3", text: "Search and chips combine into one result list." },
                      { n: "4", text: "One action resets search and chips together." },
                    ],
                    postcondition: { body: "A short list of templates that match both the words and the chips." },
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
                  kind: "shot",
                  width: "wall",
                  src: `${D}/detail-2400.webp`,
                  frame: "macbook",
                  caption:
                    "The detail view: the latest version and one install button side by side, what the template includes, documentation in German and English, and the previous versions underneath with their status.",
                },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-02",
                    title: "Install a template, or a specific older version",
                    actor: {
                      name: "The installer",
                      body: "Installing a new Flowboard, or updating one that is already in use.",
                    },
                    trigger: { body: "A template fits, or an installed board shows “update available”." },
                    precondition: { body: "The installer has picked a template in the catalogue." },
                    flow: [
                      { n: "1", text: "The detail view shows the latest version and the install action side by side." },
                      { n: "2", text: "Install sends the board straight into the Board Designer, as the old modal did." },
                      { n: "3", text: "The previous-versions table underneath covers the case where a customer deliberately needs an older release." },
                    ],
                    exits: [
                      { label: "Install latest", text: "One action, no extra step compared with the old modal." },
                      { label: "Install an older version", text: "Chosen from the previous-versions table, with its own documentation." },
                    ],
                    postcondition: { body: "The board is in the Board Designer, installed or updated exactly as before the redesign." },
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
      n: "10",
      heading: "What it adds up to",
      standfirst: "The Hub shipped inside APplus ERP. Product figures are public (applus-erp.de and cobus-concept.de); project figures are mine.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "2 000+", label: "customers running APplus ERP" },
            { value: "50+", label: "field-tested process templates in the Hub" },
            { value: "30", label: "years of APplus in the ERP market" },
          ],
        },
        {
          kind: "stats",
          items: [
            { value: "13", label: "months, August 2024 to August 2025" },
            { value: "6", label: "people on the team, one designer" },
            { value: "2", label: "FOX versions, 2.3 then 3.0" },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>APplus was named <strong>ERP System of the Year 2025</strong> and took Gold in the User Experience category, awarded in Frankfurt am Main on 13 October 2025, after this work shipped.</p>",
        },
        {
          kind: "joint",
          question: "What will I measure next, and how?",
          answers: [
            "<strong>How long an install takes</strong> from opening the Hub, against the old modal.",
            "<strong>How many installed boards with “update available” are updated.</strong>",
            "<strong>Which process-area tags people filter by</strong>, to see whether the nine areas match how customers look for templates.",
          ],
        },
      ],
    },
  ],
};
