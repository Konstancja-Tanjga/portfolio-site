# Working in this repository

## Writing rules

Every text that reaches other people from this repository, and from the
channels it feeds (the portfolio site, its case studies, the CV, LinkedIn
posts and the LinkedIn profile), follows [docs/STYLE.md](docs/STYLE.md):
NASA SP-7084 grammar, punctuation and capitalisation, applied through the
first principles at the top of that file. Read it before writing or editing
content in `site/src/content/`, `site/src/home/story.tsx`, `README.md`, or
any document meant for LinkedIn or a CV. Run the checklist in its section 6
before a commit that changes copy.

British spelling throughout. Product names as their owners spell them.
Every number has a source.

## Process documents

Design-process notes and screenshots live in `docs/`, committed with the work
they describe, so a visitor can follow the project from the repository.

## Build

`cd site && npm run check && npm run build` must pass before a commit.
