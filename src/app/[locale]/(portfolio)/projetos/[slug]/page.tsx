import { notFound, permanentRedirect } from "next/navigation";

import { getContent } from "@/content";
import { LocaleSwitchScrollRestoration } from "@/features/portfolio/navbar/LocaleSwitchScrollRestoration";
import { getProjectBySlug } from "@/features/portfolio/projects/lib/projectList";
import {
  getProjectLocaleLinks,
  getProjectPath,
} from "@/features/portfolio/projects/lib/projectPaths";
import { ProjectsPage } from "@/features/portfolio/projects/ProjectsPage";
import { locales, type Locale } from "@/i18n/config";
import { getAlternates } from "@/i18n/routes";

import type { Metadata } from "next";

type ProjectPageProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).projects.items.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

function findProject(locale: Locale, slug: string) {
  return getProjectBySlug(getContent(locale).projects.items, slug);
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = findProject(locale, slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary[0],
    alternates: getAlternates(locale, getProjectLocaleLinks(project)),
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;

  const project = findProject(locale, slug);
  if (project) {
    return (
      <>
        <LocaleSwitchScrollRestoration identity={project.id} />
        <ProjectsPage locale={locale} activeProjectId={project.id} />
      </>
    );
  }

  const translatedProject = locales
    .filter((candidate) => candidate !== locale)
    .map((candidate) => findProject(candidate, slug))
    .find(Boolean);
  if (translatedProject) {
    permanentRedirect(getProjectPath(locale, translatedProject));
  }

  notFound();
}
