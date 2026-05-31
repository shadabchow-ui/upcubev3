# Content Source-of-Truth Guide — Upcube Portal

## Overview

The portal uses two separate content pipelines:

### Pipeline A: Markdown page body content (flat route-based pages)

- **Runtime source of truth:** `lib/upcube-portal/page-content.ts` (13,948 lines, generated)
  → This is the **only file consumed at runtime** by page components via `getBodyForRoute()`.
  → Do NOT edit the data body in this file. It is auto-generated.
- **Markdown source:** `content/upcube-page-imports-flat/` (34 flat `.md` files)
  → This is where you **edit** markdown when the page body needs updating.
  → One file per route, flat directory (no subdirectories).
- **Hierarchical copy (stale):** `content/upcube-page-imports/` (36 files, 4 subdirs)
  → A hierarchical duplicate (company/, policy-legal/, research/, safety/).
  → **Not consumed by any code.** May be out of sync with both the flat dir and page-content.ts.
  → Has 2 additional files not present in the flat dir:
    - `upcubeai-for-organizations-page.md`
    - `upcubeai-why-we-focus-on-ai-founder-letter.md`
  → Do NOT edit this directory as a content source. If you need content changes, edit the flat directory instead.
  → Remove only after a generator script is added and gap analysis is complete.

### Pipeline B: Longform research pages (inline TypeScript markdown)

- **Source of truth:** `lib/upcube-portal/longform-pages.ts`
  → Markdown is embedded as TypeScript template literal strings.
  → **Not** sourced from the content/ markdown directories.
  → These are the research deep-dive pages (Earth AI, Health AI, Science AI, etc.).
  → Edit the `body:` fields in `longform-pages.ts` directly — there are no `.md` files for these.

### Pipeline C: TypeScript-structured portal content

- **Source of truth:** `lib/upcube-portal/content.ts`
  → All nav, product cards, enterprise, safety, FAQ, privacy, and marketing copy lives here.
  → Hand-written TypeScript, not generated.

## How to Edit Page Content

| What | File to Edit | Notes |
|------|-------------|-------|
| Company/about page body | `content/upcube-page-imports-flat/upcubeai-about-us-page.md` | Then regenerate page-content.ts |
| Research deep-dive body | `lib/upcube-portal/longform-pages.ts` | Inline markdown, no regeneration needed |
| Nav, cards, FAQ, footer | `lib/upcube-portal/content.ts` | Direct TypeScript |
| Marketing/landing pages | `lib/upcube-portal/marketing-pages.ts` | Direct TypeScript |
| Foundation/policy pages | `lib/upcube-portal/foundation-pages.ts` | Direct TypeScript |
| Policy pages | `lib/upcube-portal/policy-pages.ts` | Direct TypeScript |

## How to Regenerate `page-content.ts` After Editing Markdown

**⚠ No generator script exists in this repo yet.**

The header of `page-content.ts` claims it is auto-generated from `content/upcube-page-imports-flat`, but the build pipeline does not currently regenerate it. If you edit files in `upcube-page-imports-flat`, you must:

1. Manually update the corresponding entry in `page-content.ts` (find the matching slug), OR
2. Add a generator script (see "Recommended next steps" below).

Until a generator exists, treat `page-content.ts` and `upcube-page-imports-flat/` as a loosely coupled pair that must be updated in tandem.

## Validation

```bash
# TypeScript check after content edits
bun run --filter=web typecheck

# Full build
bun run --filter=web build
```

## Recommended Next Steps

1. Add a generator script (e.g. `scripts/generate-page-content.ts`) that:
   - Reads `content/upcube-page-imports-flat/*.md`
   - Extracts slug, title (from first `#`), and route (from a frontmatter convention)
   - Writes `lib/upcube-portal/page-content.ts`
2. Remove `content/upcube-page-imports/` only after the generator is in place and all gap content is migrated.

## Drift Summary (as of this README)

| Check | Status |
|-------|--------|
| Flat `.md` count | 34 files |
| Hierarchical `.md` count | 36 files |
| `page-content.ts` entries | 34 |
| `page-content.ts` ↔ flat sync | Assumed in-sync at last generation |
| Generator script exists | ❌ No |
| Hierarchical ↔ flat sync | ❌ 2 extra files in hierarchical |
| Hierarchical consumed by code | ❌ Not imported by anything |
