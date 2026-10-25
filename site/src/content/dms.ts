import type { CaseStudy } from "./types";
import { documentsExploded } from "./exploded";

/**
 * Chapter numbers are this page's own, 00–08, in the same skeleton as
 * APplus Analytics (bi.ts). The Figma wall these chapters came from is the
 * Documents page of the portfolio file, frames 12–22 with 18a.
 *
 * The words are text, not pictures of text. The wall used to be thirteen PNG
 * exports with every paragraph typeset inside them, which a reader could not
 * search, select or enlarge on a phone, and a screen reader could not read.
 * Apart from the cover, images are screens and diagrams only, cropped from
 * those frames into /work/applus-documents/screens/.
 *
 * Every fact on this page is taken from the frames or from the earlier
 * version of this file. Where a frame was vague, the text stays vague.
 * There are no use-case chapters and no persona cards, because the frames
 * have no use cases and describe the audiences without personas.
 *
 * Rebuilt 25 October 2026 the Analytics way, then cut a second time the
 * same day: 00 is the sixty-second page with the three decisions as
 * pictures, the tool chain is the sheet in 04, the sign-off screens sit
 * behind one row of tabs, and nothing is said twice. docs/copy-edit/log-dms.md
 * has the cuts.
 */
const S = "/work/applus-documents/screens";
const D = "/work/applus-documents/device";
const C = "/work/applus-documents/clips";

export const dms: CaseStudy = {
  slug: "applus-documents",
  title: "APplus Documents",
  what: "Document management for the same platform, designed from zero",
  lead:
    "Versioning, metadata, search, permissions, and retention over documents that lived in network drives and mail threads, under German commercial retention law, where a deleted document is not gone.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["APplus", "Documents"],
    subline: "for APplus ERP",
    stamp: "VERSIONING · METADATA · SEARCH · PERMISSIONS · RETENTION",
    credit: "Lead Designer, UX Engineer · Asseco Solutions · 2026",
    art: { src: "/work/applus-documents/cover-art.webp" },
    shot: { src: "/work/applus-documents/00-cover.png" },
    motif: "documents",
    layers: [
      { src: `${D}/list-2400.webp`, label: "Documents" },
      { src: `${D}/detail-invoice-2400.webp`, label: "A document" },
      { src: `${D}/filters-2400.webp`, label: "Filters" },
      { src: `${D}/document-type-2400.webp`, label: "Document types" },
      { src: `${D}/retention-2400.webp`, label: "Retention" },
      { src: `${D}/permission-rule-2400.webp`, label: "Permission rules" },
    ],
  },
  meta: [
    { label: "Role", value: "Lead Designer, UX Engineer; the only designer on this product" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP, Documents" },
    {
      label: "Design system",
      value: "FOX, Asseco's design system, which I lead: tokens, component API and the review gate. The migration from v2.3 to v3.0 with one other designer. The link opens the public v1 Storybook",
      href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs",
    },
    {
      label: "Team",
      value: "Eight: three developers, a requirements engineer, a researcher, QA, a PM, and me",
    },
    { label: "Period", value: "October 2025 to August 2026, eleven months" },
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
                "The document management module inside APplus ERP: versions, metadata, search, permissions, and retention over the documents an ERP produces and receives.",
            },
            {
              key: "Problem",
              value:
                "Documents lived in network drives and mail threads, and the module had to satisfy German retention law, where a deleted document is not gone.",
            },
            {
              key: "My role",
              value:
                "The only designer: the shape of the product, the flows, the competitive analysis, the Figma Make prototypes, sign-off against every requirement, review of every build.",
            },
            {
              key: "Decision 1",
              value:
                "Filtering is the retrieval strategy, because browsing fails at tens of thousands of documents; search and filters say which field matched.",
              shot: { frame: "macbook", src: `${D}/filters-1600.webp`, alt: "Metadata filters typed by field over the document list", to: "#sign-off" },
            },
            {
              key: "Decision 2",
              value:
                "Audit-relevant history is part of the document template: the same identity panel and the same five tabs, version history and retention among them.",
              shot: { frame: "macbook", src: `${D}/detail-info-1600.webp`, alt: "A document with its identity panel and five-tab band", to: "#sign-off" },
            },
            {
              key: "Decision 3",
              value:
                "Every frame carries a REQ identifier, its requirement text, and a dated sign-off, so a frame names its requirement and a requirement finds its frame.",
              shot: { frame: "macbook", src: `${D}/documentation-1600.webp`, alt: "A documented frame with its Jira link, acceptance criteria, and sign-off", to: "#sign-off" },
            },
            {
              key: "Outcome",
              value:
                "A paper trail an auditor can walk in either direction; six SME sessions before specification; the patterns this product needed went into FOX and came back at a pinned version.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim:
        "Finding a file is a permissions problem, deleting one is a compliance problem, and a search box solves neither.",
      blocks: [
        {
          kind: "passage",
          html: "<p>For several hundred mid-sized and large manufacturers across Germany, Italy, and Austria, each with an archive in the tens of thousands of documents.</p>",
        },
        {
          kind: "carousel",
          items: [
            { src: `${D}/list-2400.webp`, frame: "macbook", title: "Documents", body: "346 documents by type, each row saying where the search matched." },
            { src: `${D}/list-bulk-2400.webp`, frame: "macbook", title: "Bulk actions", body: "All versions or latest only, ZIP, metadata export, tag; delete set apart in red." },
            { src: `${D}/detail-invoice-2400.webp`, frame: "macbook", title: "A document", body: "Identity on top, the details in five tabs." },
            { src: `${D}/detail-versions-2400.webp`, frame: "macbook", title: "Version history", body: "Author, number, and date per version." },
            { src: `${D}/document-type-2400.webp`, frame: "macbook", title: "Document types", body: "Naming rules, allowed extensions, a metadata schema, the retention policy." },
            { src: `${D}/permission-rule-2400.webp`, frame: "macbook", title: "Permission rules", body: "A role, Grant or Deny, a scope, and predicates on metadata." },
          ],
        },
      ],
    },
    {
      id: "discovery",
      n: "02",
      heading: "Discovery and research",
      standfirst:
        "Business requirements from the stakeholders, then six sessions with internal subject-matter experts, before anything was specified.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Three questions first.</strong> What kinds of documents move through the system, who exchanges them with whom, and where things go wrong today.",
            "<strong>A competitor annotated in place</strong>: where the actions sit, how many clicks reach a document, which choices break under retention law.",
            "<strong>Decisions borrowed, not styling</strong>, from products with dense data, many roles, and long lists.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/ref-finance-app.png`,
          hotspots: [
            { x: 19, y: 18, text: "Open tasks counted per company before anything is offered to do." },
            { x: 63, y: 25, text: "A landing surface summarises state before it offers actions." },
            { x: 67, y: 72, text: "A table readable at a few hundred rows, set for the archive, not the demo." },
          ],
          caption: "A finance tool: tasks counted first, then an inbox table of invoices.",
        },
      ],
    },
    {
      id: "prototypes",
      n: "03",
      heading: "Prototypes",
      standfirst:
        "Disagreements happened in the Figma Make prototype, one step before REQ identifiers and sign-off made them expensive.",
      blocks: [
        {
          kind: "tabs",
          label: "Three walks through the dossier prototype",
          items: [
            {
              label: "A dossier",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  frame: "macbook",
                  width: "wall",
                  src: `${C}/dossier-details.mp4`,
                  poster: `${C}/dossier-details.webp`,
                  title: "A dossier and what defines it",
                  caption: "Company 466 and what defines it: CompanyID, the 16 document types it accepts, its sub-dossier types.",
                },
              ],
            },
            {
              label: "Down to a document",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  frame: "macbook",
                  width: "wall",
                  src: `${C}/dossier-to-document.mp4`,
                  poster: `${C}/dossier-to-document.webp`,
                  title: "From a dossier down to a document, and back up",
                  caption: "Company 466, a Customer Invoice File, invoice CI-2026-008874, and its Dossiers tab listing the five dossiers that hold it.",
                },
              ],
            },
            {
              label: "Nested search",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  frame: "macbook",
                  width: "wall",
                  src: `${C}/dossier-search-nested.mp4`,
                  poster: `${C}/dossier-search-nested.webp`,
                  title: "Search and filters across nested dossiers",
                  caption: "Scope switched to Nested: a search for Northwind reaches the sub-dossiers, each match saying which property matched.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "design-system",
      n: "04",
      heading: "Design system",
      standfirst:
        "I lead FOX, so on this product I was both a consumer of the system and its maintainer.",
      blocks: [
        {
          kind: "sheet",
          sheet: {
            tools: [
              { name: "Confluence, Jira", mark: "", glyph: "REQ", what: "the specification and its tasks" },
              { name: "Figma Make", mark: "figma", what: "clickable in hours" },
              { name: "Figma", mark: "figma", what: "Dev Mode, Code Connect, sign-off" },
              { name: "FOX", mark: "", glyph: "FOX", what: "Asseco's design system, v2.3" },
              { name: "Pull requests", mark: "", glyph: "PR", what: "design review on the preview build" },
              { name: "Codex", mark: "openai", what: "prototypes in code; Figma MCP" },
            ],
            stations: [
              { tool: "Confluence, Jira", mark: "", file: "REQ-984 · PX-1774", title: "Written up front", body: "The requirement numbered in the specification, the Jira task its unit of work.", image: { src: `${S}/traceability.png`, alt: "The traceability chain: Confluence specification, requirement REQ-984, Jira task PX-1774, Figma frame, dated sign-off" } },
              { tool: "Figma Make", mark: "figma", file: "a settled requirement", title: "Clickable in hours", body: "Walked end to end with the PM, the requirements engineer, and the SMEs; weak options dropped on the spot.", image: { src: `${S}/proto-dossier-list.png`, alt: "The dossier plan configuration in the Figma Make prototype: Customer, Order, and Project as system baselines" } },
              { tool: "Figma", mark: "figma", file: "REQ-984 · Approved", title: "Drawn, tied to its requirement", body: "The REQ, the requirement text, and a dated sign-off on every frame; Dev Mode binds each component to its code by Code Connect.", image: { src: `${S}/documentation.png`, alt: "A documented frame: the doc band with the Jira link and acceptance criteria, the screens with annotations" } },
              { tool: "FOX", mark: "", file: "secondary app bar", title: "The pattern goes into the system", body: "A composition invented for one screen is reviewed, named, and versioned into FOX; the product consumes it back at a pinned version.", image: { src: `${S}/fox-docs.png`, alt: "FOX documentation for the secondary app bar: status, owner, reviewer, the components it uses, its variant per application, and the demo in light, dark, and client colour" } },
              { drawing: "merge", lines: ["Preview build, beside the frame", "Design QA against the REQ, as every role", "Delete, restore, retention walked as an auditor"], tool: "Pull request", mark: "", file: "preview build", title: "Reviewed on the running build", body: "Every pull request that changes a screen, by me; design acceptance is a dated status on the ticket." },
              { drawing: "code", tool: "Codex", mark: "openai", file: "Figma MCP", title: "The file follows the code", body: "An accepted deviation is written back into the frame and its annotations the same week." },
            ],
            block: [
              ["Sheet", "How I worked on Documents"],
              ["Drawn for", "One requirement, from the specification to the reviewed build"],
              ["Governed by", "GoBD on every state; a REQ identifier and a dated sign-off on every frame"],
            ],
          },
        },
        { kind: "exploded", screen: documentsExploded },
      ],
    },
    {
      id: "sign-off",
      n: "05",
      heading: "Design and sign-off",
      maxim: "A frame without an identifier is an opinion. A frame with one is a commitment somebody can check.",
      standfirst:
        "A frame ships with its documentation attached, so a developer, a tester, and an auditor read the same artefact.",
      blocks: [
        {
          kind: "tabs",
          label: "Frames and screens as signed off",
          items: [
            {
              label: "A documented frame",
              blocks: [
                {
                  kind: "shot",
                  src: `${D}/documentation-2400.webp`,
                  frame: "macbook",
                  caption: "The doc band on top (Jira link PX-1774, acceptance criteria, designer, Approved), the annotated screens below.",
                },
              ],
            },
            {
              label: "Filters",
              blocks: [
                {
                  kind: "shot",
                  src: `${D}/filters-2400.webp`,
                  frame: "macbook",
                  caption: "Tags, then metadata filters typed by field; all criteria must match.",
                },
              ],
            },
            {
              label: "The template",
              blocks: [
                {
                  kind: "duo",
                  items: [
                    {
                      src: `${D}/detail-info-2400.webp`,
                      frame: "macbook",
                      caption: "Identity panel, five-tab band, preview: the tabs hold the audit-relevant history, so they are the template.",
                    },
                    {
                      src: `${D}/tablet-versions-2400.webp`,
                      frame: "macbook",
                      caption: "Version history at a narrower width, the same template.",
                    },
                  ],
                },
              ],
            },
            {
              label: "Deleted, not gone",
              blocks: [
                {
                  kind: "duo",
                  items: [
                    {
                      src: `${D}/deleted-document-2400.webp`,
                      frame: "macbook",
                      caption: "Deleted documents under Configuration; DOC-8001 open with its format, size, version, and checksum intact.",
                    },
                    {
                      src: `${D}/retention-2400.webp`,
                      frame: "macbook",
                      caption: "Retention on a proforma invoice: policy FINANCE_INVOICE_7Y, started, cutoff, end, eligible for disposition.",
                    },
                  ],
                },
              ],
            },
            {
              label: "A retired policy",
              blocks: [
                {
                  kind: "shot",
                  src: `${D}/document-type-new-2400.webp`,
                  frame: "macbook",
                  caption: "A document type on a retired retention policy: a RETIRED badge, a warning, and no change to documents already stored.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "handoff",
      n: "06",
      heading: "Handoff",
      standfirst:
        "Three requirements were in the tokens and templates from the start, never per screen.",
      blocks: [
        {
          kind: "flow",
          stages: [
            { title: "Accessibility", body: "WCAG AA from the first frame." },
            { title: "Colour modes", body: "Light, dark, and high contrast in tokens." },
            { title: "Language", body: "German default, English second; layouts tested against German compound words." },
          ],
        },
      ],
    },
    {
      id: "after-development",
      n: "07",
      heading: "After development",
      standfirst:
        "What is left to check: that every state tells the truth about the document behind it, whether deleted, restored, hidden, or versioned.",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              n: "01",
              stage: "Design QA",
              flow: { from: "A REQ identifier", to: "Every acceptance criterion checked" },
              feature: true,
              title: "Design QA runs against the requirement and every role",
              rule: {
                label: "Rule",
                body: "Acceptance criteria walked one by one, then the walk repeated as each role.",
              },
              why: {
                label: "Why",
                body: "A hidden field has to behave as though it does not exist, and none of that is visible from the admin account most builds are reviewed from.",
              },
              contrast: {
                does: "The walk is repeated for every role.",
                instead: "Reviewed as admin, shipped to everyone.",
              },
              artefact: {
                caption: "The checklist every screen goes through.",
                lines: [
                  "REQ-xxx · acceptance criteria   each one, in order",
                  "roles       admin · user · external — hidden means absent",
                  "states      empty · loading · error · no permission",
                  "documents   versions · locked · deleted · restored",
                  "status      every document shows its state and its owner",
                  "language    DE default, EN second — no truncated label",
                  "themes      light · dark · high contrast",
                  "a11y        keyboard path, focus order, AA contrast",
                ],
              },
            },
            {
              n: "02",
              stage: "Audit walk",
              flow: { from: "A built flow", to: "No false belief left in the UI" },
              feature: true,
              title: "I walk every destructive flow the way an auditor would",
              rule: {
                label: "Rule",
                body: "Delete, restore, replace, and retention, end to end, reading only what the interface says.",
              },
              why: {
                label: "Why",
                body: "The backend can be correct and the user still walk away believing the opposite.",
              },
              contrast: {
                does: "The copy says what the system did.",
                instead: "“Deleted” on a document that is legally still there.",
              },
              artefact: {
                caption: "One walk, written down the way it is checked.",
                lines: [
                  "delete     says: moved to retention, kept for its retention period",
                  "           trail: + deleted · user · timestamp",
                  "restore    says: restored as version 4, not replaced",
                  "           trail: + restored · v3 → v4 · user · timestamp",
                  "trail      no edit, no delete, no hide — on any role",
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: "results",
      n: "08",
      heading: "What it adds up to",
      blocks: [
        {
          kind: "joint",
          question: "What will I measure after release, and how?",
          answers: [
            "<strong>Whether documents left the drives.</strong> With the researcher, back to the people from discovery.",
            "<strong>Whether retrieval works.</strong> Which searches return nothing.",
            "<strong>Whether hand-offs hold.</strong> Where hand-offs between companies stall; findings into the backlog under the same REQ structure.",
          ],
        },
      ],
    },
  ],
};
