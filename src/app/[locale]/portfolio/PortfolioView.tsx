import { SectionScrollTarget } from "@/features/portfolio/navbar/SectionScrollTarget";
import { AboutSection } from "@/features/portfolio/sections/about/AboutSection";
import { EducationSection } from "@/features/portfolio/sections/education/EducationSection";
import { ExperienceSection } from "@/features/portfolio/sections/experience/ExperienceSection";
import { ProjectsSection } from "@/features/portfolio/sections/projects/ProjectsSection";
import { TechStackSection } from "@/features/portfolio/sections/techStack/TechStackSection";
import type { Locale } from "@/i18n/config";
import type { SectionId } from "@/i18n/sections";

type PortfolioViewProps = {
  locale: Locale;
  /** When set, smoothly scrolls to this section on load (used by friendly section routes). */
  activeSectionId?: SectionId;
  /** When set, opens the project details drawer for this project on load (used by friendly project routes). */
  activeProjectId?: string;
};

export function PortfolioView({
  locale,
  activeSectionId,
  activeProjectId,
}: PortfolioViewProps) {
  const scrollIdentity = activeProjectId ?? activeSectionId ?? "portfolio";

  return (
    <>
      <SectionScrollTarget
        sectionId={activeSectionId}
        identity={scrollIdentity}
      />
      <AboutSection locale={locale} />
      <TechStackSection locale={locale} />
      <ExperienceSection locale={locale} />
      <ProjectsSection locale={locale} activeProjectId={activeProjectId} />
      <EducationSection locale={locale} />
    </>
  );
}
