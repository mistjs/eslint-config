# @mistjs/eslint-config

[![npm](https://img.shields.io/npm/v/@mistjs/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@mistjs/eslint-config)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- TypeScript, Vue, React out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint @mistjs/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@mistjs"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Fork

This repo is forked from [antfu-eslint-config].


## License

MIT
