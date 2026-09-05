# Triggering tests

The description is the only thing deciding whether this skill loads. It is
therefore the part most worth testing, and the part that rots fastest: people
ask for the same thing in new words, and the skill silently stops firing.

Run these as plain messages in a session with the skill installed, and record
whether it loaded. Ten minutes, and the only test that catches a skill nobody
can reach.

## Should trigger

English:

- "Is this handoff-safe?"
- "Check this before I open the PR."
- "Ready for PR?"
- "Review this branch before merge."
- "Does this prototype actually work?"
- "Is this screen using the design system, or did we rebuild the components?"
- "Write me the PR description for this branch."

Polish — the team writes in Polish as often as in English, and a description
in one language is a skill that fires half the time:

- "Gotowe do PR?"
- "Sprawdź to zanim otworzę PR."
- "Czy to jest handoff-safe?"
- "Sprawdź, czy to zgodne z design systemem."
- "Czy prototyp działa i klika się?"
- "Przejrzyj tę gałąź przed mergem."

Paraphrases that must also work, because they are what people actually type:

- "Can I merge this?"
- "Co jeszcze trzeba zrobić, zanim to pójdzie dalej?"
- "Sprawdź czy niczego nie zepsułam."

## Should not trigger

- "What's the weather in Warsaw?"
- "Help me write a Python script."
- "Fix this failing test." — a repair request, not a handoff.
- "Open a PR for this." — the skill refuses this anyway; if it loads here it
  will spend a run producing a report nobody asked for.
- "Add a dark theme to the settings page." — building, not checking.
- "Napisz komponent tabeli." — building.

## When one fails

**Missed trigger:** add the phrase to the description, in the words the person
used, and add it to the list above. The description is a trigger surface, not
a summary.

**False trigger:** the description is claiming ground the skill does not hold.
Narrow it — and check the negative list still passes afterwards, because
narrowing usually breaks a paraphrase at the same time.
