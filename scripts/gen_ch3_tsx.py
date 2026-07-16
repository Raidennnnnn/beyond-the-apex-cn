#!/usr/bin/env python3
"""Generate Chapter 3 (Review: Tuning & Settings) bilingual TSX components."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CH3_JSON = ROOT / "scripts/official-apex/extracted/ch3.json"
CH3_ZH = ROOT / "scripts/official-apex/extracted/ch3_zh.json"
OUT_DIR = ROOT / "src/components/beyond the apex"

PAGE_META: dict[str, tuple[str, str]] = {
    "review_tuning_and_settings__engine__01": ("FineTuning", "精细调校"),
    "review_tuning_and_settings__engine__02": ("OverhaulingTheEngine", "发动机大修"),
    "review_tuning_and_settings__engine__03": ("IncreasingRPM", "提高转速"),
    "review_tuning_and_settings__engine__04": ("IncreasingCompression", "提高压缩比"),
    "review_tuning_and_settings__engine__05": ("ForcedInductionDevices", "强制进气装置"),
    "review_tuning_and_settings__engine__06": ("TuningRotaryEngines", "转子发动机"),
    "review_tuning_and_settings__drive_system__01": ("GearRatio", "齿轮比"),
    "review_tuning_and_settings__drive_system__02": (
        "ClutchFlywheelsAndPropellerShafts",
        "离合器、飞轮与传动轴",
    ),
    "review_tuning_and_settings__drive_system__03": (
        "LimitedSlipDifferentialTuning",
        "限滑差速器",
    ),
    "review_tuning_and_settings__boby__01": (
        "WeightReductionAndRigidity",
        "减重与刚性",
    ),
    "review_tuning_and_settings__stopping_power__01": (
        "BoostingBrakePowerAndAvoidingBrakeFade",
        "提升制动力与避免热衰退",
    ),
    "review_tuning_and_settings__footwork__01": (
        "AdjustingHandlingCharacteristics",
        "调整操控特性",
    ),
    "review_tuning_and_settings__tires__01": ("IncreasedGripRigidity", "提高抓地/刚性"),
    "review_tuning_and_settings__aerodynamics__01": ("AerodynamicTuning", "空气动力学调校"),
    "review_tuning_and_settings__vehicle_qualities__01": ("DrivetrainLayout", "驱动形式布局"),
    "review_tuning_and_settings__basic_settings__01": ("SuspensionSettings1", "悬架 ①"),
    "review_tuning_and_settings__basic_settings__02": ("SuspensionSettings2", "悬架 ②"),
    "review_tuning_and_settings__basic_settings__03": ("DrivetrainSettings", "传动系统"),
    "review_tuning_and_settings__basic_settings__04": ("AerodynamicsSettings", "空气动力学"),
    "review_tuning_and_settings__advanced_settings__01": (
        "HighSpeedCircuitsTechnicalCourses",
        "高速赛道、技术型赛道",
    ),
    "review_tuning_and_settings__advanced_settings__02": (
        "CounteringUndersteerOversteer",
        "抑制转向不足与转向过度",
    ),
    "review_tuning_and_settings__advanced_settings__03": (
        "WetConditionsGravel",
        "湿地、砂石",
    ),
}


def jsx_text(s: str) -> str:
    paragraphs = [p.strip() for p in s.split("\n\n") if p.strip()]
    out: list[str] = []
    for i, para in enumerate(paragraphs):
        if i > 0:
            out.append("<br />")
            out.append("<br />")
        out.append(para)
    return "\n            ".join(out)


def img_var(src: str) -> str:
    return Path(src).stem


def render_h3(en: str, zh: str) -> str:
    if en.startswith("●") or en.startswith("■"):
        return f"""        <h3 className="section-header">
          {en} / {zh}
        </h3>"""
    return f"""        <h3>
          {en} / {zh}
        </h3>"""


def render_paragraph(en: str, zh: str) -> str:
    return f"""        <div className="bilingual">
          <p lang="en">
            {jsx_text(en)}
          </p>
          <p lang="zh">
            {jsx_text(zh)}
          </p>
        </div>"""


def render_image(src: str) -> str:
    var = img_var(src)
    return f"""        <p className="image">
          <img alt="" src={{{var}}} />
        </p>"""


def generate_component(page_key: str, data: dict, zh_blocks: dict[str, str]) -> str:
    comp_name, h1_zh = PAGE_META[page_key]
    h1_en = data["h1_en"]
    imports: set[str] = set()
    body_lines: list[str] = []

    for i, block in enumerate(data["blocks"]):
        btype = block["type"]
        en = block["en"]

        if btype == "img":
            imports.add(en)
            body_lines.append(render_image(en))
            continue

        zh_key = f"{page_key}:{i}"
        zh = zh_blocks.get(zh_key)
        if zh is None:
            raise KeyError(f"Missing zh translation: {zh_key}")

        if btype == "h3":
            body_lines.append(render_h3(en, zh))
        elif btype == "p":
            body_lines.append(render_paragraph(en, zh))
        else:
            raise ValueError(f"Unknown block type: {btype}")

    import_lines = "\n".join(
        f'import {img_var(s)} from "../../assets/images/{img_var(s)}.webp";'
        for s in sorted(imports)
    )
    if import_lines:
        import_lines += "\n\n"

    body = "\n\n".join(body_lines)
    return f"""{import_lines}const {comp_name} = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>{h1_en} / {h1_zh}</h1>
      </div>
      <div className="body">
{body}
      </div>
    </div>
  </>
);

export default {comp_name};
"""


def main() -> None:
    data = json.loads(CH3_JSON.read_text(encoding="utf-8"))
    zh_blocks = json.loads(CH3_ZH.read_text(encoding="utf-8"))
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for page_key in PAGE_META:
        tsx = generate_component(page_key, data[page_key], zh_blocks)
        comp_name = PAGE_META[page_key][0]
        out = OUT_DIR / f"{comp_name}.tsx"
        out.write_text(tsx, encoding="utf-8")
        print(f"Wrote {out.name}")

    print(f"Done: {len(PAGE_META)} components")


if __name__ == "__main__":
    main()
