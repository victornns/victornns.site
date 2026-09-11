import { notFound, redirect } from "next/navigation";

import { getContent } from "@/content";
import { getProjectBySlug } from "@/features/projects/lib/projectList";
import { getProjectPath } from "@/features/projects/lib/projectPaths";
import { locales, type Locale } from "@/i18n/config";
import { getSectionIdFromSlug, getSectionSlug } from "@/i18n/sections";

import { PortfolioView } from "../../PortfolioView";

type PortfolioProjectPageProps = {
  params: Promise<{ locale: Locale; section: string; project: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => {
    const section = getSectionSlug(locale, "projects");
    return getContent(locale).projects.items.map((project) => ({
      locale,
      section,
      project: project.slug,
    }));
  });
}

function findProject(locale: Locale, section: string, projectSlug: string) {
  if (getSectionIdFromSlug(locale, section) !== "projects") {
    return undefined;
  }
  return getProjectBySlug(getContent(locale).projects.items, projectSlug);
}

export default async function PortfolioProjectPage({
  params,
}: PortfolioProjectPageProps) {
  const { locale, section, project: projectSlug } = await params;

  const project = findProject(locale, section, projectSlug);
  if (project) {
    return (
      <PortfolioView
        locale={locale}
        activeSectionId="projects"
        activeProjectId={project.id}
      />
    );
  }

  // The slugs may belong to another locale — if the same project resolves
  // there, redirect to that locale's URL.
  for (const candidate of locales) {
    if (candidate === locale) continue;

    const matchedProject = findProject(candidate, section, projectSlug);
    if (matchedProject) {
      redirect(getProjectPath(candidate, matchedProject));
    }
  }

  notFound();
}
