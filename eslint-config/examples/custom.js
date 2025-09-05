// Custom configuration example
// Extending the complete config with custom rules
import tseslint from "typescript-eslint";
import config from "@synergitech/eslint-config";

export default tseslint.config(
  ...config,
  {
    rules: {
      // Your custom rules here
      "no-console": "warn", // Override the default "error"
      // Add any project-specific rules
    },
  }
);