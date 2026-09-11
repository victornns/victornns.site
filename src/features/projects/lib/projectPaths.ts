import type { Project } from "@/content/projects";
import { locales, type Locale } from "@/i18n/config";
import { getSectionPath } from "@/i18n/sections";

export function getProjectsSectionPath(locale: Locale): string {
  return getSectionPath(locale, "projects");
}

export function getProjectPathBySlug(locale: Locale, slug: string): string {
  return `${getProjectsSectionPath(locale)}/${slug}`;
}

export function getProjectPath(locale: Locale, project: Project): string {
  return getProjectPathBySlug(locale, project.slugs[locale]);
}

/** Extracts the project slug from a portfolio pathname, e.g. `/projetos/foo` -> `"foo"`. Returns `null` outside the projects section. */
export function getProjectSlugFromPath(
  locale: Locale,
  pathname: string,
): string | null {
  const sectionPath = getProjectsSectionPath(locale);
  return pathname.startsWith(`${sectionPath}/`)
    ? pathname.slice(sectionPath.length + 1)
    : null;
}

/**
 * Builds the pt/en hrefs for the currently active project (or the bare
 * projects section when none is active), so the drawer's own locale switch
 * keeps pointing at the same project.
 */
export function getProjectLocaleLinks(
  activeProject: Project | null,
): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((locale) => [
      locale,
      activeProject
        ? getProjectPath(locale, activeProject)
        : getProjectsSectionPath(locale),
    ]),
  ) as Record<Locale, string>;
}
