import { getContent } from "@/content";
import {
  navbarItemOrder,
  type NavbarItem,
  type NavbarItemId,
} from "@/features/portfolio/navbar/model";
import type { Locale } from "@/i18n/config";
import { getPagePath } from "@/i18n/routes";
import { getSectionHref } from "@/i18n/sections";

function getNavbarItemHref(locale: Locale, itemId: NavbarItemId): string {
  switch (itemId) {
    case "about":
      return getPagePath(locale, "about");
    case "projects":
      return getPagePath(locale, "projects");
    default:
      return getSectionHref(locale, itemId);
  }
}

export function getNavbarItems(locale: Locale): NavbarItem[] {
  const { about, experiences, education, projects, techStack } =
    getContent(locale);

  const labelById: Record<NavbarItemId, string> = {
    about: about.title,
    stack: techStack.title,
    experience: experiences.title,
    projects: projects.title,
    education: education.title,
  };

  return navbarItemOrder.map((itemId) => ({
    id: itemId,
    label: labelById[itemId],
    href: getNavbarItemHref(locale, itemId),
  }));
}
