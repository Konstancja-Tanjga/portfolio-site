import type { CaseStudy } from "./types";

/**
 * SailRock: the dive tables I plan with, on a phone. It sits in `practice`
 * because it is a personal project, run end to end in three days.
 *
 * The brief, the rules, and the design direction are mine; Claude,
 * Anthropic's AI model, built the interface, transcribed the tables, and
 * wrote the tests with me in Claude Code. The credit says both, here and in
 * the repository README; change them together.
 *
 * A phone app, so no MacBook mockup anywhere, as on Flow Logistics. The
 * screens are the live app at https://sail-rock.vercel.app (SailRock commit
 * cb7986a) in a 390 by 844 viewport, in English; the app is written in
 * Polish and English and follows the language of the browser. The
 * clips are not screen recordings: each frame is a screenshot of the live
 * app inside a drawn phone, taken after one scripted step (a tap, a typed
 * character, a scroll increment), held for a set time, and encoded at
 * 30 fps. The grey dot marks where a tap lands. Time fields are filled in
 * one step, because the native time picker is not part of the app.
 *
 * Every number has its source in docs/copy-edit/log-sailrock.md. Nothing
 * about use was measured, so the Outcome row states what exists and what
 * was tested, and no more.
 */
const W = "/work/sailrock";
const S = `${W}/screens`;
const C = `${W}/clips`;

export const sailrock: CaseStudy = {
  slug: "sailrock",
  title: "SailRock",
  what: "A dive planner for the phone that reads the printed tables as a diver does: next greater depth, next longer time, no interpolation",
  lead:
    "I plan dives from paper: the PADI Recreational Dive Planner and the Bühlmann-Hahn ascent table. SailRock puts both on a phone and keeps their rules. I set the brief and directed the design; Claude, Anthropic's AI model, built it with me in Claude Code, on my own design system.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "PERSONAL PROJECT · DIVE PLANNING",
    headline: ["Dive tables", "on a phone"],
    subline: "A dive planner built on the paper tables I learned to plan with",
    stamp: "NO-DECOMPRESSION PLANNER · DECOMPRESSION PLANNER · NITROX · GAS · SLATE",
    credit: "Brief, rules and direction · Built with Claude · 2026",
    org: "Personal project",
    art: { src: `${W}/cover-art.webp`, portrait: true },
    shot: { src: `${W}/00-cover.png` },
  },
  meta: [
    { label: "Role", value: "Brief, planning rules, and design direction. Interface, code, table transcription, and tests made with Claude" },
    { label: "Made with", value: "Claude, Anthropic's AI model, in Claude Code" },
    { label: "Scope", value: "A planner for no-decompression dives on air, EANx32, and EANx36; a planner for decompression dives; a nitrox calculator; a gas plan; saved plans; a slate view. In Polish and English" },
    { label: "System", value: "Big Hat 6.1 underneath, components and semantic tokens only", href: "https://konstancja-tanjga.github.io/bighat-design-system/" },
    { label: "Live", value: "Running on Vercel, installable on a phone", href: "https://sail-rock.vercel.app" },
    { label: "Source", value: "Public, the whole history included", href: "https://github.com/Konstancja-Tanjga/SailRock" },
    { label: "Period", value: "14 to 16 November 2026" },
  ],
  chapters: [
    /* ---------------------------------------------------------------- 00 */
    {
      id: "brief",
      n: "00",
      heading: "In short",
      blocks: [
        {
          kind: "brief",
          rows: [
            {
              key: "What",
              value:
                "A dive planner for the phone, built on two printed tables: the PADI Recreational Dive Planner for no-decompression dives and the Bühlmann-Hahn ascent table for decompression dives.",
            },
            {
              key: "Problem",
              value:
                "Planning two dives from paper is a chain of lookups across three tables, each rounded by hand, and one slip carries into the next dive.",
            },
            {
              key: "My role",
              value:
                "The brief, the planning rules, and the design direction are mine. Claude built the interface on my design system, transcribed the tables, and wrote the tests.",
            },
            {
              key: "Decision 1",
              value:
                "The printed table is the authority. The planner reads the next greater depth and the next longer time, never interpolates, and shows the row it read.",
              shot: { src: `${W}/brief/decision-1.webp`, alt: "The stops for a dive to 40 m for 30 minutes, with the table row the planner read, 42 m for 30 minutes, under them", to: "#table" },
            },
            {
              key: "Decision 2",
              value: "The answer comes first: three figures set large, the margin, the maximum time, and the pressure group, with the table detail under them.",
              shot: { src: `${W}/brief/decision-2.webp`, alt: "A dive to 20 m for 28 minutes in cold water: one minute of margin, 29 minutes maximum, pressure group P", to: "#answer" },
            },
            {
              key: "Decision 3",
              value: "A plan ends on a slate: the whole day in large type, to copy by hand, because the phone stays in the dry bag.",
              shot: { src: `${W}/brief/decision-3.webp`, alt: "The slate view: depth, time, maximum time, safety stop, and pressure group for the first dive of the day", to: "#slate" },
            },
            {
              key: "Outcome",
              value:
                "Live on Vercel, source public. 79 tests, among them the nine worked examples published with the tables. No cell-by-cell check against the printed cards yet, and the app says so on first run.",
            },
            {
              key: "Period and team",
              value: "Three days, 14 to 16 November 2026. Two of us: Claude and I.",
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 01 */
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>A web app that installs on a phone and works without network. It plans <strong>no-decompression dives</strong> from the Recreational Dive Planner on air, EANx32, and EANx36, and <strong>decompression dives</strong> from the Bühlmann-Hahn table for waters up to 250 m above sea level. The interface is in Polish and in English, and follows the language of the browser.</p>",
        },
        {
          kind: "carousel",
          shape: "portrait",
          items: [
            { src: `${S}/02-no-deco-result.webp`, title: "A no-decompression dive", body: "Depth and time in, three figures out: one minute of margin, 29 minutes maximum, pressure group P." },
            { src: `${S}/03-repetitive-dive.webp`, title: "A repetitive dive", body: "The surface interval as two clock times, then the residual nitrogen time and the adjusted limit." },
            { src: `${S}/04-gas.webp`, title: "The gas plan", body: "Pressure used, pressure left, and the minimum gas for two divers to surface on one cylinder." },
            { src: `${S}/08-deco-result.webp`, title: "A decompression dive", body: "The second tab reads the Bühlmann-Hahn table and marks a plan that exceeds the diver's certification." },
            { src: `${S}/09-deco-stops.webp`, title: "The stops", body: "Each stop with its depth and minutes, and the table row they came from." },
            { src: `${S}/10-nitrox.webp`, title: "Nitrox", body: "Maximum depth at 1.4 and 1.6 ata, oxygen partial pressure, and equivalent air depth for a mix." },
            { src: `${S}/06-saved-plans.webp`, title: "Cylinder and saved plans", body: "One cylinder and breathing rate for every dive; plans saved on the phone, by name." },
            { src: `${S}/07-slate.webp`, title: "The slate", body: "The day in large type, to copy by hand before the dive." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 02 */
    {
      id: "table",
      n: "02",
      heading: "The printed table is the authority",
      maxim: "A planner that disagrees with the table a diver trained on is a planner the diver cannot check.",
      standfirst: "The rules a diver applies to paper, applied by the app, and the model that lost to them.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Next greater depth, next longer time.</strong> A dive to 40 m for 30 minutes is read as 42 m for 30 minutes, and the screen names the row.",
            "<strong>No interpolation, no extension.</strong> A dive outside the table is refused with the reason and what to change; the app does not estimate one.",
            "<strong>A formula lost to the table.</strong> The first build computed stops from the Bühlmann ZH-L16C model with gradient factors. I compared its results with my paper table, two rows disagreed, and the model was set aside for the transcribed tables.",
            "<strong>Repetitive dives follow the printed procedure:</strong> repetitive group, surface interval, and time penalty for the Bühlmann-Hahn table; pressure group, surface-interval credit, and residual nitrogen time for the Recreational Dive Planner.",
          ],
        },
        {
          kind: "set",
          size: "phone",
          items: [
            { src: `${S}/08-deco-result.webp`, caption: "A dive to 40 m for 30 minutes: 29 minutes of decompression, 33 minutes to surface, repetitive group G. The second badge says the plan is beyond an Advanced Open Water certification." },
            { src: `${S}/09-deco-stops.webp`, caption: "The four stops, and under them the row the planner read: 42 m for 30 minutes, the next greater depth in the table." },
          ],
        },
        {
          kind: "fold",
          title: "The rule in the source",
          hint: "eight lines",
          blocks: [
            {
              kind: "code",
              code: [
                "export function depthTable(depth: number): DepthTable {",
                "  if (!(depth > 0)) throw new OutOfTableError('Głębokość musi być większa od zera')",
                "  const found = TABLE.find((t) => t.depth >= depth)",
                "  if (!found) {",
                "    throw new OutOfTableError(`Głębokość ${depth} m jest poza zakresem tabeli (maks. 63 m)`)",
                "  }",
                "  return found",
                "}",
              ].join("\n"),
              caption: "The lookup takes the first table depth equal to or greater than the one asked for, never a shallower one, and throws when the table has none.",
              source: {
                text: "SailRock, src/tables/tablePlanner.ts at commit 3f4b322",
                href: "https://github.com/Konstancja-Tanjga/SailRock/blob/3f4b3221a563d2ec9b7a6fbf0546466039ee1fdf/src/tables/tablePlanner.ts#L33-L40",
              },
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 03 */
    {
      id: "answer",
      n: "03",
      heading: "The answer first",
      maxim: "A diver asks a table one question: how long can I stay?",
      standfirst: "What a result shows at the top, and what it keeps for the reader who checks.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Three figures, set large.</strong> Margin to the limit, maximum bottom time, and pressure group for a no-decompression dive; decompression time, ascent time, and repetitive group for a decompression dive.",
            "<strong>The table detail sits under them,</strong> at reading size: the depth the table used, the limit, the residual nitrogen time. The reader who checks the app against paper finds every intermediate value.",
            "<strong>A warning is a sentence, not a colour.</strong> A required safety stop, a plan at the limit, and gas below the reserve each carry their words.",
            "<strong>A refused plan says what to change.</strong> For a repetitive dive the message shows the sum: 90 minutes and a 44-minute penalty make 134, and the table ends at 90.",
          ],
        },
        {
          kind: "set",
          size: "phone",
          items: [
            { src: `${S}/02-no-deco-result.webp`, caption: "Cold water moves the plan 4 m deeper, so 20 m is read as 25 m: one minute of margin, and the badge says the safety stop is required." },
            { src: `${S}/03-repetitive-dive.webp`, caption: "The second dive of the day: two minutes of margin, 22 minutes maximum, and its gas, 85 bar used and 115 bar left, with a badge that says the reserve holds." },
            { src: `${S}/11-dark.webp`, caption: "The same result in the dark theme, which follows the phone's setting." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 04 */
    {
      id: "flows",
      n: "04",
      heading: "Three flows, played through",
      standfirst: "The live app inside a drawn phone. The grey dot marks each tap.",
      blocks: [
        {
          kind: "tabs",
          label: "Three flows",
          items: [
            {
              label: "A day of two dives",
              blocks: [
                {
                  kind: "beside",
                  html:
                    "<p><strong>Two no-decompression dives and the slate, from an empty screen.</strong> The result appears as the last digit is typed; the app has no Calculate button.</p><ul><li><strong>Depth and time.</strong> 20 m for 28 minutes on air.</li><li><strong>Cold water.</strong> One switch plans the dive 4 m deeper, as the table instructs, and the margin drops to one minute.</li><li><strong>The second dive.</strong> The surface interval is two clock times, 13:00 and 14:00, as a logbook records them.</li><li><strong>The adjusted limit.</strong> 18 m in cold water after an hour: 22 minutes at most, of which the plan uses 20.</li><li><strong>The slate.</strong> Both dives in large type, with the pressure at which to start the ascent.</li></ul>",
                  video: { src: `${C}/plan-a-day.mp4`, poster: `${C}/plan-a-day.webp`, title: "Two no-decompression dives planned, then the slate opened", mockup: true },
                  caption: "A day of two dives in the live app, 27 seconds, looping.",
                },
              ],
            },
            {
              label: "A decompression dive",
              blocks: [
                {
                  kind: "beside",
                  html:
                    "<p><strong>A dive beyond the no-decompression limit, read from the Bühlmann-Hahn table.</strong> The same two fields, on the second tab.</p><ul><li><strong>40 m for 30 minutes.</strong> The planner reads the row for 42 m.</li><li><strong>The stops.</strong> Four of them, each with its depth and its minutes, and under them the row of the table they came from.</li><li><strong>Two warnings in words.</strong> A decompression dive, and beyond an Advanced Open Water certification.</li><li><strong>The gas does not fit.</strong> A 15-litre cylinder is 73 bar short, and the plan says so before anyone is under water.</li></ul>",
                  video: { src: `${C}/deco-from-the-table.mp4`, poster: `${C}/deco-from-the-table.webp`, title: "A decompression dive read from the table, then its stops and its gas", mockup: true },
                  caption: "A decompression dive in the live app, 15 seconds, looping.",
                },
              ],
            },
            {
              label: "A nitrox check",
              blocks: [
                {
                  kind: "beside",
                  html:
                    "<p><strong>Is this mix safe at this depth?</strong> The third tab answers with a sentence and the numbers behind it.</p><ul><li><strong>EANx32 at 30 m.</strong> Within the working limit of 1.4 ata.</li><li><strong>EANx36 at 30 m.</strong> Over the working limit, and the badge changes its words with its colour.</li><li><strong>The same convention as the card:</strong> 10 m of water is one atmosphere, so the figures match the printed nitrox tables.</li></ul>",
                  video: { src: `${C}/nitrox-check.mp4`, poster: `${C}/nitrox-check.webp`, title: "Two nitrox mixes checked at 30 m", mockup: true },
                  caption: "A nitrox check in the live app, 11 seconds, looping.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 05 */
    {
      id: "slate",
      n: "05",
      heading: "The plan ends on a slate",
      maxim: "A phone stays in the dry bag, so the plan has to leave it.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>One screen for the whole day,</strong> in the largest type the app has: depth and time, the maximum, the stops, the group, and the pressure at which to start the ascent.",
            "<strong>Written to be copied by hand</strong> onto a dive slate before the dive, which is how a table plan has always gone under water.",
            "<strong>The interval between dives is in the label,</strong> so the second entry cannot be read without the condition it depends on.",
          ],
        },
        {
          kind: "set",
          size: "phone",
          items: [
            { src: `${S}/07-slate.webp`, caption: "The slate for the day of two dives. Each entry ends with the pressure at which to start the ascent." },
            { src: `${S}/06-saved-plans.webp`, caption: "Under the plan: the cylinder and breathing rates every dive uses, and plans saved on the phone by name." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 06 */
    {
      id: "checked",
      n: "06",
      heading: "Checked against the paper",
      maxim: "A transcribed table is a claim until something checks it.",
      standfirst: "Where the numbers came from, how they were checked, and what is still unchecked.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "79", label: "tests, run before every deploy" },
            { value: "9", label: "worked examples published with the tables, all reproduced" },
            { value: "351", label: "surface-interval ranges, read from three cards and compared" },
            { value: "19", label: "depths in the Bühlmann-Hahn table, 9 m to 63 m" },
          ],
        },
        {
          kind: "points",
          items: [
            "<strong>The tables were transcribed from published scans,</strong> enlarged section by section, not typed from memory.",
            "<strong>The surface-interval table was read three times,</strong> from the air, EANx32, and EANx36 cards, and the three readings agree in every range.",
            "<strong>The worked examples are tests.</strong> Four examples for the Bühlmann-Hahn table and five problems for the Recreational Dive Planner return the published answers.",
            "<strong>A failing test blocks the deploy.</strong> The build on Vercel runs the tests first.",
            "<strong>What is not done:</strong> a cell-by-cell comparison with the printed cards. The app says so the first time it opens and in a note under every plan.",
          ],
        },
        {
          kind: "shot",
          width: "column",
          src: `${S}/01-first-run.webp`,
          caption: "The first screen a new user sees: the tables were transcribed from scans, so compare each plan with the paper table.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 07 */
    {
      id: "system",
      n: "07",
      heading: "What it asked of the design system",
      maxim: "The first phone product on Big Hat found what a desktop system had not needed.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Every screen is Big Hat:</strong> its components and its semantic tokens, with no second styling layer and no colour of the app's own.",
            "<strong>Six gaps, each with what was hand-rolled in its place:</strong> a figure set large, a number field with plus and minus buttons, a toast that carries an action, an inline caution, layout help for a form with its result, and three tokens.",
            "<strong>The gaps are written up for the system's gaps file,</strong> in its own format, with a plan of seven steps to close them.",
            "<strong>One of them was a bug in waiting.</strong> The hand-rolled undo kept a stale copy of the plan while it was edited further; a component would have been right once.",
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 08 */
    {
      id: "credits",
      n: "08",
      heading: "How it was made, and by whom",
      maxim: "Made by two of us, and this page says which part is whose.",
      blocks: [
        {
          kind: "flow",
          stages: [
            { title: "The brief", body: "Mine: a diver with paper tables wants them on a phone, for no-decompression and decompression dives, with nitrox and gas." },
            { title: "The rules", body: "Mine: the printed table decides, the ascent rate is the table's, the app plans within a certification and says when a plan leaves it." },
            { title: "The build", body: "Claude's, with me: the transcription, the planners, the tests, and the interface on Big Hat, a commit for every milestone." },
            { title: "The review", body: "Shared: I compared results with my paper tables and asked for changes; Claude reviewed the interface on a phone-sized screen and fixed what it found." },
          ],
          note: "Eight commits in three days, all public.",
        },
        {
          kind: "points",
          items: [
            "<strong>The films on this page were made the same way:</strong> scripted steps in the live app, one screenshot a step, encoded at 30 frames a second.",
            "<strong>The repository README carries the same credit</strong> as this page.",
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 09 */
    {
      id: "next",
      n: "09",
      heading: "What I would do next",
      blocks: [
        {
          kind: "joint",
          question: "What does the app still owe a diver?",
          answers: [
            "A check of every transcribed cell against the printed cards, so the first-run warning can go.",
            "Plus and minus buttons on depth and time, so the keyboard stops covering the result.",
            "The Bühlmann-Hahn tables for lakes above 250 m.",
          ],
        },
      ],
    },
  ],
};
