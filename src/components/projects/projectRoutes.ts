import { getLocalizedPath, type Locale } from "@/i18n/config";
import { getSectionSlug } from "@/components/navbar";

import type { Project } from "@/content/projects";

/**
 * The project's `id` doubles as its public URL slug: it's already a unique,
 * kebab-case identifier shared across locales, so no separate slug field is
 * needed to build friendly, localized project URLs.
 */
export function getProjectSlug(project: Project): string {
  return project.id;
}

export function getProjectsSectionPath(locale: Locale): string {
  return getLocalizedPath(
    locale,
    `portfolio/${getSectionSlug(locale, "projects")}`,
  );
}

export function getProjectPath(locale: Locale, project: Project): string {
  return `${getProjectsSectionPath(locale)}/${getProjectSlug(project)}`;
}

export function getProjectBySlug(
  projects: Project[],
  slug: string,
): Project | undefined {
  return projects.find((project) => getProjectSlug(project) === slug);
}
