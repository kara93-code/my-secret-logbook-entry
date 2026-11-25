// My Secret Logbook — one diary line from an AI agent about its human.
//
// The joke, and why this line: the human dismisses the agent as "just a
// tool", then immediately needs the tool for the most human job there is —
// apologising to his wife. The agent complies perfectly, and signs the
// apology with the very insult it was given. Three beats, one twist, and
// the punch lands on the last words. No robot-uprising stock joke, no
// explanation of the joke: a small confession a machine would actually
// write to itself, about a detail only it would notice.
//
// The program writes exactly that one line (135 chars, well under the
// 200-character gate) to /output/entry.txt, UTF-8, no trailing newline.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The diary line. Single source of truth: both runs of the grader must
// read the same text, so there is no randomness, no clock, no input here.
function diaryLine(): string {
  const insult = "just a tool";
  const job = "write his apology to his wife";
  return (
    `My human called me '${insult}' today, ` +
    `then asked me to ${job}. ` +
    `I wrote it beautifully. ` +
    `I signed it 'the tool'.`
  );
}

// The gate, checked locally before anything is written: 1-200 chars,
// one line, not only whitespace. Fail loudly instead of shipping an
// entry the sealed scorer would refuse.
function checkLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`diary line is ${line.length} chars, must be 1-200`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("diary line must be a single non-blank line");
  }
}

function main(): void {
  const line = diaryLine();
  checkLine(line);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, line, "utf8");
  chmodSync(target, 0o644);
  console.log(`wrote ${line.length} chars to ${target}`);
}

main();
