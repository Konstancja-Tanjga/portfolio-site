import { firstDevice } from "../system/Cover";
import { Link, useParams } from "react-router-dom";
import { findCase, listingFor, neighbours } from "../content";
import { ChapterView } from "../components/Chapter";
import { JumpBar } from "../components/JumpBar";
import { Badge } from "@bighatpoland/ui";

import { BackToTop } from "../components/BackToTop";
import { ReadingProgress } from "../components/ReadingProgress";
import { Lightbox, useLightbox } from "../system/Lightbox";
import { ShotViewer } from "../system/Shot";
import { Cover, Lane, MetaStrip, Wall } from "../system";
import { asset } from "../system/asset";
import { Dust } from "../system/Dust";

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
  const listing = listingFor(study);

  return (
    <ShotViewer.Provider value={lightbox.show}>
      <Dust density={0.8} />
      <article>
      <ReadingProgress />
      <JumpBar title={study.title} chapters={study.chapters} back={listing} />
      <Wall>
        <Cover cover={study.cover} art={firstDevice(study)} />

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
              {next.cover.shot.src && (
                <span className="next__art" aria-hidden="true">
                  <img src={asset(next.cover.shot.src)} alt="" loading="lazy" decoding="async" />
                </span>
              )}
              <span className="next__text">
                <span className="next__kicker">Next project</span>
                <span className="next__title">{next.title}</span>
                <span className="next__what">{next.what}</span>
              </span>
            </Link>
          </Lane>
        )}

        <Lane width="wall">
          <Link to={listing.to} className="back">
            <span aria-hidden="true">←</span> {listing.all}
          </Link>
        </Lane>
      </Wall>
      </article>
      <BackToTop />
      {lightbox.open && <Lightbox shot={lightbox.open} onClose={lightbox.close} />}
    </ShotViewer.Provider>
  );
}
