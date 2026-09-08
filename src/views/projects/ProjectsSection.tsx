import { UISection } from "@/components/ui/UISection";
import { ProjectList } from "@/views/projects/list/ProjectList";
import { ProjectDetailsDrawer } from "@/views/projects/drawer/ProjectDetailsDrawer";

import type { ProjectsContent } from "@/content/projects";
import type { CommonContent } from "@/content/common";
import type { Locale } from "@/i18n/config";

type ProjectsSectionProps = {
  locale: Locale;
  projects: ProjectsContent;
  common: CommonContent;
  /** Initially selected project, set when landing on a friendly project URL. */
  activeProjectId?: string;
};

export function ProjectsSection({
  locale,
  projects,
  common,
  activeProjectId,
}: ProjectsSectionProps) {
  return (
    <>
      <UISection
        id="projects"
        title={projects.title}
        description={projects.description}
      >
        <ProjectList
          locale={locale}
          projects={projects.items}
          designLabel={common.design}
        />
      </UISection>

      <ProjectDetailsDrawer
        locale={locale}
        common={common}
        projects={projects.items}
        initialProjectId={activeProjectId}
      />
    </>
  );
}
