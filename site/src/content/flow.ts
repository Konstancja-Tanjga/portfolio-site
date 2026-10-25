import type { CaseStudy } from "./types";

/**
 * Flow mode shipped in APplus 8, in October 2023, before I joined. This page
 * describes only the part of it that is mine, as confirmed by me: the new
 * navigation (from the Futures Thinking workshop), the Page details layout,
 * the migration to FOX v2.5, the components that migration and the new
 * navigation needed, and the work alongside implementation, QA, and usability
 * testing. No results were measured, so the page states none.
 *
 * The screens are cut one by one from the Behance boards into screens/.
 * Dropped on purpose: the moodboard (mostly competitors' products), the
 * Figma overview of the mobile flows (unreadable at any size on a page), and
 * the left laptop of the desktop board, whose header reads "Document
 * Management System" and so is not Flow mode.
 *
 * Rebuilt 25 October 2026 the Analytics way: 00 is the sixty-second page with
 * the three decisions as pictures; 03 holds the decisions as tabs, one per
 * decision, with the phone screens under the third; the former 05 "Screens"
 * is gone, its dark-theme slide back in the 01 carousel. No sheet: the file
 * names no tool chain beyond FOX, and none was invented.
 *
 * Links to other walls are relative ("futures-thinking"), so they resolve
 * under whatever base the site is deployed at. Chapter ids are kept as
 * deep-link targets.
 */
const S = "/work/applus-flow/screens";

export const flow: CaseStudy = {
  slug: "applus-flow",
  title: "APplus Flow mode",
  what: "A new navigation, page layout, and FOX v2.5 components for an existing part of APplus ERP",
  lead:
    "Flow mode is the board view of APplus ERP: work items sit in columns by status and move from one column to the next. It shipped in APplus 8 in October 2023, before I joined. My part came later: a new navigation, a new Page details layout, the move to FOX v2.5, and the components that move needed.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Flow mode"],
    subline: "navigation and page layout for APplus ERP",
    stamp: "NAVIGATION · PAGE DETAILS · FOX v2.5 · DESKTOP TO MOBILE",
    credit: "Lead Designer, UX Engineer · Asseco Solutions · 2023",
    art: { src: "/work/applus-flow/screens/tablet-dark.webp" },
    shot: { src: "/work/applus-flow/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Lead Designer, UX Engineer" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP, Flow mode, in the product since APplus 8 (October 2023)" },
    {
      label: "Design system",
      value: "FOX, Asseco's design system, which I lead; Flow mode's screens migrated to v2.5. The link opens the public v1 Storybook",
      href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs",
    },
    { label: "Platforms", value: "Desktop, tablet, mobile" },
    { label: "Period", value: "2023" },
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
              value: "The board view of APplus ERP: columns by status, one card per item. In the product since APplus 8, before I joined.",
            },
            {
              key: "Problem",
              value: "Flow mode worked but had no navigation model, and the team could not agree whether people enter through tasks or through modules.",
            },
            {
              key: "My role",
              value: "The new navigation, the Page details layout, the move of Flow mode's screens to FOX v2.5, and the components FOX lacked for it.",
            },
            {
              key: "Decision 1",
              value: "The header always says where you are: the path to the board, the board's name as a switcher, and the tenant.",
              shot: { src: `${S}/tablet-tenant.webp`, alt: "The tenant dialog opened from the header, with the board behind it", to: "#decisions" },
            },
            {
              key: "Decision 2",
              value: "An item's details open in a panel beside the board, not over it: a tag, Move to, and the order details as labels and values.",
              shot: { src: `${S}/tablet-details.webp`, alt: "An item's Page details in a panel beside the board", to: "#decisions" },
            },
            {
              key: "Decision 3",
              value: "Board parameters sit under the header as chips and are edited in a popover, so the board stays in view.",
              shot: { src: `${S}/tablet-parameters.webp`, alt: "Board parameters as chips under the header, one open in a popover", to: "#decisions" },
            },
            {
              key: "Outcome",
              value: "Live in APplus. Usability tests with users ran during implementation; no before-and-after figures were measured.",
            },
            {
              key: "Period and team",
              value: "2023. The developers and QA of Flow mode, and me.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim: "I did not create Flow mode. I changed how people move around it.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Flow mode is <strong>a way of working in APplus ERP built around boards</strong>: columns by status, such as Created, Ready for release, Released, and Inactive, and on each card one item with its key figures and tags.</p>",
        },
        {
          kind: "carousel",
          items: [
            { src: `${S}/desktop-elly.webp`, title: "A board on desktop", body: "Columns by status, and the Elly help panel open on the right." },
            { src: `${S}/tablet-parameters.webp`, title: "Board parameters", body: "Warehouse, floor, and date as chips under the header." },
            { src: `${S}/tablet-details.webp`, title: "Page details", body: "An item's details in a panel beside the board." },
            { src: `${S}/tablet-dark.webp`, title: "The dark theme", body: "The same layout, two board columns and the item panel." },
          ],
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
            "<p>The new navigation came out of a <a href=\"futures-thinking\"><strong>Futures Thinking workshop</strong></a> I designed and facilitated; the workshop has its own page.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Two questions the team could not settle by discussion:</strong> enter through tasks or through modules, and how far the interface adapts to the person using it.",
            "<strong>The workshop turned them into an agreed scope and a navigation concept</strong>, the brief the design work started from.",
          ],
        },
      ],
    },
    {
      id: "decisions",
      n: "03",
      heading: "Decisions",
      maxim: "The header always tells you where you are.",
      standfirst: "Three decisions, one per tab, with the screens that show them.",
      blocks: [
        {
          kind: "tabs",
          label: "The decisions and their screens",
          items: [
            {
              label: "The navigation",
              blocks: [
                {
                  kind: "points",
                  items: [
                    "<strong>The header carries the path to the board, the board's name with a menu to switch board, and the tenant.</strong>",
                    "<strong>Changing tenant is a dialog that says what it changes:</strong> “Your current context defines data access and system behaviour.”",
                    "<strong>Board parameters sit under the header as chips</strong>, edited in a popover.",
                  ],
                },
                {
                  kind: "duo",
                  items: [
                    { src: `${S}/tablet-tenant.webp`, caption: "The tenant dialog on tablet, opened from the header, the board still visible behind it." },
                    { src: `${S}/tablet-parameters.webp`, caption: "Board parameters (warehouse, floor, date) as chips under the header, edited in a popover." },
                  ],
                },
              ],
            },
            {
              label: "Page details",
              blocks: [
                {
                  kind: "points",
                  items: [
                    "<strong>An item's details sit in a panel beside the board, not over it.</strong>",
                    "<strong>A tag at the top, a “Move to” action, and the order details as a list of labels and values.</strong>",
                  ],
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${S}/tablet-details.webp`,
                  caption: "An item's Page details beside the board, on tablet: the tag, “Move to”, and the order details as labels and values.",
                },
              ],
            },
            {
              label: "On a phone",
              blocks: [
                {
                  kind: "points",
                  items: [
                    "<strong>The same jobs move to a bottom bar</strong> with Search, Inbox, Filter, and More.",
                    "<strong>Where the navigation needed a pattern FOX did not have</strong>, I designed the component and added it to FOX; Flow mode uses it from there.",
                  ],
                },
                {
                  kind: "carousel",
                  shape: "portrait",
                  items: [
                    { src: `${S}/mobile-tenant.webp`, title: "Tenant changed", body: "A confirmation over the board, the bottom bar below." },
                    { src: `${S}/mobile-options.webp`, title: "Options sheet", body: "Kanban or Focus view, Share, the tenant, Settings, and Ask Elly." },
                    { src: `${S}/mobile-bookmark.webp`, title: "Bookmarked", body: "A notice after an item is added to bookmarks." },
                    { src: `${S}/mobile-theme.webp`, title: "Board parameters", body: "Chips under the header, over a background image." },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "delivery",
      n: "04",
      heading: "Delivery",
      standfirst: "I stayed with the work while it was built.",
      blocks: [
        {
          kind: "flow",
          stages: [
            { title: "Workshop", body: "Two open questions into an agreed scope and a navigation concept." },
            { title: "Design", body: "The navigation, the Page details layout, the move to FOX v2.5, the components FOX was missing." },
            { title: "Implementation and QA", body: "With the developers during implementation; quality testing alongside." },
            { title: "Usability tests", body: "With users, on the new navigation and layout." },
          ],
        },
      ],
    },
    {
      id: "adds-up",
      n: "05",
      heading: "What it adds up to",
      standfirst: "No results were measured for this work, so this page states none.",
      blocks: [
        {
          kind: "joint",
          question: "What will I measure?",
          answers: [
            "<strong>How often people change board or tenant from the header.</strong>",
            "<strong>Whether the phone's bottom bar covers what they come to do.</strong>",
          ],
        },
      ],
    },
  ],
};
