import type { CaseStudy } from "./types";

/**
 * A method, not a product, which is why it sits in the practice band.
 *
 * The boards are the artefact. Every section of the Figma file carries its
 * own type (the maxims, the STEEP chain, the six matrices, the job stories
 * with their verdicts), so the page does not transcribe them: a caption says
 * what to look at, and the boards of one stage sit behind one row of tabs.
 * The structure board and the method board are reference, folded. No tool
 * chain ran here (a FigJam board, a room, a whiteboard), so the page has no
 * drawing sheet.
 */
const B = "/work/futures-thinking";

export const futures: CaseStudy = {
  slug: "futures-thinking",
  title: "Futures Thinking",
  what: "A foresight workshop framework I designed and facilitated",
  lead:
    "Flow Hub needed a navigation model, and the team had two arguments it could not close by discussion. I designed and facilitated a three-stage foresight programme, two online sessions and a one-day off-site, that turned those arguments into a decision with an owner on every step.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "PRACTICE · FORESIGHT AND FACILITATION",
    headline: ["Futures", "Thinking"],
    subline: "a workshop framework, for the Flow Hub navigation work",
    stamp: "STEEP · MULTIPLE FUTURES · 2×2 SCENARIOS · JOBS TO BE DONE",
    credit: "Designed and facilitated · APplus ERP · 2025",
    art: { src: `${B}/cone-2400.webp` },
    shot: { src: `${B}/00-cover.png` },
  },
  meta: [
    { label: "Role", value: "Designed the programme and facilitated every session" },
    { label: "Context", value: "APplus ERP, Flow Hub navigation" },
    { label: "Shape", value: "3 stages: two online sessions, one off-site day" },
    { label: "Participants", value: "5, every block timeboxed" },
    { label: "Method", value: "Institute for the Future, Futures Thinking specialisation" },
    { label: "Output", value: "Six matrices, one chosen; job stories with a verdict each" },
    { label: "Period", value: "2025" },
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
                "A three-stage foresight programme, two online sessions and a one-day off-site, run for the Flow Hub navigation work in APplus ERP.",
            },
            {
              key: "Problem",
              value:
                "Two arguments the team could not close by discussion: tasks or modules as the entry point, and how far the interface adapts to its user.",
            },
            {
              key: "My role",
              value:
                "Designed the programme, prepared every board in advance, and facilitated every session; the method is the Institute for the Future's.",
            },
            {
              key: "Decision 1",
              value:
                "Participants opened a board already half-built: the STEEP chain drawn, user groups listed, one worked matrix. The energy went into thinking.",
              shot: { src: `${B}/ch03.png`, alt: "The first online session, with the board prepared in advance", to: "#workshop-one" },
            },
            {
              key: "Decision 2",
              value:
                "All 24 quadrants of six matrices written before choosing; the chosen pair was the only one where both axes cost real money.",
              shot: { src: `${B}/ch06.png`, alt: "The matrix that decided it, four quadrants as four cost structures", to: "#matrices" },
            },
            {
              key: "Decision 3",
              value:
                "Every need became a job story with a verdict column, yes, no, or open, with the reason and the person who said it.",
              shot: { src: `${B}/ch07.png`, alt: "Job stories with their verdicts", to: "#jobs" },
            },
            {
              key: "Outcome",
              value:
                "A scope the room agreed, a navigation concept sketched around it, four validation criteria, and a name on every next step.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it was for",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${B}/ch01.png`,
          caption:
            "The brief: tasks or modules as the entry point, and how far the interface adapts to its user. Both bets on a future nobody in the room could evidence.",
        },
      ],
    },
    {
      id: "structure",
      n: "02",
      heading: "How it ran",
      blocks: [
        {
          kind: "flow",
          stages: [
            { title: "Stage 1, online: framing", body: "Vision, constraints, user groups; the STEEP trends; the central challenge; the 2×2 matrix on a worked example. 220 minutes." },
            { title: "Stage 2, online: scenarios", body: "Gallery walk, breakout teams on implications and options, synthesis, a vote on the tensions for the off-site. About 150 minutes." },
            { title: "Stage 3, off-site: one day", body: "Three priority matrices confirmed, quadrant stories cross-reviewed, feature extraction, an MVP, a back-cast roadmap." },
          ],
          note: "Two online sessions build the material and the off-site spends it. Each participant wrote a scenario as homework between the sessions, so session two did not start from a blank canvas.",
        },
        {
          kind: "fold",
          title: "The three stages, block by block",
          hint: "Open: one board, every block with its minutes",
          blocks: [
            {
              kind: "shot",
              width: "wall",
              src: `${B}/ch02.png`,
              caption: "Every block of the three stages with its minutes, and the FigJam board they ran on.",
            },
          ],
        },
      ],
    },
    {
      id: "workshop-one",
      n: "03",
      heading: "Inside workshop one",
      maxim: "Preparation is not admin work. It buys the group's judgement instead of their setup time.",
      blocks: [
        {
          kind: "tabs",
          label: "The first online session",
          items: [
            {
              label: "The board",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${B}/ch03.png`,
                  caption:
                    "Opened half-built: the STEEP chain drawn, the user groups with their share of the base, one worked matrix, empty matrices per team.",
                },
              ],
            },
            {
              label: "What six groups asked for",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${B}/ch04.png`,
                  caption:
                    "Six user groups analysed apart against the trends; four requests came back from every one and became the validation criteria downstream.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "matrices",
      n: "04",
      heading: "Six matrices, one chosen",
      maxim: "Choosing the axes is the whole method.",
      blocks: [
        {
          kind: "tabs",
          label: "The scenario matrices",
          items: [
            {
              label: "All six",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${B}/ch05.png`,
                  caption:
                    "Four uncertainties survived the scoring; six pairings, all 24 quadrants named, each with its failure mode.",
                },
              ],
            },
            {
              label: "The chosen one",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${B}/ch06.png`,
                  caption:
                    "Adaptive, role-aware UI against AI assistance: the only pair where both axes cost money. Four quadrants, four cost structures.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "jobs",
      n: "05",
      heading: "From jobs to decisions",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${B}/ch07.png`,
          caption:
            "Every need as a job story with three columns: what success looks like, what the product does today, a verdict. Yes, no, or open, with the reason and the person.",
        },
      ],
    },
    {
      id: "offsite",
      n: "06",
      heading: "The off-site, Munich",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${B}/ch08.png`,
          caption:
            "One day in Munich, where the material became owners and dates. Mobile left the room as an open question, not a decision.",
        },
      ],
    },
    {
      id: "produced",
      n: "07",
      heading: "What it produced",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${B}/ch09.png`,
          caption:
            "A scope the room agreed, four validation criteria, a name on every next step; one trend traced from STEEP signal to scope line.",
        },
        {
          kind: "fold",
          title: "Where the method comes from: the Institute for the Future",
          hint: "Open: one board, which tool did which job, and the certificate",
          blocks: [
            {
              kind: "shot",
              width: "wall",
              src: `${B}/ch10.png`,
              caption:
                "Forecasting became the STEEP chain, multiple futures the six matrices, simulation the drafting brief, turning foresight into action the back-cast and the scope. Taught by Jane McGonigal.",
            },
          ],
        },
      ],
    },
  ],
};
