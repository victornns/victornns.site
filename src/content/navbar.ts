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

export interface NavbarLabels {
  logo: string;
  openMenu: string;
  closeMenu: string;
  menu: string;
  navigation: string;
  resume: string;
  resumeUrl: string;
}

export const navbarLabels: Record<Locale, NavbarLabels> = {
  pt: {
    logo: "Portfólio",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    menu: "Menu",
    navigation: "Navegacao",
    resume: "Currículo",
    resumeUrl: "https://www.victornns.com/pdf/victor-nascimento-curriculo.pdf",
  },
  en: {
    logo: "Portfolio",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    navigation: "Navigation",
    resume: "Resume",
    resumeUrl: "https://www.victornns.com/pdf/victor-nascimento-resume.pdf",
  },
};

/** Aria-label naming the target language, always spoken in that language regardless of the current locale. */
export const switchLocaleLabel: Record<Locale, string> = {
  pt: "Trocar para português",
  en: "Switch to English",
};
