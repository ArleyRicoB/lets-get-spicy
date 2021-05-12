module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-array-index-key': 0,
    'no-console': 0,
    indent: [
      'error',
      2,
      {
        ignoredNodes: ['TemplateLiteral'],
      },
    ],
    'template-curly-spacing': ['off'],
    'jsx-a11y/label-has-associated-control': 'off',
  },
  globals: {
    window: true,
    document: false,
  },
  env: {
    jest: true,
  },
};
