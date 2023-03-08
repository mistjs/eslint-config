module.exports = {
  extends: ['@vue/eslint-config-prettier', '@mistjs/eslint-config-vue'],
  rules: {
    'vue/one-component-per-file': 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 200,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
        singleAttributePerLine: true,
        vueIndentScriptAndStyle: true,
      },
      {
        usePrettierrc: false,
      },
    ],
  },
}
