module.exports = {
  root: true,
  extends: ['standard-react-ts'],
  parserOptions: {
    project: './tsconfig.lint.json',
  },
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
  },
}
