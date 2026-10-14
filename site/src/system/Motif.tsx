/**
 * The sign drawn in sand over a study's screens (Layers), one per subject,
 * so the overlay says what the product is about rather than "a chart" for
 * all of them. Procedural: the shapes mean nothing and claim nothing.
 *
 * All but the chart float on a dark card (see Motif).
 *
 * Every motif reuses the chart's motion classes, so all of them build the
 * same way: `chart__bars` rects rise, `chart__line` paths draw themselves
 * (pathLength 1), `chart__dots` circles light up, each staggered by
 * inline delay. Drawn in a 520 × 200 box, like the chart.
 */
export type MotifName = "chart" | "documents" | "chat" | "tokens" | "network" | "kettle" | "report";

const SAND = "#e3d2ad";
const FILL = "rgba(227,210,173,0.55)";
const DARK = "rgba(15,15,14,0.85)";
const GRID = "rgba(241,237,228,0.18)";
const ms = (n: number) => ({ animationDelay: `${n}ms` });

export function Motif({ name = "chart" }: { name?: MotifName }) {
  const Draw = MOTIFS[name];
  // The chart is screen-blended and reaches past the laptop onto the dark
  // ground. The others sit mostly over light app screens, where a screen
  // blend makes sand vanish, so they float on a card of their own instead.
  const card = name !== "chart";
  return (
    <svg className={card ? "layers__chart layers__chart--card" : "layers__chart"} viewBox="0 0 520 200" preserveAspectRatio="none">
      {card && <rect className="motif__card" x="4" y="4" width="512" height="192" rx="18" />}
      <Draw />
    </svg>
  );
}

const MOTIFS: Record<MotifName, () => JSX.Element> = {
  /** Analytics: bars that rise, a line that draws, points that light up. */
  chart() {
    const bars = [34, 52, 41, 68, 58, 80, 72, 91];
    const pts = bars.map((v, i) => [40 + i * 60, 180 - v * 1.5] as const);
    const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");
    return (
      <>
        <g className="chart__grid" stroke={GRID} strokeWidth="1">
          {[40, 80, 120, 160].map((y) => <line key={y} x1="20" x2="500" y1={y} y2={y} />)}
        </g>
        <g className="chart__bars" fill={FILL}>
          {bars.map((v, i) => <rect key={i} x={24 + i * 60} y={180 - v * 1.5} width="32" height={v * 1.5} rx="3" style={ms(600 + i * 90)} />)}
        </g>
        <path className="chart__line" d={d} fill="none" stroke={SAND} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" pathLength={1} />
        <g className="chart__dots" fill="#0f0f0e" stroke={SAND} strokeWidth="2">
          {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4.5" style={ms(1500 + i * 110)} />)}
        </g>
      </>
    );
  },

  /** Documents: a stack of sheets, the front one written, filed into a dossier tree. */
  documents() {
    const sheets = [[60, 58], [96, 42], [132, 26]] as const;
    const tree = [[400, 40], [400, 100], [400, 160]] as const;
    return (
      <>
        <g className="chart__bars">
          {sheets.map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="118" height="130" rx="6" fill={DARK} stroke={SAND} strokeWidth="2" strokeOpacity={0.45 + i * 0.25} style={ms(500 + i * 140)} />
          ))}
        </g>
        <path className="chart__line" d="M222 26 L250 26 L250 54 Z" fill="none" stroke={SAND} strokeWidth="2" pathLength={1} style={ms(1000)} />
        {[62, 84, 106, 128, 150].map((y, i) => (
          <path key={y} className="chart__line" d={`M150 ${y} L${i % 2 ? 214 : 232} ${y}`} stroke={SAND} strokeWidth="3" strokeLinecap="round" pathLength={1} style={ms(1150 + i * 120)} />
        ))}
        <path className="chart__line" d="M262 100 L340 100 M340 40 L340 160 M340 40 L388 40 M340 100 L388 100 M340 160 L388 160" fill="none" stroke={SAND} strokeWidth="2" strokeOpacity="0.7" pathLength={1} style={ms(1500)} />
        <g className="chart__bars">
          {tree.map(([x, y], i) => (
            <path key={i} d={`M${x} ${y - 12} h14 l5 6 h25 v20 h-44 z`} fill={i === 1 ? FILL : DARK} stroke={SAND} strokeWidth="2" style={ms(1800 + i * 120)} />
          ))}
        </g>
        <g className="chart__dots" fill={SAND}>
          {tree.map(([x, y], i) => <circle key={i} cx={x + 60} cy={y} r="4" style={ms(2100 + i * 110)} />)}
        </g>
      </>
    );
  },

  /** Elly: a question, an answer with cited sources, the next one being typed. */
  chat() {
    return (
      <>
        <g className="chart__bars">
          <rect x="300" y="14" width="196" height="40" rx="18" fill={FILL} style={ms(500)} />
          <rect x="24" y="66" width="330" height="112" rx="20" fill={DARK} stroke={SAND} strokeWidth="2" style={ms(800)} />
        </g>
        <path className="chart__line" d="M326 34 L462 34" stroke="#0f0f0e" strokeWidth="4" strokeLinecap="round" pathLength={1} style={ms(700)} />
        {[[94, 300], [118, 270], [142, 310]].map(([y, x2], i) => (
          <path key={y} className="chart__line" d={`M52 ${y} L${x2} ${y}`} stroke={SAND} strokeWidth="3.5" strokeLinecap="round" pathLength={1} style={ms(1100 + i * 180)} />
        ))}
        <g className="chart__bars">
          {[0, 1, 2].map((i) => <rect key={i} x={52 + i * 30} y="156" width="22" height="14" rx="3" fill="none" stroke={SAND} strokeWidth="1.8" style={ms(1700 + i * 100)} />)}
        </g>
        <g className="chart__dots" fill={SAND}>
          {[0, 1, 2].map((i) => <circle key={i} cx={400 + i * 18} cy="150" r="5" style={ms(2000 + i * 140)} />)}
        </g>
        <path className="chart__line" d="M462 86 Q466 104 484 108 Q466 112 462 130 Q458 112 440 108 Q458 104 462 86 Z" fill="none" stroke={SAND} strokeWidth="2.2" pathLength={1} style={ms(1600)} />
      </>
    );
  },

  /** Big Hat: tokens become a component: a colour ramp, the spacing steps, a button. */
  tokens() {
    const steps = [4, 8, 12, 16, 24, 32];
    return (
      <>
        <g className="chart__bars">
          {[0.18, 0.3, 0.42, 0.56, 0.72, 0.9].map((o, i) => (
            <rect key={i} x={24 + i * 52} y="20" width="42" height="42" rx="8" fill={`rgba(227,210,173,${o})`} style={ms(500 + i * 90)} />
          ))}
        </g>
        <g className="chart__bars" fill={FILL}>
          {steps.map((s, i) => {
            const x = 30 + steps.slice(0, i).reduce((a, b) => a + b * 1.4 + 18, 0);
            return <rect key={s} x={x} y={150 - s * 1.4} width={s * 1.4} height={s * 1.4} rx="3" style={ms(1000 + i * 90)} />;
          })}
        </g>
        <path className="chart__line" d="M30 170 L330 170" stroke={GRID} strokeWidth="1.5" pathLength={1} style={ms(900)} />
        <path className="chart__line" d="M384 92 h88 a28 28 0 0 1 0 56 h-88 a28 28 0 0 1 0 -56 Z" fill="none" stroke={SAND} strokeWidth="2.5" pathLength={1} style={ms(1500)} />
        <path className="chart__line" d="M398 120 L458 120" stroke={SAND} strokeWidth="4" strokeLinecap="round" pathLength={1} style={ms(2000)} />
        <path className="chart__line" d="M360 41 C420 41 428 60 428 86" fill="none" stroke={SAND} strokeWidth="1.5" strokeOpacity="0.6" pathLength={1} style={ms(1800)} />
        <g className="chart__dots" fill="#0f0f0e" stroke={SAND} strokeWidth="2">
          <circle cx="428" cy="86" r="4" style={ms(2200)} />
        </g>
      </>
    );
  },

  /** Xecta: wells flowing into a manifold and on to the plant. */
  network() {
    const wells = [[40, 30], [70, 80], [36, 130], [96, 176], [140, 40]] as const;
    return (
      <>
        <g className="chart__grid" stroke={GRID} strokeWidth="1">
          {[50, 100, 150].map((y) => <line key={y} x1="20" x2="500" y1={y} y2={y} />)}
        </g>
        {wells.map(([x, y], i) => (
          <path key={i} className="chart__line" d={`M${x} ${y} C${x + 90} ${y} 230 100 300 100`} fill="none" stroke={SAND} strokeWidth="2.2" strokeOpacity="0.8" pathLength={1} style={ms(700 + i * 130)} />
        ))}
        <path className="chart__line" d="M300 100 L440 100" stroke={SAND} strokeWidth="4" strokeLinecap="round" pathLength={1} style={ms(1500)} />
        <g className="chart__bars">
          <rect x="440" y="70" width="56" height="60" rx="6" fill={FILL} style={ms(1800)} />
          <rect x="286" y="86" width="28" height="28" rx="14" fill={DARK} stroke={SAND} strokeWidth="2.5" style={ms(1300)} />
        </g>
        <g className="chart__dots" fill="#0f0f0e" stroke={SAND} strokeWidth="2.2">
          {wells.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="6" style={ms(400 + i * 110)} />)}
        </g>
      </>
    );
  },

  /** World of Raptors: a kettle, raptors circling up a thermal. */
  kettle() {
    const birds = [[150, 172], [300, 150], [190, 112], [330, 84], [220, 56], [300, 28], [250, 18]] as const;
    return (
      <>
        <path className="chart__line" d="M30 188 L490 188" stroke={GRID} strokeWidth="1.5" pathLength={1} style={ms(400)} />
        <path
          className="chart__line"
          d="M240 186 C120 180 120 150 240 146 C360 142 360 118 240 114 C140 110 140 88 240 84 C330 80 330 62 240 58 C170 55 170 40 240 36 C290 33 290 22 250 18"
          fill="none" stroke={SAND} strokeWidth="1.8" strokeOpacity="0.55" pathLength={1} style={ms(600)}
        />
        {birds.map(([x, y], i) => {
          const s = 1 - i * 0.07;
          return (
            <path key={i} className="chart__line" d={`M${x - 16 * s} ${y - 5 * s} Q${x - 7 * s} ${y - 9 * s} ${x} ${y} Q${x + 7 * s} ${y - 9 * s} ${x + 16 * s} ${y - 5 * s}`} fill="none" stroke={SAND} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength={1} style={ms(1100 + i * 160)} />
          );
        })}
        <g className="chart__dots" fill="none" stroke={SAND} strokeWidth="2">
          <circle cx="440" cy="40" r="16" style={ms(900)} />
        </g>
      </>
    );
  },

  /** Volvo: the report builder, a table assembling, one column on the move. */
  report() {
    const cols = [24, 124, 224, 324];
    return (
      <>
        <g className="chart__bars">
          <rect x="24" y="16" width="400" height="26" rx="5" fill={FILL} style={ms(500)} />
          {[0, 1, 2, 3, 4].map((r) =>
            cols.map((x, c) => (
              <rect key={`${r}-${c}`} x={x + 10} y={56 + r * 28} width={[64, 48, 72, 40][(r + c) % 4]} height="10" rx="5" fill={`rgba(227,210,173,${c === 2 ? 0.25 : 0.5})`} style={ms(700 + r * 90 + c * 40)} />
            )),
          )}
        </g>
        <path className="chart__line" d={`M24 50 L424 50 ${cols.slice(1).map((x) => `M${x} 16 L${x} 196`).join(" ")}`} fill="none" stroke={GRID} strokeWidth="1.5" pathLength={1} style={ms(600)} />
        <path className="chart__line" d="M250 26 h96 a6 6 0 0 1 6 6 v160 a6 6 0 0 1 -6 6 h-96 a6 6 0 0 1 -6 -6 v-160 a6 6 0 0 1 6 -6 Z" fill="none" stroke={SAND} strokeWidth="2.5" pathLength={1} style={ms(1500)} />
        <path className="chart__line" d="M372 112 L460 112 M444 98 L460 112 L444 126" fill="none" stroke={SAND} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" pathLength={1} style={ms(1900)} />
        <g className="chart__dots" fill={SAND}>
          <circle cx="478" cy="112" r="6" style={ms(2300)} />
        </g>
      </>
    );
  },
};
