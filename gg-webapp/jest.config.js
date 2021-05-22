module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!dist/**', '!coverage/**'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/', '<rootDir>/coverage/'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
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
