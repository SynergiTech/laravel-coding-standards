# @synergitech/eslint-config

SynergiTech's shareable ESLint configuration with support for TypeScript, Vue, and Vitest.

## Installation

```bash
npm install --save-dev @synergitech/eslint-config
```

You'll also need to install the peer dependencies based on which features you want to use:

### For the complete configuration (recommended):

```bash
npm install --save-dev @eslint/js eslint-config-prettier eslint-plugin-import-x eslint-plugin-no-relative-import-paths eslint-plugin-unused-imports eslint-plugin-vitest eslint-plugin-vue globals typescript-eslint
```

### For base configuration only (no Vue, no Vitest):

```bash
npm install --save-dev @eslint/js eslint-config-prettier eslint-plugin-import-x eslint-plugin-no-relative-import-paths eslint-plugin-unused-imports globals typescript-eslint
```

## Usage

### Complete Configuration (Vue + TypeScript + Vitest)

For the full configuration with Vue and Vitest support (equivalent to the original configuration):

```javascript
// eslint.config.js
import config from "@synergitech/eslint-config";

export default config;
```

### Base Configuration Only (TypeScript without Vue/Vitest)

For projects that only need TypeScript support without Vue or Vitest:

```javascript
// eslint.config.js
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
```

### Vue Configuration without Vitest

For Vue projects that don't use Vitest for testing:

```javascript
// eslint.config.js
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
```

### TypeScript + Vitest without Vue

For TypeScript projects using Vitest but not Vue:

```javascript
// eslint.config.js
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
```

### Custom Configuration

You can also extend any of the configurations with your own rules:

```javascript
// eslint.config.js
import tseslint from "typescript-eslint";
import config from "@synergitech/eslint-config";

export default tseslint.config(...config, {
  rules: {
    // Your custom rules here
    "no-console": "warn", // Override the default "error"
  },
});
```

## What's Included

### Base Configuration

- ESLint recommended rules
- TypeScript ESLint recommended rules
- Import/export rules (import-x plugin)
- Unused imports cleanup
- No relative import paths enforcement
- Comprehensive JavaScript/TypeScript best practices

### Vue Configuration

- All base configuration rules
- Vue ESLint recommended rules
- Vue 3 Composition API best practices
- Custom Vue-specific rules for better code quality

### Vitest Configuration

- Vitest ESLint recommended rules
- Applied only to test files (`**/*.spec.{js,ts}`, `**/*.test.{js,ts}`)

## Rules Philosophy

This configuration follows these principles:

- **Strict but practical**: Enforces best practices while avoiding overly pedantic rules
- **Modern JavaScript/TypeScript**: Targets ES2021+ with modern syntax preferences
- **Import hygiene**: Maintains clean import/export statements
- **Vue best practices**: Follows Vue 3 Composition API recommendations
- **Test-friendly**: Provides appropriate rules for test files

## Contributing

This configuration is maintained by SynergiTech. If you have suggestions for improvements, please open an issue or pull request.

## Migration from Monolithic Config

If you're migrating from a large monolithic ESLint configuration (like the original 218-line `eslint.config.js`), you can now replace it with just 3 lines:

```javascript
// Before: 218 lines of configuration
// After: 3 lines using shareable config
import config from "@synergitech/eslint-config";

export default config;
```

This provides the exact same linting behaviour while being much more maintainable and reusable across projects.

See [MIGRATION.md](./MIGRATION.md) for detailed migration examples.
