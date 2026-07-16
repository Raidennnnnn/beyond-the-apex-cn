# Beyond the Apex CN — Translation Review Progress

Multi-session page-by-page review of the bilingual fan translation.

**Local app:** `http://localhost:5173/beyond-the-apex-cn/#/<routePath>`  
**Official EN ref:** https://www.gran-turismo.com/us/gt7/apex/  
**Official JP ref (cached):** `scripts/official-apex/jp/`  
**Cached official snap:** 2026-07-16 (see README)

---

## Review criteria

For each page, check all three:

| ID | Check | Pass rule |
|----|--------|-----------|
| **T** | Translation accuracy | Chinese matches EN meaning; terminology consistent; no missing/extra sense |
| **L** | Layout | Strict **one English `<p>` → one Chinese `<p>`** inside each `.bilingual` block (no EN+ZH merged into one paragraph; no orphan EN/ZH; no multi-EN then multi-ZH dumps) |
| **D** | Display | Browser check: overflow, broken images, heading wrap, spacing, mobile/desktop readable |

### Status legend

| Status | Meaning |
|--------|---------|
| `pending` | Not reviewed yet |
| `in_progress` | Currently reviewing |
| `pass` | T + L + D all OK |
| `fix_needed` | Issues found — see Notes |
| `fixed` | Issues found, then corrected and re-checked |

### How to update this file

After each review session:

1. Set page status (`pass` / `fix_needed` / `fixed`).
2. Fill **Reviewed** date and short **Notes** (issues + fixes).
3. Update **Session log** at the bottom.
4. Bump the chapter/section counters in **Summary**.

---

## Summary

| Chapter | Pages | Pass | Fix needed | Fixed | Pending |
|---------|------:|-----:|-----------:|------:|--------:|
| Ch.1 Automotive Engineering | 34 | 0 | 0 | 0 | 34 |
| Ch.2 Review: Mechanism | 19 | 0 | 0 | 0 | 19 |
| Ch.3 Review: Tuning & Settings | 22 | 0 | 0 | 0 | 22 |
| Ch.4 How to get started | 11 | 0 | 0 | 11 | 0 |
| Ch.5 Photographing Cars | 7 | 0 | 0 | 7 | 0 |
| **Total** | **93** | **0** | **0** | **18** | **75** |

**Review order (locked — do not skip pages):**

| Step | Section | Pages | Status |
|-----:|---------|------:|--------|
| 1 | Ch.4 Advice for Beginners | 5 | ✅ done |
| 2 | Ch.4 Using Driver Assist | 2 | ✅ done |
| 3 | Ch.4 In-game settings | 3 | ✅ done |
| 4 | Ch.4 Race Etiquette | 1 | ✅ done |
| 5 | Ch.5 Scapes | 7 | ✅ done |
| 6 | Ch.2 Mechanism (all sections) | 19 | next |
| 7 | Ch.3 Tuning & Settings (all sections) | 22 | pending |
| 8 | Ch.1 Automotive Engineering (all sections) | 34 | pending |

Rationale: finish Ch.4 (already started) → Ch.5 (short) → Ch.2/3 mid → Ch.1 heaviest last. Every page #1–93 must end as `pass` or `fixed`.

**Current focus:** Ch.2 Mechanism (Basic Specs → …)

---

## Chapter 1: Automotive Engineering (34)

### 1.1 Preface (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 1 | Automotive Engineering | `engineering_for_automotive/preface/01` | pending | | |

### 1.2 Force, Energy and Vibration (8)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 2 | 1-1 : The Concepts of Force and Torque | `engineering_for_automotive/force_energy_vibration/01` | pending | | |
| 3 | 1-2 : The Concept of Energy | `engineering_for_automotive/force_energy_vibration/02` | pending | | |
| 4 | 1-3 : The Mechanism of Vibration | `engineering_for_automotive/force_energy_vibration/03` | pending | | |
| 5 | 1-4 : Resonance Phenomenon | `engineering_for_automotive/force_energy_vibration/04` | pending | | |
| 6 | 1-5 : Effect of Damping Force | `engineering_for_automotive/force_energy_vibration/05` | pending | | |
| 7 | 1-6 : Phase Difference | `engineering_for_automotive/force_energy_vibration/06` | pending | | |
| 8 | 1-7 : Frequency Response | `engineering_for_automotive/force_energy_vibration/07` | pending | | |
| 9 | 1-8 : Vibration in Suspension | `engineering_for_automotive/force_energy_vibration/08` | pending | | |

### 1.3 Vehicle Performance (7)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 10 | 2-1 : Tire Dynamics | `engineering_for_automotive/vehicle_performance/01` | pending | | |
| 11 | 2-2 : Steady-state Circular Driving | `engineering_for_automotive/vehicle_performance/02` | pending | | |
| 12 | 2-3 : A Car's Response to Changes in Steering Angle | `engineering_for_automotive/vehicle_performance/03` | pending | | |
| 13 | 2-4 : Vehicle Response to Periodic Steering Motion | `engineering_for_automotive/vehicle_performance/04` | pending | | |
| 14 | 2-5 : Body Roll and Vehicle Motion | `engineering_for_automotive/vehicle_performance/05` | pending | | |
| 15 | 2-6 : Vibration of Sprung Mass and Unsprung Mass | `engineering_for_automotive/vehicle_performance/06` | pending | | |
| 16 | 2-7 : What Constitutes a High-Performance Car? | `engineering_for_automotive/vehicle_performance/07` | pending | | |

### 1.4 The Efficient Engine (7)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 17 | 3-1 : Temperature and Pressure | `engineering_for_automotive/the_efficient_engine/01` | pending | | |
| 18 | 3-2 : The Ideal Heat Engine | `engineering_for_automotive/the_efficient_engine/02` | pending | | |
| 19 | 3-3 : Carnot’s Conclusion | `engineering_for_automotive/the_efficient_engine/03` | pending | | |
| 20 | 3-4 : Theoretical Efficiency of Car Engines | `engineering_for_automotive/the_efficient_engine/04` | pending | | |
| 21 | 3-5 : Reversible Change and Irreversible Change | `engineering_for_automotive/the_efficient_engine/05` | pending | | |
| 22 | 3-6 : Reversing the Heat Engine | `engineering_for_automotive/the_efficient_engine/06` | pending | | |
| 23 | 3-7 : Engine's Loss of Energy | `engineering_for_automotive/the_efficient_engine/07` | pending | | |

### 1.5 Aerodynamics (6)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 24 | 4-1 : Bernoulli’s Theory | `engineering_for_automotive/aerodynamics/01` | pending | | |
| 25 | 4-2 : Law of Fluid Motion | `engineering_for_automotive/aerodynamics/02` | pending | | |
| 26 | 4-3 : Plane of Discontinuity and Vortex Filament | `engineering_for_automotive/aerodynamics/03` | pending | | |
| 27 | 4-4 : Kutta–Zhukovsky's Theorem | `engineering_for_automotive/aerodynamics/04` | pending | | |
| 28 | 4-5 : Prandtl’s Boundary Layer Theory | `engineering_for_automotive/aerodynamics/05` | pending | | |
| 29 | 4-6 : Prandtl's Lifting Line Theory | `engineering_for_automotive/aerodynamics/06` | pending | | |

### 1.6 Computational Fluid Dynamics (5)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 30 | 5-1 : The World of CFD | `engineering_for_automotive/computational_fluid_dynamics/01` | pending | | |
| 31 | 5-2 : Finite Volume Method | `engineering_for_automotive/computational_fluid_dynamics/02` | pending | | |
| 32 | 5-3 : Features of Scheme | `engineering_for_automotive/computational_fluid_dynamics/03` | pending | | |
| 33 | 5-4 : Compatibility of First-Order / High-Order Approximation | `engineering_for_automotive/computational_fluid_dynamics/04` | pending | | |
| 34 | 5-5 : Solving Turbulence | `engineering_for_automotive/computational_fluid_dynamics/05` | pending | | |

---

## Chapter 2: Review: Mechanism (19)

### 2.1 Basic Specs (2)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 35 | Dimensions | `review_mechanism/packaging/01` | pending | | |
| 36 | Drivetrains and Weight Distribution | `review_mechanism/packaging/02` | pending | | |

### 2.2 The Heart of The Automobile (6)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 37 | Mechanism and Principles | `review_mechanism/engine/01` | pending | | |
| 38 | Valve Configurations | `review_mechanism/engine/02` | pending | | |
| 39 | Rotary Engines | `review_mechanism/engine/03` | pending | | |
| 40 | Forced Induction | `review_mechanism/engine/04` | pending | | |
| 41 | Hybrid Systems | `review_mechanism/engine/05` | pending | | |
| 42 | Performance Keywords | `review_mechanism/engine/06` | pending | | |

### 2.3 Turning Power into Speed (2)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 43 | Transmission | `review_mechanism/drivetrain/01` | pending | | |
| 44 | The Differential and LSD | `review_mechanism/drivetrain/02` | pending | | |

### 2.4 The Framework that Supports it All (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 45 | Body Performance Requirements | `review_mechanism/body/01` | pending | | |

### 2.5 Thermal Exchangers that Reduce Speed (2)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 46 | Construction and Principles | `review_mechanism/brakes/01` | pending | | |
| 47 | Brake Discs and Calipers | `review_mechanism/brakes/02` | pending | | |

### 2.6 Dampers for Controlling Springs Body Movement (3)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 48 | Construction and Principles | `review_mechanism/suspensions/01` | pending | | |
| 49 | Types of Suspension | `review_mechanism/suspensions/02` | pending | | |
| 50 | Wheel Alignment | `review_mechanism/suspensions/03` | pending | | |

### 2.7 The Link Between Car and Road (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 51 | High-Performance Tires | `review_mechanism/tires/01` | pending | | |

### 2.8 Aluminum Road Wheels (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 52 | Unsprung Weight | `review_mechanism/wheels/01` | pending | | |

### 2.9 The Effect of Air on the Body (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 53 | Air Resistance and Lift | `review_mechanism/aerodynamics/01` | pending | | |

---

## Chapter 3: Review: Tuning & Settings (22)

### 3.1 Improving Engine Performance (6)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 54 | Fine-Tuning | `review_tuning_and_settings/engine/01` | pending | | |
| 55 | Overhauling the Engine | `review_tuning_and_settings/engine/02` | pending | | |
| 56 | Increasing RPM | `review_tuning_and_settings/engine/03` | pending | | |
| 57 | Increasing Compression | `review_tuning_and_settings/engine/04` | pending | | |
| 58 | Forced Induction Devices | `review_tuning_and_settings/engine/05` | pending | | |
| 59 | Rotary Engines | `review_tuning_and_settings/engine/06` | pending | | |

### 3.2 Tuning the Drivetrain (3)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 60 | Gear Ratio | `review_tuning_and_settings/drive_system/01` | pending | | |
| 61 | Clutch, Flywheels and Propeller Shafts | `review_tuning_and_settings/drive_system/02` | pending | | |
| 62 | Limited Slip Differential | `review_tuning_and_settings/drive_system/03` | pending | | |

### 3.3 Shaping Up the Body (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 63 | Weight Reduction and Rigidity | `review_tuning_and_settings/boby/01` | pending | | |

### 3.4 Improving Stopping Power (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 64 | Boosting Brake Power and Avoiding Brake Fade | `review_tuning_and_settings/stopping_power/01` | pending | | |

### 3.5 Improving the Suspension System (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 65 | Adjusting Handling Characteristics | `review_tuning_and_settings/footwork/01` | pending | | |

### 3.6 Upgrading to High-Performance Tires (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 66 | Increased Grip/Rigidity | `review_tuning_and_settings/tires/01` | pending | | |

### 3.7 Improving Aerodynamics (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 67 | Aerodynamic Tuning | `review_tuning_and_settings/aerodynamics/01` | pending | | |

### 3.8 Changing Settings According to Car Characteristics (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 68 | Drivetrain Layout | `review_tuning_and_settings/vehicle_qualities/01` | pending | | |

### 3.9 Basic Settings Part-by-Part (4)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 69 | Suspension ① | `review_tuning_and_settings/basic_settings/01` | pending | | |
| 70 | Suspension ② | `review_tuning_and_settings/basic_settings/02` | pending | | |
| 71 | Drivetrain | `review_tuning_and_settings/basic_settings/03` | pending | | |
| 72 | Aerodynamics | `review_tuning_and_settings/basic_settings/04` | pending | | |

### 3.10 Settings for Specific Situations (3)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 73 | High-Speed Circuits, Technical Courses | `review_tuning_and_settings/advanced_settings/01` | pending | | |
| 74 | Countering Understeer, Countering Oversteer | `review_tuning_and_settings/advanced_settings/02` | pending | | |
| 75 | Wet Conditions, Gravel | `review_tuning_and_settings/advanced_settings/03` | pending | | |

---

## Chapter 4: How to get started with Gran Turismo (11)

### 4.1 Advice for Beginners (5)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 76 | Getting Used to Your Controller | `how_to_get_started/advice_for_beginners/01` | fixed | 2026-07-16 | L OK (9× EN/ZH). T OK (follows JP). D: captions now use `caption` class |
| 77 | Getting to Know the Width of Your Car | `how_to_get_started/advice_for_beginners/02` | fixed | 2026-07-16 | **Was missing 3 tutorial images** (stale ch4.json). Restored images + ZH captions. L OK |
| 78 | Setting Track Markers | `how_to_get_started/advice_for_beginners/03` | fixed | 2026-07-16 | L/T OK. Caption class + period. Image displays |
| 79 | Learning How to Be Precise | `how_to_get_started/advice_for_beginners/04` | fixed | 2026-07-16 | Caption: 「富士 Speedway」→「富士国际赛车场」; added「开始制动」; caption class |
| 80 | Taking Corners | `how_to_get_started/advice_for_beginners/05` | fixed | 2026-07-16 | L/T OK. Caption class + period. Image displays |

### 4.2 Using Driver Assist (2)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 81 | Using Driver Assist ① - Braking | `how_to_get_started/using_driver_assistance/01` | fixed | 2026-07-16 | L OK (14 blocks, 4 imgs). Captions→`caption` class. Menu path `>`→`→` |
| 82 | Using Driver Assist ② - Car Control | `how_to_get_started/using_driver_assistance/02` | fixed | 2026-07-16 | L OK (17 blocks, 4 imgs). Captions styled. Closing「Be a good race!」kept (matches JP) |

### 4.3 In-game settings (3)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 83 | In-Game: General Principles | `how_to_get_started/in_game/01` | fixed | 2026-07-16 | L OK. ZH PP factors follow JP（减速/转向）not EN（acceleration/RPM）— EN likely localization drift; keep ZH |
| 84 | In-Game: Suspension | `how_to_get_started/in_game/02` | fixed | 2026-07-16 | L OK (2 imgs). Caption class+period. ZH tire note matches JP |
| 85 | In-Game: Aerodynamics / Gear Ratios | `how_to_get_started/in_game/03` | fixed | 2026-07-16 | L OK (2 imgs). Captions styled. ZH「高速区转向不足」correct vs EN awkward「If downforce is strong」 |

### 4.4 Race Etiquette (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 86 | Ensuring safe and enjoyable races | `how_to_get_started/race_etiquette/01` | fixed | 2026-07-16 | L OK (23 blocks, 7 imgs all present). All 7 captions→`caption` class + periods |

---

## Chapter 5: Photographing Cars (7)

### 5.1 Scapes (7)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 87 | The Angle | `photographing_cars/scapes/01` | fixed | 2026-07-16 | Restored `.images` gallery (2 imgs); 3 captions→`caption` (were body bilingual). L/T OK. D OK @5175 |
| 88 | Lighting | `photographing_cars/scapes/02` | fixed | 2026-07-16 | Restored gallery; captions demoted from body. Split ZH 高光 vs 7:3 (was merged+duplicated). L/T OK |
| 89 | Depth of Field | `photographing_cars/scapes/03` | fixed | 2026-07-16 | Captions+gallery restored. ZH DOF rule#1 & F=8 follow JP (EN drifts). All 4 imgs load. L/T/D OK |
| 90 | Lenses | `photographing_cars/scapes/04` | fixed | 2026-07-16 | Restored gallery+captions. ZH「35mm 画幅换算」follows JP (EN lists 35/28/24). L/T/D OK @5175 |
| 91 | Color Temperature | `photographing_cars/scapes/05` | fixed | 2026-07-16 | Gallery restored. H3→JP sense. ZH「湿度」kept vs EN「air temperature」. Chart img no caption (matches EN). 4 imgs OK |
| 92 | Exposure | `photographing_cars/scapes/06` | fixed | 2026-07-16 | Restored 3-img gallery+captions (EN has white-car tip; JP gallery stops at 2). L/T/D OK |
| 93 | Taking Better Photos | `photographing_cars/scapes/07` | fixed | 2026-07-16 | 3× captionless `.images` pairs restored; bio `<b>` name. 8/8 imgs. Ch.5 complete |

---

## Session log

| Date | Section(s) | Pages reviewed | Outcome |
|------|------------|----------------|---------|
| 2026-07-16 | — | 0 | Progress file created; review not started |
| 2026-07-16 | Ch.4 Advice for Beginners | 5 | All fixed: missing page-02 image trio restored; caption styling; minor ZH polish |
| 2026-07-16 | Ch.4 Assist + In-game + Etiquette | 6 | Ch.4 complete (11/11). Captions batched; noted EN/JP PP & aero wording drift |
| 2026-07-16 | Ch.5 Scapes 01–03 | 3 | Fixed: galleries/captions restored; Lighting ZH split; DOF JP F=8 kept |
| 2026-07-16 | Ch.5 Scapes 04–05 | 2 | Lenses+Color Temp: galleries restored; JP lens equiv / humidity kept vs EN drift |
| 2026-07-16 | Ch.5 Scapes 06–07 | 2 | Ch.5 complete (7/7). Exposure gallery; Taking Better Photos image pairs |

---

## Recurring issue tracker

Capture patterns that appear across many pages (so later sections can fix in batch).

| Pattern | First seen | Count | Resolution |
|---------|------------|------:|------------|
| Image captions missing `className="caption"` (look like body text) | Ch.4 | many | Apply `p.caption` inside `.bilingual` after images |
| Stale extract JSON drops `<div class="images">` galleries | Ch.4.1 p.02 | 4+ | Ch.5 Scapes 01–03 also; restore `.images` + `dl.image_list` from official HTML |
| Captions flattened into body bilingual paragraphs | Ch.5 Scapes | 3 | Move caption text under images with `caption` class |
| Official EN wording drifts from JP; ZH follows JP | Ch.4 in-game PP / aero | 6+ | Prefer JP sense for ZH; keep official EN text as-is (also DOF F=8; DOF rule #1; color-temp「湿度」vs「air temperature」) |
| Headings use `EN / ZH` on one line (site convention; not body L rule) | all | — | OK; body paragraphs remain EN→ZH pairs |
