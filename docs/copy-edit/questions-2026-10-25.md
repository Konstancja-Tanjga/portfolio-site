# Open questions after the 25 October rebuild

Fourteen studies were rebuilt the Analytics way on branch `studies-rebuild`
(PR after #98). Nothing below was written onto a page: where a fact was
missing, the sentence was cut or left without it. Each study's own log
(`log-<file>.md`, section "25 October 2026: rebuilt the Analytics way") has
the Before | After | Why table. One answer per line is enough.

## Facts to confirm or supply

| Study | Question |
| --- | --- |
| Documents | Headline changed from "Document Management" to "APplus Documents": keep? |
| Documents | Repository at the time: Bitbucket or GitHub? (row left out) |
| Documents | Did the FOX pattern work ship through Nexus, as on Analytics? |
| Documents | Has Documents been released? No launch row, no "Shipped" station until then. |
| Elly | UC-01 "why" now says "Rejected: sources listed under the answer", inferred from the rule. Confirm or cut. |
| Elly | Was the Aria teardown done in Figma? The sheet says so. |
| OST | Which tool drew the mark and set the brand book? With it, 06 gets a sheet. |
| OST | UC-03 (letter from the office) is cut; keep cut or restore as a third tile? |
| Sky | The Big Hat station borrows colour-roles.png from the Big Hat study: right picture, or a Raptors screenshot? |
| Sky | "Live" station carries "every page but the home page generated at build time" and "no accounts" from the old spec: fine as process facts? |
| Chihuahua | Meta has Period but no Team row; is Role "Everything" enough, or add Team? |
| Chihuahua | ffmpeg is only in the sheet's tools row now; does it deserve a station? |
| MojePZU | Were rounds two and three of the interviews also over Zoom? Were the lo-fi mockups made in Figma? |
| FOX | Where the FOX repository lives (GitHub or Bitbucket). |
| FOX | Sheet order: Figma, agent, Storybook, Chromatic, pull request, Nexus, write-back. Does the pull request come before Chromatic? |
| FOX | Does "every component pull request" still hold? |
| Big Hat | Which agent generated the Figma library over Figma's MCP server? |
| Big Hat | The fourth template's name (meta says 4; page shows Kanban, Records, AI chat). |
| Big Hat | "Docu Manager" in 00 What: keep, or is it "APplus Documents"? |
| Best Practice Hub | Is concept.png a Figma Make prototype? |
| Best Practice Hub | Did the Hub's three FOX pieces ship through Nexus? |
| Best Practice Hub | Is the device grid screen (Explore / Installed, "Filter hub") the signed-off version? |
| Volvo | Should the legacy loading screen (report-loading-before.png, now unused) come back? |
| Volvo | Usability Hub and Maze now live only in the sheet; name them in the research line too? |
| Riyad Bank | Period and team size; the tools (Figma? a prototype tool?); one line on the illustration system (then Decision 3 with 23.png). |
| Riyad Bank | Does the podcast player have chapters? Caption now says "The audio for a topic." |
| Flow | The tools of this work (Figma, FOX v2.5 library, repository, how the usability tests ran). With them, 04 becomes a sheet. |
| Flow | Which components were added to FOX for the navigation? |
| Flow | Decision 3 ends "so the board stays in view": inferred from the screens. Confirm or cut. |
| Xecta | Product dates: CV April 2020 to July 2021 vs LinkedIn April 2021 to July 2022. Left as the CV. |
| Xecta | "One of three designers" (CV) vs "with a UX designer and a researcher" (strip). Left as the strip. |
| Futures | Shorter board exports from Figma would be the only real px cut left; do you want that? |
| Futures | Do the five participants include the facilitator? "Twelve submissions" against five participants? |

## Deep links dropped (chapters or tiles merged or removed)

Documents `#who-for #competition #inspiration #specification #documentation`;
Elly `#prototype #trust #barriers #what-i-designed #results`; Chihuahua
`#research-see #research-touch #research-want #journey-dog #journey-human
#blueprint #pipeline`; Big Hat `#tpl-kanban #tpl-records #tpl-ai-chat`;
Best Practice Hub `#exploration`; Volvo `#problem #outcome`; MojePZU
`#results`; Flow `#screens`; Futures `#crosscutting #the-matrix #method`.
No inbound link on the site points at any of them.

## What the pattern still needs in the code

- The sheet drawings `figma`, `storybook`, `code`, `options`, `nexus`,
  `shipped` are crops of the Analytics dashboard and its FOX card, so
  only APplus studies can use them; `nexus` also prints "six installs".
  Every other study used `image` stations. Neutral drawings, or labels
  taken from the station data, would let Big Hat, Sky and Chihuahua draw
  their own code and release stations.
- A sheet station with neither `image` nor `drawing` renders an empty
  window.
- A `brief` decision shot without `frame` is cropped 16:10 from the top
  left; a phone screen shows only its top quarter. An object-position
  option would help phone studies.
- A decision card cannot deep-link to a tab inside a `tabs` block.
- `Fold` is a third hand-written copy of the drawer shell (also in
  `Shot` folded and `Points` fold); one `Drawer` component would carry
  all three.
