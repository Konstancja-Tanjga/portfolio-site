import type { CaseStudy } from "./types";

/**
 * Everything on this page comes from two places: the project board that used
 * to be the whole page (02.png, 1440 x 6130, now cut up and deleted) and the
 * owner's confirmation of what the board leaves out: that the portal shipped,
 * that she was the only designer, and what changed between the prototypes.
 *
 * The board's words are text here. Its images are cropped into
 * /work/mojepzu/screens/, with the addresses, policy numbers and number plate
 * on the policy cards blurred: they are mock data, but they look real.
 */
const S = "/work/mojepzu/screens";

export const pzu: CaseStudy = {
  slug: "mojepzu",
  title: "MojePZU",
  what: "An insurer's customer portal, redesigned through three rounds of interviews",
  lead:
    "The redesign of mojepzu.pl, the customer portal of the insurer PZU, before and after logging in. I was the only UX/UI designer on the project. I took the portal through three prototypes, with a round of in-depth interviews feeding each one, and the result shipped to production.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · INSURANCE AND HEALTHCARE",
    headline: ["MojePZU"],
    subline: "the customer portal of an insurer",
    stamp: "RESEARCH · INFORMATION ARCHITECTURE · THREE PROTOTYPES",
    credit: "UX/UI designer · PZU · 2019",
    shot: { src: "/work/mojepzu/screens/cover.webp" },
  },
  meta: [
    { label: "Role", value: "UX/UI designer, the only designer on the project, freelance" },
    { label: "Company", value: "PZU, Warsaw" },
    { label: "Team", value: "A UX researcher, a strategist, a developer, a service designer and me" },
    { label: "Platform", value: "mojepzu.pl, on desktop, tablet and phone" },
    { label: "Research", value: "6 workshops with the business, 54 in-depth interviews over three rounds" },
    { label: "Period", value: "January – December 2019, shipped to production" },
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
                "Customers saw PZU as an insurer and the portal as a place with few functions. Most of them did not know it also held their medical and financial products.",
            },
            {
              key: "My part",
              value:
                "Workshops with the business, which I co-designed and ran, a competitor audit, a qualitative benchmark with recommendations, lo-fi mockups tested with users, analysis of the interviews, and the high-fidelity clickable prototype.",
            },
            {
              key: "Decision 1",
              value: "The \"Buy\" button that sat on every screen was dropped. Offers stay in one section of the dashboard.",
            },
            {
              key: "Decision 2",
              value: "Buying and managing policies and booking a doctor's appointment moved into one module.",
            },
            {
              key: "Decision 3",
              value:
                "The information architecture and the navigation were rebuilt around what customers do in the portal: pay, report a claim, use medical services, check investments.",
            },
            {
              key: "Evidence",
              value:
                "6 workshops with the business. 24 in-depth interviews leading to prototype 1.0, 18 leading to 2.0 and 12 leading to 3.0, all online.",
            },
            { key: "Shipped", value: "To production, on mojepzu.pl" },
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
            "<p>mojepzu.pl is where PZU customers manage what they hold with the company: insurance policies, medical services, investments and savings. The redesign covered the portal before and after logging in.</p>" +
            "<p>We worked on the customer perspective and the business perspective in parallel. The project had two goals, and each came with its own questions.</p>",
        },
        {
          kind: "spec",
          rows: [
            {
              key: "Goal 1",
              value:
                "Make the communication of the offer more coherent. How do we present the offer the same way before and after login? What should a customer see first? How do we weigh what the organisation needs against what the customer needs when we prioritise content?",
            },
            {
              key: "Goal 2",
              value:
                "Make the portal more intuitive and easier to use. How should the home page be structured, before and after login, so that the customer does not feel lost? What should the main pages do? How do we simplify the language so that it is easier to find your way?",
            },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/dashboard.webp`,
          caption:
            "The logged-in dashboard: insurance policies and medical services as cards, the shortcut bar on the left and the latest updates top right. Addresses and policy numbers are blurred.",
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
          kind: "spec",
          caption: "The process in three streams, as the project board lays it out.",
          rows: [
            {
              key: "Strategic stream",
              value:
                "6 workshops with the business, a redesign strategy workshop, expert analysis, a competitor audit, a qualitative benchmark, research hypotheses.",
            },
            {
              key: "Research and design stream 1",
              value:
                "24 in-depth interviews. Workshops with the business on empathy, ideation and prioritisation. Prototype 1.0.",
            },
            {
              key: "Research and design stream 2",
              value:
                "18 in-depth interviews, then a workshop with the business on improvements and prototype 2.0. 12 in-depth interviews, then prototype 3.0.",
            },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>I worked with a UX researcher. The first round was 24 individual in-depth interviews, held online over Zoom, and it had three aims: to check the hypotheses from the workshop with the business units, to find out which information and functions customers need before they log in and on the dashboard after, and to decide what the dashboard is for. The later rounds, 18 and 12 interviews, were also online.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/prototype-review.webp`,
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
            "Customers said the portal offered few functions, so it was not very attractive to them.",
            "They identified the company with insurance. Most were surprised to learn the portal also had other products, such as medical and financial services.",
            "Self-service was the function that mattered most to them.",
            "They treated the portal as their own space and took the name literally: myPORTAL means mine.",
          ],
        },
        {
          kind: "pull",
          text: "\"The customer expects to be in their world, not ours.\"",
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/insights-board.webp`,
          caption:
            "The synthesis board from the first round. Each area of the portal has rows for the screen, the observations and conclusions, the challenges, and the ideas.",
        },
      ],
    },
    {
      id: "prototypes",
      n: "03",
      heading: "What changed between prototypes",
      standfirst: "Between prototypes 1.0, 2.0 and 3.0, five things changed.",
      blocks: [
        {
          kind: "spec",
          rows: [
            { key: "Information architecture", value: "Changed. In the final version the dashboard groups what a customer holds by type: insurance, medical services, investments and savings." },
            { key: "Navigation", value: "Changed. The final version has a top bar of product areas and a bar of shortcuts on the left." },
            { key: "Screen layout", value: "The content layout of individual screens changed." },
            { key: "\"Buy\" button", value: "Dropped. It had sat on every screen." },
            {
              key: "New module",
              value: "Added, for buying and managing policies and for booking doctor's appointments.",
            },
          ],
        },
        {
          kind: "duo",
          items: [
            { src: `${S}/early-mockup.webp` },
            { src: `${S}/offers-final.webp` },
          ],
          caption:
            "First, an early greyscale mockup of the logged-in home page: the offer cards under \"Wybrane dla Ciebie\" (selected for you) carry a \"KUP\" (buy) button. Second, the same section in the final version, where each offer ends in \"Dowiedz się więcej\" (find out more).",
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
                body: "Offers live in one section of the dashboard, \"Wybrane dla Ciebie\", and each card there links to the details.",
              },
              why: {
                label: "Why",
                body: "In the first round customers described the portal as their own space and took its name literally: myPORTAL means mine.",
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
                label: "Why",
                body: "Customers found the portal thin on functions and valued self-service most. Most were surprised to find medical services in the portal at all.",
              },
            },
            {
              n: "03",
              title: "Build the navigation around what customers came to do",
              rule: {
                label: "Rule",
                body: "The top navigation names tasks and product areas: payments, claims and benefits, medical services, investments and savings. The shortcut bar holds the actions: pay, book a visit or test, report a claim, see offers.",
              },
              why: {
                label: "Why",
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
          src: `${S}/final-screens.webp`,
          caption:
            "The final screens on desktop, tablet and phone. The tablet and phone show the dashboard further down, with investments and savings and the \"Wybrane dla Ciebie\" offers. Personal details are blurred.",
        },
        {
          kind: "palette",
          standfirst: "The colours of the final screens, with where each one appears.",
          items: [
            { hex: "#009DDE", name: "Blue", role: "Buttons, links and the active navigation item" },
            { hex: "#FAFBFD", name: "Off-white", role: "The page background" },
            { hex: "#234678", name: "Navy", role: "The shortcut bar, the footer and the headings" },
            { hex: "#C4C4C4", name: "Grey", role: "The \"Edytuj skróty\" (edit shortcuts) tile under the shortcut bar" },
            { hex: "#8CC83C", name: "Green", role: "The \"Aktywna\" (active) policy status" },
            { hex: "#D45F7E", name: "Pink", role: "Status badges that need the customer's attention" },
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
            "<p>The redesign shipped to production on mojepzu.pl. Before it did, 54 in-depth interviews in three rounds fed three prototypes, and between them the structure, the navigation and the screens changed.</p>" +
            "<p>I have no measurements from after the launch, such as usage, self-service rates or support contacts, so this page does not claim any.</p>",
        },
      ],
    },
  ],
};
