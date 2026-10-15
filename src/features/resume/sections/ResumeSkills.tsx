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
      <dl className="grid grid-cols-1 gap-2 text-sm">
        {techStack.columns.map((categories, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-2">
            {categories.map((category) => (
              <ResumeMeta
                key={category.id}
                label={category.title}
                items={category.items}
              />
            ))}
          </div>
        ))}
      </dl>
    </ResumeSection>
  );
}
