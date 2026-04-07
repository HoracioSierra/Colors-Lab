const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    files: ["jss/code.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        ...globals.browser,
        md5: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "off",
      "no-dupe-keys": "off"
    }
  }
];
