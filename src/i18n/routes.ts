import {
  defaultLocale,
  getLocalizedPath,
  getLocalizedUrl,
  localeToHtmlLang,
  locales,
  type Locale,
} from "@/i18n/config";

import type { Metadata } from "next";

export type PageId = "about" | "projects" | "resume";

/** Internal folder name of each page under `src/app/[locale]/`. */
const pageRouteSegments: Record<PageId, string> = {
  about: "sobre",
  projects: "projetos",
  resume: "curriculo",
};

/** Public URL slug of each page in each locale. */
const pageSlugs: Record<Locale, Record<PageId, string>> = {
  pt: {
    about: "sobre",
    projects: "projetos",
    resume: "curriculo",
  },
  en: {
    about: "about",
    projects: "projects",
    resume: "resume",
  },
};

const pageIds = Object.keys(pageRouteSegments) as PageId[];

function getLocaleRouteAliases(locale: Locale): Record<string, string> {
  return Object.fromEntries(
    pageIds
      .filter(
        (pageId) => pageSlugs[locale][pageId] !== pageRouteSegments[pageId],
      )
      .map((pageId) => [pageSlugs[locale][pageId], pageRouteSegments[pageId]]),
  );
}

/**
 * Maps a locale-specific external path segment to the internal route segment
 * (the folder name under `src/app/[locale]/`). Only lists the slugs that
 * differ from the internal folder.
 */
export const routeAliases: Partial<Record<Locale, Record<string, string>>> =
  Object.fromEntries(
    locales.map((locale) => [locale, getLocaleRouteAliases(locale)]),
  );

export function getPagePath(locale: Locale, pageId: PageId): string {
  return getLocalizedPath(locale, pageSlugs[locale][pageId]);
}

export function getPageUrl(locale: Locale, pageId: PageId): string {
  return getLocalizedUrl(locale, pageSlugs[locale][pageId]);
}

/** Resolves a page from its public slug in any locale. */
export function getPageIdFromSlug(slug: string): PageId | undefined {
  return pageIds.find((pageId) =>
    locales.some((locale) => pageSlugs[locale][pageId] === slug),
  );
}

/** Canonical and hreflang alternates for a page available at `pathByLocale`. */
export function getAlternates(
  locale: Locale,
  pathByLocale: Record<Locale, string>,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: pathByLocale[locale],
    languages: {
      ...Object.fromEntries(
        locales.map((target) => [
          localeToHtmlLang[target],
          pathByLocale[target],
        ]),
      ),
      "x-default": pathByLocale[defaultLocale],
    },
  };
}

export function getPageAlternates(
  locale: Locale,
  pageId: PageId,
): NonNullable<Metadata["alternates"]> {
  return getAlternates(
    locale,
    Object.fromEntries(
      locales.map((target) => [target, getPagePath(target, pageId)]),
    ) as Record<Locale, string>,
  );
}
