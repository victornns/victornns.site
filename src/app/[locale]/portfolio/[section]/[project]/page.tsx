import { notFound, redirect } from "next/navigation";

import { getLocale, getLocalizedPath, locales } from "@/i18n/config";
import { getSectionIdFromSlug } from "@/components/navbar";
import { getProjectBySlug } from "@/components/projects/projectRoutes";
import { getContent } from "@/content";

import { PortfolioPage } from "../../PortfolioPage";

type PortfolioProjectPageProps = {
  params: Promise<{ locale: string; section: string; project: string }>;
};

export default async function PortfolioProjectPage({
  params,
}: PortfolioProjectPageProps) {
  const { locale: rawLocale, section, project: projectSlug } = await params;
  const locale = getLocale(rawLocale);

  const sectionId = getSectionIdFromSlug(locale, section);
  if (sectionId === "projects") {
    const project = getProjectBySlug(getContent(locale).projects.items, projectSlug);
    if (project) {
      return (
        <PortfolioPage
          locale={locale}
          activeSectionId={sectionId}
          activeProjectId={project.id}
        />
      );
    }
  }

  // The section and/or project slug might belong to another locale (e.g. the
  // URL dropped its locale prefix but kept that locale's own words) —
  // redirect to the fully-qualified URL if we can resolve the same project
  // there.
  const matchedLocale = locales.find((candidate) => {
    if (candidate === locale) {
      return false;
    }
    if (getSectionIdFromSlug(candidate, section) !== "projects") {
      return false;
    }
    return Boolean(getProjectBySlug(getContent(candidate).projects.items, projectSlug));
  });

  if (matchedLocale) {
    redirect(getLocalizedPath(matchedLocale, `portfolio/${section}/${projectSlug}`));
  }

  notFound();
}
