import type { CaseStudy } from "./types";
import { baldoExploded } from "./exploded";

/**
 * The before-and-after screens, the prototype, and the component board come
 * from the boards once published on Behance; the original documentation is
 * gone. Those screens are crops of the boards, cut to the screen itself so
 * the device mock-ups and stock photography fall away. The cover and the
 * component board are used whole:
 *
 *   reports-*, partner-before, partner-after
 *                             board 15 (before and after, search)
 *   report-*                  board 16 (before and after, reports)
 *   email-before              board 19 (e-mail template, before)
 *   email-after               board 18 (e-mail template, after)
 *   reports-share-prototype   board 13 (prototype, the screen without the monitor
 *                             and without the version and release lines)
 *   components                board 12 (the component board, whole)
 *
 * The cover is the original Behance cover (board 00). Boards 01, 05 and 08
 * are mood photography and 02, 03, 04 and 11 are text set as images; the text
 * that matters is on the page, so they stay out.
 *
 * Boards 06, 14 and 17 (personal data) and 09 (unsupported success figures)
 * were removed and stay removed. The research method and numbers in
 * chapter 03 come from board 06.
 * Board 07 (research results) is not shown either: its Maze table lists
 * tester IDs. Its insight titles are quoted as text in chapter 02.
 *
 * Facts on this page come from the boards, from the owner, or from the
 * owner's CV (docs/copy-edit/sources/cv-2026-10.md). Where the boards
 * disagreed, the team size and the period are the CV's: four Angular
 * developers, August 2022 to August 2023. How old the application was is
 * left out: the sources disagree and none was picked.
 *
 * The Behance screens (partner-after, reports-after, report-builder-after,
 * reports-share-prototype, components) are also composited into a MacBook
 * frame under /work/volvo-erp/device/. The Figma screens below are composited
 * into the same frame by docs/redesign-2026/volvo-scripts/compose.py.
 *
 * The other partner-* screens, and user-* and unit-*, come from
 * three Figma files of the project, "Partner" (J0cHEcdNS0lpwc7JZTDRL4, page
 * Partner Details), "USER" (LSETdjNVpAhJH8uP2i2rXV, page User), and "UNIT"
 * (VcGKfGxRr1YB7XA9PryVfa, Page 1), exported at 2x. In those
 * files every frame has a status card and a note card above it: most say
 * "Approved /Done" and "This is an example of the solution prepared by
 * @Konstancja"; Search User names her as designer, dated 10/10/2022. Names,
 * e-mail addresses, and user, partner, and party IDs on them are blurred, as
 * is the signed-in user in the Partner frames' header (the User and Unit
 * frames show none). Three dialogs (Search User in VCD,
 * Select Partner, the "user created" snackbar) sit on the canvas over their
 * frames, not inside them, and were composited at their canvas position;
 * so were the two Unit dialogs, over the 40 per cent scrim drawn with them.
 * Frames taller than the MacBook screen show a window of the frame; captions
 * describe that window only. The flows in "User flows" follow the order in
 * which the files lay the frames out and the arrows in their names
 * ("select partner -> next -> Copy Applications Result"); the Partner flow
 * starts from the redesigned Partner search on board 15.
 *
 * The three redesigned parts (search, reports, e-mail) sit in chapter 03's
 * dossier, one tile each, so the deep links #search, #reports and #email
 * still open the right place; the decision cards in 00 point at that chapter.
 * The legacy report list (board 15) is shown in the sheet's first station;
 * report-loading-before stays in the folder, unused since the "problem"
 * chapter was folded into 00 and the dossier.
 * The tiles in chapter 05 have their own ids (flow-partner, flow-user,
 * flow-unit); their screen folders are reference and sit in a `fold` under
 * each flow. The hotspots on the legacy screens repeat what the captions
 * and bullets of the same chapter say, pinned to the place on the screen
 * that says it. The sheet in chapter 04 draws the tools the study names:
 * Dovetail, Figma, Usability Hub, Maze; nothing else is on record, so it has
 * no repository or review station.
 */
const S = "/work/volvo-erp/screens";
const D = "/work/volvo-erp/device";

export const volvo: CaseStudy = {
  slug: "volvo-erp",
  title: "Volvo Group ERP",
  what: "A legacy ERP redesign: partners, users, search, reports, and e-mail",
  lead:
    "Baldo is an ERP application in the Volvo Group that handles user authorisation for more than 500 applications and works as a master-data hub. I researched how its key users work and redesigned its search, its reports, the e-mails sent to new users, and the Partner, User, and Unit screens.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Enterprise", "Resource Planning"],
    subline: "for Volvo Group",
    stamp: "LEGACY REDESIGN · PARTNERS · USERS · REPORTS",
    credit: "Senior UX/UI Designer · Volvo Group · 2022–2023",
    shot: { src: "/work/volvo-erp/00-cover.jpg" },
    motif: "report",
    layers: [
      { src: "/work/volvo-erp/device/partner-details-2400.webp", label: "Partner Details" },
      { src: "/work/volvo-erp/device/user-applications-2400.webp", label: "User applications" },
      { src: "/work/volvo-erp/device/user-search-2400.webp", label: "Search User" },
      { src: "/work/volvo-erp/device/reports-after-2400.webp", label: "My reports" },
      { src: "/work/volvo-erp/device/report-builder-after-2400.webp", label: "Report builder" },
    ],
  },
  meta: [
    { label: "Role", value: "Senior UX/UI Designer, contract" },
    { label: "Company", value: "Volvo Group, Baldo" },
    { label: "Team", value: "Four Angular developers, a business analyst, a product owner, a project manager, and me" },
    { label: "Scope", value: "User authorisation and master data across the group" },
    { label: "Period", value: "August 2022 to August 2023" },
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
                "Baldo, the internal Volvo Group platform that authorises users for more than 500 applications and feeds hundreds of subscribers as a master-data hub.",
            },
            {
              key: "Problem",
              value:
                "Administrators did it on dense tables under one row of tabs, and assembled reports field by field in long forms.",
            },
            {
              key: "My role",
              value:
                "User research with the administrators, then the redesign of search, reports, the e-mail template, and the Partner, User, and Unit screens, wireframes to prototypes.",
            },
            {
              key: "Decision 1",
              value:
                "Partner search keeps further criteria under a toggle, and the results table sits on the same screen as the form.",
              shot: { frame: "macbook", src: `${D}/partner-after-1600.webp`, alt: "Partner search with the extra options open and the results table under the form", to: "#redesign" },
            },
            {
              key: "Decision 2",
              value:
                "A report is two lists side by side: the criteria it filters on and the layout it shows. Both stay visible while it is built.",
              shot: { frame: "macbook", src: `${D}/report-builder-after-1600.webp`, alt: "Report builder with Selected criteria and Selected layout side by side", to: "#redesign" },
            },
            {
              key: "Decision 3",
              value:
                "The administrator writes the e-mail inside the layout the user receives, with subject, body, and signature as separate fields.",
              shot: { src: `${S}/email-after.png`, alt: "The e-mail template with Subject, Body, and Signature inside the e-mail layout", to: "#redesign" },
            },
            {
              key: "Outcome",
              value:
                "Before-and-after boards, prototypes, and Figma files with most frames Approved /Done. What was released, and when, is not on record, so no results figures.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      standfirst: "What Baldo does, and its redesigned screens, one per slide.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Baldo <strong>decides which applications a user may reach</strong>, and feeds hundreds of subscribers as a master-data hub. The screens on this page are the administrators': where they look up and edit partners and users, build reports, and write to users about their accounts.</p>",
        },
        {
          kind: "carousel",
          items: [
            { src: `${D}/partner-after-2400.webp`, frame: "macbook", title: "Partner search", body: "The form with the extra options open, the results table below." },
            { src: `${D}/partner-details-2400.webp`, frame: "macbook", title: "Partner Details", body: "Partner information, Business Areas, and Roles (Legacy); seven tabs under them." },
            { src: `${D}/partner-users-2400.webp`, frame: "macbook", title: "A partner's users", body: "The Users tab, with Create User and Open User above the table." },
            { src: `${D}/partner-business-areas-2400.webp`, frame: "macbook", title: "Business areas", body: "One row per business area, a checkbox to select it, and Show." },
            { src: `${D}/partner-contact-book-2400.webp`, frame: "macbook", title: "Contact book", body: "Contacts per application: Administration, Finance, Technical, and Other." },
            { src: `${D}/partner-structure-2400.webp`, frame: "macbook", title: "Partner structure", body: "The partners under this one, as rows that expand." },
            { src: `${D}/unit-details-2400.webp`, frame: "macbook", title: "Unit Details", body: "Unit information, Business Areas, and Roles (Legacy); two tabs, Address and Partners." },
            { src: `${D}/user-search-2400.webp`, frame: "macbook", title: "Search User", body: "User ID, First name, Surname, and Email; more options under a link; Export to Excel." },
            { src: `${D}/user-new-2400.webp`, frame: "macbook", title: "New user", body: "The empty form beside the principal partner and the roles, with VCD Search." },
            { src: `${D}/user-applications-2400.webp`, frame: "macbook", title: "A user's applications", body: "Each application with its status, who changed it and when; Copy Application above." },
            { src: `${D}/reports-after-2400.webp`, frame: "macbook", title: "My reports", body: "The search box suggests report names; the actions for a selected report in one bar." },
            { src: `${D}/report-builder-after-2400.webp`, frame: "macbook", title: "Report builder", body: "Selected criteria and Selected layout side by side; Save, Run report, and Cancel at the top." },
            { src: `${D}/reports-share-prototype-2400.webp`, frame: "macbook", title: "Send a report template", body: "The template goes to an ID number; the recipient cannot see the report data." },
          ],
        },
      ],
    },
    {
      id: "research",
      n: "02",
      heading: "Research",
      standfirst:
        "How key users work in Baldo: their main challenges, frustrations and pain points, and how they get around them.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>A card sort with <strong>15 administrators</strong> and semi-structured interviews of 45 minutes each, recorded in Dovetail. Six insights came out of them:</p>",
        },
        {
          kind: "points",
          items: [
            "People need to take advantage of the technology they work with.",
            "Baldo isn't a sufficient source of information.",
            "Admins need to know the principles and the integration architecture.",
            "Users want to be productive and effective.",
            "Admins take their own initiative.",
            "Admins need additional functionalities to work.",
          ],
        },
      ],
    },
    {
      id: "redesign",
      n: "03",
      heading: "Three parts, redesigned",
      maxim: "Search, reports, and the e-mail each got one rule, and the screen that follows it.",
      standfirst:
        "One tile per part. Open a tile and the part unfolds to the right: the rule, the legacy screen with what was wrong pinned on it, and the screen that replaced it.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "search",
              n: "01",
              title: "Search and results on one screen",
              maxim: "Further search criteria open under a toggle, and the results land on the same screen as the form.",
              standfirst:
                "The old Partner screen was a details page with every field of one partner on it; the new one is a search with its results on the same screen.",
              cover: { src: `${D}/partner-after-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "points",
                  items: [
                    "<strong>Further criteria open under a toggle;</strong> the expanded form shows “Show less search options”.",
                    "<strong>The results come back as a table under the form,</strong> with Open and Generate Excel above it.",
                    "<strong>On the report list, the search box suggests matching report names</strong> as you type.",
                  ],
                },
                {
                  kind: "duo",
                  items: [
                    {
                      src: `${S}/partner-before.png`,
                      caption: "Before: Partner Details, one partner per page, its fields, business areas, roles, and address tabs stacked in one form.",
                      hotspots: [
                        { x: 30, y: 18, text: "One partner per page: every field on a details page." },
                        { x: 50, y: 37, text: "Business areas as a table in the middle of the form." },
                        { x: 26, y: 63, text: "Roles and address as tabs lower in the same form." },
                      ],
                    },
                    {
                      src: `${D}/partner-after-2400.webp`,
                      frame: "macbook",
                      caption: "After: Partner search with the extra options open, Search and Clear search fields at the top, the results table below.",
                    },
                  ],
                },
              ],
            },
            {
              id: "reports",
              n: "02",
              title: "A report is criteria and layout",
              maxim: "What a report filters on and what it shows are two lists, side by side, and both are visible while it is being built.",
              standfirst: "A report is two lists side by side: what it filters on and what it shows.",
              cover: { src: `${D}/report-builder-after-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "points",
                  items: [
                    "<strong>Before, the criteria and the layout were tables on a long form,</strong> reached through Criteria and Layout tabs at the bottom.",
                    "<strong>Now the report has a name and a Private or Public setting at the top,</strong> then two columns: Selected criteria and Selected layout.",
                    "<strong>Each item has a handle to move it and a button to delete it.</strong> Below them the criteria sit in sections such as Unit, opened one by one or all at once.",
                    "<strong>A report template can be sent to someone by their ID number.</strong> The recipient can view or copy the template but not the report data.",
                  ],
                },
                {
                  kind: "duo",
                  items: [
                    {
                      src: `${S}/report-builder-before.png`,
                      caption: "Before: a new report as a form, report information at the top, criteria entered row by row in tables below.",
                      hotspots: [
                        { x: 16, y: 15, text: "Chosen criteria and Chosen layout as two tables, one under the other." },
                        { x: 10, y: 42, text: "Criteria and Layout tabs, then the Unit criteria row by row." },
                        { x: 10, y: 86, text: "A second section, Partner, further down the page." },
                      ],
                    },
                    {
                      src: `${D}/report-builder-after-2400.webp`,
                      frame: "macbook",
                      caption: "After: Selected criteria and Selected layout side by side, Save, Run report, and Cancel at the top, the Unit criteria open underneath.",
                    },
                  ],
                },
              ],
            },
            {
              id: "email",
              n: "03",
              title: "The e-mail looks like what it sends",
              maxim: "Administrators write the message inside the layout the user will receive.",
              standfirst:
                "A new template for the administrators, and for the e-mails users receive, so that the message is written inside the layout the user gets.",
              cover: { src: `${S}/email-after.png` },
              blocks: [
                {
                  kind: "points",
                  items: [
                    "<strong>Before, four fields and a preview.</strong> Head, Message head, Message Body, and Foot, checked in a preview beside them.",
                    "<strong>Now subject, body, and signature are fields inside the e-mail itself,</strong> between the Baldo header and the Volvo footer, with Cancel, Save as draft, and Send at the bottom.",
                    "<strong>The new-account message says what was created</strong> (user name, user ID, date), that the password comes separately, and that an account unused for 14 months is deleted.",
                    "<strong>Internal users are told to sign in with their Windows credentials</strong> instead.",
                  ],
                },
                {
                  kind: "duo",
                  items: [
                    {
                      src: `${S}/email-before.png`,
                      caption: "Before: New user email, the form on the left and a preview on the right, signed “produced by Volvo Group’s Baldo User Administration tool”.",
                      hotspots: [
                        { x: 26, y: 25, text: "Four fields: Head, Message head, Message Body, and Foot." },
                        { x: 85, y: 50, text: "The result checked in a preview next to the form." },
                        { x: 78, y: 88, text: "Send, Don't send, and Cancel at the bottom." },
                      ],
                    },
                    {
                      src: `${S}/email-after.png`,
                      caption: "After: Subject, Body, and Signature inside the e-mail layout, Save as draft next to Send.",
                    },
                  ],
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
        "Partner Details taken apart into the components it is built from. Then how the work ran, drawn: the legacy screen through the tools it passed, to the component board. The component board from the project is folded under it.",
      blocks: [
        { kind: "exploded", screen: baldoExploded },
        {
          kind: "sheet",
          sheet: {
            tools: [
              { name: "Dovetail", mark: "", glyph: "Dv", what: "card sort, interviews, insights" },
              { name: "Figma", mark: "figma", what: "Partner, USER, UNIT files" },
              { name: "Usability Hub", mark: "", glyph: "UH", what: "prototype and navigation tests" },
              { name: "Maze", mark: "", glyph: "Mz", what: "paths through the prototype" },
              { name: "Angular", mark: "angular", what: "four developers on the build" },
            ],
            stations: [
              { tool: "Baldo", mark: "", file: "legacy Reports", title: "Researched as the administrators used it", body: "Card sort with 15 administrators in Dovetail; 45-minute interviews; six insights recorded.", image: { src: `${S}/reports-before.png`, alt: "The legacy report list, one column of names under a row of tabs" } },
              { tool: "Figma", mark: "figma", file: "Partner · Approved /Done", title: "Redrawn, one frame per screen", body: "Each frame carries a status card and a note: prepared by @Konstancja.", image: { src: `${S}/partner-after.png`, alt: "The redesigned Partner search, from the Figma file" } },
              { tool: "Usability Hub, Maze", mark: "", file: "prototype", title: "Prototype and navigation tested", body: "Navigation tests on Usability Hub; paths through the prototype in Maze with 5 testers.", image: { src: `${S}/reports-share-prototype.png`, alt: "The prototype: My reports with the Send link dialog open" } },
              { tool: "Figma", mark: "figma", file: "components", title: "Components on the Volvo Design System", body: "Cards, tables, tabs, chips, and inputs: the board the new screens are built from, for four Angular developers.", image: { src: `${S}/components.png`, alt: "The component board: cards, menus, a data table, tabs, chips, text inputs, and time pickers" } },
            ],
            block: [
              ["Sheet", "How I worked on Baldo"],
              ["Drawn for", "One redesign, from the legacy screen to the component board"],
            ],
          },
        },
        {
          kind: "shot",
          width: "wall",
          src: `${D}/components-2400.webp`,
          frame: "macbook",
          folded: true,
          caption: "The component board from the project: cards, menus, a data table with paging, tabs, chips, text inputs, and time pickers in the style of the new screens.",
        },
      ],
    },
    {
      id: "user-flows",
      n: "05",
      heading: "User flows",
      standfirst:
        "One tile per area. Open a tile and the flow unfolds to the right: the steps, with the screens folded under them in the order the Figma files lay them out.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "flow-partner",
              n: "01",
              title: "Partner: from a search to its business areas",
              maxim: "A partner opens from the search, and its business areas are edited in a dialog over the partner's page.",
              standfirst:
                "Partner Details holds everything about one partner: the form at the top, and seven tabs under it for what belongs to the partner.",
              cover: { src: `${D}/partner-details-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "flow",
                  stages: [
                    { title: "Find", body: "Partner search, the results on the same screen, Open above them." },
                    { title: "Open", body: "Partner Details: partner information, business areas, legacy roles, and comments." },
                    { title: "Edit business areas", body: "The pencil by Business Areas opens the dialog, closed with Save or Close." },
                    { title: "Work in the tabs", body: "Users, Contact book, Application settings, Business Info Authorization, Clients, and Partner structure." },
                  ],
                },
                {
                  kind: "fold",
                  title: "The Partner screens, in order",
                  hint: "Open: seven screens, from the search to the partner structure",
                  blocks: [
                    {
                      kind: "annotated",
                      items: [
                        { id: "01", title: "Partner search", standfirst: "Further criteria under a toggle, the results table under the form, Open and Generate Excel above it.", shot: { src: `${D}/partner-after-2400.webp`, frame: "macbook" } },
                        { id: "02", title: "Partner Details", standfirst: "Save, Close, Delete, Open unit, Directory roles, and Application on media at the top; the comment field says what personal data it may hold under GDPR.", shot: { src: `${D}/partner-details-2400.webp`, frame: "macbook" } },
                        { id: "03", title: "Business Areas", standfirst: "A dialog over the page: one row per business area, a checkbox each, Save or Close at the bottom.", shot: { src: `${D}/partner-business-areas-2400.webp`, frame: "macbook" } },
                        { id: "04", title: "Users", standfirst: "The partner's users, with Create User and Open User above the table.", shot: { src: `${D}/partner-users-2400.webp`, frame: "macbook" } },
                        { id: "05", title: "Contact book", standfirst: "Contacts per application: Administration, Finance, Technical, and Other.", shot: { src: `${D}/partner-contact-book-2400.webp`, frame: "macbook" } },
                        { id: "06", title: "Business Info Authorization", standfirst: "A dialog with a data owner and a list of services to tick; two selected.", shot: { src: `${D}/partner-bia-add-2400.webp`, frame: "macbook" } },
                        { id: "07", title: "Partner structure", standfirst: "The partners under this one, as rows that expand.", shot: { src: `${D}/partner-structure-2400.webp`, frame: "macbook" } },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "flow-user",
              n: "02",
              title: "User: create one, then copy its applications",
              maxim: "A new user is looked up in VCD before it is created, and a user's applications can be copied from another partner.",
              standfirst:
                "Two flows on the user's page: creating a user, and copying applications to a user from another partner.",
              cover: { src: `${D}/user-applications-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "flow",
                  stages: [
                    { title: "New user", body: "An empty form, with Search for User ID and VCD Search." },
                    { title: "Search VCD", body: "Search User in VCD; a row says when the user already exists in Baldo." },
                    { title: "Select partner", body: "The principal partner chosen in a dialog, the country typed ahead." },
                    { title: "Saved", body: "A snackbar confirms the user; it goes after 5 seconds, or the user closes it." },
                  ],
                },
                {
                  kind: "fold",
                  title: "Creating a user, in order",
                  hint: "Open: four screens, from the empty form to the snackbar",
                  blocks: [
                    {
                      kind: "annotated",
                      items: [
                        { id: "01", title: "New User", standfirst: "The empty user form beside the principal partner and the user roles, with Search for User ID and VCD Search.", shot: { src: `${D}/user-new-2400.webp`, frame: "macbook" } },
                        { id: "02", title: "Search User in VCD", standfirst: "Search by user ID, name, surname, e-mail, city, country, or phone; the results show each user's status in Baldo.", shot: { src: `${D}/user-new-vcd-2400.webp`, frame: "macbook" } },
                        { id: "03", title: "Select Partner", standfirst: "Partner search in a dialog; the Country field suggests countries as it is typed.", shot: { src: `${D}/user-new-partner-2400.webp`, frame: "macbook" } },
                        { id: "04", title: "User created", standfirst: "The filled form, and a snackbar in the top right with Close.", shot: { src: `${D}/user-new-saved-2400.webp`, frame: "macbook" } },
                      ],
                    },
                  ],
                },
                {
                  kind: "flow",
                  stages: [
                    { title: "Applications", body: "The user's applications for the selected partner, Copy Application above them." },
                    { title: "Select Partner", body: "The partner to copy from, picked from a table." },
                    { title: "Select Applications", body: "The applications to copy; only saved user applications are copied, and the e-mail can be switched off." },
                    { title: "Result", body: "Copy Applications Result: what was copied, by category and by service, with Finish." },
                  ],
                },
                {
                  kind: "fold",
                  title: "Copying applications, in order",
                  hint: "Open: four screens, from the applications list to the result",
                  blocks: [
                    {
                      kind: "annotated",
                      items: [
                        { id: "05", title: "Applications", standfirst: "Apply Changes, Add Application, Copy Application, Subscriptions, Application Templates, and Additional Request above the list.", shot: { src: `${D}/user-applications-2400.webp`, frame: "macbook" } },
                        { id: "06", title: "Select Partner", standfirst: "Partner ID, name, manager, and status in the table; Previous, Cancel, and Next under it.", shot: { src: `${D}/user-copy-partner-2400.webp`, frame: "macbook" } },
                        { id: "07", title: "Select Applications", standfirst: "Applications ticked one by one, the note that only saved user applications will be copied, and Do not send email.", shot: { src: `${D}/user-copy-apps-2400.webp`, frame: "macbook" } },
                        { id: "08", title: "Copy Applications Result", standfirst: "Two tables, Category and Service, each with a reason per row; Copy Settings, Copy Balda Profile, and Finish.", shot: { src: `${D}/user-copy-result-2400.webp`, frame: "macbook" } },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "flow-unit",
              n: "03",
              title: "Unit: from a search to its roles",
              maxim: "A unit is found by ID, name, or country, and its business areas and legacy roles are edited in dialogs over its page.",
              standfirst:
                "Unit Details has the unit's information, business areas, and legacy roles at the top, and two tabs under them: Address and Partners.",
              cover: { src: `${D}/unit-details-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "flow",
                  stages: [
                    { title: "Find", body: "Search Unit by unit ID, unit name, or country; more options under a link; a unit opens from its ID." },
                    { title: "Open", body: "Unit Details: unit information, business areas, and legacy roles, with Save and Close." },
                    { title: "Edit", body: "The pencils by Business Areas and Roles (Legacy) open each in a dialog." },
                    { title: "Partners", body: "The Partners tab lists the unit's partners, with Add New Partner above them." },
                  ],
                },
                {
                  kind: "fold",
                  title: "The Unit screens, in order",
                  hint: "Open: six screens, from the search to the partners tab",
                  blocks: [
                    {
                      kind: "annotated",
                      items: [
                        { id: "01", title: "Search Unit", standfirst: "Unit ID, Unit name, and Country; the cursor on a unit ID shows Click to open; Export to Excel above the results.", shot: { src: `${D}/unit-search-2400.webp`, frame: "macbook" } },
                        { id: "02", title: "More options", standfirst: "Address, city, US state, postal code, phone number, legacy business area and role, district, and customer.", shot: { src: `${D}/unit-search-advanced-2400.webp`, frame: "macbook" } },
                        { id: "03", title: "Unit Details", standfirst: "Unit information, Business Areas, and Roles (Legacy) at the top; the Address tab open under them.", shot: { src: `${D}/unit-details-2400.webp`, frame: "macbook" } },
                        { id: "04", title: "Business Areas", standfirst: "One row per business area with district, customer, and Pay; one row ticked, then Close or Save.", shot: { src: `${D}/unit-business-areas-2400.webp`, frame: "macbook" } },
                        { id: "05", title: "Roles (Legacy)", standfirst: "A searchable list of roles to tick, then Close or OK. A note in the file marks unifying the Roles dialog as done.", shot: { src: `${D}/unit-roles-2400.webp`, frame: "macbook" } },
                        { id: "06", title: "Partners", standfirst: "The unit's partners in a table, from partner ID to external ID, with Add New Partner above it.", shot: { src: `${D}/unit-partners-2400.webp`, frame: "macbook" } },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
