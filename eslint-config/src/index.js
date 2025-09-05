import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import vueConfig from "./vue.js";
import vitestConfig from "./vitest.js";

/**
 * Complete ESLint configuration including Vue and Vitest support
 * This is the default export that provides the full configuration
 * equivalent to the original eslint.config.js
 */
export default tseslint.config(
  {
    ignores: [
      ".docker",
      ".docker-contents",
      ".github",
      "app",
      "bootstrap",
      "build",
      "config",
      "database",
      "lang",
      "node_modules",
      "public",
      "resources/css",
      "resources/certificates",
      "resources/js/routes",
      "resources/js/actions",
      "resources/js/wayfinder",
      "resources/views",
      "routes",
      "settings",
      "storage",
      "tests/Feature",
      "tests/Unit",
      "vendor",
    ],
  },
  ...vueConfig,
  ...vitestConfig,
  prettierConfig
);