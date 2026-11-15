import type { Project } from "@/content/projects";

export type ProjectActionLinks = {
  /** The link the main "view project" action opens: the official site while it's live, otherwise the preview. */
  primaryUrl: string | null;
  officialUrl?: string;
  previewUrl?: string;
  /** Whether the preview deserves its own action, i.e. it isn't already the primary link. */
  showPreviewAction: boolean;
};

function getPrimaryProjectUrl(project: Project): string | null {
  const officialLink = project.links?.official;

  if (officialLink && !officialLink.expired) {
    return officialLink.url;
  }

  return project.links?.preview?.url ?? null;
}

export function getProjectActionLinks(project: Project): ProjectActionLinks {
  const primaryUrl = getPrimaryProjectUrl(project);
  const previewUrl = project.links?.preview?.url;

  return {
    primaryUrl,
    officialUrl: project.links?.official?.url,
    previewUrl,
    showPreviewAction: Boolean(previewUrl && previewUrl !== primaryUrl),
  };
}
