import { UIParagraphs } from "@/components/ui/UIParagraphs";
import { getContent } from "@/content";
import { ResumeEducation } from "@/features/resume/components/ResumeEducation";
import { ResumeExperience } from "@/features/resume/components/ResumeExperience";
import { ResumeHeader } from "@/features/resume/components/ResumeHeader";
import { ResumeSection } from "@/features/resume/components/ResumeSection";
import { ResumeSkills } from "@/features/resume/components/ResumeSkills";
import type { Locale } from "@/i18n/config";
import { tw } from "@/lib/tailwind";

// Approximates the A4 content width (210mm) so the screen reading experience
// matches the printed page. The padding stands in for page margins on
// screen; print (both the browser's own printing and the Playwright-rendered
// PDF, which uses the print media type) gets its margins from `@page` in
// globals.scss instead, so it isn't doubled up with this padding.
const RESUME_MAIN_CLASSNAME = tw`mx-auto max-w-[210mm] px-8 py-10 text-sm leading-relaxed text-black sm:px-14 sm:py-14 print:max-w-none print:p-0`;

type ResumeProps = {
  locale: Locale;
};

export function Resume({ locale }: ResumeProps) {
  const { about } = getContent(locale);

  return (
    <main className={RESUME_MAIN_CLASSNAME}>
      <ResumeHeader locale={locale} />

      <ResumeSection title={about.title}>
        <UIParagraphs data={about.summary} className="gap-3" />
      </ResumeSection>

      <ResumeExperience locale={locale} />
      <ResumeEducation locale={locale} />
      <ResumeSkills locale={locale} />
    </main>
  );
}
