#!/usr/bin/env bash
set -euo pipefail

assert_contains() {
  local file="$1"
  local value="$2"

  if ! rg --fixed-strings --quiet -- "$value" "$file"; then
    printf 'Expected %s to contain: %s\n' "$file" "$value" >&2
    exit 1
  fi
}

assert_absent() {
  local file="$1"
  local value="$2"

  if rg --fixed-strings --quiet -- "$value" "$file"; then
    printf 'Expected %s not to contain: %s\n' "$file" "$value" >&2
    exit 1
  fi
}

assert_contains "next.config.js" 'output: "export"'
assert_contains "src/app/layout.tsx" 'metadataBase: new URL("https://medihearthn.com")'
assert_absent "src/app/layout.tsx" "@vercel/analytics"
assert_contains "package.json" '"lint": "eslint src --ext .ts,.tsx"'

printf 'Deployment contract passed.\n'
