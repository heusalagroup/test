#!/bin/bash
cd "$(dirname "$0")/.."
TAG="$1"
MESSAGE="$2"
if test "x$TAG" != x && test "x$MESSAGE" != x; then
  :
else
  echo 'USAGE: ./scripts/tag-all-submodules.sh TAG MESSAGE' >&2
  exit 1
fi
set -x

if test "x$GITHUB_TOKEN" != x; then
  git remote set-url origin "https://x-access-token:$GITHUB_TOKEN@github.com/$(git remote get-url origin|sed -re 's/git@github.com://' -e 's@https://github.com/@@')"
fi

cat .gitmodules |grep -F path|awk '{print $3}'|while read DIR; do
  (
    cd $DIR \
    && git tag -a "$TAG" -m "$MESSAGE" \
    && git push origin "$TAG"
  )
done
