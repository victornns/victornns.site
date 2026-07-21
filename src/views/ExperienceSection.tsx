import { getContent } from "@/content";
import { TOKENS } from "@/lib/constants";

import type { Locale } from "@/i18n/config";
import type { Experience } from "@/content/experiences";

import { UISection } from "@/components/ui/UISection";
import { UICard } from "@/components/ui/UICard";
import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";

type ExperienceSectionProps = {
  locale: Locale;
};

const formatPeriod = (period: Experience["period"], present: string) => {
  const startDate = period.start;
  const endDate = period.end || present;
  const separator = TOKENS.separator.dash;

  return `${startDate}${separator}${endDate}`;
};

const renderTechnologies = (technologies: Experience["technologies"], label: string) => {
  const technologiesList = technologies.join(TOKENS.separator.list);
  return (
    <p className="text-xs mt-6">
      {label}: {technologiesList}
    </p>
  );
};

export function ExperienceSection({ locale }: ExperienceSectionProps) {
  const { experiences, common } = getContent(locale);

  return (
    <UISection
      title={experiences.title}
      description={experiences.description}
    >
      <ul>
        {experiences.items.map((experience) => (
          <li key={experience.id}>
            <UICard.Root>
              <UICard.Label>{formatPeriod(experience.period, common.present)}</UICard.Label>
              <UICard.Title>
                {experience.role} @{" "}
                <OrganizationDisplayName
                  id={experience.organizationId}
                  className="italic"
                />
              </UICard.Title>
              <UICard.Paragraphs data={experience.summary} />
              {renderTechnologies(experience.technologies, common.mainTechnologies)}
            </UICard.Root>
          </li>
        ))}
      </ul>
    </UISection>
  );
}
