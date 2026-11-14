import type { SectionId } from "@/i18n/sections";

/** The About page sections plus the standalone projects page. */
export type NavbarItemId = SectionId | "projects";

export const navbarItemOrder: NavbarItemId[] = [
  "about",
  "stack",
  "experience",
  "projects",
  "education",
];

export type NavbarItem = {
  id: NavbarItemId;
  label: string;
  href: string;
};
