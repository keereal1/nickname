import globals from "globals";
import pluginJs from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node, ...jestPlugin.environments.globals.globals} }},
  pluginJs.configs.recommended,
  {ignores: ['dist/', 'coverage/']}
];
