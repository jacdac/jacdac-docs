# Astro Starlight Preview (jacdac-docs)

This folder contains the Astro Starlight scaffold used for the Gatsby-to-Astro migration pilot.

## Configuration

- `site`: `https://jacdac.github.io`
- `base`: `/jacdac-docs`

These settings are required for GitHub Pages parity with the current docs deployment path.

## Commands

Run commands from this folder:

| Command | Action |
| :-- | :-- |
| `npm ci` | Install dependencies |
| `npm run dev -- --host 0.0.0.0 --port 4321` | Start local development server |
| `npm run build` | Build production output to `dist/` |
| `npm run preview` | Preview built output locally |

## CI

The root workflow `.github/workflows/astro-preview.yml` builds this folder on pull requests and uploads the generated `dist/` as an artifact (`astro-starlight-dist`).

## Scope

This scaffold is for migration validation only. It does not yet include migrated docs sections beyond starter content.
