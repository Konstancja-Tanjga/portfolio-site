import type { CaseStudy } from "./types";

/**
 * The one wall on this site whose user could not be interviewed.
 *
 * It sits in `practice` rather than `product` on purpose. Nothing shipped to a
 * customer, so it is not a product; but it is a complete run of the method —
 * research to tokens to guidelines to a working build — on a brief absurd
 * enough that every shortcut shows. That is what `practice` is for.
 *
 * Panels are the same 1800px exports the repo uses, in English. The two that
 * do not exist yet stand as `slot`, so the wall stays walkable and the missing
 * ones are visibly missing rather than quietly dropped.
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
            "<p>No interviews, no analytics, no way to ask. So the requirements came from published research instead, with one rule: every finding has to arrive with a design consequence attached. A finding with no consequence is trivia, and a requirement with no finding behind it is my taste wearing a lab coat.</p><p>Four of the ten did most of the heavy lifting:</p>",
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
          kind: "passage",
          html:
            "<p>Auri sets the floor because she is the harder case: get contrast and size right for her and Karmel is covered for free. Karmel does the testing because he is five, motivated, and will absolutely work a screen for a treat. Designing for the average of the two would have produced something that fails one user and bores the other. None of which is dog-specific — it is the ordinary reason you size for the worst-case user and recruit the willing one.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch03-personas.png",
          caption:
            "Two canine personas described by sensory profile and motor behaviour, plus the human persona described by role. No favourite colours, no lifestyle photography.",
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
          kind: "passage",
          html:
            "<p>Map the loop and something structural falls straight out. The reward for a swipe is <em>a treat, from a human hand</em>. Not confetti, not a haptic, not a badge, not a streak. Which means the reinforcement loop does not close on the screen at all — it closes in the room.</p><p>Look at the “Screen” lane and you will find two gaps in it. The second, at step 08, is the reward. The single most important step in the whole product is one where the correct behaviour of the application is to sit quietly and stay out of the way.</p><p>That is an architectural finding, not a copy note. It is why D4 exists purely to announce that a treat is coming and then get off stage, and it is why the app has no mechanism whatsoever for congratulating anybody.</p>",
        },
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
            "<p>The human journey is five steps and exists to make one thing structurally true: the app cannot arrange a meeting. It can only report a preference. Step 04 is a human confirmation, lifted more or less directly from the double opt-in that Tinder and Bumble run — except the two consenting parties here are not two daters. They are <em>the one who swiped</em> and <em>the one who is responsible for what happens next</em>.</p><p>Which is also the honest answer to the obvious objection. A dog picking another dog off a four-second video is choosing on the least informative channel available to it, because dogs recognise each other by smell. The interface knows this about itself. That is precisely why the decision gets escalated to a human instead of being dressed up as a match.</p>",
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
            "<p>Front-stage against back-stage, with a line of interaction, a line of visibility and a bottom row of risks. Everything below the first line is invisible to Karmel, and without it there is no session.</p><p>The risk row is where the numbers in this project were actually decided. My favourite entry, because it sounds silly and then turns into three real constraints:</p>",
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

    /* --------------------------------------------------------------- 06a */
    {
      id: "scope",
      n: "06a",
      heading: "Four screens became nine",
      maxim: "This is what doing the research before the design buys you, stated as a number.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>My original list had four screens. Research added five, and it is the most concrete argument for sequencing I have ever had on a project of my own. Every addition exists because a finding demanded it, not because a flow felt thin.</p>",
        },
        {
          kind: "spec",
          caption: "The five that were not in the first list.",
          rows: [
            { key: "D2 Warm-up", value: "Calibrates the contact patch for this dog and builds the nose → consequence association. Also the only place audio can legally unlock" },
            { key: "D5 End of session", value: "A calm terminal state instead of another card. The deck is finished and the app says so by going quiet" },
            { key: "H1 Session result", value: "The preference ranking and decision times. This screen is the actual product" },
            { key: "H4 Session setup", value: "Deck length, sounds, video spec, and the per-dog calibration measured back on D2" },
            { key: "the mode gesture", value: "Not a screen, but it needed designing: a way in that a nose cannot perform" },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>D4 was not added so much as redefined. It started life as a “match moment” — the celebratory beat every dating app has. It is now a <em>reward cue</em>: a bark, and a signal to the human that it is treat o'clock. Same slot in the flow, completely different job, because the celebration was for me and the cue is for the dog.</p>",
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
          kind: "passage",
          html:
            "<p>That line is the diagnosis for the entire graveyard of “Tinder for jobs” apps, and it is the trap this project was strolling directly into. Swiping only works as a primitive when the gesture <em>is</em> the decision. On the dating side a right-swipe is a real commitment. On the job side it was a vague expression of interest that a human still had to process later — effort moved, not removed. Which is why the output here is a ranking with a named human owner: the dog's swipe is not a filing action, it is the whole of the dog's contribution, and it is finished.</p>",
        },
        { kind: "shot", width: "wall", slot: "07 · Benchmark — two families of dog apps, plus the transferable findings from dating and recruitment" },
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
          kind: "passage",
          html:
            "<p>Three directions, explored as artboards on a Claude Design canvas: <strong>A soft</strong>, <strong>B geometric</strong>, <strong>C poster</strong>. C won, and it won on a criterion rather than a mood — the highest available contrast between figure and ground, which is what Auri's raised contrast threshold requires. The personas had already settled who sets the floor, so the visual decision was largely pre-made. That is the nicest thing that can happen to a visual decision.</p><p>It helps that C is the direction that most nearly <em>is</em> the research. When your palette is pinned to two hues by cone response, your type has to be four times human size, and soft edges are the first thing to dissolve at 20/75, you are already most of the way to poster design whether you intended it or not.</p><p>One idea came across from B and survived: explicit values in monospace, right next to the thing they govern. That is now how the token sheet reads.</p>",
        },
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
          kind: "passage",
          html:
            "<p>The single source of truth matters rather more than the laws do. <code>design/tokens.json</code> holds every colour, size, timing and threshold with its rationale attached, and three things are generated from it: the guidelines in English, the working copy in Polish, and the app's own CSS and TypeScript constants. The guidelines cannot drift from the build, because both are outputs of the same file. Prose in the token file is bilingual by structure — <code>{en, pl}</code> — which is how one file produces a specification and a working document without either being a translation of the other.</p>",
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
          kind: "passage",
          html:
            "<p>The generator refuses to write a file at all if a value came out <code>undefined</code>, if a placeholder was left unsubstituted, if an object stringified itself into the page, or if Polish text turns up in the English output. That last check exists because it caught me twice, which is exactly two times more than I would like to admit.</p>",
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
            "<p>Five screens: choose the dog, warm up, the card, the reward cue, the end. The entire interaction vocabulary is one horizontal drag. Tap, long-press, double-tap, pinch and edge-swipe are all forbidden, with a single carve-out on the warm-up screen where the whole display is one target and a tap counts, because the point of that screen is to reward any contact at all.</p><p>The card screen divides into two zones, 214 px each, running the full 926 px height. Missing is geometrically impossible. There is no cancel region, no dead margin and no small control anywhere on the surface. The one strip at human scale along the top is deliberate: undo and the deck counter belong to the person sitting alongside, and the difference in scale is what says so.</p><p>My favourite screen is the last one. D5 ends the session and its job is to be <em>unrewarding</em>: no acid, no motion, no affordance hinting there is more. The app will not top the deck up. Interfaces built for humans spend their effort on retention; this one deliberately spends it on letting the user lose interest and wander off, because a dog swiping past its attention span is producing noise, not preferences.</p>",
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
          kind: "passage",
          html:
            "<p>So the vertical slice is a real installable PWA rather than a prototype, and it instruments itself: contact-patch size in millimetres, decision latency per card, frame rate, and every rejected event with the reason it was rejected — below threshold, or inside cooldown. All attributed to whichever dog is in the session, because the entire persona argument depends on Karmel and Auri producing different numbers.</p><p>Mouse input is tagged separately and excluded from the patch statistics. I added mouse support because I was testing on a laptop with no touchscreen, and a trackpad politely reporting a 3 mm contact patch would have quietly poisoned the only dataset this project has.</p>",
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
        { kind: "shot", width: "wall", slot: "12 · The test protocol — four rungs, from laptop to a dog on the floor" },
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
        {
          kind: "thesis",
          label: "What that costs",
          text:
            "No Figma means no component library anyone else could consume, and no visual regression safety net. It also means the palette is still hard-coded in the canvas artboards — ten instances of the blue, fourteen of the acid — which is exactly the drift the token pipeline exists to prevent, sitting in the one layer I have not automated. Figma variables, a Storybook and Code Connect are the recorded next step, not a thing that happened.",
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
          kind: "thesis",
          label: "Why this is on the site at all",
          text:
            "It is a full method run end to end — research, personas, journey, blueprint, guidelines, tokens, and a built, instrumented, deployed thing — on a brief silly enough that no stakeholder was ever going to rescue a weak decision by agreeing with it. Every shortcut had to show. Also the users are unreasonably photogenic, and every candidate video is one of my own dogs under an assumed name.",
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
