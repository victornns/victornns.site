import { getContent } from "@/content";
import type { TechStackCategory } from "@/content/techStack";
import { ResumeSection } from "@/features/resume/components/ResumeSection";
import type { Locale } from "@/i18n/config";
import { SEPARATORS } from "@/lib/format";

type CategoryEntryProps = {
  category: TechStackCategory;
};

function CategoryEntry({ category }: CategoryEntryProps) {
  return (
    <p className="text-sm">
      <span className="font-semibold">{category.title}:</span>{" "}
      {category.items.join(SEPARATORS.list)}
    </p>
  );
}

type ResumeSkillsProps = {
  locale: Locale;
};

export function ResumeSkills({ locale }: ResumeSkillsProps) {
  const { techStack } = getContent(locale);

  return (
    <ResumeSection title={techStack.title} description={techStack.description}>
      <div className="grid grid-cols-1 gap-2">
        {techStack.columns.map((categories, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-2">
            {categories.map((category) => (
              <CategoryEntry key={category.id} category={category} />
            ))}
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}
