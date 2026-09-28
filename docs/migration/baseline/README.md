# Baseline Artifacts (Issue #33)

This directory contains reproducible baseline artifacts for Gatsby behavior before the Astro/Starlight migration.

## Structure

- `routes/`: route snapshots and redirect inventory
- `seo/`: metadata snapshots for sampled routes
- `perf/`: Lighthouse and performance snapshots
- `search/`: baseline queries and result snapshots
- `errors/`: pre-migration 404 and client error baselines

## Quick Start

1. Generate route inventory:

```bash
node docs/migration/baseline/generate-routes.mjs
```

2. Fill search baseline results using the starter query file in `search/`.
3. Capture SEO and perf snapshots for the minimum route sample set from `migration.md`.
4. Capture 404/client error baseline from analytics/monitoring exports.

## Current Status

- Route and redirect baseline: seeded via script
- Search query baseline: starter query file created
- SEO/perf/errors: template placeholders created; capture pending
