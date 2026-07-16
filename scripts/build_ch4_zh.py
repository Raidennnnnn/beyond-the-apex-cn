#!/usr/bin/env python3
"""Build ch4_zh.json from inline Simplified Chinese translations."""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CH4_JSON = ROOT / "scripts/official-apex/extracted/ch4.json"
OUT = ROOT / "scripts/official-apex/extracted/ch4_zh.json"

from ch4_translations import ZH


def main() -> None:
    ch4 = json.loads(CH4_JSON.read_text(encoding="utf-8"))
    missing = []
    for page_key, page in ch4.items():
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
