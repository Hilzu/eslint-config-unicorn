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
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2017,
    sourceType: "module",
  },
  plugins: ["prettier", "node", "react"],
  rules: {
    "array-callback-return": "error",
    curly: "error",
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "for-direction": "error",
    "getter-return": "error",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "no-await-in-loop": "error",
    "no-buffer-constructor": "error",
    "no-console": "warn",
    "no-duplicate-imports": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-path-concat": "error",
    "no-script-url": "error",
    "no-sync": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-use-before-define": "error",
    "no-useless-computed-key": "error",
    "no-var": "error",
    "node/no-unsupported-features": [
      "error",
      {
        ignores: ["modules"],
      },
    ],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
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
