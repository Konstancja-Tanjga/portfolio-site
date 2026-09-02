import { scrollToTop, useScroll } from "../system/useScroll";

/**
 * Back to the top of the wall.
 *
 * A project page runs to thirty screens, and the two ways out — the jump bar
 * and the link at the foot — are both a long way from wherever the reader
 * happens to be. This one is always within reach.
 *
 * `hidden` rather than opacity when it is not wanted: an invisible button that
 * is still in the tab order is worse than no button.
 */
export function BackToTop() {
  const { deep } = useScroll();

  return (
    <button
      type="button"
      className="to-top"
      hidden={!deep}
      onClick={scrollToTop}
      title="Back to top"
    >
      <span aria-hidden="true">↑</span>
      <span className="to-top__label">Top</span>
    </button>
  );
}
