#!/usr/bin/env python3
"""Generate Chapter 4 (How to get started) bilingual TSX components."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CH4_JSON = ROOT / "scripts/official-apex/extracted/ch4.json"
CH4_ZH = ROOT / "scripts/official-apex/extracted/ch4_zh.json"
OUT_DIR = ROOT / "src/components/beyond the apex"

PAGE_META: dict[str, tuple[str, str]] = {
    "how_to_get_started__advice_for_beginners__01": (
        "GettingUsedToYourController",
        "熟悉控制器",
    ),
    "how_to_get_started__advice_for_beginners__02": (
        "GettingToKnowTheWidthOfYourCar",
        "了解车身宽度",
    ),
    "how_to_get_started__advice_for_beginners__03": (
        "SettingTrackMarkers",
        "设置赛道标记",
    ),
    "how_to_get_started__advice_for_beginners__04": (
        "LearningHowToBePrecise",
        "学习精准驾驶",
    ),
    "how_to_get_started__advice_for_beginners__05": (
        "TakingCorners",
        "过弯技巧",
    ),
    "how_to_get_started__using_driver_assistance__01": (
        "UsingDriverAssistBraking",
        "驾驶辅助 ① - 制动",
    ),
    "how_to_get_started__using_driver_assistance__02": (
        "UsingDriverAssistCarControl",
        "驾驶辅助 ② - 车身控制",
    ),
    "how_to_get_started__in_game__01": (
        "InGameGeneralPrinciples",
        "游戏内设置：基本原则",
    ),
    "how_to_get_started__in_game__02": (
        "InGameSuspension",
        "游戏内设置：悬架",
    ),
    "how_to_get_started__in_game__03": (
        "InGameAerodynamicsGearRatios",
        "游戏内设置：空气动力学/齿轮比",
    ),
    "how_to_get_started__race_etiquette__01": (
        "EnsuringSafeAndEnjoyableRaces",
        "确保安全愉快的比赛",
    ),
}


def esc(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("{", "{{")
        .replace("}", "}}")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


def jsx_text(s: str) -> str:
    paragraphs = [p.strip() for p in s.split("\n\n") if p.strip()]
    out: list[str] = []
    for i, para in enumerate(paragraphs):
        if i > 0:
            out.append("<br />")
            out.append("<br />")
        lines = para.split("\n")
        for j, line in enumerate(lines):
            if j > 0:
                out.append("<br />")
            out.append(esc(line))
    return "\n            ".join(out)


def img_var(src: str) -> str:
    return Path(src).stem


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
        {bilingual_heading('h1', esc(h1_en), esc(h1_zh))}
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
    data = json.loads(CH4_JSON.read_text(encoding="utf-8"))
    zh_blocks = json.loads(CH4_ZH.read_text(encoding="utf-8"))
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
