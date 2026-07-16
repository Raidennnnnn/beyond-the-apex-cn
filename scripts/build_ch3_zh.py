#!/usr/bin/env python3
"""Build ch3_zh.json from inline Simplified Chinese translations."""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CH3_JSON = ROOT / "scripts/official-apex/extracted/ch3.json"
OUT = ROOT / "scripts/official-apex/extracted/ch3_zh.json"

from ch3_translations_part1 import PART1
from ch3_translations_part2 import PART2
from ch3_translations_part3 import PART3

# Keys: "{page_key}:{block_index}"
ZH: dict[str, str] = {**PART1, **PART2, **PART3}


def main() -> None:
    ch3 = json.loads(CH3_JSON.read_text(encoding="utf-8"))
    missing = []
    for page_key, page in ch3.items():
        for i, block in enumerate(page["blocks"]):
            if block["type"] == "img":
                continue
            key = f"{page_key}:{i}"
            if key not in ZH:
                missing.append(key)
    if missing:
        print(f"Missing {len(missing)} translations (showing first 20):")
        for k in missing[:20]:
            print(" ", k)
        raise SystemExit(1)
    OUT.write_text(json.dumps(ZH, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(ZH)} translations to {OUT}")

if __name__ == "__main__":
    main()
