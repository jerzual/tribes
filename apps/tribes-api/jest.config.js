module.exports = {
  name: 'tribes-api',
  preset: '../../jest.config.js',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    }
  },
  coverageDirectory: '../../coverage/apps/tribes-api'
};