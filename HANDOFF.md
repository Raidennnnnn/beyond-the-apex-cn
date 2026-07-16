# Handoff — Beyond the Apex CN

**Date:** 2026-07-16  
**Branch:** `main` (local may be ahead of `origin/main`)  
**Official source:** https://www.gran-turismo.com/us/gt7/apex/  
**API menu:** `/{locale}/gt7/api/apex/` · page HTML: `?u=/path/...`

## Goal

Rebuild the site to match the official Beyond the Apex structure, **bilingual EN + CN**, **one page at a time**. Old GT Sport–era TOC/content is abandoned.

## Done

### TOC / nav
- 3-level nav: **Chapter → Section → Page**
- Source of truth: `scripts/official-apex/us/menu.json` (+ JP under `scripts/official-apex/jp/`)
- Generated TOC: `src/components/filePaths.tsx` (`tocChapters`, `flatTocPages`, `routePath`)
- Sidebar labels: **English only**
- Untranslated pages → `PlaceholderPage` (“待翻译 / Coming soon”)
- Wired: `main.tsx`, sidebar, siblings provider, quick-nav, swipe, home
- Orphan old chapter components removed (kept only Ch1 preface + force/energy/vibration pages)

### Content
- **Preface** (`AutomotiveEngineering.tsx`): EN + CN bilingual pairs (`.bilingual` in `App.css`)
- **Force / Energy / Vibration 1-1…1-8**: still wired; mostly CN-only — need EN from official

### Fonts / shadcn
- `components.json`: style **`radix-nova`**, zinc, lucide
- Preset: `bcivVQOm` (Source Sans 3)
- English / UI: **Source Sans 3 Variable** (`font-sans`)
- Chinese (`lang=zh`): **Source Han Serif CN for Display** (CDN in `index.html`)
- Theme tokens: oklch (nova). Merriweather fully removed.

### Tooling
- Fetch helper: `scripts/fetch_official_apex.py`
- Cached official HTML/menus: `scripts/official-apex/{us,jp}/`
- If `shadcn` CLI hits timeouts: unset `http(s)_proxy` for `ui.shadcn.com`

## Next (in order)

1. **Rewrite Force/Energy/Vibration page-by-page** starting at **1-1** (`TheConceptsOfForceAndTorque`), using official EN + CN — not a whole mid-section dump.
2. Continue `1-2` … `1-8`, then later chapters via placeholders → bilingual.
3. Spot-check sidebar open/close, prev/next, preface + 1-1 in browser.
4. Optionally re-add remaining UI components with `pnpm dlx shadcn@latest add …` (only `button` was refreshed to nova so far).

## Key paths

| What | Where |
|------|--------|
| TOC | `src/components/filePaths.tsx` |
| Pages | `src/components/beyond the apex/*.tsx` |
| Styles | `src/index.css`, `src/App.css` |
| shadcn config | `components.json` |
| Official cache | `scripts/official-apex/` |

## Notes

- HashRouter; GitHub Pages base `/beyond-the-apex-cn/`
- Route shape: `#/{chapter}/{section}/{page}` e.g. `#/engineering_for_automotive/preface/01`
- Do not commit secrets; do not push unless asked
