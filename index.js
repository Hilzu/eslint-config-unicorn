module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:react/recommended"
  ],
  plugins: ["prettier", "node", "react"],
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2017
  },
  rules: {
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore"
      }
    ],
    "no-console": "warn",
    "no-unused-vars": [
      "error",
      {
        args: "none"
      }
    ],
    "no-var": "error",
    "prefer-const": "error",
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: false
      }
    ],
    "unicode-bom": "error",
    "react/prop-types": "off",
    "react/display-name": "off",
    "node/no-unsupported-features": [
      "error",
      {
        ignores: ["modules"]
      }
    ]
  }
};
