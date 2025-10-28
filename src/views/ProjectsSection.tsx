import { projects } from "@/content/projects";

import { UISection } from "@/components/ui/UISection";
import { UICard } from "@/components/ui/UICard";
import { UILink } from "@/components/ui/UILink";
import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";

export function ProjectsSection() {
  return (
    <UISection title="Trabalhos Recentes" description="Uma seleção de projetos">
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <UICard.Root>
              <UICard.Label>
                {project.date}{" "}
                {project.organizationId && (
                  <>
                    Design: <OrganizationDisplayName id={project.organizationId} />
                  </>
                )}
              </UICard.Label>
              <UICard.Title>
                <UILink href={project.link}>{project.title}</UILink>
              </UICard.Title>
              <p className="max-w-screen-lg text-sm">{project.summary}</p>
            </UICard.Root>
          </li>
        ))}
      </ul>
    </UISection>
  );
}
