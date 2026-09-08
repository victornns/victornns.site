"use client";

import { useCallback, useEffect, useState } from "react";

import {
  getAdjacentProject,
  getProjectBySlug,
  getProjectIndex,
  getProjectPath,
  getProjectSlugFromPath,
  getProjectsSectionPath,
} from "@/views/projects/projectRoutes";

import type { Project } from "@/content/projects";
import type { Locale } from "@/i18n/config";

const OPEN_EVENT = "portfolio:project-open";

/**
 * Called by a project link's click handler. The single mounted
 * `useActiveProject` picks this up and opens that project — the two
 * communicate through this event instead of a shared parent component, so
 * the project list can stay a plain server-rendered list.
 */
export function dispatchProjectOpen(locale: Locale, project: Project) {
  const path = getProjectPath(locale, project);
  if (window.location.pathname !== path) {
    window.history.pushState(null, "", path);
  }
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: project.id }));
}

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

export function useActiveProject(
  locale: Locale,
  projects: Project[],
  initialProjectId?: string,
) {
  const [activeProjectId, setActiveProjectId] = useState(
    initialProjectId ?? null,
  );
  const [open, setOpen] = useState(Boolean(initialProjectId));

  // True only for the very first paint, when the drawer is already open on
  // load (a direct link or a post-locale-switch reload) rather than from a
  // click: nothing is visibly opening, so that paint skips the entrance
  // animation. Cleared right after, so a later close+reopen animates normally.
  const [skipEnterAnimation, setSkipEnterAnimation] = useState(
    Boolean(initialProjectId),
  );
  useEffect(() => setSkipEnterAnimation(false), []);

  useEffect(() => {
    function handleOpen(event: Event) {
      setActiveProjectId((event as CustomEvent<string>).detail);
      setOpen(true);
    }

    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_EVENT, handleOpen);
  }, []);

  // Keeps the drawer in sync with the URL: the browser's back/forward
  // buttons should open/close it the same way clicking a project does.
  useEffect(() => {
    function handlePopState() {
      const slug = getProjectSlugFromPath(locale, window.location.pathname);
      const project = slug ? getProjectBySlug(projects, slug) : undefined;

      if (project) {
        setActiveProjectId(project.id);
        setOpen(true);
      } else {
        setOpen(false);
      }
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [locale, projects]);

  const activeProject =
    projects.find((project) => project.id === activeProjectId) ?? null;

  function close() {
    setOpen(false);
    syncPath(getProjectsSectionPath(locale), "push");
  }

  // Stable across renders (unless the project/list/locale actually change) so
  // the keydown effect below doesn't tear down and reattach its listener on
  // every render.
  const goTo = useCallback(
    (direction: "previous" | "next") => {
      if (!activeProject) {
        return;
      }

      const nextProject = getAdjacentProject(
        projects,
        activeProject.id,
        direction,
      );
      if (!nextProject) {
        return;
      }

      setActiveProjectId(nextProject.id);
      syncPath(getProjectPath(locale, nextProject), "replace");
    },
    [activeProject, projects, locale],
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo("previous");
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo("next");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, goTo]);

  return {
    open,
    activeProject,
    currentIndex: activeProject
      ? getProjectIndex(projects, activeProject.id)
      : -1,
    totalProjects: projects.length,
    skipEnterAnimation,
    close,
    goToPrevious: () => goTo("previous"),
    goToNext: () => goTo("next"),
  };
}
