import { notFound } from "next/navigation";

import { defaultLocale, isValidLocale, type Locale } from "@/i18n/config";
import { getSectionIdFromSlug } from "@/components/navbar";
import { getProjectBySlug } from "@/components/projects/projectRoutes";
import { getContent } from "@/content";

import { PortfolioPage } from "@/views/PortfolioPage";

type PortfolioProjectPageProps = {
  params: Promise<{ locale: string; section: string; project: string }>;
};

export default async function PortfolioProjectPage({
  params,
}: PortfolioProjectPageProps) {
  const { locale: rawLocale, section, project: projectSlug } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : defaultLocale;

  const sectionId = getSectionIdFromSlug(locale, section);
  if (sectionId !== "projects") {
    notFound();
  }

  const { projects } = getContent(locale);
  const project = getProjectBySlug(projects.items, projectSlug);

  if (!project) {
    notFound();
  }

  return (
    <PortfolioPage
      locale={locale}
      activeSectionId={sectionId}
      activeProjectId={project.id}
    />
  );
}
