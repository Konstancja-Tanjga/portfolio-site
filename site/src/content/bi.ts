import type { CaseStudy } from "./types";

/**
 * The flagship wall. Structure mirrors the Figma file section for
 * section — the numbering in `n` is the Figma numbering, kept on
 * purpose so the two stay walkable side by side.
 *
 * This file is the template. The other seven walls fill the same
 * chapters; where a chapter doesn't apply, it comes out.
 */
export const bi: CaseStudy = {
  slug: "applus-analytics",
  title: "APplus Analytics",
  what: "Business intelligence for an ERP platform, designed from zero",
  lead:
    "A standalone BI platform inside APplus ERP: a data warehouse and the analytics application on top of it. No analytics surface existed before — the numbers lived in module lists and Excel exports.",
  status: {
    state: "held",
    until: "5 October 2026",
    why: "The product is generally available then; until it is, the reasoning is here and the screens are not.",
  },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Business", "Intelligence"],
    subline: "for APplus ERP",
    stamp: "DASHBOARDS · QUERIES · DATA MODELS · AI ANALYST",
    credit: "Lead designer · Asseco Solutions · 2026",
    shot: { slot: "Cover hero — AI Data Analyst on a MacBook, bleeding off the right edge. Export 2400px wide." },
  },
  meta: [
    { label: "Role", value: "Lead designer — sole designer on the product" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP — Analytics (PR-07)" },
    { label: "Design system", value: "FOX v2.3 → v3.0, co-authored with one other designer" },
    { label: "Team", value: "3 developers, 1 requirements engineer, QA, a PM" },
    { label: "Period", value: "January – September 2026" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Analytics is the business intelligence module inside APplus ERP. It turns the data a company already has into numbers it can act on — on the ERP's own data, inside the ERP, without an export.</p>",
        },
        {
          kind: "passage",
          html:
            "<p><strong>What I owned:</strong> the audit of the existing concept, the shape of the product, its information architecture, personas and user flows, market and competitor analysis, the surface rules the whole application obeys, and the prototype development receives.</p>",
        },
        { kind: "shot", width: "wall", slot: "Home — favourite dashboards and analyses. 2400px." },
        {
          kind: "thesis",
          label: "THESIS",
          text:
            "I don't hand over static mockups. I hand over a clickable React prototype built on the design system, and its code goes into the implementation.",
        },
        { kind: "shot", width: "wall", slot: "AI Data Analyst — detail thread open. 2400px." },
      ],
    },
    {
      id: "hard-brief",
      n: "01a",
      heading: "Why it's a hard brief",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>TODO — one paragraph. Four audiences with genuinely different jobs, one data foundation, and a permission model that has to hold while the same object travels between them.</p>",
        },
      ],
    },
    {
      id: "who-for",
      n: "13",
      heading: "Who it is for",
      standfirst:
        "Four jobs against one data foundation. The numbering is the handoff: what one role builds, the next interrogates.",
      blocks: [
        {
          kind: "personas",
          items: [
            {
              n: "01",
              name: "The key user",
              badge: "AUTHOR · IT OR DEPARTMENT POWER USER",
              job: "BUILD",
              quote: "I build the query once. Then twelve people live off it.",
              context:
                "Owns the data models and the queries. Knows which ERP tables can be joined and which must not be.",
              goals: [
                "Turn ERP tables into a model others can reuse",
                "Publish a query without publishing the fields its readers are not cleared to see",
                "Change one model, not twelve copies of it",
              ],
              breaks:
                "Every request becomes a bespoke Excel export that they maintain by hand, forever.",
              must:
                "Make authoring and sharing two separate, visible acts — never one accidental one.",
            },
            {
              n: "02",
              name: "The controller",
              badge: "INTERROGATOR · FINANCE",
              job: "INTERROGATE",
              quote: "Margin is down four points. I need the reason by Thursday.",
              context:
                "Monthly close. Plan against actual, margin per order, per customer, per product line.",
              goals: [
                "Get from a number to the rows behind it",
                "Compare two periods without rebuilding the chart from scratch",
                "Leave a path somebody else can walk again",
              ],
              breaks:
                "The drill-down happens in Excel, off the record, and cannot be repeated next month.",
              must:
                "Treat filtering and drill-down as the primary interaction. Export is the exit, not the tool.",
            },
            {
              n: "03",
              name: "The production lead",
              badge: "MONITOR · OPERATIONS",
              job: "MONITOR",
              quote: "Before the shift meeting I need to know what is late.",
              context:
                "Throughput, utilisation, late orders. Reads one board, often on a shared screen, standing up.",
              goals: [
                "See today's bottleneck in one glance",
                "Know, without asking, how old the number is",
                "Configure nothing, ever",
              ],
              breaks:
                "Reads yesterday's report and learns about the delay after the meeting it mattered in.",
              must:
                "Make freshness, empty and failure as legible as the data. A stale board must say so.",
            },
            {
              n: "04",
              name: "The managing director",
              badge: "CONSUMER · LEADERSHIP",
              job: "CONSUME",
              quote: "I don't want to build one. I want the right one to be there.",
              context:
                "Five numbers, weekly. Never an author — a consumer of work somebody else published.",
              goals: [
                "Open a favourite and understand it at once",
                "Ask the follow-up question in words",
                "Send what they are looking at to someone else",
              ],
              breaks:
                "Receives a PDF by e-mail that nobody in the thread can question or drill into.",
              must:
                "Have a reading mode with no authoring chrome, and an export that survives the forward.",
            },
          ],
        },
        { kind: "shot", width: "wall", slot: "Persona board — the four cards as laid out in Figma. 2400px." },
      ],
    },
    {
      id: "discovery",
      n: "14",
      heading: "Discovery and research",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>TODO — how the 27 came about: who was asked, what was asked, and the one finding that changed the product rather than confirming it.</p>",
        },
        { kind: "shot", width: "wall", slot: "Research synthesis. 2400px." },
      ],
    },
    {
      id: "initial-idea",
      n: "15",
      heading: "Analysis of the initial idea",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>TODO — what the inherited concept assumed, which of those assumptions survived the audit, and which did not.</p>",
        },
        {
          kind: "duo",
          items: [
            { slot: "Inherited concept", caption: "As handed over" },
            { slot: "After the audit", caption: "What survived" },
          ],
          caption: "The audit, before and after.",
        },
      ],
    },
    {
      id: "prototypes",
      n: "16",
      heading: "First prototypes",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — what the first build got wrong, and how it was found out.</p>",
        },
        { kind: "shot", width: "wall", slot: "Early prototype. 2400px." },
      ],
    },
    {
      id: "design-system",
      n: "17",
      heading: "Design system",
      standfirst:
        "With one other designer I took FOX from v2.3 to v3.0. On this product I was both a consumer of the system and one of its two owners — which is why the update loop is worth documenting: it ran in days, not quarters.",
      blocks: [
        {
          kind: "evolution",
          items: [
            {
              version: "v2.0",
              claim: "The file is the system",
              sourceOfTruth: "Figma. The library is the reference, and code follows it by hand.",
              ships: "A designer changes the component, then asks six teams to match it.",
              costs:
                "Two artefacts both claim to be the component, and they disagree within a sprint.",
            },
            {
              version: "v2.3",
              claim: "The file is bound to the code",
              sourceOfTruth: "Figma variables mapped to published tokens.",
              ships: "A token change propagates; a structural change still needs both sides edited.",
              costs: "The binding has to be maintained, and it silently rots when it isn't.",
              moved: "TODO — what actually moved between 2.3 and 3.0.",
            },
            {
              version: "v3.0",
              claim: "The code is the system",
              sourceOfTruth: "The published package. Figma documents it; it does not define it.",
              ships:
                "A pull request against the library. I review and merge it, and every consuming product picks it up on upgrade.",
              costs:
                "Versioning discipline: breaking changes need a deprecation window and a migration path.",
            },
          ],
        },
        {
          kind: "spec",
          caption: "Key sizes as implemented, not as drawn.",
          rows: [
            { key: "nav rail", value: "collapsed 56 · expanded 248" },
            { key: "app-bar band", value: "64" },
            { key: "content-layer inset", value: "16" },
            { key: "side sheet", value: "432" },
            { key: "card mesh", value: "minmax auto-fill" },
          ],
        },
        {
          kind: "annotated",
          items: [
            {
              id: "01",
              title: "Main page — nav rail + panel",
              standfirst:
                "Every screen in the product is one of four templates with different content in the same zones — which is what made the layout arguments reusable instead of per-screen.",
              shot: { slot: "Zone map 01 — main page. One zone rect = one real container; sizes are the values in code. 2400px." },
              legend: [
                { swatch: "#bae6fd", label: "nav rail · 56 / 248" },
                { swatch: "#e0f2fe", label: "fox-app-bar band · 64" },
                { swatch: "#f0f9ff", label: "fox-content-layer · surface" },
              ],
              notes: [
                {
                  label: "Guardrails",
                  body: "Main actions only in the action cluster. Never in the card, never in the rail.",
                },
              ],
              rules: [
                { id: "R1", text: "TODO — the rule this screen demonstrates." },
                { id: "R3", text: "TODO" },
              ],
            },
            {
              id: "04",
              title: "Main page — anchored menu",
              standfirst: "fox-menu. Anchored popover, above content-layer, no scrim.",
              shot: { slot: "Zone map 04 — anchored menu. 2400px." },
              notes: [
                {
                  label: "Where it sits",
                  body: "No scrim — the page stays live behind it, because the menu is a choice about one object, not a mode.",
                },
              ],
              rules: [{ id: "R7", text: "Main actions never move into a popover." }],
            },
            {
              id: "07",
              title: "Detail page — side sheet open",
              standfirst: "fox-side-sheet inside the content-layer; the body reflows beside it.",
              shot: { slot: "Zone map 07 — side sheet. 2400px." },
              notes: [
                {
                  label: "How it behaves",
                  body: "The sheet is a child of the content-layer, not a sibling of the page. Contrast with the modal, which is neither.",
                },
              ],
              rules: [{ id: "R2", text: "TODO" }],
            },
            {
              id: "08",
              title: "Detail page — split workspace",
              standfirst: "Pivot view: available fields, drop areas, toolbar, result grid.",
              shot: { slot: "Zone map 08 — split workspace. 2400px." },
              notes: [
                { label: "Column widths", body: "Available-fields gutter 340, gap 16, result fills the rest." },
              ],
            },
            {
              id: "09",
              title: "Detail page — enlarged",
              standfirst: "viz-workspace--enlarged. Enlarge is the one view that leaves the content-layer.",
              shot: { slot: "Zone map 09 — enlarged. 2400px." },
              notes: [
                {
                  label: "Why inset: 0",
                  body: "TODO — why enlarge escapes the layer instead of growing inside it.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "sign-off",
      n: "18",
      heading: "Design and sign-off",
      standfirst:
        "Each frame carries its requirement in a documentation band — SRS reference, REQ number, date and status — then a designer sign-off: dated, and marked Approved.",
      blocks: [
        { kind: "shot", width: "wall", slot: "Home screen, with the documentation band. 2400px." },
        { kind: "shot", width: "wall", slot: "AI Data Analyst. 2400px." },
        { kind: "shot", width: "wall", slot: "Settings — workspace preferences and system configuration. 2400px." },
      ],
    },
    {
      id: "uc-ai-analyst",
      n: "19",
      heading: "AI Data Analyst",
      blocks: [
        {
          kind: "usecase",
          uc: {
            id: "UC-01",
            title: "Question a fragment of an analysis without derailing the analysis",
            actor: {
              name: "02 — The controller",
              body: "Reading an AI-generated analysis, and not yet willing to believe it.",
              note:
                "Not a persona badge. The state of mind is the requirement — everything below exists to serve someone who is unconvinced.",
            },
            trigger: {
              body: "One phrase in the answer looks wrong.",
              note: "The trigger is doubt, not a task.",
            },
            precondition: {
              body:
                "The analysis is shown as a live preview: chart, measure, grouping and filters visible before anything is saved.",
            },
            flow: [
              {
                n: "1",
                text: "Select the fragment inside the answer.",
                note:
                  "Scope is announced, not implied. The user is told what will and will not be affected before they type.",
              },
              {
                n: "2",
                text:
                  "A detail thread opens, discussing one fragment — the main chat stays untouched.",
              },
              {
                n: "3",
                text:
                  "The selection's provenance is restated as chips: measure, group-by, filter, source.",
                note:
                  "The chips are what make the branch reproducible. Without them it is a question about nothing in particular.",
              },
              { n: "4", text: "The user asks why 2025 is lower than 2024." },
              {
                n: "5",
                text:
                  "The answer names the cause: 2025 is not a full year — bookings load only to 30 November, so it is not like-for-like.",
                note: "Naming the cause is the product. Restating the number is not.",
              },
              {
                n: "6",
                text:
                  "Evidence is shown for both years on the same period, and the answer can be verified: Show SQL · Open as pivot · Copy.",
                note:
                  "A controller will be asked where the number came from. “The assistant said so” is not repeatable to an auditor.",
              },
            ],
            exits: [
              {
                label: "Apply to main analysis",
                text:
                  "The correction enters the main thread as a new step, with the reason attached to it.",
              },
              {
                label: "Discard — nothing propagates",
                text:
                  "The branch closes and nothing propagates. The main analysis is exactly what it was.",
              },
            ],
            exitsNote:
              "Two exits and no third is the whole design. A branch that can end ambiguously is not a branch.",
            postcondition: {
              body:
                "The artefact gains a dated, reasoned step — or nothing at all.",
              note: "What the artefact never gains matters as much as what it does.",
            },
            why:
              "Without a scoped branch, every doubt either derails the main thread or is settled off the record — and the artefact drifts while nobody is watching.",
            rule:
              "An action on a fragment opens a surface scoped to that fragment, and returns exactly one thing to its parent: a change, or nothing.",
            ruleNote:
              "The same rule governs widget settings inside a dashboard. Object scope survives nesting.",
          },
        },
        { kind: "shot", width: "wall", slot: "Detail thread, annotated. 2400px." },
      ],
    },
    {
      id: "uc-publish",
      n: "20",
      heading: "Publishing a query",
      blocks: [
        {
          kind: "usecase",
          uc: {
            id: "UC-02",
            title: "Publish a query other people can use — and see who can use it",
            actor: {
              name: "01 — The key user, publishing",
              body:
                "One author, three kinds of reader. Most of them never open this screen, and they inherit its consequences anyway.",
              note: "That asymmetry is the whole brief.",
            },
            trigger: {
              body:
                "A query built for one department turns out to be useful to three. Its reach starts growing before anyone decides that it should.",
              note:
                "Success is the trigger — which is exactly when exposure grows without a decision behind it.",
            },
            precondition: {
              body:
                "The query is already an object with an owner, so “who can see this” is an answerable question.",
            },
            flow: [
              { n: "1", text: "The query is an object with an owner, not a record in a list." },
              { n: "2", text: "Its audience is shown at rest: administrator, moderator, users — with data model, author and date." },
              { n: "3", text: "Permissions sit beside the object's own properties and its system links." },
              { n: "4", text: "TODO" },
              {
                n: "5",
                text: "Translations, versions and update policy live in the same shell.",
                note:
                  "Configuration you can verify where you write it does not become a support ticket next month.",
              },
            ],
            exits: [
              { label: "Publish", text: "TODO" },
              { label: "Keep private", text: "TODO" },
            ],
            postcondition: {
              body:
                "Nobody has to open a permissions dialog to find out who can see their work.",
              note: "Nobody goes and checks. So the design must not require checking.",
            },
            why:
              "Exposure that is invisible at rest quietly reaches further than its author thought, and correctness becomes something you have to go and check.",
            rule:
              "If a property determines who can see an object, it belongs on the object — not one click away from it.",
            ruleNote:
              "Upstream twin of UC-01: both make the thing that could mislead you legible before it does.",
          },
        },
        { kind: "shot", width: "wall", slot: "Permissions, lineage and validation on the object. 2400px." },
      ],
    },
    {
      id: "uc-data-models",
      n: "21",
      heading: "Data models",
      blocks: [
        {
          kind: "steps",
          standfirst: "Four stages, and each one changes who is affected by a mistake.",
          items: [
            {
              n: "01",
              title: "Select query",
              rule: {
                label: "The unit is a query, not a table",
                body:
                  "Everything on the shelf was already written and validated upstream. The builder composes what exists — it does not invent data.",
              },
              why: {
                label: "Each one carries its provenance",
                body: "Source system and field count, on the card: mssql, oracle, bigquery · 18, 25, 12 fields.",
              },
            },
            {
              n: "02",
              title: "Define relationships",
              rule: {
                label: "The join is an object, not a line",
                body:
                  "It states its direction and its type on the canvas — INNER JOIN, LEFT — and its endpoints are drawn valid or invalid before you commit them.",
              },
              why: {
                label: "Why that is not decoration",
                body:
                  "The same two queries joined two different ways produce two different numbers. Hiding the join type in a settings dialog hides the discrepancy until somebody argues in a meeting.",
              },
            },
            {
              n: "03",
              title: "Validate model",
              rule: {
                label: "A step, not a checkbox",
                body:
                  "Readiness is checked while the model is still private. A model can be finished and still not be publishable, and the interface has to say so out loud.",
              },
              why: {
                label: "What this buys",
                body:
                  "“Governed” stops being a promise in the product description and becomes a step you cannot walk past.",
              },
            },
            {
              n: "04",
              title: "Publish",
              rule: {
                label: "The only irreversible audience change",
                body:
                  "Everything before this point affects one person. This step affects everyone who will later open a dashboard built on the model.",
              },
              why: {
                label: "So it is not the save button",
                body:
                  "Saving keeps your work. Publishing changes what other people are allowed to believe. Two different acts, and two different affordances.",
              },
            },
          ],
        },
        {
          kind: "annotated",
          items: [
            {
              title: "Anatomy of one relationship",
              shot: { slot: "Two query tiles joined — Rechnungen ⇢ Kundendatenbank, INNER JOIN. 2400px." },
              notes: [
                { label: "Provenance rides on the tile", body: "You always know which system the rows came from." },
                { label: "Types are visible before the link is made", body: "STRING, FLOAT, DATE, BOOLEAN on the column, not in a tooltip." },
                { label: "The join says what it is", body: "INNER JOIN, drawn as an object with a direction." },
              ],
            },
          ],
        },
        {
          kind: "pull",
          text:
            "The rule underneath: anything that changes what a number means has to be visible at the moment the number is built, not discoverable afterwards.",
        },
      ],
    },
    {
      id: "handoff",
      n: "22",
      heading: "Handoff",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>TODO — what development actually received, and what that changed about how the build ran.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "10", label: "functional areas owned" },
            { value: "8", label: "moderated validation sessions" },
            { value: "2", label: "customer beta sites" },
            { value: "v3.0", label: "design system shipped on" },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>TODO — what I would do differently. One real thing, with the cost named.</p>",
        },
      ],
    },
  ],
};
