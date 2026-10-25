import type { CaseStudy } from "./types";

/**
 * The one wall on this site whose user could not be interviewed.
 *
 * It sits in `practice` rather than `product` on purpose. Nothing shipped to a
 * customer, so it is not a product; but it is a complete run of the method
 * (research to tokens to guidelines to a working build) on a brief absurd
 * enough that every shortcut shows. That is what `practice` is for.
 *
 * Cut in October 2026 from about 4700 words on the surface to about 2200,
 * then rebuilt the Analytics way to about 1800: the 00 page carries the three
 * decisions as pictures, the tool chain is a `sheet` in 07, the research
 * boards are `tabs` under 02 (the "hard brief" bullets of the old 01a are those
 * boards' hotspots), the journeys and the blueprint a `fold` under
 * 04, and the one dossier left is the two modes under 08, which is where the
 * product's use cases live. Chapters run 00 to 11. The panel files keep their
 * original numbers (ch02 to ch12) because the app repo generates them. The
 * two mode tiles keep the old chapter ids `dog-mode` and `human-mode`, and the
 * dossier opens and scrolls to a tile named in the hash, so those deep links
 * still land.
 *
 * Panels are the same 1800px exports the repo uses, in English. A phone app,
 * so no MacBook mockup anywhere.
 */

const W = "/work/tinder-for-chihuahua/wall";
const P = "/work/tinder-for-chihuahua/photos";

export const chihuahua: CaseStudy = {
  slug: "tinder-for-chihuahua",
  title: "Tinder for Chihuahua",
  what: "A swipe interface for a dichromat with 20/75 vision, whose pointing device is a nose",
  lead:
    "Karmel and Auri are chihuahuas, and they would like to meet someone who is neither mum nor son. So they got an app, on an old iPhone, and they operate it themselves. Speculative design taken at face value: assume a dog can work a touchscreen, and what is left is a hard accessibility brief with published numbers attached.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "PERSONAL PROJECT · SPECULATIVE DESIGN",
    headline: ["Tinder for", "Chihuahua"],
    subline: "Designing for a user who cannot read, tap, or be interviewed",
    stamp: "RESEARCH · GUIDELINES · TOKENS · PWA · TESTING",
    credit: "Design, research, and build · Personal project · 2026",
    art: { src: "/work/tinder-for-chihuahua/cover-art.webp", portrait: true },
    shot: { src: "/work/tinder-for-chihuahua/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Everything: research, guidelines, design system, and build" },
    { label: "Users", value: "Karmel, 5, and Auri, 12, his mother, plus one human matchmaker" },
    { label: "Scope", value: "Nine screens in two scales, 34 interface laws, a token pipeline, a working PWA" },
    { label: "Live", value: "PWA on GitHub Pages; source public with guidelines and tokens", href: "https://konstancja-tanjga.github.io/Tinder-for-chihuahua/" },
    { label: "Period", value: "September 2026" },
  ],
  chapters: [
    /* ---------------------------------------------------------------- 00 */
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
              value: "A swipe app two chihuahuas work with their noses on an old iPhone 13 Pro Max; a human reads the result.",
            },
            {
              key: "Problem",
              value: "A dichromat with 20/75 acuity who cannot read, whose pointer is a wet nose, and who cannot say when the design is wrong.",
            },
            {
              key: "My role",
              value: "Everything, alone: research, personas, journeys, blueprint, the Canine Interface Guidelines, the token pipeline, the PWA.",
            },
            {
              key: "Decision 1",
              value: "The app never matches dogs. Its output is a ranked preference signal for a human matchmaker, so v1 is one-sided and local.",
              shot: { src: `${W}/ch11-human-mode.png`, alt: "The four human-mode screens: the session result as a ranking, candidates, profiles, and setup", to: "#modes" },
            },
            {
              key: "Decision 2",
              value: "Design for Auri, test with Karmel: the older dog sets every threshold, the younger one stress-tests the input.",
              shot: { src: `${W}/ch03-personas.png`, alt: "The persona board: Karmel, Auri, and Konstancja side by side", to: "#personas" },
            },
            {
              key: "Decision 3",
              value: "CIG govern dog mode, HIG govern human mode, and every number in both is generated from one token file.",
              shot: { src: `${W}/ch09-cig.png`, alt: "The generated Canine Interface Guidelines panel, with the palette and the CIG and HIG split", to: "#cig" },
            },
            {
              key: "Outcome",
              value: "Live as a PWA, source public. The first measured session broke a law, not the build.",
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 01 */
    {
      id: "the-promise",
      n: "01",
      heading: "The promise",
      maxim:
        "A user who cannot be interviewed does not remove the need for requirements. It just removes the shortcut.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>My two chihuahuas gave me a brief: <strong>a kindred spirit who is not each other</strong>. I have designed for enterprise users I could not reach; this is the same problem, excuses removed.</p>",
        },
        {
          kind: "thesis",
          label: "The thesis",
          text:
            "One screen, two users. The dog swipes and expresses a preference; the human reads it and decides about a meeting. A signal instead of a match is why this is buildable: every dog-dating app in the benchmark died of the two-sided market.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 02 */
    {
      id: "the-user",
      n: "02",
      heading: "Who it is for",
      standfirst:
        "No interviews, no analytics, no way to ask, so the requirements came from the literature on canine vision and motor behaviour, one rule throughout: every finding arrives with a design consequence. Sources in chapter 11.",
      blocks: [
        {
          kind: "tabs",
          label: "Ten findings, three boards",
          items: [
            {
              label: "What the dog sees",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/ch02-research-see.png`,
                  hotspots: [
                    { x: 48, y: 29, text: "Two hues, the entire palette; no red, no green." },
                    { x: 48, y: 43, text: "20/75 against 20/20: a factor of 3.75 on everything." },
                    { x: 48, y: 57, text: "The finding that named the handset, and the wrong conclusion I drew; chapter 09." },
                    { x: 48, y: 71, text: "The one claim with no source: an age effect, direction known, size not." },
                  ],
                  caption: "Findings 01 to 03 and 10: the palette, the scale, the motion budget. The numbers the app compiles against.",
                },
              ],
            },
            {
              label: "How a nose touches",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/ch02-research-touch.png`,
                  hotspots: [
                    { x: 48, y: 50, text: "A drag, not a tap: the most consequential finding in the set." },
                  ],
                  caption: "Findings 04 and 05: a wet patch, not a point. The 1500 ms lock and undo as a core function come from here.",
                },
              ],
            },
            {
              label: "What he works for",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/ch02-research-want.png`,
                  caption: "Findings 06 to 09: attention and reward. The screen announces the reward; a hand gives it. A swipe is a preference, never a match.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 03 */
    {
      id: "personas",
      n: "03",
      heading: "Two dogs, two thresholds",
      standfirst:
        "One persona called “the dog” would have averaged two thresholds. Same species, same dichromacy, different contrast floor: that difference is the entire persona.",
      blocks: [
        {
          kind: "personas",
          items: [
            {
              n: "01",
              name: "Karmel",
              shot: { src: `${P}/karmel-bieg.jpg` },
              badge: "PRIMARY SWIPER · STRESS TEST FOR INPUT",
              quote: "He touched it and nothing happened.",
              context: "Five, male. Dichromat, acuity about 20/75.",
              goals: ["Novelty, a treat, your attention", "Someone who is not his mother"],
              breaks: "The messiest, longest nose drags in the house.",
              must: "Tolerate sloppy input; if his swipe registers, any will.",
              job: "SWIPE",
            },
            {
              n: "02",
              name: "Auri",
              shot: { src: `${P}/auri-bieg.jpg` },
              badge: "THE USER WITH REAL VALUE AT STAKE",
              quote: "Someone to love who is not her son.",
              context: "Twelve, Karmel's mother. An ageing lens, less contrast sensitivity.",
              goals: ["Routine, quiet, a person nearby", "Something to think about"],
              breaks: "Slower to decide; fewer cards per session.",
              must: "Sets the floor: contrast, target size, session length.",
              job: "SET THE FLOOR",
            },
            {
              n: "03",
              name: "Konstancja",
              badge: "OWNER · MATCHMAKER",
              quote: "While the dog works, she rewards. She does not tap.",
              context: "The only one who can act on the result.",
              goals: ["Two less bored dogs, one real meeting", "A result legible at a glance"],
              breaks: "Setup in minutes, or no session.",
              must: "Hands free; the decision stays hers.",
              job: "INTERPRET",
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 04 */
    {
      id: "service",
      n: "04",
      heading: "The service",
      standfirst:
        "The most important moment in the loop is the one the software is absent for: the treat comes from a hand. Two journeys and a blueprint set the numbers; the risk that mattered most is below.",
      blocks: [
        {
          kind: "spec",
          caption: "One risk from the blueprint's risk row, three decisions.",
          rows: [
            { key: "Risk", value: "A wet nose registers one swipe as three" },
            { key: "Answer 1", value: "The centroid of the contact patch counts; the number of touch points does not" },
            { key: "Answer 2", value: "40 px of travel before anything counts as intent" },
            { key: "Answer 3", value: "Input refused for 1500 ms afterwards; undo a core function, not a courtesy" },
          ],
        },
        {
          kind: "fold",
          title: "Two journeys and the service blueprint",
          hint: "Open: three boards",
          blocks: [
            {
              kind: "shot",
              width: "wall",
              src: `${W}/ch04-journey-sesja-psa.png`,
              caption: "The dog's session: eleven steps in swimlanes by where each happens. Four happen nowhere near the application.",
            },
            {
              kind: "shot",
              width: "wall",
              src: `${W}/ch05-journey-swatka.png`,
              caption: "The matchmaker: five steps from putting the phone down to a meeting in the park. One side swipes, the other is accountable.",
            },
            {
              kind: "shot",
              width: "wall",
              src: `${W}/ch06-blueprint.png`,
              caption: "The blueprint: six phases across, five lanes down. The support layer names the data and the hardware; the risk layer names the answer.",
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 05 */
    {
      id: "benchmark",
      n: "05",
      heading: "Benchmark",
      standfirst:
        "The card deck has run its whole life cycle in dating and in recruitment. Their failures are free.",
      blocks: [
        {
          kind: "spec",
          caption: "Two families of dog apps, and the empty space between them.",
          rows: [
            { key: "Social, for dogs", value: "Pawmates, Tindog, BarkHappy: the human operates, the dog is profile content. Playdates between owners" },
            { key: "Toys, for dogs", value: "App for Dog, BetterPawPlay, DOGLi: the dog operates, phone flat. Nothing outlives the session" },
            { key: "This project", value: "The dog operates, the human interprets. A ranking that becomes a real meeting" },
          ],
        },
        {
          kind: "points",
          items: [
            "<strong>App for Dog sells “big, full-screen buttons, so a curious nose can't miss them”.</strong> The pattern I derived from gesture research, already validated commercially.",
            "<strong>Hinge and Bumble moved from volume to fewer, considered signals.</strong> Hence a deck ceiling of 6 to 12 cards, and no “maybe later” pile: it relocates the decision, it saves no work.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${W}/ch07-benchmark.png`,
          folded: true,
          hotspots: [
            { x: 60, y: 23, text: "The human operates; the dog is profile content, not a user." },
            { x: 20, y: 28, text: "The dog operates, nose or paw, and produces nothing that outlives the session." },
            { x: 30, y: 41, text: "The big, full-screen button I had derived from gesture research, already validated commercially." },
            { x: 20, y: 62, text: "Undo is core here, not premium: a wet nose will misfire regularly." },
            { x: 60, y: 72, text: "Fewer, better, more considered signals: hence a deck ceiling of 6 to 12." },
            { x: 50, y: 87, text: "A swipe onto a “maybe later” pile saves no work. It relocates the decision." },
          ],
          caption: "The benchmark panel: two families, and what dating and recruitment already paid to find out.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 06 */
    {
      id: "directions",
      n: "06",
      heading: "Three visual directions",
      standfirst:
        "The same three screens in each column, so the comparison is between directions, not screens. A direction with no named weakness has not been evaluated, only preferred.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${W}/ch08-kierunki.png`,
          caption: "Three directions, each with an argument for and against; the rejected two are a record of a decision. The winner's weakness: in human mode the same language is shouting, four-inch numerals for a subtle ranking, so human mode needed its own scale.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 07 */
    {
      id: "cig",
      n: "07",
      heading: "Canine Interface Guidelines",
      maxim:
        "In dog mode the Human Interface Guidelines are not insufficient. They are harmful.",
      standfirst:
        "34 laws generated from one token file, so not one number in the document is typed by hand. First, how the work was done: one value through the tools it passed. No Figma in the chain, which is the interesting part and the limitation.",
      blocks: [
        {
          kind: "sheet",
          sheet: {
            tools: [
              { name: "Claude Design", mark: "claude", what: "three directions, one canvas" },
              { name: "tokens.json", mark: "", glyph: "{ }", what: "every value with its rationale" },
              { name: "Generator", mark: "", glyph: "gen", what: "guidelines, panels, constants" },
              { name: "Vite", mark: "", glyph: "V", what: "TypeScript, no framework" },
              { name: "ffmpeg", mark: "", glyph: "ff", what: "the session clip" },
              { name: "GitHub", mark: "github", what: "Actions to Pages" },
            ],
            stations: [
              { tool: "Claude Design", mark: "claude", file: "three directions", title: "Three directions on one canvas", body: "The same three screens per column; the winner's weakness named.", image: { src: `${W}/ch08-kierunki.png`, alt: "Three visual directions on the same three screens, as artboards on one canvas" } },
              { tool: "Generator", mark: "", file: "design/tokens.json", title: "One token file, every value with its rationale", body: "Generates the guidelines in EN and PL, the panels, the app's CSS and constants.", image: { src: `${W}/ch09-cig.png`, alt: "The generated Canine Interface Guidelines panel: palette, the CIG and HIG split, six groups of laws" } },
              { drawing: "merge", lines: ["No undefined", "No unsubstituted placeholder", "No Polish in the English output"], tool: "Generator", mark: "", file: "build guard", title: "Refuses to emit", body: "47 of 53 lookups once published “undefined” and exited green. Hence the guard." },
              { tool: "Vite", mark: "", file: "TypeScript", title: "The app, one-sided and local", body: "No framework, no backend, no accounts; constants from the same file.", image: { src: `${W}/ch10-dog-mode.png`, alt: "The five dog-mode screens of the app, D1 to D5" } },
              { tool: "GitHub", mark: "github", file: "Actions, Pages", title: "Live as a PWA", body: "HTTPS on GitHub Pages makes it installable. Source public.", image: { src: "/work/tinder-for-chihuahua/cover-art.webp", alt: "The app installed on the phone" } },
            ],
            block: [
              ["Sheet", "How I worked on Tinder for Chihuahua"],
              ["Drawn for", "One value, from the canvas to the installed PWA"],
              ["Governed by", "34 Canine Interface Guidelines and the build guard"],
              ["Repository", "GitHub, public"],
            ],
          },
        },
        {
          kind: "passage",
          html:
            "<p><strong>The HIG describe a specific animal</strong>: a fingertip, a 44-point target, red as danger, text as content. Every one is false for this user, so adapting the HIG is fan fiction. Human mode keeps them, with two recorded departures: semantic colour and typography.</p>",
        },
        {
          kind: "fold",
          title: "The palette, three of the thirty-four laws, and the generated panel",
          hint: "Open: four swatches, a table, one board",
          blocks: [
        {
              kind: "palette",
              standfirst: "Two hues carry every meaning; the other two are forbidden from carrying any.",
              items: [
                { hex: "#0033FF", name: "Blue", role: "Signal. One of two colours allowed to mean anything.", note: "Near the cone peak at 429 to 435 nm." },
                { hex: "#D6F000", name: "Acid", role: "Signal. Reward, progress, yes.", note: "Near the cone peak at 555 nm; it replaced a warmer yellow for that reason." },
                { hex: "#000000", name: "Ink", role: "Ground. Never a signal." },
                { hex: "#FFFFFF", name: "White", role: "Figure. Shape and edge, never meaning." },
              ],
              caption: "No red, no green: a red warning would be a warning nobody receives.",
            },
            {
              kind: "spec",
              caption: "Three of the thirty-four.",
              rows: [
                { key: "CIG-2.1", value: "Meaning is carried by blue and acid only. Black and white are ground and figure, never signal" },
                { key: "CIG-2.3", value: "Dog-scale display type is 112 px, names 80 px, values 44 px. Minimum target: 214 × 300 px" },
                { key: "CIG-5.1", value: "A deck is 6 to 12 cards. A rising decision time is the signal to shorten it, not to add cards" },
              ],
            },
            {
              kind: "shot",
              width: "wall",
              src: `${W}/ch09-cig.png`,
              caption: "The laws, their groups, and the split of responsibility between CIG and HIG. Generated, so the numbers on it cannot disagree with the app.",
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 08 */
    {
      id: "modes",
      n: "08",
      heading: "Dog mode and human mode",
      standfirst:
        "One product, two scales, and the gesture between them deliberately hard to perform. One tile per mode: the session recorded, the screens, the rules.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "dog-mode",
              n: "01",
              title: "Dog mode",
              maxim: "Two targets, each 214 px wide and the full height of the display. Nothing to miss.",
              standfirst: "Goal: register a dog's preference from one horizontal drag, and reward it.",
              cover: { src: `${W}/ch10-dog-mode.png` },
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  width: "column",
                  src: "/work/tinder-for-chihuahua/showcase-sesja.mp4",
                  poster: "/work/tinder-for-chihuahua/showcase-poster.png",
                  title: "One full session in dog mode, recorded on the phone",
                  caption: "One whole session: warm-up, six candidate cards, the end screen with the session log.",
                },
                {
                  kind: "points",
                  items: [
                    "<strong>Five screens, one gesture.</strong> Choose the dog, warm up, the card, the reward cue, the end. Tap, long-press, double-tap, pinch, and edge-swipe forbidden.",
                    "<strong>One carve-out, on the warm-up screen.</strong> The whole display is one target and a tap counts, because that screen exists to reward any contact at all.",
                  ],
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/ch10-dog-mode.png`,
                  caption: "D1 to D5 at dog scale: two hues, flat fills, square corners, type sized by the acuity factor. In Polish, because the human half of the audience is.",
                },
              ],
            },
            {
              id: "human-mode",
              n: "02",
              title: "Human mode",
              maxim: "The door between the modes is reachable by a human and unreachable by a nose.",
              standfirst: "Goal: read the ranking as a preference signal, not a match, and decide about a meeting.",
              cover: { src: `${W}/ch11-human-mode.png` },
              blocks: [
                {
                  kind: "points",
                  items: [
                    "<strong>Same handset, a different register.</strong> 26 px statistics instead of 112 px display type, 44 px targets instead of 214 px zones, real density, prose. HIG, because a person is using it.",
                    "<strong>The door cannot be a button.</strong> A button a person can find is one a dog will eventually stand on. The door is a two-finger gesture with a wide spread, on D5 only; no nose produces two contact points that far apart.",
                    "<strong>H1 carries the sentence the product hangs on:</strong> a preference signal, not a match. The likeliest failure is a human over-reading the ranking, so the screen says so where it cannot be missed.",
                  ],
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/ch11-human-mode.png`,
                  caption: "H1 to H4 at human scale: the ranking, the candidates, decision latency across the session, and setup with the per-dog calibration measured on D2.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 09 */
    {
      id: "testing",
      n: "09",
      heading: "Testing",
      standfirst: "The first measurement did not catch the build failing. It caught a law being wrong.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>The session log read FPS 60, against a law demanding 120 Hz “or the screen flickers to the dog”.</strong> A failure for an hour; then not. The law conflated two things.",
            "<strong>Flicker is luminance modulation; on an OLED, the dimming, not the refresh.</strong> This phone dims at 480 Hz against a canine threshold of 70 to 80 Hz. No flicker for the dog.",
            "<strong>60 was not the hardware.</strong> iOS Safari caps page rendering near 60 fps by default, ProMotion or not; what 60 costs is motion continuity.",
            "<strong>One law became two.</strong> Flicker, CIG-1.3, satisfied by the dimming. Frame rate, CIG-2.5: measure the rate the page gets. The flicker risk left is the lamp above the dog.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${W}/ch12-test.png`,
          folded: true,
          caption: "The test ladder, state of play rather than plan, with rung 2 failed on refresh rate.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 10 */
    {
      id: "what-it-cost",
      n: "10",
      heading: "What it cost",
      standfirst: "A case study with no errors in it is a case study written afterwards.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Forty-seven values were publishing the word “undefined”.</strong> 47 of 53 token lookups emitted <code>undefined</code> into the guidelines and exited green. Hence the build guard.",
            "<strong>I overclaimed and walked it back.</strong> “Three departures from the HIG” was two. “29 laws” had omitted five. “Everything derives from ×4”: the factor is 3.75.",
            "<strong>One of my laws described the wrong variable</strong> and survived being written, designed for, and built. I went looking only because the number disagreed with me.",
          ],
        },
        {
          kind: "joint",
          question: "What is still to be measured?",
          answers: [
            "<strong>Whether a dog drags at all</strong>, rather than pushes, paws, or licks.",
            "<strong>Whether one swipe registers once.</strong> 40 px and 1500 ms are estimates.",
            "<strong>Auri's contrast threshold.</strong> “Design for Auri” rests on the direction of an age effect, not a number.",
          ],
        },
        {
          kind: "fold",
          title: "The whole deck: thirteen candidates",
          hint: "Open: thirteen photographs",
          blocks: [
            {
              kind: "set",
              size: "square",
              items: [
                { src: `${P}/deck-auris.jpg`, caption: "Fasola" },
                { src: `${P}/deck-aurora.jpg`, caption: "Malina" },
                { src: `${P}/deck-baltic.jpg`, caption: "Rogal" },
                { src: `${P}/deck-ciastek.jpg`, caption: "Piegus" },
                { src: `${P}/deck-fistaszka.jpg`, caption: "Bąbel" },
                { src: `${P}/deck-kwiatuch.jpg`, caption: "Szpilka" },
                { src: `${P}/deck-lola.jpg`, caption: "Kluska" },
                { src: `${P}/deck-mafinka.jpg`, caption: "Truskawka" },
                { src: `${P}/deck-misiek.jpg`, caption: "Pączek" },
                { src: `${P}/deck-okruszek.jpg`, caption: "Bajgiel" },
                { src: `${P}/deck-orotava.jpg`, caption: "Tofik" },
                { src: `${P}/deck-pindzia.jpg`, caption: "Sernik" },
                { src: `${P}/deck-skowronek.jpg`, caption: "Kajtek" },
              ],
              caption: "Real chihuahuas under assumed names, so a deck never reads as Karmel's own family.",
            },
          ],
        },
        {
          kind: "shot",
          width: "column",
          inset: true,
          src: `${P}/oboje.jpg`,
          caption: "Auri and Karmel, waiting for the next session. She is his mother, the one match the app exists to rule out. Karmel has been through the deck; he has preferences, and he is not telling me why.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 11 */
    {
      id: "sources",
      n: "11",
      heading: "Sources",
      standfirst: "The requirements came from published research, not from my taste. That claim is worthless unless it is checkable.",
      blocks: [
        {
          kind: "points",
          fold: "Canine vision: the numbers behind the palette, the scale, the card",
          items: [
            "Neitz, Geist, and Jacobs, <em>Color vision in the dog</em>, Visual Neuroscience, 1989: the cone peaks at 429 and 555 nm that fix the palette to two hues.",
            "<em>In vivo electroretinographic differentiation of rod, short- and long/medium-wavelength cone responses in dogs</em>: the same result confirmed by ERG.",
            "<em>Are dogs red–green colour blind?</em>, Royal Society Open Science.",
            "<em>What do dogs see? A review of vision in dogs and implications for cognition research</em>, Psychonomic Bulletin &amp; Review: acuity 20/75 and the 70 to 80 Hz flicker threshold.",
            "Coile et al., 1989: canine critical flicker fusion at 80 Hz, summarised in <a href=\"https://www.sciencedirect.com/topics/immunology-and-microbiology/critical-flicker-fusion\">this overview of critical flicker fusion</a>.",
            "<em>On the use of touchscreen-based behavioural and cognitive research with dogs</em>: gesture morphology, and the recommendation of a blue and yellow pair.",
            "<em>How dogs scan familiar and inverted faces: an eye movement study</em>, Animal Cognition: fixation on the eyes, which is why the card frames a muzzle.",
            "<em>Dogs recognize familiar faces from images</em>; <em>2D or Not 2D? An fMRI study of how dogs visually process objects</em>; <em>Familiarity with images affects how dogs process life-size video projections of humans</em>: whether a dog on a screen is a dog at all.",
          ],
        },
        {
          kind: "points",
          fold: "Ageing: why this app has a point",
          items: [
            "<em>Brain training for old dogs</em>, Messerli Research Institute, Vetmeduni Vienna: the cognitive-enrichment frame the product&rsquo;s value rests on.",
            "<em>Utilising dog-computer interactions to provide mental stimulation in dogs especially during ageing</em>.",
            "<em>Aging effects on discrimination learning, logical reasoning and memory in pet dogs</em>, GeroScience.",
          ],
        },
        {
          kind: "points",
          fold: "Screens, flicker, and the platform: the chapter 09 correction",
          items: [
            "<a href=\"https://www.oled-info.com/pulse-width-modulation-pwm-oled-displays\">PWM dimming in OLED displays</a>: why nearly every OLED phone dims at 240 or 480 Hz, and why that is the frequency that matters for flicker.",
            "<a href=\"https://www.dxomark.com/apple-iphone-13-pro-max-display-test-retested/\">DXOMARK, iPhone 13 Pro Max display test</a>: 480.19 Hz measured at 97.6% modulation depth, at every brightness, with no DC dimming.",
            "<a href=\"https://www.dxomark.com/flicker-the-display-affliction/\">Flicker, the display affliction</a>: flicker as luminance modulation rather than as frame rate.",
            "<a href=\"https://www.macrumors.com/how-to/enable-smoother-120hz-browsing-in-safari/\">Safari&rsquo;s 60 fps default and the flag that lifts it</a>, and <a href=\"https://bugs.webkit.org/show_bug.cgi?id=173434\">WebKit bug 173434 on 120 Hz requestAnimationFrame</a>: why the log read 60.",
            "<a href=\"https://www.sciencedirect.com/science/article/abs/pii/S016815912500190X\">Behavioural differences of shelter dogs under fluorescent versus LED lighting</a>: why the remaining flicker risk sits in the room&rsquo;s lighting.",
          ],
        },
        {
          kind: "points",
          fold: "The benchmark products",
          items: [
            "App for Dog: the source of &ldquo;big, full-screen buttons, so a curious nose can&rsquo;t miss them&rdquo;. BetterPawPlay: eleven nose-and-paw games, tablet flat.",
            "<em>Training senior dogs to play games on touch screens</em>, PetMD.",
            "Pawmates and &ldquo;Tinder for dogs&rdquo;, PawTracks; <em>Man makes &ldquo;Tinder for dogs&rdquo; after his senior pup couldn&rsquo;t find playmates</em>, Newsweek: the founder story that is, more or less, this brief.",
            "<em>Dating apps are swiping left on the features that made them</em>: Hinge, Bumble, and &ldquo;fewer, better, more considered signals&rdquo;. <em>The Death of the Swipe</em>, urdesignmag.",
            "<em>Where have all the &ldquo;Tinders of the job market&rdquo; gone?</em>, ToTalent; <em>Why swipe UX for jobs works (better than you&rsquo;d think)</em>: the two halves of the &ldquo;maybe later&rdquo; pile argument.",
          ],
        },
      ],
    },
  ],
};
