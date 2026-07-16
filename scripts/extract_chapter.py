#!/usr/bin/env python3
"""Extract US/JP block pairs from cached official HTML into chapter JSON."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CACHE = ROOT / "scripts/official-apex"


def strip_tags(html: str) -> str:
    text = re.sub(r"<br\s*/?>", "\n", html, flags=re.IGNORECASE)
    text = re.sub(r"<[^>]+>", "", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def parse_h1(html: str) -> str:
    m = re.search(r'<div class="content_header">\s*<h1>(.*?)</h1>', html, re.DOTALL)
    return strip_tags(m.group(1)) if m else ""


def parse_body_blocks(html: str) -> list[dict]:
    m = re.search(r'<div class="body">(.*)</div>\s*</div>\s*$', html, re.DOTALL)
    if not m:
        raise ValueError("No body found")
    body = m.group(1)
    blocks: list[dict] = []
    parts = re.split(
        r"(<h[123][^>]*>.*?</h[123]>|<p[^>]*>.*?</p>)",
        body,
        flags=re.DOTALL,
    )
    for part in parts:
        part = part.strip()
        if not part:
            continue
        hm = re.match(r"<h([123])[^>]*>(.*?)</h\1>", part, re.DOTALL)
        if hm:
            blocks.append({"type": "h3", "text": strip_tags(hm.group(2))})
            continue
        im = re.match(r'<p class="image"><img src="([^"]+)"', part)
        if im:
            blocks.append({"type": "img", "text": im.group(1)})
            continue
        pm = re.match(r"<p[^>]*>(.*?)</p>", part, re.DOTALL)
        if pm:
            blocks.append({"type": "p", "text": strip_tags(pm.group(1))})
    return blocks


def page_key_from_file(name: str) -> str:
    return name.replace(".html", "")


def extract_page(us_html: str, jp_html: str) -> dict:
    us_blocks = parse_body_blocks(us_html)
    jp_blocks = parse_body_blocks(jp_html)
    if len(us_blocks) != len(jp_blocks):
        raise ValueError(
            f"Block count mismatch: US={len(us_blocks)} JP={len(jp_blocks)}"
        )
    blocks = []
    for ub, jb in zip(us_blocks, jp_blocks):
        if ub["type"] != jb["type"]:
            raise ValueError(f"Block type mismatch: {ub['type']} vs {jb['type']}")
        blocks.append({"type": ub["type"], "en": ub["text"], "jp": jb["text"]})
    return {
        "h1_en": parse_h1(us_html),
        "h1_jp": parse_h1(jp_html),
        "blocks": blocks,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--prefix", required=True, help="e.g. review_tuning_and_settings")
    parser.add_argument("--out", type=Path, required=True)
    args = parser.parse_args()

    us_dir = CACHE / "us"
    jp_dir = CACHE / "jp"
    pages: dict[str, dict] = {}

    for us_file in sorted(us_dir.glob(f"{args.prefix}__*.html")):
        key = page_key_from_file(us_file.name)
        jp_file = jp_dir / us_file.name
        if not jp_file.exists():
            raise FileNotFoundError(f"Missing JP file: {jp_file}")
        pages[key] = extract_page(
            us_file.read_text(encoding="utf-8"),
            jp_file.read_text(encoding="utf-8"),
        )
        print(f"  {key}: {len(pages[key]['blocks'])} blocks")

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(pages, ensure_ascii=False, indent=2), encoding="utf-8")
    total_blocks = sum(len(p["blocks"]) for p in pages.values())
    text_blocks = sum(
        1 for p in pages.values() for b in p["blocks"] if b["type"] != "img"
    )
    img_blocks = total_blocks - text_blocks
    print(f"Wrote {len(pages)} pages, {text_blocks} text + {img_blocks} img blocks -> {args.out}")


if __name__ == "__main__":
    main()
