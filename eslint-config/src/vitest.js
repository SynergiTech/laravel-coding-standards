import tseslint from "typescript-eslint";
import pluginVitest from "eslint-plugin-vitest";

/**
 * Vitest ESLint configuration for test files
 * Can be combined with base or vue configs
 */
export default tseslint.config({
  files: ["**/*.spec.{js,ts}", "**/*.test.{js,ts}"],
  plugins: {
    vitest: pluginVitest,
  },
  rules: {
    ...pluginVitest.configs.recommended.rules,
  },
});