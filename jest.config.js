/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  projects: [
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
    "./src/fi/hg/repository",
    "./src/fi/hg/ssr"
  ],
  testTimeout: 300000
};
