import { UIParagraphs } from "@/components/ui/UIParagraphs";
import { getContent } from "@/content";
import { ResumeSection } from "@/features/resume/ui/ResumeSection";
import type { Locale } from "@/i18n/config";

type ResumeAboutProps = {
  locale: Locale;
};

export function ResumeAbout({ locale }: ResumeAboutProps) {
  const { about } = getContent(locale);

  return (
    <ResumeSection title={about.title}>
      <UIParagraphs data={about.summary} className="gap-3" />
    </ResumeSection>
  );
}
