module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'semi': "off",
    'require-jsdoc': "off",
    'operator-linebreak': "off",
    'arrow-parens': "off",
    'no-debugger': "off",
    'max-len': "off",
    'object-curly-spacing': "off",
  },
  extends: ['eslint:recommended', 'google'],
}
