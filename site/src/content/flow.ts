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
 * Links to other walls are relative ("futures-thinking"), so they resolve
 * under whatever base the site is deployed at. Chapter ids and numbers are
 * kept as deep-link targets.
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
    shot: { src: "/work/applus-flow/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Lead Designer, UX Engineer" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP, Flow mode, in the product since APplus 8 (October 2023)" },
    {
      label: "Design system",
      value: "FOX, which I own; Flow mode's screens migrated to v2.5",
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
              key: "Context",
              value:
                "Flow mode is the board view of APplus ERP, in the product since APplus 8 in October 2023, before I joined. Each board is a set of columns by status, and each card is one item.",
            },
            {
              key: "Problem",
              value:
                "Flow mode already worked, but it needed a navigation model, and the team could not agree whether people should enter through tasks or through modules.",
            },
            {
              key: "My role and scope",
              value:
                "The new navigation, the Page details layout, the migration of Flow mode's screens to FOX v2.5, and the new components that change needed. During the build I worked with the developers, helped with QA, and ran usability tests with users.",
            },
            {
              key: "Decision 1",
              value:
                "The header always says where you are: the path to the board, the board's name as a switcher, and the tenant you are working in.",
            },
            {
              key: "Decision 2",
              value: "A new layout for an item's Page details: a panel beside the board, with the order details as a list of labels and values.",
            },
            {
              key: "Decision 3",
              value:
                "Where the new navigation needed a pattern FOX did not have, I designed the component and added it to the system.",
            },
            {
              key: "Outcome",
              value:
                "Flow mode is live in APplus. Usability tests with users ran during implementation; no before-and-after figures were measured.",
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
            "<p>Flow mode is <strong>a way of working in APplus ERP built around boards</strong>. It has been part of APplus since version 8, released in October 2023.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>A board is a set of columns by status</strong>, such as Created, Ready for release, Released, and Inactive. Each card is one item with its key figures and tags.",
            "<strong>I changed how people move around it</strong> and how an item is shown once they open it: the new navigation and the new Page details layout.",
            "<strong>The screens moved to FOX v2.5</strong>, the design system I own, and I designed the components that were missing for the new navigation.",
          ],
        },
        {
          kind: "shot",
          width: "column",
          src: `${S}/desktop-elly.webp`,
          caption: "A Flow mode board on desktop, with columns by status and the Elly help panel open on the right.",
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
            "<p>The new navigation came out of a <a href=\"futures-thinking\"><strong>Futures Thinking workshop</strong></a> I designed and facilitated.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Two questions the team could not settle by discussion:</strong> whether people should enter through tasks or through modules, and how far the interface should adapt to the person using it.",
            "<strong>The workshop turned them into an agreed scope and a navigation concept</strong>, and the design work started from that brief.",
            "<strong>The workshop has its own page</strong>, with the method, the scenarios, and what the room decided.",
          ],
        },
      ],
    },
    {
      id: "decisions",
      n: "03",
      heading: "Decisions",
      maxim: "The header always tells you where you are.",
      standfirst: "Three rules, with the screens that show them. Open a tile and the decision unfolds to the right.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "d-navigation",
              n: "01",
              title: "The new navigation",
              maxim: "The header always tells you where you are.",
              standfirst: "The path to the board, the board's name with a menu to switch to another board, and the tenant you are working in.",
              cover: { src: `${S}/tablet-tenant.webp` },
              blocks: [
                {
                  kind: "points",
                  items: [
                    "<strong>Changing tenant is a dialog that says what it changes:</strong> “Your current context defines data access and system behaviour.”",
                    "<strong>Board parameters sit under the header as chips</strong> and are edited in a popover.",
                    "<strong>On a phone the same jobs move to a bottom bar</strong> with Search, Inbox, Filter, and More.",
                  ],
                },
                {
                  kind: "duo",
                  items: [
                    {
                      src: `${S}/tablet-tenant.webp`,
                      caption: "The tenant dialog on tablet, opened from the tenant in the header, with the board still visible behind it.",
                    },
                    {
                      src: `${S}/tablet-parameters.webp`,
                      caption: "Board parameters (warehouse, floor, date) shown as chips under the header and edited in a popover.",
                    },
                  ],
                },
              ],
            },
            {
              id: "d-page-details",
              n: "02",
              title: "The Page details layout",
              maxim: "An item's details sit in a panel beside the board, not over it.",
              standfirst: "A new layout for an item's details: a tag at the top, a “Move to” action, and the order details as a list of labels and values.",
              cover: { src: `${S}/tablet-details.webp` },
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${S}/tablet-details.webp`,
                  caption: "An item's details in a panel beside the board, on tablet: the tag at the top, “Move to”, and the order details as labels and values.",
                },
              ],
            },
          ],
        },
        {
          kind: "passage",
          html:
            "<p><strong>New components from the gaps.</strong> The new navigation needed patterns that FOX did not have yet. I designed the missing components and added them to FOX, and Flow mode uses them from there.</p>",
        },
      ],
    },
    {
      id: "delivery",
      n: "04",
      heading: "Delivery",
      maxim: "I stayed with the work while it was built.",
      blocks: [
        {
          kind: "flow",
          stages: [
            { title: "Workshop", body: "A Futures Thinking workshop turned two open questions into an agreed scope and a navigation concept." },
            { title: "Design", body: "The navigation, the Page details layout, the move to FOX v2.5, and the components FOX was missing." },
            { title: "Implementation and QA", body: "I worked with the developers during implementation and helped with quality testing." },
            { title: "Usability tests", body: "I ran usability tests with users on the new navigation and layout." },
          ],
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
          width: "column",
          src: `${S}/tablet-dark.webp`,
          caption: "The same layout in the dark theme, with two board columns and the item panel.",
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
              caption: "The options sheet: Kanban or Focus view, Share, the tenant, Settings, and Ask Elly.",
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
      standfirst: "No results were measured for this work, so this page states none.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>What I can show is <strong>the navigation, the Page details layout, and the FOX v2.5 components</strong> in the screens above, and Flow mode is live in APplus. APplus won Gold in the User Experience category at <a href=\"erp-of-the-year\">ERP-System des Jahres 2025</a>.</p>",
        },
        {
          kind: "joint",
          question: "What will I measure, and how?",
          answers: [
            "<strong>How often people change board or tenant from the header.</strong>",
            "<strong>Whether the phone's bottom bar covers what they come to do.</strong>",
          ],
        },
      ],
    },
  ],
};
