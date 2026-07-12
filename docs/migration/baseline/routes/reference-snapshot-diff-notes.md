# Reference Snapshot Diff Notes (Gatsby vs Astro)

Date: 2026-07-12
Scope: `/reference/` docs family pilot

## Route Coverage

Migrated routes:

- `/reference/`
- `/reference/clientserver/`
- `/reference/electrical-spec/`
- `/reference/glossary/`
- `/reference/protocol/`
- `/reference/service-specification/`
- `/reference/single-wire-serial/`

Build output also includes starter route `/reference/example/`.

## Notable Differences

1. MDX custom React components used in Gatsby (`RandomGenerator`, `SpecificationUnitList`) were replaced with static explanatory text in Astro reference pages for compatibility.
2. `jdbus.drawio.svg` is served as a static public asset (`/reference/jdbus.drawio.svg`) to avoid Astro image metadata processing errors.
3. External/out-of-scope links (for sections not yet migrated) remain as absolute paths and are intentionally not part of this pilot parity check.

## Validation Artifacts

- Link check: `docs/migration/baseline/routes/reference-link-check.md`
- SEO check: `docs/migration/baseline/seo/reference-seo-check.md`
- Build verification: local `npm run build` in `astro-starlight/`
