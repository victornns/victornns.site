import type { Locale } from "@/i18n/config";
import { getPagePath } from "@/i18n/routes";

/**
 * Stable internal ids for the sections of the About page. Each locale exposes
 * them through its own URL fragment (see `sectionFragments`), which is also
 * the `id` of the section's DOM element so native `#` navigation lands on it.
 */
export type SectionId = "about" | "stack" | "experience" | "education";

export const sectionOrder: SectionId[] = [
  "about",
  "stack",
  "experience",
  "education",
];

const sectionFragments: Record<Locale, Record<SectionId, string>> = {
  pt: {
    about: "sobre",
    stack: "tecnologias",
    experience: "experiencia",
    education: "formacao",
  },
  en: {
    about: "about",
    stack: "technologies",
    experience: "experience",
    education: "education",
  },
};

export function getSectionFragment(
  locale: Locale,
  sectionId: SectionId,
): string {
  return sectionFragments[locale][sectionId];
}

export function getSectionIdFromFragment(
  locale: Locale,
  fragment: string,
): SectionId | undefined {
  return sectionOrder.find(
    (sectionId) => sectionFragments[locale][sectionId] === fragment,
  );
}

export function getSectionHref(locale: Locale, sectionId: SectionId): string {
  return `${getPagePath(locale, "about")}#${getSectionFragment(locale, sectionId)}`;
}

/** Re-expresses a section `#fragment` in another locale; anything that isn't a known section fragment is dropped. */
export function translateSectionHash(
  hash: string,
  sourceLocale: Locale,
  targetLocale: Locale,
): string {
  const sectionId = getSectionIdFromFragment(sourceLocale, hash.slice(1));
  return sectionId ? `#${getSectionFragment(targetLocale, sectionId)}` : "";
}
