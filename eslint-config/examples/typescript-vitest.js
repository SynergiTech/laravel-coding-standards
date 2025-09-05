// TypeScript + Vitest without Vue
// For TypeScript projects using Vitest but not Vue
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import baseConfig from "@synergitech/eslint-config/base";
import vitestConfig from "@synergitech/eslint-config/vitest";

export default tseslint.config(
  {
    ignores: ["node_modules", "dist", "build"],
  },
  ...baseConfig,
  ...vitestConfig,
  prettierConfig
);
