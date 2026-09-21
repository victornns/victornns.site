import { ResumeAbout } from "@/features/resume/sections/ResumeAbout";
import { ResumeEducation } from "@/features/resume/sections/ResumeEducation";
import { ResumeExperience } from "@/features/resume/sections/ResumeExperience";
import { ResumeHeader } from "@/features/resume/sections/ResumeHeader";
import { ResumeSkills } from "@/features/resume/sections/ResumeSkills";
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
  return (
    <main className={RESUME_MAIN_CLASSNAME}>
      <ResumeHeader locale={locale} />
      <ResumeAbout locale={locale} />
      <ResumeExperience locale={locale} />
      <ResumeEducation locale={locale} />
      <ResumeSkills locale={locale} />
    </main>
  );
}
