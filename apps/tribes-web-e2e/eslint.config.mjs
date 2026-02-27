import cypress from 'eslint-plugin-cypress';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  cypress.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {},
    languageOptions: {
      parserOptions: {
        project: ['apps/tribes-web-e2e/tsconfig.*?.json'],
      },
    },
  },
  {
    files: ['src/plugins/index.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
    },
  },
];
