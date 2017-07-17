module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  plugins: ["prettier", "node", "react"],
  rules: {
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "no-console": "warn",
    "no-unused-vars": [
      "error",
      {
        args: "none",
      },
    ],
    "no-var": "error",
    "node/no-unsupported-features": [
      "error",
      {
        ignores: ["modules"],
      },
    ],
    "prefer-const": "error",
    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleQuote: true,
      },
    ],
    "react/display-name": "off",
    "react/prop-types": "off",
    "unicode-bom": "error",
  },
};
