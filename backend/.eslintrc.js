module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', '@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'off', // Allow console.log in CLI applications
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
      env: {
        commonjs: true,
      },
    },
    {
      files: ['**/*.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'error',
      },
    },
  ],
};
