# Gatsby to Astro Starlight Migration Plan

## Summary

This repository is more than a static documentation site. It combines:

- Content-heavy docs (MDX pages)
- Programmatic page generation for services and devices
- Dynamic tool pages implemented in React/TSX
- Custom build outputs (JSON, image variants, worker files, redirects, compliance CSVs)

Because of that, this migration should be staged. The safest path is to move pure docs to Astro Starlight first, then migrate generated sections, and finally handle interactive tools separately.

## Goals

- Replace Gatsby for documentation delivery with Astro Starlight.
- Preserve URL stability and SEO where possible.
- Keep existing docs authoring flow productive.
- Avoid regressions in generated content and key tools.

## Non-Goals (Initial)

- Full one-shot parity for every interactive tool page in the first cut.
- Immediate removal of all legacy Gatsby code on day one.

## Major Migration Issues

1. Gatsby GraphQL dependency
- Many components/pages use Gatsby data hooks (`graphql`, `useStaticQuery`).
- Astro/Starlight does not provide Gatsby's GraphQL runtime.
- Required action: replace queries with Astro content collections, direct imports, or generated data artifacts.

2. Programmatic route generation and redirects
- Gatsby node hooks generate service/device pages and many redirects.
- Required action: rebuild this logic with Astro build scripts and redirect configuration.

3. Mixed docs and app responsibilities
- The site includes many interactive TSX tool pages.
- Starlight is ideal for docs but not a drop-in replacement for all app behavior.
- Required action: decide per tool: Astro island, separate React app, or deferred migration.

4. Search implementation
- Current search uses an elasticlunr index generated in Gatsby.
- Required action: choose Starlight search, custom Lunr pipeline, or external search service.

5. Asset and image pipeline
- Gatsby plugins + custom Sharp scripts create multiple image derivatives.
- Required action: port image generation to standalone build scripts and Astro image handling.

6. Base path and GitHub Pages compatibility
- Existing site assumes `/jacdac-docs` prefix behavior.
- Required action: configure Astro `base` and verify all absolute/prefixed asset links.

7. Offline and update behavior
- Current app uses service worker support and custom update/version checks.
- Required action: explicitly decide whether to preserve PWA behavior, and how.

8. Metadata and head tags
- Gatsby metadata model and head APIs are used across pages.
- Required action: map to Astro layout/frontmatter conventions.

9. MDX/remark plugin parity
- Existing MDX plugins affect links, headers, and media behavior.
- Required action: test and re-implement required transformations in Astro.

10. CI and runtime baseline
- Current workflow uses older Node versions.
- Required action: uplift CI/build tooling to supported Astro/Starlight versions.

## Staged Migration Plan

### Stage 0: Discovery and Guardrails

Scope:
- Freeze migration scope and success criteria.
- Inventory routes and classify them by type.
- Capture current behavior baseline.

Deliverables:
- Route inventory with owner and migration destination.
- Baseline checks: URL list, metadata snapshots, search behavior, Lighthouse sample.
- Risk register and fallback plan.

Exit Criteria:
- Every route assigned to one of: docs-now, generated-now, tools-later, keep-legacy.

### Stage 1: Astro/Starlight Bootstrap

Scope:
- Add Astro/Starlight project skeleton in-repo.
- Configure base path, static assets, and deploy preview.
- Set up content collections and shared layout primitives.

Deliverables:
- Buildable Astro site with basic nav/sidebar.
- CI job for Astro preview build.
- Initial redirects and canonical URL strategy.

Exit Criteria:
- Astro preview deploys successfully and serves under `/jacdac-docs` compatible paths.

### Stage 2: Pure Docs Content Migration

Scope:
- Migrate static MD/MDX docs with minimal behavior changes.
- Port frontmatter conventions and heading/link behavior.

Deliverables:
- Core docs sections migrated (reference, faq, start, ddk, clients docs subset).
- Content lint/validation checks.

Exit Criteria:
- Majority of static docs pages render correctly with expected slugs and internal links.

### Stage 3: Generated Content and Redirect Engine

Scope:
- Port service/device generation pipeline.
- Recreate JSON outputs and redirect maps.

Deliverables:
- Build scripts for service/device pages and JSON artifacts.
- Redirects for service IDs, product IDs, QR vanity routes, and legacy moved pages.

Exit Criteria:
- Generated pages and redirects match legacy behavior for sampled and high-traffic routes.

### Stage 4: Search, SEO, and Metadata Parity

Scope:
- Replace Gatsby search index pipeline.
- Rebuild metadata, sitemap, robots, and canonical tags.

Deliverables:
- Search experience selected and implemented.
- SEO parity checks and sitemap output.

Exit Criteria:
- Search quality and SEO checks pass agreed thresholds.

### Stage 5: Interactive Tools Strategy Execution

Scope:
- Migrate or split tool pages by complexity.
- Preserve mission-critical tooling first.

Suggested categorization:
- Tier A (critical): keep available at all times, migrate first.
- Tier B (important): migrate in batches.
- Tier C (low usage): defer or archive.

Implementation options:
- Astro islands for lightweight interactivity.
- Separate React app mounted under `/tools` for heavy apps.
- Temporary reverse-proxy or side-by-side hosting during transition.

Exit Criteria:
- Tier A tools have no functional regressions; Tier B/C have explicit plan and owner.

### Stage 6: Cutover and Decommission

Scope:
- Route traffic to Astro build.
- Keep safety rollback for one release cycle.
- Remove obsolete Gatsby-only pieces after confidence window.

Deliverables:
- Production cutover checklist complete.
- Rollback procedure documented and tested.
- Legacy code removal PR(s).

Exit Criteria:
- Stable production period completed with no critical regressions.

## Cross-Cutting Workstreams

1. Compatibility layer
- Small helper library to replace Gatsby-specific APIs (`withPrefix`, `navigate`, and data helpers).

2. Testing and verification
- Route integrity tests (including redirects)
- Visual smoke tests for key docs pages
- Tool-level functional smoke tests

3. Observability
- Track 404s, client errors, search usage, and top route performance before/after cutover.

4. Documentation and contributor experience
- Update contributor docs for Astro workflow.
- Keep existing content authoring ergonomics as close as possible.

## Suggested Timeline (High Level)

- Stage 0-1: 1-2 weeks
- Stage 2-3: 2-4 weeks
- Stage 4: 1 week
- Stage 5: 2-6+ weeks (depends on tool complexity)
- Stage 6: 1 week including stabilization window

Total expected range: ~7-14 weeks depending on scope of tool migration.

## Risks and Mitigations

Risk: Redirect regressions and broken deep links
- Mitigation: Generate and validate redirect map automatically; monitor 404 logs after cutover.

Risk: Tool feature regressions
- Mitigation: Tiered migration, side-by-side hosting, and explicit acceptance tests for critical tools.

Risk: Search relevance drop
- Mitigation: Evaluate search options early and run relevance checks on known queries.

Risk: Scope creep from full parity demands
- Mitigation: Lock stage exit criteria and non-goals; prioritize docs and critical tooling.

## Immediate Next Steps

1. Build route inventory and tier all `/tools` pages by business criticality.
2. Stand up Astro/Starlight scaffold with GitHub Pages-compatible base path.
3. Migrate a small pilot section (for example `reference`) to validate MDX and navigation assumptions.
4. Port one generated page family (for example `services`) as a proof of pipeline design.

## Execution Tracker

Status values:

- `not-started`
- `in-progress`
- `blocked`
- `done`

Recommended owners (replace with real names):

- `docs` (content + IA)
- `platform` (build/CI/deploy)
- `app` (interactive tools)
- `spec` (generated services/devices data)

| Workstream | Stage | Owner | Status | Target Date | Dependencies | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Route inventory and tiering | 0 | docs | not-started | TBD | none | Includes all docs, generated routes, tools routes |
| Baseline capture (URL, SEO, perf, search) | 0 | platform | done | TBD | Route inventory | Route, SEO, perf, search, and synthetic no-analytics error baseline captured under `docs/migration/baseline/` |
| Astro/Starlight scaffold | 1 | platform | in-progress | TBD | none | Scaffold created in `astro-starlight/` and preview verified locally |
| Base path + GH Pages deploy parity | 1 | platform | not-started | TBD | Astro scaffold | Must preserve `/jacdac-docs` behavior |
| Content collections and shared layout | 1 | docs | not-started | TBD | Astro scaffold | Define frontmatter schema and nav model |
| Static docs migration pilot (`reference`) | 2 | docs | not-started | TBD | Stage 1 complete | Use as format and navigation proof |
| Bulk docs migration | 2 | docs | not-started | TBD | Pilot complete | Migrate reference/faq/start/ddk/clients content |
| Services generation pipeline port | 3 | spec | not-started | TBD | Stage 1 complete | Rebuild service pages + JSON artifacts |
| Devices generation pipeline port | 3 | spec | not-started | TBD | Stage 1 complete | Rebuild device pages + image derivatives |
| Redirect map migration + validation | 3 | platform | not-started | TBD | Services/devices port | Must include legacy and QR vanity redirects |
| Search implementation selection | 4 | docs | not-started | TBD | Stage 2 baseline | Decide built-in vs custom index |
| SEO/sitemap/robots parity | 4 | platform | not-started | TBD | Stage 2 complete | Validate canonical/meta behavior |
| Tier A tools migration | 5 | app | not-started | TBD | Stages 1-4 | No regressions allowed for critical tools |
| Tier B/C tools plan and execution | 5 | app | not-started | TBD | Tier A progress | Batch migration/defer/archive decisions |
| Cutover rehearsal + rollback test | 6 | platform | not-started | TBD | Stages 2-5 | Dry run before production switch |
| Production cutover and stabilization | 6 | platform | not-started | TBD | Rehearsal complete | Monitor 404s/errors/perf for one cycle |

## Stage 0 Baseline Capture Runbook

This section expands the workstream row:

- Baseline capture (URL, SEO, perf, search)

Use this runbook before any migration code lands on the main branch.

### Baseline Deliverables

| Deliverable | Owner | Status | Output Location | Notes |
| --- | --- | --- | --- | --- |
| Route snapshot (all pages + redirects) | platform | not-started | docs/migration/baseline/routes/ | Include static routes and generated route families |
| Top routes traffic list (last 30-90 days) | platform | not-started | docs/migration/baseline/traffic/ | Use analytics export for prioritization |
| SEO metadata snapshot | docs/platform | not-started | docs/migration/baseline/seo/ | Capture title, description, canonical, og tags |
| Lighthouse sample report | platform | not-started | docs/migration/baseline/perf/ | Capture representative docs and app routes |
| Search relevance checks | docs | not-started | docs/migration/baseline/search/ | Record query set and expected top results |
| Error baseline (404 + JS errors) | platform | not-started | docs/migration/baseline/errors/ | 7-14 day pre-migration baseline |

### Minimum Route Sample Set

Sample at least one route from each class:

1. Docs index: `/reference/`
2. Docs leaf: `/reference/protocol/`
3. Generated service: `/services/<shortId>/` (pick 3 representative values)
4. Generated device: `/devices/<identifier>/` (pick 3 representative values)
5. Tier A tool route: `/tools/console/`
6. Route with redirect: `/services/0x<classId>` and `/devices/0x<productId>`
7. Error page: `/404/`

### Search Baseline Query Set (Starter)

Track top 10 results for each query and flag whether expected docs appear in top 3:

1. jacdac protocol
2. service specification
3. makecode extension
4. packet inspector
5. firmware update
6. device tester
7. edge connector
8. electrical spec
9. register fields
10. cli

### Baseline Exit Criteria

Stage 0 baseline capture is complete only when:

1. All baseline deliverables above are checked in or linked from this file.
2. Tier A and Tier B routes each have at least one measured example in perf and SEO snapshots.
3. Search relevance baseline exists for the full query set.
4. A short baseline summary is added to the migration PR description.

### Baseline Risks to Watch

1. Missing generated routes in the baseline sample set.
2. Measuring only docs pages and skipping interactive tool routes.
3. No redirect validation before migration begins.
4. Capturing one-off local results without reproducible scripts or notes.

### Baseline PR Summary Template

Copy this block into migration/baseline PR descriptions:

```md
## Baseline Summary

### Scope
- Date:
- Commit/branch:
- Environment:
- Reviewer(s):

### Route Coverage
- Docs routes sampled:
- Generated service routes sampled:
- Generated device routes sampled:
- Tools routes sampled:
- Redirect routes validated:

### SEO Snapshot
- Pages checked:
- Title/description parity issues:
- Canonical issues:
- OpenGraph/Twitter issues:

### Performance Snapshot
- Lighthouse pages:
- Largest regressions found:
- Notes on variance (local/network/cache):

### Search Baseline
- Queries tested:
- Queries with expected result in top 3:
- Queries with misses:

### Error Baseline
- 404 baseline window:
- Top 404 routes:
- Client JS error baseline:

### Artifacts
- Route snapshot:
- SEO report:
- Perf report:
- Search report:
- Error report:

### Risk Notes
1.
2.
3.

### Decision
- Baseline complete: yes/no
- Follow-up actions:
	1.
	2.
```

### Optional Scorecard (Quick Compare)

Use this small scorecard to compare legacy Gatsby baseline and migrated Astro output for sampled routes.

| Metric | Gatsby Baseline | Astro Candidate | Status | Notes |
| --- | --- | --- | --- | --- |
| Route availability |  |  |  |  |
| Redirect correctness |  |  |  |  |
| SEO metadata parity |  |  |  |  |
| Lighthouse performance |  |  |  |  |
| Search relevance |  |  |  |  |
| JS/client error rate |  |  |  |  |

## Migration PR Reviewer Checklist

Use this checklist during review for any migration PR (baseline, implementation, or cutover prep).

### 1) Scope and Change Safety

- [ ] PR scope is clearly limited (docs migration, generated routes, tool migration, or infra only).
- [ ] Out-of-scope changes are explicitly called out and justified.
- [ ] Rollback plan is included for risky changes.

### 2) Route and Redirect Integrity

- [ ] All touched routes are listed in PR description.
- [ ] Redirect behavior is documented and validated for changed routes.
- [ ] Base path behavior (`/jacdac-docs`) is verified for links and assets.
- [ ] 404 behavior is unaffected or improved.

### 3) Content and Rendering Parity

- [ ] Page title, description, and canonical metadata are present.
- [ ] Markdown/MDX rendering parity is verified for changed pages.
- [ ] Images/media assets render correctly in desktop and mobile viewports.
- [ ] Internal links are valid and no new broken links are introduced.

### 4) Generated Data and Build Outputs (If Applicable)

- [ ] Generated services/devices pages match expected shape and slugs.
- [ ] JSON outputs (if touched) are schema-compatible with existing consumers.
- [ ] Worker/version artifacts (if touched) are emitted and fetchable.
- [ ] Build logs show no new warnings indicating route/data loss.

### 5) Interactive Tool Behavior (If Applicable)

- [ ] Critical user path smoke-tested for each touched tool route.
- [ ] Browser API interactions (USB/BLE/serial/file) validated where relevant.
- [ ] Navigation and deep links within tool routes function correctly.
- [ ] Any known functional gaps are documented with follow-up ticket IDs.

### 6) Search, SEO, and Performance

- [ ] Search behavior for affected pages/routes is checked against baseline queries.
- [ ] No obvious SEO regressions (missing meta, broken canonical, robots issues).
- [ ] Lighthouse/performance check run for at least one representative touched route.
- [ ] Significant regressions are documented with mitigation or explicit acceptance.

### 7) Evidence and Traceability

- [ ] PR includes artifact links (route list, SEO snapshot, perf/search reports as applicable).
- [ ] Checklist and baseline template sections in this file are referenced.
- [ ] Owner and status updates are reflected in execution tracker tables.

### Review Outcome

- [ ] Approve
- [ ] Request changes
- [ ] Approve with follow-ups (must include ticket references)

## Stage Gates Checklist

| Stage | Gate | Owner | Status | Evidence |
| --- | --- | --- | --- | --- |
| 0 | All current routes classified (docs-now/generated-now/tools-later/keep-legacy) | docs | not-started | Route inventory committed |
| 1 | Astro preview works with correct base path and deploy target | platform | not-started | CI run + preview URL |
| 2 | Static docs render with correct slugs and internal links | docs | not-started | Link check + smoke test report |
| 3 | Generated pages + redirects match sampled Gatsby outputs | spec/platform | not-started | Diff report on route map + JSON outputs |
| 4 | Search and SEO meet agreed quality thresholds | docs/platform | not-started | Query relevance checks + SEO audit |
| 5 | Tier A tools pass functional smoke tests | app | not-started | Tool-by-tool test checklist |
| 6 | Cutover complete with no critical regressions in stabilization window | platform | not-started | Incident-free post-cutover report |

## Tools Route Inventory (First Pass)

Legend:

- Type: `doc-mdx`, `interactive-react`, `index/landing`, `unknown`
- Criticality: `A` (critical), `B` (important), `C` (lower priority)
- Plan: `astro-doc`, `astro-island`, `split-react-app`, `defer`, `investigate`

| Route | Source File | Type | Criticality | Plan | Owner | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| /tools/console/ | src/pages/tools/console.tsx | interactive-react | A | split-react-app | app | not-started | Candidate Tier A tool |
| /tools/device-tester/ | src/pages/tools/device-tester.tsx | interactive-react | A | split-react-app | app | not-started | Candidate Tier A tool |
| /tools/packet-inspector/ | src/pages/tools/packet-inspector.tsx | interactive-react | A | split-react-app | app | not-started | Candidate Tier A tool |
| /tools/updater/ | src/pages/tools/updater.tsx | interactive-react | A | split-react-app | app | not-started | Firmware/update flows likely critical |
| /tools/makecode-sim/ | src/pages/tools/makecode-sim.tsx | interactive-react | A | split-react-app | app | not-started | Integration-sensitive route |
| /tools/settings/ | src/pages/tools/settings.tsx | interactive-react | B | astro-island | app | not-started | Validate dependency on Gatsby navigate/prefix |
| /tools/player/ | src/pages/tools/player.tsx | interactive-react | B | astro-island | app | not-started | May stay with shared React runtime |
| /tools/service-editor/ | src/pages/tools/service-editor.tsx | interactive-react | B | split-react-app | app | not-started | Complex editor interactions expected |
| /tools/service-status/ | src/pages/tools/service-status.tsx | interactive-react | B | astro-island | app | not-started | Includes Gatsby data query today |
| /tools/device-registration/ | src/pages/tools/device-registration.tsx | interactive-react | B | astro-island | app | not-started | Verify auth/registration behavior |
| /tools/model-uploader/ | src/pages/tools/model-uploader.tsx | interactive-react | B | astro-island | app | not-started | Likely upload/browser API dependent |
| /tools/collector/ | src/pages/tools/collector.tsx | interactive-react | B | astro-island | app | not-started | Verify bus/device runtime dependencies |
| /tools/devicescript-connect/ | src/pages/tools/devicescript-connect.tsx | interactive-react | B | split-react-app | app | not-started | Potentially heavy runtime needs |
| /tools/devicescript-devtools/ | src/pages/tools/devicescript-devtools.tsx | interactive-react | B | split-react-app | app | not-started | Developer tool complexity |
| /tools/devicescript-devtools-vscode/ | src/pages/tools/devicescript-devtools-vscode.tsx | interactive-react | C | defer | app | not-started | Candidate for later batch |
| /tools/makecode-editor-extension/ | src/pages/tools/makecode-editor-extension.tsx | interactive-react | B | astro-island | app | not-started | Check embed constraints |
| /tools/release-assets/ | src/pages/tools/release-assets.tsx | interactive-react | C | defer | app | not-started | Internal/release workflow route |
| /tools/flood-test/ | src/pages/tools/flood-test.tsx | interactive-react | C | defer | app | not-started | Likely internal diagnostic |
| /tools/prototest/ | src/pages/tools/prototest.tsx | interactive-react | C | defer | app | not-started | Likely internal diagnostic |
| /tools/device-qr-code/ | src/pages/tools/device-qr-code.tsx | interactive-react | B | astro-island | app | not-started | Verify redirect and scan flows |
| /tools/panel-tester/ | src/pages/tools/panel-tester.tsx | interactive-react | C | defer | app | not-started | Lower-priority testing utility |
| /tools/packet-console/ | src/pages/tools/packet-console.mdx | doc-mdx | B | astro-doc | docs | not-started | Mostly docs with media assets |
| /tools/device-tree/ | src/pages/tools/device-tree.mdx | doc-mdx | B | astro-doc | docs | not-started | Includes embedded gifs |
| /tools/ec30/ | src/pages/tools/ec30.mdx | doc-mdx | C | astro-doc | docs | not-started | Static docs page |
| /tools/enclosure/ | src/pages/tools/enclosure.mdx | doc-mdx | C | astro-doc | docs | not-started | Static docs page |
| /tools/firmware/ | src/pages/tools/firmware.mdx | doc-mdx | B | astro-doc | docs | not-started | Firmware docs, may link critical tools |
| /tools/more/ | src/pages/tools/more.mdx | index/landing | B | astro-doc | docs | not-started | Landing/index page |
| /tools/traces/ | src/pages/tools/traces.mdx | doc-mdx | B | astro-doc | docs | not-started | Docs plus data references |
| (unknown) | src/pages/tools/edge-impulse.tsx_ | unknown | C | investigate | app | not-started | File suffix suggests not currently routed |

## Route Inventory Template

Use this template for non-tools routes (`/reference`, `/faq`, `/start`, generated routes, and special pages):

| Route | Source File or Generator | Category | Dynamic Data Source | Criticality | Migration Destination | Owner | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| /example/ | src/pages/example.mdx | docs | none | B | astro-doc | docs | not-started | Add acceptance checks |

Category suggestions:

- `docs`
- `generated-services`
- `generated-devices`
- `interactive-tool`
- `utility` (sitemap/feed/metadata/support)

## Non-Tools Route Inventory (First Pass)

This first pass covers non-tools routes and route families to support Stage 0 classification.
Use this as the source-of-truth checklist, then split rows into per-route detail where needed.

Legend:

- Category: `docs`, `generated-services`, `generated-devices`, `interactive-app`, `utility`
- Migration destination: `astro-doc`, `astro-generated`, `astro-app`, `keep-legacy`, `investigate`

| Route or Family | Source File or Generator | Category | Dynamic Data Source | Criticality | Migration Destination | Owner | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| / | src/pages/index.tsx | interactive-app | React components + Gatsby runtime helpers | A | astro-app | app | not-started | Home page has app-level behavior |
| /dashboard/ | src/pages/dashboard.tsx | interactive-app | React runtime + device/browser APIs | A | astro-app | app | not-started | Likely core experience route |
| /services/ | src/pages/services.tsx | interactive-app | Service data + generated service pages | A | astro-generated | spec | not-started | Landing page plus generated children |
| /devices/ | src/pages/devices.tsx | interactive-app | Device catalog + generated device pages | A | astro-generated | spec | not-started | Landing page plus generated children |
| /clients/ | src/pages/clients.tsx | interactive-app | Mixed docs index + runtime components | B | astro-app | docs/app | not-started | Validate whether can simplify to docs |
| /reference/ (index) | src/pages/reference.mdx | docs | none | A | astro-doc | docs | not-started | Core documentation section |
| /reference/** | src/pages/reference/**/*.mdx | docs | none | A | astro-doc | docs | not-started | 6 leaf pages identified |
| /faq/ (index) | src/pages/faq.mdx | docs | none | A | astro-doc | docs | not-started | Core support docs |
| /faq/** | src/pages/faq/**/*.mdx | docs | none | A | astro-doc | docs | not-started | Includes nested errors tree |
| /start/ (index) | src/pages/start.mdx | docs | none | A | astro-doc | docs | not-started | Core onboarding docs |
| /start/** | src/pages/start/**/*.mdx | docs | none | A | astro-doc | docs | not-started | 4 child pages identified |
| /ddk/ (index) | src/pages/ddk.mdx | docs | none | A | astro-doc | docs | not-started | Hardware/developer kit docs |
| /ddk/** | src/pages/ddk/**/*.mdx | docs | none | A | astro-doc | docs | not-started | Includes firmware/design/microbit trees |
| /clients/** docs | src/pages/clients/**/*.mdx | docs | none | A | astro-doc | docs | not-started | Large section; migrate in batches |
| /clients/embed/commands/ | src/pages/clients/embed/commands.tsx | interactive-app | React + embed behavior | B | astro-app | app | not-started | Decide island vs split app |
| /blog/ | src/pages/blog.mdx | docs | Static content list components | B | astro-doc | docs | not-started | Verify blog listing behavior parity |
| /blog/** | src/pages/blog/**/*.mdx | docs | none | C | astro-doc | docs | not-started | Currently small footprint |
| /experiments/razor-chroma/ | src/pages/experiments/razor-chroma.tsx | interactive-app | React runtime | C | investigate | app | not-started | Confirm if still active |
| /privacy/ | src/pages/privacy.mdx | docs | none | B | astro-doc | docs | not-started | Compliance/privacy page |
| /github/ | src/pages/github.tsx | interactive-app | External API/integration behavior | B | astro-app | app | not-started | Validate API and auth assumptions |
| /404/ | src/pages/404.tsx | utility | static fallback | A | astro-doc | platform | not-started | Must preserve UX and links |
| /services/{shortId}/ | gatsby-node createServicePages() + src/templates/service.tsx | generated-services | jacdac spec + services-sources JSON | A | astro-generated | spec | not-started | Includes many generated pages |
| /services/{shortId}/playground/ | gatsby-node createServicePages() + src/templates/service-playground.tsx | generated-services | jacdac spec | B | astro-generated | spec | not-started | Validate feature usage and traffic |
| /services/0x{classId} -> /services/{shortId}/ | gatsby-node createServicePages() redirect | generated-services | redirect map | A | astro-generated | platform/spec | not-started | Preserve legacy deep links |
| /devices/{identifier}/ | gatsby-node createDevicePages() + src/templates/device.tsx | generated-devices | device catalog from jacdac specs | A | astro-generated | spec | not-started | Includes deprecated/experimental devices |
| /devices/{company}/ | gatsby-node createDevicePages() + src/templates/device-company.tsx | generated-devices | device catalog company aggregation | B | astro-generated | spec | not-started | Ensure slug normalization parity |
| /devices/0x{productId} -> /devices/{identifier}/ | gatsby-node createDevicePages() redirect | generated-devices | product identifier redirects | A | astro-generated | platform/spec | not-started | High risk if omitted |
| /devices/codes/{vanity}/ -> device route | gatsby-node createDeviceQRPages() redirect | generated-devices | CSV + design identifier logic | A | astro-generated | platform/spec | not-started | Must preserve QR code compatibility |
| /tools/module-tester -> /tools/device-tester | gatsby-node createRedirects() | utility | static redirect | B | astro-doc | platform | not-started | Keep backward compatibility |
| /clients/p5js -> /clients/javascript/p5js | gatsby-node createRedirects() | utility | static redirect | B | astro-doc | platform | not-started | Keep backward compatibility |
| /version.json | gatsby-node createVersions() | utility | build metadata (commit SHA) | B | astro-generated | platform | not-started | Needed for update-check behavior if retained |
| /jacdac-worker-{version}.js | gatsby-node createWorkers() | utility | jacdac-ts dist worker artifact | B | astro-generated | platform/app | not-started | Validate consumption paths |
| /services/x{classId}.json and /services/lite/x{classId}.json | gatsby-node generateServicesJSON() | utility | generated service JSON | B | astro-generated | spec | not-started | Validate downstream consumers |
| .cache/all-pages.csv and .cache/top-pages.csv | gatsby-node onPostBuild() | utility | post-build compliance export | C | investigate | platform | not-started | Decide if still required after cutover |

## Non-Tools Backlog (Next Actions)

1. Expand section-level family rows (`/reference/**`, `/faq/**`, `/ddk/**`, `/clients/**`) into per-page rows only for high-traffic routes first.
2. Confirm real criticality tiers using analytics and stakeholder input before locking Stage 5 sequencing.
3. Capture traffic and error baselines for generated routes (`/services/*`, `/devices/*`) before implementing new generators.

## Tier A/B Route Checklist (Execution Ready)

Use this list to create implementation tickets. Keep one ticket per route (or route family where marked), and do not mark `done` until all checks pass.

Definition of done (per row):

- Route resolves under `/jacdac-docs` base path
- Internal links and assets are valid
- Redirects (if any) are verified
- Page-level smoke test is passing

Status values:

- `not-started`
- `in-progress`
- `blocked`
- `done`

### Tier A

| Route | Current Source | Destination | Owner | Status | Acceptance Checks |
| --- | --- | --- | --- | --- | --- |
| / | src/pages/index.tsx | astro-app | app | not-started | Landing UI renders; top navigation and primary CTAs work |
| /dashboard/ | src/pages/dashboard.tsx | astro-app | app | not-started | Device connection flow and key dashboard panels load |
| /services/ | src/pages/services.tsx | astro-generated | spec | not-started | Services landing renders from generated service set |
| /devices/ | src/pages/devices.tsx | astro-generated | spec | not-started | Devices landing renders with expected catalog entries |
| /reference/ | src/pages/reference.mdx | astro-doc | docs | not-started | Sidebar entry, title/meta, and internal links verified |
| /faq/ | src/pages/faq.mdx | astro-doc | docs | not-started | FAQ index + child links verified |
| /start/ | src/pages/start.mdx | astro-doc | docs | not-started | Onboarding path integrity verified |
| /ddk/ | src/pages/ddk.mdx | astro-doc | docs | not-started | DDK index + child nav verified |
| /services/{shortId}/ | gatsby-node + src/templates/service.tsx | astro-generated | spec | not-started | Sample matrix of service pages matches legacy output |
| /services/0x{classId} -> /services/{shortId}/ | gatsby-node redirect | astro-generated | platform/spec | not-started | Redirect map validated against generated class IDs |
| /devices/{identifier}/ | gatsby-node + src/templates/device.tsx | astro-generated | spec | not-started | Sample matrix of device pages and metadata validated |
| /devices/0x{productId} -> /devices/{identifier}/ | gatsby-node redirect | astro-generated | platform/spec | not-started | Product ID redirects verified for representative set |
| /devices/codes/{vanity}/ -> device route | gatsby-node redirect | astro-generated | platform/spec | not-started | QR vanity redirects validated with CSV/design-ID fixtures |
| /tools/console/ | src/pages/tools/console.tsx | split-react-app | app | not-started | Console opens and connects to runtime/device bus |
| /tools/device-tester/ | src/pages/tools/device-tester.tsx | split-react-app | app | not-started | Core test workflow completes successfully |
| /tools/packet-inspector/ | src/pages/tools/packet-inspector.tsx | split-react-app | app | not-started | Packet stream and inspection controls function |
| /tools/updater/ | src/pages/tools/updater.tsx | split-react-app | app | not-started | Update flow and firmware operation smoke-tested |
| /tools/makecode-sim/ | src/pages/tools/makecode-sim.tsx | split-react-app | app | not-started | MakeCode integration route behavior verified |
| /404/ | src/pages/404.tsx | astro-doc | platform | not-started | Not-found fallback and key links work |

### Tier B

| Route | Current Source | Destination | Owner | Status | Acceptance Checks |
| --- | --- | --- | --- | --- | --- |
| /clients/ | src/pages/clients.tsx | astro-app | docs/app | not-started | Clients index and category navigation verified |
| /clients/** docs family | src/pages/clients/**/*.mdx | astro-doc | docs | not-started | High-traffic client docs migrated first |
| /clients/embed/commands/ | src/pages/clients/embed/commands.tsx | astro-app | app | not-started | Embed command examples and UI interactions work |
| /blog/ | src/pages/blog.mdx | astro-doc | docs | not-started | Blog listing and child post links verified |
| /privacy/ | src/pages/privacy.mdx | astro-doc | docs | not-started | Compliance page parity check complete |
| /github/ | src/pages/github.tsx | astro-app | app | not-started | External integration/API behavior validated |
| /reference/** docs family | src/pages/reference/**/*.mdx | astro-doc | docs | not-started | All reference docs slugs/anchors verified |
| /faq/** docs family | src/pages/faq/**/*.mdx | astro-doc | docs | not-started | Nested error pages and breadcrumbs validated |
| /start/** docs family | src/pages/start/**/*.mdx | astro-doc | docs | not-started | Child onboarding pages fully linked |
| /ddk/** docs family | src/pages/ddk/**/*.mdx | astro-doc | docs | not-started | DDK hierarchy and media assets validated |
| /services/{shortId}/playground/ | gatsby-node + src/templates/service-playground.tsx | astro-generated | spec | not-started | Playground route behavior validated for sample services |
| /devices/{company}/ | gatsby-node + src/templates/device-company.tsx | astro-generated | spec | not-started | Company slug generation and listing parity checked |
| /version.json | gatsby-node createVersions() | astro-generated | platform | not-started | Commit SHA output and consumer behavior validated |
| /jacdac-worker-{version}.js | gatsby-node createWorkers() | astro-generated | platform/app | not-started | Worker file emitted and fetched successfully |
| /services/x{classId}.json and /services/lite/x{classId}.json | gatsby-node generateServicesJSON() | astro-generated | spec | not-started | JSON schema and content parity checks passing |
| /tools/settings/ | src/pages/tools/settings.tsx | astro-island | app | not-started | Settings save/load and navigation behavior works |
| /tools/player/ | src/pages/tools/player.tsx | astro-island | app | not-started | Playback controls and data flow validated |
| /tools/service-editor/ | src/pages/tools/service-editor.tsx | split-react-app | app | not-started | Editor interactions and persistence validated |
| /tools/service-status/ | src/pages/tools/service-status.tsx | astro-island | app | not-started | Data query replacement and status rendering verified |
| /tools/device-registration/ | src/pages/tools/device-registration.tsx | astro-island | app | not-started | Registration flow + edge cases tested |
| /tools/model-uploader/ | src/pages/tools/model-uploader.tsx | astro-island | app | not-started | Upload path and browser API behavior validated |
| /tools/collector/ | src/pages/tools/collector.tsx | astro-island | app | not-started | Collection flow and export path verified |
| /tools/devicescript-connect/ | src/pages/tools/devicescript-connect.tsx | split-react-app | app | not-started | Connect workflow and diagnostics validated |
| /tools/devicescript-devtools/ | src/pages/tools/devicescript-devtools.tsx | split-react-app | app | not-started | Core devtools functions smoke-tested |
| /tools/makecode-editor-extension/ | src/pages/tools/makecode-editor-extension.tsx | astro-island | app | not-started | Extension embed/integration behavior verified |
| /tools/device-qr-code/ | src/pages/tools/device-qr-code.tsx | astro-island | app | not-started | QR render/scan and linked route behavior verified |
| /tools/packet-console/ | src/pages/tools/packet-console.mdx | astro-doc | docs | not-started | Media assets and code snippets render correctly |
| /tools/device-tree/ | src/pages/tools/device-tree.mdx | astro-doc | docs | not-started | Animated assets and links verified |
| /tools/firmware/ | src/pages/tools/firmware.mdx | astro-doc | docs | not-started | Firmware doc links to active tools verified |
| /tools/more/ | src/pages/tools/more.mdx | astro-doc | docs | not-started | Tools index page links and grouping validated |
| /tools/traces/ | src/pages/tools/traces.mdx | astro-doc | docs | not-started | Trace docs content and references verified |

## Sprint 1 Candidate Slice (Suggested)

Start with a small but representative batch to validate architecture quickly:

1. `/reference/` + `/reference/**` (docs migration pattern)
2. `/services/` + `/services/{shortId}/` + `services 0x redirects` (generated routes + redirects)
3. `/tools/console/` (interactive split-app pilot)
4. `/404/` and `/version.json` (utility parity)

Issue templates for this slice are available in:

- `docs/migration/sprint-1-issues.md`

GitHub CLI automation (create all Sprint 1 issues + milestone):

- `docs/migration/create-sprint-1-issues.sh`
