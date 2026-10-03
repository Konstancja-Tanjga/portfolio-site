import type { CaseStudy } from "./types";

/**
 * Structure mirrors the Figma wall — its twelve frames (12–22, with 18a),
 * in its numbering, so the file and the canvas stay walkable side by side.
 *
 * Chapters carry a heading and their frame, and nothing else. Every
 * maxim, standfirst and paragraph this wall wants is typeset inside the
 * frame itself; repeating it here printed the same sentence twice.
 *
 * Two exceptions. Chapter 23 ("after-development") has no frame: it is
 * written as native blocks and carries its own maxim and standfirst.
 * And the bottom of ch22 — the accessibility / colour / language strip,
 * the closing numbers and the screens — is cropped into ch22-close.png,
 * shown as the unnumbered, headingless "adds-up" entry, so chapter 23 can
 * sit between the handoff and that closing. The strip goes with the
 * screens because its last line points at them.
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
      id: "what-it-is",
      n: "12",
      heading: "What it is",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch12.png" }],
    },
    {
      id: "who-for",
      n: "13",
      heading: "Who it is for",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch13.png" }],
    },
    {
      id: "hard-brief",
      n: "14",
      heading: "Why it is a hard design brief",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch14.png" }],
    },
    {
      id: "discovery",
      n: "15",
      heading: "Discovery and research",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch15.png" }],
    },
    {
      id: "specification",
      n: "17",
      heading: "Specification",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch17.png" }],
    },
    {
      id: "inspiration",
      n: "18",
      heading: "Inspiration and ideas",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch18.png" }],
    },
    {
      id: "prototypes",
      n: "18a",
      heading: "Prototypes",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch18a.png" }],
    },
    {
      id: "sign-off",
      n: "19",
      heading: "Design and sign-off",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch19.png" }],
    },
    {
      id: "documentation",
      n: "20",
      heading: "Documentation",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch20.png" }],
    },
    {
      id: "design-system",
      n: "21",
      heading: "Design system",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch21.png" },
        {
          kind: "passage",
          html: '<p>Documents follows the surface rules written for Analytics (PR-07): the scope of what is acted on decides the surface. They are set out in full in <a href="applus-analytics#surface-rules">APplus Analytics</a>.</p>',
        },
      ],
    },
    {
      id: "handoff",
      n: "22",
      heading: "Handoff",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch22.png" }],
    },
    /* Not a Figma frame: the one chapter of this wall written as native
       blocks. The last frame (22, Handoff) stops at delivery; what happens
       to a feature after it is built is a sequence, and the steps block is
       that shape. Same stages as the Analytics wall, with the checks this
       product adds: retention, audit trail, permissions. */
    {
      id: "after-development",
      n: "23",
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
    /* Closing numbers and screens, cropped from frame 22 — see header. No
       heading on purpose: it closes the wall, it is not a jump-bar entry. */
    {
      id: "adds-up",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch22-close.png" }],
    },
  ],
};
