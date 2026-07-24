"use client";

import { useEffect } from "react";

import { getProjectIndex } from "@/components/projects/projectRoutes";
import { TOKENS } from "@/lib/constants";
import { getContent } from "@/content";

import type { Project } from "@/content/projects";
import type { Locale } from "@/i18n/config";

function getPrimaryProjectUrl(project: Project) {
  const officialLink = project.links?.official;

  if (officialLink && !officialLink.expired) {
    return officialLink.url;
  }

  return project.links?.preview?.url ?? null;
}

interface UseProjectDetailsParams {
  locale: Locale;
  projects: Project[];
  activeProject: Project | null;
  open: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export function useProjectDetails({
  locale,
  projects,
  activeProject,
  open,
  onPrevious,
  onNext,
}: UseProjectDetailsParams) {
  const { common } = getContent(locale);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onNext, onPrevious]);

  if (!activeProject) {
    return { common, activeProject: null } as const;
  }

  const previewUrl = activeProject.links?.preview?.url;
  const primaryUrl = getPrimaryProjectUrl(activeProject);

  return {
    common,
    activeProject,
    currentIndex: getProjectIndex(projects, activeProject.id),
    totalProjects: projects.length,
    eyebrow: activeProject.type?.join(TOKENS.separator.bullet),
    previewUrl,
    primaryUrl,
    officialUrl: activeProject.links?.official?.url,
    showPreviewAction: Boolean(previewUrl && previewUrl !== primaryUrl),
  } as const;
}
