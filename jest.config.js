module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|jpg|png|svg)$': '<rootDir>/src/base/conf/empty-module.ts',
    '^assets/(.*)': '<rootDir>/src/app/assets/$1',
    '^app/(.*)': '<rootDir>/src/app/$1',
    '^base/(.*)': '<rootDir>/src/base/$1',
    '^components/(.*)': '<rootDir>/src/app/components/$1',
    '^containers/(.*)': '<rootDir>/src/app/containers/$1',
    '^mocks/(.*)': '<rootDir>/server/mocks/$1',
    '^server/(.*)': '<rootDir>/server/$1',
    '^store/(.*)': '<rootDir>/src/base/store/$1',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/src/base/conf/setupEnzyme.ts']
};
