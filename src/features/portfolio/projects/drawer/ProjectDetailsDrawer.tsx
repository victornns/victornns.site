"use client";

import type {
  Project,
  ProjectCategory,
  ProjectsLabels,
} from "@/content/projects";
import { AboutProject } from "@/features/portfolio/projects/drawer/AboutProject";
import { PreviewCard } from "@/features/portfolio/projects/drawer/PreviewCard";
import { ProjectActions } from "@/features/portfolio/projects/drawer/ProjectActions";
import { ProjectHeading } from "@/features/portfolio/projects/drawer/ProjectHeading";
import { ProjectPager } from "@/features/portfolio/projects/drawer/ProjectPager";
import { ProjectStack } from "@/features/portfolio/projects/drawer/ProjectStack";
import { useActiveProject } from "@/features/portfolio/projects/drawer/useActiveProject";
import { getProjectActionLinks } from "@/features/portfolio/projects/lib/projectLinks";
import { getProjectLocaleLinks } from "@/features/portfolio/projects/lib/projectPaths";
import { Drawer } from "@/features/portfolio/ui/drawer/Drawer";
import { LocaleSwitchLinks } from "@/features/portfolio/ui/LocaleSwitchLinks";
import type { Locale } from "@/i18n/config";
import { tw } from "@/lib/tailwind";

type ProjectDetailsDrawerProps = {
  locale: Locale;
  projects: Project[];
  labels: ProjectsLabels;
  categoryLabels: Record<ProjectCategory, string>;
  closeLabel: string;
  initialProjectId?: string;
};

export function ProjectDetailsDrawer({
  locale,
  projects,
  labels,
  categoryLabels,
  closeLabel,
  initialProjectId,
}: ProjectDetailsDrawerProps) {
  const {
    open,
    activeProject,
    currentIndex,
    totalProjects,
    skipEnterAnimation,
    close,
    goToPrevious,
    goToNext,
  } = useActiveProject(locale, projects, initialProjectId);

  if (!activeProject) {
    return null;
  }

  const links = getProjectActionLinks(activeProject);

  return (
    <Drawer
      open={open}
      onOpenChange={(nextOpen) => !nextOpen && close()}
      title={`${labels.projectDetails}: ${activeProject.title}`}
      closeLabel={closeLabel}
      elevated
      contentClassName={tw`max-w-4xl [--drawer-panel-width:90vw] md:[--drawer-panel-width:70vw] lg:[--drawer-panel-width:50vw]`}
      skipEnterAnimation={skipEnterAnimation}
    >
      <div className="flex min-h-full flex-col gap-10">
        <header className="flex items-start justify-between gap-6 pr-12">
          <ProjectPager
            currentIndex={currentIndex}
            totalProjects={totalProjects}
            previousLabel={labels.previousProject}
            nextLabel={labels.nextProject}
            onPrevious={goToPrevious}
            onNext={goToNext}
          />

          <LocaleSwitchLinks
            locale={locale}
            localeHref={getProjectLocaleLinks(activeProject)}
          />
        </header>

        <div className="space-y-8">
          <ProjectHeading
            project={activeProject}
            categoryLabel={categoryLabels[activeProject.category]}
          />

          {links.previewUrl && (
            <PreviewCard url={links.previewUrl} label={labels.preview} />
          )}

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.8fr)_minmax(260px,0.9fr)]">
            <AboutProject
              label={labels.aboutProject}
              paragraphs={activeProject.summary}
            />
            <ProjectStack
              label={labels.stack}
              technologies={activeProject.technologies}
            />
          </div>
        </div>

        <ProjectActions
          links={links}
          viewProjectLabel={labels.viewProject}
          previewLabel={labels.preview}
        />
      </div>
    </Drawer>
  );
}
