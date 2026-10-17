import type { CaseStudy } from "./types";

/**
 * The one wall on this site whose user could not be interviewed.
 *
 * It sits in `practice` rather than `product` on purpose. Nothing shipped to a
 * customer, so it is not a product; but it is a complete run of the method
 * (research to tokens to guidelines to a working build) on a brief absurd
 * enough that every shortcut shows. That is what `practice` is for.
 *
 * Cut in October 2026 from about 4700 words on the surface to about 2200: a
 * reader gets the phases, the tools and the reasoning, and opens the rest.
 * Chapters run 00 to 11. The panel files keep their original numbers (ch02 to
 * ch12) because the app repo generates them. The two journeys and the
 * blueprint are three tiles of one dossier under 04, dog mode and human mode
 * two tiles under 08. The three old chapter ids survive as tile ids, and the
 * dossier opens and scrolls to a tile named in the hash, so the deep links
 * still land.
 *
 * Panels are the same 1800px exports the repo uses, in English. Every chapter
 * that carries one has it; nothing stands as a placeholder.
 */

export const chihuahua: CaseStudy = {
  slug: "tinder-for-chihuahua",
  title: "Tinder for Chihuahua",
  what: "A swipe interface for a dichromat with 20/75 vision, whose pointing device is a nose",
  lead:
    "Karmel and Auri are chihuahuas, and they would like to meet someone who is neither mum nor son. So they got an app, on an old iPhone, and they operate it themselves. Speculative design taken at face value: assume a dog can work a touchscreen, and what is left is not a joke but a hard accessibility brief with published numbers attached.",
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
              key: "Context",
              value:
                "A personal project: two chihuahuas, an old iPhone 13 Pro Max, and the speculative premise that a dog can operate a touchscreen.",
            },
            {
              key: "Problem",
              value:
                "A dichromat with 20/75 acuity who cannot read, whose pointer is a wet nose, and who cannot say when the design is wrong.",
            },
            {
              key: "My role and scope",
              value:
                "Everything: literature research, personas, journeys, blueprint, the Canine Interface Guidelines, the token pipeline, and the PWA.",
            },
            {
              key: "Decision 1",
              value:
                "The output is a ranked preference signal handed to a human matchmaker, never a match, so v1 is one-sided and local, with no backend.",
            },
            {
              key: "Decision 2",
              value: "Design for Auri, test with Karmel: the older dog sets every threshold, the younger one stress-tests the input.",
            },
            {
              key: "Decision 3",
              value:
                "CIG govern dog mode, HIG govern human mode, and every number in both is generated from one token file.",
            },
            {
              key: "Outcome",
              value:
                "Live as a PWA, source public. The first measured session broke a law rather than the build.",
            },
            {
              key: "Period and team",
              value: "September 2026. One person; the users are two dogs.",
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
            "<p>My two chihuahuas gave me a brief: <strong>a kindred spirit who is not each other</strong>. They now have an app, on an old iPhone 13 Pro Max, and they work it themselves.</p>",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/tinder-for-chihuahua/photos/karmel.jpg", caption: "Karmel, five. The one who will work a screen for a treat." },
            { src: "/work/tinder-for-chihuahua/photos/auri.jpg", caption: "Auri, twelve, his mother. The one who sets every threshold in the system." },
          ],
          caption: "The clients. Only one is reliably motivated.",
        },
        {
          kind: "thesis",
          label: "The thesis",
          text:
            "One screen, two users. The dog swipes and expresses a preference about what it sees. The human reads that preference and decides about a meeting. The app never matches dogs: its output is a ranked preference signal handed to a matchmaker, never a “match”.",
        },
        {
          kind: "points",
          items: [
            "<strong>That sentence is why this is buildable.</strong> Every dog-dating app in the benchmark died of the two-sided marketplace. A signal instead of a match makes v1 one-sided and local: no second user, no cold start.",
            "<strong>I have designed for enterprise users I could not reach.</strong> Same problem, excuses taken away.",
          ],
        },
      ],
    },

    /* --------------------------------------------------------------- 01a */
    {
      id: "hard-brief",
      n: "01a",
      heading: "Why this is a hard brief",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>No feedback channel.</strong> The user cannot say when the design is wrong, so every requirement comes from published research.",
            "<strong>Two hues carry all the meaning.</strong> A dichromat sees blue and yellow-green; red and green do not exist for him.",
            "<strong>A quarter of the acuity.</strong> 20/75 against 20/20, so everything is sized by a factor, not by eye.",
            "<strong>The pointer is a nose.</strong> Wet, multi-point, moving, and far bigger than a fingertip.",
            "<strong>Two users on one screen.</strong> The dog swipes, the human reads the ranking, and the door between the modes must open for one and not the other.",
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 02 */
    {
      id: "the-user",
      n: "02",
      heading: "Who it is for",
      maxim: "The user could not be interviewed. He was, however, extremely available for testing.",
      standfirst:
        "Ten findings from the literature on canine vision and motor behaviour, each paired with the requirement it forces.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>No interviews, no analytics, no way to ask, so <strong>the requirements came from published research</strong>, with one rule: every finding arrives with a design consequence. Sources in chapter 11.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch02-research.png",
          folded: true,
          hotspots: [
            { x: 48, y: 17, text: "Two hues, and that is the entire palette. Red and green do not exist for this user." },
            { x: 48, y: 25, text: "Everything roughly four times bigger: 20/75 against 20/20, a factor of 3.75." },
            { x: 48, y: 33, text: "The finding that named the handset, and the one I drew the wrong conclusion from. See chapter 09." },
            { x: 48, y: 41, text: "The native gesture is a drag, not a tap. The single most consequential finding in the set." },
            { x: 48, y: 83, text: "The one claim with no source behind it. Design for Auri rests on the direction of an age effect, not a measured number." },
          ],
          caption:
            "The research panel: ten findings and their requirements, the numbers the app compiles against.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 03 */
    {
      id: "personas",
      n: "03",
      heading: "Two dogs, two thresholds",
      maxim: "Same species, same dichromacy, different contrast floor. That difference is the entire persona.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>One persona called “the dog” would have <strong>quietly averaged two thresholds</strong>. Auri is twelve, and her contrast sensitivity has dropped. One rule follows.</p>",
        },
        { kind: "pull", text: "Design for Auri. Test with Karmel." },
        {
          kind: "personas",
          items: [
            {
              n: "01",
              name: "Karmel",
              shot: { src: "/work/tinder-for-chihuahua/photos/karmel-bieg.jpg" },
              badge: "PRIMARY SWIPER · THE STRESS TEST FOR INPUT",
              quote: "He touched it and nothing happened. Sound too quiet. Screen too far away.",
              context: "Five, male. Dichromat, acuity around 20/75.",
              goals: ["Novelty, a treat, and your attention", "Someone to love who is not his mother"],
              breaks: "Quick and agile: the messiest, longest, multi-point nose drags in the house.",
              must: "Tolerate sloppy input. If his swipe registers, anyone's will.",
              job: "SWIPE",
            },
            {
              n: "02",
              name: "Auri",
              shot: { src: "/work/tinder-for-chihuahua/photos/auri-bieg.jpg" },
              badge: "THE USER THIS APP HAS REAL VALUE FOR",
              quote: "Someone to love who is not her son.",
              context: "Twelve, Karmel's mother. Same baseline, less contrast sensitivity from an ageing lens.",
              goals: ["Routine, quiet, and a person nearby", "Cognitive stimulation in old age"],
              breaks: "Calmer, slower to decide, so she manages fewer cards per session.",
              must: "Set the floor: minimum contrast, minimum target size, maximum session length.",
              job: "SET THE FLOOR",
            },
            {
              n: "03",
              name: "Konstancja",
              badge: "OWNER · OPERATOR · MATCHMAKER",
              quote: "While the dog works, she rewards; she does not tap.",
              context: "The only participant who can act on the result.",
              goals: ["Two less bored dogs, and one real meeting", "A result legible at a glance"],
              breaks: "Setup in minutes, or the session does not happen.",
              must: "Keep her hands free. She is the interpreter, and the decision stays hers.",
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
      maxim: "The most important moment in the loop is the one the software is not present for.",
      standfirst:
        "Two journeys and a blueprint, one tile each. The numbers were decided in the blueprint's risk row.",
      blocks: [
        {
          kind: "spec",
          caption: "One risk from the blueprint, and the three decisions it produced.",
          rows: [
            { key: "Risk", value: "A wet nose registers one swipe as three" },
            { key: "Answer 1", value: "Take the centroid of the contact patch and ignore the number of touch points" },
            { key: "Answer 2", value: "Require 40 px of travel before anything counts as intent" },
            { key: "Answer 3", value: "Refuse input for 1500 ms afterwards, and make undo a core function, not a courtesy" },
          ],
        },
        {
          kind: "dossier",
          items: [
            {
              id: "journey-dog",
              n: "01",
              title: "The dog's session",
              maxim: "Eleven steps. Four happen nowhere near the application.",
              standfirst: "Goal: one session, from the phone going down to the treat, in swimlanes marked by where each step happens.",
              cover: { src: "/work/tinder-for-chihuahua/wall/ch04-journey-sesja-psa.png" },
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: "/work/tinder-for-chihuahua/wall/ch04-journey-sesja-psa.png",
                  caption: "Eleven steps. Four happen nowhere near the application, which is the most unusual property this product has.",
                },
              ],
            },
            {
              id: "journey-human",
              n: "02",
              title: "The matchmaker",
              maxim: "Double opt-in, rewritten: one side swipes, the other side is accountable.",
              standfirst: "Goal: make it structurally true that the app cannot arrange a meeting. It can only report a preference.",
              cover: { src: "/work/tinder-for-chihuahua/wall/ch05-journey-swatka.png" },
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: "/work/tinder-for-chihuahua/wall/ch05-journey-swatka.png",
                  caption: "Five steps, from putting the phone down to a meeting in the park.",
                },
              ],
            },
            {
              id: "blueprint",
              n: "03",
              title: "Service blueprint",
              maxim: "The journey says what happens. The blueprint says what has to hold underneath.",
              standfirst: "Goal: name the data, the hardware, and the risks under each phase, and answer each risk with a number.",
              cover: { src: "/work/tinder-for-chihuahua/wall/ch06-blueprint.png" },
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: "/work/tinder-for-chihuahua/wall/ch06-blueprint.png",
                  caption: "Six phases across, five lanes down. The support layer names the data and the hardware; the risk layer names the answer.",
                },
              ],
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
      maxim:
        "The card deck has already run its entire life cycle in dating and in recruitment. Their failures are free.",
      blocks: [
        {
          kind: "spec",
          caption: "Two families of dog apps, and the empty space between them.",
          rows: [
            { key: "Social, for dogs", value: "Pawmates, Tindog, BarkHappy: the human operates; the dog is profile content. Produces playdates between owners" },
            { key: "Toys, for dogs", value: "App for Dog, BetterPawPlay, DOGLi: the dog operates, phone flat. Produces nothing that outlives the session" },
            { key: "This project", value: "The dog operates, the human interprets. Produces a ranking a human turns into a real meeting" },
          ],
        },
        {
          kind: "points",
          items: [
            "<strong>App for Dog sells “big, full-screen buttons, so a curious nose can't miss them”.</strong> The pattern I had derived from gesture research, already validated commercially.",
            "<strong>Undo is premium in human apps and core here.</strong> A wet nose misfires regularly, so undo is large and immediate.",
            "<strong>Hinge and Bumble moved away from volume</strong> towards fewer, more considered signals. Hence a deck ceiling of 6 to 12 cards.",
          ],
        },
        {
          kind: "pull",
          text: "A swipe onto a “maybe later” pile saves no work. It relocates the decision.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch07-benchmark.png",
          folded: true,
          hotspots: [
            { x: 60, y: 23, text: "The human operates; the dog is profile content, not a user." },
            { x: 20, y: 28, text: "The dog operates, nose or paw, and produces nothing that outlives the session." },
            { x: 30, y: 41, text: "The big, full-screen button I had derived from gesture research, already validated commercially." },
            { x: 20, y: 62, text: "Undo is core here, not premium: a wet nose will misfire regularly." },
            { x: 60, y: 72, text: "Fewer, better, more considered signals: hence a deck ceiling of 6 to 12." },
            { x: 50, y: 87, text: "A swipe onto a “maybe later” pile saves no work. It relocates the decision." },
          ],
          caption: "The benchmark panel: the two families, and what dating and recruitment already paid to find out.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 06 */
    {
      id: "directions",
      n: "06",
      heading: "Three visual directions",
      maxim: "A direction with no named weakness has not been evaluated, only preferred.",
      standfirst:
        "The same three screens in each column, so the comparison is between directions, not screens.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch08-kierunki.png",
          caption:
            "Three directions on the same three screens, each with an argument for and against. The rejected two are a record of a decision, not material to build from.",
        },
        {
          kind: "thesis",
          label: "The winner's weakness, named",
          text:
            "In human mode the same language is shouting. Poster scale hands a matchmaker four-inch numerals to read a subtle ranking from, so human mode needed its own scale.",
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
        "34 laws generated from the token file, so not one number in the document is typed by hand.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>The HIG describe a specific animal.</strong> A fingertip, a 44-point target, red meaning danger, text carrying the content. Every one is false for this user, so adapting the HIG is fan fiction.",
            "<strong>CIG govern dog mode, HIG govern human mode.</strong> Human mode is an iOS surface for a person, with two recorded departures: semantic colour and typography.",
          ],
        },
        {
          kind: "stats",
          items: [
            { value: "34", label: "laws: 29 canine, 5 platform" },
            { value: "6", label: "groups, from palette to platform" },
            { value: "2", label: "recorded departures from the HIG" },
            { value: "0", label: "numbers in the document typed by hand" },
          ],
        },
        {
          kind: "palette",
          standfirst: "Two hues carry every piece of meaning. The other two are forbidden from carrying any.",
          items: [
            { hex: "#0033FF", name: "Blue", role: "Signal. One of two colours allowed to mean anything.", note: "Near the cone peak at 429 to 435 nm." },
            { hex: "#D6F000", name: "Acid", role: "Signal. Reward, progress, yes.", note: "Near the cone peak at 555 nm. It replaced a warmer yellow for this reason." },
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
          src: "/work/tinder-for-chihuahua/wall/ch09-cig.png",
          folded: true,
          caption:
            "The laws, their groups, and the split of responsibility between CIG and HIG. This panel is generated, so the numbers on it cannot disagree with the app.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 08 */
    {
      id: "modes",
      n: "08",
      heading: "Dog mode and human mode",
      maxim: "One product, two scales, and the gesture between them is deliberately hard to perform.",
      standfirst:
        "One tile per mode. Open a tile and the mode unfolds: the session as recorded, the screens, and the rules each one obeys.",
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
              cover: { src: "/work/tinder-for-chihuahua/wall/ch10-dog-mode.png" },
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  width: "column",
                  src: "/work/tinder-for-chihuahua/showcase-sesja.mp4",
                  poster: "/work/tinder-for-chihuahua/showcase-poster.png",
                  title: "One full session in dog mode, recorded on the phone",
                  caption:
                    "Warm-up, six candidate cards, and the end screen with the session log. One whole session.",
                },
                {
                  kind: "points",
                  items: [
                    "<strong>Five screens, one gesture.</strong> Choose the dog, warm up, the card, the reward cue, the end. Tap, long-press, double-tap, pinch, and edge-swipe are all forbidden.",
                    "<strong>One carve-out, on the warm-up screen.</strong> The whole display is one target and a tap counts, because the point of that screen is to reward any contact at all.",
                  ],
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: "/work/tinder-for-chihuahua/wall/ch10-dog-mode.png",
                  caption:
                    "D1 to D5 at dog scale. Two hues, flat fills, square corners, type sized by the acuity factor rather than by eye. The screens are in Polish, because the human half of the audience is.",
                },
              ],
            },
            {
              id: "human-mode",
              n: "02",
              title: "Human mode",
              maxim: "The door between the modes is reachable by a human and unreachable by a nose.",
              standfirst: "Goal: read the ranking as a preference signal, not a match, and decide about a meeting.",
              cover: { src: "/work/tinder-for-chihuahua/wall/ch11-human-mode.png" },
              blocks: [
                {
                  kind: "points",
                  items: [
                    "<strong>Same handset, a different register.</strong> 26 px statistics instead of 112 px display type, 44 px targets instead of 214 px zones, real density, prose. It obeys the HIG because a person is using it.",
                    "<strong>The door between the modes cannot be a button.</strong> A button big enough for a person to find is a button a dog will eventually stand on. The door is a two-finger gesture with a wide spread, and it works only on D5. Nothing about a nose produces two contact points that far apart.",
                    "<strong>H1 carries the sentence the product hangs on:</strong> this is a preference signal, not a match. The likeliest failure is a human over-reading the ranking, so the interface says so where it cannot be missed.",
                  ],
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: "/work/tinder-for-chihuahua/wall/ch11-human-mode.png",
                  caption:
                    "H1 to H4 at human scale: the ranking, the candidates, decision latency across the session, and the setup screen with the per-dog calibration measured on D2.",
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
      maxim: "The first measurement did not catch the build failing. It caught a law being wrong.",
      blocks: [
        {
          kind: "thesis",
          label: "First result, and it broke a law rather than the build",
          text:
            "The session log reads FPS 60, against a law demanding 120 Hz “or the screen flickers to the dog”. That looked like a failure for an hour. It was not: the law conflated two things.",
        },
        {
          kind: "points",
          items: [
            "<strong>Flicker is luminance modulation, and on an OLED that is the dimming, not the refresh.</strong> This phone dims at 480 Hz against a canine threshold of 70 to 80 Hz. The screen never flickered for the dog.",
            "<strong>What 60 fps costs is motion continuity.</strong> And 60 was not the hardware: iOS Safari caps page rendering near 60 fps by default, on ProMotion devices too.",
            "<strong>One law became two.</strong> Flicker is CIG-1.3, satisfied by the dimming. Frame rate is CIG-2.5: measure the rate the page gets.",
            "<strong>The one remaining flicker risk is the lamp above the dog</strong>, which can modulate below 80 Hz. Outside the app, in the blueprint's support layer.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch12-test.png",
          folded: true,
          caption: "The test ladder, with the state of play rather than the plan, including rung 2, which failed on refresh rate.",
        },
      ],
    },

    /* --------------------------------------------------------------- 09a */
    {
      id: "pipeline",
      n: "09a",
      heading: "Tools and pipeline",
      maxim: "This pipeline has no Figma in it. That is the interesting part, and it is also the limitation.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p><strong>One token file generates the guidelines, the panels, and the app's constants.</strong> The marked rows are not off the shelf.</p>",
        },
        {
          kind: "stack",
          caption: "The real pipeline.",
          rows: [
            { key: "Concepts", value: "Three directions as artboards on a Claude Design canvas" },
            { key: "Decision", value: "design/tokens.json: every value with its rationale attached", mine: true },
            { key: "Generated", value: "Guidelines (EN + PL), the panels, app CSS and constants", mine: true },
            { key: "Build guard", value: "The generator refuses to emit on undefined, unsubstituted placeholders, or Polish in the English output", mine: true },
            { key: "App", value: "Vite + TypeScript. No framework, no backend, no accounts" },
            { key: "Video", value: "ffmpeg: cropped to a measured grid, looped, fitted to a byte budget", mine: true },
            { key: "Deploy", value: "GitHub Actions to GitHub Pages. HTTPS makes it installable as a PWA" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 10 */
    {
      id: "what-it-cost",
      n: "10",
      heading: "What it cost",
      maxim: "A case study with no errors in it is a case study written afterwards.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Forty-seven values were publishing the word “undefined”.</strong> 47 of 53 token lookups would silently emit <code>undefined</code> into the guidelines and exit successfully. The build guard exists because of this.",
            "<strong>I overclaimed and had to walk it back.</strong> “Three departures from the HIG” was two. “29 laws” had omitted five. “Everything derives from ×4”: the factor is 3.75. Each read beautifully and none survived being checked.",
            "<strong>One of my laws described the wrong variable</strong>, and survived being written, designed for, and built. I only went looking because the number disagreed with me.",
          ],
        },
        {
          kind: "joint",
          question: "What is still to be measured?",
          answers: [
            "<strong>Whether a dog drags at all</strong>, rather than pushes, paws, or licks the glass.",
            "<strong>Whether one swipe registers once.</strong> The 40 px threshold and the 1500 ms cooldown are estimates.",
            "<strong>Auri's contrast threshold.</strong> “Design for Auri” rests on the direction of an age effect, not on a measured number.",
          ],
        },
        {
          kind: "set",
          size: "square",
          items: [
            { src: "/work/tinder-for-chihuahua/photos/deck-auris.jpg", caption: "Fasola" },
            { src: "/work/tinder-for-chihuahua/photos/deck-aurora.jpg", caption: "Malina" },
            { src: "/work/tinder-for-chihuahua/photos/deck-baltic.jpg", caption: "Rogal" },
            { src: "/work/tinder-for-chihuahua/photos/deck-ciastek.jpg", caption: "Piegus" },
            { src: "/work/tinder-for-chihuahua/photos/deck-fistaszka.jpg", caption: "Bąbel" },
            { src: "/work/tinder-for-chihuahua/photos/deck-kwiatuch.jpg", caption: "Szpilka" },
            { src: "/work/tinder-for-chihuahua/photos/deck-lola.jpg", caption: "Kluska" },
            { src: "/work/tinder-for-chihuahua/photos/deck-mafinka.jpg", caption: "Truskawka" },
            { src: "/work/tinder-for-chihuahua/photos/deck-misiek.jpg", caption: "Pączek" },
            { src: "/work/tinder-for-chihuahua/photos/deck-okruszek.jpg", caption: "Bajgiel" },
            { src: "/work/tinder-for-chihuahua/photos/deck-orotava.jpg", caption: "Tofik" },
            { src: "/work/tinder-for-chihuahua/photos/deck-pindzia.jpg", caption: "Sernik" },
            { src: "/work/tinder-for-chihuahua/photos/deck-skowronek.jpg", caption: "Kajtek" },
          ],
          caption: "The whole deck. Every candidate is a real chihuahua under an assumed name, so a deck never reads as Karmel's own family.",
        },
        {
          kind: "shot",
          width: "column",
          inset: true,
          src: "/work/tinder-for-chihuahua/photos/oboje.jpg",
          caption: "Auri and Karmel, waiting for the next session. She is his mother: the one match the app is built to rule out.",
        },
        {
          kind: "passage",
          html:
            "<p>It is live: <a href=\"https://konstancja-tanjga.github.io/Tinder-for-chihuahua/\">open it on a phone</a>. The <a href=\"https://github.com/Konstancja-Tanjga/Tinder-for-chihuahua\">source</a> is public.</p><p>Karmel has been through the deck. He has preferences. He is not telling me why.</p>",
        },
      ],
    },

    /* ---------------------------------------------------------------- 11 */
    {
      id: "sources",
      n: "11",
      heading: "Sources",
      maxim: "The requirements came from published research rather than from my taste. That claim is worthless unless it is checkable.",
      blocks: [
        {
          kind: "points",
          fold: "Canine vision: the numbers the palette, the scale, and the card are built on",
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
          fold: "The products in the benchmark",
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
