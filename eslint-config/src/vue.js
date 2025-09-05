import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import baseConfig from "./base.js";

/**
 * Vue ESLint configuration that extends the base config
 * Includes Vue-specific rules and parser configuration
 */
export default tseslint.config(
  ...baseConfig,
  ...pluginVue.configs["flat/recommended"],
  {
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".vue"],
        sourceType: "module",
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      "vue/no-console": "error",
      "vue/multi-word-component-names": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/require-default-prop": "off",
      "vue/no-v-html": "off",
      "vue/no-undef-components": [
        "error",
        {
          ignorePatterns: ["ais-(.+)"],
        },
      ],
      "vue/attribute-hyphenation": [
        "error",
        "always",
        {
          // Annoyingly in Inertia links these aren't props and don't work if they've been
          // hyphenated so I'm putting them on the ignore list so that `lint --fix`
          // doesn't keep 'fixing' them.
          ignore: [
            "onCancelToken",
            "onBefore",
            "onStart",
            "onProgress",
            "onFinish",
            "onCancel",
            "onSuccess",
          ],
        },
      ],
      "vue/html-self-closing": ["off", { html: { void: "always" } }],
      "vue/block-order": [
        "error",
        {
          order: ["template", "script[setup]", "script:not([setup])", "style"],
        },
      ],
      "vue/define-props-declaration": "error",
      "vue/prefer-true-attribute-shorthand": "error",
      "vue/prefer-use-template-ref": "error",
      "vue/no-setup-props-reactivity-loss": "error",
      "vue/no-ref-object-reactivity-loss": "error",
      "vue/no-import-compiler-macros": "error",
      "vue/no-duplicate-attr-inheritance": "error",
      "vue/next-tick-style": "error",
      "vue/html-button-has-type": "error",
      "vue/define-macros-order": [
        "error",
        {
          order: [
            "defineOptions",
            "defineEmits",
            "defineProps",
            "defineSlots",
            "defineExpose",
          ],
        },
      ],
      // Handled with our Prettier config.
      "vue/html-indent": 0,
    },
  }
);