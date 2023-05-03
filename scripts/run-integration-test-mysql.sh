#!/bin/sh
cd "$(dirname "$0")/.."
set -x

TEST_MYSQL_PASSWORD='rxPe4XHbonLeHwjvKdq9R9aDWf1xiUje' TEST_SCOPES=integration,hg npm test
