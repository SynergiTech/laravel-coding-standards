// Vue configuration without Vitest
// For Vue projects that don't use Vitest for testing
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import vueConfig from "@synergitech/eslint-config/vue";

export default tseslint.config(
  {
    ignores: ["node_modules", "dist", "build"],
  },
  ...vueConfig,
  prettierConfig
);