import { getContent } from "@/content";
import { AboutBio } from "@/features/portfolio/sections/about/AboutBio";
import { AboutHeader } from "@/features/portfolio/sections/about/AboutHeader";
import { AboutHighlights } from "@/features/portfolio/sections/about/AboutHighlights";
import { UISection } from "@/features/portfolio/ui/UISection";
import type { Locale } from "@/i18n/config";

type AboutSectionProps = {
  locale: Locale;
};

export function AboutSection({ locale }: AboutSectionProps) {
  const { about, contacts, location } = getContent(locale);

  return (
    <UISection id="about" className="grid gap-12">
      <AboutHeader role={about.role} contacts={contacts} location={location} />
      <AboutHighlights items={about.highlights} />
      <AboutBio title={about.title} paragraphs={about.summary} />
    </UISection>
  );
}
