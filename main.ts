import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short, funny rant about an everyday annoyance: the office elevator
// that stops at every floor for nobody.
const entry =
  "The office elevator stops at every floor for nobody, like it's collecting ghosts, and by floor nine I've aged five years, reconsidered my career, and drafted my resignation — all before a single coffee.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 400 characters,
// not only white space.
const chars = [...entry].length;
if (chars < 1 || chars > 400 || entry.trim().length === 0) {
  throw new Error(`entry is ${chars} characters, outside the 1-400 gate`);
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
