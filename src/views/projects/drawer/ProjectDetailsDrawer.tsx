"use client";

import { Drawer } from "@/components/drawer/Drawer";
import { LocaleSwitchLinks } from "@/components/LocaleSwitchLinks";
import { switchLocaleLabel } from "@/content/navbar";
import { tw } from "@/lib/tailwind";
import { useActiveProject } from "@/views/projects/drawer/useActiveProject";
import {
  getPrimaryProjectUrl,
  getProjectLocaleLinks,
} from "@/views/projects/projectRoutes";
import { ProjectPager } from "@/views/projects/drawer/ProjectPager";
import { ProjectHeading } from "@/views/projects/drawer/ProjectHeading";
import { PreviewCard } from "@/views/projects/drawer/PreviewCard";
import { AboutProject } from "@/views/projects/drawer/AboutProject";
import { ProjectStack } from "@/views/projects/drawer/ProjectStack";
import { ProjectActions } from "@/views/projects/drawer/ProjectActions";

import type { Project } from "@/content/projects";
import type { CommonContent } from "@/content/common";
import type { Locale } from "@/i18n/config";

interface ProjectDetailsDrawerProps {
  locale: Locale;
  common: CommonContent;
  projects: Project[];
  initialProjectId?: string;
}

export function ProjectDetailsDrawer({
  locale,
  common,
  projects,
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

  const previewUrl = activeProject.links?.preview?.url;
  const primaryUrl = getPrimaryProjectUrl(activeProject);
  const officialUrl = activeProject.links?.official?.url;
  const showPreviewAction = Boolean(previewUrl && previewUrl !== primaryUrl);

  return (
    <Drawer
      open={open}
      onOpenChange={(nextOpen) => !nextOpen && close()}
      title={`${common.projectDetails}: ${activeProject.title}`}
      closeLabel={common.close}
      elevated
      contentClassName={tw`max-w-4xl [--drawer-panel-width:90vw] md:[--drawer-panel-width:70vw] lg:[--drawer-panel-width:50vw]`}
      skipEnterAnimation={skipEnterAnimation}
    >
      <div className="flex min-h-full flex-col gap-10">
        <header className="flex items-start justify-between gap-6 pr-12">
          <ProjectPager
            currentIndex={currentIndex}
            totalProjects={totalProjects}
            previousLabel={common.previousProject}
            nextLabel={common.nextProject}
            onPrevious={goToPrevious}
            onNext={goToNext}
          />

          <LocaleSwitchLinks
            locale={locale}
            localeHref={getProjectLocaleLinks(locale, activeProject)}
            switchToPortuguese={switchLocaleLabel.pt}
            switchToEnglish={switchLocaleLabel.en}
          />
        </header>

        <div className="space-y-8">
          <ProjectHeading project={activeProject} />

          {previewUrl && (
            <PreviewCard url={previewUrl} label={common.preview} />
          )}

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.8fr)_minmax(260px,0.9fr)]">
            <AboutProject
              label={common.aboutProject}
              paragraphs={activeProject.summary}
            />
            <ProjectStack
              label={common.stack}
              technologies={activeProject.technologies}
            />
          </div>
        </div>

        <ProjectActions
          primaryUrl={primaryUrl}
          officialUrl={officialUrl}
          previewUrl={previewUrl}
          showPreviewAction={showPreviewAction}
          viewProjectLabel={common.viewProject}
          previewLabel={common.preview}
        />
      </div>
    </Drawer>
  );
}
