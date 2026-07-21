export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const localeToHtmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en-US",
};

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocale(value?: string | null): Locale {
  return value && isValidLocale(value) ? value : defaultLocale;
}
