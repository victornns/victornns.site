import { getContent } from "@/content";
import { LocaleSwitchScrollRestoration } from "@/features/portfolio/navbar/LocaleSwitchScrollRestoration";
import { ProjectsPage } from "@/features/portfolio/projects/ProjectsPage";
import type { Locale } from "@/i18n/config";
import { getPageAlternates } from "@/i18n/routes";

import type { Metadata } from "next";

type ProjectsIndexPageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: ProjectsIndexPageProps): Promise<Metadata> {
  const { locale } = await params;
  const { projects } = getContent(locale);

  return {
    title: projects.title,
    description: projects.description,
    alternates: getPageAlternates(locale, "projects"),
  };
}

export default async function ProjectsIndexPage({
  params,
}: ProjectsIndexPageProps) {
  const { locale } = await params;

  return (
    <>
      <LocaleSwitchScrollRestoration identity="projects" />
      <ProjectsPage locale={locale} />
    </>
  );
}
