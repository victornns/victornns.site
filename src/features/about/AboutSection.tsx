import { UISection } from "@/components/ui/UISection";
import { getContent } from "@/content";
import { AboutBio } from "@/features/about/AboutBio";
import { AboutHeader } from "@/features/about/AboutHeader";
import { AboutHighlights } from "@/features/about/AboutHighlights";
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
