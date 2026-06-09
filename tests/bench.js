import { anynum } from '../anynum.js';

const RUNS = 1_000_000;

function bench(label, fn) {
  // warmup
  for (let i = 0; i < 10_000; i++) fn();
  const t = performance.now();
  for (let i = 0; i < RUNS; i++) fn();
  const ms = performance.now() - t;
  console.log(`${label.padEnd(40)} ${(ms).toFixed(1).padStart(8)} ms  |  ${(RUNS / ms * 1000 / 1e6).toFixed(2)} M ops/sec`);
}

console.log(`\nanynum benchmark — ${RUNS.toLocaleString()} iterations each\n`);

bench('ASCII digits (fast path)', () => anynum('1234567890'));
bench('ASCII string no digits (fast)', () => anynum('hello world'));
bench('Devanagari 10 digits', () => anynum('०१२३४५६७८९'));
bench('Arabic-Indic 10 digits', () => anynum('٠١٢٣٤٥٦٧٨٩'));
bench('Thai 10 digits', () => anynum('๐๑๒๓๔๕๖๗๘๙'));
bench('Fullwidth 10 digits', () => anynum('０１２３４５６７８９'));
bench('Mixed script (Hindi+ASCII)', () => anynum('१,२३४.५६'));
bench('Math Bold surrogate pairs', () => anynum('𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'));
bench('Long ASCII x100 (fast path)', () => anynum('1234567890'.repeat(100)));
bench('Long Devanagari x100', () => anynum('०१२३४५६७८९'.repeat(100)));
bench('Short mixed text "कीमत: ४५"', () => anynum('कीमत: ४५ रुपये'));
