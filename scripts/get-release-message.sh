#!/bin/bash
TAG="$1"
if test "x$TAG" = x; then
  TAG=$(git describe --tags --abbrev=0)
fi
cd "$(dirname "$0")/.."
echo "This release contains the following changes since $TAG:"
git log --oneline --no-merges --format="%s" "$TAG..HEAD"|sed -re 's/^/ * /g'
