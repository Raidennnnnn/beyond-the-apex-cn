#!/usr/bin/env python3
"""Generate Chapter 2 (Review: Mechanism) bilingual TSX components."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CH2_JSON = ROOT / "scripts/official-apex/extracted/ch2.json"
CH2_ZH = ROOT / "scripts/official-apex/extracted/ch2_zh.json"
OUT_DIR = ROOT / "src/components/beyond the apex"

PAGE_META: dict[str, tuple[str, str]] = {
    "review_mechanism__packaging__01": ("Dimensions", "尺寸"),
    "review_mechanism__packaging__02": ("DrivetrainsAndWeightDistribution", "驱动形式与重量分配"),
    "review_mechanism__engine__01": ("MechanismAndPrinciples", "结构与原理"),
    "review_mechanism__engine__02": ("ValveConfigurations", "气门布置"),
    "review_mechanism__engine__03": ("RotaryEngines", "转子发动机"),
    "review_mechanism__engine__04": ("ForcedInduction", "强制进气"),
    "review_mechanism__engine__05": ("HybridSystems", "混合动力系统"),
    "review_mechanism__engine__06": ("PerformanceKeywords", "性能关键词"),
    "review_mechanism__drivetrain__01": ("Transmission", "变速箱"),
    "review_mechanism__drivetrain__02": ("TheDifferentialAndLSD", "差速器与限滑差速器"),
    "review_mechanism__body__01": ("BodyPerformanceRequirements", "车身性能要求"),
    "review_mechanism__brakes__01": ("BrakesConstructionAndPrinciples", "结构与原理"),
    "review_mechanism__brakes__02": ("BrakeDiscsAndCalipers", "制动盘与卡钳"),
    "review_mechanism__suspensions__01": ("SuspensionsConstructionAndPrinciples", "结构与原理"),
    "review_mechanism__suspensions__02": ("TypesOfSuspension", "悬架类型"),
    "review_mechanism__suspensions__03": ("WheelAlignment", "车轮定位"),
    "review_mechanism__tires__01": ("HighPerformanceTires", "高性能轮胎"),
    "review_mechanism__wheels__01": ("UnsprungWeight", "非簧载质量"),
    "review_mechanism__aerodynamics__01": ("AirResistanceAndLift", "空气阻力与升力"),
}


def esc(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("{", "{{")
        .replace("}", "}}")
        .replace("'", "&apos;")
        .replace('"', "&quot;")
        .replace("<", "&lt;")
    )


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
    name = Path(src).stem
    return name


def bilingual_heading(tag: str, en: str, zh: str, class_name: str | None = None) -> str:
    classes = ["bilingual-title"]
    if class_name:
        classes.insert(0, class_name)
    cls = f' className="{" ".join(classes)}"'
    return (
        f"<{tag}{cls}>"
        f'<span lang="en">{en}</span>'
        f'<span className="bilingual-sep"> / </span>'
        f'<span lang="zh">{zh}</span>'
        f"</{tag}>"
    )


def render_h3(en: str, zh: str) -> str:
    if en.startswith("●") or en.startswith("■"):
        return "        " + bilingual_heading("h3", en, zh, "section-header")
    return "        " + bilingual_heading("h3", en, zh)


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
        {bilingual_heading('h1', h1_en, h1_zh)}
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
    data = json.loads(CH2_JSON.read_text(encoding="utf-8"))
    zh_blocks = json.loads(CH2_ZH.read_text(encoding="utf-8"))
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
