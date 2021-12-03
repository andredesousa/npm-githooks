/**
 * Jest configuration file, see link for more information:
 * https://jestjs.io/docs/configuration
 *
 * @type { import("@jest/types").Config.InitialOptions }
 */
module.exports = {
  testRegex: ".*\\.spec\\.js$",
  testEnvironment: "node",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "build/coverage",
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
