"use client";

import { useEffect, useState } from "react";

import { getContent } from "@/content";
import type { Project } from "@/content/projects";
import { TOKENS } from "@/lib/constants";
import { sanitizeUrlForDisplay } from "@/lib/utils";

import type { Locale } from "@/i18n/config";

import { ProjectDetailsDrawer } from "@/components/projects/ProjectDetailsDrawer";
import {
  getProjectPath,
  getProjectsSectionPath,
} from "@/components/projects/projectRoutes";
import { UISection } from "@/components/ui/UISection";
import { UICard } from "@/components/ui/UICard";
import { UILink } from "@/components/ui/UILink";
import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";

type ProjectsSectionProps = {
  locale: Locale;
  /** Initially selected project, set when landing on a friendly project URL. */
  activeProjectId?: string;
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

export function ProjectsSection({
  locale,
  activeProjectId,
}: ProjectsSectionProps) {
  const { common, projects } = getContent(locale);
  const [selectedProjectId, setSelectedProjectId] = useState<
    Project["id"] | null
  >(activeProjectId ?? null);
  const [isProjectDrawerOpen, setIsProjectDrawerOpen] = useState(
    Boolean(activeProjectId),
  );

  const activeProject =
    projects.items.find((project) => project.id === selectedProjectId) ?? null;

  // Keeps the drawer in sync with the URL: the browser's back/forward
  // buttons should open/close it the same way clicking a project does.
  useEffect(() => {
    function handlePopState() {
      const { pathname } = window.location;
      const matchedProject = projects.items.find(
        (project) => pathname === getProjectPath(locale, project),
      );

      if (matchedProject) {
        setSelectedProjectId(matchedProject.id);
        setIsProjectDrawerOpen(true);
        return;
      }

      setIsProjectDrawerOpen(false);
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [locale, projects.items]);

  function handleOpenDetails(projectId: Project["id"]) {
    const project = projects.items.find((item) => item.id === projectId);

    setSelectedProjectId(projectId);
    setIsProjectDrawerOpen(true);

    if (project) {
      const nextPath = getProjectPath(locale, project);
      if (window.location.pathname !== nextPath) {
        window.history.pushState(null, "", nextPath);
      }
    }
  }

  function handleOpenChange(open: boolean) {
    setIsProjectDrawerOpen(open);

    if (!open) {
      const sectionPath = getProjectsSectionPath(locale);
      if (window.location.pathname !== sectionPath) {
        window.history.pushState(null, "", sectionPath);
      }
    }
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
    const nextProject = projects.items[nextIndex];

    setSelectedProjectId(nextProject.id);

    const nextPath = getProjectPath(locale, nextProject);
    if (window.location.pathname !== nextPath) {
      window.history.replaceState(null, "", nextPath);
    }
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
