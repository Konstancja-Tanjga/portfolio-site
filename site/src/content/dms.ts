import type { CaseStudy } from "./types";

/**
 * Chapter numbers are this page's own, 00–14, in the same skeleton as
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
 */

export const dms: CaseStudy = {
  slug: "applus-documents",
  title: "APplus Documents",
  what: "Document management for the same platform, designed from zero",
  lead:
    "Versioning, metadata, search, permissions and retention over documents that lived in network drives and mail threads — under German commercial retention law, where a deleted document is not gone.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Document", "Management"],
    subline: "for APplus ERP",
    stamp: "VERSIONING · METADATA · SEARCH · PERMISSIONS · RETENTION",
    credit: "Lead Product Designer · Asseco Solutions · 2026",
    shot: { src: "/work/applus-documents/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Lead Product Designer, sole designer on the product" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP — Documents" },
    {
      label: "Design system",
      value: "FOX, which I own; the v2.3 → v3.0 migration done with one other designer",
      href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs",
    },
    {
      label: "Team",
      value: "3 developers, a requirements engineer, a researcher, QA, a PM and one designer",
    },
    { label: "Period", value: "October 2025 – August 2026, eleven months" },
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
                "Documents lived in network drives and mail threads. APplus needed a document management module inside the ERP that also satisfies German commercial retention law (GoBD), where a deleted document is not gone and an audit trail is append-only.",
            },
            {
              key: "My part",
              value:
                "The shape of the product, the user flows, the competitive analysis, prototypes in Figma Make, the low-fidelity work, requirement-level design and sign-off, and day-to-day work with the developers. FOX, the design system it is built on, is mine to own; I did its migration from v2.3 to v3.0 with one other designer.",
            },
            {
              key: "Decision 1",
              value:
                "Filtering is the retrieval strategy, because browsing does not work at tens of thousands of documents. Text search scans metadata and shows which field matched, and the same applies to metadata filters.",
            },
            {
              key: "Decision 2",
              value:
                "Audit-relevant history is part of the document template: every document opens with the same identity panel and the same five tabs, including version history and retention.",
            },
            {
              key: "Decision 3",
              value:
                "Every frame carries a REQ identifier, its requirement text and a dated sign-off, so from any frame you can name its requirement, and from any requirement you can find the frame and the signature.",
            },
            {
              key: "Evidence",
              value:
                "6 sessions with internal SMEs before specification. A competitor's administration screens annotated screen by screen. Prototypes in Figma Make walked through with the PM, the requirements engineer and the SMEs.",
            },
            { key: "Period", value: "October 2025 – August 2026" },
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
          html: "<p>DMS is a document management module inside APplus ERP. It holds the documents an ERP produces and receives, from invoices and purchase orders to goods receipt notes and customs declarations, with their versions, metadata, tags, permissions and retention.</p>",
        },
        {
          kind: "duo",
          items: [
            {
              src: "/work/applus-documents/screens/list.png",
              caption:
                "The document list: 346 documents, with document types in the left panel. Each row says where the search matched (author, project code) and which version matched.",
            },
            {
              src: "/work/applus-documents/screens/detail-invoice.png",
              caption:
                "A single document: general information on top, with Export audit package and Download, and the document details below it in five tabs.",
            },
          ],
        },
        {
          kind: "passage",
          html: "<p><strong>What I owned:</strong> the shape of the product, the user flows, the competitive analysis, the early prototypes in Figma Make that I used to test ideas and settle open questions with the PM, the requirements engineer and a group of SMEs, the low-fidelity work, and direct day-to-day work with the developers. FOX 2.3, the design system this is built on, I built with one other designer.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>1 · Gathering requirements,</strong> with the requirements engineer and the PM.",
            "<strong>2 · Audit and research.</strong>",
            "<strong>3 · Ideation:</strong> a clickable prototype in Figma, with the PM.",
            "<strong>4 · Design</strong> for desktop and mobile in Figma, with a design system update.",
            "<strong>5 · Tests with users.</strong>",
            "<strong>6 · Handoff</strong> to the developers.",
          ],
        },
      ],
    },
    {
      id: "hard-brief",
      n: "02",
      heading: "Why this is a hard brief",
      maxim: "Most document UIs optimise one thing: getting the file.",
      blocks: [
        {
          kind: "passage",
          html: "<p>This one has to satisfy German commercial retention law (GoBD) at the same time. Every one of the rules below is a UI constraint before it is a backend constraint, because the UI is where a user forms a false belief about what just happened.</p>",
        },
        {
          kind: "points",
          items: [
            "A deleted document is not gone.",
            "A restored document is not the same document.",
            "An audit trail is append-only.",
            "A metadata field the user is not cleared to see must behave as though it does not exist.",
          ],
        },
        {
          kind: "pull",
          text: "The challenge was more than storage. Every document needed a visible status and a clear owner, inside a process where several people, sometimes from different companies, hand documents back and forth without losing track of where things stood.",
        },
      ],
    },
    {
      id: "who-for",
      n: "03",
      heading: "Who it is for",
      standfirst:
        "Several hundred mid-sized and large manufacturers across Germany, Italy and Austria.",
      blocks: [
        {
          kind: "passage",
          html: "<p>A typical customer runs an archive in the tens of thousands of documents, configures around 22 document types and about 10 custom metadata fields, and has users in warehouse, finance, compliance and audit roles: four audiences with different jobs against the same archive.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "~22", label: "document types configured" },
            { value: "~10", label: "custom metadata fields" },
            { value: "4", label: "audiences: warehouse, finance, compliance, audit" },
          ],
        },
        {
          kind: "thesis",
          text: "Those numbers set the whole design problem. At tens of thousands of documents, browsing is not a retrieval strategy; filtering is the only one.",
        },
      ],
    },
    {
      id: "discovery",
      n: "04",
      heading: "Discovery and research",
      maxim: "Questions settled before specification cost a conversation. Settled after, they cost a rewrite.",
      blocks: [
        {
          kind: "passage",
          html: "<p>I started from the business requirements gathered directly from stakeholders, and from three questions about them. Then came six sessions with internal subject-matter experts on which features were actually needed and how the user flows should run.</p>",
        },
        {
          kind: "points",
          items: [
            "What kinds of documents move through the system?",
            "Who exchanges them with whom?",
            "Where do things currently go wrong?",
          ],
        },
        {
          kind: "stats",
          items: [{ value: "6", label: "sessions with internal SMEs, before specification" }],
        },
      ],
    },
    {
      id: "competition",
      n: "05",
      heading: "Competition analysis",
      maxim: "I annotated a competitor's administration on its own screens, one action and one menu at a time.",
      blocks: [
        {
          kind: "passage",
          html: "<p>I walked a competitor's document and user administration screen by screen and annotated it in place: every action, every menu and every modal marked up on the screenshot rather than summarised afterwards.</p><p>What that produces is a map of decisions somebody else already made: where they put user actions, what they hid behind an overflow menu, how many clicks they spend before a document is reachable, and which of those choices a compliance-bound product cannot copy.</p>",
        },
      ],
    },
    {
      id: "specification",
      n: "06",
      heading: "Specification",
      maxim: "A frame without an identifier is an opinion. A frame with one is a commitment somebody can check.",
      blocks: [
        {
          kind: "passage",
          html: "<p>Spec first, then design. Requirements were written up front and the design worked against them, which is why every frame carries a REQ identifier rather than a title.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/applus-documents/screens/traceability.png",
          caption:
            "The traceability chain: product specification in Confluence, requirement (REQ-984), Jira task (PX-1774), Figma frame with the requirement text in a doc band, and a sign-off dated and named. The dashed return is the part that pays off in an audit: from any frame you can name its requirement, and from any requirement you can find the frame and the signature.",
        },
      ],
    },
    {
      id: "inspiration",
      n: "07",
      heading: "Inspiration and ideas",
      maxim: "Borrowing a look is a shortcut you pay for later. Borrowing a decision means you also inherit the reasoning behind it.",
      blocks: [
        {
          kind: "passage",
          html: "<p>I looked at products that solve the same structural problem (dense business data, many roles, long lists that have to stay navigable) and took decisions from them rather than styling.</p><p>What came back: how a landing surface can summarise state before it offers actions, how a table stays readable at a few hundred rows, where a detail panel beats a detail page, and how much of a record you can put on screen before it stops being a record and becomes a form.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/applus-documents/screens/ref-finance-app.png",
          caption: "A finance tool: a dashboard that counts open tasks per company before it offers anything to do, and an inbox table of invoices.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/applus-documents/screens/ref-xentral.png",
          caption: "xentral: a purchase suggestion opened as a panel over the purchase order list.",
        },
      ],
    },
    {
      id: "prototypes",
      n: "08",
      heading: "Prototypes",
      maxim:
        "A generated prototype is cheap enough to throw away. A designed and signed-off screen is not, so the disagreements happen here, one step before REQ identifiers and sign-off make them expensive.",
      blocks: [
        {
          kind: "passage",
          html: "<p>Before a single frame was drawn, a settled requirement went into Figma Make and came back as something clickable in hours. Those prototypes were the argument in the room with the PM, the requirements engineer and the SMEs: flows walked through end to end, weak options dropped on the spot. The example below is dossier plans, which define how documents are grouped into dossiers at runtime.</p>",
        },
        {
          kind: "duo",
          items: [
            {
              src: "/work/applus-documents/screens/proto-dossier-list.png",
              caption:
                "Dossier plan configuration. Customer, Order and Project are system baselines mapped from APplus; they can be edited and reset to default. Quality Assurance is a custom draft.",
            },
            {
              src: "/work/applus-documents/screens/proto-dossier-general.png",
              caption: "One dossier definition, in six tabs from General to Change summary. Only active definitions are used at runtime.",
            },
          ],
        },
        {
          kind: "duo",
          items: [
            {
              src: "/work/applus-documents/screens/proto-dossier-governance.png",
              caption:
                "Governance and validation: reserved metadata fields the system manages, and three validation rules: a unique dossier name, a document type scope, and identity metadata configured for every document type.",
            },
            {
              src: "/work/applus-documents/screens/proto-dossier-summary.png",
              caption: "Change summary: everything that will change, reviewed before it is applied as one consistent configuration.",
            },
          ],
        },
      ],
    },
    {
      id: "design-system",
      n: "09",
      heading: "Design system",
      standfirst:
        "I own FOX, so on this product I was both a consumer of the system and its owner. That is why the update process is worth showing: the loop took days.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/applus-documents/screens/fox-update.png",
          caption:
            "The update process. Solid line: a composition invented to solve one screen is reviewed, named and versioned into FOX rather than left local. Dashed: the product consumes the system back at a pinned version, so a promotion never arrives as a surprise mid-release. Colour modes and accessibility sit underneath both, in the primitives.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/applus-documents/screens/fox-docs.png",
          caption:
            "FOX documentation for one molecule, the secondary app bar: its status, owner, reviewer and last update, the components it uses, its variant in each application (Document Management System among them), and the demo in light, dark and client colour.",
        },
      ],
    },
    {
      id: "sign-off",
      n: "10",
      heading: "Design and sign-off",
      standfirst:
        "Each frame carries its requirement text in a documentation band, then a designer sign-off: dated, and marked Approved.",
      blocks: [
        {
          kind: "duo",
          items: [
            {
              src: "/work/applus-documents/screens/detail-info.png",
              caption:
                "Document info. An identity panel (scope, format, size, created, last modified, version, checksum), then a five-tab band, then the preview. The tabs are where audit-relevant history lives, so they are part of the template rather than a per-screen choice.",
            },
            {
              src: "/work/applus-documents/screens/detail-tags.png",
              caption:
                "The tag model and its validation rules, enforced in place: up to 20 tags per document, 64 characters at most, letters, numbers, _ and - only, no duplicates.",
            },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/applus-documents/screens/list-favourite.png",
          caption:
            "The list with the bulk actions in one toolbar: all versions or latest only, select and deselect all, download ZIP, export metadata, tag documents, and delete selected set apart in red. The star on a row adds the document to favourites.",
        },
        {
          kind: "duo",
          items: [
            {
              src: "/work/applus-documents/screens/detail-versions.png",
              caption: "Version history on a sales order: each version with its author, number and date, and a download on the highlighted row.",
            },
            {
              src: "/work/applus-documents/screens/tablet-versions.png",
              caption: "The same screen on a tablet.",
            },
          ],
        },
      ],
    },
    {
      id: "documentation",
      n: "11",
      heading: "Documentation",
      maxim: "Documentation written after handoff describes what was built. Documentation written into the frame decides it.",
      blocks: [
        {
          kind: "passage",
          html: "<p>Every screen ships with its documentation attached: what the screen is for, what each zone does, and the annotations that explain the rules a static image cannot show, such as what happens on empty, what a role without permission sees, and which action is destructive.</p><p>The point is that a developer, a tester and an auditor all read the same artefact, and none of them has to ask a designer what was meant.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/applus-documents/screens/documentation.png",
          caption:
            "A documented frame. On top, the doc band: the Jira link (PX-1774), the acceptance criteria, the designer and the Approved sign-off. Below, the screens with annotations in five kinds: requirements, development, content, user flow and interaction.",
        },
        {
          kind: "spec",
          caption: "What the annotations on this frame say.",
          rows: [
            { key: "Requirements", value: "Metadata fields are related to roles." },
            { key: "Development", value: "The version dropdown displays two list items: All versions, Latest only." },
            { key: "Content", value: "Title in one line. Height 48px, width 812px." },
            { key: "User flow", value: "Enabled when nothing is selected. Opacity 40%, component state Disabled." },
            {
              key: "Interaction",
              value:
                "The match information on a list item is shown only in text search results. It is not role-dependent and appears for both User and Admin. Text search scans document metadata, and when the query matches a metadata value the document is shown with the field that contains the match. The same applies to metadata filters, because text search can be combined with filters.",
            },
          ],
        },
      ],
    },
    {
      id: "handoff",
      n: "12",
      heading: "Handoff",
      maxim: "On a team this size, alignment enforced by tooling is the only kind that survives eleven months.",
      standfirst:
        "Design and code were kept in sync by tooling. Handoff ran Figma → Storybook → dev with Code Connect in play, so FOX components in the design file are tied to their implementations instead of described in a spec sheet.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/applus-documents/screens/handoff-loop.png",
          caption:
            "The handoff loop. Solid line: Code Connect binds each design component to its implementation. Dashed: the loop also runs the other way, Codex → Figma over MCP, so code-side work is reflected back into the design file rather than drifting from it. Some questions were settled as working prototypes in code, because behaviour is not something a static mockup can decide.",
        },
        {
          kind: "spec",
          caption: "Three requirements that were in the tokens and templates from the start.",
          rows: [
            { key: "Accessibility", value: "WCAG AA was the target from the first frame." },
            {
              key: "Colour modes",
              value: "Light, dark and high contrast were must-haves, implemented in tokens rather than per screen. A screen cannot fall out of high contrast if it never hard-codes a colour.",
            },
            {
              key: "Language",
              value: "German is the default, English second. Layouts were tested against German compound words, where a layout that survives English quietly breaks. The screens on this page are the English variants.",
            },
          ],
        },
      ],
    },
    /* The one chapter here that never had a frame on the wall: what happens
       to a feature after it is built is a sequence, and the steps block is
       that shape. Same stages as the Analytics page, with the checks this
       product adds: retention, audit trail, permissions. Kept as written. */
    {
      id: "after-development",
      n: "13",
      heading: "After development",
      maxim: "In a document system, a screen that looks right can still tell the user something false. Review is where that gets caught.",
      standfirst:
        "Handoff delivers FOX code and annotated frames, so what reaches review is built from the right parts and documented. What is left to check is what neither can guarantee: that every state tells the truth about the document behind it — deleted, restored, hidden, versioned. Seven stages, from preview build to the next iteration.",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              n: "01",
              stage: "Design review",
              flow: { from: "A pull request", to: "Review comments before merge" },
              title: "I review the running build against the annotated frame",
              rule: {
                label: "Rule",
                body: "Every pull request that changes a screen is reviewed by design on its preview build, beside the frame and its annotations — requirements, interaction, user flow, content, development. Comments go on the pull request and quote the annotation they check against.",
              },
              why: {
                label: "Why it isn't decoration",
                body: "The annotations exist so nobody has to ask what was meant. Reviewing against them keeps that promise after development: a comment that cites the frame’s own rule is a check, not a matter of taste, and it lands before merge, where it costs a comment instead of a release.",
              },
              contrast: {
                does: "Each comment cites the annotation it checks.",
                instead: "“This feels off” in a chat after the release.",
              },
            },
            {
              n: "02",
              stage: "Design QA",
              flow: { from: "A REQ identifier", to: "Every acceptance criterion checked" },
              feature: true,
              title: "Design QA runs against the requirement and every role",
              rule: {
                label: "Rule",
                body: "The REQ on the frame is the REQ on the ticket, so design QA walks its acceptance criteria one by one — then repeats the walk as each role, because in this product the same screen is a different screen for a user who is not cleared to see a field.",
              },
              why: {
                label: "Why it isn't decoration",
                body: "A field hidden by permission has to behave as though it does not exist: no empty label, no gap in the layout, no count that includes it, no search hit that betrays it. None of that is visible from an admin account, which is the account most builds are reviewed from.",
              },
              contrast: {
                does: "The walk is repeated for every role.",
                instead: "Reviewed as admin, shipped to everyone.",
              },
              artefact: {
                caption: "The checklist every screen goes through, whatever it is.",
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
              n: "03",
              stage: "Audit walk",
              flow: { from: "A built flow", to: "No false belief left in the UI" },
              feature: true,
              title: "I walk every destructive flow the way an auditor would",
              rule: {
                label: "Rule",
                body: "Delete, restore, replace and retention flows get a separate pass, end to end, reading only what the interface says. Every message has to match what the system actually did — and the audit trail has to show it, append-only, with nothing on screen that suggests it could be edited.",
              },
              why: {
                label: "Why it isn't decoration",
                body: "Under GoBD a deleted document is not gone and a restored one is not the same document. The backend can be correct and the user still walks away believing the opposite, because the UI is where that belief forms. This pass is the only place in the process that checks the belief, not the data.",
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
            {
              n: "04",
              stage: "Triage",
              flow: { from: "A list of findings", to: "Blocker, fix, or backlog" },
              title: "Every finding gets a severity and a place to live",
              rule: {
                label: "Rule",
                body: "Findings are filed as tickets with the REQ, a link to the exact Figma node, expected against actual, and one of three severities: blocks release, fix before release, or polish for the backlog. Anything that misleads about retention or leaks a hidden field is a blocker by default. The rest is agreed with the developer and the PM.",
              },
              why: {
                label: "Why it isn't decoration",
                body: "A designer who flags everything as critical stops being read. Three levels make the trade-off explicit — and a fixed rule for compliance findings means the one class of defect that cannot ship is never up for negotiation in a release meeting.",
              },
              contrast: {
                does: "Compliance findings block by rule.",
                instead: "A leaked field argued down to “minor” on release day.",
              },
            },
            {
              n: "05",
              stage: "Reconcile",
              flow: { from: "A deviation in code", to: "One version of the truth" },
              title: "When the code is right and the file is wrong, the file changes",
              rule: {
                label: "Rule",
                body: "Development surfaces what design did not see: a search index that cannot filter by a field in time, a lock that needs a timeout, a better order of metadata. Each deviation is rejected as a defect or accepted — and an accepted one is written back into the frame and its annotations, over MCP, the same week.",
              },
              why: {
                label: "Why it isn't decoration",
                body: "The annotated frame is what a developer, a tester and an auditor all read. If it describes what was designed instead of what shipped, all three are reading the wrong artefact — and the auditor is the one who will not ask.",
              },
              contrast: {
                does: "Accepted deviations are merged back into the file.",
                instead: "The annotations keep the plan; production keeps the truth.",
              },
            },
            {
              n: "06",
              stage: "Acceptance",
              flow: { from: "A fixed build", to: "Design accepted, on the ticket" },
              title: "Design acceptance is part of the Definition of Done",
              rule: {
                label: "Rule",
                body: "A ticket that changes a screen does not close on QA alone. Design acceptance is a dated status on it — the build counterpart of the sign-off each frame carries — recorded next to functional QA, not instead of it.",
              },
              why: {
                label: "Why it isn't decoration",
                body: "Frame sign-off approves an intention. Build acceptance approves what a customer — and an auditor — will actually meet. Two dated approvals, one on each side of development, are part of the same paper trail this product exists to keep.",
              },
              contrast: {
                does: "Two sign-offs: on the frame, and on the build.",
                instead: "The frame is approved, so the feature is assumed to be.",
              },
            },
            {
              n: "07",
              stage: "After release",
              flow: { from: "A shipped feature", to: "The next backlog" },
              title: "Release is where the evidence starts",
              rule: {
                label: "Rule",
                body: "After release, the researcher and I go back to the people from discovery: where documents still end up in network drives and mail threads, which searches return nothing, where hand-offs between companies stall. Findings go into the backlog with the same REQ structure.",
              },
              why: {
                label: "Why it isn't decoration",
                body: "The product exists to pull documents out of drives and inboxes. Whether it does is only visible after release — in what people still do outside it. A process that stops at the merge never finds out.",
              },
              contrast: {
                does: "Post-release findings feed the backlog as requirements.",
                instead: "The team moves on and nobody checks the drives.",
              },
            },
          ],
        },
      ],
    },
    {
      id: "results",
      n: "14",
      heading: "What it adds up to",
      standfirst:
        "Eleven months, and a paper trail an auditor can walk in either direction: from a frame to its requirement, and from a requirement to its frame and signature.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "11", label: "months, October 2025 to August 2026" },
            { value: "6", label: "SME sessions before specification" },
            { value: "5", label: "tabs in every document, history and retention among them" },
            { value: "1", label: "designer on the product" },
          ],
        },
        {
          kind: "points",
          items: [
            "<strong>Retrieval by filter.</strong> Text search and metadata filters say which field matched, so a user can see why a document was found.",
            "<strong>History in the template.</strong> Version history and retention are tabs on every document, not features a screen may or may not have.",
            "<strong>Traceable frames.</strong> Every frame carries its REQ, its requirement text and a dated sign-off.",
            "<strong>One system loop.</strong> Patterns this product needed went into FOX 2.3 and came back at a pinned version, for every other product to reuse.",
          ],
        },
      ],
    },
  ],
};
