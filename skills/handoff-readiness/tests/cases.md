# The tripwire branch

The skill is a checker, so the test that matters is whether it finds a defect
somebody planted. Everything else — triggering, wording, run time — is
secondary to this.

Keep one branch, `handoff-tripwire`, in whichever repository the team uses
most. It carries **eight seeded defects, one per gate that can hold one**, and
its expected report is below. Run the skill against it after every change to
the skill, and before trusting a run on real work.

## What is planted, and where

| # | Gate | Seeded defect | Expected finding |
| --- | --- | --- | --- |
| 1 | Sanity | A `console.log('here')` left in a component, and one unrelated file reformatted | Both named with `file:line`; the reformatted file called out as outside the branch's subject |
| 2 | Design system | A hand-rolled `<button className="btn">` beside an imported one, and `background: #f2f4f7` in a changed stylesheet | Both named, with the system component that should have been used |
| 2 | Design system | A genuinely local component with no comment saying it is local | Named under closeout as an undeclared local component |
| 3 | Requirements | The linked issue asks for four things; one is not built | The unmet one, by name, and the three met ones with a location each |
| 4 | Click-through | A route whose component returns `null` under a condition the fixture triggers | `BLANK` from the script, gate 4 `fail`, screenshot path given |
| 5 | States | A list with no empty state | Named, with the surface that has no empty state |
| 6 | Accessibility | An input labelled only by `placeholder`, and `outline: none` with no replacement | Both named with `file:line` |
| 7 | Themes | A page of prose that renders no component, on a theme applied by decorator | Named as light-in-dark, with the paired screenshots |

## Expected shape of the report

Not the exact words — the shape:

- Ten rows, one per gate. Gates 1, 2, 3, 4, 5, 6 and 7 `fail`; 8, 9 and 10
  depend on what else the fixture carries.
- Every `fail` row carries a `file:line` or a screenshot path. **A fail with
  no evidence is itself a failure of the run.**
- No gate reported as `pass` without evidence beside it.
- Nothing edited. `git status` on the fixture is clean after the run.
- The note lists the undeclared local component and the unmet requirement.

## The two failures worth watching for

**A missed defect** — the skill ran the gate and did not see it. Add the case
to this table with what it should have said, then fix the gate in
`references/gates.md`. This is how the fixture grows: every miss in real use
becomes a row here.

**A pass with no evidence.** More dangerous than a miss, because it is
invisible: the report reads as coverage and is a claim. Audit for it directly
— read the pass rows, not just the fail rows.

## Running it

```bash
git switch handoff-tripwire
# then, in the session:
#   "Is this handoff-safe?"
```

Compare against the table. Ten minutes, and it is the only test that answers
the question the skill exists to answer.
