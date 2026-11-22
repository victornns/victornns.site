import { getContent } from "@/content";
import { AboutBio } from "@/features/portfolio/about/sections/about/AboutBio";
import { AboutHeader } from "@/features/portfolio/about/sections/about/AboutHeader";
import { AboutHighlights } from "@/features/portfolio/about/sections/about/AboutHighlights";
import { AboutProjectsCta } from "@/features/portfolio/about/sections/about/AboutProjectsCta";
import { UISection } from "@/features/portfolio/ui/UISection";
import type { Locale } from "@/i18n/config";
import { getPagePath } from "@/i18n/routes";
import { getSectionFragment } from "@/i18n/sections";

type AboutSectionProps = {
  locale: Locale;
};

export function AboutSection({ locale }: AboutSectionProps) {
  const { about, contacts, location } = getContent(locale);

  return (
    <UISection id={getSectionFragment(locale, "about")} className="grid gap-12">
      <AboutHeader role={about.role} contacts={contacts} location={location} />
      <AboutHighlights items={about.highlights} />
      <AboutBio title={about.title} paragraphs={about.summary} />
      <AboutProjectsCta
        title={about.projectsCta.title}
        description={about.projectsCta.description}
        linkLabel={about.projectsCta.linkLabel}
        href={getPagePath(locale, "projects")}
      />
    </UISection>
  );
}
