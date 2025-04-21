// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      'linebreak-style': ['error', 'windows'],
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['to'],
        },
      ],
      'import/prefer-default-export': 'off',
      'arrow-body-style': 'off',
      'react/self-closing-comp': 'off',
      'react/function-component-definition': [
        0,
        {
          namedComponents: [
            'function-declaration',
            'arrow-function',
            'function-expression',
          ],
          unnamedComponents: [
            'function-declaration',
            'arrow-function',
            'function-expression',
          ],
        },
      ],
      quotes: 'off',
      '@typescript-eslint/quotes': ['error', 'double'],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // "object-curly-newline": ["error", { "multiline": true }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'comma-dangle': ['error', 'only-multiline'],
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/jsx-boolean-value': [2, 'always'],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-console': 'error',
      'react/jsx-props-no-spreading': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
    },
  },
);
