import type { CaseStudy } from "./types";

/**
 * Written to the same pattern as `bi.ts`: the words are text, the images are
 * screens. The Figma wall (page "BPH" in the portfolio file) was the source;
 * its frames ran 2–14 with gaps after three sections were cut late, so the
 * chapters here are numbered in reading order instead.
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

export const bph: CaseStudy = {
  slug: "applus-best-practice-hub",
  title: "APplus Best Practice Hub",
  what: "A library of process templates, moved out of a modal and onto cards",
  lead:
    "Over 50 field-tested Flowboard templates that customers install into a running ERP. The old Hub was a table in a modal dialog with a version dropdown on every row: nothing searchable, nothing filterable, and status as an unlabelled dot. I rebuilt it as a catalogue you can narrow, judge and install without leaving the screen.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Best Practice", "Hub"],
    subline: "for APplus ERP",
    stamp: "TEMPLATE LIBRARY · SEARCH · FILTER · VERSIONING · INSTALL",
    credit: "Lead Product Designer · Asseco Solutions · 2024–2025",
    shot: { src: "/work/applus-best-practice-hub/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Lead Product Designer, sole designer on the product" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP — Best Practice Hub" },
    {
      label: "Design system",
      value: "FOX, which I own; the v2.3 → v3.0 migration done with one other designer",
      href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs",
    },
    {
      label: "Team",
      value: "2 developers, an architect, a requirements engineer, a PM and one designer",
    },
    { label: "Period", value: "August 2024 – August 2025, thirteen months; shipped" },
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
                "Customers installed process templates from a modal table inside the Board Designer: no search, no filter, a version dropdown on every row and status as an unlabelled dot.",
            },
            {
              key: "My part",
              value:
                "The audit of the old modal, the benchmark, the entry point, the card and list concepts, the user stories designed and signed off (two of them shown here), and the components the Hub added to FOX.",
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
            { key: "Evidence", value: "An annotated audit of the old screen, a benchmark of comparable libraries, and reviews with the PM and subject-matter experts." },
            { key: "Shipped", value: "Yes, inside APplus ERP." },
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
            "<p>The Best Practice Hub is a library of ready-made process templates inside APplus ERP: over 50 field-tested Flowboard templates for purchasing, production, warehousing and accounting. A customer installs one into a running system instead of drawing the process from scratch, so the work is configuration rather than custom code.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/grid.png`,
          caption:
            "The Hub as a catalogue: every template is a card with its process area, complexity, a short description and an install action.",
        },
      ],
    },
    {
      id: "hard-brief",
      n: "02",
      heading: "Why this is a hard brief",
      maxim: "Installing into the Board Designer had to keep working exactly as it did, for new Flowboards and for updates.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>A template lands in a system that is already running a company's processes. Every template has versions, the versions have their own documentation, and a customer may need an older release on purpose. The old modal handled all of that in one table.</p><p>The constraint: reaching the install from the new screen could not cost a single step more than the old modal. A redesign that makes the primary action slower is a regression, however much better it looks.</p>",
        },
      ],
    },
    {
      id: "who-for",
      n: "03",
      heading: "Who it is for",
      standfirst: "Two audiences meet on one screen. APplus runs at over 2,000 customers, mostly mid-sized manufacturers with 50 to 1,000 employees.",
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
      n: "04",
      heading: "Audit and research",
      maxim: "Before the rework, the Best Practice Hub was a modal dialog inside the Board Designer.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${S}/old-modal.webp`,
          caption:
            "The starting point, “Board aus Best Practices Hub importieren”: one table in a modal, a version dropdown on every row, status as a coloured dot with no label.",
        },
        {
          kind: "passage",
          html:
            "<p>The table had six columns: name, description, installed version, status, available versions and action. Nothing was searchable and nothing was filterable, and the only way to judge whether a template fitted your system was to read the row and know what the dot meant.</p><p>I walked the existing screen action by action and annotated it in place. Then I benchmarked products that solve the same structural problem: a large catalogue, versioned items, and an install step that must not break what is already running. The findings went through reviews with the PM and subject-matter experts.</p>",
        },
        {
          kind: "shot",
          width: "column",
          src: `${S}/benchmark.webp`,
          caption: "Benchmark: how a comparable library handles its catalogue, updates and installs, step by step.",
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
      heading: "Exploration",
      maxim: "The first approved change was one line in the side drawer.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The Hub had no entry point of its own; it lived behind a menu action in the Board Designer. The first approved change added a Best Practice Hub link to the side drawer, below Board Designer and Process Designer, opening in a new browser tab. Nothing else in the drawer moved.</p><p>From there I explored the two decisions the screen has to support: how you narrow a catalogue down, and how much a single item has to tell you before you commit to installing it. The process areas came from the product itself: nine German tags, from Produktion and Lager und Logistik through to Qualitätsmanagement and Projektverwaltung.</p>",
        },
      ],
    },
    {
      id: "concept",
      n: "06",
      heading: "Design concept",
      maxim: "If something a customer already relies on can be updated, that is the first thing the screen shows.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The entry carries the decision. An installed board shows the state of its version against the system (up to date, or update available), an update menu with the versions it can move to, and the language of its documentation, because documentation exists per version, not per board. An available board shows its version, complexity and process area, and says when it needs a newer APplus release.</p><p>The sort rule from the concept: in installed boards, “installed and update available” sorts first.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/concept.png`,
          caption:
            "Installed boards on top, each with its documentation language and state, and the update menu open on one of them. Available boards below as cards, marked where a template needs a newer APplus release.",
        },
      ],
    },
    {
      id: "uc-search",
      n: "07",
      heading: "Search and filter",
      blocks: [
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
            why: "AND or OR is a product decision, but it cannot change depending on which chip was clicked. If the same selection returned different results in two places, nobody could trust the filter.",
            rule: "Multiple tags resolve the same way everywhere.",
          },
        },
      ],
    },
    {
      id: "uc-install",
      n: "08",
      heading: "Install and import",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${S}/detail.png`,
          caption:
            "The detail view: the latest version and one install button side by side, what the template includes, documentation in German and English, and the previous versions underneath.",
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
            why: "Direct installation into the Board Designer had to keep working as it did. The detail view puts version and action next to each other so that judging a template does not add a step to installing it.",
            rule: "A redesign must not add a step to the primary action.",
          },
        },
      ],
    },
    {
      id: "design-system",
      n: "09",
      heading: "Design system",
      standfirst:
        "The project started on FOX 2.3 and moved to FOX 3.0 part-way through. I own FOX; the 3.0 migration I did with one other designer, so on this product I was both a consumer of the system and the person changing it.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The screens are assembled from named, reusable pieces rather than one-off layouts: <strong>BPH Card</strong>, <strong>card grid BPH</strong> and <strong>secondary app bar BPH</strong>, alongside the FOX menu, select and tooltip. Anything the Hub needed that 3.0 did not have yet was proposed, built and published in the library first, and only then used in the product.</p>",
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
      id: "results",
      n: "10",
      heading: "What it adds up to",
      standfirst: "The Hub shipped inside APplus ERP.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "2,000+", label: "customers running APplus ERP" },
            { value: "50+", label: "field-tested process templates in the Hub" },
            { value: "30", label: "years of APplus in the ERP market" },
          ],
        },
        {
          kind: "stats",
          items: [
            { value: "13", label: "months, August 2024 – August 2025" },
            { value: "6", label: "people on the team, one designer" },
            { value: "2", label: "FOX versions, 2.3 then 3.0" },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>APplus was named ERP System of the Year 2025 and took Gold in the User Experience ERP category, awarded in Frankfurt am Main on 13 October 2025, after this work shipped. Product figures are public: applus-erp.de and cobus-concept.de/produkte/applus. Project figures are mine.</p><p><strong>What I would measure next.</strong> How long an install takes from opening the Hub, against the old modal; how many installed boards with “update available” are actually updated; and which process-area tags people filter by, to see whether the nine areas match how customers look for templates.</p>",
        },
      ],
    },
  ],
};
