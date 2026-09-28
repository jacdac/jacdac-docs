#!/usr/bin/env bash
set -euo pipefail
base="https://jacdac.github.io/jacdac-docs"
routes=(
  "/reference/"
  "/reference/protocol/"
  "/services/accelerometer/"
  "/devices/microsoft-research/"
  "/tools/console/"
  "/404/"
)
out="docs/migration/baseline/seo/snapshot.md"
{
  echo "# SEO Baseline Snapshot"
  echo
  echo "Date: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  echo "Environment: production (jacdac.github.io)"
  echo "Reviewer: automated capture script"
  echo
  echo "| Route | HTTP | Title | Description | Canonical | OG Title | OG Description | Notes |"
  echo "| --- | --- | --- | --- | --- | --- | --- | --- |"
} > "$out"

extract_meta() {
  local html="$1"; local name="$2"
  printf '%s' "$html" | perl -0777 -ne "
    if (/<meta[^>]+(?:name|property)=\"\Q$name\E\"[^>]+content=\"([^\"]*)\"/i) { print \$1; }
    elsif (/<meta[^>]+content=\"([^\"]*)\"[^>]+(?:name|property)=\"\Q$name\E\"/i) { print \$1; }
  "
}

extract_title() {
  local html="$1"
  printf '%s' "$html" | perl -0777 -ne 'if (/<title>(.*?)<\/title>/is) { my $t=$1; $t =~ s/\s+/ /g; $t =~ s/^\s+|\s+$//g; print $t; }'
}

extract_canonical() {
  local html="$1"
  printf '%s' "$html" | perl -0777 -ne '
    if (/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i) { print $1; }
    elsif (/<link[^>]+href="([^"]*)"[^>]+rel="canonical"/i) { print $1; }
  '
}

for route in "${routes[@]}"; do
  url="$base$route"
  http_code="$(curl -s -o /tmp/jacdac-seo-route.html -w "%{http_code}" "$url" || true)"
  html="$(cat /tmp/jacdac-seo-route.html 2>/dev/null || true)"
  if [[ -z "$html" ]]; then
    echo "| $route | $http_code |  |  |  |  |  | fetch failed |" >> "$out"
    continue
  fi
  title="$(extract_title "$html")"
  desc="$(extract_meta "$html" "description")"
  canon="$(extract_canonical "$html")"
  ogt="$(extract_meta "$html" "og:title")"
  ogd="$(extract_meta "$html" "og:description")"
  note="ok"
  [[ -z "$title" ]] && note="missing title"
  [[ "$http_code" != "200" ]] && note="http $http_code"
  safe() { printf '%s' "$1" | sed 's/|/\\|/g'; }
  echo "| $route | $http_code | $(safe "$title") | $(safe "$desc") | $(safe "$canon") | $(safe "$ogt") | $(safe "$ogd") | $note |" >> "$out"
done

rm -f /tmp/jacdac-seo-route.html

echo "Wrote $out"
