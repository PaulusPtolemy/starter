module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "plugin:@intlify/vue-i18n/recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "@intlify/vue-i18n/no-raw-text": "error",
  },
  overrides: [
    //
  ],

  settings: {
    "vue-i18n": {
      localeDir: "./path/to/locales/*.{json,json5,yaml,yml}", // extension is glob formatting!
    },
  },
};
