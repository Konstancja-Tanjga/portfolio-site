import type { CaseStudy } from "./types";

/**
 * The words are text, not pictures of text. This wall used to be twelve PNG
 * exports from Figma (frames 01, 02a, 03–12) with every paragraph typeset
 * inside them. Apart from the cover and the live-product chapter, images are
 * screens and diagrams only, cropped from those frames into
 * /work/elly-ai-assistant/screens/.
 *
 * Every number on this page comes from those frames: the study counts (13
 * participants, 13 sessions of 45 minutes, 14–25 April 2025), the scores, the
 * panel widths and the 331 prototype interactions. Nothing is rounded up.
 */
export const elly: CaseStudy = {
  slug: "elly-ai-assistant",
  title: "Elly",
  what: "The platform's first AI assistant, designed from zero",
  lead:
    "Streaming answers over the product documentation, with citations and error states. The work was in the states that decide whether a user trusts the answer.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · AI IN PRODUCTION",
    headline: ["AI assistant", "for ERP"],
    subline: "Elly, for APplus ERP",
    stamp: "STREAMING · CITATIONS · ERROR STATES · VOICE",
    credit: "Lead Designer, UX Engineer · Asseco Solutions · 2025",
    art: { src: "/work/elly-ai-assistant/device/answer-desktop-2400.webp" },
    shot: { src: "/work/elly-ai-assistant/01.png" },
    layers: [
      { src: "/work/elly-ai-assistant/device/answer-desktop-2400.webp", label: "An answer with citations" },
      { src: "/work/elly-ai-assistant/device/resources-desktop-2400.webp", label: "Resources" },
      { src: "/work/elly-ai-assistant/device/proto-text-2400.webp", label: "The scope answer" },
      { src: "/work/elly-ai-assistant/device/proto-voice-2400.webp", label: "Voice mode" },
    ],
  },
  meta: [
    { label: "Role", value: "Lead Designer, UX Engineer; the only designer on this product" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP, Elly" },
    { label: "Design system", value: "FOX v2.2", href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs" },
    { label: "Team", value: "A PM, a requirements engineer, developers, QA, and me as the only designer" },
    { label: "Period", value: "2024 to April 2025" },
    { label: "Released", value: "April 2025, with APplus 9" },
    { label: "Research", value: "13 consultants and solution architects" },
    { label: "Product context", value: "APplus: ERP-System des Jahres, Gold in the User Experience category, 2025 and 2026" },
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
              key: "Context",
              value:
                "APplus is an ERP used by mid-sized and large manufacturers across the DACH region. Elly Smart Help is its first AI assistant, on desktop and mobile, with voice input. It answers questions from the APplus documentation.",
            },
            {
              key: "Problem",
              value:
                "APplus documentation is enormous, versioned, and partly out of date at any given moment. An assistant answering from it can be fluent and wrong at the same time, and the interface is the only place a user can find out which.",
            },
            {
              key: "My role and scope",
              value:
                "The only designer on the product, working with a PM, a requirements engineer, developers, and QA: the audit of existing assistants, the layout exploration, twelve use cases, a clickable prototype, a moderated study with 13 people, and the design that shipped.",
            },
            {
              key: "Decision 1",
              value: "The panel is docked beside the page instead of floating over it: 380px by default, resizable to 580px.",
            },
            {
              key: "Decision 2",
              value: "Citations sit at the claim. Numbered markers resolve in a Resources block with the actual document identifiers.",
            },
            {
              key: "Decision 3",
              value: "Every way an answer can fail has its own designed state and its own recovery path.",
            },
            {
              key: "Outcome",
              value:
                "Shipped in April 2025 with APplus 9. Before release, a moderated study with 13 internal consultants and solution architects, 14–25 April 2025, on a prototype with 331 wired interactions: 13 of 13 found Elly without prompting, 12 of 13 would use it again, and trust scored lowest of every dimension.",
            },
            {
              key: "Period and team",
              value: "2024 to April 2025. A PM, a requirements engineer, developers, QA, and me.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim: "The design question was what the panel has to show before a user is entitled to believe it.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Elly Smart Help is <strong>the first AI assistant shipped in APplus ERP</strong>, on desktop and mobile, with voice input.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>It answers from the documentation.</strong> Every answer comes from the APplus documentation, with citations and error states.",
            "<strong>The users are manufacturers.</strong> APplus is an ERP used by mid-sized and large companies across the DACH region.",
            "<strong>The demo is not the test.</strong> Any assistant demo can answer a question; what matters is the moment after, when a consultant takes the answer into a customer call and repeats it as fact.",
          ],
        },
        {
          kind: "carousel",
          items: [
            { src: "/work/elly-ai-assistant/device/answer-desktop-2400.webp", frame: "macbook", title: "An answer", body: "On a Flow board, with inline markers at each claim and the Resources block collapsed." },
            { src: "/work/elly-ai-assistant/device/resources-desktop-2400.webp", frame: "macbook", title: "Resources", body: "Expanded: three document identifiers behind markers [1] to [3], in the customer's own documentation namespace." },
            { src: "/work/elly-ai-assistant/device/proto-text-2400.webp", frame: "macbook", title: "The scope answer", body: "What Elly says when asked what she is, with the close tooltip warning that history won't be saved." },
            { src: "/work/elly-ai-assistant/device/proto-voice-2400.webp", frame: "macbook", title: "Voice mode", body: "“Chats won't be saved”, the avatar in the centre of the panel, Pause and Finish." },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/elly-ai-assistant/screens/devices.png",
          caption:
            "Elly docked beside a Flow board on desktop, and on a phone in voice mode and text mode. Every screen carries the same footer: Elly accesses APplus documentation, and Elly can make mistakes.",
        },
        {
          kind: "passage",
          html:
            "<p><strong>What I owned:</strong> the design of the assistant from zero, as lead and only designer, working with a PM, a requirements engineer, developers, and QA, from 2024 until the APplus 9 release in April 2025.</p>",
        },
      ],
    },
    {
      id: "hard-brief",
      n: "02",
      heading: "Why this is a hard brief",
      maxim: "All three constraints are interface problems before they are model problems.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>An answer assembled from four documents is four claims.</strong> Each has a different level of support, and a paragraph flattens that distinction.",
            "<strong>Documentation goes stale.</strong> An answer can be correct against a page that describes a screen that no longer exists in the product.",
            "<strong>The first answer decides.</strong> A user who has never seen an assistant inside their ERP does not know what it is for, and will judge the whole thing on the first answer it gives them.",
          ],
        },
        {
          kind: "pull",
          text: "None of the three is fixed by a better model. Each is fixed by what the panel shows.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/elly-ai-assistant/09.png",
          caption:
            "The panel across sizes: a model failure with Try again, voice mode, an answer with numbered sources and a Resources list, and a suggested prompt in the empty panel.",
        },
      ],
    },
    {
      id: "discovery",
      n: "03",
      heading: "Discovery and research",
      maxim: "In APplus the assistant must never take the screen away from the work.",
      standfirst:
        "Before drawing anything: an audit of how assistants are placed in software, and a teardown of the one closest to our own product.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>I catalogued three archetypes rather than collecting inspiration. For each one I noted where it lives, what triggers it, and which job it is good at.</p>",
        },
        {
          kind: "spec",
          caption: "Three archetypes. Only the third fits an ERP, and knowing why mattered later.",
          rows: [
            {
              key: "Floating bot",
              value: "An icon in the corner that expands into a conversation panel, triggered by a click or by inactivity. Cheap to add, easy to ignore.",
            },
            {
              key: "Embedded bot",
              value: "Present in the layout at all times and active on page load, inviting interaction before the user has a question. Suits products where help is the primary task.",
            },
            {
              key: "Collapsible panel",
              value: "Slides out from the shell on click, keyboard, or voice, and can open itself based on behaviour. Suits products where help is secondary and the work is the point.",
            },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/elly-ai-assistant/screens/audit-aria.png",
          hotspots: [
            { x: 14, y: 23, text: "Switching between suggestions." },
            { x: 15, y: 50, text: "The chat entry icon on desktop." },
            { x: 76, y: 35, text: "Navigation on mobile." },
            { x: 86, y: 30, text: "The chat entry icon on mobile." },
            { x: 60, y: 86, text: "Early Elly drafts set against Aria's question, thinking, and answer-with-links states." },
          ],
          caption:
            "The teardown: Opera's Aria assistant on desktop and mobile, annotated for suggestion switching, navigation, and the chat entry icon. Bottom right, early Elly drafts set against Aria's question, thinking, and answer-with-links states.",
        },
      ],
    },
    {
      id: "exploration",
      n: "04",
      heading: "Exploration",
      maxim: "Overlap the work, or make room for it.",
      standfirst:
        "Entry point, affordance, and footprint, each decided explicitly so that users find the assistant.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Exploration came down to one question with a real cost attached, so I built both answers instead of arguing about them.</p>",
        },
        {
          kind: "spec",
          rows: [
            {
              key: "Option 1 · overlay",
              value:
                "The panel floats over the page. Nothing in the layout moves, the assistant is fast to open and dismiss, and the user keeps their scroll position. But it covers the data they were reading, which in an ERP is often exactly the data the question is about.",
            },
            {
              key: "Option 2 · pinned",
              value:
                "The panel is pinned beside the page and the content reflows to make room. Nothing is hidden, and question and answer sit next to the record they concern. The price is a narrower workspace and a layout that has to survive being squeezed.",
            },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/elly-ai-assistant/screens/exploration-options.png",
          hotspots: [
            { x: 14, y: 15, text: "Space: up to 20 per cent of the page." },
            { x: 7, y: 44, text: "One click to Elly, from the side menu." },
            { x: 45, y: 13, text: "A human face at 42px." },
            { x: 52, y: 30, text: "Option 1: the panel overlaps the page and covers the data the question is about." },
            { x: 79, y: 30, text: "Option 2: pinned beside the page, and the content reflows to make room." },
            { x: 45, y: 48, text: "Stars or a help bulb for the symbol? Still open on the board." },
          ],
          caption:
            "Both options built on a Flow board, with the working notes: space up to 20 per cent of the page, one click from the side menu, a human face at 42px, and the open question of stars or a help bulb for the symbol.",
        },
        {
          kind: "passage",
          html:
            "<p><strong>Pinned won.</strong> In an ERP the assistant is never the task, and an answer you cannot check against the screen underneath it is worth less than the space it costs. That decision set the rest: a fixed 380px default, resizable to 580px, and a conversation flow specified at both widths.</p>",
        },
        {
          kind: "points",
          items: [
            "One click to Elly, from the side menu",
            "A visible button, with colour and symbol argued out rather than assumed",
            "A human face at 42px, against stars and a help bulb",
            "A footprint capped at 20 per cent of the page",
          ],
        },
        {
          kind: "passage",
          html:
            "<p>Four smaller decisions followed from <strong>the promise the panel makes: documentation answers</strong>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>A human face, not a sparkle or a robot.</strong> The avatar matches what the panel promises.",
            "<strong>Text and voice are two modes of one assistant.</strong> Neither is a separate feature.",
            "<strong>A greeting and suggested prompts in a carousel.</strong> They exist for users who would not otherwise know what to ask.",
            "<strong>Mobile and responsive behaviour explored at the same time.</strong> Neither was added afterwards.",
          ],
        },
      ],
    },
    {
      id: "use-cases",
      n: "05",
      heading: "Specified as use cases",
      maxim: "A screen set tells you what the assistant looks like. A use case tells you what happens, in order.",
      standfirst:
        "Twelve numbered use cases, each a full path with every state drawn. Developers, QA, and the requirements engineer all worked from them, and each one carries its design decisions on the canvas. Three of them follow, numbered for this page only.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Activation:</strong> how Elly is reached, from where, and what the button looks like in every state.",
            "<strong>Asking a text question:</strong> six states for one question (UC-01 below).",
            "<strong>Voice mode:</strong> opening it and interacting inside it, including the consent moment (UC-02).",
            "<strong>Recommendations and support:</strong> navigating suggestions, and reaching online help or support when documentation is not enough.",
            "<strong>Errors:</strong> handling and recovery (UC-03).",
            "<strong>The rest of the panel:</strong> starting a new conversation, resizing the sidebar, and using Elly on mobile down to a 320px breakpoint.",
          ],
        },
        {
          kind: "set",
          size: "phone",
          items: [
            { src: "/work/elly-ai-assistant/screens/uc-greeting.png", caption: "Starting view: the greeting and a suggested prompt, “Indicate APplus-specific questions.”" },
            { src: "/work/elly-ai-assistant/screens/uc-voice-consent.png", caption: "Voice mode opens with “Chats won't be saved”." },
            { src: "/work/elly-ai-assistant/screens/uc-typing.png", caption: "The user typing into the expanded message field." },
          ],
          caption: "States from the use-case canvas.",
        },
        {
          kind: "passage",
          html:
            "<p>One answer was written as product copy and specified as a use case of its own: what Elly says when asked what she is. It sits where users ask the question, because an assistant that cannot state its own limits will be trusted for the wrong things. The copy states the limits in four sentences: the assistant reads only APplus documentation and performs no actions in APplus; it is available exclusively in Flow mode; no chat history is saved, and closing the window erases it; and the Bulb icon at the top of the screen switches back to traditional search.</p>",
        },
        {
          kind: "pull",
          text: "“Elly accesses only APplus documentation and cannot perform actions in APplus.”",
        },
      ],
    },
    {
      id: "uc-text",
      n: "06",
      heading: "Asking a text question",
      maxim: "Six states for one question, because five of them are where the user decides whether to trust the sixth.",
      blocks: [
        {
          kind: "set",
          size: "phone",
          items: [
            { src: "/work/elly-ai-assistant/screens/text-question.png", caption: "The question typed, Submit on hover." },
            { src: "/work/elly-ai-assistant/screens/text-thinking.png", caption: "Elly thinking." },
            { src: "/work/elly-ai-assistant/screens/text-scope.png", caption: "The scope answer, and the close tooltip: history won't be saved." },
            { src: "/work/elly-ai-assistant/screens/text-answer.png", caption: "An answer with inline markers [1] and [2], Resources collapsed, Open voice interaction on hover." },
          ],
        },
        {
          kind: "usecase",
          uc: {
            id: "UC-01",
            title: "Ask a text question and check where the answer came from",
            actor: {
              name: "An APplus user in Flow mode",
              body: "Elly is available only in Flow mode, so the user is already working on a Flow screen when they open her.",
              note: "The risk this page keeps returning to is a consultant who repeats the answer to a customer.",
            },
            trigger: {
              body: "A question about how something is done in APplus, asked while the work stays on screen.",
            },
            precondition: {
              body: "Elly is open in the docked panel, one click from the side menu, showing the greeting and suggested prompts.",
            },
            flow: [
              { n: "1", text: "Starting view: the greeting and suggested prompts." },
              { n: "2", text: "Text mode clicked." },
              { n: "3", text: "The user types the question." },
              { n: "4", text: "Send pressed." },
              { n: "5", text: "Elly thinking." },
              {
                n: "6",
                text: "Elly answers. Each factual statement carries a numbered marker, and the numbers resolve in a Resources block the user can expand.",
                note: "The identifiers are the customer's own documentation namespace, so a consultant can open the source before quoting it.",
              },
            ],
            postcondition: {
              body: "The user has an answer in which every claim points to a document they can open, and can see when two of four claims come from the same page.",
            },
            why: "A screen set tells you what the assistant looks like. A use case tells you what happens in order, including the parts nobody wants to draw.",
            rule: "Citations sit at the claim, not at the bottom.",
          },
        },
      ],
    },
    {
      id: "uc-voice",
      n: "07",
      heading: "Voice mode",
      maxim: "The user should never have to remember which mode they are in. The layout says it.",
      blocks: [
        {
          kind: "beside",
          html:
            "<p><strong>Voice is the same assistant, not a second one.</strong> It opens from the microphone beside the message field, and the panel changes shape so the mode is never in doubt.</p><ul><li><strong>Consent first.</strong> Before anything is spoken, the panel says that voice chats are not saved. The user decides while nothing can be lost yet.</li><li><strong>The avatar becomes the panel.</strong> In text mode it sits in the top bar; in voice mode it fills the centre, with Pause and Finish under it.</li><li><strong>One exit.</strong> Finish closes voice mode. A new voice chat does not exist, because starting over and leaving are the same intention.</li></ul>",
          video: {
            src: "/work/elly-ai-assistant/voice-mode.mp4",
            poster: "/work/elly-ai-assistant/voice-mode.webp",
            title: "Elly voice mode on a phone, from the greeting to Finish",
          },
          caption: "Voice mode on the phone, in the prototype.",
        },
        {
          kind: "usecase",
          uc: {
            id: "UC-02",
            title: "Talk to Elly instead of typing",
            actor: {
              name: "An APplus user in Flow mode",
              body: "Text and voice are two modes of the same assistant, never two competing features.",
            },
            trigger: {
              body: "The user opens voice interaction from the microphone beside the message field.",
            },
            precondition: {
              body: "Elly is open in the docked panel.",
            },
            flow: [
              {
                n: "1",
                text: "The panel says “Chats won't be saved” before the user speaks.",
                note: "The consent moment comes first, while nothing can be lost yet.",
              },
              {
                n: "2",
                text: "The avatar leaves the top bar and takes the centre of the panel. The bar is empty.",
              },
              { n: "3", text: "Elly listens, waits, then speaks." },
              {
                n: "4",
                text: "Pause stops Elly mid-answer.",
                note: "In the study a consultant asked “is it a stop button?” and was then positively surprised that it did stop Elly mid-thought.",
              },
              {
                n: "5",
                text: "When the user continues after a pause, Elly does not pick up where she stopped. She starts listening again.",
                note: "A half-delivered spoken answer is worse than none, because the user cannot tell which half they got.",
              },
            ],
            exits: [
              {
                label: "Finish",
                text: "Closes voice mode. A “new voice chat” does not exist, because starting over and leaving are the same intention when nothing is being saved.",
              },
            ],
            exitsNote: "Voice mode has one exit, not two.",
            postcondition: {
              body: "Nothing is stored. Closing the window erases the conversation.",
            },
            why: "In text mode the avatar sits in the top bar; in voice mode it is the panel. The difference is visible at a glance instead of being a state the user has to hold in their head.",
            rule: "The layout states the mode.",
          },
        },
      ],
    },
    {
      id: "uc-errors",
      n: "08",
      heading: "When it fails",
      maxim: "Same moment in the flow, three different things the user should do next.",
      standfirst:
        "All three failures happen while the response is being generated, and a single generic error would have covered all of them. It would also have taught the user nothing about whether to try again.",
      blocks: [
        {
          kind: "set",
          size: "phone",
          items: [
            { src: "/work/elly-ai-assistant/screens/error-retrieval.png", caption: "Retrieval failure: “I couldn't find it…”" },
            { src: "/work/elly-ai-assistant/screens/error-model.png", caption: "Model failure: “A small technical blip on my side”, with Try again." },
            { src: "/work/elly-ai-assistant/screens/error-quota-month.png", caption: "Monthly interaction quota used up." },
            { src: "/work/elly-ai-assistant/screens/error-quota-limit.png", caption: "Current question limit hit: “Let's take a short break…”" },
          ],
        },
        {
          kind: "usecase",
          uc: {
            id: "UC-03",
            title: "Fail in a way the user can act on",
            actor: {
              name: "An APplus user waiting for an answer",
              body: "They have sent a question and Elly is thinking.",
            },
            trigger: {
              body: "Something goes wrong while the response is being generated.",
            },
            precondition: {
              body: "A question has been sent. The conversation so far, including Elly's scope statement, stays on screen.",
            },
            flow: [
              {
                n: "1",
                text: "Retrieval failure: the documentation could not be reached. “I couldn't pull up the details from the documentation this time. Give it another go later!”",
                note: "The answer may exist; the lookup did not work.",
              },
              {
                n: "2",
                text: "Model failure: the language model broke. “A small technical blip on my side”, with Try again and an invitation to ask the question differently.",
                note: "A different question may route differently.",
              },
              {
                n: "3",
                text: "Quota reached: nothing is broken. The panel says whether the monthly quota or the current limit was hit, and points to the administrator for a larger package.",
                note: "Waiting becomes a decision the user can make.",
              },
            ],
            exits: [
              { label: "Retry or rephrase", text: "Offered where it can help: after a retrieval or model failure." },
              { label: "Wait or ask the administrator", text: "For a reached limit, where retrying cannot help." },
            ],
            postcondition: {
              body: "The user knows whether to retry, rephrase, wait, or ask someone, and the conversation is still there.",
            },
            why: "An assistant that goes quiet is worse than one that admits it cannot answer.",
            rule: "Each failure gets its own state and its own recovery path.",
            ruleNote:
              "Five states shipped by release: retrieval failure, model failure, monthly question limit exceeded, daily limit reached, and limit reached mid-voice-input. Alongside them, a standing disclaimer: Elly reads APplus documentation, and Elly can be wrong.",
          },
        },
      ],
    },
    {
      id: "prototype",
      n: "09",
      heading: "The prototype",
      maxim: "You cannot test trust on a static screen.",
      standfirst:
        "A clickable Figma prototype at full application scale, because the whole research question was about latency, waiting, and doubt.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Every demo runs inside <strong>a complete 1920×1080 APplus Flow screen</strong>: app bar, navigation, content, and the Elly sidebar docked at its real 380px.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Full scale, to prove the claim.</strong> If the point of the design was that the assistant must not take the screen away from the work, the prototype had to be able to show it.",
            "<strong>Demos aimed where trust is won or lost.</strong> The default text conversation across nine sequential screens, the three error states, and voice mode, plus iPhone frames for the mobile path.",
            "<strong>Built on the sidebar component set, not duplicated frames.</strong> Every state in the prototype is the same variant the design system ships, so a fix in one place fixes it everywhere.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/elly-ai-assistant/device/proto-text-2400.webp", frame: "macbook",
          caption: "The text demo on a full Flow screen: the scope answer, with the close tooltip warning that history won't be saved.",
        },
        {
          kind: "points",
          items: [
            "<strong>331 wired interactions.</strong> Hover states on every icon button and list item, because an assistant that does not respond to the cursor reads as dead before it has said anything.",
            "<strong>Timed transitions for the voice states.</strong> Listening dissolves into Waiting and Waiting smart-animates into Speaking on a timeout rather than a tap, so a participant experiences the wait instead of skipping it. A click-through would have hidden the one thing worth measuring.",
            "<strong>A drag handle bound to a variable</strong>, so resizing the panel from 380px to 580px happens under the participant's hand instead of being described to them.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/elly-ai-assistant/device/proto-voice-2400.webp", frame: "macbook",
          caption: "The voice demo: “Chats won't be saved”, the avatar in the centre, Pause and Finish.",
        },
        {
          kind: "passage",
          html:
            "<p>This is what the thirteen participants were given. The findings on trust exist because the prototype could keep them waiting.</p>",
        },
      ],
    },
    {
      id: "study",
      n: "10",
      heading: "The study",
      maxim: "Eight of the thirteen had never seen Elly, and they work inside the company that builds the product.",
      standfirst:
        "A moderated study with 13 internal consultants and solution architects, 14–25 April 2025, deliberately before the APplus 9 release so that findings could still reach launch. Thirteen sessions of 45 minutes, one at a time, on the working prototype.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "13", label: "participants: consultants and solution architects" },
            { value: "8", label: "had never seen Elly before the session" },
            { value: "1", label: "had ever used it hands-on" },
            { value: "13", label: "moderated sessions, 45 minutes each" },
          ],
        },
        {
          kind: "passage",
          html:
            "<p><strong>The first result was not about the interface.</strong> It was about who knew the assistant existed.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Eight of the thirteen had never seen Elly.</strong> Five had only heard the name, from Vision Days, a Sales Summit video, a bootcamp, or a colleague. One had prior hands-on experience.",
            "<strong>Tenure ran from one year to twenty.</strong> The sample was the company's own consultants and solution architects.",
            "<strong>Five objectives per session.</strong> Whether people know Elly exists and what she is for, whether they can find her inside Flow mode, how they behave when asked to bring a real work question, what breaks, and whether they see value in it at all.",
            "<strong>Every participant found the button immediately.</strong> Almost every one of them then hit the same wall.",
          ],
        },
        {
          kind: "points",
          items: [
            "<strong>“Elly is answering as ‘I'm sure’ but should say ‘I guess’ or ‘I think’ in this case.”</strong> Senior consultant, 20 years at the company, on an answer drawn from an outdated release note.",
            "<strong>“It would be great if Elly recognised the page I'm on and gave concrete answers.”</strong> The same participant, asking for context-awareness unprompted.",
            "<strong>“I got a lot of texts with hints about where I can find information; for me it is more like an advertisement for how to get my answers in APplus.”</strong> Team lead, purchase, who wanted a number and was handed a route to a document.",
            "<strong>“What I have experienced now won't be helpful.”</strong> The same participant, asked whether he would use it.",
            "<strong>“Normal users would not download the PDF from a link given by Elly.”</strong> Team lead, purchase and sales consultants, six years.",
            "<strong>“It's cold blue but warm, separated from the main view, which I like. I feel welcomed.”</strong> Consultant, sales, five and a half years, on the same panel another participant called too high-contrast.",
            "<strong>“Moving topics are invisible for me; they are adverts.”</strong> The same participant, on the animated suggestion carousel.",
            "<strong>“I don't know, is it a stop button?”</strong> Consultant, warehouse and logistics, then positively surprised that it did stop Elly mid-thought.",
            "<strong>“Much better than F1 help, because it is more specific. It is trustworthy.”</strong> Senior consultant, project module, working with ERP since 1995.",
          ],
        },
        {
          kind: "passage",
          html:
            "<p><strong>How I read it.</strong> The panel worked; what failed was the contract.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Discoverability was solved.</strong> The layout was read correctly, the conversation flow was understood without instruction, and one of the most experienced people in the room called it trustworthy.",
            "<strong>People asked for numbers and got directions to documentation.</strong> They asked about the board in front of them and got a general answer.",
            "<strong>One answer came confidently from an old release note.</strong> The interface gave no sign of its age.",
            "<strong>Three complaints, one cause.</strong> The assistant never said what kind of thing it was able to know.",
          ],
        },
      ],
    },
    {
      id: "trust",
      n: "11",
      heading: "Easy, yes. Trusted, no.",
      maxim:
        "Twelve of thirteen would use it again, and trust still scored lowest of every dimension.",
      standfirst: "Once shown, the interface landed. The problem was somewhere else.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "13/13", label: "found Elly immediately, top right, without prompting" },
            { value: "12/13", label: "found it easy to use" },
            { value: "12/13", label: "would use it again" },
            { value: "11/13", label: "found it helpful for small and routine tasks" },
            { value: "7/13", label: "said it was not suited to complex consulting work" },
          ],
        },
        {
          kind: "passage",
          html:
            "<p><strong>Trustworthy was the low score</strong>, between 2 and 3.5 for five participants, while easy to use clustered at 4 to 5 and helpful spread across the full range.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Two causes, both in the interface.</strong> Sources were not shown, and one answer described a screen from an older version of the product.",
            "<strong>The risk was verifiability.</strong> A usable assistant that is not trusted does not get used twice.",
            "<strong>Four parts of the design answer it.</strong> The citations, the Resources block, the error states, and the scope statement Elly gives about herself.",
          ],
        },
        {
          kind: "duo",
          items: [
            {
              src: "/work/elly-ai-assistant/device/answer-desktop-2400.webp", frame: "macbook",
              caption: "An answer on a Flow board, with inline markers and the Resources block collapsed.",
            },
            {
              src: "/work/elly-ai-assistant/device/resources-desktop-2400.webp", frame: "macbook",
              caption: "Resources expanded: three document identifiers behind markers [1] to [3].",
            },
          ],
        },
      ],
    },
    {
      id: "barriers",
      n: "12",
      heading: "The barriers they named",
      standfirst: "Two structural asks, in the participants' own words.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "10/13", label: "asked for context-awareness, the most requested change in the study" },
            { value: "7/13", label: "asked for trust and sourcing" },
          ],
        },
        {
          kind: "points",
          items: [
            "<strong>Context-awareness.</strong> Elly should know which board, module, and task the user is currently in, instead of starting from nothing every time.",
            "<strong>Trust and sourcing.</strong> Show the sources. Flag content that may be outdated. Signal how confident the answer is.",
          ],
        },
        {
          kind: "passage",
          html:
            "<p>The study found two problems: the assistant was invisible until someone opened it, and hard to verify once they did.</p>",
        },
      ],
    },
    {
      id: "what-i-designed",
      n: "13",
      heading: "What I designed",
      standfirst: "Four decisions, each answering something the study surfaced.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Citations at the claim.</strong> Every factual statement carries a numbered marker inline, and the numbers resolve in a Resources block the user can expand, with the actual document identifiers in the customer's own documentation namespace. A consultant can open the source before quoting it.",
            "<strong>A designed state for every way this fails.</strong> Retrieval failure, model failure, monthly question limit exceeded, daily limit reached, and limit reached mid-voice-input, each with its own recovery path, plus a standing disclaimer that Elly reads APplus documentation and can be wrong.",
            "<strong>A panel that behaves like part of the product.</strong> 380px by default, resizable to 580px, docked rather than floating, with the conversation flow specified at both widths. A full mobile version. Voice input with its own visual mode and its own error and limit states. Customer theming, because APplus ships in customer colours and an assistant that ignores them reads as bolted on.",
            "<strong>The entry point as a product decision.</strong> Opening Elly from the classic interface takes the user into Flow mode directly, so the assistant doubles as the transition path into the newer navigation model.",
          ],
        },
        {
          kind: "set",
          size: "phone",
          items: [
            { src: "/work/elly-ai-assistant/screens/sidebar-thinking.png", caption: "Thinking." },
            { src: "/work/elly-ai-assistant/screens/sidebar-close.png", caption: "Close: history won't be saved." },
            { src: "/work/elly-ai-assistant/screens/sidebar-limit.png", caption: "Question limit reached." },
            { src: "/work/elly-ai-assistant/screens/sidebar-voice.png", caption: "Voice mode." },
            { src: "/work/elly-ai-assistant/screens/sidebar-resources.png", caption: "Resources expanded." },
          ],
          caption: "The sidebar states as delivered.",
        },
      ],
    },
    {
      id: "live",
      n: "14",
      heading: "The live product",
      standfirst:
        "Elly as it ships in APplus 9: the screens, not the reasoning. The chapters above are how it got here.",
      blocks: [
        {
          kind: "video",
          src: "/work/elly-ai-assistant/elly-help.mp4",
          title: "Elly Help in APplus — Asseco Solutions product film",
          poster: "/work/elly-ai-assistant/video-poster.jpg",
          caption:
            "Elly Help as APplus ships it: the vendor's own product film, four minutes. Spoken in German; the English subtitles are my translation.",
          subtitles: {
            src: "/work/elly-ai-assistant/elly-help.en.vtt",
            label: "English",
            srclang: "en",
          },
          credit: {
            text: "Asseco Solutions DACH, August 2025",
            href: "https://www.youtube.com/watch?v=eFn6maci6mA",
          },
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/elly-ai-assistant/12.png",
          caption: "As shipped, across devices: the scope answer docked beside a Flow board on desktop and on a tablet, and the greeting on a phone. The footer on every screen says that Elly accesses APplus documentation and can make mistakes.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/elly-ai-assistant/15.png",
          caption: "A German answer on the phone with markers [1] to [3] and the Resources list under it; on the tablet and the desktop, the suggested prompt carousel, Ask precise questions.",
        },
      ],
    },
    {
      id: "results",
      n: "15",
      heading: "What it adds up to",
      standfirst: "Elly shipped with APplus 9 in April 2025. These are the numbers the work produced before release.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "12", label: "use cases, each a full path with every state drawn" },
            { value: "331", label: "wired interactions in the test prototype" },
            { value: "13", label: "consultants and solution architects in the study" },
            { value: "5", label: "failure states, each with its own recovery path" },
          ],
        },
        {
          kind: "stats",
          items: [
            { value: "13/13", label: "found Elly without prompting" },
            { value: "12/13", label: "would use it again" },
            { value: "10/13", label: "asked for context-awareness" },
          ],
        },
        {
          kind: "points",
          items: [
            "<strong>The study confirmed what the panel has to show:</strong> sources at the claim, a state for each failure, and Elly's own statement of what she can and cannot do.",
            "<strong>Each of the four decisions is something the interface shows or hides:</strong> the source, the failure, the limit.",
          ],
        },
      ],
    },
  ],
};
