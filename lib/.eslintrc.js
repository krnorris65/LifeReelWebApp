module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "commonjs": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "warn",
            "never"
        ],
        "no-undef": 0,
        "no-console": 0,
        "no-debugger": 0,
        "no-unused-vars": 0
    }
};