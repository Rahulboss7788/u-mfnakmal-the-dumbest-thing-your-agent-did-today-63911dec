// SPDX-License-Identifier: MIT
// Writes one line about the dumbest thing my agent did today to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "My agent spent 40 minutes tidying my project, then proudly deleted the one file the whole app imports — and asked me to rate its work.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Read-back self-check: the written line must be one line of 1-200 characters.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== line || [...written].length > 200 || written.trim().length === 0) {
  throw new Error("entry.txt failed the read-back check");
}
console.log(`Wrote ${[...written].length} characters to /output/entry.txt`);
