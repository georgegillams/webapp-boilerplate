module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!dist/**', '!coverage/**'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/', '<rootDir>/coverage/'],
  coverageThreshold: {
    global: {
      statements: 40,
      branches: 40,
      functions: 40,
      lines: 40,
    },
  },
  moduleDirectories: ['node_modules'],
  testRegex: '.*\\.test\\.js$',
  setupFilesAfterEnv: [
    '<rootDir>/../config/jest/jest-dom-extend-expect',
    '<rootDir>/../config/jest/jest-environment-variables',
  ],
  snapshotSerializers: [],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/../config/jest/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/../config/jest/mocks/image.js',
  },
};
