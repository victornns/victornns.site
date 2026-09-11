import { getContent } from "@/content";
import type { NavbarItem } from "@/features/navbar/model";
import type { Locale } from "@/i18n/config";
import { getSectionPath, sectionOrder, type SectionId } from "@/i18n/sections";

export function getNavbarItems(locale: Locale): NavbarItem[] {
  const { about, experiences, education, projects, techStack } =
    getContent(locale);

  const labelById: Record<SectionId, string> = {
    about: about.title,
    stack: techStack.title,
    experience: experiences.title,
    projects: projects.title,
    education: education.title,
  };

  return sectionOrder.map((sectionId) => ({
    id: sectionId,
    label: labelById[sectionId],
    href: getSectionPath(locale, sectionId),
  }));
}
