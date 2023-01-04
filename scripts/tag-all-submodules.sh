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
set -e
set -x

cat .gitmodules |grep -F path|awk '{print $3}'|while read DIR; do
  (
    cd $DIR
    set -e
#    if test "x$GITHUB_TOKEN" != x; then
#      ORIGIN_URL="$(git remote get-url origin)"
#      ORG_REPO="$(echo $ORIGIN_URL|sed -re 's@^.*github\.com[:/]@@')"
#      git remote set-url origin "https://x-access-token:$GITHUB_TOKEN@github.com/$ORG_REPO"
#    fi
    git tag -a "$TAG" -m "$MESSAGE"
    git push origin "$TAG"
  )
done
