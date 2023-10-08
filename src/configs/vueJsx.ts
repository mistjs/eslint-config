import { configPrettier, pluginPrettier } from '../plugins'
import type { FlatESLintConfigItem, OptionsIsInEditor, OptionsOverrides, OptionsStylistic } from '../types'
import { GLOB_VUE, GLOB_VUE_JSX, GLOB_VUE_TSX } from '../globs'

export function vueJsx(options: OptionsIsInEditor & OptionsStylistic & OptionsOverrides = {}): FlatESLintConfigItem[] {
  const {
    overrides = {},
  } = options
  const prettierConfig = configPrettier?.default ? configPrettier.default : configPrettier
  const pluginRules = {
    ...(pluginPrettier as any)?.configs?.recommended?.rules,
  }
  return [
    {
      name: 'mistjs:vue:jsx:setup',
      files: [
        GLOB_VUE_JSX,
        GLOB_VUE_TSX,
        GLOB_VUE,
      ],
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        ...prettierConfig.rules,
        ...pluginRules,
        'prettier/prettier': [
          'warn',
          {
            singleQuote: true,
            semi: false,
            printWidth: 80,
            trailingComma: 'none',
            proseWrap: 'never',
          },
        ],
        ...overrides,
      },
    },
  ]
}