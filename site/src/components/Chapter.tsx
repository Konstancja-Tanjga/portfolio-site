import type { Block, Chapter } from "../content/types";
import { useReveal } from "../system/Reveal";
import {
  AnnotatedSet,
  Beside,
  Brief,
  Carousel,
  Code,
  Dossier,
  Duo,
  Evolution,
  Exploded,
  Flow,
  Joint,
  Lane,
  Loop,
  Palette,
  Passage,
  Personas,
  Points,
  Portrait,
  ProcessBoard,
  Pull,
  Shot,
  ShotSet,
  Spec,
  Stack,
  Stats,
  Steps,
  Thesis,
  UseCase,
  Video,
} from "../system";
import { Sheet } from "../home/Sheet";

/** Content block → component. The only place this mapping exists. */
function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "passage":
      return <Passage html={block.html} />;
    case "points":
      return <Points items={block.items} fold={block.fold} />;
    case "shot":
      return (
        <Shot width={block.width} src={block.src} slot={block.slot} caption={block.caption} frame={block.frame} hotspots={block.hotspots} folded={block.folded} inset={block.inset} />
      );
    case "duo":
      return <Duo items={block.items} caption={block.caption} width={block.width} />;
    case "set":
      return <ShotSet items={block.items} size={block.size} caption={block.caption} />;
    case "video":
      return (
        <Video
          src={block.src}
          title={block.title}
          poster={block.poster}
          caption={block.caption}
          subtitles={block.subtitles}
          credit={block.credit}
          clip={block.clip}
          frame={block.frame}
          width={block.width}
        />
      );
    case "stats":
      return <Stats items={block.items} />;
    case "pull":
      return <Pull text={block.text} />;
    case "thesis":
      return <Thesis label={block.label} text={block.text} />;
    case "stack":
      return <Stack rows={block.rows} caption={block.caption} />;
    case "spec":
      return <Spec rows={block.rows} caption={block.caption} />;
    case "brief":
      return <Brief rows={block.rows} />;
    case "flow":
      return <Flow stages={block.stages} note={block.note} />;
    case "joint":
      return <Joint question={block.question} answers={block.answers} />;
    case "carousel":
      return <Carousel items={block.items} shape={block.shape} />;
    case "code":
      return <Code code={block.code} caption={block.caption} source={block.source} />;
    case "portrait":
      return <Portrait portrait={block.portrait} />;
    case "personas":
      return <Personas items={block.items} standfirst={block.standfirst} />;
    case "palette":
      return <Palette items={block.items} standfirst={block.standfirst} caption={block.caption} />;
    case "process":
      return <ProcessBoard process={block.process} />;
    case "steps":
      return <Steps items={block.items} standfirst={block.standfirst} />;
    case "usecase":
      return <UseCase uc={block.uc} />;
    case "evolution":
      return <Evolution items={block.items} />;
    case "annotated":
      return <AnnotatedSet items={block.items} />;
    case "beside":
      return <Beside html={block.html} video={block.video} caption={block.caption} />;
    case "exploded":
      return <Exploded screen={block.screen} title={block.title} level={3} />;
    case "loop":
      return <Loop stations={block.stations} edges={block.edges} centre={block.centre} caption={block.caption} />;
    case "dossier":
      return <Dossier items={block.items} render={(b) => <BlockView block={b} />} />;
    case "sheet":
      return (
        <Lane width="wall">
          <Sheet data={block.sheet} />
        </Lane>
      );
  }
}

export function ChapterView({ chapter }: { chapter: Chapter }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section className="chapter">
      {(chapter.heading || chapter.maxim || chapter.standfirst) && (
        <Lane width="wall" className={shown ? "chapter__head is-shown" : "chapter__head"} id={chapter.id}>
          <div ref={ref} className="chapter__inner" data-n={chapter.n}>
          {chapter.n && <span className="chapter__n">{chapter.n}</span>}
          {chapter.heading && <h2 className="chapter__heading">{chapter.heading}</h2>}
          {chapter.maxim && <p className="maxim">{chapter.maxim}</p>}
          {chapter.standfirst && <p className="standfirst">{chapter.standfirst}</p>}
          </div>
        </Lane>
      )}
      {chapter.blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </section>
  );
}
