module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: ['airbnb-typescript', 'airbnb/hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'no-console': 'warn',
    'react/prop-types': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'import/no-cycle': 'off',
  },
};
