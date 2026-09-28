# Sprint 1 Issue Pack (Gatsby -> Astro/Starlight)

Use this file to copy/paste issues into GitHub. Each issue includes scope, acceptance criteria, dependencies, and deliverables.

## Issue 1: Stage 0 Baseline Capture

Title:
`migration(stage-0): capture baseline for routes, SEO, performance, and search`

Labels:
- migration
- stage-0
- platform

Owner:
- platform

Description:
Capture pre-migration baseline artifacts so all Astro changes can be evaluated against a known-good Gatsby baseline.

Scope:
- Route snapshot (including generated families and redirects)
- SEO metadata snapshot for representative routes
- Lighthouse sample report
- Search baseline query results
- Error baseline (404 + client JS errors)

Acceptance Criteria:
- Baseline artifacts exist under `docs/migration/baseline/`
- Minimum route sample set from `migration.md` is covered
- Search baseline includes all starter queries from `migration.md`
- A PR includes the baseline summary template completed

Deliverables:
- `docs/migration/baseline/routes/*`
- `docs/migration/baseline/seo/*`
- `docs/migration/baseline/perf/*`
- `docs/migration/baseline/search/*`
- `docs/migration/baseline/errors/*`

Dependencies:
- None

Out of Scope:
- Astro implementation changes

---

## Issue 2: Astro/Starlight Scaffold + GH Pages Base Path

Title:
`migration(stage-1): bootstrap astro starlight with /jacdac-docs base path and preview CI`

Labels:
- migration
- stage-1
- platform

Owner:
- platform

Description:
Create Astro/Starlight scaffold in-repo with GitHub Pages-compatible base path behavior and preview build in CI.

Scope:
- Add Astro/Starlight scaffold
- Configure site/base for `/jacdac-docs`
- Add preview CI workflow
- Add minimal navigation/layout

Acceptance Criteria:
- `astro build` succeeds in CI
- Preview deploy serves pages with correct `/jacdac-docs` path behavior
- Internal links and static assets resolve under prefixed path
- Reviewer checklist in `migration.md` passes for route/base-path integrity

Deliverables:
- Astro/Starlight config and initial content structure
- CI workflow for preview build/deploy
- Notes in PR using baseline summary template

Dependencies:
- Prefer baseline availability from Issue 1

Out of Scope:
- Bulk docs migration
- Generated services/devices migration

---

## Issue 3: Migrate /reference Docs Family

Title:
`migration(stage-2): migrate reference docs family to starlight`

Labels:
- migration
- stage-2
- docs

Owner:
- docs

Description:
Migrate `/reference/` and all child pages as the first docs-family pilot to validate MDX behavior, sidebar/nav, and link integrity.

Scope:
- `/reference/` index page
- `/reference/**` leaf pages
- Frontmatter and heading/link behavior parity

Acceptance Criteria:
- All `/reference/**` routes render in Astro
- No broken internal links in reference family
- SEO metadata parity for sampled pages (title/description/canonical)
- Reviewer checklist content/rendering parity items pass

Deliverables:
- Migrated reference pages in Astro content location
- Link-check output for reference pages
- Snapshot diff notes vs Gatsby baseline

Dependencies:
- Issue 2 complete
- Baseline from Issue 1 available

Out of Scope:
- Non-reference docs families

---

## Issue 4: Services Generation Pipeline + 0x Redirects

Title:
`migration(stage-3): implement services page generation and 0x redirects in astro`

Labels:
- migration
- stage-3
- spec
- platform

Owner:
- spec

Description:
Port services generation logic from Gatsby node hooks to Astro build-time generation, including legacy class-ID redirects.

Scope:
- Generate `/services/{shortId}/`
- Generate `/services/{shortId}/playground/` (if retained in Sprint 1, otherwise note deferred)
- Implement `/services/0x{classId} -> /services/{shortId}/` redirects
- Validate service JSON dependencies consumed by pages

Acceptance Criteria:
- Sample matrix of generated service routes matches Gatsby baseline output
- 0x redirects work for representative class identifiers
- Route parity evidence added to PR
- No critical regressions in service page metadata

Deliverables:
- Astro generation scripts/pages for services
- Redirect map/config for service 0x routes
- Parity validation notes against baseline

Dependencies:
- Issue 2 complete
- Baseline from Issue 1 available

Out of Scope:
- Devices generation pipeline

---

## Issue 5: Tools Pilot - /tools/console

Title:
`migration(stage-5-pilot): migrate tools/console using split react app approach`

Labels:
- migration
- stage-5
- app

Owner:
- app

Description:
Implement the first interactive tool migration pilot using the selected architecture for heavy tool routes (split React app).

Scope:
- `/tools/console/` route
- Base path compatibility and asset loading
- Runtime connection smoke path

Acceptance Criteria:
- `/tools/console/` route loads under `/jacdac-docs`
- Core console flow works in manual smoke test
- No broken deep links/assets from tool page
- Reviewer checklist interactive-tool and route-integrity sections pass

Deliverables:
- Migrated console route wiring
- Smoke test notes and known gaps

Dependencies:
- Issue 2 complete
- Baseline from Issue 1 available

Out of Scope:
- Other tool routes

---

## Issue 6: Utility Parity - 404 and version.json

Title:
`migration(stage-1/3): preserve utility behavior for 404 and version metadata`

Labels:
- migration
- utility
- platform

Owner:
- platform

Description:
Ensure essential utility outputs remain compatible during migration.

Scope:
- `/404/` page behavior parity
- `/version.json` output parity (if retained)

Acceptance Criteria:
- 404 route renders expected fallback UI and links
- `version.json` is emitted with expected fields and consumed behavior remains valid
- Reviewer checklist utility and route-integrity checks pass

Deliverables:
- Utility route implementation and verification notes

Dependencies:
- Issue 2 complete

Out of Scope:
- Worker artifact and full utility suite

---

## Suggested Milestone

Milestone name:
`Sprint 1 - Migration Foundations`

Include issues:
- Issue 1 through Issue 6 above

Definition of milestone done:
- Baseline exists and is reviewed
- Astro scaffold is live in preview
- `/reference/**` migrated
- Services generation + 0x redirects work for validated sample
- `/tools/console/` pilot works
- Utility parity for 404 and version metadata is confirmed
