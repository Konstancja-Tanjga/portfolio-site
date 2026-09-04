import { Link } from "react-router-dom";

import { aboutChapters } from "../content/about";
import { BackToTop } from "../components/BackToTop";
import { ChapterView } from "../components/Chapter";
import { JumpBar } from "../components/JumpBar";
import { ReadingProgress } from "../components/ReadingProgress";
import { Lightbox, useLightbox } from "../system/Lightbox";
import { ShotViewer } from "../system/Shot";
import { Lane, Wall } from "../system";

/**
 * About is a wall, not a prose page.
 *
 * It was four stacked <section>s of paragraphs, which made the one page
 * arguing that a closed block set can carry any argument the only page
 * that needed an exception. Now it renders through the same chapter
 * machinery as a project — so it gets the jump bar, the widths, and the
 * diagrams at bleed for free.
 */
export function About() {
  const lightbox = useLightbox();

  return (
    <ShotViewer.Provider value={lightbox.show}>
      <article>
        <ReadingProgress />
        <JumpBar title="How I work" chapters={aboutChapters} />
        <Wall>
          {aboutChapters.map((chapter) => (
            <ChapterView key={chapter.id} chapter={chapter} />
          ))}

          <Lane width="wall">
            <Link to="/" className="back">
              <span aria-hidden="true">←</span> All work
            </Link>
          </Lane>
        </Wall>
      </article>
      <BackToTop />
      {lightbox.open && <Lightbox shot={lightbox.open} onClose={lightbox.close} />}
    </ShotViewer.Provider>
  );
}
