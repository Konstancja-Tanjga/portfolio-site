# Writing a case study

The rule set for every product case study on the portfolio, taken from the
APplus Analytics study (October 2026). A new study is built against this
file and the template beside it. The language rules live in
`docs/STYLE.md` and apply here unchanged.

## 1. Who reads it, and in what order

Three readers, three passes. The page has to work for each pass on its own.

| Pass | Reader | Time | What they take away |
| --- | --- | --- | --- |
| Skim | Hiring manager, recruiter | 30 seconds | Cover, "In short", chapter headings, maxims |
| Read | Design lead, product manager | 5 minutes | Bullets, mockups, the three use cases |
| Verify | Engineer, the person who will ask "show me" | 15 minutes | Show more, folded diagrams, code, the prototype, the clips |

The rule that follows: every chapter has a surface a skimmer can read, and
everything below that surface is optional. Nothing that matters only lives
behind a click.

## 2. The section stack

The order is fixed. A chapter may be dropped when the project has nothing to
put in it; a chapter is never reordered and never renamed to sound bigger.

| N | Chapter | Block | What it must say |
| --- | --- | --- | --- |
| cover | Cover | `cover` with `layers` | What the product is, in one line, over the product's own screens blending through. Credit: role, company, year. |
| meta | Metadata strip | `MetaStrip` | Role, team, period, stack, launch, product context. Facts only, each traceable. |
| 00 | In short | `brief` | What, Problem, My role, Decision 1 to 3, Outcome. Each row one sentence, at most 25 words; nothing the metadata strip already says. Each decision carries the screen that shows it taken (`shot`, a device export; the card crops the frame away) and links to the chapter that argues it. This is the sixty-second page: a reader who stops here has the product, the problem, the three decisions as pictures, and the result. |
| 01 | What it is | `passage` + `carousel` | One sentence on what it is, then every part of the application, one screen per slide. The role is in 00; it is not listed again here. |
| 01a | Why this is a hard brief | `points` | Optional. Three to five constraints, hardest first, each a bold claim and one reason. Dropped when the constraints are already the Problem row of 00 and the hotspots of 02. |
| 02 | Who it is for | `personas` | Two to four people, named by role, stacked horizontally. State of mind before task list. |
| 03 | Discovery and research | `points` + folded `shot` | What was found, as bullets. Diagrams folded, opened on demand. |
| 04 | What the audit asked | `duo` with `hotspots` | The questions, as speech bubbles on the screens that provoked them. Seven questions, seven decisions. |
| 05 | First prototypes | `flow` | The sequence of what was tried, three to five stages, one sentence each. |
| 06 | Design system | `sheet` + `evolution` | The project's own drawing sheet first: one requirement through the tools it passed, as tool windows on a conveyor line (the home page's "How I work", with this project's stations). Then the system's history under the product, one tab per version, inside a `fold`: it is reference, and a first reading passes it by. |
| 06a | Screen architecture | `duo` + `annotated` | The two or three screens that set the rules, then folders of screens with their rule ids. Optional: the folders are reference for engineers; when the study has to stay short for a hiring manager, the rule screens move to 07 and the folders stay in git history. |
| 07 | Design and sign-off | `tabs` of `shot` and `video` | The screens and flows as signed off, one per tab, so four of them take one screen of scroll instead of four. |
| 07a | A flow best watched | `beside` | Prose beside a phone-sized clip that stays in view while the text scrolls, for a flow such as voice mode. |
| 08 | Use cases | `dossier` of `usecase` | One tile per area. Each unfolds to the right: screens, the use-case template, the rule it sets. |
| 09 | Handoff | `loop` + `flow` | What development receives and in what form, drawn as the cycle it is: file, code and prototype feeding one another. The requirements baked in from the start as `flow` cards. |
| 10 | Evidence | `stats` + `video` clips | What was measured, what was recorded. A result that was not measured is not stated. |
| 11 | What I would do differently | `joint` | A question set large, joined to its answers. A second `joint` for "What I will measure". |

Chapter numbers keep the Figma numbering. A sub-chapter gets a letter
(`06a`), never a new number, so the numbers on the wall match the file.

### Scroll, tabs, folds

The study is one scroll, read in order, and the chapters never become
tabs: a tab hides what is not chosen, most readers never choose, and the
chapters are a story whose later parts depend on the earlier ones. What
keeps the scroll short is a shorter story, not a hidden one. Three
controls do the rest, each in its place:

- `brief` with decision shots in 00 is the whole study in one screen, for
  the reader who gives it sixty seconds.
- `tabs` holds content of equal rank the reader picks between: the screens
  and clips of a sign-off, variants of one screen, before and after. Never
  a sequence.
- `fold` closes material a first reading can skip: the system's history,
  a long table, a method. The title says what is inside, the hint says how
  much.

The jump bar numbers the chapters, scrolls sideways when they do not fit,
and keeps the current one in view, so the map is there without the page
being cut up.

## 3. The use-case template

Every use case fills the same slots, in this order, and no others.

| Slot | Rule |
| --- | --- |
| id, title | `UC-01`. The title is the goal as a verb phrase: "Question a fragment of an analysis without derailing the analysis". |
| actor | A persona by number and role. The `note` says the state of mind, because the state of mind is the requirement. |
| trigger | What sets it off. Often doubt, success, or growth, not a task. |
| precondition | What must already exist. One sentence. |
| flow | Numbered steps. Each `text` is what happens; each `note` is why it is designed that way. At most seven steps. |
| exits | Two, and no third. A branch that can end ambiguously is not a branch. |
| postcondition | What is true afterwards, and what is deliberately not true. |
| why | The rejected alternative, named, and why it lost. |
| rule | One sentence the rest of the product obeys. The `ruleNote` names where else it applies. |

On the surface: actor, trigger, rule, exits. Behind "Show more":
precondition, flow, postcondition, why. The use case reads in ten seconds
and can still be checked step by step.

## 4. Images

- Every product screen is a MacBook mockup exported from the Figma file at
  2x, keyed and encoded as WebP at 1600, 2400 and full width. Flat
  screenshots are for diagrams and boards only.
- One mockup per claim. A screen that proves nothing is removed.
- A caption says what to look at and which rule it demonstrates, by id:
  "Graph view with the side sheet open (R2)". Never "screenshot of".
- Diagrams that explain rather than show are `folded: true` and open on
  demand. The reader asks for them; they are not imposed.
- Audit screens carry `hotspots`: the question in a speech bubble at the
  place on the screen that provoked it.
- A hero cover is `layers`: four to six screens of the product, cycling
  with opacity, so the cover says what the product is before the title does.

## 5. Motion

- Reveal once, on first scroll into view, then never again. Content is
  visible if the observer never fires.
- `prefers-reduced-motion` turns motion off, not down.
- Route changes animate opacity only. A transform on the route wrapper
  breaks every fixed element inside it.
- One sweeping effect per screen at most. Glow, scan, breathe and tilt are
  reserved for mockups; the text column has none.
- Horizontal overflow is clipped at the root (`overflow-x: clip`, never
  `hidden`, so sticky bars keep working). Tilt, 3D carousel slides and the
  aurora reach past the edge by design.
- Every card elevates on hover: 4px up, sand border, deep shadow. The same
  curve everywhere, `cubic-bezier(0.2, 0.7, 0.2, 1)`.

## 6. Writing

`docs/STYLE.md` governs. The rules that come up on every study:

- A passage over 60 words becomes one lead sentence with the key phrase in
  bold, then `points` of three to five bullets, each led by a bold claim.
- A maxim is one sentence, an assertion the chapter then earns. A
  standfirst says what is on the page, not what the chapter is about.
- A pull quote is at most 15 words. Its facts move to a passage.
- Serial comma. British spelling. No em dashes, no arrows, no slashes in
  prose. Arrows and dashes may appear inside code and rule ids.
- Numbers only when they change what the reader does, and each with a
  source. "Thirteen sessions of 45 minutes" needs the research log.
- Role and team as they were. "Team of two" where it was two. A title is
  the title on the contract.
- Period and team on every study, as a row in "In short".

## 7. Do

- Lead with the decision. The first bullet in every chapter is the one the
  skimmer must take.
- Name the rejected alternative in every use case and every rule.
- Give every rule an id and reuse the id in captions, folders and hotspots.
- Put the prototype beside the Figma file, and record the four clips from
  it: the branch applied, the side sheet reflow, the refused join, enlarge
  and restore.
- Keep deep links alive: every chapter id and every dossier id is a hash
  target.
- Run `npm run check` and `npm run build` before committing content.
- Commit the process documents and screenshots with the work, so the
  repository tells the story too.

## 8. Do not

- Do not write a chapter to fill a slot. Drop it.
- Do not state a result that was not measured, or a release that did not
  happen.
- Do not put the only copy of a fact behind "Show more".
- Do not use a flat screenshot where a mockup exists, or a mockup where a
  diagram is what explains.
- Do not animate the text column. Do not add a second sweeping effect to
  a screen that has one.
- Do not invent a persona, a quote or a number to make a chapter complete.
  Say what is on record.
- Do not let a chapter exceed one screen of text before the first image.
- Do not restyle a block for one study. If a block is missing, add it to
  the closed set in `types.ts` with a doc comment, and render it in one
  place.
- Do not use generic AI phrasing or generic AI visuals. Plain, specific,
  from the project.

## 9. Before publishing

1. `npm run check` passes: every asset resolves, tokens carry no colour.
2. `npm run build` passes, `tsc --noEmit` is clean.
3. No horizontal scroll at 1440, 1024 and 390.
4. Reduced motion shows every block.
5. Every image has a caption or an empty alt, never a filename.
6. Every chapter id opens from the jump bar and from a hash.
7. Umami events fire for lightbox, video and outbound clicks.
8. A grep for em dashes, arrows, "screenshot of", "there is", and
   American spellings returns nothing in the content file.
