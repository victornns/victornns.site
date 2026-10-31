import { getContent } from "@/content";
import type { Education } from "@/content/education";
import { ResumeEntryHeader } from "@/features/resume/ui/ResumeEntryHeader";
import { ResumeSection } from "@/features/resume/ui/ResumeSection";
import type { Locale } from "@/i18n/config";
import { formatPeriod } from "@/lib/format";

type EducationEntryProps = {
  item: Education;
  present: string;
};

function EducationEntry({ item, present }: EducationEntryProps) {
  return (
    <li className="break-inside-avoid-page py-4 first:pt-0 last:pb-0">
      <ResumeEntryHeader
        title={item.degree}
        period={
          <>
            {formatPeriod(item.period, present)}
            {item.status && ` · ${item.status}`}
          </>
        }
        organizationId={item.organizationId}
      />
    </li>
  );
}

type ResumeEducationProps = {
  locale: Locale;
};

export function ResumeEducation({ locale }: ResumeEducationProps) {
  const { education, common } = getContent(locale);

  return (
    <ResumeSection title={education.title}>
      <ul className="divide-y">
        {education.items.map((item) => (
          <EducationEntry key={item.id} item={item} present={common.present} />
        ))}
      </ul>
    </ResumeSection>
  );
}
