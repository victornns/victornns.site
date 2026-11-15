import { getContent } from "@/content";
import { LocaleSwitchScrollRestoration } from "@/features/portfolio/navbar/LocaleSwitchScrollRestoration";
import { ProjectsSection } from "@/features/portfolio/projects/ProjectsSection";
import type { Locale } from "@/i18n/config";
import { getPageAlternates } from "@/i18n/routes";

import type { Metadata } from "next";

type ProjectsPageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const { projects } = getContent(locale);

  return {
    title: projects.title,
    description: projects.description,
    alternates: getPageAlternates(locale, "projects"),
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;

  return (
    <>
      <LocaleSwitchScrollRestoration identity="projects" />
      <ProjectsSection locale={locale} />
    </>
  );
}
