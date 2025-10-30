import { projects, Project } from "@/content/projects";
import { TOKENS } from "@/lib/constants";

import { UISection } from "@/components/ui/UISection";
import { UICard } from "@/components/ui/UICard";
import { UILink } from "@/components/ui/UILink";
import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";

function renderDesignCredit(organizationId?: Project["organizationId"]) {
  const separator = TOKENS.separator.default;
  return (
    organizationId && (
      <>
        {separator} Design: <OrganizationDisplayName id={organizationId} />
      </>
    )
  );
}

export function ProjectsSection() {
  return (
    <UISection title="Trabalhos Recentes" description="Uma seleção de projetos">
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <UICard.Root>
              <UICard.Label>
                {project.date}
                {renderDesignCredit(project.organizationId)}
              </UICard.Label>
              <UICard.Title>
                <UILink href={project.link}>{project.title}</UILink>
              </UICard.Title>
              <UICard.Paragraphs data={project.summary} />
            </UICard.Root>
          </li>
        ))}
      </ul>
    </UISection>
  );
}
