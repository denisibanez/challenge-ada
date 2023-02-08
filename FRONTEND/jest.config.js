module.exports = {
  collectCoverageFrom: [
    'src/**/*.component.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/dist/**',
    '!**/folder-with-untested-files/**'
  ],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/src/setupJest.ts'
  ],
  transform: {
    '^.+\\.(ts|tsx|html|svg)$': 'jest-preset-angular'
  },
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist'
  ],
  globalSetup: 'jest-preset-angular/global-setup',
  moduleDirectories: [
    'node_modules',
    'src/'
  ],
  roots: [
    '<rootDir>/src',
    '<rootDir>'
  ],
  testMatch: [
    '<rootDir>/src/app/**/*.spec.ts',
    '!**/node_modules/**',
    '!**/coverage/**'
  ],
  extensionsToTreatAsEsm: [
    '.ts'
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(svg|html)$',
    }
  }
}