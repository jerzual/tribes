import js from '@eslint/js';
import nxEslintPlugin from '@nx/eslint-plugin';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsdoc from 'eslint-plugin-jsdoc';
import importPlugin from 'eslint-plugin-import';
import n from 'eslint-plugin-n';
import rxjsX from 'eslint-plugin-rxjs-x';

export default [
  {
    ignores: ['**/dist', '**/out-tsc'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  jsdoc.configs['flat/recommended'],
  eslintConfigPrettier,
  prettierRecommended,
  {
    plugins: { '@nx': nxEslintPlugin, n, import: importPlugin },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array',
        },
      ],
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false,
          },
        },
      ],
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
        },
      ],
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/prefer-regexp-exec': 'error',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/restrict-plus-operands': 'error',
      '@typescript-eslint/restrict-template-expressions': 'error',
      '@typescript-eslint/triple-slash-reference': [
        'error',
        {
          path: 'always',
          types: 'prefer-import',
          lib: 'always',
        },
      ],
      '@typescript-eslint/unbound-method': 'error',
      '@typescript-eslint/unified-signatures': 'error',
      'arrow-parens': ['error', 'as-needed'],
      camelcase: 'error',
      'comma-dangle': ['error', 'always-multiline'],
      complexity: 'off',
      'constructor-super': 'error',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'off',
      'id-denylist': [
        'error',
        'any',
        'Number',
        'number',
        'String',
        'string',
        'Boolean',
        'boolean',
        'Undefined',
        'undefined',
      ],
      'id-match': 'error',
      'import/order': 'error',
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-indentation': 'error',
      'jsdoc/require-param-type': 'off',
      'jsdoc/require-returns-type': 'off',
      'max-classes-per-file': 'error',
      'new-parens': 'error',
      'no-array-constructor': 'off',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-cond-assign': 'off',
      'no-console': 'error',
      'no-debugger': 'error',
      'no-empty': 'error',
      'no-empty-function': 'off',
      'no-eval': 'error',
      'no-fallthrough': 'off',
      'no-invalid-this': 'off',
      'no-new-wrappers': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': [
        'error',
        {
          hoist: 'all',
        },
      ],
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-labels': 'error',
      'no-unused-vars': 'off',
      'no-var': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      radix: 'error',
      'require-await': 'off',
      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
        },
      ],
      'use-isnan': 'error',
      'valid-typeof': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: { 'rxjs-x': rxjsX },
    rules: {
      ...rxjsX.configs.recommended.rules,
      'rxjs-x/no-async-subscribe': 'error',
      'rxjs-x/no-ignored-observable': 'error',
      'rxjs-x/no-ignored-subscription': 'error',
      'rxjs-x/no-nested-subscribe': 'error',
      'rxjs-x/no-unbound-methods': 'error',
      'rxjs-x/throw-error': 'error',
      'rxjs-x/finnish': 'error',
    },
  },
  ...nxEslintPlugin.configs['flat/typescript'].map((config) => {
    const { '@typescript-eslint': _, ...restPlugins } = config.plugins || {};
    const result = {
      ...config,
      files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
    };
    if (Object.keys(restPlugins).length > 0) {
      result.plugins = restPlugins;
    } else {
      delete result.plugins;
    }
    return result;
  }),
  ...nxEslintPlugin.configs['flat/javascript'].map((config) => ({
    ...config,
    files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
  })),
];
