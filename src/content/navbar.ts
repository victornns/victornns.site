import type { Locale } from "@/i18n/config";

/**
 * Stable internal section ids. These match the `id` set on each section's
 * DOM element (for scrolling) and the folder name of the corresponding
 * route under `src/app/[locale]/` (e.g. `src/app/[locale]/projects/`).
 */
export type SectionId = "experience" | "projects" | "contact";

/**
 * Maps the localized public URL slug for a section to its stable internal
 * id. Used to resolve friendly, localized routes (e.g. `/projetos`,
 * `/en/projects`) without exposing `#id` anchors as the public URL format.
 */
export const sectionRoutes: Record<Locale, Record<string, SectionId>> = {
  pt: {
    projetos: "projects",
    experiencia: "experience",
    contato: "contact",
  },
  en: {
    projects: "projects",
    experience: "experience",
    contact: "contact",
  },
};
