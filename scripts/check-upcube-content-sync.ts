#!/usr/bin/env bun
/**
 * check-upcube-content-sync.ts
 *
 * Compares the flat and hierarchical Markdown copies under
 * apps/web/content/ and reports any mismatches.
 *
 * Usage: bun run scripts/check-upcube-content-sync.ts
 */

import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const WEB_CONTENT = "apps/web/content";

const HIERARCHICAL = join(WEB_CONTENT, "upcube-page-imports");
const FLAT = join(WEB_CONTENT, "upcube-page-imports-flat");
const PAGE_CONTENT = "apps/web/lib/upcube-portal/page-content.ts";

let exitCode = 0;

function log(msg: string) {
  console.log(msg);
}

function warn(msg: string) {
  console.warn(`  ⚠  ${msg}`);
}

function error(msg: string) {
  console.error(`  ❌ ${msg}`);
  exitCode = 1;
}

function ok(msg: string) {
  console.log(`  ✓ ${msg}`);
}

function collectFlatFiles(): string[] {
  return readdirSync(FLAT).filter((f) => f.endsWith(".md")).sort();
}

function collectHierarchicalFiles(): string[] {
  const dirs = readdirSync(HIERARCHICAL, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const files: string[] = [];
  for (const dir of dirs) {
    const dirPath = join(HIERARCHICAL, dir);
    const mdFiles = readdirSync(dirPath)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f);
    files.push(...mdFiles);
  }
  return [...new Set(files)].sort();
}

function countPageContentEntries(): number {
  const content = readFileSync(PAGE_CONTENT, "utf-8");
  const matches = content.match(/^\s+slug: "/gm);
  return matches ? matches.length : 0;
}

function contentDiff(fileA: string, fileB: string): boolean {
  const a = readFileSync(fileA, "utf-8").trim();
  const b = readFileSync(fileB, "utf-8").trim();
  return a === b;
}

// --- Main ---

log("\n=== Upcube Content Sync Check ===\n");

log("Checking source directories exist...");
for (const dir of [FLAT, HIERARCHICAL]) {
  if (!existsSync(dir)) {
    error(`Directory not found: ${dir}`);
    process.exit(1);
  }
}
ok("Both content directories exist");

const flatFiles = collectFlatFiles();
const hierFiles = collectHierarchicalFiles();

log(`\nFlat directory:          ${flatFiles.length} files`);
log(`Hierarchical directory:  ${hierFiles.length} unique files`);

const pageContentCount = countPageContentEntries();
log(`page-content.ts entries: ${pageContentCount}`);

// Compare flat vs hierarchical
const flatSet = new Set(flatFiles);
const hierSet = new Set(hierFiles);

const onlyInFlat = flatFiles.filter((f) => !hierSet.has(f));
const onlyInHier = hierFiles.filter((f) => !flatSet.has(f));
const common = flatFiles.filter((f) => hierSet.has(f));

log("\n--- File presence check ---");
if (onlyInFlat.length === 0) {
  ok("No files unique to flat directory");
} else {
  for (const f of onlyInFlat) {
    warn(`File only in flat: ${f}`);
  }
}

if (onlyInHier.length === 0) {
  ok("No files unique to hierarchical directory");
} else {
  for (const f of onlyInHier) {
    warn(`File only in hierarchical: ${f}`);
  }
}

log("\n--- Content equality check ---");
for (const file of common) {
  const flatPath = join(FLAT, file);
  // Find the file in hierarchical subdirectories
  const hierDirs = readdirSync(HIERARCHICAL, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  let bestMatch: string | null = null;
  for (const dir of hierDirs) {
    const candidate = join(HIERARCHICAL, dir, file);
    if (existsSync(candidate)) {
      bestMatch = candidate;
      break;
    }
  }

  if (bestMatch && !contentDiff(flatPath, bestMatch)) {
    error(`Content differs: ${file} (flat vs ${relative(".", bestMatch)})`);
  } else if (bestMatch) {
    ok(`${file} content matches`);
  } else {
    warn(`${file}: no counterpart in hierarchical`);
  }
}

log("\n--- Summary ---");
if (onlyInHier.length > 0) {
  warn(
    `${onlyInHier.length} file(s) exist in hierarchical but not in flat. These may need migration.`,
  );
}
if (onlyInFlat.length > 0) {
  warn(
    `${onlyInFlat.length} file(s) exist in flat but not in hierarchical.`,
  );
}
if (pageContentCount !== flatFiles.length) {
  error(
    `page-content.ts has ${pageContentCount} entries but flat dir has ${flatFiles.length} files`,
  );
} else {
  ok(`page-content.ts entry count matches flat file count`);
}

log(
  exitCode === 0
    ? "\n✅ All checks passed\n"
    : `\n❌ ${exitCode} issue(s) found\n`,
);
process.exit(exitCode);
