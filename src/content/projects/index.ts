import { enProjectItems } from "@/content/projects/en";
import { ptProjectItems } from "@/content/projects/pt";
import type {
  Project,
  ProjectInput,
  ProjectsContent,
} from "@/content/projects/types";
import { locales, type Locale } from "@/i18n/config";

export type {
  Project,
  ProjectInput,
  ProjectKind,
  ProjectsContent,
  ProjectsLabels,
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

export const projectsContent: Record<Locale, ProjectsContent> = {
  pt: {
    title: "Projetos",
    description:
      "Seleção de blogs, websites, campanhas, CMS e soluções web desenvolvidas",
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
    items: buildProjects("pt"),
  },
  en: {
    title: "Projects",
    description:
      "Selection of blogs, websites, campaigns, CMS and web solutions developed",
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
    items: buildProjects("en"),
  },
};
