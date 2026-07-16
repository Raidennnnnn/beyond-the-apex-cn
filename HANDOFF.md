# Handoff — Beyond the Apex CN

**Date:** 2026-07-16  
**Branch:** `main` (local may be ahead of `origin/main`)  
**Official source:** https://www.gran-turismo.com/us/gt7/apex/  
**API menu:** `/{locale}/gt7/api/apex/` · page HTML: `?u=/path/...`

## Goal

Rebuild the site to match the official Beyond the Apex structure, **bilingual EN + CN**. Engineering sections were done **one page at a time**; **Review chapters** (Ch2+) use the **batch generator** below when doing many placeholder pages at once. Old GT Sport–era TOC/content is abandoned.

## Translation rule (important)

**Old translations do not matter.** Do not reuse, patch, or “add English on top of” existing CN (or mixed) page components.

For every page:

1. **Pull** fresh official text (US EN + JP/CN as available) via `scripts/fetch_official_apex.py` / `scripts/official-apex/`
2. **Redo** the page component from scratch as EN + CN bilingual pairs (`.bilingual` / `lang="en"` + `lang="zh"`)
3. Treat any leftover wired pages (e.g. 1-2…1-8) as disposable stubs until rewritten this way

## Done

### TOC / nav
- 3-level nav: **Chapter → Section → Page**
- Source of truth: `scripts/official-apex/us/menu.json` (+ JP under `scripts/official-apex/jp/`)
- Generated TOC: `src/components/filePaths.tsx` (`tocChapters`, `flatTocPages`, `routePath`)
- Sidebar labels: **English only**
- Untranslated pages → `PlaceholderPage` (“待翻译 / Coming soon”)
- Wired: `main.tsx`, sidebar, siblings provider, quick-nav, swipe, home
- Orphan old chapter components removed

### Content (already redone from official)
- **Preface** (`AutomotiveEngineering.tsx`): EN + CN bilingual
- **1-1** (`TheConceptsOfForceAndTorque.tsx`): EN + CN bilingual
- **1-2** (`TheConceptOfEnergy.tsx`): EN + CN bilingual
- **1-3** (`TheMechanismOfVibration.tsx`): EN + CN bilingual
- **1-4** (`ResonancePhenomenon.tsx`): EN + CN bilingual
- **1-5** (`EffectOfDampingForce.tsx`): EN + CN bilingual
- **1-6** (`PhaseDifference.tsx`): EN + CN bilingual
- **1-7** (`FrequencyResponse.tsx`): EN + CN bilingual
- **1-8** (`VibrationInSuspension.tsx`): EN + CN bilingual
- **2-1** (`TireDynamics.tsx`): EN + CN bilingual
- **2-2** (`SteadyStateCircularDriving.tsx`): EN + CN bilingual
- **2-3** (`CarResponseToSteeringAngle.tsx`): EN + CN bilingual
- **2-4** (`VehicleResponseToPeriodicSteering.tsx`): EN + CN bilingual
- **2-5** (`BodyRollAndVehicleMotion.tsx`): EN + CN bilingual
- **2-6** (`VibrationOfSprungAndUnsprungMass.tsx`): EN + CN bilingual
- **2-7** (`HighPerformanceCar.tsx`): EN + CN bilingual
- **3-1** (`TemperatureAndPressure.tsx`): EN + CN bilingual
- **3-2** (`TheIdealHeatEngine.tsx`): EN + CN bilingual
- **3-3** (`CarnotsConclusion.tsx`): EN + CN bilingual
- **3-4** (`TheoreticalEfficiencyOfCarEngines.tsx`): EN + CN bilingual
- **3-5** (`ReversibleAndIrreversibleChange.tsx`): EN + CN bilingual
- **3-6** (`ReversingTheHeatEngine.tsx`): EN + CN bilingual
- **3-7** (`EnginesLossOfEnergy.tsx`): EN + CN bilingual
- **4-1** (`BernoullisTheory.tsx`): EN + CN bilingual
- **4-2** (`LawOfFluidMotion.tsx`): EN + CN bilingual
- **4-3** (`PlaneOfDiscontinuityAndVortexFilament.tsx`): EN + CN bilingual
- **4-4** (`KuttaZhukovskysTheorem.tsx`): EN + CN bilingual
- **4-5** (`PrandtlsBoundaryLayerTheory.tsx`): EN + CN bilingual
- **4-6** (`PrandtlsLiftingLineTheory.tsx`): EN + CN bilingual
- **5-1** (`TheWorldOfCFD.tsx`): EN + CN bilingual
- **5-2** (`FiniteVolumeMethod.tsx`): EN + CN bilingual
- **5-3** (`FeaturesOfScheme.tsx`): EN + CN bilingual
- **5-4** (`CompatibilityOfFirstAndHighOrderApproximation.tsx`): EN + CN bilingual
- **5-5** (`SolvingTurbulence.tsx`): EN + CN bilingual
- **Chapter 2 — Review: Mechanism** (19 pages, all sections): EN + CN bilingual
  - Basic Specs: `Dimensions`, `DrivetrainsAndWeightDistribution`
  - Engine: `MechanismAndPrinciples` … `PerformanceKeywords`
  - Drivetrain: `Transmission`, `TheDifferentialAndLSD`
  - Body / Brakes / Suspensions / Tires / Wheels / Aerodynamics: wired
- **Chapter 3 — Review: Tuning & Settings** (22 pages, all sections): EN + CN bilingual
  - Engine: `FineTuning` … `TuningRotaryEngines`
  - Drivetrain: `GearRatio`, `ClutchFlywheelsAndPropellerShafts`, `LimitedSlipDifferentialTuning`
  - Body / Brakes / Suspension / Tires / Aerodynamics / Vehicle qualities / Basic & Advanced settings: wired

### Content (still stubs — pull & redo, do not salvage)
- **Chapter 4+** (`how_to_get_started`, `photographing_cars`, …): still `PlaceholderPage` until pulled & redone

### Fonts / shadcn
- `components.json`: style **`radix-nova`**, zinc, lucide
- Preset: `bcivVQOm` (Source Sans 3)
- English / UI: **Source Sans 3 Variable** (`font-sans`)
- Chinese (`lang=zh`): **Source Han Serif CN for Display** (CDN in `index.html`)
- Theme tokens: oklch (nova). Merriweather fully removed.

### Tooling
- Fetch helper: `scripts/fetch_official_apex.py`
- Cached official HTML/menus: `scripts/official-apex/{us,jp}/`
- **Review-chapter batch pipeline** (Ch2–Ch3; reuse for Ch4+):
  - `scripts/extract_chapter.py` — US/JP block pairs → `ch{N}.json`
  - `scripts/download_chapter_images.py` — fetch JPG → WebP in `src/assets/images/`
  - `scripts/official-apex/extracted/ch{N}.json` — block pairs per page
  - `scripts/official-apex/extracted/ch{N}_zh.json` — CN translations keyed `{page_key}:{block_index}`
  - `scripts/build_ch{N}_zh.py` — builds/validates `ch{N}_zh.json`
  - `scripts/gen_ch{N}_tsx.py` — emits bilingual `.tsx` + image imports (`.webp` only)
- If `shadcn` CLI hits timeouts: unset `http(s)_proxy` for `ui.shadcn.com`

## Batch workflow (Review chapters — Ch2 pattern)

Use for **placeholder chapters** (`review_mechanism`, `review_tuning_and_settings`, …). Engineering pages (1-x, 2-x, …) were mostly hand-built; Review chapters should use the generator.

1. **Fetch** US (often cached) + JP for each page: `python3 scripts/fetch_official_apex.py --locale jp --path /…`
2. **Extract** EN/JP blocks → `scripts/official-apex/extracted/ch{N}.json` (pair by block index; `img` = path only).
3. **Translate** JP → Simplified CN → `ch{N}_zh.json`. Keys: `{page_stem}:{block_index}` — **not** a sequential text-only index (images shift indices).
4. **Images:** download `/images/c/*.jpg` → WebP in `src/assets/images/`. **Delete `.jpg` after convert; never commit them.**
5. **Generate:** extend `PAGE_META` in `scripts/gen_ch2_tsx.py`, run script, wire `filePaths.tsx`.
6. **Verify:** `pnpm run build`; spot-check prev/next at chapter boundaries.

### Why a full-chapter batch is slow

| Step | Typical cost | Notes |
|------|----------------|-------|
| Image download + WebP | **~4–5 min** (~70–80 images) | **Largest chunk**; sequential fetch + delay |
| JP page fetch | ~1–2 min | If not already under `scripts/official-apex/jp/` |
| CN translation | High token/time | Ch2 ≈ **193 text blocks** |
| Generator + fix-ups | Medium | Block indices, `●` headers, paragraph breaks |
| TOC + build | Low | `filePaths.tsx`, `pnpm run build` |

**Ch2 one batch:** 19 pages, 9 sections, ~78 images, ~193 bilingual strings → expect **>5 min** wall time when smooth.

### Speed tips

- **Section-sized batches** (e.g. one Ch3 section) = faster turnaround; full chapter = full image + translation cost.
- **Reuse the generator** — do not hand-write every `.tsx`.
- **Delete `.jpg` immediately** after WebP; components only import `.webp`.
- **US HTML is usually cached**; JP often still needs fetching.

## Next (in order)

1. **Chapters 1–3 complete** (Engineering 1–5, Review Mechanism, Review Tuning & Settings).
2. **Next:** pull & redo **Chapter 4: How to get started with Gran Turismo** (or next placeholder block in TOC order).
3. Spot-check prev/next at Ch3 last page → Ch4 first page in browser.
4. Optionally refresh more UI with `pnpm dlx shadcn@latest add …` (only `button` is nova so far).

## Key paths

| What | Where |
|------|--------|
| TOC | `src/components/filePaths.tsx` |
| Pages | `src/components/beyond the apex/*.tsx` |
| Styles | `src/index.css`, `src/App.css` |
| shadcn config | `components.json` |
| Official cache | `scripts/official-apex/` |
| Ch2–Ch3 extract / CN / generator | `scripts/official-apex/extracted/ch{2,3}*.json`, `scripts/build_ch{2,3}_zh.py`, `scripts/gen_ch{2,3}_tsx.py`, `scripts/extract_chapter.py`, `scripts/download_chapter_images.py` |

## Notes

- HashRouter; GitHub Pages base `/beyond-the-apex-cn/`
- Route shape: `#/{chapter}/{section}/{page}` e.g. `#/engineering_for_automotive/preface/01`
- Do not commit secrets; do not push unless asked
- **Images:** repo tracks `.webp` only; downloaded `.jpg` are throwaway conversion intermediates
