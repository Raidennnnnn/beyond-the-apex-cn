#!/usr/bin/env python3
"""Rewrite bilingual heading text into lang-tagged spans for language modes."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "src/components/beyond the apex"

CJK_RE = re.compile(r"[\u4e00-\u9fff]")
HEADING_RE = re.compile(r"(<(h[123])(\b[^>]*)>)(.*?)(</\2>)", re.DOTALL)
CLASS_RE = re.compile(r'\bclassName="([^"]*)"')


def split_bilingual(text: str) -> tuple[str, str] | None:
    """Split on the rightmost ' / ' with CJK on the right and none on the left.

    Handles ZH titles that begin with Latin (e.g. "CFD的世界", "RANS（…）")
    and EN titles that contain an internal slash (e.g. "Aerodynamics / Gear Ratios").
    """
    candidates: list[tuple[str, str]] = []
    for match in re.finditer(r" / ", text):
        left = text[: match.start()]
        right = text[match.end() :]
        if CJK_RE.search(right) and not CJK_RE.search(left):
            candidates.append((left, right))
    return candidates[-1] if candidates else None


def ensure_bilingual_title_class(attrs: str) -> str:
    class_match = CLASS_RE.search(attrs)
    if class_match:
        classes = class_match.group(1).split()
        if "bilingual-title" not in classes:
            classes.append("bilingual-title")
            attrs = (
                attrs[: class_match.start(1)]
                + " ".join(classes)
                + attrs[class_match.end(1) :]
            )
        return attrs
    return f'{attrs} className="bilingual-title"' if attrs else ' className="bilingual-title"'


def wrap_heading_inner(inner: str) -> str | None:
    if 'lang="en"' in inner or 'lang="zh"' in inner:
        return None

    core = " ".join(inner.split())
    if not core:
        return None

    parts = split_bilingual(core)
    if not parts:
        return None

    en, zh = parts
    return (
        f'<span lang="en">{en}</span>'
        f'<span className="bilingual-sep"> / </span>'
        f'<span lang="zh">{zh}</span>'
    )


def transform_file(path: Path) -> bool:
    source = path.read_text(encoding="utf-8")
    changed = False

    def repl(match: re.Match[str]) -> str:
        nonlocal changed
        _open, tag, attrs, inner, close_tag = match.groups()
        wrapped = wrap_heading_inner(inner)
        if wrapped is None:
            return match.group(0)
        new_attrs = ensure_bilingual_title_class(attrs)
        changed = True
        return f"<{tag}{new_attrs}>{wrapped}{close_tag}"

    updated = HEADING_RE.sub(repl, source)
    if changed:
        path.write_text(updated, encoding="utf-8")
    return changed


def main() -> None:
    files = sorted(PAGES.glob("*.tsx"))
    updated_files = [path.name for path in files if transform_file(path)]
    print(f"Updated {len(updated_files)} / {len(files)} files")
    for name in updated_files:
        print(f"  - {name}")


if __name__ == "__main__":
    main()
