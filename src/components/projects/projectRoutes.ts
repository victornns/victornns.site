import { getLocalizedPath, type Locale } from "@/i18n/config";
import { getSectionSlug } from "@/components/navbar/navigation";
import { getContent } from "@/content";

import type { Project } from "@/content/projects";

export function getProjectsSectionPath(locale: Locale): string {
  return getLocalizedPath(
    locale,
    `portfolio/${getSectionSlug(locale, "projects")}`,
  );
}

export function getProjectPath(locale: Locale, project: Project): string {
  return `${getProjectsSectionPath(locale)}/${project.slug}`;
}

export function getProjectBySlug(
  projects: Project[],
  slug: string,
): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Resolves the same project's slug in another locale, matched by its stable
 * `id` (slugs themselves are derived per-locale from the title and can
 * differ). Returns `undefined` when the slug or its counterpart can't be
 * resolved, so callers can fall back to a safe URL.
 */
export function getTranslatedProjectSlug(
  sourceLocale: Locale,
  targetLocale: Locale,
  slug: string,
): string | undefined {
  const sourceProject = getProjectBySlug(
    getContent(sourceLocale).projects.items,
    slug,
  );
  if (!sourceProject) {
    return undefined;
  }

  const targetProject = getContent(targetLocale).projects.items.find(
    (project) => project.id === sourceProject.id,
  );

  return targetProject?.slug;
}

export function getProjectIndex(
  projects: Project[],
  id: Project["id"],
): number {
  return projects.findIndex((project) => project.id === id);
}

export function getAdjacentProject(
  projects: Project[],
  currentId: Project["id"],
  direction: "previous" | "next",
): Project | undefined {
  const currentIndex = getProjectIndex(projects, currentId);
  if (currentIndex === -1) {
    return undefined;
  }

  const offset = direction === "next" ? 1 : -1;
  const nextIndex = (currentIndex + offset + projects.length) % projects.length;

  return projects[nextIndex];
}
