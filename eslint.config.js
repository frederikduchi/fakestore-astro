import js from "@eslint/js";
import globals from "globals";
import astro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist/", ".astro/", "node_modules/"]),

  // Plain JavaScript files
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },

  // Astro files: parser, astro-specific rules and a processor that extracts
  // <script> tags into virtual files (e.g. Component.astro/0_0.js)
  ...astro.configs.recommended,

  // Apply the JS recommended rules to the Astro frontmatter and to the
  // JavaScript inside <script> tags
  {
    files: ["**/*.astro", "**/*.astro/*.js"],
    plugins: { js },
    extends: ["js/recommended"],
  },
]);
