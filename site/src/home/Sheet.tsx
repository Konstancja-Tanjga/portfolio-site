import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { asset } from "../system/asset";
import type { Rect } from "../system/Exploded";
import { reduced } from "../system/motion";
import { useReveal } from "../system/Reveal";
import { analyticsExploded as dash } from "./exploded";
import type { SheetData, SheetDrawing } from "../content/types";
import { Mark } from "./marks";

/*
 * The sheet: how I work, drawn rather than written.
 *
 * One real component, the chart card from the Analytics dashboard, goes
 * through eight stations, seven tools and the product it ships in,
 * between the first option and the shipped screen. Each station is that
 * tool's window, drawn in the site's inks with the card inside it where
 * the tool would show it: as one of three options, under Figma's
 * selection handles, as a specification in the editor, as a story, as a
 * snapshot diff, and back in place on the screen it came from; the pull
 * request and the package show only their own chrome.
 *
 * A conveyor line runs through the windows and is drawn as the reader
 * scrolls, with the card as a small square at its head; a station lights
 * when the head reaches it. The line is routed after layout, so the same
 * drawing works at four columns, two, or one. Under reduced motion (read
 * once, when the sheet mounts) the line is complete and every station is
 * lit.
 *
 * The card is cropped from the same export the exploded screen uses, at
 * the rects measured there, so the sheet and the screen agree.
 */

const SRC = dash.src;
const [SW, SH] = dash.size;
const [SX, SY, SCREEN_W, SCREEN_H] = dash.screen;
const cards = dash.parts.filter((p) => p.name === "fox-card").map((p) => p.rect);
const CARD = cards[0];

/** A crop of the dashboard export. `rect` is measured from the screen's corner on the 1600 px export, as the exploded-screen rects are; the crop is shown at `k` of that size. */
function Crop({ rect, k, className, style, children }: { rect: Rect; k: number; className?: string; style?: CSSProperties; children?: ReactNode }) {
  const [x, y, w, h] = rect;
  return (
    <div
      className={className ? `sh-crop ${className}` : "sh-crop"}
      style={{
        width: w * k,
        height: h * k,
        backgroundImage: `url(${asset(SRC)})`,
        backgroundSize: `${SW * k}px ${SH * k}px`,
        backgroundPosition: `-${(SX + x) * k}px -${(SY + y) * k}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const Bar = ({ w, tone }: { w: number; tone?: "sand" }) => <i className={tone ? "sh-bar is-sand" : "sh-bar"} style={{ width: `${w}%` }} />;

/* ---- the eight drawings, one per station ---- */

function Options() {
  return (
    <div className="sh-opts">
      {cards.slice(0, 3).map((r, i) => (
        <div key={i} className={i === 1 ? "sh-opt is-pick" : "sh-opt"}>
          <Crop rect={r} k={0.25} />
          {i === 1 && <b>chosen</b>}
        </div>
      ))}
    </div>
  );
}

function Figma() {
  return (
    <div className="sh-figma">
      <div className="sh-panel">
        <span className="sh-mono">fox-card</span>
        <Bar w={70} /><Bar w={52} /><Bar w={62} /><Bar w={40} />
      </div>
      <div className="sh-sel">
        <Crop rect={CARD} k={0.4} />
        <i /><i /><i /><i />
        <b>fox-card</b>
      </div>
    </div>
  );
}

function Code() {
  return (
    <div className="sh-code">
      <div className="sh-tabs"><span className="is-on">fox-card.spec.md</span><span>fox-card.ts</span></div>
      <div className="sh-lines">
        <span className="sh-mono is-sand">## States</span>
        <Bar w={64} /><Bar w={48} />
        <span className="sh-mono is-sand">## Keyboard</span>
        <Bar w={56} />
        <span className="sh-mono is-sand">## Contrast</span>
        <Bar w={70} /><Bar w={38} />
      </div>
      <div className="sh-term"><span>❯</span> figma mcp · get_design_context <i /></div>
    </div>
  );
}

function Storybook() {
  return (
    <div className="sh-sb">
      <div className="sh-panel">
        <span className="sh-mono is-strong">Card</span>
        {["Default", "Loading", "Empty", "Error"].map((s, i) => (
          <span key={s} className={i === 0 ? "sh-mono sh-story is-on" : "sh-mono sh-story"}>{s}</span>
        ))}
      </div>
      <div className="sh-canvas">
        <Crop rect={CARD} k={0.34} />
        <div className="sh-controls"><span className="sh-mono">Controls</span><Bar w={60} /><Bar w={45} /></div>
      </div>
    </div>
  );
}

function Chromatic() {
  return (
    <div className="sh-chr">
      <div className="sh-pair">
        <div><span className="sh-mono">Baseline</span><Crop rect={CARD} k={0.29} /></div>
        <div><span className="sh-mono">New</span><Crop rect={CARD} k={0.29}><i className="sh-diff" /></Crop></div>
      </div>
      <div className="sh-pills"><span className="is-fill">Accept</span><span>Deny</span></div>
    </div>
  );
}

function Merge({ lines = ["Storybook", "Chromatic", "Reviewed against the frames, by me"] }: { lines?: string[] }) {
  return (
    <div className="sh-pr">
      <div className="sh-pr__head"><Bar w={58} /><span className="sh-pill is-fill">Merged</span></div>
      <ul>
        {lines.map((l) => <li key={l}>{l}</li>)}
      </ul>
    </div>
  );
}

function Nexus() {
  const bars = [2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1];
  return (
    <div className="sh-pkg">
      <p className="sh-pkg__name">FOX <span>v3</span></p>
      <div className="sh-barcode" aria-hidden="true">
        {bars.map((w, i) => <i key={i} style={{ width: w }} />)}
      </div>
      <span className="sh-mono">versioned package · six installs</span>
    </div>
  );
}

function Shipped() {
  const k = 0.178;
  const [x, y, w, h] = CARD;
  return (
    <div className="sh-ship">
      <Crop rect={[0, 0, SCREEN_W, SCREEN_H]} k={k} className="sh-ship__screen">
        <i className="sh-ship__here" style={{ left: x * k, top: y * k, width: w * k, height: h * k }}><b>here</b></i>
      </Crop>
    </div>
  );
}

const DRAWINGS: Record<SheetDrawing, (p: { lines?: string[] }) => JSX.Element> = { options: Options, figma: Figma, code: Code, storybook: Storybook, chromatic: Chromatic, merge: Merge, nexus: Nexus, shipped: Shipped };

/* ---- the sheet ---- */

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
/** The window width the drawings are laid out for, in px: four columns at full page width. */
const DESIGN = 254;

export function Sheet({ data: sheet }: { data: SheetData }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const track = useRef<HTMLDivElement | null>(null);
  const list = useRef<HTMLOListElement | null>(null);
  const svg = useRef<SVGSVGElement | null>(null);
  const line = useRef<SVGPathElement | null>(null);
  const head = useRef<SVGRectElement | null>(null);

  useEffect(() => {
    const ol = list.current, tr = track.current, sv = svg.current, path = line.current, dot = head.current;
    if (!ol || !tr || !sv || !path || !dot) return;
    const still = reduced();
    const items = [...ol.querySelectorAll<HTMLLIElement>(".sh-station")];
    const wins = items.map((li) => li.querySelector<HTMLElement>(".sh-win")!);
    const nums = items.map((li) => li.querySelector<HTMLElement>(".sh-n")!);
    let points: [number, number][] = [];
    let entry: number[] = [];
    let total = 0;
    let frame = 0;

    // The line runs along the row of station numbers, through their
    // vertical centre, so the numbers sit on it as text sits on a
    // dimension line. It is given a point above each window's left edge,
    // where the station counts as entered, starts OUT px before the first
    // window and ends OUT px after the last. Where the row wraps it steps
    // OUT px past the last window, down to UP px above the next number
    // row, back to OUT px before that row's first window, and down onto
    // the row.
    const OUT = 12, UP = 20;
    const route = () => {
      // the drawings are laid out for a window DESIGN px wide; zoom them to the real one
      wins.forEach((w) => w.style.setProperty("--sh-zoom", (w.clientWidth / DESIGN).toFixed(3)));
      const base = tr.getBoundingClientRect();
      /** l, w: the window; y: the number row's centre line. */
      const r = wins.map((w, i) => {
        const b = w.getBoundingClientRect();
        const n = nums[i].getBoundingClientRect();
        return { l: b.left - base.left, y: n.top + n.height / 2 - base.top, w: b.width };
      });
      sv.setAttribute("viewBox", `0 0 ${base.width} ${base.height}`);
      points = [];
      entry = [];
      const push = (x: number, y: number) => points.push([x, y]);
      r.forEach((b, i) => {
        const y = b.y;
        if (i === 0) push(b.l - OUT, y);
        push(b.l, y);
        entry.push(points.length - 1);
        push(b.l + b.w, y);
        const n = r[i + 1];
        if (!n) { push(b.l + b.w + OUT, y); return; }
        const ny = n.y;
        if (Math.abs(ny - y) < 2 && n.l > b.l) return; // same row: straight on
        push(b.l + b.w + OUT, y);
        push(b.l + b.w + OUT, ny - UP);
        push(n.l - OUT, ny - UP);
        push(n.l - OUT, ny);
      });
      path.setAttribute("d", points.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" "));
      total = path.getTotalLength();
      // length along the line at which each station is entered
      const at: number[] = [0];
      for (let i = 1; i < points.length; i++) {
        const [ax, ay] = points[i - 1], [bx, by] = points[i];
        at.push(at[i - 1] + Math.hypot(bx - ax, by - ay));
      }
      entry = entry.map((i) => at[i]);
      path.style.strokeDasharray = `${total}`;
      paint();
    };

    const paint = () => {
      frame = 0;
      let p = 1;
      if (!still) {
        const b = tr.getBoundingClientRect();
        const vh = window.innerHeight;
        p = clamp((vh * 0.82 - b.top) / (b.height + vh * 0.42));
      }
      const len = total * p;
      path.style.strokeDashoffset = `${total - len}`;
      const pt = path.getPointAtLength(len);
      dot.setAttribute("x", `${pt.x - 5}`);
      dot.setAttribute("y", `${pt.y - 5}`);
      items.forEach((li, i) => li.classList.toggle("is-lit", len >= entry[i] - 1));
    };
    const kick = () => { if (!frame) frame = requestAnimationFrame(paint); };

    route();
    const ro = new ResizeObserver(route);
    ro.observe(tr);
    if (!still) window.addEventListener("scroll", kick, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", kick);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={shown ? "sheet is-shown" : "sheet"}>
      <ul className="sh-tools" aria-label="Tools">
        {sheet.tools.map((t) => (
          <li key={t.name} className="sh-tool">
            <span className="sh-tool__mark" aria-hidden="true">{t.mark ? <Mark name={t.mark} size={26} /> : <span className="sh-tool__glyph">{t.glyph ?? "</>"}</span>}</span>
            <span className="sh-tool__name">{t.name}</span>
            <span className="sh-tool__what">{t.what}</span>
          </li>
        ))}
      </ul>
      <div ref={track} className="sh-track">
        <svg ref={svg} className="sh-line" aria-hidden="true" preserveAspectRatio="none">
          <path ref={line} className="sh-line__path" />
          <rect ref={head} className="sh-line__head" width="10" height="10" />
        </svg>
      <ol ref={list} className="sh-stations">
        {sheet.stations.map((s, i) => {
          const Drawing = s.drawing ? DRAWINGS[s.drawing] : null;
          return (
            <li key={s.title} className="sh-station">
              <p className="sh-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</p>
              <div className="sh-win">
                <p className="sh-win__bar"><span>{s.mark && <Mark name={s.mark} size={13} />}{s.tool}</span><span>{s.file}</span></p>
                {s.image ? (
                  <div className="sh-win__body sh-win__body--image"><img src={asset(s.image.src)} alt={s.image.alt} loading="lazy" decoding="async" /></div>
                ) : (
                  <div className="sh-win__body" aria-hidden="true">{Drawing && <Drawing lines={s.lines} />}</div>
                )}
              </div>
              <h3 className="sh-title">{s.title}</h3>
              <p className="sh-body">{s.body}</p>
            </li>
          );
        })}
      </ol>
      </div>

      <div className={sheet.rhythm ? "sh-foot" : "sh-foot sh-foot--block"}>
        {sheet.rhythm && <div className="sh-rhythm">
          <p className="sh-label">Rhythm</p>
          {sheet.rhythm.map((r) => (
            <div key={r.every} className="sh-rhythm__row">
              <svg className="sh-ruler" viewBox="0 0 1000 20" preserveAspectRatio="none" aria-hidden="true">
                <line x1="0" y1="19" x2="1000" y2="19" className={r.ticks ? "sh-ruler__base" : "sh-ruler__base is-dashed"} />
                {Array.from({ length: r.ticks }, (_, i) => {
                  const x = (1000 / r.ticks) * (i + 1) - 1000 / r.ticks / 2;
                  return <line key={i} x1={x} y1={r.ticks > 10 ? 12 : 2} x2={x} y2="19" className={r.ticks > 10 ? "sh-ruler__tick" : "sh-ruler__tick is-major"} />;
                })}
              </svg>
              <p><strong>{r.every}</strong> {r.what}</p>
            </div>
          ))}
        </div>}
        <dl className="sh-block">
          {sheet.block.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </div>
    </div>
  );
}
