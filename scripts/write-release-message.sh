#!/bin/bash
set -e
cd "$(dirname "$0")/.."
./scripts/get-release-message.sh "$@" > changes.md
