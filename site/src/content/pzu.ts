import type { CaseStudy } from "./types";

/**
 * Everything on this page comes from two places: the original project boards
 * (removed in 144a907, recoverable from history) and the owner's confirmation of what the board leaves out: that the portal shipped,
 * that she was the only designer, and what changed between the prototypes.
 *
 * The board's words are text here. Its images are cropped into
 * /work/mojepzu/screens/, with the addresses, policy numbers and number plate
 * on the policy cards blurred: they are mock data, but they look real.
 *
 * Image paths are literal strings so that scripts/check-content.mjs sees them.
 * Chapter numbers were written for this page; the project has no Figma wall.
 * The stack follows docs/case-study-kit/RULES.md, with the chapters the board
 * has no facts for (personas, use cases, handoff, reflection) left out.
 */

export const pzu: CaseStudy = {
  slug: "mojepzu",
  title: "MojePZU",
  what: "An insurer's customer portal, redesigned through three rounds of interviews",
  lead:
    "The redesign of mojepzu.pl, the customer portal of the insurer PZU, before and after logging in. I was the only UI designer on the project. I took the portal through three prototypes, with a round of in-depth interviews feeding each one, and the result shipped to production.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · INSURANCE AND HEALTHCARE",
    headline: ["MojePZU"],
    subline: "the customer portal of an insurer",
    stamp: "RESEARCH · INFORMATION ARCHITECTURE · THREE PROTOTYPES",
    credit: "UI Designer · PZU · 2019",
    art: { src: "/work/mojepzu/cover-art.webp" },
    shot: { src: "/work/mojepzu/screens/cover.webp" },
  },
  meta: [
    { label: "Role", value: "UI Designer; the only designer on the project, freelance" },
    { label: "Company", value: "PZU, Warsaw" },
    { label: "Team", value: "Five: a UX researcher, a strategist, a developer, a service designer, and me" },
    { label: "Platform", value: "mojepzu.pl, on desktop, tablet, and phone" },
    { label: "Research", value: "6 workshops with the business, 54 in-depth interviews over three rounds" },
    { label: "Period", value: "January to December 2019" },
    { label: "Launch", value: "Shipped to production on mojepzu.pl" },
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
                "mojepzu.pl is where PZU customers manage what they hold with the company: insurance policies, medical services, investments, and savings. The redesign covered the portal before and after logging in.",
            },
            {
              key: "Problem",
              value:
                "Customers saw PZU as an insurer and the portal as a place with few functions. Most were surprised that the portal also offered medical and financial services.",
            },
            {
              key: "My role and scope",
              value:
                "The only designer on the project, working with a UX researcher, a strategist, a developer, and a service designer: workshops with the business, which I co-designed and ran, a competitor audit, a qualitative benchmark with recommendations, lo-fi mockups tested with users, analysis of the interviews, and the high-fidelity clickable prototype.",
            },
            {
              key: "Decision 1",
              value: "The \"Buy\" button that sat on every screen was dropped. Offer cards in \"Wybrane dla Ciebie\" end in \"Dowiedz się więcej\".",
            },
            {
              key: "Decision 2",
              value: "Buying and managing policies and booking a doctor's appointment moved into one module.",
            },
            {
              key: "Decision 3",
              value: "The information architecture and the navigation changed between prototypes.",
            },
            {
              key: "Outcome",
              value:
                "Shipped to production on mojepzu.pl, after 54 in-depth interviews in three rounds fed three prototypes. Not measured after launch: usage, self-service rates, and support contacts, so none is claimed.",
            },
            {
              key: "Period and team",
              value:
                "January to December 2019. Five people: a UX researcher, a strategist, a developer, a service designer, and me.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      standfirst:
        "The portal before and after login, and the two goals the project set for it.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>mojepzu.pl is where PZU customers manage what they hold with the company: insurance policies, medical services, investments, and savings. The redesign covered the portal before and after logging in.</p>",
        },
        {
          kind: "passage",
          html:
            "<p>We worked on the customer perspective and the business perspective in parallel. <strong>The project had two goals</strong>, and each came with its own questions.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Make the communication of the offer more coherent.</strong> How do we present the offer the same way before and after login? What should a customer see first? How do we weigh what the organisation needs against what the customer needs when we prioritise content?",
            "<strong>Make the portal easier to use.</strong> How should the home page be structured, before and after login, so that the customer does not feel lost? What should the main pages do? How do we simplify the language so that it is easier to find your way?",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/mojepzu/screens/dashboard.webp",
          caption:
            "The logged-in dashboard: insurance policies and medical services as cards, the shortcut bar on the left, and the latest updates top right. Addresses and policy numbers are blurred.",
        },
      ],
    },
    {
      id: "research",
      n: "02",
      heading: "Research",
      standfirst:
        "Workshops with the business set the hypotheses. Three rounds of in-depth interviews tested them, and each round led to the next prototype.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "6", label: "workshops with the business" },
            { value: "24", label: "in-depth interviews, leading to prototype 1.0" },
            { value: "18", label: "in-depth interviews, leading to prototype 2.0" },
            { value: "12", label: "in-depth interviews, leading to prototype 3.0" },
          ],
        },
        {
          kind: "flow",
          stages: [
            {
              title: "Strategic stream",
              body: "6 workshops with the business, a redesign strategy workshop, expert analysis, a competitor audit, a qualitative benchmark, and research hypotheses.",
            },
            {
              title: "Research and design stream 1",
              body: "24 in-depth interviews, workshops with the business on empathy, ideation, and prioritisation, then prototype 1.0.",
            },
            {
              title: "Research and design stream 2",
              body: "18 in-depth interviews, a workshop with the business on improvements, prototype 2.0; then 12 in-depth interviews and prototype 3.0.",
            },
          ],
          note: "The process in three streams, as the project board lays it out.",
        },
        {
          kind: "passage",
          html:
            "<p>I worked with a UX researcher. The first round was <strong>24 individual in-depth interviews</strong>, held online over Zoom, with three aims.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Check the hypotheses</strong> from the workshop with the business units.",
            "<strong>Find out which information and functions customers need</strong> before they log in, and on the dashboard after.",
            "<strong>Decide what the dashboard is for.</strong> The later rounds had 18 and 12 interviews.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/mojepzu/device/prototype-review-2400.webp",
          frame: "macbook",
          caption:
            "The first-round analysis board: the portal's screens laid out one by one, each with a column of interview notes beside it.",
        },
        {
          kind: "passage",
          html: "<p><strong>What the first round found.</strong></p>",
        },
        {
          kind: "points",
          items: [
            "<strong>The portal offered few functions</strong>, customers said, so it did not attract them.",
            "<strong>PZU meant insurance.</strong> Most were surprised to learn the portal also had other products, such as medical and financial services.",
            "<strong>Self-service was the function that mattered most</strong> to them.",
            "<strong>The portal was their own space.</strong> They took the name literally: myPORTAL means mine.",
          ],
        },
        {
          kind: "pull",
          text: "\"The customer expects to be in their world, not ours.\"",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/mojepzu/screens/insights-board.webp",
          caption:
            "The synthesis board from the first round. Each area of the portal has rows for the screen, the observations and conclusions, the challenges, and the ideas.",
        },
      ],
    },
    {
      id: "prototypes",
      n: "03",
      heading: "What changed between prototypes",
      standfirst: "Between prototypes 1.0, 2.0, and 3.0, five things changed.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Information architecture.</strong> Changed between prototypes.",
            "<strong>Navigation.</strong> Changed between prototypes.",
            "<strong>Screen layout.</strong> The content layout of individual screens changed.",
            "<strong>The \"Buy\" button.</strong> Dropped. It had sat on every screen.",
            "<strong>A new module.</strong> Added, for buying and managing policies and for booking doctor's appointments.",
          ],
        },
        {
          kind: "duo",
          items: [
            {
              src: "/work/mojepzu/screens/early-mockup.webp",
              caption:
                "An early greyscale mockup of the logged-in home page: the offer cards under \"Wybrane dla Ciebie\" (selected for you) carry a \"KUP\" (buy) button.",
            },
            {
              src: "/work/mojepzu/screens/offers-final.webp",
              caption:
                "The same section in the final version, where each offer ends in \"Dowiedz się więcej\" (find out more).",
            },
          ],
        },
      ],
    },
    {
      id: "decisions",
      n: "04",
      heading: "Three decisions",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              n: "01",
              title: "Drop the \"Buy\" button from every screen",
              rule: {
                label: "Rule",
                body: "No screen carries a \"Buy\" button. Offer cards in \"Wybrane dla Ciebie\" end in \"Dowiedz się więcej\" and link to the details.",
              },
              why: {
                label: "Round 1 finding",
                body: "Customers described the portal as their own space: myPORTAL means mine.",
              },
            },
            {
              n: "02",
              title: "One module for policies and doctor's appointments",
              rule: {
                label: "Rule",
                body: "Buying and managing a policy and booking a doctor's appointment sit in one module. On the dashboard, medical services have their own row of cards under the policies, and booking a visit is a shortcut in the bar on the left.",
              },
              why: {
                label: "Round 1 findings",
                body: "Customers said the portal offered few functions and that self-service mattered most. Most did not know it had medical services.",
              },
            },
            {
              n: "03",
              title: "Rework the information architecture and navigation",
              rule: {
                label: "Rule",
                body: "The top navigation names tasks and product areas: payments, claims and benefits, medical services, investments, and savings. The shortcut bar holds the actions: pay, book a visit or test, report a claim, and see offers.",
              },
              why: {
                label: "Project goal",
                body: "The second goal of the project was a home page where the customer does not feel lost, in simpler language.",
              },
            },
          ],
        },
      ],
    },
    {
      id: "screens",
      n: "05",
      heading: "Screens",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/mojepzu/screens/final-screens.webp",
          caption:
            "The final screens on desktop, tablet, and phone. The tablet and phone show the dashboard further down, with investments and savings and the \"Wybrane dla Ciebie\" offers. Personal details are blurred.",
        },
        {
          kind: "palette",
          standfirst: "The palette from the project board, with the role of each colour where the final screens show it.",
          items: [
            { hex: "#009DDE", name: "Blue", role: "Buttons, links, and the active navigation item" },
            { hex: "#FAFBFD", name: "Off-white", role: "The page background" },
            { hex: "#234678", name: "Navy", role: "The footer" },
            { hex: "#C4C4C4", name: "Grey", role: "The \"Edytuj skróty\" (edit shortcuts) tile under the shortcut bar" },
            { hex: "#8CC83C", name: "Green", role: "The \"Aktywna\" (active) policy status" },
            { hex: "#D45F7E", name: "Pink", role: "On the project board; not used on the final screens shown here" },
          ],
        },
      ],
    },
    {
      id: "results",
      n: "06",
      heading: "What it adds up to",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The redesign <strong>shipped to production on mojepzu.pl</strong>. Before it did, 54 in-depth interviews in three rounds fed three prototypes, and between them the structure, the navigation, and the screens changed.</p>" +
            "<p>I have no measurements from after the launch, such as usage, self-service rates, or support contacts, so this page does not claim any.</p>",
        },
      ],
    },
  ],
};
