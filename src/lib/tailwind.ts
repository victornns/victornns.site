import { extendTailwindMerge, validators } from "tailwind-merge";

// tailwind-merge v3 follows Tailwind v4, where a bare `outline` sets the
// width. In Tailwind v3 (used here) it sets `outline-style: solid`, so it
// would otherwise be dropped as conflicting with e.g. `outline-2`.
const twMerge = extendTailwindMerge({
  override: {
    classGroups: {
      "outline-w": [
        {
          outline: [
            validators.isNumber,
            validators.isArbitraryVariableLength,
            validators.isArbitraryLength,
          ],
        },
      ],
    },
  },
  extend: {
    classGroups: { "outline-style": ["outline"] },
  },
});

/** No-op tag so prettier-plugin-tailwindcss can sort classes in a string constant declared outside JSX. */
export const tw = (
  strings: TemplateStringsArray,
  ...values: unknown[]
): string => String.raw({ raw: strings }, ...values);

/** Joins conditional class names, dropping falsy values and resolving conflicting Tailwind utilities so the last one wins instead of both being emitted. */
export function joinClassNames(
  ...parts: Array<string | undefined | false>
): string {
  return twMerge(...parts);
}
