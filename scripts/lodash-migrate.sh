#!/bin/bash
set -e
FILE="$1"

sed -i.refactoring-bak -re 's@import *{ *([^, }]+) *} *from *"(.*)/modules/lodash"@import { \1 } from "\2/functions/\1"@' "$FILE"
rm -f "$FILE.refactoring-bak"
