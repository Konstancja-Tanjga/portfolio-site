import type { CaseStudy } from "./types";

/**
 * The one wall on this site whose user could not be interviewed.
 *
 * It sits in `practice` rather than `product` on purpose. Nothing shipped to a
 * customer, so it is not a product; but it is a complete run of the method
 * (research to tokens to guidelines to a working build) on a brief absurd
 * enough that every shortcut shows. That is what `practice` is for.
 *
 * Chapter numbers keep the numbering of the panels (01 to 14, with 12a for
 * the pipeline). 00 and 01a have no panel: they were written for this page.
 * Dog mode and human mode, panels 10 and 11, are two tiles of one dossier
 * under chapter 10; their old ids survive as the tile ids, so the deep links
 * still open them.
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
    { label: "Frame", value: "Speculative design: whether a dog can work a touchscreen is set aside on purpose" },
    { label: "Scope", value: "Nine screens in two scales, 34 interface laws, a token pipeline, a working PWA" },
    { label: "Live", value: "Running on GitHub Pages; open it on a phone", href: "https://konstancja-tanjga.github.io/Tinder-for-chihuahua/" },
    { label: "Source", value: "Public, guidelines and token file included", href: "https://github.com/Konstancja-Tanjga/Tinder-for-chihuahua" },
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
                "A personal project: two chihuahuas, Karmel and Auri, an old iPhone 13 Pro Max, and the speculative premise that a dog can operate a touchscreen.",
            },
            {
              key: "Problem",
              value:
                "The user is a dichromat with 20/75 acuity who cannot read, whose pointing device is a wet nose, and who cannot be interviewed or say when the design is wrong.",
            },
            {
              key: "My role and scope",
              value:
                "Everything: the research from published literature, the personas, the journeys and the blueprint, the Canine Interface Guidelines, the token pipeline, and the working PWA.",
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
                "CIG govern dog mode, HIG govern human mode, with two recorded departures, and every number in both is generated from one token file.",
            },
            {
              key: "Outcome",
              value:
                "Live as a PWA, source public. The first measured session broke a law rather than the build: one law about flicker became two.",
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
          kind: "points",
          items: [
            "<strong>Karmel is five; Auri is twelve and his mother.</strong> What they want is someone who is neither mum nor son.",
            "<strong>Speculative design holds one assumption constant:</strong> a dog can operate a touchscreen. Everything downstream then has to be answered properly, so the frame is not a licence to wave my hands.",
            "<strong>What remains is a real design problem.</strong> Two-colour vision, about a quarter of human acuity, no reading, no language, a wet pointing device far bigger than a fingertip, and no way of telling me I got it wrong.",
            "<strong>I have designed for enterprise users I could not get access to.</strong> This is the same problem with the excuses taken away.",
          ],
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
            "One screen, two users. The dog swipes and expresses a preference about what it sees. The human reads that preference and decides about a meeting. The app never matches dogs: its output is a ranked preference signal handed to a matchmaker, never a “match”.",
        },
        {
          kind: "passage",
          html: "<p>That sentence is <strong>the whole reason this is buildable</strong>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Every dog-dating app in the benchmark died of the same thing.</strong> A two-sided marketplace needs both sides on day one, and a niche marketplace never gets them.",
            "<strong>A signal instead of a match makes v1 one-sided and local.</strong> No second user, no network, no cold start.",
          ],
        },
        {
          kind: "spec",
          caption: "The brief, as constraints.",
          rows: [
            { key: "primary user", value: "Dichromat, 20/75 acuity, non-reader, input organ: a nose" },
            { key: "secondary user", value: "A human matchmaker, same device, different mode" },
            { key: "device", value: "iPhone 13 Pro Max, named in the brief for a reason (see chapter 09)" },
            { key: "output", value: "A ranked preference signal. Never a match" },
            { key: "network", value: "None. No backend, no accounts, no second side" },
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
            "<strong>No feedback channel.</strong> The user cannot say when the design is wrong, so every requirement has to come from published research with a consequence attached.",
            "<strong>Two hues carry all the meaning.</strong> A dichromat sees blue and yellow-green; red and green do not exist for him.",
            "<strong>A quarter of the acuity.</strong> 20/75 against 20/20, so everything is sized by a factor, not by eye.",
            "<strong>The pointer is a nose.</strong> Wet, multi-point, moving, and far bigger than a fingertip, so a tap target is designed for a finger that will not show up.",
            "<strong>Two users on one screen.</strong> The dog swipes, the human reads the ranking, and the door between the two modes must be reachable by one and not by the other.",
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
            "<p>No interviews, no analytics, no way to ask, so <strong>the requirements came from published research</strong>, with one rule: every finding arrives with a design consequence attached. Four of the ten did most of the work.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Two hues, and that is the entire palette.</strong> Dogs are dichromats, cone peaks near 429 to 435 nm and near 555 nm. Red and green do not exist for them, so blue and yellow-green carry every scrap of meaning, and black and white carry none: they are ground and figure, never signal.",
            "<strong>Everything roughly four times bigger.</strong> Canine acuity runs about 20/75 against a human 20/20, a factor of 3.75. The dog-scale type and target floors are that factor applied on purpose, not “a bit bigger, looks about right”.",
            "<strong>Canine flicker fusion sits at 70 to 80 Hz</strong> against a human 60 Hz: dogs resolve change faster than we do. This finding made me name a specific handset in the brief, and it is also the one I drew the wrong conclusion from. What flickers on a phone is not the frame rate; see chapter 12.",
            "<strong>The native gesture is a drag, not a tap.</strong> A nose does not land as a point. It lands as a large, wet, multi-point, moving contact patch. Designing tap targets for that is designing for a finger that is not going to show up.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch02-research.png",
          caption:
            "Ten findings, each paired with the requirement it forces. The numbers are not illustrative; they are the numbers the app compiles against.",
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
            "<p>One persona called “the dog” would have <strong>quietly averaged two different thresholds</strong>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Same sensory baseline, different threshold.</strong> Karmel is five. Auri is twelve, her lens has yellowed, and her contrast sensitivity has dropped.",
            "<strong>One operating rule follows</strong>, and it is the line from this chapter I would defend in a design review.",
          ],
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
              context:
                "Five years old, male. Dichromat, acuity around 20/75, flicker threshold 70 to 80 Hz. Sees blue and yellow-green.",
              goals: [
                "Novelty, a treat, and your attention, in that order",
                "Someone to love who is not his mother",
              ],
              breaks: "Quick and agile, so he produces the messiest, longest, multi-point nose drags in the house.",
              must: "Tolerate sloppy input. If his swipe registers, anyone's will.",
              job: "SWIPE",
            },
            {
              n: "02",
              name: "Auri",
              shot: { src: "/work/tinder-for-chihuahua/photos/auri-bieg.jpg" },
              badge: "THE USER THIS APP HAS REAL VALUE FOR",
              quote: "Someone to love who is not her son.",
              context:
                "Twelve years old, female, Karmel's mother. Same dichromat baseline, but reduced contrast sensitivity from age-related changes in the lens.",
              goals: [
                "Routine, quiet, and a person nearby",
                "Cognitive stimulation, the population the Vienna research was aimed at",
              ],
              breaks: "Calmer, and needs a longer pause before deciding, so she manages fewer cards per session.",
              must: "Set the floor: minimum contrast, minimum target size, maximum session length.",
              job: "SET THE FLOOR",
            },
            {
              n: "03",
              name: "Konstancja",
              badge: "OWNER · OPERATOR · MATCHMAKER",
              quote: "She cannot be in two modes at once: while the dog works, she rewards; she does not tap.",
              context:
                "The only participant who understands why any of this exists, and the only one who can act on the result.",
              goals: [
                "Two less bored dogs, and one real meeting",
                "A result legible at a glance, and silence once the session is over",
              ],
              breaks: "Setup has to take minutes, not hours, or the session does not happen.",
              must: "Keep her hands free. She is the interpreter, and the decision stays hers.",
              job: "INTERPRET",
            },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>Designing for the average of the two would have produced something that fails one user and bores the other. None of that is dog-specific; it is the ordinary reason you size for the worst-case user and recruit the willing one.</p>",
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
        "Eleven steps of a dog's session, in swimlanes, marked by where each one happens.",
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
            "<p>The human journey is five steps and exists to make one thing structurally true: <strong>the app cannot arrange a meeting</strong>. It can only report a preference.</p>",
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
            "<p>The risk row is where <strong>the numbers in this project were decided</strong>. One entry sounds silly and then turns into three real constraints.</p>",
        },
        {
          kind: "spec",
          caption: "One risk, and the three decisions it produced.",
          rows: [
            { key: "Risk", value: "A wet nose registers one swipe as three" },
            { key: "Answer 1", value: "Take the centroid of the contact patch and ignore the number of touch points" },
            { key: "Answer 2", value: "Require 40 px of travel before anything counts as intent" },
            { key: "Answer 3", value: "Refuse input for 1500 ms afterwards, and make undo a core function, not a courtesy" },
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
            "<p>Looking only at dog apps would have wasted a week. The market splits into <strong>two families</strong>, and the gap between them is where this project lives.</p>",
        },
        {
          kind: "spec",
          caption: "Two families, and the empty space between them.",
          rows: [
            { key: "Social, for dogs", value: "Pawmates, Tindog, BarkHappy, Wowzer: the human operates; the dog is profile content, not a user. Produces playdates between owners" },
            { key: "Toys, for dogs", value: "App for Dog, BetterPawPlay, Dog Squeaky Toy, Puppy Tapper, DOGLi: the dog operates, nose or paw, phone flat. Produces nothing that outlives the session" },
            { key: "This project", value: "The dog operates and the human interprets. Produces a preference ranking that a human turns into a real meeting" },
          ],
        },
        {
          kind: "passage",
          html: "<p>Two things in there were <strong>worth the trip</strong>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>App for Dog markets its buttons as “big, full-screen, so a curious nose can't miss them”.</strong> The exact pattern I had just derived from gesture morphology research, except somebody had already validated it commercially.",
            "<strong>A Toronto “Tinder for dogs” was built by a man whose older dog could not find anyone to play with.</strong> That is, more or less, this brief. The motivation is market-validated; the differentiator has to be that here the dog does the swiping.",
            "<strong>Then I left the category</strong>, because the interaction pattern I was borrowing has run its full arc in dating and in recruitment.",
          ],
        },
        {
          kind: "spec",
          caption: "What dating and job apps already paid to find out.",
          rows: [
            { key: "Tinder's swipe", value: "The power is in a binary decision with zero interface chrome. Here that is not styling: anything that is not the card or a decision zone costs the dog legibility" },
            { key: "Rewind and undo", value: "A premium feature in human apps: a small mistake you can monetise. Here undo is core, large, and immediate, because a wet nose will misfire regularly" },
            { key: "Hinge", value: "Moved away from swiping towards prompts, under the banner “designed to be deleted”, and grew revenue 22% doing it. Volume is not the goal" },
            { key: "Bumble", value: "Away from “optimising for swipe speed and volume” towards fewer, better, more considered signals. Hence a deck ceiling of 6 to 12" },
            { key: "Double opt-in", value: "Consent from both sides. That mechanism, not the swipe, creates safety and worth; rewritten here for a dog and a human" },
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
            "Three directions on the same three screens, each with an argument for and against, including the winner. The two rejected directions keep their own palettes on the canvas and do not comply with the tokens, on purpose: they are a record of a decision, not material to build from.",
        },
        {
          kind: "thesis",
          label: "The winner's weakness, named",
          text:
            "In human mode the same language is shouting. Poster scale on H1 to H4 hands a matchmaker four-inch numerals to read a subtle ranking from, which is why human mode needed its own scale rather than a shrunken copy of the dog one.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 09 */
    {
      id: "cig",
      n: "09",
      heading: "Canine Interface Guidelines",
      maxim:
        "In dog mode the Human Interface Guidelines are not insufficient. They are harmful.",
      standfirst:
        "29 numbered laws in six groups plus five platform laws, generated from the token file, so not one number in the document is typed by hand.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>My first instinct was to adapt Apple's HIG. <strong>That was wrong</strong>, and it took a page of the adaptation to work out why.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>The HIG describe a specific animal.</strong> A fingertip, a 44-point target, red meaning danger, text carrying the content, 60 Hz being fine. Every one of those propositions is false for this user.",
            "<strong>Adapting a document whose every premise has failed is not adaptation</strong>; it is fan fiction.",
            "<strong>CIG govern dog mode, HIG govern human mode.</strong> Human mode is an iOS surface for a person and behaves like one.",
            "<strong>Two recorded departures from the HIG</strong>, semantic colour and typography, each written down with its reason rather than quietly taken. Two departures on the record beat a parallel rulebook nobody asked for.",
          ],
        },
        {
          kind: "stats",
          items: [
            { value: "34", label: "laws in the compliance checklist: 29 canine, 5 platform" },
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
              note: "Sits near the short-wavelength cone peak at 429 to 435 nm.",
            },
            {
              hex: "#D6F000",
              name: "Acid",
              role: "Signal. The other one. Reward, progress, yes.",
              note: "Sits near the long and medium cone peak at 555 nm. It replaced a warmer yellow for exactly this reason.",
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
              note: "Text set in it is for the human. The dog gets shape, motion, or sound instead.",
            },
          ],
          caption:
            "Red and green are absent because this user cannot distinguish them, so a red warning would be a warning nobody receives.",
        },
        {
          kind: "spec",
          caption: "Five of the thirty-four.",
          rows: [
            { key: "CIG-2.1", value: "Meaning is carried by blue (#0033FF) and acid (#D6F000) only. Black and white are ground and figure, never signal" },
            { key: "CIG-3.2", value: "Dog-scale display type is 112 px, names 80 px, values 44 px. Minimum target: 214 × 300 px" },
            { key: "CIG-5.1", value: "A deck is 6 to 12 cards. A rising decision time is the signal to shorten it, not to add cards" },
            { key: "CIG-1.3", value: "Flicker is luminance modulation, not frame rate. On this panel that is PWM dimming at 480 Hz, six times the canine threshold, so it fuses" },
            { key: "CIG-2.5", value: "120 Hz is for motion continuity, not against flicker. Measure the rate the page gets; do not assume the panel's reaches it" },
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

    /* ------------------------------------------------------------ 10, 11 */
    {
      id: "modes",
      n: "10",
      heading: "Dog mode and human mode",
      maxim: "One product, two scales, and the gesture between them is deliberately hard to perform.",
      standfirst:
        "One tile per mode. Open a tile and the mode unfolds to the right: the session as recorded, the screens, and the rules each one obeys.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "dog-mode",
              n: "10",
              title: "Dog mode",
              maxim: "Two targets, each 214 px wide and the full height of the display. Nothing to miss.",
              standfirst: "Goal: register a dog's preference from one horizontal drag, and reward it.",
              cover: { src: "/work/tinder-for-chihuahua/wall/ch10-dog-mode.png" },
              blocks: [
                {
                  kind: "video",
                  width: "column",
                  src: "/work/tinder-for-chihuahua/showcase-sesja.mp4",
                  poster: "/work/tinder-for-chihuahua/showcase-poster.png",
                  title: "One full session in dog mode, recorded on the phone",
                  caption:
                    "A recording of the running app: the warm-up, six candidate cards, and the end screen with the session log. Thirty-three seconds, one whole session. The candidates are my own dogs under assumed names, which is why the deck is suspiciously photogenic.",
                },
                {
                  kind: "passage",
                  html:
                    "<p>Five screens, choose the dog, warm up, the card, the reward cue, the end, and <strong>one gesture: a horizontal drag</strong>.</p>",
                },
                {
                  kind: "points",
                  items: [
                    "<strong>Tap, long-press, double-tap, pinch, and edge-swipe are all forbidden.</strong> The entire interaction vocabulary is the drag.",
                    "<strong>One carve-out, on the warm-up screen.</strong> The whole display is one target and a tap counts, because the point of that screen is to reward any contact at all.",
                  ],
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
            {
              id: "human-mode",
              n: "11",
              title: "Human mode",
              maxim: "The door between the modes is reachable by a human and unreachable by a nose.",
              standfirst: "Goal: read the ranking as a preference signal, not a match, and decide about a meeting.",
              cover: { src: "/work/tinder-for-chihuahua/wall/ch11-human-mode.png" },
              blocks: [
                {
                  kind: "passage",
                  html:
                    "<p>Human mode is where <strong>the ranking gets read</strong>: the same handset, a different register, and it obeys the HIG because a person is using it.</p>",
                },
                {
                  kind: "points",
                  items: [
                    "<strong>26 px statistics instead of 112 px display type</strong>, 44 px targets instead of 214 px zones, real density, prose.",
                    "<strong>The door between the modes cannot be a button.</strong> A button big enough for a person to find is a button a dog will eventually stand on.",
                    "<strong>A two-finger gesture with a wide finger spread, available only on D5.</strong> Nothing about a nose produces two contact points that far apart.",
                    "<strong>H1 carries the sentence the product hangs on</strong>, at the top, in plain language: this is a preference signal, not a match. The likeliest failure of this thing is not a bug but a human over-reading the ranking, so the interface says so where it cannot be missed.",
                  ],
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
          ],
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
            "<p>Design settled the palette, the scale, and the layout. It could not settle <strong>three questions</strong>, and pretending otherwise would have been the dishonest version of this case study.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Will a dog drag at all,</strong> rather than push, paw, or lick the glass?",
            "<strong>Does one swipe register once?</strong> The 40 px threshold and the 1500 ms cooldown are estimates. The contact-patch figures in the token file are still placeholders and are labelled as such.",
            "<strong>Does audio unlock?</strong> iOS will not start an AudioContext without a user gesture, and the first gesture of a session belongs to a dog, which is one of several reasons the warm-up screen exists.",
          ],
        },
        {
          kind: "thesis",
          label: "First result, and it broke a law rather than the build",
          text:
            "The session log reads FPS 60, against a law demanding 120 Hz “or the screen flickers to the dog”. That looked like a straightforward failure for about an hour. It was not: the law was conflating two different things, and the research I had done supported only one of them.",
        },
        {
          kind: "passage",
          html:
            "<p>Flicker is <strong>luminance modulation</strong>, how often the light goes on and off, and on a sample-and-hold OLED that is the dimming, not the refresh.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>The screen never flickered for the dog, and it never could have.</strong> This phone runs PWM at 480 Hz at every brightness level, with no DC dimming, measured at 97.6% modulation depth. Against a canine threshold of 70 to 80 Hz that is roughly six times the headroom.",
            "<strong>What 60 fps costs is motion continuity.</strong> A real concern for an animal that resolves change up to 80 Hz: a swipe following its nose is steppier to Karmel than to me.",
            "<strong>And 60 fps was not the hardware either.</strong> iOS Safari caps page rendering near 60 fps by default, on ProMotion devices too, to save battery. A feature flag named <code>Prefer Page Rendering Updates near 60fps</code> lifts it, and whether it reaches a home-screen PWA is the next thing to test.",
            "<strong>One law became two</strong>, because it had been one law doing two jobs badly. Flicker is CIG-1.3 and is satisfied by the dimming. Frame rate is CIG-2.5, which asks for motion continuity and says not to assume the panel's rate reaches the page.",
          ],
        },
        {
          kind: "thesis",
          label: "And the flicker risk moved somewhere I was not looking",
          text:
            "Off the screen entirely, and into the room. A dimmed or mains-driven lamp can modulate below 80 Hz, which puts the one remaining flicker risk in the lighting above the dog rather than in the device under it: outside the application, and in the blueprint's support layer.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch12-test.png",
          caption:
            "The ladder, with the state of play rather than the plan, including rung 2, which failed on refresh rate.",
        },
      ],
    },

    /* --------------------------------------------------------------- 12a */
    {
      id: "pipeline",
      n: "12a",
      heading: "From canvas to production",
      maxim:
        "This pipeline has no Figma in it. That is the interesting part, and it is also the limitation.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>This is <strong>not the design-to-code chain I run at work</strong>: no Figma library, no Code Connect, no Storybook, and no Chromatic.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Concepts as artboards on a Claude Design canvas.</strong>",
            "<strong>The decision recorded in a token file</strong>, which generates both the guidelines and the app's constants.",
            "<strong>Hand-written TypeScript reads the generated values</strong>, and the application deploys to GitHub Pages on push.",
          ],
        },
        {
          kind: "stack",
          caption: "The real pipeline. The marked rows are the parts that are not off the shelf.",
          rows: [
            { key: "Concepts", value: "Three directions as artboards on a Claude Design canvas" },
            { key: "Decision", value: "design/tokens.json: every value with its rationale attached, prose bilingual by structure", mine: true },
            { key: "Generated", value: "Guidelines (EN + PL), the case-study panels, app CSS, app TypeScript constants", mine: true },
            { key: "Build guard", value: "The generator refuses to emit on undefined, unsubstituted placeholders, stringified objects, or Polish in the English output", mine: true },
            { key: "App", value: "Vite + TypeScript. No framework, no backend, no accounts" },
            { key: "Video", value: "ffmpeg: cropped to a measured grid, boomerang-looped, CRF fitted to a byte budget", mine: true },
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
            "<p>Five things worth owning up to, because they are <strong>the parts that taught me something</strong>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Fifty values were publishing the word “undefined”.</strong> An audit found that 47 of 53 token lookups in the generator would silently emit <code>undefined</code> into the guidelines and exit successfully. Six failed loudly, purely by luck. Everything I had been saying about a single source of truth was true of the architecture and not yet true of the output. The build guard exists because of this, and I verified it by deliberately breaking five things and confirming that each one now fails the build.",
            "<strong>I overclaimed, repeatedly, and had to walk it back.</strong> “Not one value typed by hand” was false. “Three departures from the HIG” was two. “29 laws, every one testable” had quietly omitted five platform laws, so the checklist is 34. “Everything derives from ×4”: the acuity factor is 3.75, and the size floors land at 4.9×, 6.8×, and 4.3×. Every one of those read beautifully and none survived being checked.",
            "<strong>I tried to improve the silhouette and made it worse.</strong> An attempt to sharpen the ears produced something between a cat and a Pikachu. I reverted rather than iterate, which was the right call roughly twenty minutes later than it should have been. The silhouette is still the weakest thing on the poster screens.",
            "<strong>One of my laws was describing the wrong variable.</strong> “120 Hz is required, or the screen flickers to the dog” sounded rigorous, had a real number behind it, and survived being written into the guidelines, designed for, and built. It conflated flicker with frame rate. The measurement that looked like it had caught the build failing had caught the law being wrong, and I only went looking because the number disagreed with me.",
            "<strong>The panels were in the wrong language.</strong> Diagrams built for a Polish working document went onto an English page, which is evidence nobody can read. The panel renderer now fails the build on Polish diacritics in an English panel, because I evidently cannot be trusted to notice.",
          ],
        },
        {
          kind: "joint",
          question: "What is still to be measured?",
          answers: [
            "<strong>Whether a dog drags at all</strong>, rather than pushes, paws, or licks the glass.",
            "<strong>Whether one swipe registers once.</strong> The 40 px threshold and the 1500 ms cooldown are estimates, and the contact-patch figures in the token file are labelled placeholders.",
            "<strong>Whether audio unlocks.</strong> iOS will not start an AudioContext without a user gesture, and the first gesture of a session belongs to a dog.",
            "<strong>Whether the Safari flag reaches a home-screen PWA.</strong> The page renders near 60 fps by default; the next test is whether the flag lifts it for an installed app.",
            "<strong>Auri's contrast threshold.</strong> “Design for Auri” rests on the direction of an age effect, not on a measured number. Rung 4 of the test protocol is where that gets checked.",
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
          caption:
            "The whole deck, straight from the clips in the app, one still each. Every candidate is a real chihuahua under an assumed name, so that a deck never reads as Karmel's own family.",
        },
        {
          kind: "thesis",
          label: "Why this is on the site at all",
          text:
            "It is a full method run end to end (research, personas, journey, blueprint, guidelines, tokens, and a built, instrumented, deployed thing) on a brief silly enough that no stakeholder was ever going to rescue a weak decision by agreeing with it. Every shortcut had to show. Also the users are unreasonably photogenic, and every candidate video is one of my own dogs under an assumed name.",
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

    /* ---------------------------------------------------------------- 14 */
    {
      id: "sources",
      n: "14",
      heading: "Sources",
      maxim:
        "The whole argument of this project is that the requirements came from published research rather than from my taste. That claim is worthless unless it is checkable.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>A bibliography, not footnotes. The academic work is named rather than linked, because titles and journals are what make a paper findable; the web sources are linked because a URL is all they have.</p>",
        },
        {
          kind: "passage",
          html:
            "<p>One claim in this project is <strong>deliberately unsupported</strong>, and it matters, because it is the claim the whole persona split rests on: that Auri&rsquo;s contrast sensitivity is lower <em>because</em> she is twelve.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Age-related lens change in dogs is well documented.</strong> A measured contrast threshold for this specific twelve-year-old is not, and I had no way to measure one.",
            "<strong>“Design for Auri” is an argument from the direction of the effect</strong>, not from a number. Rung 4 of the test protocol is where that gets checked.",
          ],
        },
        {
          kind: "passage",
          html: "<p><strong>Canine vision</strong></p>",
        },
        {
          kind: "points",
          items: [
            "Neitz, Geist, and Jacobs, <em>Color vision in the dog</em>, Visual Neuroscience, 1989: the cone peaks at 429 and 555 nm that fix the palette to two hues.",
            "<em>In vivo electroretinographic differentiation of rod, short- and long/medium-wavelength cone responses in dogs</em>: the same result confirmed by ERG.",
            "<em>Are dogs red–green colour blind?</em>, Royal Society Open Science.",
            "<em>What do dogs see? A review of vision in dogs and implications for cognition research</em>, Psychonomic Bulletin &amp; Review: acuity 20/75 and the 70 to 80 Hz flicker threshold, which are the two numbers most of this design is built on.",
            "Coile et al., 1989: canine critical flicker fusion at 80 Hz, summarised in <a href=\"https://www.sciencedirect.com/topics/immunology-and-microbiology/critical-flicker-fusion\">this overview of critical flicker fusion</a>.",
            "<em>On the use of touchscreen-based behavioural and cognitive research with dogs</em>: gesture morphology, and the recommendation of a blue and yellow pair.",
            "<em>How dogs scan familiar and inverted faces: an eye movement study</em>, Animal Cognition: fixation on the eyes, which is why the card frames a muzzle.",
            "<em>Dogs recognize familiar faces from images</em>; <em>2D or Not 2D? An fMRI study of how dogs visually process objects</em>; <em>Familiarity with images affects how dogs process life-size video projections of humans</em>: the three that decide whether a dog on a screen is a dog at all.",
          ],
        },
        {
          kind: "passage",
          html: "<p><strong>Ageing, and why this app has a point</strong></p>",
        },
        {
          kind: "points",
          items: [
            "<em>Brain training for old dogs</em>, Messerli Research Institute, Vetmeduni Vienna: the cognitive-enrichment frame the product&rsquo;s value rests on.",
            "<em>Utilising dog-computer interactions to provide mental stimulation in dogs especially during ageing</em>.",
            "<em>Aging effects on discrimination learning, logical reasoning and memory in pet dogs</em>, GeroScience.",
          ],
        },
        {
          kind: "passage",
          html: "<p><strong>Screens, flicker, and the platform</strong>: the chapter 12 correction</p>",
        },
        {
          kind: "points",
          items: [
            "<a href=\"https://www.oled-info.com/pulse-width-modulation-pwm-oled-displays\">PWM dimming in OLED displays</a>: why nearly every OLED phone dims at 240 or 480 Hz, and why that is the frequency that matters for flicker.",
            "<a href=\"https://www.dxomark.com/apple-iphone-13-pro-max-display-test-retested/\">DXOMARK, iPhone 13 Pro Max display test</a>: 480.19 Hz measured at 97.6% modulation depth, at every brightness, with no DC dimming. This is the measurement that says the screen never flickered for the dog.",
            "<a href=\"https://www.dxomark.com/flicker-the-display-affliction/\">Flicker, the display affliction</a>: flicker as luminance modulation rather than as frame rate.",
            "<a href=\"https://www.macrumors.com/how-to/enable-smoother-120hz-browsing-in-safari/\">Safari&rsquo;s 60 fps default and the flag that lifts it</a>, and <a href=\"https://bugs.webkit.org/show_bug.cgi?id=173434\">WebKit bug 173434 on 120 Hz requestAnimationFrame</a>: why the log read 60 and why that was not the hardware.",
            "<a href=\"https://www.sciencedirect.com/science/article/abs/pii/S016815912500190X\">Behavioural differences of shelter dogs under fluorescent versus LED lighting</a>: the reason the remaining flicker risk sits in the room&rsquo;s lighting rather than in the device.",
          ],
        },
        {
          kind: "passage",
          html: "<p><strong>The products in the benchmark</strong></p>",
        },
        {
          kind: "points",
          items: [
            "App for Dog: the source of &ldquo;big, full-screen buttons, so a curious nose can&rsquo;t miss them&rdquo;. BetterPawPlay: eleven nose-and-paw games, tablet flat.",
            "<em>Training senior dogs to play games on touch screens</em>, PetMD.",
            "Pawmates and &ldquo;Tinder for dogs&rdquo;, PawTracks; <em>Man makes &ldquo;Tinder for dogs&rdquo; after his senior pup couldn&rsquo;t find playmates</em>, Newsweek: the founder story that is, more or less, this brief.",
            "<em>Dating apps are swiping left on the features that made them</em>: Hinge, Bumble, and &ldquo;fewer, better, more considered signals&rdquo;. <em>The Death of the Swipe</em>, urdesignmag.",
            "<em>Where have all the &ldquo;Tinders of the job market&rdquo; gone?</em>, ToTalent; <em>Why swipe UX for jobs works (better than you&rsquo;d think)</em>: the two halves of the &ldquo;maybe later&rdquo; pile argument. Switch (app), Wikipedia.",
          ],
        },
      ],
    },
  ],
};
