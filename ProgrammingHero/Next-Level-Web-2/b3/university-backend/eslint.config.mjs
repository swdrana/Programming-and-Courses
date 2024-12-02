// eslint.config.mjs
import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "no-unused-expressions": "error",
      // "no-const":"error"
      "no-console": "warn",
      "no-undef": "error",
    },
    globals: {
      process: "readonly",
    },
  },
  {
    ignores: [".node_modules/*"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
