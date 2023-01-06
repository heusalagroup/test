#!/bin/bash
TAG="$1"
set -e
cd "$(dirname "$0")/.."

if test "x$TAG" = x; then
  TAG=$(git describe --tags --abbrev=0)
fi

LINE_FORMAT='| %-10s | %-70s |\n'

MAIN_CHANGES="$(
  git log --oneline --no-merges --format="%s" "$TAG..HEAD"| while read -r LINE; do
    # shellcheck disable=SC2059
    printf "$LINE_FORMAT" "test" "$LINE"
  done
)"

echo "### This release contains the following changes since $TAG"
echo

# shellcheck disable=SC2059
printf "$LINE_FORMAT" "Module" "Description"

# shellcheck disable=SC2059
printf "$LINE_FORMAT" "----" "----"

if test "x$MAIN_CHANGES" = x; then
  :
else
  echo "$MAIN_CHANGES"
fi

cat .gitmodules|grep -F path|awk '{print $3}'|while read -r DIR; do
  (
    if cd "$DIR"; then
      MODULE=$(echo "$DIR"|sed -re 's@^src/@@'|tr '/' '.')
      MODULE_CHANGES="$(
        git log --oneline --no-merges --format="%s" "$TAG..HEAD"| while read -r LINE; do
          # shellcheck disable=SC2059
          printf "$LINE_FORMAT" "$MODULE" "$LINE"
        done
      )"
      if test "x$MODULE_CHANGES" = x; then
        :
      else
        echo "$MODULE_CHANGES"
      fi
    fi
  )
done
