#!/usr/bin/env python3
"""Inject nameZh fields into filePaths.tsx from page h1 titles + chapter/section map."""

from __future__ import annotations

import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FILE_PATHS = ROOT / "src/components/filePaths.tsx"
PAGES = ROOT / "src/components/beyond the apex"

CHAPTER_ZH = {
    "engineering_for_automotive": "第1章：汽车工程学",
    "review_mechanism": "第2章：机制回顾",
    "review_tuning_and_settings": "第3章：调校与设置回顾",
    "how_to_get_started": "第4章：Gran Turismo 入门",
    "photographing_cars": "第5章：拍摄汽车",
}

SECTION_ZH = {
    "engineering_for_automotive/preface": "序言",
    "engineering_for_automotive/force_energy_vibration": "力、能量与振动",
    "engineering_for_automotive/vehicle_performance": "车辆运动性能",
    "engineering_for_automotive/the_efficient_engine": "发动机与效率",
    "engineering_for_automotive/aerodynamics": "空气动力学",
    "engineering_for_automotive/computational_fluid_dynamics": "计算流体力学",
    "review_mechanism/packaging": "车辆基本要素",
    "review_mechanism/engine": "汽车的心脏",
    "review_mechanism/drivetrain": "将动力转化为速度",
    "review_mechanism/body": "支撑一切的骨架",
    "review_mechanism/brakes": "降低车速的热交换器",
    "review_mechanism/suspensions": "控制车身运动的缓冲装置",
    "review_mechanism/tires": "车与路面的接点",
    "review_mechanism/wheels": "铝制轮圈",
    "review_mechanism/aerodynamics": "空气对车身的作用",
    "review_tuning_and_settings/engine": "提升发动机性能",
    "review_tuning_and_settings/drive_system": "传动系统调校",
    "review_tuning_and_settings/boby": "车身塑形",
    "review_tuning_and_settings/stopping_power": "增强制动能力",
    "review_tuning_and_settings/footwork": "强化悬架系统",
    "review_tuning_and_settings/tires": "升级高性能轮胎",
    "review_tuning_and_settings/aerodynamics": "提升空气动力学",
    "review_tuning_and_settings/vehicle_qualities": "按车辆特性调整设置",
    "review_tuning_and_settings/basic_settings": "各部位基本设置",
    "review_tuning_and_settings/advanced_settings": "特定状况下的设置",
    "how_to_get_started/advice_for_beginners": "给新手的建议",
    "how_to_get_started/using_driver_assistance": "善用驾驶辅助",
    "how_to_get_started/in_game": "游戏内设置",
    "how_to_get_started/race_etiquette": "比赛礼仪",
    "photographing_cars/scapes": "景观",
}

H1_RE = re.compile(
    r'<h1[^>]*>.*?<span lang="en">(.*?)</span>.*?<span lang="zh">(.*?)</span>',
    re.S,
)
NUM_PREFIX_RE = re.compile(r"^(\d+-\d+\s*:\s*)")
NAME_RE = re.compile(r'^(\s*)name: "((?:\\.|[^"])*)",\s*$')
PATH_RE = re.compile(r'^\s*path: "([^"]+)",\s*$')
COMP_RE = re.compile(r"<([A-Z][A-Za-z0-9]*)\s*/>")


def load_page_zh_by_component() -> dict[str, str]:
    out: dict[str, str] = {}
    for path in PAGES.glob("*.tsx"):
        text = path.read_text(encoding="utf-8")
        match = H1_RE.search(text)
        if not match:
            continue
        out[path.stem] = html.unescape(match.group(2).strip())
    return out


def with_num_prefix(en_name: str, zh_title: str) -> str:
    prefix = NUM_PREFIX_RE.match(en_name)
    if prefix and not NUM_PREFIX_RE.match(zh_title):
        return f"{prefix.group(1)}{zh_title}"
    return zh_title


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def main() -> None:
    page_zh = load_page_zh_by_component()
    source = FILE_PATHS.read_text(encoding="utf-8")

    source = re.sub(r"\n\s*nameZh: \"(?:\\.|[^\"])*\",", "", source)

    if "nameZh: string" not in source:
        source = source.replace(
            "export interface TocPage {\n  name: string;\n",
            "export interface TocPage {\n  name: string;\n  nameZh: string;\n",
        )
        source = source.replace(
            "export interface TocSection {\n  name: string;\n",
            "export interface TocSection {\n  name: string;\n  nameZh: string;\n",
        )
        source = source.replace(
            "export interface TocChapter {\n  name: string;\n",
            "export interface TocChapter {\n  name: string;\n  nameZh: string;\n",
        )

    lines = source.splitlines(keepends=True)
    out: list[str] = []
    i = 0
    pages_injected = 0
    sections_injected = 0
    chapters_injected = 0

    while i < len(lines):
        line = lines[i]
        m_name = NAME_RE.match(line)
        if m_name and i + 1 < len(lines) and PATH_RE.match(lines[i + 1]):
            indent = m_name.group(1)
            en_name = m_name.group(2).replace('\\"', '"')
            path = PATH_RE.match(lines[i + 1]).group(1)
            window = "".join(lines[i : i + 10])

            out.append(line)

            if re.search(r"\n\s*sections:\s*\[", window):
                zh = CHAPTER_ZH[path]
                out.append(f'{indent}nameZh: "{esc(zh)}",\n')
                chapters_injected += 1
            elif re.search(r"\n\s*pages:\s*\[", window):
                zh = SECTION_ZH[path]
                out.append(f'{indent}nameZh: "{esc(zh)}",\n')
                sections_injected += 1
            elif "routePath:" in window or "component:" in window:
                comp = None
                for j in range(i, min(i + 8, len(lines))):
                    cm = COMP_RE.search(lines[j])
                    if cm:
                        comp = cm.group(1)
                        break
                zh_title = page_zh.get(comp or "", en_name)
                zh = with_num_prefix(en_name, zh_title)
                out.append(f'{indent}nameZh: "{esc(zh)}",\n')
                pages_injected += 1
            else:
                raise RuntimeError(f"Unrecognized TOC entry name={en_name!r} path={path!r}")

            i += 1
            continue

        out.append(line)
        i += 1

    text = "".join(out)
    FILE_PATHS.write_text(text, encoding="utf-8")
    print(
        f"Injected nameZh — chapters={chapters_injected}, "
        f"sections={sections_injected}, pages={pages_injected}"
    )


if __name__ == "__main__":
    main()
