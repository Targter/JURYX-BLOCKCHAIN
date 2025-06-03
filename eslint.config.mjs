import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { globals } from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  globals,

  // Custom ignores
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "src/generated/**", // This excludes Prisma generated files
    ],
  },

  // Optional: If you need specific rules for other files
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Your custom rules here
    },
  },
];

export default eslintConfig;
