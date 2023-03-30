module.exports = {
  extends: ['@mistjs/eslint-config-vue', '@vue/eslint-config-prettier'],
  rules: {
    'vue/one-component-per-file': 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 80,
        trailingComma: 'none',
        proseWrap: 'never'
      },
      {
        usePrettierrc: false
      }
    ]
  }
}
