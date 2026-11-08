import type { CaseStudy } from "./types";

/**
 * A client project in its first iteration: a brief, a user flow, nine
 * wireframes, nine screens, a clickable prototype, and a handoff spec,
 * all in one Figma file, written in November 2026 for a global automotive
 * supplier whose name is not on record here. A phone app, so no MacBook
 * mockup anywhere: the screens are the 390 by 844 frames exported at 3x,
 * the clips are the prototype's own sequence of screens played inside a
 * drawn phone, and the boards are the Figma pages as they are.
 *
 * Nothing shipped yet and nothing was measured but the tap count, so the
 * Outcome row says so. The seven questions to the product owner are still
 * open; the study states the working assumptions the prototype was built
 * on and names them as assumptions.
 */
const W = "/work/flow-logistics";
const S = `${W}/screens`;
const B = `${W}/boards`;

export const flowLogistics: CaseStudy = {
  slug: "flow-logistics",
  title: "Flow Logistics",
  what: "A shop-floor app for an automotive supplier: scan a container, report what you see, know what happened to it",
  lead:
    "A mobile front end to an existing ERP for the warehouse and shop-floor workers of a global automotive supplier. One scan gives the worker the part, the batch, and the location; one report, in five taps, reaches Quality with the batch attached.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · AUTOMOTIVE MANUFACTURING",
    headline: ["From scan", "to action"],
    subline: "A shop-floor app for the plants of a global automotive supplier",
    stamp: "BRIEF · USER FLOW · WIREFRAMES · PROTOTYPE · HANDOFF SPEC",
    credit: "Product Designer · Automotive supplier · 2026",
    art: { src: `${W}/cover-art.webp`, portrait: true },
    shot: { src: `${W}/00-cover.png` },
  },
  meta: [
    { label: "Role", value: "Product Designer: brief, user flow, wireframes, screens, prototype, handoff spec" },
    { label: "Client", value: "A global automotive supplier with plants in many countries and an ERP in place" },
    { label: "Users", value: "Shop-floor and warehouse workers, on a company phone or an industrial terminal, often in gloves" },
    { label: "Method", value: "Requirements from market practice and IATF 16949, hypotheses with fallbacks, a hard scope budget, one test with a fresh person" },
    { label: "Tools", value: "Figma, with a local foundation of variables, text styles, and five components" },
    { label: "Period", value: "November 2026, first iteration" },
    { label: "Status", value: "Prototype v1 tested; seven questions open with the product owner" },
  ],
  chapters: [
    /* ---------------------------------------------------------------- 00 */
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
                "A mobile app for shop-floor workers: scan a container or batch label, report what you see, and know what happened to it. The ERP stays; the app is its light front end.",
            },
            {
              key: "Problem",
              value:
                "Reporting a defect meant walking to a computer and retyping what the ERP already knew. Halls lose coverage, workers wear gloves, and a report nobody follows up is the last one they write.",
            },
            {
              key: "My role",
              value:
                "Product Designer, alone, from brief to handoff: requirements from market practice and the automotive standard, user flow, wireframes, screens, a clickable prototype, and a spec with acceptance criteria.",
            },
            {
              key: "Decision 1",
              value:
                "One scan is the whole context. Part, supplier, batch, location, and quantity come from the ERP after the scan; the worker confirms and never retypes (R7).",
              shot: { src: `${W}/brief/decision-1.webp`, alt: "The item context screen: part, supplier, and batch from the ERP, location as a large editable field", to: "#screens" },
            },
            {
              key: "Decision 2",
              value:
                "AI proposes, the worker confirms. From a photo, voice, or text the assistant fills type, description, and urgency; nothing is sent without the worker (R3).",
              shot: { src: `${W}/brief/decision-2.webp`, alt: "The review screen: the AI suggestion chip over the type and description fields", to: "#use-cases" },
            },
            {
              key: "Decision 3",
              value:
                "Work does not stop without network. A report is saved on the phone as pending sync, and the worker proposes a batch hold rather than holding it alone (R1, H4).",
              shot: { src: `${W}/brief/decision-3.webp`, alt: "The no-network state: report saved locally, batch flagged on this phone", to: "#screens" },
            },
            {
              key: "Outcome",
              value:
                "Prototype v1 in one iteration: nine screens, five taps on the main path, tested with one fresh person on 5 November 2026 with no cuts needed. Time per report is not measured yet.",
            },
            {
              key: "Period and team",
              value: "November 2026. One designer, with seven questions open to the client's product owner.",
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 01 */
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim: "A worker at a container should not need a computer to say what they see.",
      standfirst: "The main path, screen by screen: scan, context, report, confirmation, and the state without network.",
      blocks: [
        {
          kind: "carousel",
          shape: "portrait",
          items: [
            { src: `${S}/01-start.webp`, title: "Start", body: "One button to scan; the worker's reports with their status underneath." },
            { src: `${S}/02-scanner.webp`, title: "Scanner", body: "Reads the label by itself. A code it cannot read is typed in the sheet below, on the same screen." },
            { src: `${S}/03-item-context.webp`, title: "Item context", body: "Part, supplier, and batch from the ERP; location and quantity as large fields to confirm or correct." },
            { src: `${S}/04-observation-input.webp`, title: "Observation input", body: "A photo first; voice or text as the alternatives. One input is enough." },
            { src: `${S}/05-review-submit.webp`, title: "Review and submit", body: "Type, description, and urgency proposed by the assistant, a batch hold to propose, and anonymity to switch on." },
            { src: `${S}/06-confirmation.webp`, title: "Confirmation", body: "Report number, who received it, and the batch marked as pending a quality decision." },
            { src: `${S}/07-no-network.webp`, title: "No network", body: "The same confirmation with a different status: saved on this phone, pending sync." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 02 */
    {
      id: "who-for",
      n: "02",
      heading: "Who it is for",
      standfirst:
        "One role in v1. The shift leader, who receives reports and assigns actions, and Quality, who decides on batch holds, are named in the brief and kept out of the first flow on purpose.",
      blocks: [
        {
          kind: "personas",
          items: [
            {
              n: "01",
              name: "The shop-floor worker",
              badge: "WAREHOUSE AND PRODUCTION · MANY PLANTS",
              quote: "Report it faster than walking to a computer, and know what happened to it.",
              context: "At a container or a batch, phone or industrial terminal in hand, often in gloves, often without coverage.",
              goals: ["Report a defect, damage, quantity mismatch, or hazard in under a minute", "See who received the report and what was decided"],
              breaks: "A form with fifteen fields, a hall with no signal, and nothing coming back.",
              must: "Take one input, fill the rest from the ERP, work offline, and show the status.",
              job: "REPORT",
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 03 */
    {
      id: "brief",
      n: "03",
      heading: "The brief before the pixels",
      maxim: "Vendor content is market practice, not a standard; the brief says which is which.",
      standfirst:
        "The client's brief was a roadmap and the phrase AI Virtual Assistant. The first deliverable was a brief that turned it into requirements, hypotheses, questions, and a budget.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Eight requirements from market practice.</strong> Offline-first, low-friction input, AI as an input assistant, anonymous reporting, visible follow-through, glove-sized targets, one scan for the full context, and batch traceability. The EHS vendors are cited as practice; IATF 16949 clauses 8.5.2.1 and 8.7 as the standard still to verify in the text.",
            "<strong>Five hypotheses, each with a fallback.</strong> Labels carry a scannable code, the ERP returns the batch context, the worker proposes a hold and Quality decides, the device is a company phone or a terminal. If the product owner says otherwise, one word on a button changes.",
            "<strong>Seven questions to the product owner, each with a working assumption.</strong> What AI Virtual Assistant means to the client is question one; the prototype assumes an input assistant and nothing more.",
            "<strong>A hard budget.</strong> One flow, six screens and one state, at most five fields on the form, at most five taps and sixty seconds per report.",
          ],
        },
        {
          kind: "stats",
          items: [
            { value: "8", label: "requirements, each with its reason and source" },
            { value: "5", label: "hypotheses, each with a fallback if wrong" },
            { value: "7", label: "questions to the product owner, each with an assumption" },
            { value: "1", label: "flow in the v1 budget; a second one was added later" },
          ],
        },
        {
          kind: "fold",
          title: "The eight requirements and why each is there",
          hint: "R1 to R8",
          blocks: [
            {
              kind: "spec",
              rows: [
                { key: "R1 Offline-first", value: "Local save, background sync, a visible sent or pending sync status. Halls lose coverage; an app that stops without network is not fit for the shop floor." },
                { key: "R2 Low-friction input", value: "Photo, voice, tags; not fifteen fields. A worker will not stop the shift to fill in a form." },
                { key: "R3 AI as input assistant", value: "Voice or photo become type, description, and urgency; the worker corrects and confirms. The assistant never sends alone, which is what makes it trusted." },
                { key: "R4 Anonymous option", value: "For near-miss and safety reports. Fear of blame is the main reason reporting programmes die." },
                { key: "R5 Visible follow-through", value: "Who received the report, its number, its status, what was done. Without it, reporting stops." },
                { key: "R6 Shop-floor ergonomics", value: "Targets of 56 dp for gloves, high contrast, worker language, no spinner after a scan." },
                { key: "R7 One scan, full context", value: "Part, supplier, batch, location, and quantity from the ERP; nothing retyped, so fewer errors and fewer taps." },
                { key: "R8 Automotive traceability", value: "A quality report is tied to the batch and may propose a hold. It feeds the quality process; it does not replace it." },
              ],
            },
          ],
        },
        {
          kind: "fold",
          title: "What v1 deliberately leaves out",
          hint: "Six cuts",
          blocks: [
            {
              kind: "points",
              items: [
                "<strong>The shift leader's panel.</strong> A different user on a desktop; a separate iteration.",
                "<strong>Checklists and multi-step audits.</strong> Longer flows with many states; not the path from scan to action.",
                "<strong>Status meetings.</strong> A meeting, not a shop-floor task.",
                "<strong>Report-type configuration per location.</strong> Admin work, not the worker's.",
                "<strong>AI beyond the input assistant.</strong> Chat, analytics, recommendations: the client has not said what the assistant should do, so the prototype does not guess.",
                "<strong>Technical ERP integration.</strong> The prototype shows what the ERP returns after a scan, not how.",
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 04 */
    {
      id: "user-flow",
      n: "04",
      heading: "The user flow, with the taps counted",
      maxim: "Five taps, and the photo does not count.",
      standfirst: "Main path on top, branches below: a code the camera cannot read, and a hall without network. The second flow, added after v1, runs along the bottom.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${B}/user-flow.webp`,
          hotspots: [
            { x: 20.5, y: 16.3, text: "Tap 1. The blue chips count taps; photo and voice are not taps." },
            { x: 45.9, y: 16.1, text: "After the scan the ERP answers with part, supplier, batch, location, and quantity. Nothing retyped (R7)." },
            { x: 33.2, y: 30.2, text: "The branch for a damaged label or poor light: type the number, on the same screen." },
            { x: 7.7, y: 43, text: "The assistant proposes type, description, and urgency, marked as a suggestion (R3)." },
            { x: 20.5, y: 44.4, text: "Tap 4. At most five fields; anonymity as an option; the assistant never sends alone." },
            { x: 45.9, y: 57.1, text: "No network: saved locally, pending sync, sent when coverage returns (R1)." },
            { x: 58.6, y: 43, text: "Confirmation: number, recipient, status; the batch marked pending a quality decision (R5, R8)." },
            { x: 33.2, y: 77.5, text: "Flow 2: the product photo from ERP master data is shown before the move is confirmed." },
          ],
          caption: "User flow v1 on page 1 of the file: the main path, the two branches, the tap counter, and flow 2 along the bottom.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 05 */
    {
      id: "wireframes",
      n: "05",
      heading: "Wireframes: one primary element per screen",
      standfirst: "Grey boxes, no colour, no icons: layout, hierarchy, and the tap count. Each screen carries a note on its primary element and the taps so far.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>One primary element per screen.</strong> The scan button, the viewfinder, the two large fields, the photo tile, the submit button, the report number. Everything else is secondary by size.",
            "<strong>The scan error is a bottom sheet, not a screen.</strong> The worker types the number without leaving the scanner. The no-network state is a screen of its own, because it verifies R1.",
            "<strong>The budget held.</strong> Four fields and the anonymity toggle on the review screen; five taps to the confirmation.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${B}/wireframes.webp`,
          caption: "Wireframes v1 on page 2 of the file: nine lo-fi screens at 390 by 844, each with its note. Screens 8 and 9 are flow 2.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 06 */
    {
      id: "screens",
      n: "06",
      heading: "Screens and foundations",
      maxim: "A small local foundation beats a subscribed Material kit when the target is a gloved hand.",
      standfirst: "Nine screens at 390 by 844, a clickable prototype, and the foundation they are built from: variables, seven text styles, five components, nineteen icons.",
      blocks: [
        {
          kind: "tabs",
          label: "Two flows and the foundation",
          items: [
            {
              label: "Flow 1 · Report an observation",
              blocks: [
                {
                  kind: "set",
                  size: "phone",
                  items: [
                    { src: `${S}/01-start.webp`, caption: "Start. The scan button at 96 dp; the worker's reports with their status (R5)." },
                    { src: `${S}/02-scanner.webp`, caption: "Scanner. Auto-read, no spinner; the bottom sheet takes a typed number (R6)." },
                    { src: `${S}/03-item-context.webp`, caption: "Item context. The ERP card, then location and quantity at 64 dp (R7)." },
                    { src: `${S}/04-observation-input.webp`, caption: "Observation input. Photo first, voice and text beside it (R2)." },
                    { src: `${S}/05-review-submit.webp`, caption: "Review. The AI suggestion chip, five fields, propose batch hold, anonymity (R3, R4, H4)." },
                    { src: `${S}/06-confirmation.webp`, caption: "Confirmation. Number, recipient, time, and the batch flagged (R5, R8)." },
                    { src: `${S}/07-no-network.webp`, caption: "No network. The banner, the same screen, pending sync (R1)." },
                  ],
                },
              ],
            },
            {
              label: "Flow 2 · Move a product",
              blocks: [
                {
                  kind: "set",
                  size: "phone",
                  items: [
                    { src: `${S}/08-move-product.webp`, caption: "Move product. The product photo from ERP master data before the decision; the source read-only; the target scanned or typed." },
                    { src: `${S}/09-move-confirmed.webp`, caption: "Move logged. From and to with the photo thumbnail; ERP updated, or pending sync without network." },
                  ],
                },
                {
                  kind: "points",
                  items: [
                    "<strong>Added after v1, outside the one-flow budget, and kept to two screens.</strong> It enters from the item context, so the scan serves both flows.",
                    "<strong>Move product replaced the Actions here button on screen 3.</strong> Site actions moved to the start list and to the next steps.",
                  ],
                },
              ],
            },
            {
              label: "Foundations",
              blocks: [
                {
                  kind: "points",
                  items: [
                    "<strong>A local foundation instead of the Material 3 kit subscribed in the file.</strong> Touch targets of 56 dp, contrast the hall floor needs, and full control over the five components; the file is self-contained for the client.",
                    "<strong>Variables in web syntax.</strong> Colour, spacing, radius, and size as variables that read as CSS custom properties, so the tokens hand over without translation.",
                    "<strong>Inter throughout, seven text styles.</strong> Display 28, title 20, body 16, label 14, caption 12, overline 11; large values for location and quantity so they read from a metre away.",
                  ],
                },
                {
                  kind: "shot",
                  width: "column",
                  src: `${B}/foundations.webp`,
                  caption: "Page 4 of the file: the icons, Button in three styles and two sizes, StatusChip in six tones, Field, TopBar, ListRow.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* --------------------------------------------------------------- 06a */
    {
      id: "flow-watched",
      n: "06a",
      heading: "The flow, as the prototype plays it",
      standfirst: "The screens in the order the prototype links them, with the taps drawn. The photo is taken between screens four and five and is not a tap.",
      blocks: [
        {
          kind: "tabs",
          label: "Two flows, played through",
          items: [
            {
              label: "Flow 1 · Report an observation",
              blocks: [
                {
                  kind: "beside",
                  html:
                    "<p><strong>Five taps from the start screen to a report Quality can act on.</strong> The scanner reads by itself; the ERP answers; the assistant fills the form; the worker checks and submits.</p><ul><li><strong>Tap 1, scan.</strong> The viewfinder reads the label; no spinner, straight to the item context.</li><li><strong>Tap 2, report.</strong> Location and quantity stand confirmed by the same tap, so the worker does not confirm twice.</li><li><strong>Tap 3, photo.</strong> Taking it is not counted. Voice or text are the alternatives.</li><li><strong>Tap 4, the hold.</strong> Propose batch hold is already proposed by the assistant; the worker keeps it or not.</li><li><strong>Tap 5, submit.</strong> The confirmation names the number, the recipient, and the batch status.</li></ul>",
                  video: { src: `${W}/clips/from-scan-to-action.mp4`, poster: `${W}/clips/from-scan-to-action.webp`, title: "Flow 1 played through: scan, context, photo, review, confirmation", mockup: true },
                  caption: "Flow 1 in the prototype, 15 seconds, looping.",
                },
              ],
            },
            {
              label: "Flow 2 · Move a product",
              blocks: [
                {
                  kind: "beside",
                  html:
                    "<p><strong>Four taps from the item context to a logged move.</strong> Same scan, same screen; the second flow adds two screens and no new entry point.</p><ul><li><strong>Tap 3, move product.</strong> The secondary action beside Report observation.</li><li><strong>The photo before the decision.</strong> The product from ERP master data, the source location read-only, the target as warehouse, aisle, and sector.</li><li><strong>Scan the target shelf, or type it.</strong> A scan fills the three fields without a tap.</li><li><strong>Tap 4, confirm.</strong> From and to with the thumbnail; ERP updated, or pending sync without network.</li></ul>",
                  video: { src: `${W}/clips/move-product.mp4`, poster: `${W}/clips/move-product.webp`, title: "Flow 2 played through: item context, move product, confirm, logged", mockup: true },
                  caption: "Flow 2 in the prototype, 8 seconds, looping.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 07 */
    {
      id: "use-cases",
      n: "07",
      heading: "Two use cases",
      maxim: "The worker never types what the ERP knows and never decides what Quality owns.",
      standfirst: "One per flow. Open a tile and the use case unfolds to the right.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "uc-report",
              n: "01",
              title: "Report a defect and propose a batch hold",
              maxim: "Propose, not hold: the worker raises the flag, Quality decides.",
              standfirst: "Goal: report cracked housings in a container of 240 parts and get the batch in front of Quality.",
              cover: { src: `${W}/brief/decision-2.webp` },
              blocks: [
                {
                  kind: "set",
                  size: "phone",
                  items: [
                    { src: `${S}/03-item-context.webp`, caption: "The context after the scan (R7)." },
                    { src: `${S}/05-review-submit.webp`, caption: "The suggestion, checked; the hold, proposed (R3, H4)." },
                    { src: `${S}/06-confirmation.webp`, caption: "The number, the recipient, the batch status (R5)." },
                  ],
                },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-01",
                    title: "Report a defect from the container and propose a batch hold",
                    actor: { name: "01, the shop-floor worker", body: "At the container, phone in hand.", note: "Wants to be back at work in a minute, and to be believed." },
                    trigger: { body: "Sees cracked housings on three parts in a container of 240.", note: "Doubt about the whole batch, not only the three parts." },
                    precondition: { body: "The container label carries a code the camera can read, or a number the worker can type." },
                    flow: [
                      { n: "1", text: "Scan the label. The ERP returns part, supplier, batch, location, and quantity.", note: "Nothing retyped (R7); a code not read is typed in the bottom sheet." },
                      { n: "2", text: "Confirm or correct location and quantity, and tap Report observation.", note: "Edits are stored with the report as reported values; master data is never overwritten." },
                      { n: "3", text: "Take a photo, or record voice, or type.", note: "One input is enough; photo and voice do not count as taps (R2)." },
                      { n: "4", text: "Check what the assistant proposed: type, description, urgency, and the batch hold.", note: "Marked as a suggestion; the worker has the last word (R3)." },
                      { n: "5", text: "Submit.", note: "One button, 56 dp; anonymity switched on only for safety and near-miss types (R4)." },
                    ],
                    exits: [
                      { label: "Submitted", text: "Report number, recipient, time; the batch marked pending a quality decision." },
                      { label: "Saved on this phone", text: "No network: pending sync, sent in the background when coverage returns." },
                    ],
                    exitsNote: "Both exits end on the same screen with a different status, so the worker learns one screen.",
                    postcondition: { body: "Quality has the report with the batch attached; the batch is flagged, not held. The worker's start screen lists the report with its status.", note: "What is deliberately not true: no hold has been placed by the worker." },
                    why: "Rejected: a Hold batch button for the worker. Under hypothesis H4 the worker proposes and Quality decides, because a hold is a control of nonconforming output under IATF 16949, not a shop-floor tap. If the product owner says otherwise, one word changes.",
                    rule: "The worker never types what the ERP knows and never decides what Quality owns.",
                    ruleNote: "Applies to the move flow too: the source location is read-only, from the scan.",
                  },
                },
              ],
            },
            {
              id: "uc-move",
              n: "02",
              title: "Move a product to another warehouse",
              maxim: "A new flow enters through an existing screen, or it does not enter v1.",
              standfirst: "Goal: move the scanned container to another hall and see the move logged.",
              cover: { src: `${W}/brief/move-product.webp` },
              blocks: [
                {
                  kind: "set",
                  size: "phone",
                  items: [
                    { src: `${S}/03-item-context.webp`, caption: "Move product as the second secondary action." },
                    { src: `${S}/08-move-product.webp`, caption: "The product photo before the decision; the target scanned or typed." },
                    { src: `${S}/09-move-confirmed.webp`, caption: "From and to, with the thumbnail and the ERP status." },
                  ],
                },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-02",
                    title: "Move a scanned product to another warehouse",
                    actor: { name: "01, the shop-floor worker", body: "At the container, after a scan.", note: "Moves what they see, not a part number." },
                    trigger: { body: "A container has to go to another hall.", note: "Requested by the client after v1; a warehouse operation, not a report, so outside the one-flow budget." },
                    precondition: { body: "The item context is open after a scan; the ERP holds a photo for the part (hypothesis H6, to confirm)." },
                    flow: [
                      { n: "1", text: "Tap Move product on the item context screen.", note: "It replaced Actions here, a secondary button that had no flow behind it." },
                      { n: "2", text: "See the product photo from ERP master data, the source location read-only, and the target fields.", note: "The photo before the decision, so the worker moves what they see." },
                      { n: "3", text: "Scan the target shelf label, or pick the warehouse and type aisle and sector.", note: "A scan fills all three fields without a tap." },
                      { n: "4", text: "Confirm move.", note: "Disabled until the three target fields are valid." },
                    ],
                    exits: [
                      { label: "ERP updated", text: "From and to with the photo thumbnail and the time." },
                      { label: "Pending sync", text: "No network: the move kept on this phone and sent later." },
                    ],
                    exitsNote: "The same pattern as the report confirmation: one screen, two statuses.",
                    postcondition: { body: "The move is logged with the photo thumbnail; the ERP has the new location, or will when coverage returns." },
                    why: "Rejected: a separate entry point with its own scan. The same scan serves both flows, so the second flow costs the worker nothing new and the prototype two screens.",
                    rule: "A new flow enters through an existing screen, or it does not enter v1.",
                    ruleNote: "Four taps, within the same budget as the report.",
                  },
                },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 08 */
    {
      id: "handoff",
      n: "08",
      heading: "Handoff: acceptance criteria and a spec in the file",
      maxim: "A prototype without acceptance criteria is a picture.",
      standfirst: "What development receives: the Documentation block over the screens, a handoff spec beside them, and variables that read as code.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Thirteen acceptance criteria, AC1.1 to AC6.1,</strong> on the Documentation block at the top of the Screens page: scan entry and manual fallback, context from the ERP, the form budget, anonymous reporting, follow-through, offline-first, the move, and ergonomics. Each traces to a requirement or a hypothesis.",
            "<strong>A handoff spec beside the screens,</strong> in nine sections: overview, layout, tokens, components, states and interactions, responsive behaviour, edge cases, motion, accessibility. Written from the file's variables and instances, not from memory.",
            "<strong>Ten edge cases the screens do not show:</strong> an unknown code, the ERP unreachable, a quantity that differs by more than ten percent, an assistant that times out, no camera permission, a duplicate submit, a product with no photo.",
            "<strong>Accessibility measured, not asserted:</strong> every control at 56 dp, text on the surface at 15 to 1, the warn and ok chips at 4.6 and 4.7 to 1, a focus order for terminals that send scans as keyboard input.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${B}/documentation.webp`,
          folded: true,
          caption: "The Documentation block on the Screens page: designer, date, status, sources, and the thirteen acceptance criteria.",
        },
        {
          kind: "shot",
          width: "column",
          src: `${B}/handoff-spec.webp`,
          folded: true,
          caption: "The handoff spec, placed right of the screens: nine sections from overview to accessibility.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 09 */
    {
      id: "evidence",
      n: "09",
      heading: "What was tested, and what was not",
      standfirst: "One session on 5 November 2026 with a person who had not seen the file, five minutes, two tasks. The numbers below are the ones on record.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "5", label: "taps on the main path, photo and voice not counted" },
            { value: "9", label: "screens: seven in flow 1, two in flow 2" },
            { value: "2", label: "test tasks, both completed, no cuts needed" },
            { value: "60 s", label: "target per report, not yet measured" },
          ],
        },
        {
          kind: "points",
          items: [
            "<strong>Task one: report a defect on a part from this container and propose a batch hold.</strong> Completed on the main path.",
            "<strong>Task two: check what happened to your report.</strong> Found on the start screen's list.",
            "<strong>Not claimed:</strong> the vendors' figures for the rise in reporting after going mobile, between thirty and sixty percent, are left out of the brief because none gives a method.",
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 10 */
    {
      id: "next",
      n: "10",
      heading: "What happens next",
      blocks: [
        {
          kind: "joint",
          question: "What is open before the client sees it?",
          answers: [
            "<strong>The product owner's answers to the seven questions,</strong> and the hypotheses updated. Question one, what AI Virtual Assistant means to the client, decides whether the input assistant is the right shape.",
            "<strong>The standard in its own text.</strong> IATF 16949 clauses 8.5.2.1 and 8.7, and the client's customer-specific requirements: is a proposed hold enough, or must the worker be able to hold.",
            "<strong>A real product photo from the client's ERP</strong> in place of the placeholder on screens 8 and 9.",
            "<strong>The next users.</strong> The shift leader's view with actions, then checklists, audits, and the desktop version, each as its own iteration against the same budget.",
          ],
        },
      ],
    },
  ],
};
