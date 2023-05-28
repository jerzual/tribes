module.exports = {
  globals: {
    'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' },
  },
  coverageDirectory: '../../coverage/apps/tribes-api',
  displayName: 'tribes-api',
  testEnvironment: 'node',
  preset: '../../jest.preset.ts',
};
