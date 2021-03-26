import 'jest-styled-components';
import 'jest-canvas-mock';
import '@testing-library/jest-dom';

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.config.js'],
  moduleDirectories: [
    '<rootDir>/node_modules',
    'node_modules',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next',
    '<rootDir>/cypress',
    '<rootDir>/dist',
  ],
};
