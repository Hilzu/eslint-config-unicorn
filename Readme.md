eslint-config-unicorn
========================

## Install

```bash
yarn add --dev eslint eslint-config-airbnb eslint-config-prettier eslint-config-unicorn
# Install correct versions of airbnb config peer dependencies (requires jq)
yarn info eslint-config-airbnb peerDependencies --json | jq -r '.data | to_entries | map("\(.key)@\(.value)") | join(" ")' | xargs yarn add --dev
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

This configuration disables all style rules so you should use (Prettier)[https://prettier.io/] to format your code. You can configure Prettier using a (configuration file)[https://github.com/prettier/prettier#configuration-file].

You should also add all your build artifacts to the `.eslintignore` file in the project root.
