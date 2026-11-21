import type { CaseStudy } from "./types";

/**
 * A self-initiated concept, not client work: Salesforce Financial Services
 * Cloud screens for a wealth advisor, built in Figma from the published SLDS 2
 * community kits, with a coded prototype. Written to docs/case-study-kit.
 *
 * What is on record, and what is not:
 * - No user research and no usability test: the persona is a role, and the
 *   study states no result, so 02, 03 and 10 are dropped. 04 and 05 are
 *   dropped because there was no audit of an earlier version and no earlier
 *   prototype. 07 shows the three mobile screens, exported from Figma
 *   at 1x (390 x 844) because the connector's export is capped.
 * - The device mockups are of the coded prototype at 1440 px, set in the
 *   site's MacBook frame (fsc-wealth-prototype.vercel.app, 19 November 2026);
 *   the Figma file renders the same screens from the SLDS 2 kits.
 * - "1219 of 1349 instances" is a count over the five Figma screens, taken
 *   with the Figma plugin API on 19 November 2026.
 */
const D = "/work/fsc-wealth-management/device";
const S = "/work/fsc-wealth-management/screens";

export const fsc: CaseStudy = {
  slug: "fsc-wealth-management",
  title: "Client 360 for wealth advisors",
  what: "A Salesforce Financial Services Cloud concept in SLDS 2, with Agentforce and a coded prototype",
  lead:
    "Five Lightning screens that get a wealth advisor ready for a client review: the advisor’s home page, the client, the household, a financial account, and an Agentforce brief grounded in the record. A self-initiated concept, designed in Figma from the SLDS 2 kits and built as a clickable prototype.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "PERSONAL PROJECT · SALESFORCE FINANCIAL SERVICES CLOUD",
    headline: ["Client 360", "for wealth advisors"],
    subline: "a Financial Services Cloud concept in SLDS 2",
    stamp: "ADVISOR HOME · CLIENT 360 · HOUSEHOLD · FINANCIAL ACCOUNT · AGENTFORCE",
    credit: "Design and prototype · Self-initiated · 2026",
    org: "Personal project",
    art: { src: `${D}/agentforce-options-2400.webp` },
    shot: { src: "/work/fsc-wealth-management/00-cover.png" },
    layers: [
      { src: `${D}/home-2400.webp`, label: "Advisor Home" },
      { src: `${D}/client-2400.webp`, label: "Client 360" },
      { src: `${D}/agentforce-options-2400.webp`, label: "Agentforce meeting prep" },
      { src: `${D}/household-2400.webp`, label: "Household" },
      { src: `${D}/account-2400.webp`, label: "Financial Account" },
    ],
  },
  meta: [
    { label: "Role", value: "Designer, self-initiated" },
    { label: "Platform", value: "Salesforce Financial Services Cloud, Lightning Experience, desktop at 1440 px" },
    { label: "Design system", value: "SLDS 2: Components for Web and Agentic Experiences community kits" },
    { label: "Prototype", value: "fsc-wealth-prototype.vercel.app", href: "https://fsc-wealth-prototype.vercel.app" },
    { label: "Period", value: "November 2026" },
    { label: "Product context", value: "Concept only: fictional client and data, not a Salesforce product" },
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
              value: "A self-initiated concept for a Salesforce designer role: Financial Services Cloud screens for a wealth advisor, in SLDS 2.",
            },
            {
              key: "Problem",
              value: "Before a review, an advisor checks accounts, goals, the household, and open work across several records, then writes the brief by hand.",
            },
            {
              key: "My role and scope",
              value: "All of it: the screens in Figma, the documentation and annotations for developers, and the coded prototype.",
            },
            {
              key: "Decision 1",
              value: "Standard Lightning components first; a custom component only where FSC has none, such as the financial summary and goals.",
              shot: { src: `${D}/client-1600.webp`, alt: "Client 360 record page", to: "#what-it-is", frame: "macbook" },
            },
            {
              key: "Decision 2",
              value: "Agentforce answers only from the open record and states missing data as missing; every answer ends in one action.",
              shot: { src: `${D}/agentforce-brief-1600.webp`, alt: "Agentforce brief in the panel", to: "#use-cases", frame: "macbook" },
            },
            {
              key: "Decision 3",
              value: "Nothing the agent drafts is saved silently: an action plan, note, or agenda opens as a preview the advisor edits.",
              shot: { src: `${D}/action-plan-1600.webp`, alt: "Action plan preview before saving", to: "#use-cases", frame: "macbook" },
            },
            { key: "Outcome", value: "Not measured, as no advisor has tested it; delivered five desktop and three mobile screens, docs, annotations, and a prototype." },
            { key: "Period and team", value: "November 2026, alone." },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim: "One task across five records: be ready for the 10:00 review.",
      standfirst: "Every screen of the concept, in the order the advisor meets them.",
      blocks: [
        {
          kind: "carousel",
          items: [
            { src: `${D}/home-2400.webp`, frame: "macbook", title: "Advisor Home", body: "Today’s priorities from Agentforce, clients needing attention, meetings, and the book of business." },
            { src: `${D}/client-2400.webp`, frame: "macbook", title: "Client 360", body: "Maria Kowalczyk’s Person Account: assets, liabilities, accounts, goals, household, and open work on one page." },
            { src: `${D}/agentforce-brief-2400.webp`, frame: "macbook", title: "Meeting brief", body: "Agentforce reads the record and writes the brief for the review." },
            { src: `${D}/agentforce-options-2400.webp`, frame: "macbook", title: "Options for a goal at risk", body: "Three options for Maria’s holiday home goal, from her risk profile." },
            { src: `${D}/action-plan-2400.webp`, frame: "macbook", title: "Action plan preview", body: "The plan the agent drafted, edited before it is saved." },
            { src: `${D}/household-2400.webp`, frame: "macbook", title: "Household", body: "The family as one client: members, relationships, combined accounts." },
            { src: `${D}/account-2400.webp`, frame: "macbook", title: "Financial Account", body: "A joint investment account: holdings, transactions, and roles." },
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
          kind: "points",
          items: [
            "<strong>The data model decides the layout.</strong> A client, a household, and an account are three records with rollups between them; a joint account must be counted once, not twice.",
            "<strong>Lightning is a platform, not a canvas.</strong> A screen that needs custom components everywhere is expensive to build and to upgrade, so each card names the standard component it uses or says why it cannot.",
            "<strong>An AI answer about money has to be checkable.</strong> The advisor repeats it to a client, so every figure in it comes from the record and every write waits for the advisor.",
          ],
        },
      ],
    },
    {
      id: "design-system",
      n: "06",
      heading: "Design system",
      maxim: "Built from the kit, not drawn to look like it.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>1219 of the 1349 component instances on the five screens come from the SLDS 2 kits</strong>: global header, navigation, page header, cards, data table cells, progress bars, badges, avatars, and the Agentforce panel.",
            "<strong>The other 130 are local components on SLDS tokens</strong>, for what the kit does not have: record field, metric tile, goal row, household member, action plan item, interaction item.",
            "<strong>Colours, spacing, and type are SLDS 2 styling hooks and text styles</strong>, so the screens follow the kit when it changes.",
          ],
        },
      ],
    },
    {
      id: "mobile",
      n: "07",
      heading: "On a phone",
      maxim: "The record keeps its rules; only the layout changes.",
      standfirst: "The same path at 390 px, designed in Figma: the day, the client, and the brief.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>One column, three key values.</strong> The header keeps Total Assets, Net Worth, and Risk Tolerance; the full highlights move to Details.",
            "<strong>Related lists become lists.</strong> Name, one meta line, and one value per row, because a five-column table does not fit a phone.",
            "<strong>Agentforce opens full screen and names the record it reads.</strong> R1 to R3 apply unchanged.",
          ],
        },
        {
          kind: "set",
          size: "phone",
          caption: "Today, Client 360 with Related, Details, and Activity tabs, and the Agentforce brief, from the Figma file.",
          items: [
            { src: `${S}/mobile-today.webp` },
            { src: `${S}/mobile-client.webp` },
            { src: `${S}/mobile-agentforce.webp` },
          ],
        },
      ],
    },
    {
      id: "use-cases",
      n: "08",
      heading: "Three use cases",
      maxim: "The agent prepares; the advisor decides.",
      standfirst: "One per area. Open a tile and the use case unfolds to the right.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "uc-brief",
              n: "01",
              title: "Meeting brief",
              maxim: "An answer about money cites the record or says what is missing.",
              standfirst: "Goal: be ready for a client review without opening every record.",
              cover: { src: `${D}/agentforce-brief-2400.webp`, frame: "macbook" },
              blocks: [
                { kind: "shot", width: "wall", src: `${D}/agentforce-brief-2400.webp`, frame: "macbook", caption: "The brief in the pinned Agentforce panel, next to the record it was written from (R1)." },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-01",
                    title: "Prepare for a client review without opening every record",
                    actor: { name: "The wealth advisor (a role)", body: "Owns a book of clients and holds several reviews a week.", note: "A role, not a researched persona: short of time, and accountable for every figure said to the client." },
                    trigger: { body: "A review in the calendar for tomorrow at 10:00.", note: "Time pressure, not curiosity." },
                    precondition: { body: "The client has financial accounts, goals, and at least one action plan in the org." },
                    flow: [
                      { n: "1", text: "The advisor opens the meeting on Advisor Home.", note: "The brief starts from the event, where the advisor already is." },
                      { n: "2", text: "Client 360 opens with the Agentforce panel pinned.", note: "The record stays visible, so each figure can be checked against it." },
                      { n: "3", text: "Agentforce writes the brief: portfolio, goals, open work.", note: "Only from this record and what the advisor may see." },
                      { n: "4", text: "The advisor opens the brief as an interaction note preview.", note: "Edited before saving, or discarded." },
                    ],
                    exits: [
                      { label: "Save", text: "The brief becomes an Interaction Summary on the client." },
                      { label: "Discard", text: "Nothing is written; the conversation stays in the panel." },
                    ],
                    postcondition: { body: "The advisor knows the three points for the review. No record changed unless the advisor saved." },
                    why: "Rejected: a summary card generated on page load. It costs a model call on every visit and is read when nobody asked.",
                    rule: "R1. Agentforce answers only from the open record and states missing data as missing.",
                    ruleNote: "Applies to every prompt in the panel, on every record page.",
                  },
                },
              ],
            },
            {
              id: "uc-action-plan",
              n: "02",
              title: "Action plan",
              maxim: "An AI draft is a proposal until the advisor saves it.",
              standfirst: "Goal: turn an option the agent proposed into work with owners and dates.",
              cover: { src: `${D}/action-plan-2400.webp`, frame: "macbook" },
              blocks: [
                { kind: "shot", width: "wall", src: `${D}/action-plan-2400.webp`, frame: "macbook", caption: "The action plan Agentforce drafted, open as an editable preview before anything is saved (R2)." },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-02",
                    title: "Turn a proposal for a goal at risk into an action plan",
                    actor: { name: "The wealth advisor (a role)", body: "Has the brief and sees the holiday home goal at 23%.", note: "Wants a plan to show the client, not a paragraph." },
                    trigger: { body: "A goal marked At Risk.", note: "The status comes from funded percent against time elapsed." },
                    precondition: { body: "The goal has a target value and a target date." },
                    flow: [
                      { n: "1", text: "The advisor asks what to propose for the goal.", note: "In plain words; the panel suggests the prompt." },
                      { n: "2", text: "Agentforce lists three options from the risk profile.", note: "Options, not a recommendation: the advice is the advisor’s." },
                      { n: "3", text: "The advisor chooses Create action plan.", note: "One action per answer." },
                      { n: "4", text: "The plan opens prefilled: name, due date, four tasks.", note: "Every field editable; tasks can be unticked." },
                      { n: "5", text: "The advisor saves; the plan appears on Client 360.", note: "The new row is marked so the change is visible." },
                    ],
                    exits: [
                      { label: "Save action plan", text: "The plan is created with the tasks left ticked." },
                      { label: "Cancel", text: "Nothing is created." },
                    ],
                    postcondition: { body: "An open action plan on the client. The goal itself is unchanged until the client decides." },
                    why: "Rejected: create the plan straight from the answer. One click that writes to a client record without review is a compliance risk.",
                    rule: "R2. Nothing the agent drafts is saved without a preview the advisor can edit.",
                    ruleNote: "Applies to notes, agendas, and action plans alike.",
                  },
                },
              ],
            },
            {
              id: "uc-household",
              n: "03",
              title: "Household",
              maxim: "A joint account is counted once.",
              standfirst: "Goal: plan for the family as one client.",
              cover: { src: `${D}/household-2400.webp`, frame: "macbook" },
              blocks: [
                { kind: "shot", width: "wall", src: `${D}/household-2400.webp`, frame: "macbook", caption: "Household with members, relationships, and the accounts of all members, joint accounts counted once (R3)." },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-03",
                    title: "See what the family owns before advising one member",
                    actor: { name: "The wealth advisor (a role)", body: "About to advise Maria on a goal that affects her husband.", note: "Needs the whole picture, quickly." },
                    trigger: { body: "A goal or account shared with another member." },
                    precondition: { body: "The members are related to one Household account." },
                    flow: [
                      { n: "1", text: "From Client 360, the advisor opens the household.", note: "The household card title is the link." },
                      { n: "2", text: "The summary shows combined assets, liabilities, and net worth.", note: "Rolled up from all members." },
                      { n: "3", text: "The accounts list shows every member’s accounts with an owner column.", note: "A joint account appears once, with both owners." },
                    ],
                    exits: [
                      { label: "Open an account", text: "Goes to the Financial Account record." },
                      { label: "Back to the client", text: "Returns to Client 360." },
                    ],
                    postcondition: { body: "The advisor knows the family’s position. Nothing is written." },
                    why: "Rejected: household totals on Client 360 only. The family is a record of its own in FSC, and planning happens at that level.",
                    rule: "R3. Totals roll up from every member, and a joint account is counted once.",
                    ruleNote: "Applies to the household summary and to every report built on it.",
                  },
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
      maxim: "A developer opens Dev Mode and finds the answer next to the element.",
      blocks: [
        {
          kind: "steps",
          items: [
            { n: "01", stage: "Docs", title: "A documentation block above every screen", rule: { label: "Contains", body: "Purpose, sources, and acceptance criteria, numbered AC0.1 to AC4.5." } },
            { n: "02", stage: "Annotations", title: "66 annotations in Dev Mode", rule: { label: "Categories", body: "Development, Interaction, Accessibility, Content, plus Data · FSC for objects and fields, and AI · Agentforce for grounding and confirmation." } },
            { n: "03", stage: "Spec", title: "A handoff spec beside every screen", rule: { label: "Sections", body: "Layout, tokens, components, states, responsive behaviour, edge cases, motion, and accessibility." } },
            { n: "04", stage: "Prototype", title: "The path, clickable", rule: { label: "Where", body: "Coded prototype with the five screens and the Agentforce answers." } },
            { n: "05", stage: "Data", title: "A board for the developer and the architect", rule: { label: "Contains", body: "Objects and fields per card, the three Agentforce actions as Given, When, Then, calculations, LWC and Apex contracts, and open questions." } },
          ],
        },
        {
          kind: "points",
          items: [
            "<strong>Every card names its object, fields, and filter</strong>, and whether a standard related list builds it or it needs a custom LWC.",
            "<strong>API names are marked “confirm”.</strong> The concept does not know whether the org runs the managed FinServ__ package or the core FSC objects, so the board says so instead of guessing.",
            "<strong>Each Agentforce action states what it writes and what happens if it fails</strong>: nothing is created, and the preview stays open (R2).",
          ],
        },
        { kind: "shot", width: "column", src: `${S}/handoff-data-actions.webp`, folded: true, caption: "The data and actions board: objects per screen, Agentforce actions, setup, calculations, LWC and Apex, non-functional requirements, and open questions." },
        { kind: "shot", width: "wall", src: `${S}/doc-agentforce.webp`, folded: true, caption: "The documentation block above screen 02, with its acceptance criteria." },
        { kind: "shot", width: "column", src: `${S}/spec-agentforce.webp`, folded: true, caption: "The handoff spec for screen 02, Agentforce meeting prep." },
      ],
    },
    {
      id: "reflection",
      n: "11",
      heading: "What I would do differently",
      blocks: [
        {
          kind: "joint",
          question: "What would I do differently?",
          answers: [
            "<strong>Test with two or three advisors before the screens.</strong> The task and the trigger are assumptions; an interview would confirm them.",
            "<strong>Build one page in a Salesforce developer org.</strong> App Builder would show which cards are standard and which need a component.",
            "<strong>Use the FSC Relationship Map component.</strong> The concept draws the relationships as a list.",
          ],
        },
        {
          kind: "joint",
          question: "What will I measure, and how?",
          answers: [
            "<strong>Time to prepare a review</strong>, with and without the brief, in a moderated session.",
            "<strong>How often advisors edit a draft before saving</strong>, from the preview, as a measure of trust in the agent.",
            "<strong>Thumbs down per answer</strong>, read with the reason given.",
          ],
        },
      ],
    },
  ],
};
