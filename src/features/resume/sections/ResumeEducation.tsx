import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";
import { getContent } from "@/content";
import type { Education } from "@/content/education";
import { ResumeSection } from "@/features/resume/ui/ResumeSection";
import type { Locale } from "@/i18n/config";
import { formatPeriod } from "@/lib/format";

type EducationEntryProps = {
  item: Education;
  present: string;
};

function EducationEntry({ item, present }: EducationEntryProps) {
  return (
    <li className="break-inside-avoid-page py-3 first:pt-0">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4">
        <h3 className="text-base font-semibold">{item.degree}</h3>
        <p className="whitespace-nowrap text-xs font-light">
          {formatPeriod(item.period, present)}
          {item.status && ` · ${item.status}`}
        </p>
      </div>

      <OrganizationDisplayName
        id={item.organizationId}
        as="p"
        className="text-sm italic text-muted"
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
    <ResumeSection title={education.title} description={education.description}>
      <ul className="divide-y">
        {education.items.map((item) => (
          <EducationEntry key={item.id} item={item} present={common.present} />
        ))}
      </ul>
    </ResumeSection>
  );
}
