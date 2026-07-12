# Error Baseline

Date Range: 2026-07-11 synthetic capture
Environment: production (jacdac.github.io)
Source (analytics/logging): unavailable

Status: completed with synthetic fallback methodology (no analytics available).

Methodology:

- 404 proxy: crawl all static baseline routes from `routes.snapshot.json` and record non-200 status codes.
- Client error proxy: use Lighthouse runtime audits (`errors-in-console` and related checks) on representative sample routes.

Limitations:

- No real production traffic counts by path.
- No real client error frequency or user impact distribution.
- Treat this as minimum viable baseline for migration diffing.

## 404 Baseline

| Path | Count | Notes |
| --- | --- | --- |
| See `http-status-baseline.md` | synthetic | 147 static routes checked; non-200 count captured |

## Client JS Error Baseline

| Error Signature | Count | Affected Routes | Notes |
| --- | --- | --- | --- |
| See `client-error-proxy.md` | synthetic | representative route sample | Lighthouse audit-derived proxy |
