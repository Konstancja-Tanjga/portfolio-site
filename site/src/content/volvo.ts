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
 * tester IDs. Its insight titles are quoted as text in chapter 03.
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
 * The three redesigned parts (search, reports, e-mail) sit in chapter 04's
 * dossier, one tile each, so the deep links #search, #reports and #email
 * still open the right place. The tiles in chapter 06 have their own ids
 * (flow-partner, flow-user, flow-unit). The hotspots on the legacy screens repeat what the
 * captions and bullets of the same chapter say, pinned to the place on the
 * screen that says it.
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
              key: "Context",
              value:
                "Baldo is an internal Volvo Group platform: it authorises users for more than 500 applications and, as a master-data hub, feeds hundreds of subscribers with data.",
            },
            {
              key: "Problem",
              value:
                "Administrators decide in Baldo which of more than 500 applications each user can reach. The screens they did it on were dense tables under a row of tabs, and reports were assembled field by field in forms.",
            },
            {
              key: "My role and scope",
              value:
                "Senior UX/UI Designer, on contract. User research with the administrators, and the redesign of search, reports, the e-mail template, and the Partner, User, and Unit screens, from wireframes to prototypes.",
            },
            {
              key: "Decision 1",
              value:
                "Partner search keeps further criteria under a toggle, and the results table sits on the same screen as the form.",
            },
            {
              key: "Decision 2",
              value:
                "A report is two lists side by side: the criteria it filters on and the layout it shows. Both stay visible while the report is built.",
            },
            {
              key: "Decision 3",
              value:
                "The administrator writes the e-mail inside the layout the user receives, with subject, body and signature as separate fields.",
            },
            {
              key: "Outcome",
              value:
                "Before-and-after boards and prototypes for search, reports, and the e-mail template, grounded in card sorting with 15 administrators in Dovetail, 45-minute semi-structured interviews, prototype and navigation tests on Usability Hub, and Maze tests with 5 testers. The material does not record what was released or when, so this page gives no results figures.",
            },
            {
              key: "Period and team",
              value:
                "August 2022 to August 2023. Four Angular developers, a business analyst, a product owner, a project manager, and me.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      standfirst: "What Baldo does, who I designed for, and its redesigned screens, one per slide.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Baldo is an internal Volvo Group platform that <strong>decides which applications a user may reach</strong>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Authorisation for more than five hundred applications.</strong> Administrators decide which applications a user should have access to.",
            "<strong>A master-data hub.</strong> It gives users and their organisations a business context and feeds hundreds of subscribers with data through its Publish/Subscribe service.",
            "<strong>The people I designed for are those administrators.</strong> The screens on this page are the ones they use to look up and edit partners and users, build reports, and write to users about their accounts.",
          ],
        },
        {
          kind: "carousel",
          items: [
            { src: `${D}/partner-after-2400.webp`, frame: "macbook", title: "Partner search", body: "The search form with the extra options open, Search and Clear search fields at the top, and the results table below." },
            { src: `${D}/partner-details-2400.webp`, frame: "macbook", title: "Partner Details", body: "Partner information, Business Areas, and Roles (Legacy) side by side, a comment field with a note on GDPR, and seven tabs under them, from Address to Partner structure." },
            { src: `${D}/partner-users-2400.webp`, frame: "macbook", title: "A partner's users", body: "The Users tab: the partner's users in a table, with Create User and Open User above it." },
            { src: `${D}/partner-business-areas-2400.webp`, frame: "macbook", title: "Business areas", body: "The Baldo Business Areas dialog: one row per business area, with district, customer, sales organisation, global company, Parma ID, and Pay, a checkbox to select it, and Show." },
            { src: `${D}/partner-contact-book-2400.webp`, frame: "macbook", title: "Contact book", body: "The partner's contacts per application, four types each: Administration, Finance, Technical, and Other, each with name, phone, mobile, and e-mail." },
            { src: `${D}/partner-structure-2400.webp`, frame: "macbook", title: "Partner structure", body: "The partners under this one as rows that expand, with the selected row highlighted." },
            { src: `${D}/unit-details-2400.webp`, frame: "macbook", title: "Unit Details", body: "Unit information, Business Areas, and Roles (Legacy) at the top, and two tabs under them, Address and Partners." },
            { src: `${D}/user-search-2400.webp`, frame: "macbook", title: "Search User", body: "User ID, First name, Surname, and Email as search fields, more options under a link, and the results with Export to Excel." },
            { src: `${D}/user-new-2400.webp`, frame: "macbook", title: "New user", body: "The empty user form beside the principal partner and the user roles, with Search for User ID under the User ID field and VCD Search in the toolbar." },
            { src: `${D}/user-applications-2400.webp`, frame: "macbook", title: "A user's applications", body: "The Applications tab: the applications for the selected partner, each with its status, who changed it and when, and its settings; Copy Application and Application Templates above them." },
            { src: `${D}/reports-after-2400.webp`, frame: "macbook", title: "My reports", body: "The search box suggests report names and highlights the typed letters; the actions for a selected report sit in one bar." },
            { src: `${D}/report-builder-after-2400.webp`, frame: "macbook", title: "Report builder", body: "Selected criteria and Selected layout side by side, with Save, Run report and Cancel at the top." },
            { src: `${D}/reports-share-prototype-2400.webp`, frame: "macbook", title: "Send a report template", body: "The Send link dialog over My reports: the template goes to an ID number, and the recipient cannot see the report data." },
          ],
        },
      ],
    },
    {
      id: "problem",
      n: "02",
      heading: "The problem",
      standfirst: "The legacy screens, as the administrators used them before the redesign.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Every part of the application sat behind <strong>one row of tabs</strong>: User, Partner, Unit, Maintenance, Forms, Reports, and the rest.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>The report list was one long column of names,</strong> with copies of copies next to the originals and no search box on the screen.",
            "<strong>Building a report meant filling in tables</strong> of criteria and layout fields further down the page.",
            "<strong>Opening a report could stop the screen</strong> with a loading message.",
          ],
        },
        {
          kind: "duo",
          items: [
            {
              src: `${S}/reports-before.png`,
              caption:
                "The legacy report list: every report in one column, including names like “Copy of Copy of DDBasicNewReport61”, with the actions in a small toolbar above it.",
              hotspots: [
                { x: 74, y: 12, text: "One row of tabs for every part of the application: User, Partner, Unit, Maintenance, Forms, Reports, and the rest." },
                { x: 22, y: 41, text: "Copies of copies next to the originals, “Copy of Copy of DDBasicNewReport61”, and no search box to find one." },
                { x: 14, y: 82, text: "One long column of names, DBBasicReportNew1 to 18 and on." },
              ],
            },
            {
              src: `${S}/report-loading-before.png`,
              caption:
                "A legacy report screen with “Please wait while page is loading” over the criteria and layout tables.",
              hotspots: [
                { x: 64, y: 55, text: "“Please wait while page is loading” can stop the screen while a report opens." },
                { x: 18, y: 36, text: "Criteria entered row by row in a table." },
                { x: 10, y: 76, text: "Criteria and Layout as tabs at the bottom of a long form." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "research",
      n: "03",
      heading: "Research",
      standfirst:
        "The goal was to find out how key users work in Baldo: their main challenges, frustrations and pain points, and how they get around them.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "15", label: "administrators in the card sort, run in Dovetail" },
            { value: "45 min", label: "per semi-structured interview" },
            { value: "5", label: "testers in the Maze tests" },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>I ran a card sort with 15 administrators in Dovetail and semi-structured interviews of 45 minutes each. Prototypes and the navigation were tested on Usability Hub, and paths through the prototype were tested in Maze with 5 testers. The insights I recorded in Dovetail were these:</p>",
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
      n: "04",
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
                      caption:
                        "Before: Partner Details, one partner per page, with its fields, business areas, roles and address tabs stacked in one form.",
                      hotspots: [
                        { x: 30, y: 18, text: "One partner per page: every field of the partner on a details page." },
                        { x: 50, y: 37, text: "Business areas as a table in the middle of the form." },
                        { x: 26, y: 63, text: "Roles and address as tabs stacked lower in the same form." },
                      ],
                    },
                    {
                      src: `${D}/partner-after-2400.webp`,
                      frame: "macbook",
                      caption:
                        "After: Partner search with the extra options open (“Show less search options” closes them), Search and Clear search fields at the top, and the results table below.",
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
                    "<strong>Each item has a handle to move it and a button to delete it.</strong> Below them the criteria are grouped in sections such as Unit, which open and close one by one or all at once.",
                    "<strong>A report template can be sent to someone by their ID number.</strong> The dialog tells the sender that the recipient can view or copy the template but will not see the report data.",
                  ],
                },
                {
                  kind: "duo",
                  items: [
                    {
                      src: `${S}/report-builder-before.png`,
                      caption:
                        "Before: a new report as a form, with report information at the top and criteria entered row by row in tables below.",
                      hotspots: [
                        { x: 16, y: 15, text: "Report information at the top, then Chosen criteria and Chosen layout as two tables, one under the other." },
                        { x: 10, y: 42, text: "Criteria and Layout tabs, then the Unit criteria entered row by row." },
                        { x: 10, y: 86, text: "A second section, Partner, further down the page." },
                      ],
                    },
                    {
                      src: `${D}/report-builder-after-2400.webp`,
                      frame: "macbook",
                      caption:
                        "After: Selected criteria and Selected layout side by side, with Save, Run report and Cancel at the top and the Unit criteria open underneath.",
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
                    "<strong>Before, four fields and a preview.</strong> An administrator filled in Head, Message head, Message Body, and Foot and checked the result in a preview next to them.",
                    "<strong>Now subject, body, and signature are fields inside the e-mail itself,</strong> between the Baldo header and the Volvo footer, with Cancel, Save as draft, and Send at the bottom.",
                    "<strong>The new-account message says what was created</strong> (user name, user ID, date), that the password comes in a separate e-mail, and that an account not used for 14 months is deleted automatically.",
                    "<strong>Internal users are told to sign in with their Windows credentials</strong> instead.",
                  ],
                },
                {
                  kind: "duo",
                  items: [
                    {
                      src: `${S}/email-before.png`,
                      caption:
                        "Before: New user email, with the form on the left and a preview on the right, signed “produced by Volvo Group’s Baldo User Administration tool”.",
                      hotspots: [
                        { x: 26, y: 25, text: "Four fields: Head, Message head, Message Body, and Foot." },
                        { x: 85, y: 50, text: "The result checked in a preview next to the form, signed “produced by Volvo Group’s Baldo User Administration tool”." },
                        { x: 78, y: 88, text: "Send, Don't send, and Cancel at the bottom." },
                      ],
                    },
                    {
                      src: `${S}/email-after.png`,
                      caption:
                        "After: the template administrators edit, with Subject, Body and Signature inside the e-mail layout and Save as draft next to Send.",
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
      n: "05",
      heading: "Design system",
      standfirst:
        "Partner Details taken apart into the components it is built from, and the component board from the project.",
      blocks: [
        { kind: "exploded", screen: baldoExploded },
        {
          kind: "shot",
          width: "wall",
          src: `${D}/components-2400.webp`,
          frame: "macbook",
          folded: true,
          caption:
            "The component board from the project: cards, menus, a data table with paging, tabs, chips, text inputs and time pickers in the style of the new screens.",
        },
      ],
    },
    {
      id: "user-flows",
      n: "06",
      heading: "User flows",
      standfirst:
        "One tile per area. Open a tile and the flow unfolds to the right: the steps, then the screens in the order the Figma files lay them out.",
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
                    { title: "Find", body: "Partner search, with the results on the same screen and Open above them." },
                    { title: "Open", body: "Partner Details: partner information, business areas, legacy roles, and comments." },
                    { title: "Edit business areas", body: "The pencil by Business Areas opens the Baldo Business Areas dialog, closed with Save or Close." },
                    { title: "Work in the tabs", body: "Users, Contact book, Application settings, Business Info Authorization, Clients, and Partner structure." },
                  ],
                },
                {
                  kind: "annotated",
                  items: [
                    { id: "01", title: "Partner search", standfirst: "Further criteria under a toggle, the results table under the form, Open and Generate Excel above it.", shot: { src: `${D}/partner-after-2400.webp`, frame: "macbook" } },
                    { id: "02", title: "Partner Details", standfirst: "Save, Close, Delete, Open unit, Directory roles, and Application on media at the top; the comment field says what personal data it may hold under GDPR.", shot: { src: `${D}/partner-details-2400.webp`, frame: "macbook" } },
                    { id: "03", title: "Business Areas", standfirst: "A dialog over the page: one row per business area, selected with a checkbox, saved or closed at the bottom.", shot: { src: `${D}/partner-business-areas-2400.webp`, frame: "macbook" } },
                    { id: "04", title: "Users", standfirst: "The partner's users, with Create User and Open User above the table.", shot: { src: `${D}/partner-users-2400.webp`, frame: "macbook" } },
                    { id: "05", title: "Contact book", standfirst: "Contacts per application: Administration, Finance, Technical, and Other.", shot: { src: `${D}/partner-contact-book-2400.webp`, frame: "macbook" } },
                    { id: "06", title: "Business Info Authorization", standfirst: "A dialog with a data owner and a list of services to tick; two of them selected.", shot: { src: `${D}/partner-bia-add-2400.webp`, frame: "macbook" } },
                    { id: "07", title: "Partner structure", standfirst: "The partners under this one, as rows that expand.", shot: { src: `${D}/partner-structure-2400.webp`, frame: "macbook" } },
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
                    { title: "Select partner", body: "The principal partner chosen in a dialog, with the country typed ahead." },
                    { title: "Saved", body: "A snackbar confirms the user was created; by default it goes after 5 seconds, or the user closes it." },
                  ],
                },
                {
                  kind: "annotated",
                  items: [
                    { id: "01", title: "New User", standfirst: "The empty user form beside the principal partner and the user roles, with Search for User ID and VCD Search.", shot: { src: `${D}/user-new-2400.webp`, frame: "macbook" } },
                    { id: "02", title: "Search User in VCD", standfirst: "Search by user ID, name, surname, e-mail, city, country, or phone; the results show each user's status in Baldo.", shot: { src: `${D}/user-new-vcd-2400.webp`, frame: "macbook" } },
                    { id: "03", title: "Select Partner", standfirst: "Partner search in a dialog; the Country field suggests countries as it is typed.", shot: { src: `${D}/user-new-partner-2400.webp`, frame: "macbook" } },
                    { id: "04", title: "User created", standfirst: "The filled form, and a snackbar in the top right with Close.", shot: { src: `${D}/user-new-saved-2400.webp`, frame: "macbook" } },
                  ],
                },
                {
                  kind: "flow",
                  stages: [
                    { title: "Applications", body: "The user's applications for the selected partner, and Copy Application above them." },
                    { title: "Select Partner", body: "The partner to copy from, picked from a table." },
                    { title: "Select Applications", body: "The applications to copy; only saved user applications are copied, and the e-mail can be switched off." },
                    { title: "Result", body: "Copy Applications Result: what was copied, by category and by service, with Finish." },
                  ],
                },
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
                    { title: "Find", body: "Search Unit by unit ID, unit name, or country; more options open under a link, and a unit opens from its ID." },
                    { title: "Open", body: "Unit Details: unit information, business areas, and legacy roles, with Save and Close." },
                    { title: "Edit", body: "The pencils by Business Areas and Roles (Legacy) open each in a dialog." },
                    { title: "Partners", body: "The Partners tab lists the unit's partners, with Add New Partner above them." },
                  ],
                },
                {
                  kind: "annotated",
                  items: [
                    { id: "01", title: "Search Unit", standfirst: "Unit ID, Unit name, and Country; the cursor on a unit ID shows Click to open; Export to Excel above the results.", shot: { src: `${D}/unit-search-2400.webp`, frame: "macbook" } },
                    { id: "02", title: "More options", standfirst: "Address, city, US state, postal code, phone number, legacy business area and role, district, and customer.", shot: { src: `${D}/unit-search-advanced-2400.webp`, frame: "macbook" } },
                    { id: "03", title: "Unit Details", standfirst: "Unit information, Business Areas, and Roles (Legacy) at the top; the Address tab open under them.", shot: { src: `${D}/unit-details-2400.webp`, frame: "macbook" } },
                    { id: "04", title: "Business Areas", standfirst: "One row per business area with district, customer, and Pay; one row ticked, then Close or Save.", shot: { src: `${D}/unit-business-areas-2400.webp`, frame: "macbook" } },
                    { id: "05", title: "Roles (Legacy)", standfirst: "A searchable list of roles to tick, then Close or OK. A note beside it in the file marks unifying the Roles dialog as done.", shot: { src: `${D}/unit-roles-2400.webp`, frame: "macbook" } },
                    { id: "06", title: "Partners", standfirst: "The unit's partners in a table, from partner ID to external ID, with Add New Partner above it.", shot: { src: `${D}/unit-partners-2400.webp`, frame: "macbook" } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "outcome",
      n: "07",
      heading: "What it adds up to",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>What I can show from this project is the research with the administrators and the redesigned screens on this page, documented as before-and-after boards, prototypes, and the Figma files for the Partner, User, and Unit screens. In those files most frames carry the status Approved /Done; a few say On hold, To approve, or Draft file.</p>" +
            "<p>I have no record of what was released or when, and nothing was measured after the redesign that I can point to, so this page gives no results figures.</p>",
        },
      ],
    },
  ],
};
