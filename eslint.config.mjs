// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    "rules": {
      "@typescript-eslint/no-unused-vars": "warn",
      "no-empty": "warn",
      "no-unused-private-class-members": "warn",
      "@typescript-eslint/no-unsafe-declaration-merging": "off"
    }
  }
);