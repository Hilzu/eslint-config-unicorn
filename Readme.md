eslint-config-unicorn
========================

## Install

```bash
yarn add --dev eslint eslint-config-unicorn eslint-plugin-node eslint-plugin-react eslint-plugin-prettier
```

## Use

Add to `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ."
  },
  "eslintConfig": {
    "extends": "unicorn"
  }
}
```

With this configuration you can run eslint using `yarn lint` and autofix code style using `yarn lint --fix`.

The included [Prettier ESLint plugin](https://github.com/prettier/eslint-plugin-prettier) reads it's configuration from your project from a [configuration file](https://github.com/prettier/prettier#configuration-file).

You should also add all your build artifacts to the `.eslintignore` file in the project root.
