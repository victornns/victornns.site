"use client";

import type {
  Project,
  ProjectCategory,
  ProjectsLabels,
} from "@/content/projects";
import { ProjectPreview } from "@/features/portfolio/projects/components/ProjectPreview";
import { AboutProject } from "@/features/portfolio/projects/drawer/AboutProject";
import { PreviewCard } from "@/features/portfolio/projects/drawer/PreviewCard";
import { ProjectActions } from "@/features/portfolio/projects/drawer/ProjectActions";
import { ProjectGallery } from "@/features/portfolio/projects/drawer/ProjectGallery";
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

const PREVIEW_STAGE_CLASSNAME = tw`relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-neutral-100 md:aspect-video`;

// The drawer panel is 90vw, then 70vw from `md` and 50vw from `lg`.
const PREVIEW_IMAGE_SIZES =
  "(min-width: 1024px) 50vw, (min-width: 768px) 70vw, 90vw";

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

          <div className={PREVIEW_STAGE_CLASSNAME}>
            <ProjectPreview
              project={activeProject}
              sizes={PREVIEW_IMAGE_SIZES}
              mockupClassName="w-11/12 md:w-2/3"
              linked
            />
          </div>

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

          <ProjectGallery
            label={labels.gallery}
            projectTitle={activeProject.title}
            images={activeProject.images?.gallery}
          />
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
