# Performance Baseline (Lighthouse)

Date: 2026-07-11
Environment: production (jacdac.github.io)
Reviewer: automated capture via npx lighthouse

Command profile:

- `npx --yes lighthouse <url> --quiet --no-enable-error-reporting --chrome-flags='--headless' --output=json --output=html`

| Route | Performance | Accessibility | Best Practices | SEO | Notes |
| --- | --- | --- | --- | --- | --- |
| /reference/ | 64 | 100 | 96 | 91 | Artifacts: `reference.report.json`, `reference.report.html` |
| /services/accelerometer/ | 61 | 98 | 100 | 100 | Artifacts: `service-accelerometer.report.json`, `service-accelerometer.report.html` |
| /devices/microsoft-research/ | 61 | 98 | 96 | 100 | Artifacts: `device-microsoft-research.report.json`, `device-microsoft-research.report.html` |
| /tools/console/ | 64 | 100 | 100 | 100 | Artifacts: `tools-console.report.json`, `tools-console.report.html` |
