#!/usr/bin/env bash
set -euo pipefail

# Create Sprint 1 migration issues in GitHub.
# Usage:
#   1) Ensure gh is authenticated: gh auth status
#   2) Run from any directory:
#      bash docs/migration/create-sprint-1-issues.sh
#
# Optional env vars:
#   REPO=owner/repo        (default: detect from git remote)
#   MILESTONE="Sprint 1 - Migration Foundations"

REPO="${REPO:-}"
MILESTONE="${MILESTONE:-Sprint 1 - Migration Foundations}"

if [[ -z "$REPO" ]]; then
  origin_url="$(git remote get-url origin)"
  if [[ "$origin_url" =~ github.com[:/]([^/]+/[^/.]+)(\.git)?$ ]]; then
    REPO="${BASH_REMATCH[1]}"
  else
    echo "Could not infer REPO from git remote. Set REPO=owner/repo and rerun." >&2
    exit 1
  fi
fi

echo "Using repo: $REPO"

# Create milestone if it does not exist.
if ! gh api "repos/$REPO/milestones" --paginate --jq '.[] | select(.title == "'"$MILESTONE"'") | .number' | grep -q .; then
  gh api "repos/$REPO/milestones" -f title="$MILESTONE" >/dev/null
  echo "Created milestone: $MILESTONE"
else
  echo "Milestone exists: $MILESTONE"
fi

milestone_number="$(gh api "repos/$REPO/milestones" --paginate --jq '.[] | select(.title == "'"$MILESTONE"'") | .number' | head -n1)"

ensure_label() {
  local name="$1"
  local color="$2"
  local description="$3"
  if gh api "repos/$REPO/labels/$name" >/dev/null 2>&1; then
    return
  fi
  gh label create "$name" \
    --repo "$REPO" \
    --color "$color" \
    --description "$description" >/dev/null
  echo "Created label: $name"
}

# Ensure labels used by this script exist.
ensure_label "migration" "0E8A16" "Gatsby to Astro migration work"
ensure_label "platform" "5319E7" "Build, CI, deployment, and infra changes"
ensure_label "docs" "1D76DB" "Documentation and content work"
ensure_label "app" "FBCA04" "Interactive app/tooling work"
ensure_label "spec" "B60205" "Generated spec/data pipeline work"
ensure_label "utility" "C5DEF5" "Utilities, metadata, and support outputs"
ensure_label "stage-0" "0052CC" "Migration stage 0"
ensure_label "stage-1" "0052CC" "Migration stage 1"
ensure_label "stage-2" "0052CC" "Migration stage 2"
ensure_label "stage-3" "0052CC" "Migration stage 3"
ensure_label "stage-5" "0052CC" "Migration stage 5"

create_issue() {
  local title="$1"
  local labels="$2"
  local body="$3"
  gh issue create \
    --repo "$REPO" \
    --title "$title" \
    --label "$labels" \
    --milestone "$MILESTONE" \
    --body "$body"
}

create_issue \
  "migration(stage-0): capture baseline for routes, SEO, performance, and search" \
  "migration,stage-0,platform" \
"Capture pre-migration baseline artifacts so all Astro changes can be evaluated against a known-good Gatsby baseline.

Scope:
- Route snapshot (including generated families and redirects)
- SEO metadata snapshot for representative routes
- Lighthouse sample report
- Search baseline query results
- Error baseline (404 + client JS errors)

Acceptance Criteria:
- Baseline artifacts exist under docs/migration/baseline/
- Minimum route sample set from migration.md is covered
- Search baseline includes all starter queries from migration.md
- A PR includes the baseline summary template completed

Deliverables:
- docs/migration/baseline/routes/*
- docs/migration/baseline/seo/*
- docs/migration/baseline/perf/*
- docs/migration/baseline/search/*
- docs/migration/baseline/errors/*

Dependencies:
- None

Out of Scope:
- Astro implementation changes"

create_issue \
  "migration(stage-1): bootstrap astro starlight with /jacdac-docs base path and preview CI" \
  "migration,stage-1,platform" \
"Create Astro/Starlight scaffold in-repo with GitHub Pages-compatible base path behavior and preview build in CI.

Scope:
- Add Astro/Starlight scaffold
- Configure site/base for /jacdac-docs
- Add preview CI workflow
- Add minimal navigation/layout

Acceptance Criteria:
- astro build succeeds in CI
- Preview deploy serves pages with correct /jacdac-docs path behavior
- Internal links and static assets resolve under prefixed path
- Reviewer checklist in migration.md passes for route/base-path integrity

Deliverables:
- Astro/Starlight config and initial content structure
- CI workflow for preview build/deploy
- Notes in PR using baseline summary template

Dependencies:
- Prefer baseline availability from Issue 1

Out of Scope:
- Bulk docs migration
- Generated services/devices migration"

create_issue \
  "migration(stage-2): migrate reference docs family to starlight" \
  "migration,stage-2,docs" \
"Migrate /reference/ and all child pages as the first docs-family pilot to validate MDX behavior, sidebar/nav, and link integrity.

Scope:
- /reference/ index page
- /reference/** leaf pages
- Frontmatter and heading/link behavior parity

Acceptance Criteria:
- All /reference/** routes render in Astro
- No broken internal links in reference family
- SEO metadata parity for sampled pages (title/description/canonical)
- Reviewer checklist content/rendering parity items pass

Deliverables:
- Migrated reference pages in Astro content location
- Link-check output for reference pages
- Snapshot diff notes vs Gatsby baseline

Dependencies:
- Stage 1 complete
- Baseline available

Out of Scope:
- Non-reference docs families"

create_issue \
  "migration(stage-3): implement services page generation and 0x redirects in astro" \
  "migration,stage-3,spec,platform" \
"Port services generation logic from Gatsby node hooks to Astro build-time generation, including legacy class-ID redirects.

Scope:
- Generate /services/{shortId}/
- Generate /services/{shortId}/playground/ (if retained in Sprint 1; otherwise note deferred)
- Implement /services/0x{classId} -> /services/{shortId}/ redirects
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
- Stage 1 complete
- Baseline available

Out of Scope:
- Devices generation pipeline"

create_issue \
  "migration(stage-5-pilot): migrate tools/console using split react app approach" \
  "migration,stage-5,app" \
"Implement the first interactive tool migration pilot using the selected architecture for heavy tool routes (split React app).

Scope:
- /tools/console/ route
- Base path compatibility and asset loading
- Runtime connection smoke path

Acceptance Criteria:
- /tools/console/ route loads under /jacdac-docs
- Core console flow works in manual smoke test
- No broken deep links/assets from tool page
- Reviewer checklist interactive-tool and route-integrity sections pass

Deliverables:
- Migrated console route wiring
- Smoke test notes and known gaps

Dependencies:
- Stage 1 complete
- Baseline available

Out of Scope:
- Other tool routes"

create_issue \
  "migration(stage-1/3): preserve utility behavior for 404 and version metadata" \
  "migration,utility,platform" \
"Ensure essential utility outputs remain compatible during migration.

Scope:
- /404/ page behavior parity
- /version.json output parity (if retained)

Acceptance Criteria:
- 404 route renders expected fallback UI and links
- version.json is emitted with expected fields and consumed behavior remains valid
- Reviewer checklist utility and route-integrity checks pass

Deliverables:
- Utility route implementation and verification notes

Dependencies:
- Stage 1 complete

Out of Scope:
- Worker artifact and full utility suite"

echo "Sprint 1 issue creation complete."
