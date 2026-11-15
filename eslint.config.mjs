import { readdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

function restrictImports(files, groups, message) {
  return {
    files,
    rules: {
      "@typescript-eslint/no-restricted-imports": [
        "error",
        { patterns: [{ group: groups, message }] },
      ],
    },
  };
}

const appGroup = ["@/app", "@/app/**"];
const featuresGroup = ["@/features", "@/features/**"];
const componentsGroup = ["@/components", "@/components/**"];
const contentGroup = ["@/content", "@/content/**"];
const i18nGroup = ["@/i18n", "@/i18n/**"];

const featureNames = readdirSync(join(__dirname, "src/features"), {
  withFileTypes: true,
})
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

/** Each feature may only import its own subtree under `src/features`, never a sibling's. */
const featureIsolationZones = featureNames.map((name) => ({
  target: `./src/features/${name}`,
  from: "./src/features",
  except: [`./${name}`],
}));

const aboutSectionNames = readdirSync(
  join(__dirname, "src/features/portfolio/about/sections"),
  { withFileTypes: true },
)
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

/**
 * Within `portfolio`, each About section, the projects area and the navbar
 * may not import each other directly — anything they need to share belongs in
 * `portfolio/ui` instead.
 */
const portfolioSectionIsolationZones = [
  ...aboutSectionNames.map((name) => ({
    target: `./src/features/portfolio/about/sections/${name}`,
    from: "./src/features/portfolio",
    except: [`./about/sections/${name}`, "./ui"],
  })),
  {
    target: "./src/features/portfolio/projects",
    from: "./src/features/portfolio",
    except: ["./projects", "./ui"],
  },
];

const portfolioNavbarIsolationZone = {
  target: "./src/features/portfolio/navbar",
  from: "./src/features/portfolio",
  except: ["./navbar", "./ui"],
};

/** portfolio/ui is portfolio's shared layer — it must not depend on its sections, projects or navbar. */
const portfolioUiIsolationZone = {
  target: "./src/features/portfolio/ui",
  from: "./src/features/portfolio",
  except: ["./ui"],
};

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "type",
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
  restrictImports(
    ["src/lib/**/*.{ts,tsx}"],
    [
      ...i18nGroup,
      ...contentGroup,
      ...componentsGroup,
      ...featuresGroup,
      ...appGroup,
    ],
    "src/lib is the innermost foundation layer and must not depend on i18n, content, components, features, or routes.",
  ),
  restrictImports(
    ["src/i18n/**/*.{ts,tsx}"],
    [...contentGroup, ...componentsGroup, ...featuresGroup, ...appGroup],
    "src/i18n sits above src/lib and must not depend on content, components, features, or routes.",
  ),
  restrictImports(
    ["src/content/**/*.{ts,tsx}"],
    [...componentsGroup, ...featuresGroup, ...appGroup],
    "src/content holds data and must not depend on components, features, or routes.",
  ),
  restrictImports(
    ["src/components/**/*.{ts,tsx}"],
    [...featuresGroup, ...appGroup],
    "src/components is shared UI and must not depend on features or routes.",
  ),
  restrictImports(
    ["src/features/**/*.{ts,tsx}"],
    appGroup,
    "src/features must not depend on routes — routes compose features, not the other way around.",
  ),
  {
    files: ["src/features/**/*.{ts,tsx}"],
    rules: {
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            ...featureIsolationZones.map((zone) => ({
              ...zone,
              message:
                "A feature must not import another feature directly — coordinate them from app instead.",
            })),
            ...portfolioSectionIsolationZones.map((zone) => ({
              ...zone,
              message:
                "A portfolio section or the projects area must not import another section, the projects area or the navbar directly — share through portfolio/ui instead.",
            })),
            {
              ...portfolioNavbarIsolationZone,
              message:
                "The navbar must not import portfolio sections or projects directly — share through portfolio/ui instead.",
            },
            {
              ...portfolioUiIsolationZone,
              message:
                "portfolio/ui is portfolio's shared layer and must not depend on its sections, projects or navbar.",
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
