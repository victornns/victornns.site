import type { OrganizationId } from "@/content/organizations";
import type {
  ProjectCategory,
  ProjectTag,
} from "@/content/projects/classifications";
import type { Locale } from "@/i18n/config";

export type Project = {
  id: string;
  /** Public slug in this locale. */
  slug: string;
  /** Public slug in every locale, matched by the stable `id`. */
  slugs: Record<Locale, string>;
  title: string;
  organizationId?: OrganizationId;
  date: string;
  links?: {
    official?: {
      url: string;
      expired?: boolean;
    };
    preview?: {
      url: string;
    };
  };
  summary: string[];
  technologies?: string[];
  category: ProjectCategory;
  tags: ProjectTag[];
  featured?: boolean;
  highlight?: boolean;
};

/** Raw project entry: slugs are resolved (with dedupe) from the localized title unless set manually. */
export type ProjectInput = Omit<Project, "slug" | "slugs"> & { slug?: string };

export type ProjectsLabels = {
  viewProject: string;
  aboutProject: string;
  nextProject: string;
  previousProject: string;
  preview: string;
  projectDetails: string;
  stack: string;
  design: string;
};

export type ProjectsListingLabels = {
  /** Visually hidden heading of the listing section. */
  title: string;
  /** Accessible name of the category tabs. */
  categories: string;
  allCategories: string;
  tags: string;
  /** Precedes the "visible / total" project count, e.g. "Exibindo 06 / 18". */
  showing: string;
  clearFilters: string;
  noResults: string;
  /** Reveals the projects beyond the initial page of the listing. */
  showAll: string;
};

export type ProjectsContent = {
  title: string;
  description: string;
  hero: {
    /** Short intro shown beside the page title. */
    description: string;
  };
  labels: ProjectsLabels;
  listing: ProjectsListingLabels;
  categoryLabels: Record<ProjectCategory, string>;
  tagLabels: Record<ProjectTag, string>;
  items: Project[];
};
