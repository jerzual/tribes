import nxEslintPlugin from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nxEslintPlugin.configs['flat/react'].map((config) => {
    const { import: _, ...restPlugins } = config.plugins || {};
    return { ...config, plugins: restPlugins };
  }),
  {
    rules: {
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {},
    languageOptions: {
      parserOptions: {
        project: ['libs/tribes-engine/tsconfig.*?.json'],
      },
    },
  },
];
