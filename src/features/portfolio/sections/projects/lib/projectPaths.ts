import type { Project } from "@/content/projects";
import { locales, type Locale } from "@/i18n/config";
import { getPagePath } from "@/i18n/routes";

export function getProjectsPath(locale: Locale): string {
  return getPagePath(locale, "projects");
}

export function getProjectPathBySlug(locale: Locale, slug: string): string {
  return `${getProjectsPath(locale)}/${slug}`;
}

export function getProjectPath(locale: Locale, project: Project): string {
  return getProjectPathBySlug(locale, project.slugs[locale]);
}

/** Extracts the project slug from a pathname, e.g. `/projetos/foo` -> `"foo"`. Returns `null` outside a project page. */
export function getProjectSlugFromPath(
  locale: Locale,
  pathname: string,
): string | null {
  const projectsPath = getProjectsPath(locale);
  return pathname.startsWith(`${projectsPath}/`)
    ? pathname.slice(projectsPath.length + 1)
    : null;
}

/**
 * Builds the pt/en hrefs for the currently active project (or the bare
 * projects page when none is active), so the drawer's own locale switch
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
        : getProjectsPath(locale),
    ]),
  ) as Record<Locale, string>;
}
