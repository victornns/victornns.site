import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";
import { getContent } from "@/content";
import type { Education } from "@/content/education";
import { UICard } from "@/features/portfolio/ui/UICard";
import { UISection } from "@/features/portfolio/ui/UISection";
import type { Locale } from "@/i18n/config";
import { formatPeriod, SEPARATORS } from "@/lib/format";

type EducationSectionProps = {
  locale: Locale;
};

function EducationItem({
  item,
  present,
}: {
  item: Education;
  present: string;
}) {
  return (
    <UICard.Root>
      <UICard.Label>
        {formatPeriod(item.period, present)}
        {item.status && (
          <>
            {SEPARATORS.bullet}
            {item.status}
          </>
        )}
      </UICard.Label>
      <UICard.Title>{item.degree}</UICard.Title>
      <OrganizationDisplayName
        as="p"
        id={item.organizationId}
        className="text-sm italic"
      />
    </UICard.Root>
  );
}

export function EducationSection({ locale }: EducationSectionProps) {
  const { education, common } = getContent(locale);

  return (
    <UISection
      id="education"
      title={education.title}
      description={education.description}
    >
      <ul>
        {education.items.map((item) => (
          <li key={item.id}>
            <EducationItem item={item} present={common.present} />
          </li>
        ))}
      </ul>
    </UISection>
  );
}
