export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const localeToHtmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en-US",
};

export const SITE_URL = "https://www.victornns.com";

export function isValidLocale(value: string | undefined): value is Locale {
  return (locales as readonly string[]).includes(value ?? "");
}

export function getLocale(value?: string | null): Locale {
  return value && isValidLocale(value) ? value : defaultLocale;
}

/**
 * Builds a public, locale-aware path for a given external slug. The default
 * locale (pt) has no URL prefix; other locales (e.g. en) are prefixed, e.g.
 * `getLocalizedPath("pt", "projetos")` -> "/projetos",
 * `getLocalizedPath("en", "projects")` -> "/en/projects".
 */
export function getLocalizedPath(locale: Locale, slug: string): string {
  return locale === defaultLocale ? `/${slug}` : `/${locale}/${slug}`;
}

export function getLocalizedUrl(locale: Locale, slug: string): string {
  return `${SITE_URL}${getLocalizedPath(locale, slug)}`;
}
