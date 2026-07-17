# Beyond the Apex CN

Unofficial **Chinese (中文) fan translation** of [Gran Turismo 7 — Beyond the Apex](https://www.gran-turismo.com/us/gt7/apex/), presented alongside the official English text.

Live site: https://Raidennnnnn.github.io/beyond-the-apex-cn

## Relation to the official EN and JP versions

Polyphony Digital publishes *Beyond the Apex* on [gran-turismo.com](https://www.gran-turismo.com/) in several locales. This project is **not** one of those official sites — it is a separate, community-made reader for Chinese-speaking players.

| Version | Role in this project | Official URL |
|--------|----------------------|--------------|
| **English (US)** | Primary source text shown in the app (`lang="en"` paragraphs, TOC labels, figures). The page structure and routing mirror the US site. | https://www.gran-turismo.com/us/gt7/apex/ |
| **Japanese** | Reference locale for translation. The magazine originated in Japanese; where EN and JP wording diverge, Chinese copy is checked against JP sense as well as EN meaning. | https://www.gran-turismo.com/jp/gt7/apex/ |
| **Chinese (this repo)** | Fan translation only. Gran Turismo does **not** ship an official Chinese edition of Beyond the Apex. | https://Raidennnnnn.github.io/beyond-the-apex-cn |

**What you see on the live site**

- **EN + 中文** — side-by-side official English and fan Chinese (default layout: English first).
- **English** — same English content as the official US guide, in this offline-friendly UI.
- **中文** — Chinese translation only.

**Offline reference cache**

Snapshots of the official EN (`scripts/official-apex/us/`) and JP (`scripts/official-apex/jp/`) pages are kept in-repo for translation and review. Refresh them with:

```bash
python scripts/fetch_official_apex.py --locale us
python scripts/fetch_official_apex.py --locale jp
```

**Latest cached official reference:** 2026-07-16

## Disclaimer

This project is a **translation only**. It is **not affiliated with, endorsed by, or connected to** Polyphony Digital, Sony Interactive Entertainment, or Gran Turismo.

- **No profit** — This site is free, non-commercial, and not monetized. No ads, no donations, no paid access.
- **AI-assisted** — Content and site code were **built and generated with AI**, then reviewed for structure and presentation. Translations may contain errors; the official text always takes priority.
- **Official source** — All content is derived from the official Beyond the Apex documentation:  
  https://www.gran-turismo.com/us/gt7/apex/

If you are the rights holder and want this removed or changed, open an issue or contact the maintainer.

## Dev

```bash
pnpm install
pnpm dev
```

```bash
pnpm build
pnpm deploy
```
