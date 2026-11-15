import { getContent } from "@/content";
import {
  navbarItemOrder,
  type NavbarItem,
  type NavbarItemLevel,
  type NavbarItemId,
} from "@/features/portfolio/navbar/model";
import type { Locale } from "@/i18n/config";
import { getPagePath } from "@/i18n/routes";
import { getSectionHref } from "@/i18n/sections";

const PRIMARY_ITEM_IDS: NavbarItemId[] = ["about", "projects"];

function getNavbarItemLevel(itemId: NavbarItemId): NavbarItemLevel {
  return PRIMARY_ITEM_IDS.includes(itemId) ? "primary" : "secondary";
}

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
    level: getNavbarItemLevel(itemId),
    label: labelById[itemId],
    href: getNavbarItemHref(locale, itemId),
  }));
}
