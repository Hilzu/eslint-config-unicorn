eslint-config-unicorn
========================

## Install

```bash
yarn add --dev eslint eslint-config-unicorn eslint-plugin-node eslint-plugin-react eslint-plugin-prettier
yarn add --dev --exact prettier
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

With this configuration you can run eslint using `yarn lint` and autofix code style using `yarn lint -- --fix`.

You should also add all your build artifacts to the `.eslintignore` file in the project root.
