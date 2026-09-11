import { getLocalizedPath, getLocalizedUrl, type Locale } from "@/i18n/config";

/**
 * Stable internal section ids. These match the `id` set on each section's
 * DOM element (for scrolling) and are resolved from a locale's public URL
 * slug via `sectionSlugs` below, e.g. by the `[section]` route under
 * `src/app/[locale]/portfolio/`.
 */
export type SectionId =
  "about" | "stack" | "experience" | "projects" | "education";

export const PORTFOLIO_SEGMENT = "portfolio";

export const sectionOrder: SectionId[] = [
  "about",
  "stack",
  "experience",
  "projects",
  "education",
];

const sectionSlugs: Record<Locale, Record<SectionId, string>> = {
  pt: {
    about: "sobre",
    stack: "tecnologias",
    experience: "experiencia",
    projects: "projetos",
    education: "formacao",
  },
  en: {
    about: "about",
    stack: "stack",
    experience: "experience",
    projects: "projects",
    education: "education",
  },
};

export function getSectionSlug(locale: Locale, sectionId: SectionId): string {
  return sectionSlugs[locale][sectionId];
}

export function getSectionSlugs(locale: Locale): string[] {
  return Object.values(sectionSlugs[locale]);
}

export function getSectionIdFromSlug(
  locale: Locale,
  slug: string,
): SectionId | undefined {
  return sectionOrder.find(
    (sectionId) => sectionSlugs[locale][sectionId] === slug,
  );
}

export function getPortfolioPath(locale: Locale): string {
  return getLocalizedPath(locale, PORTFOLIO_SEGMENT);
}

export function getPortfolioUrl(locale: Locale): string {
  return getLocalizedUrl(locale, PORTFOLIO_SEGMENT);
}

export function getSectionPath(locale: Locale, sectionId: SectionId): string {
  return getLocalizedPath(
    locale,
    `${PORTFOLIO_SEGMENT}/${getSectionSlug(locale, sectionId)}`,
  );
}
