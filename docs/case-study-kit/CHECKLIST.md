# Case-study checklist

Tick every line before the content file is committed.

## Facts
- [ ] Role and title as on the contract; team size as it was.
- [ ] Period and team row in "In short".
- [ ] Every number has a source named in the log.
- [ ] No result stated that was not measured; no release claimed that did not happen.

## Structure
- [ ] Chapters in the fixed order, numbered as in Figma, sub-chapters lettered.
- [ ] "In short" has Context, Problem, My role and scope, Decision 1 to 3, Outcome, Period and team.
- [ ] Each chapter has a surface a skimmer can read; nothing lives only behind a click.
- [ ] Each use case fills every slot of the template and names the rejected alternative.
- [ ] Every rule has an id, reused in captions, folders and hotspots.

## Images and motion
- [ ] Product screens are MacBook mockups, WebP at 1600, 2400 and full.
- [ ] Every image has a caption that says what to look at, or an empty alt.
- [ ] Diagrams folded; audit screens carry hotspots; cover has layers.
- [ ] One sweeping effect per screen at most; reduced motion shows everything.

## Language
- [ ] Passages over 60 words are a lead sentence plus bullets.
- [ ] Pull quotes under 15 words. Maxims one sentence.
- [ ] Serial comma, British spelling, no em dashes, arrows or slashes in prose.
- [ ] Grep clean: "screenshot of", "there is", "e.g.", hedges, American spellings.

## Build
- [ ] `npm run check` and `npm run build` pass; `tsc --noEmit` clean.
- [ ] No horizontal scroll at 1440, 1024, 390.
- [ ] Jump bar and every hash deep link open the right chapter.
- [ ] Log written to `docs/copy-edit/log-<slug>.md`.
