// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageDirectory: 'coverage',
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  collectCoverageFrom: ['<rootDir>/src/modules/*/services/*.js'],
};
