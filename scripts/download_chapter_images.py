#!/usr/bin/env python3
"""Download chapter images from ch{N}.json and convert to WebP."""

from __future__ import annotations

import argparse
import json
import time
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
BASE = "https://www.gran-turismo.com"
USER_AGENT = "Mozilla/5.0 (compatible; beyond-the-apex-cn/1.0)"


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--json", type=Path, required=True)
    parser.add_argument("--delay", type=float, default=0.15)
    args = parser.parse_args()

    data = json.loads(args.json.read_text(encoding="utf-8"))
    out_dir = ROOT / "src/assets/images"
    out_dir.mkdir(parents=True, exist_ok=True)

    images: set[str] = set()
    for page in data.values():
        for block in page["blocks"]:
            if block["type"] == "img":
                images.add(block["en"])

    converted = skipped = failed = 0
    for src in sorted(images):
        name = Path(src).stem
        webp = out_dir / f"{name}.webp"
        if webp.exists():
            skipped += 1
            continue
        jpg = out_dir / f"{name}.jpg"
        try:
            jpg.write_bytes(fetch(f"{BASE}{src}"))
            with Image.open(jpg) as img:
                img.save(webp, "webp")
            jpg.unlink()
            converted += 1
            print(f"  {name}.webp")
        except Exception as exc:
            failed += 1
            print(f"  FAIL {src}: {exc}")
        time.sleep(args.delay)

    print(f"Done: {converted} converted, {skipped} skipped, {failed} failed")


if __name__ == "__main__":
    main()
