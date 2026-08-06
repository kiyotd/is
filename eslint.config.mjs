import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
  {
    // 生成物・依存物は対象外（旧 .eslintignore 相当）
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    name: 'project/base',
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
  // eslint:recommended 相当
  {
    name: 'project/eslint-recommended',
    files: ['**/*.ts'],
    rules: js.configs.recommended.rules,
  },
  // plugin:@typescript-eslint/recommended 相当
  // （parser 登録・plugin 登録・eslint-recommended の TS 向け上書きを含む）
  // flat/recommended の一部は files 指定を持たず全ファイルに適用されるため、
  // TS の parser とルールが .mjs / .js に波及しないよう **/*.ts に限定する
  ...tseslint.configs['flat/recommended'].map((config) => ({
    ...config,
    files: ['**/*.ts'],
  })),
  {
    name: 'project/import-rules',
    files: ['**/*.ts'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
];
