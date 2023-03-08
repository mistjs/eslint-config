module.exports = {
  extends: ['@mistjs/eslint-config-vue', '@vue/eslint-config-prettier'],
  rules: {
    'vue/one-component-per-file': 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 100,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        arrowParens: 'avoid',
        singleAttributePerLine: false,
        vueIndentScriptAndStyle: true
      },
      {
        usePrettierrc: false
      }
    ]
  }
}
