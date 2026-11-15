import type { SectionId } from "@/i18n/sections";

/** The About page sections plus the standalone projects page. */
export type NavbarItemId = SectionId | "projects";

export const navbarItemOrder: NavbarItemId[] = [
  "about",
  "stack",
  "experience",
  "education",
  "projects",
];

/** Primary items are pages; secondary ones are anchors within the About page. */
export type NavbarItemLevel = "primary" | "secondary";

export type NavbarItem = {
  id: NavbarItemId;
  level: NavbarItemLevel;
  label: string;
  href: string;
};
