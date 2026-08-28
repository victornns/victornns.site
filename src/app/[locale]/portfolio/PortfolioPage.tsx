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
import { EducationSection } from "@/views/EducationSection";
import { ProjectsSection } from "@/views/ProjectsSection";
import { TechStackSection } from "@/views/TechStackSection";

type PortfolioPageProps = {
  locale: Locale;
  /** When set, smoothly scrolls to this section on load (used by friendly section routes). */
  activeSectionId?: SectionId;
  /** When set, opens the project details drawer for this project on load (used by friendly project routes). */
  activeProjectId?: string;
};

export function PortfolioPage({
  locale,
  activeSectionId,
  activeProjectId,
}: PortfolioPageProps) {
  const navbarItems = getNavbarItems(locale);
  const scrollIdentity = activeProjectId ?? activeSectionId ?? "portfolio";

  return (
    <>
      <Navbar locale={locale} items={navbarItems} />
      <SectionScrollTarget
        sectionId={activeSectionId}
        identity={scrollIdentity}
      />

      <AboutSection locale={locale} />
      <TechStackSection locale={locale} />
      <ExperienceSection locale={locale} />
      <EducationSection locale={locale} />
      <ProjectsSection locale={locale} activeProjectId={activeProjectId} />
      <ContactsSection locale={locale} />
    </>
  );
}
