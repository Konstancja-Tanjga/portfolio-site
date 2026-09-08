import type { CaseStudy } from "./types";

/**
 * The one wall on this site whose user could not be interviewed.
 *
 * It sits in `practice` rather than `product` on purpose. Nothing shipped to a
 * customer, so it is not a product; but it is a complete run of the method —
 * research to tokens to guidelines to a working build — on a brief absurd
 * enough that every shortcut shows. That is what `practice` is for.
 *
 * Held, not because the reasoning is unfinished but because six of the eight
 * panels are typeset in Polish and this site is in English. Flip `status` to
 * live once they are re-typeset; the URL does not change.
 */
export const chihuahua: CaseStudy = {
  slug: "tinder-for-chihuahua",
  title: "Tinder for Chihuahua",
  what: "A swipe interface for a dichromat with 20/75 vision, whose pointing device is a nose",
  lead:
    "Karmel and Auri are chihuahuas, and they would like to meet someone who is neither mum nor son. So they get an app, on an old iPhone, and they operate it themselves. Speculative design taken at face value: assume a dog can work a touchscreen, and the brief that follows is not a joke — it is a hard accessibility problem with published numbers attached.",
  status: {
    state: "held",
    until: "once the panels are re-typeset in English",
    why: "The reasoning is finished and the app is live. The panels are still in Polish, and a wall of Polish diagrams on an English page is evidence nobody can read.",
  },
  group: "practice",
  cover: {
    kicker: "PERSONAL PROJECT · SPECULATIVE DESIGN",
    headline: ["Tinder for", "Chihuahua"],
    subline: "Designing for a user who cannot read, tap, or be interviewed",
    stamp: "RESEARCH · GUIDELINES · TOKENS · PWA · TESTING",
    credit: "Design, research and build · Personal project · 2026",
    shot: { slot: "00 · Cover" },
  },
  meta: [
    { label: "Role", value: "Everything — research, guidelines, design system, build" },
    { label: "Users", value: "Karmel, 5, and Auri, 12, his mother. Plus one human matchmaker" },
    { label: "Frame", value: "Speculative design — the question of whether a dog can work a touchscreen is set aside on purpose" },
    { label: "Scope", value: "Nine screens in two scales, 34 interface laws, a token pipeline, a working PWA" },
    { label: "Live", value: "Running on GitHub Pages — open it on a phone", href: "https://konstancja-tanjga.github.io/Tinder-for-chihuahua/" },
    { label: "Source", value: "Public, including the guidelines and the token source", href: "https://github.com/Konstancja-Tanjga/Tinder-for-chihuahua" },
    { label: "Period", value: "September 2026" },
  ],
  chapters: [
    /* ---------------------------------------------------------------- 01 */
    {
      id: "the-promise",
      n: "01",
      heading: "The promise",
      maxim:
        "A user who cannot be interviewed does not remove the need for requirements. It removes the shortcut.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>My two chihuahuas gave me a brief. Karmel is five, Auri is twelve and she is his mother, and what they are looking for is a kindred spirit who is neither of those two things to the other. I promised them an app. They got one, on an old iPhone 13 Pro Max, and they work it themselves.</p><p>The frame is <strong>speculative design</strong>, and I want to be exact about what that buys. It is not permission to hand-wave. It is one assumption held constant — <em>a dog can operate a touchscreen</em> — so that everything downstream of it has to be answered properly. Take that one assumption and the rest is a genuine design problem: a user with two-colour vision, roughly a quarter of your visual acuity, no reading, no language, a pointing device that is wet and larger than a fingertip, and no way to tell you when you got it wrong.</p><p>I have designed for enterprise users I could not get access to. This is the same problem with the excuses removed.</p>",
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
            "<p>That one sentence is what makes the thing buildable. Every dog-dating app in the benchmark died of the same disease: a two-sided marketplace needs both sides on day one, and a niche marketplace never gets them. Defining the output as a <em>signal</em> rather than a <em>match</em> makes v1 one-sided and local. No second user. No network. No cold start.</p>",
        },
        {
          kind: "spec",
          caption: "The brief, as constraints.",
          rows: [
            { key: "primary user", value: "Dichromat, 20/75 acuity, non-reader, input organ: a nose" },
            { key: "secondary user", value: "A human matchmaker, on the same device, in a different mode" },
            { key: "device", value: "iPhone 13 Pro Max — named in the brief, and for a reason (see 09)" },
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
      maxim: "The user could not be interviewed. He was, however, available for testing.",
      standfirst:
        "Ten findings from the literature on canine vision and motor behaviour, each one paired with the design requirement it forces.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>With no interviews and no analytics, the requirements had to come from somewhere else, so they came from published research. The rule I set myself was that every finding on the panel had to arrive with a design consequence attached — a finding with no consequence is trivia, and a requirement with no finding behind it is my taste wearing a lab coat.</p><p>Four of the ten did most of the work:</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Two hues, and only two.</strong> Dogs are dichromats, with cone peaks near 429–435 nm and near 555 nm. Red and green are not distinguishable to them. So blue and yellow-green carry every piece of meaning in the interface, and black and white are permitted to carry none — they are ground and figure, never signal.",
            "<strong>Everything is roughly four times the size.</strong> Canine acuity runs about 20/75 against a human 20/20 — a factor of 3.75. The dog-scale type and target floors are that factor applied, not “a bit bigger”. Human mode, on the same device, keeps human sizes.",
            "<strong>120 Hz is a hardware requirement, not a nicety.</strong> Canine flicker fusion sits at 70–80 Hz against a human ~60 Hz. On a 60 Hz panel a screen visibly flickers to a dog. This is the entire reason a specific handset is named in the brief.",
            "<strong>The native gesture is a drag, not a tap.</strong> A nose does not land as a point. It lands as a large, multi-point, moving contact patch. Designing tap targets for that user is designing for a finger that does not exist.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch02-research.png",
          caption:
            "Ten findings, each paired with the requirement it forces. The numbers on this panel are not illustrative — they are the same numbers the app compiles against.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 03 */
    {
      id: "personas",
      n: "03",
      heading: "Two dogs, two thresholds",
      maxim: "Same species, same dichromacy, different contrast floor. That difference is the whole persona.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>It would have been easy to write one persona called “the dog” and move on. But Karmel is five and Auri is twelve, and a twelve-year-old dog's lens has yellowed and her contrast sensitivity has dropped. They share a sensory baseline and they do not share a threshold.</p><p>So the persona work resolves to a single operating rule, and it is the one line from this chapter I would defend in a review:</p>",
        },
        {
          kind: "pull",
          text: "Design for Auri. Test with Karmel.",
        },
        {
          kind: "passage",
          html:
            "<p>Auri sets the floor because she is the harder case — get contrast and size right for her and Karmel is covered for free. Karmel does the testing because he is five, motivated, and will actually work the screen for a treat. Designing for the median of the two would have produced an interface that fails one user and bores the other. This is not a dog-specific insight; it is the same reason you size for the worst-case user and recruit for the willing one.</p>",
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
            "<p>Map the loop and something structural falls out. The reward for a swipe is <em>a treat, from a human hand</em>. It is not a confetti animation, it is not a haptic, it is not a badge. Which means the reinforcement loop does not close on the screen — it closes in the room.</p><p>Look at the “Screen” lane on the panel and you will find two gaps in it. The second one, at step 08, is the reward. The single most important step in the entire product is a step where the correct behaviour of the application is to sit still and stay out of the way.</p><p>That is an architectural finding, not a copy note. It is why there is a screen (D4) whose only job is to announce that a treat is coming and then get off the stage, and it is why the app has no mechanism for congratulating anyone.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch04-journey-sesja-psa.png",
          caption:
            "Eleven steps. Four of them happen outside the application entirely — which is the most unusual property this product has.",
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
            "<p>The human journey is five steps and it exists to make one thing structurally true: the app cannot arrange a meeting. It can only report a preference. Step 04 is a human confirmation, and it is deliberately lifted from the double opt-in pattern that Tinder and Bumble use — except that here the two consenting parties are not two daters. They are <em>the one who swiped</em> and <em>the one who is responsible for what happens next</em>.</p><p>Which is also the honest answer to the obvious objection. A dog choosing another dog from a four-second video is choosing on the least informative channel available to it. Dogs recognise each other by smell. The interface knows this about itself, and that is exactly why the decision is escalated to a human instead of being called a match.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch05-journey-swatka.png",
          caption: "Five steps, from setting the phone down to a meeting in the park.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 06 */
    {
      id: "blueprint",
      n: "06",
      heading: "Service blueprint",
      maxim:
        "The journey says what happens. The blueprint says what has to hold underneath for it to happen.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Front-stage against back-stage, with a line of interaction, a line of visibility, and a bottom row of risks. Everything below the first line is invisible to Karmel and the session does not occur without it.</p><p>The risk row is where the numbers in this project were actually decided. The most instructive entry:</p>",
        },
        {
          kind: "spec",
          caption: "One risk, and the three decisions it produced.",
          rows: [
            { key: "risk", value: "A wet nose registers one swipe as three" },
            { key: "→", value: "Take the centroid of the contact patch and ignore how many touch points there are" },
            { key: "→", value: "Require 40 px of travel before anything counts as intent" },
            { key: "→", value: "Refuse all input for 1500 ms afterwards — and make undo a core function, not a courtesy" },
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
        "The card deck has already completed a full life cycle in dating and in recruitment. Their failures are free.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Looking only at dog apps would have been a mistake, because there are barely any and the ones that exist mostly failed for market reasons rather than design ones. The interaction pattern I was borrowing — a deck of cards, a binary swipe, a deferred outcome — has run its entire arc in two other categories, so I went and read those instead.</p><p>The most useful thing in the whole benchmark was the graveyard of “Tinder for jobs” apps. They all failed in the same way, and the diagnosis transfers directly:</p>",
        },
        {
          kind: "pull",
          text: "A swipe that only moves something onto a “maybe later” pile has not saved anyone any work. It has just relocated the decision.",
        },
        {
          kind: "passage",
          html:
            "<p>Swiping is only a good primitive when the gesture <em>is</em> the decision. On the dating side it works because a right-swipe is a real, consequential commitment. On the job side it failed because a right-swipe was an expression of vague interest that a human still had to process later — the effort was moved, not removed.</p><p>That is the trap this project was walking straight into, and it is why the output is defined as a ranking with a named human owner. The swipe is not a filing action. It is the whole of the dog's contribution, and it is complete.</p>",
        },
        { kind: "shot", width: "wall", slot: "07 · Benchmark — two families of dog apps, plus the transferable findings from dating and recruitment" },
      ],
    },

    /* ---------------------------------------------------------------- 08 */
    {
      id: "directions",
      n: "08",
      heading: "Three visual directions",
      maxim: "A direction with no named weakness has not been evaluated, only chosen.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Three directions, the same screens each time, each with an argument for and an argument against. The one that won I call the <em>poster</em> direction: enormous flat shapes, no gradients, no rounded corners, two hues doing all the semantic work on black.</p><p>It won because it is the direction that most nearly <em>is</em> the research. When your palette is fixed at two hues by the user's cone response, and your type has to be four times human size, and soft edges are the first thing to disappear at 20/75 acuity, you are already most of the way to poster design whether you meant to be or not.</p>",
        },
        {
          kind: "thesis",
          label: "And its weakness, named",
          text:
            "In human mode the same language is shouting. Poster scale on H1–H4 gives a matchmaker four-inch numerals to read a subtle ranking off, which is why human mode ended up needing its own scale rather than a smaller copy of the dog one.",
        },
        { kind: "shot", width: "wall", slot: "08 · Three directions on the same screens, each with its argument for and against" },
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
        "29 numbered laws in six groups, plus five platform laws — generated from the token file, so not one number in the document is typed by hand.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>My first instinct was to adapt Apple's HIG. That was wrong, and it took writing a page of the adaptation to see why. The HIG describe a specific animal: a fingertip, a 44-point target, red meaning danger, text carrying the content, a 60 Hz display being fine. Every single one of those propositions is false for this user. Adapting a document whose every premise has failed is not adaptation, it is fan fiction.</p><p>So I wrote the guidelines the project actually needed, and drew the boundary explicitly: <strong>CIG govern dog mode, HIG govern human mode.</strong> Human mode really is an iOS surface for a person and it should behave like one — so it obeys the HIG, with exactly <strong>two</strong> recorded departures (semantic colour, and typography), each written down with its reason instead of quietly taken.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "34", label: "laws in the compliance checklist — 29 canine, 5 platform" },
            { value: "2", label: "recorded departures from the HIG in human mode" },
            { value: "1", label: "source of truth: tokens.json" },
            { value: "0", label: "numbers in the document typed by hand" },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>The single source of truth matters more than the laws do. <code>design/tokens.json</code> holds every colour, size, timing and threshold with its rationale attached, and three things are generated from it: the guidelines document in English, the working copy in Polish, and the app's own CSS and TypeScript constants. The guidelines cannot drift from the build, because both are outputs of the same file.</p><p>The generator refuses to write a file at all if a value came out <code>undefined</code>, if a placeholder was left unsubstituted, if an object stringified into the page, or if Polish text appears in the English output. That last check exists because it caught me twice.</p>",
        },
        {
          kind: "spec",
          caption: "Four of the thirty-four.",
          rows: [
            { key: "CIG-2.1", value: "Meaning is carried by blue (#0033FF) and acid (#D6F000) only. Black and white are ground and figure and never signal" },
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
            "The laws, their groups, and the split of responsibility between CIG and HIG. This panel is generated; the numbers on it cannot disagree with the app.",
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
          kind: "passage",
          html:
            "<p>Five screens: choose the dog, warm up, the card, the reward, the end of the session. The entire interaction vocabulary is one horizontal drag. Tap, long-press, double-tap, pinch and edge-swipe are all forbidden — with a single carve-out on the warm-up screen, where the whole display is one target and a tap is accepted because the point of that screen is to reward any contact at all.</p><p>The card screen divides into two zones, 214 px each, running the full 926 px height. A miss is geometrically impossible. There is no cancel region, no dead margin, no small control anywhere on the surface.</p><p>My favourite screen is the last one. D5 ends the session, and its job is to be <em>unrewarding</em>: no acid, no motion, no affordance suggesting there is more. The app will not top the deck up. Interfaces designed for humans spend their effort on retention; this one deliberately spends it on letting the user lose interest and walk away, because a dog that keeps swiping past its attention span is producing noise, not preferences.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch10-dog-mode.png",
          caption:
            "D1 to D5 at dog scale. Two hues, flat fills, square corners, and type sized by the acuity factor rather than by eye.",
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
            "<p>Human mode is where the ranking is read. It is on the same handset, and it is a completely different design system: 26 px statistics instead of 112 px display type, 44 px targets instead of 214 px zones, real information density, actual prose. It obeys the HIG, because a person is using it.</p><p>The interesting problem was the door between the two modes. It has to be reachable by a human and unreachable by a nose, and it cannot be a button, because a button large enough for a person to find is a button a dog will eventually stand on. The answer is a two-finger gesture with a genuinely wide finger spread, available only on D5. Nothing about a nose can produce two contact points that far apart.</p><p>H1 also carries the sentence the whole product hangs on, in plain language and at the top: <em>this is a preference signal, not a match.</em> The most likely failure of this product is not a bug. It is a human over-reading the ranking, so the interface says so where it cannot be missed.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/tinder-for-chihuahua/wall/ch11-human-mode.png",
          caption:
            "H1 to H4 at human scale: the ranking, the candidates, decision latency over the session, and the session history.",
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
            "<p>Design decided the palette, the scale and the layout. It could not decide any of the following, and pretending otherwise would have been the dishonest version of this case study:</p>",
        },
        {
          kind: "points",
            items: [
            "<strong>Will a dog drag at all,</strong> rather than push, paw, or simply lick the glass?",
            "<strong>Does one swipe register once?</strong> The 40 px threshold and the 1500 ms cooldown are estimates. The contact-patch figures in the token file are still placeholders and are marked as such.",
            "<strong>Does audio unlock?</strong> iOS will not start an AudioContext without a user gesture, and the first gesture in a session belongs to a dog — which is one of the reasons the warm-up screen exists at all.",
          ],
        },
        {
          kind: "passage",
          html:
            "<p>So the vertical slice is a real, installable PWA rather than a prototype, and it instruments itself: contact-patch size in millimetres, decision latency per card, frame rate, and every rejected event with the reason it was rejected — below threshold, or inside cooldown. All of it attributed to whichever dog is in the session, because the whole persona argument depends on Karmel and Auri producing different numbers.</p><p>Mouse input is tagged separately and excluded from the patch statistics. I added mouse support because I was testing on a laptop with no touchscreen, and a laptop trackpad politely reporting a 3 mm contact patch would have quietly poisoned the only dataset the project has.</p>",
        },
        {
          kind: "stack",
          caption: "The pipeline, and which parts are mine rather than off the shelf.",
          rows: [
            { key: "Source of truth", value: "design/tokens.json — values with their rationale attached", mine: true },
            { key: "Generated", value: "Guidelines (EN + PL), app CSS, app TypeScript constants", mine: true },
            { key: "Build guard", value: "The generator refuses to emit on undefined, unsubstituted placeholders, stringified objects, or Polish in the English output", mine: true },
            { key: "App", value: "Vite + TypeScript. No framework, no backend, no accounts" },
            { key: "Video", value: "ffmpeg — cropped to a measured grid, boomerang-looped, CRF fitted to a byte budget", mine: true },
            { key: "Hosting", value: "GitHub Pages. HTTPS, which is what makes it installable as a PWA" },
          ],
        },
        { kind: "shot", width: "wall", slot: "12 · The test protocol — four rungs, from laptop to a dog on the floor" },
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
            "<p>Four things worth admitting, because they are the parts that taught me something.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Fifty values were publishing the word “undefined”.</strong> An audit found that 47 of 53 token lookups in the generator would silently emit <code>undefined</code> into the guidelines and exit successfully. Six of them failed loudly, and only by luck. Everything I had said about a single source of truth was true of the architecture and not yet true of the output. The build guard exists because of this, and I verified it by deliberately breaking five things and confirming each one now fails the build.",
            "<strong>I overclaimed, repeatedly, and had to walk it back.</strong> “Not one value typed by hand” was false. “Three departures from the HIG” was two. “29 laws, every one testable” omitted five platform laws, so the checklist is 34. “Everything derives from ×4” — the acuity factor is 3.75, and the size floors actually land at 4.9×, 6.8× and 4.3×. Each of those read well and none of them survived being checked.",
            "<strong>The palette is still hard-coded in the artboards.</strong> Ten instances of the blue and fourteen of the acid are literals in the canvas files, which do not read the token file. This is exactly the drift the pipeline was built to prevent, still present in the layer I have not automated. It is written down as debt rather than quietly left out.",
            "<strong>I tried to improve the silhouette and made it worse.</strong> An attempt to sharpen the ears turned the dog into something between a cat and a Pikachu. I reverted it rather than iterate on it, which was the right call about twenty minutes later than it should have been.",
          ],
        },
        {
          kind: "thesis",
          label: "Why this is on the site at all",
          text:
            "It is a whole method run end to end — research to personas to journey to blueprint to guidelines to tokens to a built, instrumented, deployed thing — on a brief silly enough that no stakeholder was going to rescue a weak decision by agreeing with it. Every shortcut had to show. Also, the users are extremely photogenic, and the candidate videos are all of my own dogs under assumed names.",
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
