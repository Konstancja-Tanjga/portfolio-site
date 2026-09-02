import type { Block, Chapter } from "../content/types";
import {
  AnnotatedSet,
  Duo,
  Evolution,
  Lane,
  Passage,
  Personas,
  Points,
  Pull,
  Shot,
  ShotSet,
  Spec,
  Stats,
  Steps,
  Thesis,
  UseCase,
  Video,
} from "../system";

/** Content block → component. The only place this mapping exists. */
function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "passage":
      return <Passage html={block.html} />;
    case "points":
      return <Points items={block.items} />;
    case "shot":
      return (
        <Shot width={block.width} src={block.src} slot={block.slot} caption={block.caption} />
      );
    case "duo":
      return <Duo items={block.items} caption={block.caption} />;
    case "set":
      return <ShotSet items={block.items} size={block.size} caption={block.caption} />;
    case "video":
      return (
        <Video
          src={block.src}
          title={block.title}
          poster={block.poster}
          caption={block.caption}
          credit={block.credit}
          width={block.width}
        />
      );
    case "stats":
      return <Stats items={block.items} />;
    case "pull":
      return <Pull text={block.text} />;
    case "thesis":
      return <Thesis label={block.label} text={block.text} />;
    case "spec":
      return <Spec rows={block.rows} caption={block.caption} />;
    case "personas":
      return <Personas items={block.items} standfirst={block.standfirst} />;
    case "steps":
      return <Steps items={block.items} standfirst={block.standfirst} />;
    case "usecase":
      return <UseCase uc={block.uc} />;
    case "evolution":
      return <Evolution items={block.items} />;
    case "annotated":
      return <AnnotatedSet items={block.items} />;
  }
}

export function ChapterView({ chapter }: { chapter: Chapter }) {
  return (
    <section className="chapter">
      {(chapter.heading || chapter.maxim || chapter.standfirst) && (
        <Lane width="wall" className="chapter__head" id={chapter.id}>
          {chapter.n && <span className="chapter__n">{chapter.n}</span>}
          {chapter.heading && <h2 className="chapter__heading">{chapter.heading}</h2>}
          {chapter.maxim && <p className="maxim">{chapter.maxim}</p>}
          {chapter.standfirst && <p className="standfirst">{chapter.standfirst}</p>}
        </Lane>
      )}
      {chapter.blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </section>
  );
}
