export function About() {
  return (
    <div className="page">
      <section className="opening">
        <h1 className="opening__claim">How I work</h1>
        <p className="opening__body">
          Design, the design system, and the implementation of prototypes are one
          job on my desk, not three handoffs.
        </p>
      </section>

      <section className="prose-section">
        <h2>The pipeline</h2>
        <p>
          Figma library with variants and tokens, Storybook as living
          documentation, Chromatic for visual regression, Nexus for versioned
          packages. FOX ships as a package and six products pick it up by moving a
          version.
        </p>
        <p>
          I define the component API and the tokens, write the skills and the
          project constitution that govern how the AI tools operate, and review and
          merge every pull request into the library. The implementation is authored
          with Claude Code under that specification.
        </p>
      </section>

      <section className="prose-section">
        <h2>Two design systems, and they are not the same one</h2>
        <p>
          FOX is Asseco's. I own it there — the tokens, the component API, the
          review gate — and the products I designed for that platform are built
          on it. Its artefacts stay inside the company.
        </p>
        <p>
          Big Hat is mine. I built it from nothing for my own projects, it shares
          no code with FOX, and it is public under MIT — so it is the one where
          the tokens, the contrast gate, the migration and the source can all be
          read in full. This site is built on it.
        </p>
      </section>

      <section className="prose-section">
        <h2>Research</h2>
        <p>
          Surveys with 195 internal and 37 external respondents, a 13-participant
          study on the AI assistant, eight sessions validating analytics, and
          quarterly interviews with power users. No dedicated researcher on the
          team, so I field it myself.
        </p>
      </section>

      <section className="prose-section">
        <h2>Recognition</h2>
        <p>
          ERP System of the Year 2025, UX category, for APplus. WUD Silesia
          speculative design competition. HR Dream Team at Deloitte.
        </p>
      </section>

      <section className="prose-section">
        <h2>Practical</h2>
        <p>
          Warsaw, CET. Remote only, permanent or B2B. Polish native, English C2,
          German and Spanish basic.
        </p>
      </section>
    </div>
  );
}
