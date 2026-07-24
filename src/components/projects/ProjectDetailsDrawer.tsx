"use client";

import { Drawer } from "@/components/drawer/Drawer";
import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";
import { useProjectDetails } from "@/components/projects/useProjectDetails";
import { UILink } from "@/components/ui/UILink";
import { TOKENS } from "@/lib/constants";
import { sanitizeUrlForDisplay } from "@/lib/utils";

import type { Project } from "@/content/projects";
import type { Locale } from "@/i18n/config";

interface ProjectDetailsDrawerProps {
  locale: Locale;
  projects: Project[];
  activeProject: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPrevious: () => void;
  onNext: () => void;
}

function NavButton({
  direction,
  label,
  onClick,
}: {
  direction: "previous" | "next";
  label: string;
  onClick: () => void;
}) {
  const isPrevious = direction === "previous";

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-8 items-center justify-center px-1 text-neutral-700 transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      <span className="relative block h-3.5 w-3.5" aria-hidden="true">
        <span
          className={
            isPrevious
              ? "absolute left-0 top-1/2 block h-px w-3 -translate-y-1/2 bg-current"
              : "absolute right-0 top-1/2 block h-px w-3 -translate-y-1/2 bg-current"
          }
        />
        <span
          className={
            isPrevious
              ? "absolute left-0 top-1/2 block h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-l border-current"
              : "absolute right-0 top-1/2 block h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r border-t border-current"
          }
        />
      </span>
    </button>
  );
}

export function ProjectDetailsDrawer({
  locale,
  projects,
  activeProject,
  open,
  onOpenChange,
  onPrevious,
  onNext,
}: ProjectDetailsDrawerProps) {
  const {
    common,
    activeProject: project,
    currentIndex,
    totalProjects,
    eyebrow,
    previewUrl,
    primaryUrl,
    officialUrl,
    showPreviewAction,
  } = useProjectDetails({
    locale,
    projects,
    activeProject,
    open,
    onPrevious,
    onNext,
  });

  if (!project) {
    return null;
  }

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      title={`${common.projectDetails}: ${project.title}`}
      closeLabel={common.close}
      contentClassName="[--drawer-panel-width:90vw] md:[--drawer-panel-width:70vw] lg:[--drawer-panel-width:50vw] max-w-4xl"
    >
      <div className="flex min-h-full flex-col gap-10">
        <header className="flex items-start justify-between gap-6 pr-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <NavButton
                direction="previous"
                label={common.previousProject}
                onClick={onPrevious}
              />
              <NavButton
                direction="next"
                label={common.nextProject}
                onClick={onNext}
              />
            </div>

            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
              {currentIndex + 1}/{totalProjects}
            </p>
          </div>
        </header>

        <div className="space-y-8">
          <div className="space-y-4">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                {eyebrow}
              </p>
            )}

            <div className="space-y-3">
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
                {project.title}
              </h2>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-500">
                <span>{project.date}</span>
                {project.organizationId && (
                  <>
                    <span>{TOKENS.separator.default}</span>
                    <OrganizationDisplayName id={project.organizationId} />
                  </>
                )}
              </div>
            </div>

            {project.summary[0] && (
              <p className="max-w-3xl text-lg leading-8 text-neutral-700">
                {project.summary[0]}
              </p>
            )}
          </div>

          {previewUrl && (
            <div className="border border-neutral-200 bg-neutral-50 p-6 md:p-8">
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-neutral-500">
                {common.preview}
              </p>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="space-y-1">
                  <p className="text-2xl font-medium leading-tight">
                    {sanitizeUrlForDisplay(previewUrl)}
                  </p>
                  <p className="text-sm text-neutral-600">{previewUrl}</p>
                </div>

                <UILink
                  href={previewUrl}
                  className="inline-flex items-center justify-center border border-black px-4 py-3 text-sm font-medium no-underline transition hover:bg-black hover:text-white"
                >
                  {common.preview}
                </UILink>
              </div>
            </div>
          )}

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.8fr)_minmax(260px,0.9fr)]">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                {common.aboutProject}
              </h3>

              <div className="space-y-4 leading-8 text-neutral-700">
                {project.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {project.technologies?.length ? (
              <aside className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                  {common.stack}
                </h3>

                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="border border-neutral-200 px-3 py-2 text-sm text-neutral-700"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </aside>
            ) : null}
          </div>
        </div>

        {(primaryUrl || officialUrl || showPreviewAction) && (
          <footer className="mt-auto flex flex-col gap-3 border-t border-neutral-200 pt-6 sm:flex-row sm:flex-wrap sm:items-center">
            {primaryUrl && (
              <UILink
                href={primaryUrl}
                className="inline-flex items-center justify-center bg-black px-5 py-3 text-sm font-medium text-white no-underline transition hover:bg-neutral-800"
              >
                {common.viewProject}
              </UILink>
            )}

            {officialUrl && officialUrl !== primaryUrl && (
              <UILink
                href={officialUrl}
                className="inline-flex items-center justify-center border border-neutral-300 px-5 py-3 text-sm font-medium no-underline transition hover:border-black"
              >
                {sanitizeUrlForDisplay(officialUrl)}
              </UILink>
            )}

            {showPreviewAction && previewUrl && (
              <UILink
                href={previewUrl}
                className="inline-flex items-center justify-center px-2 py-3 text-sm font-medium no-underline transition hover:text-neutral-600"
              >
                {common.preview}
              </UILink>
            )}
          </footer>
        )}
      </div>
    </Drawer>
  );
}
