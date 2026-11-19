# Log: Client 360 for wealth advisors (Salesforce FSC concept)

Written 19 November 2026 against docs/case-study-kit and docs/STYLE.md.

## Facts and their sources

| Claim | Source |
| --- | --- |
| Self-initiated concept, November 2026, made alone | Konstancja, 19 Nov |
| No user research, no usability test | Konstancja; so no result is stated and chapters 02, 03, 04, 05 and 10 are dropped |
| 1219 of 1349 component instances from the SLDS 2 kits, 130 local | count over the five screens in the FSC Figma file, Figma plugin API, 19 Nov |
| 66 Dev Mode annotations in six categories | Figma file, 19 Nov |
| Acceptance criteria AC0.1 to AC4.5 | documentation blocks in the Figma file |
| Client data: Maria Kowalczyk, the 10:00 review, the holiday home goal at 23%, three options, an action plan of four tasks | fictional records in the coded prototype, as captured on 19 Nov |
| Device mockups | the coded prototype at fsc-wealth-prototype.vercel.app, 1440 px at 2x, set in public/work/frames/macbook.webp |

## Decisions

- Group: practice, first in the band, in the order Konstancja set on 19 November.
- The actor in the use cases is a role, said so in its note, not a researched persona.
- A first draft gave the advisor "about 90 clients and four reviews a day"; cut, as the numbers had no source.

## Also in this change

- Reading the sky renamed World of Raptors (title and cover); the Live link now points to worldofraptors.com. The slug stays reading-the-sky so existing links keep working.
- Home shows four practice tiles (one row): Tinder for Chihuahua and Futures Thinking are on the Practice page only.
- Review fixes before the PR: "in under a minute" cut (no source); the client named before "her"; UC-01 step 4 no longer saves before the exits; the Outcome row is one sentence; the actor is a role, not persona 01.
- Practice order: Client 360 (FSC), World of Raptors, Tinder for Chihuahua, FOX, Big Hat, Futures Thinking. SailRock has no case study yet.
