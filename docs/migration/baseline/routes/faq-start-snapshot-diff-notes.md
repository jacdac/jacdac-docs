# FAQ/Start Snapshot Diff Notes (Gatsby vs Astro)

Date: 2026-07-12
Scope: `/faq/` and `/start/` docs families

## Migrated Routes

FAQ:

- `/faq/`
- `/faq/device-development/`
- `/faq/errors/`
- `/faq/errors/microbit/invalid-memory/`
- `/faq/errors/microbit/jacdac-missing/`
- `/faq/errors/microbit/unknown-hardware-revision/`
- `/faq/errors/microbit/v1-not-supported/`
- `/faq/errors/transport/device-locked/`
- `/faq/getting-started/`
- `/faq/history-of-jacdac/`
- `/faq/led-status/`

Start:

- `/start/`
- `/start/brains/`
- `/start/edgeconnector/`
- `/start/jacdaptors/`
- `/start/modules/`

## Notable Differences

1. Gatsby-specific MDX components were replaced with static markdown content:
   - `FaqPageList` -> explicit FAQ links
   - `ErrorList` -> explicit error links
   - `DeviceImageList` -> representative device link lists
   - `Video` -> plain instructional text
2. This keeps pages renderable in Starlight without bringing over React component runtime from Gatsby.
3. Links to out-of-scope sections (for example `/services`, `/devices`, `/dashboard`) are preserved but not part of this wave's parity checks.

## Validation Artifacts

- Build output includes all FAQ and Start routes listed above.
- Link check: `docs/migration/baseline/routes/faq-start-link-check.md` (0 issues)
- SEO sample: `docs/migration/baseline/seo/faq-start-seo-check.md`
