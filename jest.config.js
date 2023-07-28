// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

/**
 * The scope of tests to perform.
 *
 * 1. `hg`: HG's unit tests
 * 2. `unit`: Unit tests for current project (here it's same as `hg`)
 * 3. `system`: Full system tests which require real running system (here in this project we don't have any)
 * 4. `integration`: There is also a special scope "integration" which will enable MySQL and PostgreSQL
 *                  integration tests against a full server. To run these, you need to install
 *                  `mysql` and/or `pg` NPM modules and provide configuration parameters.
 *
 * @type {string[]}
 */
const TEST_SCOPES = (process.env.TEST_SCOPES??'hg,unit,system').split(/[ ,|;:\t]+/).map(item => item.toLowerCase());

/**
 * The default timeout of the tests
 *
 * @type {number}
 */
const TEST_TIMEOUT = parseInt(process.env.TEST_TIMEOUT ?? '300000', 10);

/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  projects: [
    ...(TEST_SCOPES.includes('hg') || TEST_SCOPES.includes('unit') || TEST_SCOPES.includes('integration') ? [
      "./src/fi/hg/core",
      "./src/fi/hg/node",
      "./src/fi/hg/backend",
      "./src/fi/hg/frontend",
      "./src/fi/hg/create",
      "./src/fi/hg/dashboard",
      "./src/fi/hg/discord",
      "./src/fi/hg/ecb",
      "./src/fi/hg/google",
      "./src/fi/hg/matrix",
      "./src/fi/hg/mysql",
      "./src/fi/hg/pg",
      "./src/fi/hg/pipeline",
      "./src/fi/hg/ssr"
    ]: [])
  ],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
  ],
  coverageDirectory: './coverage',
  testTimeout: TEST_TIMEOUT,
  setupFilesAfterEnv: [
    "./src/fi/hg/jest/matchers/index.ts"
  ]
};
