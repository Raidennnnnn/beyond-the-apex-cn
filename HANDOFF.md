# Handoff — Beyond the Apex CN

**Date:** 2026-07-16  
**Branch:** `main` (local may be ahead of `origin/main`)  
**Official source:** https://www.gran-turismo.com/us/gt7/apex/  
**API menu:** `/{locale}/gt7/api/apex/` · page HTML: `?u=/path/...`

## Goal

Rebuild the site to match the official Beyond the Apex structure, **bilingual EN + CN**, **one page at a time**. Old GT Sport–era TOC/content is abandoned.

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

### Content (still stubs — pull & redo, do not salvage)
- **Chapter 2+ review/tuning pages** and later: still `PlaceholderPage` until pulled & redone

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

1. **Chapter 1 (1-1…1-8), Vehicle Performance (2-1…2-7), Efficient Engine (3-1…3-7), Aerodynamics (4-1…4-6), and CFD (5-1…5-5) complete.**
2. **Next section:** pull & redo **Chapter 2: Review: Mechanism** (or next placeholder block in TOC order).
3. Spot-check sidebar, prev/next across 5-5 → next chapter in browser.
4. Optionally refresh more UI with `pnpm dlx shadcn@latest add …` (only `button` is nova so far).

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
