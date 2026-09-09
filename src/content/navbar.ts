import type { Locale } from "@/i18n/config";

/**
 * Stable internal section ids. These match the `id` set on each section's
 * DOM element (for scrolling) and are resolved from a locale's public URL
 * slug via `sectionRoutes` below, e.g. by the `[section]` route under
 * `src/app/[locale]/portfolio/`.
 */
export type SectionId =
  "about" | "experience" | "education" | "projects" | "stack";

/**
 * Maps the localized public URL slug for a section to its stable internal
 * id. Used to resolve friendly, localized routes (e.g. `/projetos`,
 * `/en/projects`) without exposing `#id` anchors as the public URL format.
 */
export const sectionRoutes: Record<Locale, Record<string, SectionId>> = {
  pt: {
    sobre: "about",
    projetos: "projects",
    experiencia: "experience",
    formacao: "education",
    tecnologias: "stack",
  },
  en: {
    about: "about",
    projects: "projects",
    experience: "experience",
    education: "education",
    stack: "stack",
  },
};

export interface NavbarLabels {
  logo: string;
  openMenu: string;
  closeMenu: string;
  menu: string;
  navigation: string;
}

export const navbarLabels: Record<Locale, NavbarLabels> = {
  pt: {
    logo: "Portfólio",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    menu: "Menu",
    navigation: "Navegação",
  },
  en: {
    logo: "Portfolio",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    navigation: "Navigation",
  },
};

/** Aria-label naming the target language, always spoken in that language regardless of the current locale. */
export const switchLocaleLabel: Record<Locale, string> = {
  pt: "Trocar para português",
  en: "Switch to English",
};
