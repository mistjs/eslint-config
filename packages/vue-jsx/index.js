module.exports = {
  extends: ['@mistjs/eslint-config-vue', '@vue/eslint-config-prettier'],
  rules: {
    'vue/one-component-per-file': 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 200,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
        singleAttributePerLine: true,
        vueIndentScriptAndStyle: true
      },
      {
        usePrettierrc: false
      }
    ]
  }
}
