import { getContent } from "@/content";
import { TOKENS } from "@/lib/constants";

import type { Locale } from "@/i18n/config";

import { UISection } from "@/components/ui/UISection";

type AboutSectionProps = {
  locale: Locale;
  children?: React.ReactNode;
};

export function AboutSection({ locale, children }: AboutSectionProps) {
  const { about } = getContent(locale);
  const details = about.description.join(TOKENS.separator.bullet);

  return (
    <>
      <UISection
        title={about.title}
        headingLevel={1}
        description={details}
      >
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {children}
      </UISection>
    </>
  );
}
