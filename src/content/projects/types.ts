import type { OrganizationId } from "@/content/organizations";
import type { Locale } from "@/i18n/config";

export type ProjectKind =
  | "Site Institucional"
  | "Site Corporativo"
  | "Landing Page"
  | "One Page"
  | "Portal"
  | "Blog"
  | "CMS"
  | "Headless CMS";

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
  type?: ProjectKind[];
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

export type ProjectsContent = {
  title: string;
  description: string;
  labels: ProjectsLabels;
  items: Project[];
};
