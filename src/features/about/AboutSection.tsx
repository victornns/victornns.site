import { UISection } from "@/components/ui/UISection";
import { getContent } from "@/content";
import { AboutBio } from "@/features/about/AboutBio";
import { AboutHeader } from "@/features/about/AboutHeader";
import { AboutHighlights } from "@/features/about/AboutHighlights";
import type { Locale } from "@/i18n/config";
import { getPortfolioUrl } from "@/i18n/sections";

type AboutSectionProps = {
  locale: Locale;
  showOnlineVersionLink?: boolean;
};

export function AboutSection({
  locale,
  showOnlineVersionLink = false,
}: AboutSectionProps) {
  const { about, contacts, location } = getContent(locale);

  return (
    <UISection id="about" className="grid gap-12">
      <AboutHeader
        role={about.role}
        contacts={contacts}
        location={location}
        resumeHref={getPortfolioUrl(locale)}
        resumeLabel={about.onlineVersionLabel}
        showOnlineVersionLink={showOnlineVersionLink}
      />
      <AboutHighlights items={about.highlights} />
      <AboutBio title={about.title} paragraphs={about.summary} />
    </UISection>
  );
}
