
/**
 * Test scopes to include in the test.
 *
 *  - core
 *  - node
 *  - backend
 *  - frontend
 *  - create
 *  - dashboard
 *  - discord
 *  - ecb
 *  - google
 *  - matrix
 *  - mysql
 *  - pg
 *  - pipeline
 *  - repository
 *  - ssr
 *
 *  Defaults to "all" which means all above.
 *
 * @type {string[]}
 */
let TEST_SCOPES = (process.env.TEST_SCOPES ? process.env.TEST_SCOPES : "all").split(/[ ,|]/).map((item) => item.trim().toLowerCase());
if (TEST_SCOPES.length === 0) {
  TEST_SCOPES = ['all'];
}

const TEST_TIMEOUT = parseInt( process.env.TEST_TIMEOUT ? process.env.TEST_TIMEOUT : '300000', 10);

console.info(`
TEST_SCOPES: ${TEST_SCOPES}
TEST_TIMEOUT: ${TEST_TIMEOUT}
`);

const all = TEST_SCOPES.includes("all");

const projects = [
  ...( all || TEST_SCOPES.includes("core")       ? [ "./src/fi/hg/core"       ] : []),
  ...( all || TEST_SCOPES.includes("node")       ? [ "./src/fi/hg/node"       ] : []),
  ...( all || TEST_SCOPES.includes("backend")    ? [ "./src/fi/hg/backend"    ] : []),
  ...( all || TEST_SCOPES.includes("frontend")   ? [ "./src/fi/hg/frontend"   ] : []),
  ...( all || TEST_SCOPES.includes("create")     ? [ "./src/fi/hg/create"     ] : []),
  ...( all || TEST_SCOPES.includes("dashboard")  ? [ "./src/fi/hg/dashboard"  ] : []),
  ...( all || TEST_SCOPES.includes("discord")    ? [ "./src/fi/hg/discord"    ] : []),
  ...( all || TEST_SCOPES.includes("ecb")        ? [ "./src/fi/hg/ecb"        ] : []),
  ...( all || TEST_SCOPES.includes("google")     ? [ "./src/fi/hg/google"     ] : []),
  ...( all || TEST_SCOPES.includes("matrix")     ? [ "./src/fi/hg/matrix"     ] : []),
  ...( all || TEST_SCOPES.includes("mysql")      ? [ "./src/fi/hg/mysql"      ] : []),
  ...( all || TEST_SCOPES.includes("pg")         ? [ "./src/fi/hg/pg"         ] : []),
  ...( all || TEST_SCOPES.includes("pipeline")   ? [ "./src/fi/hg/pipeline"   ] : []),
  ...( all || TEST_SCOPES.includes("repository") ? [ "./src/fi/hg/repository" ] : []),
  ...( all || TEST_SCOPES.includes("ssr")        ? [ "./src/fi/hg/ssr"        ] : []),
];

if (projects.length === 0) {
  throw new TypeError('No projects selected');
}

/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  projects: projects,
  testTimeout: TEST_TIMEOUT
};
