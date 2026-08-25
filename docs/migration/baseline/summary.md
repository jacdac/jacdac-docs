# Baseline Summary (Issue #33)

## Scope

- Date: 2026-07-11
- Commit/branch: local working branch (pre-migration baseline)
- Environment: production Gatsby site (`https://jacdac.github.io/jacdac-docs`)
- Reviewer(s): automated capture scripts + manual verification

## Route Coverage

- Docs routes sampled: yes (`/reference/`, `/reference/protocol/`)
- Generated service route sampled: yes (`/services/accelerometer/`)
- Generated device route sampled: yes (`/devices/microsoft-research/`)
- Tool route sampled: yes (`/tools/console/`)
- Redirect families inventoried: yes (`/services/0x*`, `/devices/0x*`, vanity code redirects)

Artifacts:

- `docs/migration/baseline/routes/routes.snapshot.json`
- `docs/migration/baseline/routes/routes.snapshot.md`

## SEO Snapshot

Status: partial baseline captured.

Artifacts:

- `docs/migration/baseline/seo/snapshot.md`
- `docs/migration/baseline/seo/capture-seo.sh`

Notes:

- OG metadata and descriptions captured for sampled routes.
- Title/canonical extraction from app-shell routes is incomplete with current script and may require browser-context extraction for full parity.

## Performance Snapshot

Artifacts:

- `docs/migration/baseline/perf/reference.report.{json,html}`
- `docs/migration/baseline/perf/service-accelerometer.report.{json,html}`
- `docs/migration/baseline/perf/device-microsoft-research.report.{json,html}`
- `docs/migration/baseline/perf/tools-console.report.{json,html}`
- `docs/migration/baseline/perf/lighthouse.template.md`

Lighthouse summary:

- `/reference/`: perf 64, a11y 100, best-practices 96, seo 91
- `/services/accelerometer/`: perf 61, a11y 98, best-practices 100, seo 100
- `/devices/microsoft-research/`: perf 61, a11y 98, best-practices 96, seo 100
- `/tools/console/`: perf 64, a11y 100, best-practices 100, seo 100

## Search Baseline

Artifacts:

- `docs/migration/baseline/search/queries.txt`
- `docs/migration/baseline/search/results.md`
- `docs/migration/baseline/search/generate-local-search-baseline.mjs`

Status:

- Completed as local corpus heuristic baseline.
- Runtime Gatsby search-index baseline capture remains optional follow-up if strict runtime parity is required.

## Error Baseline

Artifact:

- `docs/migration/baseline/errors/errors.template.md`
- `docs/migration/baseline/errors/http-status-baseline.json`
- `docs/migration/baseline/errors/http-status-baseline.md`
- `docs/migration/baseline/errors/client-error-proxy.json`
- `docs/migration/baseline/errors/client-error-proxy.md`

Status: completed with synthetic fallback (no analytics available).

Synthetic results:

- HTTP status crawl across 147 static routes: non-200 count = 0
- Client error proxy from Lighthouse audits across 4 representative routes generated and recorded

## Decision

- Baseline complete: yes (with documented synthetic error baseline limitations)
- Migration can proceed for Stage 1/2 implementation work.

## Follow-Up Actions

1. Optionally replace synthetic error baseline with real telemetry if analytics becomes available later.
2. Optionally improve SEO script for app-shell title/canonical extraction using browser-context evaluation.
