import type { CaseStudy } from "./types";

/**
 * A method, not a product — which is why it sits in the practice band.
 * Structure and text mirror the Figma wall, which is fully written.
 */
export const futures: CaseStudy = {
  slug: "futures-thinking",
  title: "Futures Thinking",
  what: "A foresight workshop framework I designed and facilitated",
  lead:
    "Flow Hub needed a navigation model, and the team had two arguments it could not close by discussion. I designed and facilitated a three-stage foresight programme — two online sessions and a one-day off-site — that turned those arguments into a decision with an owner on every step.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "PRACTICE · FORESIGHT AND FACILITATION",
    headline: ["Futures", "Thinking"],
    subline: "a workshop framework, for the Flow Hub navigation work",
    stamp: "STEEP · MULTIPLE FUTURES · 2×2 SCENARIOS · JOBS TO BE DONE",
    credit: "Designed and facilitated · APplus ERP · 2025",
    shot: { src: "/work/futures-thinking/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Designed the programme and facilitated every session" },
    { label: "Context", value: "APplus ERP — Flow Hub navigation" },
    { label: "Shape", value: "3 stages: two online sessions, one off-site day" },
    { label: "Participants", value: "5, every block timeboxed" },
    { label: "Method", value: "Institute for the Future — Futures Thinking specialisation" },
    { label: "Output", value: "Six matrices, one chosen; job stories with a verdict each" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it was for",
      maxim:
        "Two arguments the team could not close by discussion. A workshop is what you build when discussion has already failed.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Flow Hub needed a navigation model. TODO — state the two arguments plainly: whether people should enter through one place or many, and the second one.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch01.png" },
      ],
    },
    {
      id: "structure",
      n: "02",
      heading: "Structure",
      maxim:
        "Facilitation is not the skill. Sequencing is. Each step has to hand the next one something it can actually use.",
      standfirst:
        "Three stages, five participants, every block timeboxed. Two online sessions build the material; the off-site spends it.",
      blocks: [
        {
          kind: "spec",
          caption: "Stage 1, online — 11 June 2025, 220 minutes.",
          rows: [
            { key: "vision", value: "Constraints and dependencies for Flow navigation — led by product" },
            { key: "user groups", value: "Presented from the existing research" },
            { key: "method", value: "Futures Thinking: what it is for, and what it is not" },
            { key: "STEEP", value: "Trend analysis — read alone, then discussed" },
            { key: "challenge", value: "The central challenge framed from STEEP, as a group" },
            { key: "matrix", value: "The 2×2 scenario matrix explained on a worked example" },
            { key: "homework", value: "Each participant writes their own scenario" },
          ],
        },
        {
          kind: "spec",
          caption: "Stage 2, online.",
          rows: [
            { key: "opening", value: "Recap, clustered scenario summary, objective for the day" },
            { key: "gallery walk", value: "What surprised you, what patterns do you see" },
          ],
        },
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch02.png" },
      ],
    },
    {
      id: "workshop-one",
      n: "03",
      heading: "Inside workshop one",
      maxim:
        "Preparation is not admin work. It is what buys you the group's judgement instead of their setup time.",
      standfirst:
        "The participants opened a board that was already half-built. That is the facilitation decision.",
      blocks: [
        {
          kind: "steps",
          standfirst: "Prepared before the session, by me:",
          items: [
            {
              n: "01",
              title: "The STEEP chain, already drawn",
              rule: {
                label: "What was on the wall",
                body:
                  "Seven technological forces for ERP and B2B in Germany, each traced through the same three links: trend, then the driver behind it, then the implication for the product.",
              },
              why: {
                label: "Why prepare it",
                body:
                  "Participants argued with the implications instead of starting from a blank wall.",
              },
            },
            {
              n: "02",
              title: "User groups with their share of the base",
              rule: {
                label: "The numbers",
                body:
                  "Office workers 40 per cent, production 18, field sales and service 14, team leads 14, management 5, plus system administrators.",
              },
              why: {
                label: "Why numbers",
                body: "So that a loud opinion could not outweigh a large group.",
              },
            },
            {
              n: "03",
              title: "A worked example of the matrix",
              rule: {
                label: "One complete 2×2",
                body: "Axes, four named quadrants, implications — filled in by me.",
              },
              why: {
                label: "Why a worked example",
                body:
                  "TODO — what went wrong the first time you asked a group to fill a 2×2 cold.",
              },
            },
          ],
        },
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch03.png" },
      ],
    },
    {
      id: "crosscutting",
      n: "04",
      heading: "What all six groups asked for",
      maxim:
        "Low uncertainty is not a boring result. It is permission to stop debating and start building.",
      standfirst:
        "Six user groups, analysed separately against the trends, converged on four things. Those four became the validation criteria for everything that followed.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Transparency and control, everywhere.</strong> Every group, from the shop floor to the board, asked for explainable AI and the ability to override it. Not a feature request — a precondition for using the thing at all.",
            "<strong>Contextual filtering, not data dumping.</strong> Whether it is a noise-free mobile card or a narrative KPI, the system has to pre-curate. AI should be used to hide noise, not to add complexity.",
            "<strong>Offline and modular resilience.</strong> Mobile roles and administrators arrived at the same sentence from opposite ends: it has to work when parts of it are down or disconnected.",
            "<strong>Human–AI co-work, not hand-off.</strong> Team leads and office workers want AI to assist. Final authority stays human, and the interface has to make that visible rather than assumed.",
          ],
        },
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch04.png" },
      ],
    },
    {
      id: "matrices",
      n: "05",
      heading: "Six matrices, one chosen",
      standfirst:
        "Twenty-four written quadrants, including the ones we did not want — because a future you refuse to write is a future you have not actually ruled out.",
      blocks: [
        {
          kind: "spec",
          caption: "The six candidate matrices, and their named quadrants.",
          rows: [
            { key: "AI Assist × Entry Points", value: "Smart & Seamless · Manual Relevance · Autonomous Confusion · Legacy Blindspot" },
            { key: "AI Assist × Dynamic UI", value: "Adaptive Co-Pilot · Manual Control Panel · Frozen Manual Mode" },
            { key: "AI Assist × Guardrailed Personalisation", value: "Self-Directed Automation · Human-Centric Studio" },
            { key: "Entry Points × Dynamic UI", value: "Adaptive Role Cockpit" },
            { key: "…", value: "TODO — the remaining two matrices" },
          ],
        },
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch05.png" },
      ],
    },
    {
      id: "the-matrix",
      n: "06",
      heading: "The matrix that decided it",
      maxim:
        "“We should give them a template, not a blank page.” One sentence in the room retired an entire quadrant.",
      standfirst: "Axis: AI-assisted, human-led ←→ AI-led.",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              n: "Q1",
              title: "Configurable Cockpit — tailor made, human led",
              rule: {
                label: "What it is",
                body:
                  "Requires manual pre-configuration. A main page built from configurable dashboard elements, with favourite boards added to the nav bar. AI is available but optional, the way the assistant icon works today.",
              },
              why: { label: "The cost", body: "Powerful — and a steeper learning curve." },
            },
            {
              n: "Q2",
              title: "Navigational Co-pilot — tailor made, AI led",
              rule: {
                label: "What it is",
                body:
                  "A dynamic, minimal UI driven by real-time agent interaction. AI suggests or executes actions, always with a stated rationale and an undo.",
              },
              why: {
                label: "The cost",
                body: "Hardest to implement, highest running cost.",
              },
            },
          ],
        },
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch06.png" },
      ],
    },
    {
      id: "jobs",
      n: "07",
      heading: "From jobs to decisions",
      maxim:
        "A no is an output too. A workshop that only records agreement leaves the hardest half undocumented.",
      standfirst:
        "Every need was written as a job story, then given three columns it could not escape: what success looks like, what the product does today, and a verdict.",
      blocks: [
        {
          kind: "spec",
          caption: "Job story → today → verdict. Two of the set.",
          rows: [
            {
              key: "When I begin my workday, I want immediate visibility of my open tasks so that I can decide what to tackle first",
              value: "Today: tasks are only visible from inside an open Flow Board. Verdict: expand AI Dashboards and make them visible everywhere.",
            },
            {
              key: "When I'm unsure how to perform a step, I want help without leaving my flow",
              value: "TODO — today, and the verdict.",
            },
          ],
        },
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch07.png" },
      ],
    },
    {
      id: "offsite",
      n: "08",
      heading: "The off-site, Munich",
      maxim:
        "A day that ends in a list of owners is a working day. A day that ends in enthusiasm is a nice day.",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — what the day actually did, and what it produced by the end of it.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch08.png" },
      ],
    },
    {
      id: "produced",
      n: "09",
      heading: "What it produced",
      maxim:
        "The test of a workshop is not whether people enjoyed it. It is whether a decision taken at the end can still be traced to a signal noticed at the beginning.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "3", label: "workshops, including a one-day off-site" },
            { value: "6", label: "user groups turned into job stories" },
            { value: "TODO", label: "scope, with an owner on every step" },
          ],
        },
        {
          kind: "spec",
          caption: "One trend, all the way through.",
          rows: [
            {
              key: "STEEP — trend",
              value: "Business users customise workflows without developers. Low-code and no-code extensions are spreading.",
            },
            {
              key: "Driver",
              value: "A shortage of IT talent, and a rising citizen-developer culture inside the organisation.",
            },
            {
              key: "Implication",
              value: "The Central Flow Hub has to enable guardrailed personalisation — flexibility that cannot break process logic or security.",
            },
            {
              key: "Impact × uncertainty",
              value: "High impact, high uncertainty. It survives the cut, and becomes a candidate axis.",
            },
            { key: "Axis, then quadrant", value: "TODO — where it landed." },
          ],
        },
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch09.png" },
      ],
    },
    {
      id: "method",
      n: "10",
      heading: "Where the method comes from",
      standfirst:
        "I certified in the Institute for the Future's Futures Thinking specialisation, taught by Jane McGonigal and based on her How to Think Like a Futurist workshops at Stanford. IFTF is a Silicon Valley research organisation founded in 1968 that has been applying and teaching foresight for over fifty years.",
      blocks: [
        {
          kind: "steps",
          standfirst: "What I actually used, and where it landed.",
          items: [
            {
              n: "01",
              title: "Read signals",
              rule: {
                label: "The method",
                body: "Read signals, name the driver behind each one, and state what it implies.",
              },
              why: {
                label: "Where it landed",
                body:
                  "Became the STEEP chain: every trend written out as trend, then driver, then implication for the product. Nothing stayed at the level of “AI is important”.",
              },
            },
            {
              n: "02",
              title: "Multiple futures",
              rule: {
                label: "The method",
                body: "Hold several plausible futures at once instead of betting on one.",
              },
              why: {
                label: "Where it landed",
                body:
                  "Became six candidate matrices and twenty-four written quadrants — including the ones we did not want, because a future you refuse to write is a future you have not ruled out.",
              },
            },
          ],
        },
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch10.png" },
      ],
    },
  ],
};
