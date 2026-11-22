import {
  PROJECT_CATEGORIES,
  PROJECT_TAGS,
} from "@/content/projects/classifications";
import { enProjectItems } from "@/content/projects/en";
import { ptProjectItems } from "@/content/projects/pt";
import type {
  Project,
  ProjectInput,
  ProjectsContent,
} from "@/content/projects/types";
import { locales, type Locale } from "@/i18n/config";

export type {
  ProjectCategory,
  ProjectTag,
} from "@/content/projects/classifications";
export type {
  Project,
  ProjectInput,
  ProjectsContent,
  ProjectsLabels,
  ProjectsListingLabels,
} from "@/content/projects/types";

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Resolves each project's public slug from its localized `title` (so pt items
 * get a pt slug, en items get an en slug). Manual slugs are respected as-is;
 * only real duplicates get an incremental suffix (e.g. `meu-projeto-2`),
 * keeping slugs unique within each locale.
 */
function resolveUniqueSlugs(items: ProjectInput[]): Map<string, string> {
  const usedSlugs = new Set<string>();
  const slugById = new Map<string, string>();

  for (const item of items) {
    const baseSlug = item.slug ?? slugify(item.title);
    let slug = baseSlug;
    let attempt = 2;

    while (usedSlugs.has(slug)) {
      slug = `${baseSlug}-${attempt}`;
      attempt += 1;
    }

    usedSlugs.add(slug);
    slugById.set(item.id, slug);
  }

  return slugById;
}

const itemsByLocale: Record<Locale, ProjectInput[]> = {
  pt: ptProjectItems,
  en: enProjectItems,
};

const slugsByLocale: Record<Locale, Map<string, string>> = {
  pt: resolveUniqueSlugs(ptProjectItems),
  en: resolveUniqueSlugs(enProjectItems),
};

function getSlugs(id: string): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((locale) => {
      const slug = slugsByLocale[locale].get(id);
      if (!slug) {
        throw new Error(
          `Project "${id}" is missing from the "${locale}" items.`,
        );
      }
      return [locale, slug];
    }),
  ) as Record<Locale, string>;
}

function buildProjects(locale: Locale): Project[] {
  return itemsByLocale[locale].map((item) => {
    const slugs = getSlugs(item.id);
    return { ...item, slug: slugs[locale], slugs };
  });
}

function getLocalizedLabels<Id extends string>(
  labels: Record<Id, Record<Locale, string>>,
  locale: Locale,
): Record<Id, string> {
  return Object.fromEntries(
    (Object.keys(labels) as Id[]).map((id) => [id, labels[id][locale]]),
  ) as Record<Id, string>;
}

export const projectsContent: Record<Locale, ProjectsContent> = {
  pt: {
    title: "Projetos",
    description:
      "Seleção de blogs, websites, campanhas, CMS e soluções web desenvolvidas",
    hero: {
      description:
        "Websites, landing pages e aplicações web para marcas, bancos e produtos digitais.",
    },
    labels: {
      viewProject: "Ver projeto",
      aboutProject: "Sobre o projeto",
      nextProject: "Proximo projeto",
      previousProject: "Projeto anterior",
      preview: "Preview",
      projectDetails: "Detalhes do projeto",
      stack: "Stack",
      design: "Design",
    },
    listing: {
      title: "Todos os projetos",
      categories: "Categorias",
      allCategories: "Todos",
      tags: "Filtrar por tags",
      showing: "Exibindo",
      clearFilters: "Limpar filtros",
      noResults: "Nenhum projeto encontrado com os filtros selecionados.",
    },
    categoryLabels: getLocalizedLabels(PROJECT_CATEGORIES, "pt"),
    tagLabels: getLocalizedLabels(PROJECT_TAGS, "pt"),
    items: buildProjects("pt"),
  },
  en: {
    title: "Projects",
    description:
      "Selection of blogs, websites, campaigns, CMS and web solutions developed",
    hero: {
      description:
        "Websites, landing pages and web applications for brands, banks and digital products.",
    },
    labels: {
      viewProject: "View project",
      aboutProject: "About the project",
      nextProject: "Next project",
      previousProject: "Previous project",
      preview: "Preview",
      projectDetails: "Project details",
      stack: "Stack",
      design: "Design",
    },
    listing: {
      title: "All projects",
      categories: "Categories",
      allCategories: "All",
      tags: "Filter by tags",
      showing: "Showing",
      clearFilters: "Clear filters",
      noResults: "No projects match the selected filters.",
    },
    categoryLabels: getLocalizedLabels(PROJECT_CATEGORIES, "en"),
    tagLabels: getLocalizedLabels(PROJECT_TAGS, "en"),
    items: buildProjects("en"),
  },
};
