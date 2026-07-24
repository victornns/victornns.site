"use client";

import { useEffect, useState } from "react";

import { getContent } from "@/content";
import type { Project } from "@/content/projects";
import { TOKENS } from "@/lib/constants";
import { sanitizeUrlForDisplay } from "@/lib/utils";

import type { Locale } from "@/i18n/config";

import { ProjectDetailsDrawer } from "@/components/projects/ProjectDetailsDrawer";
import {
  getAdjacentProject,
  getProjectBySlug,
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
  designLabel: string;
};

type DesignCreditProps = {
  organizationId?: Project["organizationId"];
  label: string;
};

function DesignCredit({ organizationId, label }: DesignCreditProps) {
  if (!organizationId) return null;

  return (
    <>
      {TOKENS.separator.default}
      {label}: <OrganizationDisplayName id={organizationId} />
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

function ProjectItem({
  project,
  onOpenDetails,
  openLabel,
  designLabel,
}: ProjectItemProps) {
  const { date, organizationId, summary } = project;

  return (
    <div className="group relative">
      <UICard.Root className="transition-colors group-hover:bg-neutral-50 group-focus-within:bg-neutral-50">
        <UICard.Label>
          {date}
          <DesignCredit organizationId={organizationId} label={designLabel} />
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

  function syncPath(path: string, mode: "push" | "replace") {
    if (window.location.pathname === path) {
      return;
    }

    if (mode === "replace") {
      window.history.replaceState(null, "", path);
    } else {
      window.history.pushState(null, "", path);
    }
  }

  // Keeps the drawer in sync with the URL: the browser's back/forward
  // buttons should open/close it the same way clicking a project does.
  useEffect(() => {
    function handlePopState() {
      const sectionPath = getProjectsSectionPath(locale);
      const { pathname } = window.location;
      const slug = pathname.startsWith(`${sectionPath}/`)
        ? pathname.slice(sectionPath.length + 1)
        : null;
      const matchedProject = slug
        ? getProjectBySlug(projects.items, slug)
        : undefined;

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
      syncPath(getProjectPath(locale, project), "push");
    }
  }

  function handleOpenChange(open: boolean) {
    setIsProjectDrawerOpen(open);

    if (!open) {
      syncPath(getProjectsSectionPath(locale), "push");
    }
  }

  function navigateProject(direction: "previous" | "next") {
    if (!activeProject) {
      return;
    }

    const nextProject = getAdjacentProject(
      projects.items,
      activeProject.id,
      direction,
    );

    if (!nextProject) {
      return;
    }

    setSelectedProjectId(nextProject.id);
    syncPath(getProjectPath(locale, nextProject), "replace");
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
                designLabel={common.design}
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
