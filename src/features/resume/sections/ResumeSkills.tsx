import { getContent } from "@/content";
import { ResumeMeta } from "@/features/resume/ui/ResumeMeta";
import { ResumeSection } from "@/features/resume/ui/ResumeSection";
import type { Locale } from "@/i18n/config";

type ResumeSkillsProps = {
  locale: Locale;
};

export function ResumeSkills({ locale }: ResumeSkillsProps) {
  const { techStack } = getContent(locale);

  return (
    <ResumeSection title={techStack.title}>
      <dl className="flex flex-col gap-2">
        {techStack.columns.flat().map((category) => (
          <ResumeMeta
            key={category.id}
            label={category.title}
            items={category.items}
          />
        ))}
      </dl>
    </ResumeSection>
  );
}
