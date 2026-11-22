import { getContent } from "@/content";
import { ProjectDetailsDrawer } from "@/features/portfolio/projects/drawer/ProjectDetailsDrawer";
import { FeaturedProjectsSection } from "@/features/portfolio/projects/sections/featured/FeaturedProjectsSection";
import { ProjectsHeroSection } from "@/features/portfolio/projects/sections/hero/ProjectsHeroSection";
import { ProjectsListingSection } from "@/features/portfolio/projects/sections/listing/ProjectsListingSection";
import type { Locale } from "@/i18n/config";

type ProjectsPageProps = {
  locale: Locale;
  /** Initially selected project, set when landing on a friendly project URL. */
  activeProjectId?: string;
};

export function ProjectsPage({ locale, activeProjectId }: ProjectsPageProps) {
  const { projects, common } = getContent(locale);

  return (
    <>
      <ProjectsHeroSection locale={locale} />
      <FeaturedProjectsSection locale={locale} />
      <ProjectsListingSection locale={locale} />

      <ProjectDetailsDrawer
        locale={locale}
        projects={projects.items}
        labels={projects.labels}
        categoryLabels={projects.categoryLabels}
        closeLabel={common.close}
        initialProjectId={activeProjectId}
      />
    </>
  );
}
