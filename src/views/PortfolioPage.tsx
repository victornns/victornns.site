import type { Locale } from "@/i18n/config";

import {
  getNavbarItems,
  Navbar,
  SectionScrollTarget,
  type SectionId,
} from "@/components/navbar";

import { AboutSection } from "@/views/AboutSection";
import { ContactsSection } from "@/views/ContactsSection";
import { ExperienceSection } from "@/views/ExperienceSection";
import { ProjectsSection } from "@/views/ProjectsSection";

type PortfolioPageProps = {
  locale: Locale;
  /** When set, smoothly scrolls to this section on load (used by friendly section routes). */
  activeSectionId?: SectionId;
};

export function PortfolioPage({ locale, activeSectionId }: PortfolioPageProps) {
  const navbarItems = getNavbarItems(locale);

  return (
    <>
      <Navbar locale={locale} items={navbarItems} />
      {activeSectionId && <SectionScrollTarget sectionId={activeSectionId} />}

      <AboutSection locale={locale} />
      <ContactsSection locale={locale} />
      <ExperienceSection locale={locale} />
      <ProjectsSection locale={locale} />
    </>
  );
}
