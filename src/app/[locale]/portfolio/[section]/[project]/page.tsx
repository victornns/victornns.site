import { notFound, redirect } from "next/navigation";

import { getLocalizedPath, locales, type Locale } from "@/i18n/config";
import { getSectionIdFromSlug } from "@/components/navbar";
import { getProjectBySlug } from "@/components/projects/projectRoutes";
import { getContent } from "@/content";

import { PortfolioView } from "../../PortfolioView";

type PortfolioProjectPageProps = {
  params: Promise<{ locale: Locale; section: string; project: string }>;
};

export default async function PortfolioProjectPage({
  params,
}: PortfolioProjectPageProps) {
  const { locale, section, project: projectSlug } = await params;

  const sectionId = getSectionIdFromSlug(locale, section);
  if (sectionId === "projects") {
    const project = getProjectBySlug(
      getContent(locale).projects.items,
      projectSlug,
    );
    if (project) {
      return (
        <PortfolioView
          locale={locale}
          activeSectionId={sectionId}
          activeProjectId={project.id}
        />
      );
    }
  }

  // The slugs may belong to another locale — if the same project resolves
  // there, redirect to that locale's URL.
  const matchedLocale = locales.find((candidate) => {
    if (candidate === locale) {
      return false;
    }
    if (getSectionIdFromSlug(candidate, section) !== "projects") {
      return false;
    }
    return Boolean(
      getProjectBySlug(getContent(candidate).projects.items, projectSlug),
    );
  });

  if (matchedLocale) {
    redirect(
      getLocalizedPath(matchedLocale, `portfolio/${section}/${projectSlug}`),
    );
  }

  notFound();
}
