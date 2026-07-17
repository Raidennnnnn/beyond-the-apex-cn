# Beyond the Apex CN — Translation Review Progress

Multi-session page-by-page review of the bilingual fan translation.

**Local app:** `http://localhost:5174/beyond-the-apex-cn/#/<routePath>` (Vite may use 5173–5175)  

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
| Ch.1 Automotive Engineering | 34 | 9 | 0 | 25 | 0 |
| Ch.2 Review: Mechanism | 19 | 1 | 0 | 18 | 0 |
| Ch.3 Review: Tuning & Settings | 22 | 0 | 0 | 22 | 0 |
| Ch.4 How to get started | 11 | 0 | 0 | 11 | 0 |
| Ch.5 Photographing Cars | 7 | 0 | 0 | 7 | 0 |
| **Total** | **93** | **10** | **0** | **83** | **0** |

**Review order (locked — do not skip pages):**

| Step | Section | Pages | Status |
|-----:|---------|------:|--------|
| 1 | Ch.4 Advice for Beginners | 5 | ✅ done |
| 2 | Ch.4 Using Driver Assist | 2 | ✅ done |
| 3 | Ch.4 In-game settings | 3 | ✅ done |
| 4 | Ch.4 Race Etiquette | 1 | ✅ done |
| 5 | Ch.5 Scapes | 7 | ✅ done |
| 6 | Ch.2 Mechanism (all sections) | 19 | ✅ done |
| 7 | Ch.3 Tuning & Settings (all sections) | 22 | ✅ done |
| 8 | Ch.1 Automotive Engineering (all sections) | 34 | ✅ done (34/34) |

Rationale: finish Ch.4 (already started) → Ch.5 (short) → Ch.2/3 mid → Ch.1 heaviest last. Every page #1–93 must end as `pass` or `fixed`.

**Current focus:** All chapters complete (93/93 as `pass` or `fixed`).

---

## Chapter 1: Automotive Engineering (34)

### 1.1 Preface (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 1 | Automotive Engineering | `engineering_for_automotive/preface/01` | fixed | 2026-07-17 | ZH rewritten to JP sense (magazines/specialist gap; chapter map). L OK 9 pairs. |

### 1.2 Force, Energy and Vibration (8)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 2 | 1-1 : The Concepts of Force and Torque | `engineering_for_automotive/force_energy_vibration/01` | pass | 2026-07-17 | L/T OK; caption 1-1-3 ZH→JP. 4 imgs OK |
| 3 | 1-2 : The Concept of Energy | `engineering_for_automotive/force_energy_vibration/02` | pass | 2026-07-17 | L/T/D OK. 3 imgs |
| 4 | 1-3 : The Mechanism of Vibration | `engineering_for_automotive/force_energy_vibration/03` | pass | 2026-07-17 | L/T/D OK. 3 imgs |
| 5 | 1-4 : Resonance Phenomenon | `engineering_for_automotive/force_energy_vibration/04` | pass | 2026-07-17 | L/T/D OK. 4 imgs |
| 6 | 1-5 : Effect of Damping Force | `engineering_for_automotive/force_energy_vibration/05` | pass | 2026-07-17 | L/T OK (static scan). |
| 7 | 1-6 : Phase Difference | `engineering_for_automotive/force_energy_vibration/06` | pass | 2026-07-17 | L/T OK (static scan). |
| 8 | 1-7 : Frequency Response | `engineering_for_automotive/force_energy_vibration/07` | pass | 2026-07-17 | L/T OK (static scan). |
| 9 | 1-8 : Vibration in Suspension | `engineering_for_automotive/force_energy_vibration/08` | pass | 2026-07-17 | L/T OK (static scan). Force/Vibration section complete. |

### 1.3 Vehicle Performance (7)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 10 | 2-1 : Tire Dynamics | `engineering_for_automotive/vehicle_performance/01` | fixed | 2026-07-17 | Cornering-force `<br>` dump→2 pairs. |
| 11 | 2-2 : Steady-state Circular Driving | `engineering_for_automotive/vehicle_performance/02` | fixed | 2026-07-17 | Intro dump→3 pairs. |
| 12 | 2-3 : A Car's Response to Changes in Steering Angle | `engineering_for_automotive/vehicle_performance/03` | fixed | 2026-07-17 | 3 dumps→8 pairs. |
| 13 | 2-4 : Vehicle Response to Periodic Steering Motion | `engineering_for_automotive/vehicle_performance/04` | fixed | 2026-07-17 | Intro dump→3 pairs; Bode ZH follows JP (US vehicle). |
| 14 | 2-5 : Body Roll and Vehicle Motion | `engineering_for_automotive/vehicle_performance/05` | fixed | 2026-07-17 | Front/rear load-transfer dump→2 pairs. |
| 15 | 2-6 : Vibration of Sprung Mass and Unsprung Mass | `engineering_for_automotive/vehicle_performance/06` | fixed | 2026-07-17 | Mode/tuning dumps + 1–4 list→pairs; 轮胎垂直刚度. |
| 16 | 2-7 : What Constitutes a High-Performance Car? | `engineering_for_automotive/vehicle_performance/07` | fixed | 2026-07-17 | 3 dumps→pairs; ZH +惯性半径; reverse steer §2-2. |

### 1.4 The Efficient Engine (7)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 17 | 3-1 : Temperature and Pressure | `engineering_for_automotive/the_efficient_engine/01` | fixed | 2026-07-17 | Pressure dump→2 pairs; ZH follows JP. |
| 18 | 3-2 : The Ideal Heat Engine | `engineering_for_automotive/the_efficient_engine/02` | fixed | 2026-07-17 | Properties + steps 1–4 dumps→pairs; ZH←JP. D OK @5175 |
| 19 | 3-3 : Carnot’s Conclusion | `engineering_for_automotive/the_efficient_engine/03` | fixed | 2026-07-17 | Abstraction/bio dumps→pairs; ZH←JP proof/永动机 nuance. |
| 20 | 3-4 : Theoretical Efficiency of Car Engines | `engineering_for_automotive/the_efficient_engine/04` | pass | 2026-07-17 | L/T OK (no `<br>` dumps). |
| 21 | 3-5 : Reversible Change and Irreversible Change | `engineering_for_automotive/the_efficient_engine/05` | fixed | 2026-07-17 | 2 dumps→4 pairs; ZH←JP 秩序/无序. |
| 22 | 3-6 : Reversing the Heat Engine | `engineering_for_automotive/the_efficient_engine/06` | fixed | 2026-07-17 | Otto/Diesel dump→3 pairs; ZH←JP 顺行/逆行. |
| 23 | 3-7 : Engine's Loss of Energy | `engineering_for_automotive/the_efficient_engine/07` | fixed | 2026-07-17 | Loss+Atkinson dumps→pairs; ZH Atkinson←JP (缩短定容冷却). |

### 1.5 Aerodynamics (6)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 24 | 4-1 : Bernoulli’s Theory | `engineering_for_automotive/aerodynamics/01` | fixed | 2026-07-17 | Dumps→pairs; ZH←JP (赛车/欧拉挚友/流速平方). |
| 25 | 4-2 : Law of Fluid Motion | `engineering_for_automotive/aerodynamics/02` | fixed | 2026-07-17 | Euler dump→pairs; ZH 斜面↔球 vs EN Japan weather drift. |
| 26 | 4-3 : Plane of Discontinuity and Vortex Filament | `engineering_for_automotive/aerodynamics/03` | fixed | 2026-07-17 | Paradox+vortex dumps→pairs; ZH←JP. |
| 27 | 4-4 : Kutta–Zhukovsky's Theorem | `engineering_for_automotive/aerodynamics/04` | fixed | 2026-07-17 | Circulation+Kutta dumps→pairs. |
| 28 | 4-5 : Prandtl’s Boundary Layer Theory | `engineering_for_automotive/aerodynamics/05` | fixed | 2026-07-17 | BL dumps→pairs; wind-tunnel caption←JP. |
| 29 | 4-6 : Prandtl's Lifting Line Theory | `engineering_for_automotive/aerodynamics/06` | fixed | 2026-07-17 | Lanchester/wingtip dumps→pairs; Fig.4-6-5 ZH←JP. |

### 1.6 Computational Fluid Dynamics (5)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 30 | 5-1 : The World of CFD | `engineering_for_automotive/computational_fluid_dynamics/01` | fixed | 2026-07-17 | Intro/Lax dumps→pairs; ZH←JP (绕开 NS / 格式). |
| 31 | 5-2 : Finite Volume Method | `engineering_for_automotive/computational_fluid_dynamics/02` | fixed | 2026-07-17 | Numerical-flux dump→3 pairs; ZH←JP. |
| 32 | 5-3 : Features of Scheme | `engineering_for_automotive/computational_fluid_dynamics/03` | fixed | 2026-07-17 | Godunov dump→pairs; ZH←JP. |
| 33 | 5-4 : Compatibility of First-Order / High-Order Approximation | `engineering_for_automotive/computational_fluid_dynamics/04` | fixed | 2026-07-17 | TVD dumps→pairs; ZH +发动机可压缩流. |
| 34 | 5-5 : Solving Turbulence | `engineering_for_automotive/computational_fluid_dynamics/05` | fixed | 2026-07-17 | Vortex dump→pairs; RANS/LES ZH←JP. |

---

## Chapter 2: Review: Mechanism (19)

### 2.1 Basic Specs (2)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 35 | Dimensions | `review_mechanism/packaging/01` | fixed | 2026-07-17 | Track Width had EN+ZH dump via `<br><br>` — split to 2 bilingual pairs (7 total). T follows JP. D OK @5175 (4 imgs) |
| 36 | Drivetrains and Weight Distribution | `review_mechanism/packaging/02` | fixed | 2026-07-17 | Mojibake + FF–RR scramble fixed; intro 5×`<br>` dump → 5 bilingual pairs (10 total). FF纵置 vs EN transverse kept. 5 imgs OK |

### 2.2 The Heart of The Automobile (6)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 37 | Mechanism and Principles | `review_mechanism/engine/01` | fixed | 2026-07-17 | Intro ZH mojibake; 5×`<br>` dump→5 pairs (9 total). ZH follows JP（排气靠气体自喷；直列共用凸轮轴）. 5 imgs OK |
| 38 | Valve Configurations | `review_mechanism/engine/02` | fixed | 2026-07-17 | Intro ZH mojibake; 3×`<br>` dump→3 pairs (6 total). T follows JP. 3 imgs OK |
| 39 | Rotary Engines | `review_mechanism/engine/03` | fixed | 2026-07-17 | Mojibake + 5×`<br>`→5 pairs. 毘庸→毋庸. 1 img OK |
| 40 | Forced Induction | `review_mechanism/engine/04` | fixed | 2026-07-17 | Mojibake + 7×`<br>`→7 pairs (9 total). ZH kept JP「1℃≈1ps」tip. 2 imgs OK |
| 41 | Hybrid Systems | `review_mechanism/engine/05` | fixed | 2026-07-17 | Mojibake + 4×`<br>`→4 pairs (12 total). ZH kept JP 1000 PS / series高速效率. 9 imgs OK |
| 42 | Performance Keywords | `review_mechanism/engine/06` | fixed | 2026-07-17 | Mojibake Torque/Displacement/Compression; all `<br>` dumps→pairs (14). Bore/Stroke ZH follows JP stroke÷bore（EN labels swapped）; fixed inverted 上下止点. 4 imgs OK |

### 2.3 Turning Power into Speed (2)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 43 | Transmission | `review_mechanism/drivetrain/01` | fixed | 2026-07-17 | Mojibake intro; `<br>` dumps→pairs (10). Final Drive also split. 2 imgs OK |
| 44 | The Differential and LSD | `review_mechanism/drivetrain/02` | fixed | 2026-07-17 | Mojibake Diff/LSD; dumps→pairs (12). 5 imgs OK |

### 2.4 The Framework that Supports it All (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 45 | Body Performance Requirements | `review_mechanism/body/01` | fixed | 2026-07-17 | Mojibake + 6×`<br>`→6 pairs (8 total). 3 imgs OK |

### 2.5 Thermal Exchangers that Reduce Speed (2)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 46 | Construction and Principles | `review_mechanism/brakes/01` | fixed | 2026-07-17 | Mojibake + 6×`<br>`→6 pairs (10 total). 3 imgs OK |
| 47 | Brake Discs and Calipers | `review_mechanism/brakes/02` | pass | 2026-07-17 | L OK (6 EN→ZH). T OK follows JP. 6 imgs present |

### 2.6 Dampers for Controlling Springs Body Movement (3)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 48 | Construction and Principles | `review_mechanism/suspensions/01` | fixed | 2026-07-17 | Intro 4×`<br>`→4 pairs (10 total). Caption→`caption` class. 4 imgs OK |
| 49 | Types of Suspension | `review_mechanism/suspensions/02` | fixed | 2026-07-17 | Intro `<br>` dump→2 pairs; body ZH from JP (7 pairs). 5 imgs OK |
| 50 | Wheel Alignment | `review_mechanism/suspensions/03` | fixed | 2026-07-17 | Intro dump→pairs; fuller ZH from JP (9 pairs). 4 imgs OK |

### 2.7 The Link Between Car and Road (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 51 | High-Performance Tires | `review_mechanism/tires/01` | fixed | 2026-07-17 | Mojibake + 5×`<br>`→5 pairs (8 total). Title ZH「…的条件」follows JP. 4 imgs OK |

### 2.8 Aluminum Road Wheels (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 52 | Unsprung Weight | `review_mechanism/wheels/01` | fixed | 2026-07-17 | Intro dump→6 pairs; 2 captions→`caption`; expanded short ZH (13 pairs). 5 imgs OK |

### 2.9 The Effect of Air on the Body (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 53 | Air Resistance and Lift | `review_mechanism/aerodynamics/01` | fixed | 2026-07-17 | Mojibake + 5×`<br>`→5 pairs (9 total). Cd ZH follows JP「与速度无关」vs EN drift. 4 imgs OK |

---

## Chapter 3: Review: Tuning & Settings (22)

### 3.1 Improving Engine Performance (6)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 54 | Fine-Tuning | `review_tuning_and_settings/engine/01` | fixed | 2026-07-17 | L OK (6 pairs). T polished to JP (ROM 调校; muffler 1–2成 vs EN “modest”). 4 imgs OK |
| 55 | Overhauling the Engine | `review_tuning_and_settings/engine/02` | fixed | 2026-07-17 | 4 captions→`caption`; fuller ZH (bore walls / one-make). 5 imgs OK |
| 56 | Increasing RPM | `review_tuning_and_settings/engine/03` | fixed | 2026-07-17 | 2 captions→`caption`; fuller ZH from JP (7 pairs). 4 imgs OK |
| 57 | Increasing Compression | `review_tuning_and_settings/engine/04` | fixed | 2026-07-17 | Caption→`caption`; squish ZH follows JP「削挤压区」vs EN quench feature. 5 imgs OK |
| 58 | Forced Induction Devices | `review_tuning_and_settings/engine/05` | fixed | 2026-07-17 | Fuller ZH from JP (lag/cutback/10–20% drop). L OK 6 pairs. 4 imgs OK |
| 59 | Rotary Engines | `review_tuning_and_settings/engine/06` | fixed | 2026-07-17 | Bridge `<br>`→2 pairs; caption class; fuller ZH (8 pairs). 4 imgs OK |

### 3.2 Tuning the Drivetrain (3)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 60 | Gear Ratio | `review_tuning_and_settings/drive_system/01` | fixed | 2026-07-17 | Fuller ZH from JP (long/short／密宽齿). L OK 6 pairs. 4 imgs OK |
| 61 | Clutch, Flywheels and Propeller Shafts | `review_tuning_and_settings/drive_system/02` | fixed | 2026-07-17 | Fuller ZH from JP (6 pairs). 5 imgs OK |
| 62 | Limited Slip Differential | `review_tuning_and_settings/drive_system/03` | fixed | 2026-07-17 | Caption→`caption`; fuller ZH (lock ~50%, 1/1.5/2WAY). 1 img OK |

### 3.3 Shaping Up the Body (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 63 | Weight Reduction and Rigidity | `review_tuning_and_settings/boby/01` | fixed | 2026-07-17 | Fuller ZH from JP (Nürburgring; 加点焊). L OK 6 pairs. 4 imgs OK |

### 3.4 Improving Stopping Power (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 64 | Boosting Brake Power and Avoiding Brake Fade | `review_tuning_and_settings/stopping_power/01` | fixed | 2026-07-17 | Fuller ZH (over-spec warning; DOT5 cycle; opposed pistons). 3 imgs OK |

### 3.5 Improving the Suspension System (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 65 | Adjusting Handling Characteristics | `review_tuning_and_settings/footwork/01` | fixed | 2026-07-17 | Fuller ZH (soft setup as tuning; pillow ball). 5 imgs OK |

### 3.6 Upgrading to High-Performance Tires (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 66 | Increased Grip/Rigidity | `review_tuning_and_settings/tires/01` | fixed | 2026-07-17 | Intro `<br>`→2 pairs; fuller ZH (inch-up for brakes). 2 imgs OK |

### 3.7 Improving Aerodynamics (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 67 | Aerodynamic Tuning | `review_tuning_and_settings/aerodynamics/01` | fixed | 2026-07-17 | Fuller ZH from JP (front lift trap; diffuser gap). 5 imgs OK |

### 3.8 Changing Settings According to Car Characteristics (1)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 68 | Drivetrain Layout | `review_tuning_and_settings/vehicle_qualities/01` | fixed | 2026-07-17 | FR `<br>`→2 pairs; fuller ZH (FF 1WAY / 4WD front 1WAY rear 2WAY). 5 imgs OK |

### 3.9 Basic Settings Part-by-Part (4)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 69 | Suspension ① | `review_tuning_and_settings/basic_settings/01` | fixed | 2026-07-17 | Ride/damping dumps→6 pairs + 2 captions. 2 imgs OK |
| 70 | Suspension ② | `review_tuning_and_settings/basic_settings/02` | fixed | 2026-07-17 | Camber/toe/ARB dumps→11 pairs; toe ZH follows JP (EN drift). |
| 71 | Drivetrain | `review_tuning_and_settings/basic_settings/03` | fixed | 2026-07-17 | LSD/gear dumps→8 pairs. |
| 72 | Aerodynamics | `review_tuning_and_settings/basic_settings/04` | fixed | 2026-07-17 | Downforce dump→4 pairs; 4 imgs OK. |

### 3.10 Settings for Specific Situations (3)

| # | Page | Route | Status | Reviewed | Notes |
|---|------|-------|--------|----------|-------|
| 73 | High-Speed Circuits, Technical Courses | `review_tuning_and_settings/advanced_settings/01` | fixed | 2026-07-17 | Dumps→7 pairs; tech toe ZH follows JP トーイン. 2 imgs OK |
| 74 | Countering Understeer, Countering Oversteer | `review_tuning_and_settings/advanced_settings/02` | fixed | 2026-07-17 | Dumps→10 pairs (ZH had br dump). 2 imgs OK |
| 75 | Wet Conditions, Gravel | `review_tuning_and_settings/advanced_settings/03` | fixed | 2026-07-17 | Dumps→8 pairs. Ch.3 complete (22/22). 2 imgs OK |

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
| 2026-07-17 | Ch.2 Basic Specs 01–02 | 2 | Both fixed: L — split `<br><br>` multi-para dumps into EN→ZH bilingual pairs; #36 also mojibake/scramble. Next: engine/01 |
| 2026-07-17 | Ch.2 Engine 01–02 | 2 | #37–38 fixed: mojibake + `<br>` dumps→pairs. Next: engine/03 Rotary |
| 2026-07-17 | Ch.2 Engine 03–04 | 2 | #39–40 fixed: same mojibake/`<br>` pattern. Next: engine/05 Hybrid |
| 2026-07-17 | Ch.2 Engine 05–06 | 2 | Heart of Automobile complete (6/6). #42 Bore/Stroke JP vs EN label drift. Next: drivetrain/01 |
| 2026-07-17 | Ch.2 Drivetrain 01–02 | 2 | Turning Power into Speed complete (2/2). Next: body/01 |
| 2026-07-17 | Ch.2 Body + Brakes/01 | 2 | #45 body done; #46 brakes principles. Next: brakes/02 |
| 2026-07-17 | Ch.2 Brakes/02 + Susp/01 | 2 | #47 pass; #48 fixed (intro pairs + caption). Next: suspensions/02 |
| 2026-07-17 | Ch.2 Susp/02–03 | 2 | #49–50 fixed: intro dumps→EN→ZH pairs; ZH from JP. Next: tires/01 |
| 2026-07-17 | Ch.2 Tires + Wheels + Aero | 3 | Ch.2 complete (19/19). #51–53 fixed (mojibake/dumps/captions; Cd JP drift). Next: Ch.3 |
| 2026-07-17 | Ch.3 Engine 01–02 | 2 | #54–55 fixed. Next: engine/03 Increasing RPM |
| 2026-07-17 | Ch.3 Engine 03–06 | 4 | Improving Engine Performance complete (6/6). Squish EN/JP drift; Bridge dump split. Next: drive_system/01 |
| 2026-07-17 | Ch.3 Drivetrain 01–03 | 3 | Tuning the Drivetrain complete (3/3). Next: boby/01 Weight Reduction |
| 2026-07-17 | Ch.3 Body→Aero 01 | 5 | #63–67 fixed (tires intro dump split). Next: vehicle_qualities/01 |
| 2026-07-17 | Ch.3 Vehicle qualities | 1 | #68 fixed (FR dump split). Next: basic_settings/01 |
| 2026-07-17 | Ch.3 Basic+Advanced settings | 7 | Ch.3 complete (22/22). Dumps split; toe/camber JP drift noted. Next: Ch.1 |
| 2026-07-17 | Ch.1 Preface + Force/Vib + Perf 01–03 | 12 | #1 fixed; #2–9 pass; #10–12 dumps split. Next: vehicle_performance/04 |
| 2026-07-17 | Ch.1 Vehicle performance 04–07 | 4 | #13–16 fixed (dumps→pairs; JP Bode/惯性半径). Vehicle Performance complete. Next: the_efficient_engine/01 |
| 2026-07-17 | Ch.1 Efficient engine 01–07 | 7 | #17–19/#21–23 fixed; #20 pass. Engine section complete. Next: aerodynamics/01 |
| 2026-07-17 | Ch.1 Aerodynamics 01–06 | 6 | #24–29 fixed (dumps; EN Japan-weather / Fig.4-6-5 drift). Aero complete. Next: CFD/01 |
| 2026-07-17 | Ch.1 CFD 01–05 | 5 | #30–34 fixed. Ch.1 + all chapters complete (93/93). |

---

## Recurring issue tracker

Capture patterns that appear across many pages (so later sections can fix in batch).

| Pattern | First seen | Count | Resolution |
|---------|------------|------:|------------|
| Image captions missing `className="caption"` (look like body text) | Ch.4 | many | Apply `p.caption` inside `.bilingual` after images |
| Stale extract JSON drops `<div class="images">` galleries | Ch.4.1 p.02 | 4+ | Ch.5 Scapes 01–03 also; restore `.images` + `dl.image_list` from official HTML |
| Captions flattened into body bilingual paragraphs | Ch.5 Scapes | 3 | Move caption text under images with `caption` class |
| Official EN wording drifts from JP; ZH follows JP | Ch.4 in-game PP / aero | 6+ | Prefer JP sense for ZH; keep official EN text as-is (also DOF F=8; DOF rule #1; color-temp「湿度」vs「air temperature」; Ch.2 FF 纵置 vs EN transverse; Bore/Stroke long/short labels swapped vs JP stroke÷bore; Cd「与速度无关」vs EN “can vary with speed”; Ch.3 squish「削挤压区略降压缩」vs EN quench feature; toe front-in/rear-out→OS vs EN; tech course front トーイン vs EN toe-out) |
| Headings use `EN / ZH` on one line (site convention; not body L rule) | all | — | OK; body paragraphs remain EN→ZH pairs |
| UTF-8 ZH stored as Latin-1 mojibake (`ä¸è½¦…`) | Ch.2 packaging/02 | 3+ | Re-encode / restore from JP sense (also engine/01–02 intros) |
| Section ZH titles/bodies shifted (wrong layout under wrong heading) | Ch.2 packaging/02 | 1 | Realign each FR/FF/MR/RR/4WD block to matching EN+JP |
| Multi-para dump: one `.bilingual` with EN/ZH joined by `<br><br>` (reads as all-EN then all-ZH) | Ch.2 packaging | 4+ | Split each logical paragraph into its own `.bilingual` (EN `<p>` → ZH `<p>`); also engine/01–02 |
