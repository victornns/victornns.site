import {
  getLocalizedPath,
  isValidLocale,
  locales,
  type Locale,
} from "@/i18n/config";
import {
  getPortfolioPath,
  getSectionIdFromSlug,
  getSectionPath,
  PORTFOLIO_SEGMENT,
} from "@/i18n/sections";

/** Internal folder name under `src/app/[locale]/` for the resume page. */
const RESUME_ROUTE_SEGMENT = "curriculo";

/** Public URL slug for the resume page in each locale. */
export const resumeSlugs: Record<Locale, string> = {
  pt: RESUME_ROUTE_SEGMENT,
  en: "resume",
};

/**
 * Maps a locale-specific external path segment to the internal route segment
 * (the folder name under `src/app/[locale]/`). Only needed when a locale uses
 * a different external name than the internal folder.
 */
export const routeAliases: Partial<Record<Locale, Record<string, string>>> = {
  en: {
    [resumeSlugs.en]: RESUME_ROUTE_SEGMENT,
  },
};

export function getResumePath(locale: Locale): string {
  return getLocalizedPath(locale, resumeSlugs[locale]);
}

function isResumeSlug(segment: string): boolean {
  return Object.values(resumeSlugs).includes(segment);
}

function translatePortfolioPath(
  sourceLocale: Locale,
  targetLocale: Locale,
  [sectionSlug, ...rest]: string[],
): string {
  if (!sectionSlug) {
    return getPortfolioPath(targetLocale);
  }

  const sectionId = getSectionIdFromSlug(sourceLocale, sectionSlug);
  if (!sectionId) {
    return getLocalizedPath(
      targetLocale,
      [PORTFOLIO_SEGMENT, sectionSlug, ...rest].join("/"),
    );
  }

  return getSectionPath(targetLocale, sectionId);
}

/**
 * Resolves the path that shows the same page as `pathname` in `targetLocale`.
 * Project slugs are dropped down to their section: a project URL is only ever
 * reachable while the project drawer is open, and that drawer carries its own
 * locale switch with the translated project slug.
 */
export function translatePathname(
  pathname: string,
  currentLocale: Locale,
  targetLocale: Locale,
): string {
  const segments = pathname.split("/").filter(Boolean);
  const hasLocalePrefix = isValidLocale(segments[0]);
  const sourceLocale = hasLocalePrefix
    ? (segments[0] as Locale)
    : currentLocale;
  const [root, ...rest] = hasLocalePrefix ? segments.slice(1) : segments;

  if (!root) {
    return getPortfolioPath(targetLocale);
  }

  if (root === PORTFOLIO_SEGMENT) {
    return translatePortfolioPath(sourceLocale, targetLocale, rest);
  }

  if (isResumeSlug(root)) {
    return getResumePath(targetLocale);
  }

  return getLocalizedPath(targetLocale, [root, ...rest].join("/"));
}

export function getLocaleSwitchHrefs(
  pathname: string,
  currentLocale: Locale,
): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((targetLocale) => [
      targetLocale,
      translatePathname(pathname, currentLocale, targetLocale),
    ]),
  ) as Record<Locale, string>;
}
