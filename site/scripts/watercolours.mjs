/**
 * Watercolours: originals in → web images and content out.
 *
 * The gallery grows by dropping files into ../Watercolours/<Category>/<Series>/,
 * so the content file is generated from the folders rather than hand-kept in
 * step with them. Run it after adding paintings:
 *
 *   node scripts/watercolours.mjs
 *
 * Originals are 40–110MB scans and are gitignored; what ships is a 2000px JPEG.
 * Titles come from the filename, cleaned up — override any that read badly in
 * TITLES below.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { basename, extname, join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..', '..');
const SRC = join(ROOT, 'Watercolours');
const OUT = join(ROOT, 'site', 'public', 'watercolours');
const CONTENT = join(ROOT, 'site', 'src', 'content', 'watercolours.ts');

/** Category order on the page, and the blurb under each heading. */
const CATEGORIES = [
  ['Architecture', 'Urban sketching, mostly on location.'],
  ['Birds', undefined],
  ['Animals', undefined],
  ['People', undefined],
];

/** Series order within a category, and the line under each series name. */
const SERIES = {
  France: [
    'France, Loire and castles',
    'A trip through the Loire and Brittany — the châteaux, and what was growing and standing around them.',
  ],
  Sevilla: ['Sevilla', 'La Giralda, the Setas, and the park in between.'],
  Malaga: ['Málaga', 'The city — its cathedral, its port and its light.'],
  Portugal: ['Portugal', 'Lisbon, on location.'],
  Prague: ['Prague', 'March, and mostly indoors.'],
  'New York': ['New York', undefined],
  'Cadiz province': [
    'Cádiz province',
    'Andalusia — the white towns and the hills behind them.',
  ],
};

/** Filenames whose cleaned-up form still reads badly. */
const TITLES = {
  Chanonceau: 'Chenonceau',
  'Cedre Noir': 'Cèdre Noir',
  'Great Elephant from Nantes': 'The Great Elephant, Nantes',
  LeVazereau: 'Le Vazereau',
  'Arco de Rua Augusta & Rocio Train Station_Lisbon': 'Arco da Rua Augusta',
  'Cathedral Se_Lisbon': 'Sé cathedral',
  'Se Cathedral': 'Sé cathedral',
  'Cathedral in Jerez_Magazine': 'Jerez cathedral',
  'Molinos de Vejer 1': 'Molinos de Vejer',
  'Malaga Catedral': 'Málaga cathedral',
  'Centre Pompidou_Malaga': 'Centre Pompidou',
  'Malaga_Palmeral de las Sorpresas': 'Palmeral de las Sorpresas',
  'The Palacio de Ferias y Congresos de Málaga': 'Palacio de Ferias y Congresos',
  'Fuente del Rey Malaga': 'Fuente del Rey',
  'White street in Malaga': 'White street',
  'Guggenheim Museum New York_Ramka': 'Guggenheim Museum',
  'Golden Gate_Ramka': 'Golden Gate',
  'Emaus Monastery': 'Emmaus Monastery',
  'Untitled-1': 'Sevilla',
  'Carmela horse kiss ramka 1': 'Carmela, the kiss',
  'Carmela mloda na siwym koniu 4': 'Carmela on the grey',
  'Geneta w ramce 3': 'Geneta',
  'Alejandro w ramce 4': 'Alejandro',
  'orka w ramce': 'Orca',
  'Tunczyk na scianie nad sofa': 'Tuna',
  'Tuna, squid and meduzas': 'Tuna, squid and jellyfish',
  'Flaming na krzesle w ramce': 'Flamingo on a chair',
  'Gaviota i monstera': 'Gaviota and monstera',
  'Glossy ibis mockup_': 'Glossy ibis',
  'Eve & Andrzej 2': 'Eve and Andrzej',
};

const IMAGE = /\.(png|jpe?g)$/i;

const slug = (value) =>
  value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** Filename → a title a person would write. */
function title(file) {
  const stem = basename(file, extname(file));
  if (TITLES[stem]) return TITLES[stem];
  const cleaned = stem
    .replace(/\bcopy\b/gi, '')
    .replace(/_?Ramka/g, '')
    .replace(/\bramka\b/gi, '')
    .replace(/w ramce\s*\d*/gi, '')
    .replace(/\bmockup_?\b/gi, '')
    .replace(/Watercolour\d+_?\d*/gi, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return cleaned || 'Untitled';
}

const dirs = (path) =>
  existsSync(path)
    ? readdirSync(path).filter((name) => statSync(join(path, name)).isDirectory())
    : [];

const images = (path) =>
  existsSync(path) ? readdirSync(path).filter((name) => IMAGE.test(name)).sort() : [];

/** sips: 2000px long edge, JPEG q82. A 110MB scan lands under 1MB. */
function convert(from, to) {
  execFileSync(
    'sips',
    ['-s', 'format', 'jpeg', '-s', 'formatOptions', '82', '-Z', '2000', from, '--out', to],
    { stdio: 'ignore' },
  );
}

function name(file, index) {
  return `${String(index + 1).padStart(2, '0')}-${slug(basename(file, extname(file)))}.jpg`;
}

function build() {
  if (!existsSync(SRC)) {
    console.error(`No originals at ${SRC}`);
    process.exit(1);
  }
  rmSync(OUT, { recursive: true, force: true });

  const categories = [];
  let count = 0;

  for (const [folderName, blurb] of CATEGORIES) {
    const from = join(SRC, folderName);
    if (!existsSync(from)) continue;

    const id = slug(folderName);
    const loose = [];
    const series = [];

    // Files sitting directly in the category.
    const direct = images(from);
    if (direct.length) {
      const to = join(OUT, id);
      mkdirSync(to, { recursive: true });
      direct.forEach((file, index) => {
        const out = name(file, index);
        convert(join(from, file), join(to, out));
        loose.push({ src: `/watercolours/${id}/${out}`, title: title(file) });
        count += 1;
      });
    }

    // Sub-folders are series, in the order SERIES declares; anything new
    // falls in after, so a folder added today still shows up today.
    const found = dirs(from);
    const ordered = [
      ...Object.keys(SERIES).filter((key) => found.includes(key)),
      ...found.filter((key) => !SERIES[key]),
    ];

    for (const folder of ordered) {
      const files = images(join(from, folder));
      if (!files.length) continue;
      const [label, note] = SERIES[folder] ?? [folder, undefined];
      const seriesId = slug(folder);
      const to = join(OUT, id, seriesId);
      mkdirSync(to, { recursive: true });

      const paintings = files.map((file, index) => {
        const out = name(file, index);
        convert(join(from, folder, file), join(to, out));
        count += 1;
        return { src: `/watercolours/${id}/${seriesId}/${out}`, title: title(file) };
      });

      series.push({ id: seriesId, name: label, blurb: note, paintings });
    }

    categories.push({ id, name: folderName, blurb, paintings: loose, series });
  }

  const ts = (value) => JSON.stringify(value);

  const body = categories
    .map((category) => {
      const lines = ['  {', `    id: ${ts(category.id)},`, `    name: ${ts(category.name)},`];
      if (category.blurb) lines.push(`    blurb: ${ts(category.blurb)},`);
      if (category.paintings.length) {
        lines.push('    paintings: [');
        for (const p of category.paintings) {
          lines.push(`      { src: ${ts(p.src)}, title: ${ts(p.title)} },`);
        }
        lines.push('    ],');
      }
      if (category.series.length) {
        lines.push('    series: [');
        for (const s of category.series) {
          lines.push('      {', `        id: ${ts(s.id)},`, `        name: ${ts(s.name)},`);
          if (s.blurb) lines.push(`        blurb: ${ts(s.blurb)},`);
          lines.push('        paintings: [');
          for (const p of s.paintings) {
            lines.push(`          { src: ${ts(p.src)}, title: ${ts(p.title)} },`);
          }
          lines.push('        ],', '      },');
        }
        lines.push('    ],');
      }
      lines.push('  },');
      return lines.join('\n');
    })
    .join('\n');

  writeFileSync(
    CONTENT,
    `/**
 * GENERATED by scripts/watercolours.mjs — do not edit by hand.
 *
 * Add paintings by dropping files into Watercolours/<Category>/<Series>/ and
 * running \`node scripts/watercolours.mjs\`. Series order and the nicer titles
 * live in that script.
 *
 * Not a case study — a gallery. Painting is on the CV under Outside work, and
 * it belongs on the site for the same reason: it says something true that the
 * product work cannot.
 */
export type Painting = {
  src: string;
  title?: string;
  note?: string;
};

export type Series = {
  id: string;
  name: string;
  blurb?: string;
  paintings: Painting[];
};

export type Category = {
  id: string;
  name: string;
  blurb?: string;
  paintings?: Painting[];
  series?: Series[];
};

export const watercolours: Category[] = [
${body}
];

/** Everything in a category, whether loose or in a series. */
export const countPaintings = (category: Category): number =>
  (category.paintings?.length ?? 0) +
  (category.series ?? []).reduce((n, s) => n + s.paintings.length, 0);
`,
  );

  console.log(`${count} paintings across ${categories.length} categories`);
  for (const c of categories) {
    const inSeries = c.series.map((s) => `${s.name} ${s.paintings.length}`).join(', ');
    console.log(`  ${c.name}: ${c.paintings.length} loose${inSeries ? ` · ${inSeries}` : ''}`);
  }
}

build();
