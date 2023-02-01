module.exports = {
    extends: [
        "@mistjs/eslint-config-vue",
        "@vue/eslint-config-prettier"
    ],
    rules:{
        "prettier/prettier": [
            "warn",
            {
                "singleQuote": true,
                "semi": false,
                "printWidth": 200,
                "trailingComma": "none",
                "bracketSpacing": true,
                "jsxBracketSameLine": false,
                "arrowParens": "avoid"
            },
            {
                "usePrettierrc": false
            }
        ]
    }
}
