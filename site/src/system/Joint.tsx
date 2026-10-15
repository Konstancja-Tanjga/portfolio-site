import { useEffect, useRef } from "react";

import { useReveal } from "./Reveal";
import { Lane } from "./Wall";

/**
 * A question joined to its answers.
 *
 * The question sits large on the left; a connector leaves it, runs down
 * a rail and branches into each answer card on the right, drawing itself
 * the first time it is seen, the way a join is drawn on the data-model
 * canvas. Answers may carry inline markup.
 */
export function Joint({ question, answers }: { question: string; answers: string[] }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const list = useRef<HTMLOListElement | null>(null);
  // The trunk ends at the last branch: measure where that is, from the
  // top of the joint (the rail starts there). offsetTop would measure from
  // the nearest positioned ancestor, which is the page, and the trunk would
  // run on far below the footer.
  useEffect(() => {
    const el = ref.current, ol = list.current;
    if (!el || !ol) return;
    const fit = () => {
      const last = ol.lastElementChild as HTMLElement | null;
      if (!last) return;
      const end = last.getBoundingClientRect().top - el.getBoundingClientRect().top + 2.2 * 16;
      el.style.setProperty("--trunk", `${end}px`);
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [ref, answers.length]);
  return (
    <Lane width="wall">
      <div ref={ref} className={shown ? "joint is-shown" : "joint"} style={{ "--n": answers.length } as React.CSSProperties}>
        <p className="joint__q">
          {question}
          <span className="joint__port" aria-hidden="true" />
        </p>
        <div className="joint__rail" aria-hidden="true" />
        <ol ref={list} className="joint__answers">
          {answers.map((a, i) => (
            <li className="joint__answer" key={i} style={{ transitionDelay: `${300 + i * 140}ms` }}>
              <span className="joint__branch" aria-hidden="true" />
              <span className="joint__card" dangerouslySetInnerHTML={{ __html: a }} />
            </li>
          ))}
        </ol>
      </div>
    </Lane>
  );
}
