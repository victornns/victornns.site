import { getContent } from "@/content";
import { sectionRoutes, type SectionId } from "@/content/navbar";
import { getLocalizedPath, type Locale } from "@/i18n/config";
import type { NavbarItem } from "@/components/navbar/Navbar";

const sectionOrder: SectionId[] = ["projects", "experience", "contact"];

const sectionSlugById: Record<
  Locale,
  Record<SectionId, string>
> = Object.fromEntries(
  Object.entries(sectionRoutes).map(([locale, slugsToIds]) => [
    locale,
    Object.fromEntries(
      Object.entries(slugsToIds).map(([slug, sectionId]) => [sectionId, slug]),
    ),
  ]),
) as Record<Locale, Record<SectionId, string>>;

export function getSectionSlug(locale: Locale, sectionId: SectionId): string {
  return sectionSlugById[locale][sectionId];
}

export function getSectionIdFromSlug(
  locale: Locale,
  slug: string,
): SectionId | undefined {
  return sectionRoutes[locale][slug];
}

export function getNavbarItems(locale: Locale): NavbarItem[] {
  const { experiences, projects, contacts } = getContent(locale);

  const labelById: Record<SectionId, string> = {
    projects: projects.title,
    experience: experiences.title,
    contact: contacts.title,
  };

  return sectionOrder.map((sectionId) => ({
    id: sectionId,
    label: labelById[sectionId],
    href: getLocalizedPath(
      locale,
      `portfolio/${getSectionSlug(locale, sectionId)}`,
    ),
  }));
}
