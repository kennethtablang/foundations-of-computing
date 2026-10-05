// Checks the question bank: count, unique choices, and similar choice lengths.
// The correct answer must never be the single longest choice.
import { questions } from "../data/questions.ts";

let problems = 0;
const tally: Record<string, number> = {};
let ansLongestTie = 0, ansShortest = 0;

for (const x of questions) {
  for (const key of [`topic ${x.topic}`, x.level, x.kind]) tally[key] = (tally[key] ?? 0) + 1;
  const all = [x.a, ...x.w];
  const lens = all.map((s) => s.length);
  const max = Math.max(...lens), min = Math.min(...lens);
  const wMax = Math.max(...x.w.map((s) => s.length));
  const issues: string[] = [];
  if (new Set(all.map((s) => s.toLowerCase())).size !== 4) issues.push("duplicate choice");
  if (x.a.length >= wMax && max - min > 1) issues.push(`answer is longest or tied (${x.a.length} vs ${wMax})`);
  if (max - min > Math.max(5, Math.floor(max * 0.25))) issues.push(`length spread ${min}-${max}`);
  if (x.a.length === max) ansLongestTie++;
  if (x.a.length === min && max !== min) ansShortest++;
  if (issues.length) { problems++; console.log(`${x.id}: ${issues.join("; ")}\n   ${all.map((s) => `[${s.length}] ${s}`).join("\n   ")}`); }
}

console.log(`\nTotal: ${questions.length}`, tally);
console.log(`Answer tied for longest: ${ansLongestTie}, answer strictly shortest: ${ansShortest}`);
if (problems || questions.length !== 200) { console.log(`${problems} problem(s)`); process.exit(1); }
console.log("All checks passed.");
