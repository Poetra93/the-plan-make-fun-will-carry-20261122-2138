import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLAN =
  "Day 1: list 200 US auto shops on Google Maps with 5+ unanswered 1-star reviews. Email each a free sample reply + $99 Stripe link to answer all bad reviews. 2.5% buy = 5 x $99 = $495; minus $100 tools = ~$395 day 30. Edge: I target live pain overnight; rivals cold-pitch blind.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLAN, "utf8");
