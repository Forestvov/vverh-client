import storybook from 'eslint-plugin-storybook'
import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  {
    ignores: [
      'eslint.config.js',
      'prettier.config.js',
      'storybook-static/**',
      'dist/**',
      'node_modules/**',
    ],
  },

  ...tanstackConfig,

  {
    rules: {
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',
    },
  },

  ...storybook.configs['flat/recommended'],
]
