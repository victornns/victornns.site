/** No-op tag so prettier-plugin-tailwindcss can sort classes in a string constant declared outside JSX. */
export const tw = (
  strings: TemplateStringsArray,
  ...values: unknown[]
): string => String.raw({ raw: strings }, ...values);

/** Joins conditional class names, dropping falsy values; also sorted by prettier-plugin-tailwindcss. */
export function joinClassNames(
  ...parts: Array<string | undefined | false>
): string {
  return parts.filter(Boolean).join(" ");
}
