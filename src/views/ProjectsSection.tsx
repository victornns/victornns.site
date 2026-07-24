"use client";

import { useState } from "react";

import { getContent } from "@/content";
import type { Project } from "@/content/projects";
import { TOKENS } from "@/lib/constants";
import { sanitizeUrlForDisplay } from "@/lib/utils";

import type { Locale } from "@/i18n/config";

import { ProjectDetailsDrawer } from "@/components/projects/ProjectDetailsDrawer";
import { UISection } from "@/components/ui/UISection";
import { UICard } from "@/components/ui/UICard";
import { UILink } from "@/components/ui/UILink";
import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";

type ProjectsSectionProps = {
  locale: Locale;
};

type ProjectItemProps = {
  project: Project;
  onOpenDetails: (projectId: Project["id"]) => void;
  openLabel: string;
};

type DesignCreditProps = {
  organizationId?: Project["organizationId"];
};

function DesignCredit({ organizationId }: DesignCreditProps) {
  if (!organizationId) return null;

  return (
    <>
      {TOKENS.separator.default}
      Design: <OrganizationDisplayName id={organizationId} />
    </>
  );
}

function ProjectTitle({ project }: { project: Project }) {
  const previewUrl = project.links?.preview?.url;

  const officialUrl = project.links?.official?.url;
  const isOfficialExpired = project.links?.official?.expired;

  const linkUrl = (!isOfficialExpired ? officialUrl : null) || previewUrl;

  return linkUrl ? (
    <UILink href={linkUrl}>{project.title}</UILink>
  ) : (
    project.title
  );
}

function ProjectLink({ project }: { project: Project }) {
  const officialUrl = project.links?.official?.url;

  return officialUrl ? (
    <>
      {TOKENS.separator.default}
      {sanitizeUrlForDisplay(officialUrl)}
    </>
  ) : null;
}

function ProjectItem({ project, onOpenDetails, openLabel }: ProjectItemProps) {
  const { date, organizationId, summary } = project;

  return (
    <div className="group relative">
      <UICard.Root className="transition-colors group-hover:bg-neutral-50 group-focus-within:bg-neutral-50">
        <UICard.Label>
          {date}
          <DesignCredit organizationId={organizationId} />
          <ProjectLink project={project} />
        </UICard.Label>
        <UICard.Title>
          <ProjectTitle project={project} />
        </UICard.Title>
        <UICard.Paragraphs data={summary} />
      </UICard.Root>

      <button
        type="button"
        aria-label={`${openLabel}: ${project.title}`}
        className="absolute inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => onOpenDetails(project.id)}
      >
        <span className="sr-only">{openLabel}</span>
      </button>
    </div>
  );
}

export function ProjectsSection({ locale }: ProjectsSectionProps) {
  const { common, projects } = getContent(locale);
  const [selectedProjectId, setSelectedProjectId] = useState<
    Project["id"] | null
  >(null);
  const [isProjectDrawerOpen, setIsProjectDrawerOpen] = useState(false);

  const activeProject =
    projects.items.find((project) => project.id === selectedProjectId) ?? null;

  function handleOpenDetails(projectId: Project["id"]) {
    setSelectedProjectId(projectId);
    setIsProjectDrawerOpen(true);
  }

  function handleOpenChange(open: boolean) {
    setIsProjectDrawerOpen(open);
  }

  function navigateProject(direction: "previous" | "next") {
    if (!activeProject) {
      return;
    }

    const activeIndex = projects.items.findIndex(
      (project) => project.id === activeProject.id,
    );

    if (activeIndex === -1) {
      return;
    }

    const offset = direction === "next" ? 1 : -1;
    const nextIndex =
      (activeIndex + offset + projects.items.length) % projects.items.length;

    setSelectedProjectId(projects.items[nextIndex].id);
  }

  return (
    <>
      <UISection
        id="projects"
        title={projects.title}
        description={projects.description}
      >
        <ul>
          {projects.items.map((project) => (
            <li key={project.id}>
              <ProjectItem
                project={project}
                onOpenDetails={handleOpenDetails}
                openLabel={common.projectDetails}
              />
            </li>
          ))}
        </ul>
      </UISection>

      <ProjectDetailsDrawer
        locale={locale}
        projects={projects.items}
        activeProject={activeProject}
        open={isProjectDrawerOpen}
        onOpenChange={handleOpenChange}
        onPrevious={() => navigateProject("previous")}
        onNext={() => navigateProject("next")}
      />
    </>
  );
}
