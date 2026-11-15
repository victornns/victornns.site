import { getContent } from "@/content";
import { ResumeSection } from "@/features/resume/ui/ResumeSection";
import type { Locale } from "@/i18n/config";

type ResumeLanguagesProps = {
  locale: Locale;
};

export function ResumeLanguages({ locale }: ResumeLanguagesProps) {
  const { languages } = getContent(locale);

  return (
    <ResumeSection title={languages.title}>
      <ul className="flex flex-col gap-1">
        {languages.items.map((language) => (
          <li key={language.id}>
            <span className="font-semibold">{language.name}</span> —{" "}
            {language.level}
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}
