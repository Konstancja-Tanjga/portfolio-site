/**
 * The two things a build cannot tell you about this site.
 *
 * `tsc` proves the content compiles and Vite proves it bundles. Neither knows
 * whether the file a shot points at exists, and neither reads the rule the
 * stylesheet states about itself. Both failures ship silently: a missing
 * screenshot is a broken image on the one page a reader came to see, and a
 * colour written into the site layer is a colour that will not follow the
 * design system the next time it moves.
 *
 *   node scripts/check-content.mjs
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const problems = [];

/* ---- 1. every asset a wall points at is in public/ ---- */

const contentDir = resolve(root, 'src/content');
const referenced = new Map();

for (const file of readdirSync(contentDir).filter((f) => f.endsWith('.ts'))) {
  const source = readFileSync(resolve(contentDir, file), 'utf8');
  for (const [, path] of source.matchAll(/(?:src|poster|shot)\s*:\s*"(\/[^"]+)"/g)) {
    if (!referenced.has(path)) referenced.set(path, file);
  }
}

if (referenced.size === 0) {
  problems.push('No asset references found at all — the pattern this script greps for has moved.');
}

const missing = [...referenced].filter(([path]) => !existsSync(resolve(root, 'public' + path)));
for (const [path, file] of missing) {
  problems.push(`${file} points at ${path}, which is not in public/`);
}

/* ---- 2. the site layer declares no colour of its own ---- */

/* tokens.css says it in its own header: no raw colour below except the mark,
   which is a field colour and does not follow the theme. Everything else is an
   alias onto the package, and a literal here is the drift the About page
   spends a chapter arguing against. */
const allowed = new Set(['--bh-site-mark', '--bh-site-on-mark']);
const tokens = readFileSync(resolve(root, 'src/styles/tokens.css'), 'utf8');

for (const line of tokens.split('\n')) {
  const colour = line.match(/#[0-9a-fA-F]{3,8}\b|\b(?:rgba?|hsla?)\([^)]*\)/);
  if (!colour) continue;
  const declared = line.match(/(--[a-z0-9-]+)\s*:/);
  if (declared && allowed.has(declared[1])) continue;
  problems.push(`tokens.css writes a colour outside the two field values: ${line.trim()}`);
}

/* ---- report ---- */

const checked = `${referenced.size} assets, ${tokens.split('\n').length} lines of the site token layer`;

if (problems.length) {
  console.error(`${problems.length} problem${problems.length === 1 ? '' : 's'}:\n`);
  for (const problem of problems) console.error(`  ${problem}`);
  console.error(`\nChecked ${checked}.`);
  process.exit(1);
}

console.log(`Checked ${checked}. Every asset resolves, and the site layer states no colour of its own.`);
