import { getContent } from "@/content";
import { TOKENS } from "@/lib/constants";

import type { Locale } from "@/i18n/config";
import type { Education } from "@/content/education";

import { UISection } from "@/components/ui/UISection";
import { UICard } from "@/components/ui/UICard";
import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";

type EducationSectionProps = {
  locale: Locale;
};

const formatPeriod = (period: Education["period"], present: string) => {
  const startDate = period.start;
  const endDate = period.end || present;
  const separator = TOKENS.separator.dash;

  return `${startDate}${separator}${endDate}`;
};

const renderStatus = (status: Education["status"]) => {
  if (!status) {
    return null;
  }

  return (
    <>
      {TOKENS.separator.bullet}
      {status}
    </>
  );
};

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
            <UICard.Root>
              <UICard.Label>
                {formatPeriod(item.period, common.present)}
                {renderStatus(item.status)}
              </UICard.Label>
              <UICard.Title>{item.degree}</UICard.Title>
              <OrganizationDisplayName
                as="p"
                id={item.organizationId}
                className="italic"
              />
            </UICard.Root>
          </li>
        ))}
      </ul>
    </UISection>
  );
}
