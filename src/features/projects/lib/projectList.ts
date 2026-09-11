import type { Project } from "@/content/projects";

export function getProjectBySlug(
  projects: Project[],
  slug: string,
): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectIndex(
  projects: Project[],
  id: Project["id"],
): number {
  return projects.findIndex((project) => project.id === id);
}

export function getAdjacentProject(
  projects: Project[],
  currentId: Project["id"],
  direction: "previous" | "next",
): Project | undefined {
  const currentIndex = getProjectIndex(projects, currentId);
  if (currentIndex === -1) {
    return undefined;
  }

  const offset = direction === "next" ? 1 : -1;
  const nextIndex = (currentIndex + offset + projects.length) % projects.length;

  return projects[nextIndex];
}
