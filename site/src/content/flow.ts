import type { CaseStudy } from "./types";

/**
 * Flow mode shipped in APplus 8, in October 2023, before I joined. This page
 * describes only the part of it that is mine, as confirmed by me: the new
 * navigation (from the Futures Thinking workshop), the Page details layout,
 * the migration to FOX v2.5, the components that migration and the new
 * navigation needed, and the work alongside implementation, QA and usability
 * testing. There are no measured results, so the page states none.
 *
 * The screens are cut one by one from the Behance boards into screens/.
 * Dropped on purpose: the moodboard (mostly competitors' products), the
 * Figma overview of the mobile flows (unreadable at any size on a page), and
 * the left laptop of the desktop board, whose header reads "Document
 * Management System" and so is not Flow mode.
 *
 * Links to other walls are relative ("futures-thinking"), so they resolve
 * under whatever base the site is deployed at.
 */
const S = "/work/applus-flow/screens";

export const flow: CaseStudy = {
  slug: "applus-flow",
  title: "APplus Flow mode",
  what: "A new navigation, page layout and FOX v2.5 components for an existing part of APplus ERP",
  lead:
    "Flow mode is the board view of APplus ERP: work items sit in columns by status and move from one column to the next. It shipped in APplus 8 in October 2023, before I joined. My part came later: a new navigation, a new Page details layout, the move to FOX v2.5 and the components that move needed.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Flow mode"],
    subline: "navigation and page layout for APplus ERP",
    stamp: "NAVIGATION · PAGE DETAILS · FOX v2.5 · DESKTOP TO MOBILE",
    credit: "Lead Product Designer · Asseco Solutions · 2026",
    shot: { src: "/work/applus-flow/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Lead Product Designer" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP — Flow mode, in the product since APplus 8 (October 2023)" },
    {
      label: "Design system",
      value: "FOX, which I own; Flow mode's screens migrated to v2.5",
      href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs",
    },
    { label: "Platforms", value: "Desktop, tablet, mobile" },
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
                "Flow mode already worked, but it needed a navigation model, and the team could not agree whether people should enter through tasks or through modules.",
            },
            {
              key: "My part",
              value:
                "The new navigation, the Page details layout, the migration of Flow mode's screens to FOX v2.5, and the new components that change needed. During the build I worked with the developers, helped with QA and ran usability tests with users.",
            },
            {
              key: "Decision 1",
              value:
                "The header always says where you are: the path to the board, the board's name as a switcher, and the tenant you are working in.",
            },
            {
              key: "Decision 2",
              value:
                "An item's details open beside the board, so the column it came from stays in view.",
            },
            {
              key: "Decision 3",
              value:
                "Where the new navigation needed a pattern FOX did not have, I designed the component and added it to the system.",
            },
            {
              key: "Evidence",
              value:
                "Usability tests with users during implementation. There are no measured before-and-after figures.",
            },
            { key: "Shipped", value: "Flow mode is live in APplus." },
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
            "<p>Flow mode is a way of working in APplus ERP built around boards. Each board is a set of columns by status, such as Created, Ready for release, Released and Inactive, and each card is one item with its key figures and tags. It has been part of APplus since version 8, released in October 2023. I did not create it.</p><p>What I changed is how people move around it and how an item is shown once they open it. I designed the new navigation and the new Page details layout, moved Flow mode's screens to version 2.5 of FOX, the design system I own, and designed the components that were missing for the new navigation.</p>",
        },
        {
          kind: "shot",
          width: "column",
          src: `${S}/desktop-elly.webp`,
          caption:
            "A Flow mode board on desktop, with columns by status and the Elly help panel open on the right.",
        },
      ],
    },
    {
      id: "navigation-origin",
      n: "02",
      heading: "Where the navigation came from",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The new navigation came out of a <a href=\"futures-thinking\">Futures Thinking workshop</a> I designed and facilitated. The team had two questions it could not settle by discussion: whether people should enter through tasks or through modules, and how far the interface should adapt to the person using it. The workshop turned those questions into an agreed scope and a navigation concept, and the design work started from that brief.</p><p>The workshop has its own page, with the method, the scenarios and what the room decided.</p>",
        },
      ],
    },
    {
      id: "decisions",
      n: "03",
      heading: "Decisions",
      standfirst:
        "Three rules, with the screens that show them.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p><strong>The new navigation.</strong> The header always tells you where you are. It shows the path to the board, the board's name with a menu to switch to another board, and the tenant you are working in. Changing tenant is done in a dialog that says what it changes: “Your current context defines data access and system behaviour.” On a phone the same jobs move to a bottom bar with Search, Inbox, Filter and More.</p>",
        },
        {
          kind: "duo",
          items: [
            {
              src: `${S}/tablet-tenant.webp`,
              caption:
                "The tenant dialog on tablet, opened from the tenant in the header, with the board still visible behind it.",
            },
            {
              src: `${S}/tablet-parameters.webp`,
              caption:
                "Board parameters (warehouse, floor, date) shown as chips under the header and edited in a popover.",
            },
          ],
        },
        {
          kind: "passage",
          html:
            "<p><strong>The Page details layout.</strong> Opening an item does not take you away from the board. The details open in a panel beside it, with the item's name and status at the top, a “Move to” action, and the order details as a list of labels and values. The column you came from stays in view, so you can open the next item without finding your place again.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/tablet-details.webp`,
          caption:
            "Page details on tablet: the selected item is highlighted in the board, and its details are in the panel on the right.",
        },
        {
          kind: "passage",
          html:
            "<p><strong>New components from the gaps.</strong> The new navigation needed patterns that FOX did not have yet. I designed the missing components and added them to FOX, and Flow mode uses them from there. The phone screens below show some of the patterns the navigation relies on: a confirmation after changing tenant, an options sheet, and a notice after an action.</p>",
        },
      ],
    },
    {
      id: "delivery",
      n: "04",
      heading: "Delivery",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>I stayed with the work while it was built. I worked with the developers during implementation, and I helped with quality testing. I also ran usability tests with users on the new navigation and layout.</p>",
        },
      ],
    },
    {
      id: "screens",
      n: "05",
      heading: "Screens",
      standfirst: "The same boards in the dark theme on tablet, and on a phone.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${S}/tablet-dark.webp`,
          caption:
            "Page details on tablet in the dark theme, with two board columns and the item panel.",
        },
        {
          kind: "set",
          size: "phone",
          items: [
            {
              src: `${S}/mobile-tenant.webp`,
              caption: "A “Tenant changed” confirmation over the board, with the bottom bar below.",
            },
            {
              src: `${S}/mobile-options.webp`,
              caption: "The options sheet: Kanban or Focus view, Share, the tenant, Settings and Ask Elly.",
            },
            {
              src: `${S}/mobile-bookmark.webp`,
              caption: "A notice after an item is added to bookmarks.",
            },
            {
              src: `${S}/mobile-theme.webp`,
              caption: "The board with board parameters as chips under the header and a background image.",
            },
          ],
        },
      ],
    },
    {
      id: "adds-up",
      n: "06",
      heading: "What it adds up to",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>I have no measured results for this work, so this page states none. What I can show is the navigation, the Page details layout and the FOX v2.5 components in the screens above, and Flow mode is live in APplus. APplus won Gold in the User Experience ERP category at <a href=\"erp-of-the-year\">ERP-System des Jahres 2025</a>.</p><p>Next I would like to measure how often people change board or tenant from the header, and whether the phone's bottom bar covers what they come to do.</p>",
        },
      ],
    },
  ],
};
