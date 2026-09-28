# DDK Snapshot Diff Notes (Gatsby vs Astro)

Date: 2026-07-12
Scope: /ddk/ docs family

## Migrated Routes

- /ddk/
- /ddk/design/
- /ddk/design/cables/
- /ddk/design/components/
- /ddk/design/ec30/
- /ddk/design/electrical/
- /ddk/design/electro-mechanical/
- /ddk/design/manufacturing/
- /ddk/design/mechanical/
- /ddk/device-definition/
- /ddk/firmware/
- /ddk/firmware/arm-tooling/
- /ddk/firmware/github-repos/
- /ddk/firmware/jac-connect/
- /ddk/firmware/padauk-tooling/
- /ddk/microbit/
- /ddk/microbit/pr-template/
- /ddk/microbit/software-only-accessory/
- /ddk/raspberry-pi/
- /ddk/services/
- /ddk/services/creating/

## Notable Differences

1. Gatsby-specific MDX component usages were replaced with static markdown content where required for Starlight compatibility.
2. Internal links under /ddk/ were validated against built output.
3. Cross-family links are preserved and validated in later migration waves.

## Validation Artifacts

- Link check: docs/migration/baseline/routes/ddk-link-check.md
- Link check JSON: docs/migration/baseline/routes/ddk-link-check.json
- SEO sample: docs/migration/baseline/seo/ddk-seo-check.md
