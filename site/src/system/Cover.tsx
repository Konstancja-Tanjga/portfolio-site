import { useEffect, useRef } from "react";
import { opensWithQuantifier, withQuantifiers } from "./Quantifiers";

import type { Block, CaseStudy, Cover as CoverData } from "../content/types";
import { asset } from "./asset";
import { useTilt } from "./motion";
import { Lane } from "./Wall";
import { Motif, type MotifName } from "./Motif";

/**
 * The intro. The title first, set very large on the ground, with the
 * kicker above it and the subline, the stamp as a row of tags and the
 * credit under it. Then the cover art as one wide image that drifts a
 * little slower than the page (parallax, a few pixels, off under
 * prefers-reduced-motion).
 *
 * Below the title: the product's screens blending through (`layers`), or
 * the same typeset cover the work grid shows, with the study's first
 * mockup (`art`), so the intro and the tile that led here are one image.
 */
export function Cover({ cover, art: device }: { cover: CoverData; art?: string }) {
  const art = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = art.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const move = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      // The image travels at 85% of the page's speed, a few pixels either way.
      const y = Math.max(-r.height, Math.min(r.height, r.top)) * -0.15;
      el.style.setProperty("--cover-shift", `${y.toFixed(1)}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(move);
    };
    move();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const tags = cover.stamp.split(/\s*[·•]\s*/).filter(Boolean);

  return (
    <>
      <Lane width="wall">
        <header className="cover">
          <p className="cover__kicker">{cover.kicker}</p>
          <h1 className="cover__headline">
            {cover.headline.map((line, i) => (
              <span
                className={opensWithQuantifier(line) ? "cover__line cover__line--own" : "cover__line"}
                key={line}
                style={{ animationDelay: `${120 + i * 110}ms` }}
              >
                {i > 0 && " "}
                {withQuantifiers(line)}
              </span>
            ))}
          </h1>
          <p className="cover__subline">{cover.subline}</p>
          <div className="cover__row">
            <ul className="cover__tags" aria-label="What the project covers">
              {tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="cover__credit">{cover.credit}</p>
          </div>
        </header>
      </Lane>
      {cover.layers?.length ? (
        <Lane width="bleed">
          <div className="cover__art cover__art--layers" ref={art} aria-hidden="true" style={{ "--layers": cover.layers.length } as React.CSSProperties}>
            <Layers layers={cover.layers} motif={cover.motif} />
          </div>
        </Lane>
      ) : (
        <Lane width="bleed">
          <div className="cover__art cover__art--type" ref={art} aria-hidden="true">
            <TypeCover cover={cover} device={device} eager />
          </div>
        </Lane>
      )}
    </>
  );
}


/**
 * Several images of the work stacked in depth, surfacing in turn. The motif
 * drawn over them defaults to the chart; `motif={null}` draws none, which
 * the home hero uses: the signs belong to each study's own cover.
 */
export function Layers({ layers, motif }: { layers: { src: string; label: string }[]; motif?: MotifName | null }) {
  const tilt = useTilt<HTMLDivElement>(3);
  return (
    <div className="layers" ref={tilt} style={{ "--layers": layers.length } as React.CSSProperties}>
      {layers.map((l, i) => (
        <figure className="layers__item" key={l.src} style={{ "--i": i } as React.CSSProperties}>
          <img src={asset(l.src)} alt="" loading={i === 0 ? "eager" : "lazy"} decoding="async" />
          <figcaption className="layers__label">{l.label}</figcaption>
        </figure>
      ))}
      {motif !== null && <Motif name={motif} />}
    </div>
  );
}

/**
 * The cover as type, for the work grid and the case-page hero. The old thumbnails were Figma
 * boards in the product's yellow, which said nothing about the project
 * and fought the page. This one says what the project is and whose it is,
 * in the site's own type, and lets the first mockup of the study lean out
 * of the corner. `device` is a MacBook WebP the study already owns, and
 * `cover.art` overrides it; without either the cover is type alone. The tile names and dates the link in text
 * below the cover, so the cover is hidden from assistive technology.
 */
export function TypeCover({ cover, device, eager }: { cover: CoverData; device?: string; eager?: boolean }) {
  const parts = cover.credit.split("·").map((x) => x.trim());
  const orgRaw = cover.org ?? (parts.length === 3 ? parts[1] : undefined);
  // "Personal project" already in the kicker is not said twice
  const org = orgRaw && !cover.kicker.toLowerCase().includes(orgRaw.toLowerCase()) ? orgRaw : undefined;
  // the tile's own title and year sit under the cover, so this is decoration to a reader
  const art = cover.art?.src ?? device;
  const cls = ["tcover", art && "tcover--device", cover.art?.portrait && "tcover--portrait"].filter(Boolean).join(" ");
  return (
    <span className={cls} aria-hidden="true">
      <span className="tcover__kicker">{cover.kicker}</span>
      {org && <span className="tcover__org">{org}</span>}
      <span className="tcover__headline">
        {cover.headline.map((line) => (
          <span key={line}>{withQuantifiers(line)}</span>
        ))}
      </span>
      <span className="tcover__sub">{cover.subline}</span>
      {art && <img className="tcover__device" src={asset(art)} alt="" loading={eager ? "eager" : "lazy"} decoding="async" />}
    </span>
  );
}


/** The first MacBook mockup a study owns, for its typeset cover. */
export function firstDevice(study: CaseStudy): string | undefined {
  if (study.cover.layers?.[0]) return study.cover.layers[0].src;
  const fromBlock = (b: Block): string | undefined => {
    switch (b.kind) {
      case "shot":
        return b.frame === "macbook" ? b.src : undefined;
      case "duo":
      case "set":
        return b.items.find((i) => i.frame === "macbook")?.src;
      case "carousel":
        return b.items.find((i) => i.frame === "macbook")?.src;
      case "dossier":
        return b.items.find((i) => i.cover.frame === "macbook")?.cover.src;
      case "annotated":
        return b.items.find((i) => i.shot.frame === "macbook")?.shot.src;
      default:
        return undefined;
    }
  };
  for (const c of study.chapters) for (const b of c.blocks) { const d = fromBlock(b); if (d) return d; }
  return undefined;
}
