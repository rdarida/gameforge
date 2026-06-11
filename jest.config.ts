/** @jest-config-loader ts-node */
import { defaults, defineConfig } from 'jest-config';

export default defineConfig({
  testEnvironment: 'jsdom',
  collectCoverage: false, // npm test -- --collectCoverage
  collectCoverageFrom: ['./src/**/*.{ts,tsx}', '!./src/**/*.d.ts'],
  coveragePathIgnorePatterns: [
    ...defaults.coveragePathIgnorePatterns,
    './dist/',
    './tests/'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
});
