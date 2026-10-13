import rxjsX from 'eslint-plugin-rxjs-x';
import tseslint from 'typescript-eslint';

// Most lint rules run through oxlint (.oxlintrc.json).
// ESLint only keeps the rules oxlint can't run: type-aware rxjs-x rules
// (oxlint JS plugins get no type information) and a few typescript-eslint rules.
export default [
  {
    ignores: ['**/dist', '**/out-tsc', '**/coverage', 'tmp', '**/*.js', '**/*.mjs'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    linterOptions: {
      // eslint-disable comments also target oxlint rules
      reportUnusedDisableDirectives: 'off',
    },
    plugins: { '@typescript-eslint': tseslint.plugin, 'rxjs-x': rxjsX },
    rules: {
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
      '@typescript-eslint/member-ordering': 'error',
      camelcase: 'error',

      'rxjs-x/finnish': 'error',
      'rxjs-x/no-async-subscribe': 'error',
      'rxjs-x/no-create': 'error',
      'rxjs-x/no-ignored-notifier': 'error',
      'rxjs-x/no-ignored-observable': 'error',
      'rxjs-x/no-ignored-subscription': 'error',
      'rxjs-x/no-implicit-any-catch': 'error',
      'rxjs-x/no-nested-subscribe': 'error',
      'rxjs-x/no-redundant-notify': 'error',
      'rxjs-x/no-subject-unsubscribe': 'error',
      'rxjs-x/no-subscribe-in-pipe': 'error',
      'rxjs-x/no-topromise': 'error',
      'rxjs-x/no-unbound-methods': 'error',
      'rxjs-x/no-unsafe-subject-next': 'error',
      'rxjs-x/no-unsafe-takeuntil': 'error',
      'rxjs-x/prefer-observer': 'error',
      'rxjs-x/throw-error': 'error',
    },
  },
];
