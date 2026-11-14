import {
  getLocalizedPath,
  isValidLocale,
  locales,
  type Locale,
} from "@/i18n/config";
import { getPageIdFromSlug, getPagePath } from "@/i18n/routes";
import { translateSectionHash } from "@/i18n/sections";

/**
 * Resolves the path that shows the same page as `pathname` in `targetLocale`.
 * Project slugs are dropped down to the projects page: a project URL is only
 * ever reachable while the project drawer is open, and that drawer carries
 * its own locale switch with the translated project slug.
 */
export function translatePathname(
  pathname: string,
  targetLocale: Locale,
): string {
  const segments = pathname.split("/").filter(Boolean);
  const [root, ...rest] = isValidLocale(segments[0])
    ? segments.slice(1)
    : segments;

  if (!root) {
    return getPagePath(targetLocale, "about");
  }

  const pageId = getPageIdFromSlug(root);
  if (pageId) {
    return getPagePath(targetLocale, pageId);
  }

  return getLocalizedPath(targetLocale, [root, ...rest].join("/"));
}

/** Builds the pt/en hrefs for the current location, keeping an About section `#fragment` translated along. */
export function getLocaleSwitchHrefs(
  pathname: string,
  hash: string,
  currentLocale: Locale,
): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((targetLocale) => [
      targetLocale,
      translatePathname(pathname, targetLocale) +
        translateSectionHash(hash, currentLocale, targetLocale),
    ]),
  ) as Record<Locale, string>;
}
