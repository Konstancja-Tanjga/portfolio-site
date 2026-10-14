import { scrollToTop, useScroll } from "../system/useScroll";

/**
 * Back to the top of the page, on every page (mounted once, in Shell).
 *
 * A project page runs to thirty screens, and the home page to a dozen; the
 * ways out are a long way from wherever the reader happens to be. This one
 * is always within reach. On a phone it gives way to QuickNav where a page
 * has one, which carries its own Top.
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
