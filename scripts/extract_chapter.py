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

    def expand_images(match: re.Match[str]) -> str:
        div = match.group(0)
        out: list[str] = []
        for dl in re.finditer(
            r'<dl class="image_list">(.*?)</dl>', div, flags=re.DOTALL
        ):
            content = dl.group(1)
            im = re.search(r'<img src="([^"]+)"', content)
            cap = re.search(r'<dd class="caption">(.*?)</dd>', content, flags=re.DOTALL)
            if im:
                out.append(f'<p class="image"><img src="{im.group(1)}" alt="" /></p>')
            if cap:
                out.append(f'<p class="caption">{cap.group(1)}</p>')
        return "".join(out)

    body = re.sub(
        r'<div class="images">.*?</div>\s*',
        expand_images,
        body,
        flags=re.DOTALL,
    )
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


def align_blocks(us_blocks: list[dict], jp_blocks: list[dict]) -> list[dict]:
    """Pair US/JP blocks; skip JP-only captions after images when US has none."""
    aligned: list[dict] = []
    j = 0
    for i, ub in enumerate(us_blocks):
        while j < len(jp_blocks) and ub["type"] != jp_blocks[j]["type"]:
            prev_us = us_blocks[i - 1] if i > 0 else None
            if (
                prev_us
                and prev_us["type"] == "img"
                and jp_blocks[j]["type"] == "p"
            ):
                j += 1
                continue
            raise ValueError(
                f"Block type mismatch at US[{i}]={ub['type']}: "
                f"JP[{j}]={jp_blocks[j]['type']}"
            )
        aligned.append(
            {"type": ub["type"], "en": ub["text"], "jp": jp_blocks[j]["text"]}
        )
        j += 1
    while j < len(jp_blocks):
        if aligned and aligned[-1]["type"] == "img" and jp_blocks[j]["type"] == "p":
            j += 1
            continue
        raise ValueError(
            f"Unpaired JP blocks remain: US={len(us_blocks)} JP={len(jp_blocks)}"
        )
    return aligned


def pair_blocks_manual(
    us_blocks: list[dict], jp_blocks: list[dict], jp_indices: list[int | None]
) -> list[dict]:
    """Pair US blocks to JP blocks by explicit JP index (None = US-only)."""
    if len(jp_indices) != len(us_blocks):
        raise ValueError("jp_indices length must match US blocks")
    aligned: list[dict] = []
    for ub, ji in zip(us_blocks, jp_indices):
        jp_text = jp_blocks[ji]["text"] if ji is not None else ""
        aligned.append({"type": ub["type"], "en": ub["text"], "jp": jp_text})
    return aligned


CH5_JP_MAP: dict[str, list[int | None]] = {
    # US-only 7:3 paragraph at index 11
    "photographing_cars__scapes__02": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, None, 11, 12],
    # Skip JP-only scapes note before comparison images; skip JP-only closing line
    "photographing_cars__scapes__05": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    # US-only closing comparison images for white car
    "photographing_cars__scapes__06": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, None, None],
}


def extract_page(us_html: str, jp_html: str, page_key: str | None = None) -> dict:
    us_blocks = parse_body_blocks(us_html)
    jp_blocks = parse_body_blocks(jp_html)
    if page_key and page_key in CH5_JP_MAP:
        blocks = pair_blocks_manual(us_blocks, jp_blocks, CH5_JP_MAP[page_key])
    else:
        blocks = align_blocks(us_blocks, jp_blocks)
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
            page_key=key,
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
