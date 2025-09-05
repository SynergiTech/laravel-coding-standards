import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginNoRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import pluginImportX from "eslint-plugin-import-x";
import globals from "globals";

/**
 * Base ESLint configuration with TypeScript support
 * Includes core JS/TS rules without Vue or Vitest
 */
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 13,
      sourceType: "module",
      globals: {
        ...globals.browser,
        es2021: true,
        App: "writable",
      },
      parserOptions: {
        parser: tseslint.parser,
        sourceType: "module",
      },
    },
    plugins: {
      "import-x": pluginImportX,
      "unused-imports": pluginUnusedImports,
      "no-relative-import-paths": pluginNoRelativeImportPaths,
    },
    rules: {
      "no-console": "error",
      "no-var": "error",
      // Disable the base rule as it can report incorrect errors
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          caughtErrors: "none",
          args: "none",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      // Allow unused expressions for callback patterns
      "@typescript-eslint/no-unused-expressions": "off",
      "unused-imports/no-unused-imports": "error",
      "no-relative-import-paths/no-relative-import-paths": "error",
      "import-x/extensions": ["error", "ignorePackages"],
      "import-x/no-useless-path-segments": "error",
      "import-x/first": "error",
      "import-x/newline-after-import": "error",
      "import-x/order": "error",
      "array-callback-return": "error",
      "no-constructor-return": "error",
      "no-duplicate-imports": "error",
      "no-inner-declarations": "error",
      "no-promise-executor-return": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unreachable-loop": "error",
      // Would be nice, but tends to be a little chaotic.
      // "no-use-before-define": "error",
      // Not working
      // "no-useless-assignment": "error",
      "require-atomic-updates": "error",
      "default-case-last": "error",
      "default-param-last": "error",
      "dot-notation": "error",
      eqeqeq: "error",
      "grouped-accessor-pairs": "error",
      "no-array-constructor": "error",
      "no-caller": "error",
      "no-else-return": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-multi-assign": "error",
      "no-nested-ternary": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-object-constructor": "error",
      // Maybe?
      // "no-param-reassign": "error",
      "no-return-assign": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-undef-init": "error",
      "no-unneeded-ternary": "error",
      "no-unused-expressions": "error",
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-return": "error",
      // Controversial...
      "object-shorthand": "error",
      "one-var": ["error", "never"],
      // Might annoy some people.
      // "operator-assignment": "error",
      "prefer-const": "error",
      "prefer-exponentiation-operator": "error",
      "prefer-object-has-own": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-rest-params": "error",
      "prefer-template": "error",
      "require-await": "error",
      yoda: "error",
    },
  },
  // Typescript generation (rightly) generates any types for many scenarios.
  // It's not ideal, but there's not too much we can do.
  {
    files: ["**/types/generated.d.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  }
);
