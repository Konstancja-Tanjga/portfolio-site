import type { CaseStudy } from "./types";

/**
 * There are no clean screen exports from this project. The original
 * documentation is gone and the record is the set of boards once published on
 * Behance. Every screen image on this page is a crop of one of those boards,
 * cut to the screen itself so the device mock-ups and stock photography fall
 * away. The cover and the component board are used whole:
 *
 *   reports-*, partner-*      board 15 (before and after, search)
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
 * Facts on this page come from the boards or from the owner. Three things the
 * sources disagree on are left out on purpose rather than picked: how many
 * developers were on the team, the month the project ended, and how old the
 * application was.
 */
const S = "/work/volvo-erp/screens";

export const volvo: CaseStudy = {
  slug: "volvo-erp",
  title: "Volvo Group ERP",
  what: "A legacy ERP redesign: search, reports and the e-mails administrators send",
  lead:
    "Baldo is an ERP application in the Volvo Group that handles user authorization for more than 500 applications and works as a master-data hub. I researched how its key users work and redesigned three parts of it: search, reports and the e-mails sent to new users.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Enterprise", "Resource Planning"],
    subline: "for Volvo Group",
    stamp: "LEGACY REDESIGN · SEARCH · REPORTS · E-MAIL",
    credit: "Senior UX/UI designer · Volvo Group · 2022–2023",
    shot: { src: "/work/volvo-erp/00-cover.jpg" },
  },
  meta: [
    { label: "Role", value: "Senior UX/UI designer, contract" },
    { label: "Company", value: "Volvo Group, Baldo" },
    { label: "Team", value: "Angular developers, a business analyst, a product owner, a project manager and me" },
    { label: "Scope", value: "User authorization and master data across the group" },
    { label: "Period", value: "2022–2023" },
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
                "Administrators decide in Baldo which of more than 500 applications each user can reach. The screens they did it on were dense tables under a row of tabs, and reports were assembled field by field in forms.",
            },
            {
              key: "My part",
              value:
                "User research with the administrators, and the redesign of search, reports and the e-mail template, from wireframes to prototypes.",
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
              key: "Evidence",
              value:
                "Card sorting with 15 administrators in Dovetail, 45-minute semi-structured interviews, prototype and navigation tests on Usability Hub, and Maze tests with 5 testers.",
            },
            {
              key: "State",
              value:
                "The material I have shows these designs as before-and-after boards and prototypes. It does not record what was released or when.",
            },
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
            "<p>Baldo is an internal Volvo Group platform. It plays a central part in authorizing users for more than five hundred applications: administrators decide which applications a user should have access to. It also gives users and their organizations a business context, and as a master-data hub it feeds hundreds of subscribers with data through its Publish/Subscribe service.</p>" +
            "<p>The people I designed for are those administrators. The screens on this page are the ones they use to look up partners, build reports and write to users about their accounts.</p>",
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
            "<p>Every part of the application sat behind one row of tabs: User, Partner, Unit, Maintenance, Forms, Reports and the rest. The report list was one long column of names, with copies of copies next to the originals and no search box on the screen. Building a report meant filling in tables of criteria and layout fields further down the page, and opening one could stop the screen with a loading message.</p>",
        },
        {
          kind: "duo",
          items: [
            {
              src: `${S}/reports-before.png`,
              caption:
                "The legacy report list: every report in one column, including names like “Copy of Copy of DDBasicNewReport61”, with the actions in a small toolbar above it.",
            },
            {
              src: `${S}/report-loading-before.png`,
              caption:
                "A legacy report screen with “Please wait while page is loading” over the criteria and layout tables.",
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
      id: "search",
      n: "04",
      heading: "Search and results on one screen",
      maxim:
        "Further search criteria open under a toggle, and the results land on the same screen as the form.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The old Partner screen was a details page with every field of one partner on it. In the new Partner search, further criteria open under a toggle; the expanded form shows “Show less search options”. The results come back as a table under the form, with Open and Generate Excel above it. On the report list, the search box suggests matching report names as you type.</p>",
        },
        {
          kind: "duo",
          items: [
            {
              src: `${S}/partner-before.png`,
              caption:
                "Before: Partner Details, one partner per page, with its fields, business areas, roles and address tabs stacked in one form.",
            },
            {
              src: `${S}/partner-after.png`,
              caption:
                "After: Partner search with the extra options open (“Show less search options” closes them), Search and Clear search fields at the top, and the results table below.",
            },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/reports-after.png`,
          caption:
            "My reports in the new layout: the search box suggests report names and highlights the typed letters, and the actions for a selected report (Modify, View, Copy, Delete, Run report) sit in one bar.",
        },
      ],
    },
    {
      id: "reports",
      n: "05",
      heading: "A report is criteria and layout",
      maxim:
        "What a report filters on and what it shows are two lists, side by side, and both are visible while it is being built.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>In the old screen the criteria and the layout were tables on a long form, reached through Criteria and Layout tabs at the bottom. In the new one the report has a name and a Private or Public setting at the top, then two columns: Selected criteria and Selected layout. Each item has a handle to move it and a button to delete it. Below them the criteria are grouped in sections such as Unit, which open and close one by one or all at once.</p>" +
            "<p>A report template can also be sent to someone by their ID number. The dialog tells the sender that the recipient can view or copy the template but will not see the report data.</p>",
        },
        {
          kind: "duo",
          items: [
            {
              src: `${S}/report-builder-before.png`,
              caption:
                "Before: a new report as a form, with report information at the top and criteria entered row by row in tables below.",
            },
            {
              src: `${S}/report-builder-after.png`,
              caption:
                "After: Selected criteria and Selected layout side by side, with Save, Run report and Cancel at the top and the Unit criteria open underneath.",
            },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/reports-share-prototype.png`,
          caption:
            "Prototype: My reports with the Send link dialog open. The template goes to an ID number; the recipient can view or copy it but not see the report data.",
        },
      ],
    },
    {
      id: "email",
      n: "06",
      heading: "The e-mail looks like what it sends",
      maxim:
        "Administrators write the message inside the layout the user will receive.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>I designed a new template from scratch for the administrators, and the design of the e-mails users receive. In the old tool an administrator filled in Head, Message head, Message Body and Foot fields and checked the result in a preview next to them. In the new template subject, body and signature are fields inside the e-mail itself, between the Baldo header and the Volvo footer, with Cancel, Save as draft and Send at the bottom.</p>" +
            "<p>The new-account message says what was created (user name, user ID, date), that the password comes in a separate e-mail, and that an account not used for 14 months is deleted automatically. Internal users are told to sign in with their Windows credentials instead.</p>",
        },
        {
          kind: "duo",
          items: [
            {
              src: `${S}/email-before.png`,
              caption:
                "Before: New user email, with the form on the left and a preview on the right, signed “produced by Volvo Group’s Baldo User Administration tool”.",
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
    {
      id: "outcome",
      n: "07",
      heading: "What it adds up to",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>What I can show from this project is the research with the administrators and the redesigned screens on this page, documented as before-and-after boards and prototypes.</p>" +
            "<p>I have no record of what was released or when, and nothing was measured after the redesign that I can point to, so this page gives no results figures.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/components.png`,
          caption:
            "The component board from the project: cards, menus, a data table with paging, tabs, chips, text inputs and time pickers in the style of the new screens.",
        },
      ],
    },
  ],
};
