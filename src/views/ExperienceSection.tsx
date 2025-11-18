import { experiences, Experience } from "@/content/experiences";
import { TOKENS } from "@/lib/constants";

import { UISection } from "@/components/ui/UISection";
import { UICard } from "@/components/ui/UICard";
import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";

const formatPeriod = (period: Experience["period"]) => {
  const startDate = period.start;
  const endDate = period.end || "Atualmente";
  const separator = TOKENS.separator.dash;

  return `${startDate}${separator}${endDate}`;
};

const renderTechnologies = (technologies: Experience["technologies"]) => {
  const technologiesList = technologies.join(TOKENS.separator.list);
  return <p className="text-xs mt-6">Principais tecnologias: {technologiesList}</p>;
};

export function ExperienceSection() {
  return (
    <UISection
      title="Experiência"
      description="Histórico profissional"
    >
      <ul>
        {experiences.map((experience) => (
          <li key={experience.id}>
            <UICard.Root>
              <UICard.Label>{formatPeriod(experience.period)}</UICard.Label>
              <UICard.Title>
                {experience.role} @{" "}
                <OrganizationDisplayName
                  id={experience.organizationId}
                  className="italic"
                />
              </UICard.Title>
              <UICard.Paragraphs data={experience.summary} />
              {renderTechnologies(experience.technologies)}
            </UICard.Root>
          </li>
        ))}
      </ul>
    </UISection>
  );
}
