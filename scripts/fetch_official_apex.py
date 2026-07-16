#!/usr/bin/env python3
"""Fetch Beyond the Apex pages from the official Gran Turismo API."""

from __future__ import annotations

import argparse
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

BASE = "https://www.gran-turismo.com"
USER_AGENT = "Mozilla/5.0 (compatible; beyond-the-apex-cn/1.0)"


def get(url: str) -> bytes:
  req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
  with urllib.request.urlopen(req, timeout=60) as resp:
    return resp.read()


def fetch_menu(locale: str) -> list:
  raw = get(f"{BASE}/{locale}/gt7/api/apex/")
  return json.loads(raw.decode("utf-8"))


def fetch_page(locale: str, path: str) -> str:
  q = urllib.parse.urlencode({"u": path})
  return get(f"{BASE}/{locale}/gt7/api/apex/?{q}").decode("utf-8")


def iter_pages(menu: list):
  for chapter in menu:
    for section in chapter.get("children", []):
      for page in section.get("grandChildren", []):
        yield chapter, section, page


def main() -> None:
  parser = argparse.ArgumentParser()
  parser.add_argument("--locale", default="jp", choices=["jp", "us", "gb"])
  parser.add_argument("--out", type=Path, default=Path("scripts/official-apex"))
  parser.add_argument("--path", help="Fetch a single page path, e.g. /engineering_for_automotive/preface/01")
  parser.add_argument("--delay", type=float, default=0.2)
  args = parser.parse_args()

  out: Path = args.out / args.locale
  out.mkdir(parents=True, exist_ok=True)

  if args.path:
    html = fetch_page(args.locale, args.path)
    rel = args.path.strip("/").replace("/", "__") + ".html"
    (out / rel).write_text(html, encoding="utf-8")
    print(f"Wrote {out / rel}")
    return

  menu = fetch_menu(args.locale)
  (out / "menu.json").write_text(
    json.dumps(menu, ensure_ascii=False, indent=2), encoding="utf-8"
  )
  print(f"Wrote {out / 'menu.json'}")

  for chapter, section, page in iter_pages(menu):
    html = fetch_page(args.locale, page["url"])
    rel = page["url"].strip("/").replace("/", "__") + ".html"
    (out / rel).write_text(html, encoding="utf-8")
    print(f"{chapter['title']} / {section['title']} / {page['title']} -> {rel}")
    time.sleep(args.delay)


if __name__ == "__main__":
  main()
