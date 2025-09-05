// Base configuration only (TypeScript without Vue/Vitest)
// For projects that only need TypeScript support
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import baseConfig from "@synergitech/eslint-config/base";

export default tseslint.config(
  {
    ignores: ["node_modules", "dist", "build"],
  },
  ...baseConfig,
  prettierConfig
);