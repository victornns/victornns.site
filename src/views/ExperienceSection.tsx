import { experiences } from "@/content/experiences";
import { TOKENS } from "@/lib/constants";

import { UISection } from "@/components/ui/UISection";
import { UICard } from "@/components/ui/UICard";
import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";

export function ExperienceSection() {
  return (
    <UISection title="Experiências" description="Histórico profissional">
      <ul>
        {experiences.map((experience) => (
          <li key={experience.id}>
            <UICard.Root>
              <UICard.Label>
                {experience.period.start}
                {experience.period.end && (
                  <>
                    {TOKENS.separator.default}
                    {experience.period.end}
                  </>
                )}
              </UICard.Label>
              <UICard.Title>
                {experience.role} @ <OrganizationDisplayName id={experience.organizationId} />
              </UICard.Title>
              <p className="max-w-screen-lg text-sm">{experience.summary}</p>
            </UICard.Root>
          </li>
        ))}
      </ul>
    </UISection>
  );
}
