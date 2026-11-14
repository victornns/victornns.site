import { locales, type Locale } from "@/i18n/config";
import { getPagePath } from "@/i18n/routes";
import { getSectionHref, type SectionId } from "@/i18n/sections";

const LEGACY_PORTFOLIO_SEGMENT = "portfolio";

type LegacySectionId = SectionId | "projects";

/** Section slugs of the former single-page `/portfolio/<section>` routes. */
const legacySectionSlugs: Record<Locale, Record<LegacySectionId, string>> = {
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

/** Looks the slug up in `locale` first, then in the other locales, so a mislocalized URL still lands on the locale its slug belongs to. */
function findLegacySection(locale: Locale, slug: string) {
  const candidates = [locale, ...locales.filter((other) => other !== locale)];

  for (const candidate of candidates) {
    const slugs = legacySectionSlugs[candidate];
    const sectionId = (Object.keys(slugs) as LegacySectionId[]).find(
      (id) => slugs[id] === slug,
    );
    if (sectionId) {
      return { locale: candidate, sectionId };
    }
  }

  return undefined;
}

function getLegacySectionTarget(
  locale: Locale,
  sectionId: LegacySectionId,
  projectSlug?: string,
): string | undefined {
  if (sectionId === "projects") {
    const projectsPath = getPagePath(locale, "projects");
    return projectSlug ? `${projectsPath}/${projectSlug}` : projectsPath;
  }

  if (projectSlug) {
    return undefined;
  }

  return sectionId === "about"
    ? getPagePath(locale, "about")
    : getSectionHref(locale, sectionId);
}

/**
 * Maps a path from the former `/portfolio/...` routes (given as its segments
 * after any locale prefix) to its current location, e.g.
 * `/portfolio/tecnologias` -> `/sobre#tecnologias`,
 * `/en/portfolio/projects/foo` -> `/en/projects/foo`.
 * Returns `undefined` for anything that isn't a valid legacy path.
 */
export function getLegacyRedirectPath(
  locale: Locale,
  [root, sectionSlug, projectSlug, ...extra]: string[],
): string | undefined {
  if (root !== LEGACY_PORTFOLIO_SEGMENT || extra.length > 0) {
    return undefined;
  }

  if (!sectionSlug) {
    return getPagePath(locale, "about");
  }

  const match = findLegacySection(locale, sectionSlug);
  if (!match) {
    return undefined;
  }

  return getLegacySectionTarget(match.locale, match.sectionId, projectSlug);
}
