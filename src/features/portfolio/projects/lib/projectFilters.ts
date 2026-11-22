import type { Project, ProjectCategory, ProjectTag } from "@/content/projects";
import {
  FILTERABLE_TAGS,
  PROJECT_CATEGORIES,
} from "@/content/projects/classifications";

const CATEGORY_PARAM = "category";
const TAGS_PARAM = "tags";
const TAGS_SEPARATOR = ",";

export const ALL_CATEGORIES = "all";

export type ProjectFilters = {
  category: ProjectCategory | typeof ALL_CATEGORIES;
  tags: ProjectTag[];
};

export const DEFAULT_PROJECT_FILTERS: ProjectFilters = {
  category: ALL_CATEGORIES,
  tags: [],
};

export type ProjectFilterOption<Id extends string> = {
  id: Id;
  label: string;
};

export type ProjectCategoryOption = ProjectFilterOption<ProjectCategory> & {
  /** Projects in this category, regardless of the selected tags. */
  count: number;
};

export type ProjectFilterOptions = {
  categories: ProjectCategoryOption[];
  tags: ProjectFilterOption<ProjectTag>[];
};

function isOffered<Id extends string>(
  options: ProjectFilterOption<Id>[],
  value: string | null,
): value is Id {
  return options.some((option) => option.id === value);
}

/** Offers only the categories and filterable tags at least one project has, so no option leads to an empty list. */
export function getProjectFilterOptions(
  projects: Project[],
  categoryLabels: Record<ProjectCategory, string>,
  tagLabels: Record<ProjectTag, string>,
): ProjectFilterOptions {
  const categories = (Object.keys(PROJECT_CATEGORIES) as ProjectCategory[])
    .map((id) => ({
      id,
      label: categoryLabels[id],
      count: projects.filter((project) => project.category === id).length,
    }))
    .filter((category) => category.count > 0);
  const tags = FILTERABLE_TAGS.filter((tag) =>
    projects.some((project) => project.tags.includes(tag)),
  );

  return {
    categories,
    tags: tags.map((id) => ({ id, label: tagLabels[id] })),
  };
}

/** Reads the filters from the URL query, ignoring any value that isn't an offered option. */
export function parseProjectFilters(
  searchParams: URLSearchParams,
  options: ProjectFilterOptions,
): ProjectFilters {
  const category = searchParams.get(CATEGORY_PARAM);
  const tags = searchParams.get(TAGS_PARAM)?.split(TAGS_SEPARATOR) ?? [];

  return {
    category: isOffered(options.categories, category)
      ? category
      : ALL_CATEGORIES,
    tags: [...new Set(tags)].filter((tag) => isOffered(options.tags, tag)),
  };
}

/**
 * Builds the URL query for `filters`, keeping any unrelated params from
 * `currentSearchParams`. Commas are left unescaped so the query stays
 * readable, e.g. `?category=website&tags=cms,react`.
 */
export function getProjectFiltersSearch(
  filters: ProjectFilters,
  currentSearchParams: URLSearchParams,
): string {
  const searchParams = new URLSearchParams(currentSearchParams);
  searchParams.delete(CATEGORY_PARAM);
  searchParams.delete(TAGS_PARAM);

  if (filters.category !== ALL_CATEGORIES) {
    searchParams.set(CATEGORY_PARAM, filters.category);
  }
  if (filters.tags.length > 0) {
    searchParams.set(TAGS_PARAM, filters.tags.join(TAGS_SEPARATOR));
  }

  const query = searchParams.toString().replace(/%2C/g, TAGS_SEPARATOR);
  return query ? `?${query}` : "";
}

export function hasActiveProjectFilters(filters: ProjectFilters): boolean {
  return filters.category !== ALL_CATEGORIES || filters.tags.length > 0;
}

function matchesProjectFilters(
  project: Project,
  filters: ProjectFilters,
): boolean {
  const isInCategory =
    filters.category === ALL_CATEGORIES ||
    project.category === filters.category;
  const hasEverySelectedTag = filters.tags.every((tag) =>
    project.tags.includes(tag),
  );

  return isInCategory && hasEverySelectedTag;
}

export function filterProjects(
  projects: Project[],
  filters: ProjectFilters,
): Project[] {
  return projects.filter((project) => matchesProjectFilters(project, filters));
}
