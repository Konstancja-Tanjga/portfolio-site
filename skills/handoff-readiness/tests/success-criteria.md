# Success criteria

Rough targets, not thresholds. The point is to notice degradation, not to
score the skill.

## Quantitative

**Triggers on 90% of relevant queries.** Run the sixteen phrases in
`triggers.md` — English and Polish — and count how many load the skill without
being told to. Below 90%, the description is missing the words people use;
add them verbatim. Also run the six negatives: a false trigger costs a run
nobody asked for.

**Finds 8 of 8 seeded defects.** `cases.md` plants one per gate. A checker
that misses a planted defect is broken in the specific way that matters, and
this is the number to watch after every change to `references/gates.md`.

**Zero unevidenced passes.** Every `pass` row carries a command with its
output or a screenshot path. Measure by reading the pass rows in the last five
real reports. This is the metric to keep even if every other one is dropped:
an unevidenced pass is worse than a missed defect, because it is a claim of
coverage.

**Zero aborted runs.** Every failure mode in the error-handling table ends in
a verdict, not a stop. Measure by counting runs that ended without a report —
target zero, and each one is a missing row in that table.

**Run cost stays in proportion.** A run on a repository this size should be
minutes, not a session. Note the wall-clock time on the tripwire branch after
each change; a step that doubles it needs to earn it.

## Qualitative

**The note goes into the PR without editing.** Count the edits made before
pasting. One or two is fine; rewriting the note means the template is wrong,
not the writer.

**The same branch produces the same verdicts.** Run it three times on the
tripwire branch. Verdicts and findings should match; the prose may differ.
Verdicts that move between runs mean a gate is written as a judgement where it
should be a check.

**A teammate gets through it first time.** The only thing they should have to
be told is which routes matter — everything else comes from the config, and
if it does not, the gap is in `references/config.md`.

**Nobody has to ask what to do next.** The report ends with what would close
each failing gate. If the reply to a report is "and now what?", that line is
missing.

## What is deliberately not measured

Tool-call count. This skill is not competing with doing the work by hand — it
is competing with not checking at all, and optimising for fewer calls would
push it toward reading the source instead of running the screen, which is the
one shortcut it exists to refuse.
