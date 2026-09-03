import { Link, useParams } from "react-router-dom";
import { findCase, neighbours } from "../content";
import { ChapterView } from "../components/Chapter";
import { JumpBar } from "../components/JumpBar";
import { Badge } from "@bighat/ui";

import { BackToTop } from "../components/BackToTop";
import { ReadingProgress } from "../components/ReadingProgress";
import { Lightbox, useLightbox } from "../system/Lightbox";
import { ShotViewer } from "../system/Shot";
import { Cover, Lane, MetaStrip, Wall } from "../system";

export function Case() {
  const { slug } = useParams();
  const study = findCase(slug);
  const lightbox = useLightbox();

  if (!study) {
    return (
      <div className="page">
        <section className="opening">
          <h1 className="opening__claim">That project is not here</h1>
          <p className="opening__body">
            <Link to="/">Back to the work</Link>
          </p>
        </section>
      </div>
    );
  }

  const { next } = neighbours(study.slug);

  return (
    <ShotViewer.Provider value={lightbox.show}>
      <article>
      <ReadingProgress />
      <JumpBar title={study.title} chapters={study.chapters} />
      <Wall>
        <Cover cover={study.cover} />

        <Lane width="column" className="wall__lead">
          <p className="lead">{study.lead}</p>
        </Lane>

        <MetaStrip items={study.meta} />

        {study.status.state === "held" && (
          <Lane width="column">
            <p className="held">
              <Badge tone="warning" dot>
                Screens publish {study.status.until}
              </Badge>{" "}
              {study.status.why}
            </p>
          </Lane>
        )}

        {study.chapters.map((chapter) => (
          <ChapterView key={chapter.id} chapter={chapter} />
        ))}

        {next && (
          <Lane width="wall">
            <Link to={`/work/${next.slug}`} className="next">
              <span className="kicker">Next project</span>
              <span className="next__title">{next.title}</span>
              <span className="next__what">{next.what}</span>
            </Link>
          </Lane>
        )}

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
