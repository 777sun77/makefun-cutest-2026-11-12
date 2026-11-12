import { copyFileSync, mkdirSync, statSync } from 'node:fs';

// cutest-picture-01: a cream kitten in a knitted strawberry hat hugging a sleepy chick.
const source = new URL('./entry.png', import.meta.url);
const size = statSync(source).size;

if (size > 1048576) {
  throw new Error(`entry.png exceeds the 1 MiB limit (${size} bytes)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(source, `${outDir}/entry.png`);
