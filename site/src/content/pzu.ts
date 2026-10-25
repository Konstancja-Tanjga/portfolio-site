import type { CaseStudy } from "./types";

/**
 * Everything on this page comes from three places: the original project boards
 * (removed in 144a907, recoverable from history), the final Figma file, and
 * the owner's confirmation of what the board leaves out: that the portal
 * shipped, that she was the only designer, and what changed between the
 * prototypes.
 *
 * The board's words are text here. The research boards are crops from it:
 * insights-board.webp and prototype-review.webp in /work/mojepzu/screens/,
 * and the prototype review laid into the MacBook in /work/mojepzu/device/.
 *
 * The product screens come from the final Figma file (mojePZU_FINAL_2021,
 * page 2528:291), exported at 3x and laid into the MacBook in
 * /work/mojepzu/device/. Names, addresses, policy and case numbers, number
 * plates, PESEL, phone and account numbers, first names, and every date are
 * blurred: the data is mock, but it looks real, and the owner asked for no
 * dates on the page. The two clips in chapter 05 walk the file's own
 * prototype links (login, personalisation, the tutorial, the shortcut bar);
 * nothing in them is a link the prototype does not have. The file does not
 * label which frames belong to prototype 1.0, 2.0, or 3.0, so no screen here
 * is given a version.
 *
 * Rebuilt on 25 October 2026 the Analytics way (docs/copy-edit/log-pzu.md):
 * chapter 00 carries the three decisions as cards with the screen that shows
 * each one taken; the process is one drawing sheet in chapter 02, with the
 * study's own boards and screens in the tool windows (no FOX drawings: this
 * is not an APplus product); the two research boards sit in one fold; the
 * two clips and the three-device composite are tabs; the palette is folded.
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
    credit: "UI Designer · PZU",
    org: "PZU",
    art: { src: "/work/mojepzu/device/dashboard-2400.webp" },
    shot: { src: "/work/mojepzu/device/dashboard-2400.webp" },
    layers: [
      { src: "/work/mojepzu/device/dashboard-2400.webp", label: "Dashboard" },
      { src: "/work/mojepzu/device/guest-dashboard-2400.webp", label: "Before logging in" },
      { src: "/work/mojepzu/device/medical-2400.webp", label: "Medical services" },
      { src: "/work/mojepzu/device/payments-2400.webp", label: "Payments" },
      { src: "/work/mojepzu/device/club-2400.webp", label: "Klub PZU" },
    ],
    motif: "documents",
  },
  meta: [
    { label: "Role", value: "UI Designer; the only designer on the project, freelance" },
    { label: "Company", value: "PZU, Warsaw" },
    { label: "Team", value: "Five: a UX researcher, a strategist, a developer, a service designer, and me" },
    { label: "Platform", value: "mojepzu.pl, on desktop, tablet, and phone" },
    { label: "Research", value: "6 workshops with the business, 54 in-depth interviews over three rounds" },
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
              key: "What",
              value:
                "mojepzu.pl, where PZU customers manage their insurance policies, medical services, investments, and savings; redesigned before and after login.",
            },
            {
              key: "Problem",
              value:
                "Customers saw PZU as an insurer and the portal as a place with few functions. Most did not know it also offered medical and financial services.",
            },
            {
              key: "My role",
              value:
                "The only designer: the business workshops, co-designed and run by me, the competitor audit and benchmark, lo-fi mockups tested with users, the clickable prototype.",
            },
            {
              key: "Decision 1",
              value:
                "After logging in, no screen carries a \"Buy\" button. Offer cards in \"Wybrane dla Ciebie\" end in \"Dowiedz się więcej\".",
              shot: { frame: "macbook", src: "/work/mojepzu/device/dashboard-1600.webp", alt: "The logged-in dashboard: policies and medical services as cards, no Buy button", to: "#prototypes" },
            },
            {
              key: "Decision 2",
              value:
                "Buying and managing policies and booking a doctor's appointment moved into one module, with medical services on the dashboard.",
              shot: { frame: "macbook", src: "/work/mojepzu/device/medical-1600.webp", alt: "Medical services: book a visit, a teleconsultation, or a test", to: "#decisions" },
            },
            {
              key: "Decision 3",
              value:
                "The top navigation names product areas; the shortcut bar holds the actions: pay, book a visit, report a claim, see offers.",
              shot: { frame: "macbook", src: "/work/mojepzu/device/shortcuts-1600.webp", alt: "Editing the shortcut bar: an icon dragged onto the bar to pin it", to: "#decisions" },
            },
            {
              key: "Outcome",
              value:
                "Shipped to production on mojepzu.pl after three prototypes. Usage, self-service rates, and support contacts were not measured after launch, so none is claimed.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      standfirst: "The portal before and after login, and the two goals the project set for it.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>mojepzu.pl is where PZU customers manage what they hold with the company: insurance policies, medical services, investments, and savings. <strong>The project had two goals</strong>, worked on in parallel from the customer's side and the business's side.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Present the offer the same way before and after login.</strong> What a customer sees first; how the organisation's needs weigh against the customer's when content is prioritised.",
            "<strong>Make the portal easier to use.</strong> A home page, before and after login, where the customer does not feel lost; main pages with a clear job; simpler language.",
          ],
        },
        {
          kind: "carousel",
          items: [
            { src: "/work/mojepzu/device/guest-dashboard-2400.webp", frame: "macbook", title: "Before logging in", body: "Insurance, medical services, and investments as product cards; \"Zaloguj się\" top right." },
            { src: "/work/mojepzu/device/personalise-2400.webp", frame: "macbook", title: "Choosing topics", body: "Twelve tiles to tailor the offer, \"Zapisz preferencje\" or \"Pomiń\"." },
            { src: "/work/mojepzu/device/dashboard-2400.webp", frame: "macbook", title: "Dashboard", body: "Policies and medical services as cards, \"Moje skróty\" on the left, the latest updates top right." },
            { src: "/work/mojepzu/device/insurance-2400.webp", frame: "macbook", title: "Insurance", body: "Every policy in one list, filtered by product, number, status, and date range." },
            { src: "/work/mojepzu/device/payments-2400.webp", frame: "macbook", title: "Payments", body: "What is due, with status and price; saved method, quick transfer, BLIK, or card." },
            { src: "/work/mojepzu/device/claims-2400.webp", frame: "macbook", title: "Claims and benefits", body: "Reporting starts with what it concerns: vehicles, property, or people. Assistance beside it." },
            { src: "/work/mojepzu/device/medical-2400.webp", frame: "macbook", title: "Medical services", body: "Book a visit, a teleconsultation, or a test; refunds, packages, and the offer as tabs." },
            { src: "/work/mojepzu/device/agent-offers-2400.webp", frame: "macbook", title: "Offers", body: "Shared by an agent or an employer, or saved by the customer; a calculator and a call-back above." },
            { src: "/work/mojepzu/device/messages-2400.webp", frame: "macbook", title: "Messages", body: "Messages, announcements, and status changes as tabs." },
            { src: "/work/mojepzu/device/profile-2400.webp", frame: "macbook", title: "Profile", body: "Personal details, children, addresses, contact details, payment methods, and products." },
            { src: "/work/mojepzu/device/club-2400.webp", frame: "macbook", title: "Klub PZU", body: "Klub PZU Pomoc w Życiu, with a short survey on what members expect from it." },
          ],
        },
      ],
    },
    {
      id: "research",
      n: "02",
      heading: "Research, and how I worked",
      standfirst:
        "Workshops with the business set the hypotheses. Three rounds of in-depth interviews tested them, and each round led to the next prototype.",
      blocks: [
        {
          kind: "sheet",
          sheet: {
            tools: [
              { name: "Zoom", mark: "", glyph: "Z", what: "the first round of interviews, online" },
              { name: "Figma", mark: "figma", what: "the boards, the prototypes, the final file" },
              { name: "mojepzu.pl", mark: "", glyph: "PZU", what: "in production" },
            ],
            stations: [
              { tool: "Zoom", mark: "", file: "24 · 18 · 12 interviews", title: "Three rounds, one per prototype", body: "In-depth, with the UX researcher. Round one checked the hypotheses from the six business workshops and asked what the dashboard is for.", image: { src: "/work/mojepzu/screens/prototype-review.webp", alt: "The first-round analysis board: each screen of the portal with a column of interview notes beside it" } },
              { tool: "Figma", mark: "figma", file: "synthesis board", title: "Findings by area of the portal", body: "One column per area: the screen, the observations, the challenges, the ideas.", image: { src: "/work/mojepzu/screens/insights-board.webp", alt: "The synthesis board from the first round, with a column for each area of the portal" } },
              { tool: "Figma", mark: "figma", file: "lo-fi mockup", title: "Greyscale first, tested with users", body: "The logged-in home page before colour; the offer cards still carry \"KUP\".", image: { src: "/work/mojepzu/screens/early-mockup.webp", alt: "An early greyscale mockup of the logged-in home page" } },
              { tool: "Figma", mark: "figma", file: "prototype 3.0", title: "Clickable, high fidelity", body: "Login, the topic choice, the tutorial, and the shortcut bar linked as the clips in 05 show.", image: { src: "/work/mojepzu/clips/first-login.webp", alt: "The public page of the clickable prototype in the MacBook" } },
              { tool: "mojepzu.pl", mark: "", file: "production", title: "Shipped", body: "Desktop, tablet, and phone.", image: { src: "/work/mojepzu/screens/final-screens.webp", alt: "The final screens on a laptop, a tablet, and a phone" } },
            ],
            block: [
              ["Sheet", "How I worked on MojePZU"],
              ["Drawn for", "One finding, from the workshop hypotheses to the shipped screen"],
            ],
          },
        },
        {
          kind: "passage",
          html: "<p><strong>What the first round found.</strong></p>",
        },
        {
          kind: "points",
          items: [
            "<strong>The portal offered few functions</strong>, customers said, so it did not attract them.",
            "<strong>PZU meant insurance.</strong> Most were surprised to learn the portal also had medical and financial services.",
            "<strong>Self-service mattered most</strong> to them.",
            "<strong>The portal was their own space.</strong> They took the name literally: myPORTAL means mine.",
          ],
        },
        {
          kind: "pull",
          text: "\"The customer expects to be in their world, not ours.\"",
        },
        {
          kind: "fold",
          title: "The two research boards: first-round analysis and synthesis",
          hint: "Open: two boards, with notes pinned on each",
          blocks: [
            {
              kind: "shot",
              width: "wall",
              src: "/work/mojepzu/device/prototype-review-2400.webp",
              frame: "macbook",
              caption: "The first-round analysis board: the portal's screens one by one, a column of interview notes beside each.",
              hotspots: [
                { x: 19, y: 23, text: "Each screen of the portal, laid out one by one." },
                { x: 63, y: 20, text: "A column of interview notes beside each screen." },
              ],
            },
            {
              kind: "shot",
              width: "wall",
              src: "/work/mojepzu/screens/insights-board.webp",
              caption: "The synthesis board: per area of the portal, rows for the screen, the observations and conclusions, the challenges, and the ideas.",
              hotspots: [
                { x: 62, y: 17, text: "One column per area of the portal." },
                { x: 28, y: 22, text: "The screen, as it was." },
                { x: 50, y: 34, text: "The observations and conclusions from the interviews." },
                { x: 20, y: 47, text: "The challenges." },
                { x: 20, y: 79, text: "The ideas." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "prototypes",
      n: "03",
      heading: "What changed between prototypes",
      standfirst:
        "Between prototypes 1.0, 2.0, and 3.0: the information architecture, the navigation, the layout of individual screens, the \"Buy\" button, and a new module. The three decisions in 04 say which and why.",
      blocks: [
        {
          kind: "duo",
          items: [
            {
              src: "/work/mojepzu/screens/early-mockup.webp",
              caption: "Early greyscale mockup of the logged-in home page: the offer cards under \"Wybrane dla Ciebie\" (selected for you) carry \"KUP\" (buy).",
            },
            {
              src: "/work/mojepzu/screens/dashboard-final.webp",
              caption: "The same page in the final version: each offer ends in \"Dowiedz się więcej\" (find out more).",
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
              title: "Drop the \"Buy\" button from the logged-in portal",
              rule: {
                label: "Rule",
                body: "No screen after logging in carries a \"Buy\" button. Offer cards in \"Wybrane dla Ciebie\" end in \"Dowiedz się więcej\" and link to the details.",
              },
              why: {
                label: "Round 1 finding",
                body: "The portal as the customer's own space: myPORTAL means mine.",
              },
            },
            {
              n: "02",
              title: "One module for policies and doctor's appointments",
              rule: {
                label: "Rule",
                body: "Buying and managing a policy and booking a doctor's appointment sit in one module. Medical services have their own row of cards under the policies on the dashboard; booking a visit is a shortcut in the bar.",
              },
              why: {
                label: "Round 1 findings",
                body: "Few functions, customers said; self-service mattered most; most did not know the portal had medical services.",
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
                body: "A home page where the customer does not feel lost, in simpler language.",
              },
            },
          ],
        },
      ],
    },
    {
      id: "screens",
      n: "05",
      heading: "Screens and flows",
      standfirst: "Two flows clicked through the Figma prototype, and the final screens on three devices.",
      blocks: [
        {
          kind: "tabs",
          label: "Flows and final screens",
          items: [
            {
              label: "First login",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  frame: "macbook",
                  width: "wall",
                  src: "/work/mojepzu/clips/first-login.mp4",
                  poster: "/work/mojepzu/clips/first-login.webp",
                  title: "A first login, from the public page to the dashboard",
                  caption:
                    "The public page, \"Zaloguj się\", the login panel, the topic choice skipped with \"Pomiń\", the tutorial's first of five steps ended with \"Zakończ samouczek\", and the dashboard scrolled to the offers.",
                },
              ],
            },
            {
              label: "Shortcut bar",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  frame: "macbook",
                  width: "wall",
                  src: "/work/mojepzu/clips/shortcuts.mp4",
                  poster: "/work/mojepzu/clips/shortcuts.webp",
                  title: "The shortcut bar: pay, book a visit, report a claim",
                  caption:
                    "From the dashboard, \"Opłać\" opens payments, \"Umów wizytę lub badanie\" opens medical services, \"Zgłoś szkodę\" opens claims and benefits. The bar sits in the same place on every logged-in page.",
                },
              ],
            },
            {
              label: "Three devices",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: "/work/mojepzu/screens/final-screens.webp",
                  caption:
                    "The final screens on desktop, tablet, and phone; the tablet and phone show the dashboard further down, at investments and the \"Wybrane dla Ciebie\" offers. Personal details blurred.",
                },
              ],
            },
          ],
        },
        {
          kind: "fold",
          title: "The palette from the project board",
          hint: "Open: six colours and where the final screens use each",
          blocks: [
            {
              kind: "palette",
              items: [
                { hex: "#009DDE", name: "Blue", role: "Buttons, links, the active navigation item" },
                { hex: "#FAFBFD", name: "Off-white", role: "The page background" },
                { hex: "#234678", name: "Navy", role: "The footer" },
                { hex: "#C4C4C4", name: "Grey", role: "The \"Edytuj skróty\" (edit shortcuts) tile under the shortcut bar" },
                { hex: "#8CC83C", name: "Green", role: "The \"Aktywna\" (active) policy status" },
                { hex: "#D45F7E", name: "Pink", role: "On the board; not on the final screens shown here" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
