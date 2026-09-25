module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    jquery: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': ['warn', { caughtErrorsIgnorePattern: '^ignore' }],
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'linebreak-style': 0,
    quotes: 'off',
    semi: ['warn', 'always'],
    'no-console': 'warn',
    'no-plusplus': 'off',
    'max-len': ['warn', { code: 150, ignoreUrls: true }],
    'no-alert': 'warn',
  },
};
