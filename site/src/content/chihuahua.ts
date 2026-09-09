import type { CaseStudy } from "./types";

/**
 * The one wall on this site whose user could not be interviewed.
 *
 * It sits in `practice` rather than `product` on purpose. Nothing shipped to a
 * customer, so it is not a product; but it is a complete run of the method —
 * research to tokens to guidelines to a working build — on a brief absurd
 * enough that every shortcut shows. That is what `practice` is for.
 *
 * Panels are the same 1800px exports the repo uses, in English. All eleven
 * chapters that carry one now have it; nothing stands as a placeholder.
 */
export const chihuahua: CaseStudy = {
  slug: "tinder-for-chihuahua",
  title: "Tinder for Chihuahua",
  what: "A swipe interface for a dichromat with 20/75 vision, whose pointing device is a nose",
  lead:
    "Karmel and Auri are chihuahuas and they would like to meet someone who is neither mum nor son. So they got an app, on an old iPhone, and they operate it themselves. Speculative design taken completely at face value: assume a dog can work a touchscreen, and what is left is not a joke — it is a genuinely hard accessibility brief with published numbers attached.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "PERSONAL PROJECT · SPECULATIVE DESIGN",
    headline: ["Tinder for", "Chihuahua"],
    subline: "Designing for a user who cannot read, tap, or be interviewed",
    stamp: "RESEARCH · GUIDELINES · TOKENS · PWA · TESTING",
    credit: "Design, research and build · Personal project · 2026",
    shot: { src: "/work/tinder-for-chihuahua/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Everything — research, guidelines, design system, build" },
    { label: "Users", value: "Karmel, 5, and Auri, 12, his mother. Plus one human matchmaker" },
    { label: "Frame", value: "Speculative design — whether a dog can work a touchscreen is set aside on purpose" },
    { label: "Scope", value: "Nine screens in two scales, 34 interface laws, a token pipeline, a working PWA" },
    { label: "Live", value: "Running on GitHub Pages — open it on a phone", href: "https://konstancja-tanjga.github.io/Tinder-for-chihuahua/" },
    { label: "Source", value: "Public, guidelines and token file included", href: "https://github.com/Konstancja-Tanjga/Tinder-for-chihuahua" },
    { label: "Period", value: "September 2026" },
  ],
  chapters: [
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
            "<p>My two chihuahuas gave me a brief. Karmel is five, Auri is twelve and she is his mother, and what they want is a kindred spirit who is not each other. I said I would build them an app. They now have one, on an old iPhone 13 Pro Max, and they work it themselves.</p><p>The frame is <strong>speculative design</strong>, and I want to be precise about what that actually buys, because it is not a licence to wave my hands. It is exactly one assumption held constant — <em>a dog can operate a touchscreen</em> — so that everything downstream has to be answered properly. Grant that one thing and what remains is a real design problem: two-colour vision, about a quarter of your visual acuity, no reading, no language, a pointing device that is wet and considerably bigger than a fingertip, and absolutely no way of telling me I got it wrong.</p><p>I have designed for enterprise users I could not get access to. This is the same problem with the excuses taken away.</p>",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/tinder-for-chihuahua/photos/karmel.jpg", caption: "Karmel, five. The one who will work a screen for a treat." },
            { src: "/work/tinder-for-chihuahua/photos/auri.jpg", caption: "Auri, twelve, his mother. The one who sets every threshold in the system." },
          ],
          caption: "The clients. Neither of them can be interviewed, and only one of them is reliably motivated.",
        },
        {
          kind: "thesis",
          label: "The thesis",
          text:
            "One screen, two users. The dog swipes and expresses a preference about what it sees. The human reads that preference and decides about an actual meeting. The app never matches dogs — its output is a ranked preference signal handed to a matchmaker, never a “match”.",
        },
        {
          kind: "passage",
          html:
            "<p>That sentence is the whole reason this is buildable. Every dog-dating app in the benchmark died of the same thing: a two-sided marketplace needs both sides on day one, and a niche marketplace never gets them. Define the output as a <em>signal</em> instead of a <em>match</em> and v1 becomes one-sided and local. No second user, no network, no cold start.</p>",
        },
        {
          kind: "spec",
          caption: "The brief, as constraints.",
          rows: [
            { key: "primary user", value: "Dichromat, 20/75 acuity, non-reader, input organ: a nose" },
            { key: "secondary user", value: "A human matchmaker, same device, different mode" },
            { key: "device", value: "iPhone 13 Pro Max — named in the brief, and for an actual reason (see 09)" },
            { key: "output", value: "A ranked preference signal. Never a match" },
            { key: "network", value: "None. No backend, no accounts, no second side" },
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
            "<p>No interviews, no analytics, no way to ask. So the requirements came from published research instead, with one rule: every finding has to arrive with a design consequence attached.</p><p>Four of the ten did most of the heavy lifting:</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Two hues, and that is the entire palette.</strong> Dogs are dichromats, cone peaks near 429–435 nm and near 555 nm. Red and green are not a thing. So blue and yellow-green carry every scrap of meaning, and black and white are allowed to carry none — they are ground and figure, never signal.",
            "<strong>Everything roughly four times bigger.</strong> Canine acuity runs about 20/75 against a human 20/20, a factor of 3.75. The dog-scale type and target floors are that factor applied on purpose, not “a bit bigger, looks about right”.",
            "<strong>120 Hz is a hardware requirement, not a flex.</strong> Canine flicker fusion sits at 70–80 Hz against a human ~60 Hz, which means a 60 Hz panel visibly flickers to a dog. That is the entire reason a specific handset is named in the brief — the phone spec came out of the eye research.",
            "<strong>The native gesture is a drag, not a tap.</strong> A nose does not land as a point. It lands as a large, wet, multi-point, moving contact patch. Designing tap targets for that is designing for a finger that is not going to show up.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch02-research.png",
          caption:
            "Ten findings, each paired with the requirement it forces. The numbers here are not illustrative — they are the same numbers the app compiles against.",
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
            "<p>It would have been very easy to write one persona called “the dog” and move briskly on. But Karmel is five and Auri is twelve, and a twelve-year-old dog's lens has yellowed and her contrast sensitivity has dropped. Same sensory baseline, different threshold. One persona would have quietly averaged them.</p><p>So it resolves into a single operating rule, and it is the one line from this chapter I would defend in a design review:</p>",
        },
        { kind: "pull", text: "Design for Auri. Test with Karmel." },
        {
          kind: "personas",
          items: [
            {
              n: "01",
              name: "Karmel",
              shot: { src: "/work/tinder-for-chihuahua/photos/karmel-persona.jpg" },
              badge: "PRIMARY SWIPER · THE STRESS TEST FOR INPUT",
              quote: "He touched it and nothing happened. Sound too quiet. Screen too far away.",
              context:
                "Five years old, male. Dichromat, acuity around 20/75, flicker threshold 70–80 Hz. Sees blue and yellow-green.",
              goals: [
                "Novelty, a treat, and your attention — in that order",
                "Someone to love who is not his mother",
              ],
              breaks: "Quick and agile, so he produces the messiest, longest, multi-point nose drags in the house.",
              must: "Tolerate sloppy input. If his swipe registers, anyone's will.",
              job: "SWIPE",
            },
            {
              n: "02",
              name: "Auri",
              shot: { src: "/work/tinder-for-chihuahua/photos/auri-persona.jpg" },
              badge: "THE USER THIS APP HAS REAL VALUE FOR",
              quote: "Someone to love who is not her son.",
              context:
                "Twelve years old, female, Karmel's mother. Same dichromat baseline, but reduced contrast sensitivity from age-related changes in the lens.",
              goals: [
                "Routine, quiet, and a person nearby",
                "Cognitive stimulation — precisely the population the Vienna research was aimed at",
              ],
              breaks: "Calmer, and needs a longer pause before deciding, so she manages fewer cards per session.",
              must: "Set the floor: minimum contrast, minimum target size, maximum session length.",
              job: "SET THE FLOOR",
            },
            {
              n: "03",
              name: "Konstancja",
              badge: "OWNER · OPERATOR · MATCHMAKER",
              quote: "She cannot be in two modes at once: while the dog works, she rewards — she does not tap.",
              context:
                "The only participant who understands why any of this exists, and the only one who can act on the result.",
              goals: [
                "Two less bored dogs, and one real meeting",
                "A result legible at a glance, and silence once the session is over",
              ],
              breaks: "Setup has to take minutes, not hours, or the session simply does not happen.",
              must: "Keep her hands free. She is the interpreter, and the decision stays hers.",
              job: "INTERPRET",
            },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>Designing for the average of the two would have produced something that fails one user and bores the other. None of which is dog-specific — it is the ordinary reason you size for the worst-case user and recruit the willing one.</p>",
        },

      ],
    },

    /* ---------------------------------------------------------------- 04 */
    {
      id: "journey-dog",
      n: "04",
      heading: "The session",
      maxim:
        "The most important moment in the loop is the one the software is not present for.",
      standfirst:
        "Eleven steps of a dog's session, in swimlanes, marked by where each one actually happens.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch04-journey-sesja-psa.png",
          caption:
            "Eleven steps. Four happen nowhere near the application, which is the most unusual property this product has.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 05 */
    {
      id: "journey-human",
      n: "05",
      heading: "The matchmaker",
      maxim: "Double opt-in, rewritten: one side swipes, the other side is accountable.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The human journey is five steps and exists to make one thing structurally true: the app cannot arrange a meeting. It can only report a preference.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch05-journey-swatka.png",
          caption: "Five steps, from putting the phone down to a meeting in the park.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 06 */
    {
      id: "blueprint",
      n: "06",
      heading: "Service blueprint",
      maxim:
        "The journey says what happens. The blueprint says what has to hold underneath for it to happen at all.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The risk row is where the numbers in this project were actually decided. My favourite entry, because it sounds silly and then turns into three real constraints:</p>",
        },
        {
          kind: "spec",
          caption: "One risk, and the three decisions it produced.",
          rows: [
            { key: "risk", value: "A wet nose registers one swipe as three" },
            { key: "→", value: "Take the centroid of the contact patch and ignore how many touch points there are" },
            { key: "→", value: "Require 40 px of travel before anything counts as intent" },
            { key: "→", value: "Refuse input for 1500 ms afterwards — and make undo a core function, not a courtesy" },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch06-blueprint.png",
          caption:
            "Six phases across, five lanes down. The support layer names the data and the hardware; the risk layer names the answer.",
        },
      ],
    },


    /* ---------------------------------------------------------------- 07 */
    {
      id: "benchmark",
      n: "07",
      heading: "Benchmark",
      maxim:
        "The card deck has already run its entire life cycle in dating and in recruitment. Their failures are free.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Looking only at dog apps would have been a waste of a week. The market splits cleanly into two families, and the gap between them is where this project lives:</p>",
        },
        {
          kind: "spec",
          caption: "Two families, and the empty space between them.",
          rows: [
            { key: "Social, for dogs", value: "Pawmates, Tindog, BarkHappy, Wowzer — the human operates; the dog is profile content, not a user. Produces playdates between owners" },
            { key: "Toys, for dogs", value: "App for Dog, BetterPawPlay, Dog Squeaky Toy, Puppy Tapper, DOGLi — the dog operates, nose or paw, phone flat. Produces nothing that outlives the session" },
            { key: "This project", value: "The dog operates and the human interprets. Produces a preference ranking that a human turns into a real meeting" },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>Two things in there were worth the trip. <strong>App for Dog</strong> markets its buttons as “big, full-screen, so a curious nose can't miss them” — which is the exact pattern I had just derived from gesture morphology research, except somebody had already validated it commercially. And the founder story behind a Toronto “Tinder for dogs” is a man who built it because his older dog could not find anyone to play with. That is, more or less exactly, this brief. The motivation is market-validated; the differentiator has to be that here the dog does the swiping.</p><p>Then I left the category, because the interaction pattern I was borrowing has run its full arc elsewhere:</p>",
        },
        {
          kind: "spec",
          caption: "What dating and job apps already paid to find out.",
          rows: [
            { key: "Tinder's swipe", value: "The power is in a binary decision with zero interface chrome. Here that is not styling — anything that is not the card or a decision zone actively costs the dog legibility" },
            { key: "Rewind / undo", value: "A premium feature in human apps: a small mistake you can monetise. Here undo is core, large and immediate, because a wet nose will misfire regularly" },
            { key: "Hinge", value: "Moved away from swiping towards prompts, under the banner “designed to be deleted”, and grew revenue 22% doing it. Volume is not the goal" },
            { key: "Bumble", value: "Explicitly away from “optimising for swipe speed and volume” towards fewer, better, more considered signals. Hence a deck ceiling of 6–12" },
            { key: "Double opt-in", value: "Consent from both sides — that mechanism, not the swipe, is what creates safety and worth. Rewritten here for a dog and a human" },
          ],
        },
        {
          kind: "pull",
          text: "A swipe that only moves something onto a “maybe later” pile has not saved anyone any work. It has relocated the decision.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch07-benchmark.png",
          caption:
            "Part one: the two families and the empty space between them. Part two: what dating and recruitment already paid to find out, and what this project takes from each.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 08 */
    {
      id: "directions",
      n: "08",
      heading: "Three visual directions",
      maxim: "A direction with no named weakness has not been evaluated, only preferred.",
      standfirst:
        "The same three screens in each column, so the comparison is between directions and not between my choice of screens.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch08-kierunki.png",
          caption:
            "Three directions on the same three screens, each with an argument for and against — including the winner. The two rejected directions keep their own palettes on the canvas and deliberately do not comply with the tokens: they are a record of a decision, not material to build from.",
        },
        {
          kind: "thesis",
          label: "The winner's weakness, named",
          text:
            "In human mode the same language is simply shouting. Poster scale on H1–H4 hands a matchmaker four-inch numerals to read a subtle ranking from, which is why human mode ended up needing its own scale rather than a shrunken copy of the dog one.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 09 */
    {
      id: "cig",
      n: "09",
      heading: "Canine Interface Guidelines",
      maxim:
        "In dog mode the Human Interface Guidelines are not insufficient. They are actively harmful.",
      standfirst:
        "29 numbered laws in six groups plus five platform laws — generated from the token file, so not one number in the document is typed by hand.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>My first instinct was to adapt Apple's HIG. That was wrong, and it took writing a page of the adaptation to work out why. The HIG describe a very specific animal: a fingertip, a 44-point target, red meaning danger, text carrying the content, 60 Hz being perfectly fine. Every one of those propositions is false for this user. Adapting a document whose every premise has failed is not adaptation, it is fan fiction.</p><p>So I wrote the guidelines the project actually needed and drew the boundary explicitly: <strong>CIG govern dog mode, HIG govern human mode.</strong> Human mode genuinely is an iOS surface for a person and should behave like one, so it obeys the HIG with exactly <strong>two</strong> recorded departures — semantic colour, and typography — each written down with its reason rather than quietly taken. Two departures on the record is a much better answer than a whole parallel rulebook nobody asked for.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "34", label: "laws in the compliance checklist — 29 canine, 5 platform" },
            { value: "6", label: "groups, from palette and scale through to session and platform" },
            { value: "2", label: "recorded departures from the HIG in human mode" },
            { value: "0", label: "numbers in the document typed by hand" },
          ],
        },
        {
          kind: "palette",
          standfirst:
            "The whole palette. Two hues carry every piece of meaning in dog mode, and the other two are forbidden from carrying any.",
          items: [
            {
              hex: "#0033FF",
              name: "Blue",
              role: "Signal. One of exactly two colours allowed to mean anything.",
              note: "Sits near the short-wavelength cone peak at 429–435 nm.",
            },
            {
              hex: "#D6F000",
              name: "Acid",
              role: "Signal. The other one. Reward, progress, yes.",
              note: "Sits near the long/medium cone peak at 555 nm. It replaced a warmer yellow for exactly this reason.",
            },
            {
              hex: "#000000",
              name: "Ink",
              role: "Ground. Never a signal, in either mode.",
              note: "Also the reason D5 works: a screen with no acid on it reads as nothing left to win.",
            },
            {
              hex: "#FFFFFF",
              name: "White",
              role: "Figure. Shape and edge, never meaning.",
              note: "Text set in it is for the human. The dog gets shape, motion or sound instead.",
            },
          ],
          caption:
            "Red and green are absent because they are not distinguishable to this user — so a red warning would be a warning nobody receives.",
        },
        {
          kind: "spec",
          caption: "Four of the thirty-four.",
          rows: [
            { key: "CIG-2.1", value: "Meaning is carried by blue (#0033FF) and acid (#D6F000) only. Black and white are ground and figure, never signal" },
            { key: "CIG-3.2", value: "Dog-scale display type is 112 px, names 80 px, values 44 px. Minimum target: 214 × 300 px" },
            { key: "CIG-5.1", value: "A deck is 6 to 12 cards. A rising decision time is the signal to shorten it, not to add cards" },
            { key: "CIG-7.1", value: "120 Hz is required, not preferred. Below canine flicker fusion the screen flickers to the user" },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch09-cig.png",
          caption:
            "The laws, their groups, and the split of responsibility between CIG and HIG. This panel is generated, so the numbers on it cannot disagree with the app.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 10 */
    {
      id: "dog-mode",
      n: "10",
      heading: "Dog mode",
      maxim: "Two targets, each 214 px wide and the full height of the display. There is nothing to miss.",
      blocks: [
        {
          kind: "video",
          width: "column",
          src: "/work/tinder-for-chihuahua/showcase-sesja.mp4",
          poster: "/work/tinder-for-chihuahua/showcase-poster.png",
          title: "One full session in dog mode, recorded on the phone",
          caption:
            "A screen recording of the running app: the warm-up, six candidate cards, and the end screen with the session log. Thirty-three seconds, one whole session. The candidates are my own dogs under assumed names, which is why the deck is suspiciously photogenic.",
        },
        {
          kind: "passage",
          html:
            "<p>Five screens: choose the dog, warm up, the card, the reward cue, the end. The entire interaction vocabulary is one horizontal drag. Tap, long-press, double-tap, pinch and edge-swipe are all forbidden, with a single carve-out on the warm-up screen where the whole display is one target and a tap counts, because the point of that screen is to reward any contact at all.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch10-dog-mode.png",
          caption:
            "D1 to D5 at dog scale. Two hues, flat fills, square corners, type sized by the acuity factor rather than by eye. The screens themselves are in Polish, because the human half of the audience is.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 11 */
    {
      id: "human-mode",
      n: "11",
      heading: "Human mode",
      maxim: "One product, two scales, and the gesture between them is deliberately hard to perform.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Human mode is where the ranking gets read. Same handset, completely different register: 26 px statistics instead of 112 px display type, 44 px targets instead of 214 px zones, real density, actual prose. It obeys the HIG, because a person is using it.</p><p>The genuinely interesting problem was the door between the two modes. It has to be reachable by a human and unreachable by a nose, and it cannot be a button, because a button big enough for a person to find is a button a dog will eventually stand on. The answer is a two-finger gesture with a properly wide finger spread, available only on D5. Nothing about a nose produces two contact points that far apart.</p><p>H1 also carries the sentence the entire product hangs on, in plain language, at the top: <em>this is a preference signal, not a match.</em> The most likely failure of this thing is not a bug — it is a human over-reading the ranking. So the interface says so where it cannot be missed.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch11-human-mode.png",
          caption:
            "H1 to H4 at human scale: the ranking, the candidates, decision latency across the session, and the setup screen that carries the per-dog calibration measured on D2.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 12 */
    {
      id: "testing",
      n: "12",
      heading: "Testing",
      maxim:
        "Three questions no amount of drawing answers, so the prototype was built to measure them.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Design settled the palette, the scale and the layout. It could not settle any of the following, and pretending otherwise would have been the dishonest version of this case study:</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Will a dog drag at all,</strong> rather than push, paw, or simply lick the glass?",
            "<strong>Does one swipe register once?</strong> The 40 px threshold and the 1500 ms cooldown are estimates. The contact-patch figures in the token file are still placeholders and are labelled as such.",
            "<strong>Does audio unlock?</strong> iOS will not start an AudioContext without a user gesture, and the first gesture of a session belongs to a dog — one of several reasons the warm-up screen exists.",
          ],
        },
        {
          kind: "thesis",
          label: "First result, and it is not the one I wanted",
          text:
            "The session log in the recording reads FPS 60. CIG-7.1 requires 120 Hz, because below canine flicker fusion the screen flickers to the user — and 120 Hz is the reason a specific handset is named in the brief. The hardware can do it; this build measured half of it. I have not established why yet, so I am not going to pretend the requirement is met: it is the first thing to chase, ahead of anything cosmetic.",
        },
        {
          kind: "passage",
          html:
            "<p>Which is the useful kind of failure. The requirement came out of research, went into the guidelines as a numbered law, got designed for, got built — and the very first recorded session says the platform did not deliver it. A specification that cannot be caught failing is not a specification, it is a wish.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch12-test.png",
          caption:
            "The ladder, with the state of play rather than the plan — including rung 2, which failed on refresh rate.",
        },
      ],
    },

    /* --------------------------------------------------------------- 12a */
    {
      id: "pipeline",
      n: "12a",
      heading: "From canvas to production",
      maxim:
        "There is no Figma in this pipeline. That is the interesting part, and it is also the limitation.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Worth being exact about how this got built, because it is not the design-to-code chain I run at work. There is no Figma library here, no Code Connect, no Storybook and no Chromatic. Concepts were explored as artboards on a Claude Design canvas, the decision was recorded in a token file, and that token file generates both the guidelines and the app's constants. The application is hand-written TypeScript reading those generated values, and it deploys to GitHub Pages on push.</p>",
        },
        {
          kind: "stack",
          caption: "The real pipeline. The marked rows are the parts that are not off the shelf.",
          rows: [
            { key: "Concepts", value: "Three directions as artboards on a Claude Design canvas" },
            { key: "Decision", value: "design/tokens.json — every value with its rationale attached, prose bilingual by structure", mine: true },
            { key: "Generated", value: "Guidelines (EN + PL), the case-study panels, app CSS, app TypeScript constants", mine: true },
            { key: "Build guard", value: "The generator refuses to emit on undefined, unsubstituted placeholders, stringified objects, or Polish in the English output", mine: true },
            { key: "App", value: "Vite + TypeScript. No framework, no backend, no accounts" },
            { key: "Video", value: "ffmpeg — cropped to a measured grid, boomerang-looped, CRF fitted to a byte budget", mine: true },
            { key: "Deploy", value: "GitHub Actions to GitHub Pages. HTTPS, which is what makes it installable as a PWA" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 13 */
    {
      id: "what-it-cost",
      n: "13",
      heading: "What it cost",
      maxim: "A case study with no errors in it is a case study written afterwards.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Four things worth owning up to, because they are the parts that actually taught me something.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Fifty values were publishing the word “undefined”.</strong> An audit found 47 of 53 token lookups in the generator would silently emit <code>undefined</code> into the guidelines and exit successfully. Six failed loudly, purely by luck. Everything I had been saying about a single source of truth was true of the architecture and not yet true of the output. The build guard exists because of this, and I verified it by deliberately breaking five things and confirming each one now fails the build.",
            "<strong>I overclaimed, repeatedly, and had to walk it back.</strong> “Not one value typed by hand” was false. “Three departures from the HIG” was two. “29 laws, every one testable” had quietly omitted five platform laws, so the checklist is 34. “Everything derives from ×4” — the acuity factor is 3.75, and the size floors actually land at 4.9×, 6.8× and 4.3×. Every one of those read beautifully and none survived being checked.",
            "<strong>I tried to improve the silhouette and made it worse.</strong> An attempt to sharpen the ears produced something between a cat and a Pikachu. I reverted rather than iterate, which was the right call roughly twenty minutes later than it should have been. The silhouette is still the weakest thing on the poster screens.",
            "<strong>The panels were in the wrong language.</strong> Diagrams built for a Polish working document went onto an English page, which is evidence nobody can read. The panel renderer now fails the build on Polish diacritics in an English panel, because I evidently cannot be trusted to notice.",
          ],
        },
        {
          kind: "set",
          size: "square",
          items: [
            { src: "/work/tinder-for-chihuahua/photos/deck-1.jpg" },
            { src: "/work/tinder-for-chihuahua/photos/deck-2.jpg" },
            { src: "/work/tinder-for-chihuahua/photos/deck-3.jpg" },
            { src: "/work/tinder-for-chihuahua/photos/deck-4.jpg" },
            { src: "/work/tinder-for-chihuahua/photos/deck-5.jpg" },
            { src: "/work/tinder-for-chihuahua/photos/deck-6.jpg" },
            { src: "/work/tinder-for-chihuahua/photos/deck-7.jpg" },
            { src: "/work/tinder-for-chihuahua/photos/deck-8.jpg" },
          ],
          caption:
            "The deck is built from four-second clips of real chihuahuas, who appear in the app under assumed names — so that a deck never reads as Karmel's own family. Thirteen candidates, all of them somebody's dog.",
        },
        {
          kind: "thesis",
          label: "Why this is on the site at all",
          text:
            "It is a full method run end to end — research, personas, journey, blueprint, guidelines, tokens, and a built, instrumented, deployed thing — on a brief silly enough that no stakeholder was ever going to rescue a weak decision by agreeing with it. Every shortcut had to show. Also the users are unreasonably photogenic, and every candidate video is one of my own dogs under an assumed name.",
        },
        {
          kind: "shot",
          width: "column",
          src: "/work/tinder-for-chihuahua/photos/oboje.jpg",
          caption: "Auri and Karmel, waiting for the next session. She is his mother, which is the one match the app is built to rule out.",
        },
        {
          kind: "passage",
          html:
            "<p>It is live: <a href=\"https://konstancja-tanjga.github.io/Tinder-for-chihuahua/\">open it on a phone and add it to the home screen</a>. The <a href=\"https://github.com/Konstancja-Tanjga/Tinder-for-chihuahua\">source</a> is public, guidelines and token file included.</p><p>Karmel has been through the deck. He has preferences. He is not telling me why.</p>",
        },
      ],
    },
  ],
};
