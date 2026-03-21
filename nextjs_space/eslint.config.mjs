import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      ".build/**",
      "node_modules/**",
      "out/**",
      "dist/**",
      "i18n/**",
    ],
  },
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Relax rules for easier content editing
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
      "prefer-const": "warn",
    },
  },
];

export default eslintConfig;
