import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    // The foundation layer: no UI, no feature composition, no routes.
    files: ["src/lib/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "@/components",
                "@/components/**",
                "@/views",
                "@/views/**",
                "@/app",
                "@/app/**",
              ],
              message:
                "src/lib is the foundation layer and must not depend on components, views, or routes.",
            },
          ],
        },
      ],
    },
  },
  {
    // Components compose into views and routes, never the other way around.
    files: ["src/components/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/views", "@/views/**", "@/app", "@/app/**"],
              message:
                "src/components must not depend on views or routes — views compose components, not the other way around.",
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
