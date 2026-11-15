import { pushPathname } from "@/lib/history";

const OPEN_EVENT = "portfolio:project-open";

/**
 * Called by a project link's click handler. The single mounted drawer picks
 * this up and opens that project — the two communicate through this event
 * instead of a shared parent component, so the project list can stay a plain
 * server-rendered list.
 */
export function dispatchProjectOpen(projectId: string, href: string) {
  pushPathname(href);
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: projectId }));
}

export function subscribeToProjectOpen(
  listener: (projectId: string) => void,
): () => void {
  function handleOpen(event: Event) {
    listener((event as CustomEvent<string>).detail);
  }

  window.addEventListener(OPEN_EVENT, handleOpen);
  return () => window.removeEventListener(OPEN_EVENT, handleOpen);
}
