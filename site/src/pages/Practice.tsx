import { Band } from "../components/Band";

/**
 * The practice band, on a page of its own rather than on the home page.
 *
 * It is the band that keeps growing — every personal project that tests the
 * design system lands here — and a reader looking for shipped work should not
 * have to scroll past it. Home links here from under Products.
 */
export function Practice() {
  return (
    <div className="page">
      <section className="opening">
        <h1 className="opening__claim">
          How the work gets done, and the projects I build <em>to test it</em>.
        </h1>
        <p className="opening__body">
          My own design system and the one I lead at work, the methods I run with
          teams, and personal projects that put my system on a real brief and show
          where it holds and where it does not.
        </p>
      </section>

      <Band
        id="practice"
        label="Practice"
        note="Design systems, methods and personal projects. Each one is a single long page."
      />
    </div>
  );
}
