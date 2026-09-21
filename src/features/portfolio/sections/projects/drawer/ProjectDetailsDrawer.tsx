"use client";

import type { Project, ProjectsLabels } from "@/content/projects";
import { AboutProject } from "@/features/portfolio/sections/projects/drawer/AboutProject";
import { PreviewCard } from "@/features/portfolio/sections/projects/drawer/PreviewCard";
import { ProjectActions } from "@/features/portfolio/sections/projects/drawer/ProjectActions";
import { ProjectHeading } from "@/features/portfolio/sections/projects/drawer/ProjectHeading";
import { ProjectPager } from "@/features/portfolio/sections/projects/drawer/ProjectPager";
import { ProjectStack } from "@/features/portfolio/sections/projects/drawer/ProjectStack";
import { useActiveProject } from "@/features/portfolio/sections/projects/drawer/useActiveProject";
import { getProjectActionLinks } from "@/features/portfolio/sections/projects/lib/projectLinks";
import { getProjectLocaleLinks } from "@/features/portfolio/sections/projects/lib/projectPaths";
import { Drawer } from "@/features/portfolio/ui/drawer/Drawer";
import { LocaleSwitchLinks } from "@/features/portfolio/ui/LocaleSwitchLinks";
import type { Locale } from "@/i18n/config";
import { tw } from "@/lib/tailwind";

type ProjectDetailsDrawerProps = {
  locale: Locale;
  projects: Project[];
  labels: ProjectsLabels;
  closeLabel: string;
  initialProjectId?: string;
};

export function ProjectDetailsDrawer({
  locale,
  projects,
  labels,
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
          <ProjectHeading project={activeProject} />

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
