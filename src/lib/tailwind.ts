import { twMerge } from "tailwind-merge";

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
