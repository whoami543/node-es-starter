module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:import/errors',
    'plugin:jest/recommended'
  ],
  plugins: ['standard', 'import', 'jest'],
  env: {
    node: true,
    browser: true,
    'jest/globals': true
  },
  rules: {
    'no-var': 'error',
    'no-unused-vars': 1,
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'max-len': ['warn', { code: 80 }],
    // Plugin standard
    'standard/object-curly-even-spacing': ['error', 'either'],
    'standard/array-bracket-even-spacing': ['error', 'either'],
    'standard/computed-property-even-spacing': ['error', 'even'],
    'standard/no-callback-literal': ['error', ['cb', 'callback']],
    // Plugin import
    'import/no-unresolved': 2
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017
  }
}
