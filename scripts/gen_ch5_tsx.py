#!/usr/bin/env python3
"""Generate Chapter 5 (Photographing Cars) bilingual TSX components."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CH5_JSON = ROOT / "scripts/official-apex/extracted/ch5.json"
CH5_ZH = ROOT / "scripts/official-apex/extracted/ch5_zh.json"
OUT_DIR = ROOT / "src/components/beyond the apex"

PAGE_META: dict[str, tuple[str, str]] = {
    "photographing_cars__scapes__01": ("TheAngle", "角度"),
    "photographing_cars__scapes__02": ("Lighting", "光线"),
    "photographing_cars__scapes__03": ("DepthOfField", "景深"),
    "photographing_cars__scapes__04": ("Lenses", "镜头"),
    "photographing_cars__scapes__05": ("ColorTemperature", "色温"),
    "photographing_cars__scapes__06": ("Exposure", "曝光"),
    "photographing_cars__scapes__07": ("TakingBetterPhotos", "拍出更好的照片"),
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
    data = json.loads(CH5_JSON.read_text(encoding="utf-8"))
    zh_blocks = json.loads(CH5_ZH.read_text(encoding="utf-8"))
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
