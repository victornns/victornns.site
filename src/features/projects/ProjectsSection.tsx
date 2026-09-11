import { UISection } from "@/components/ui/UISection";
import { getContent } from "@/content";
import { ProjectDetailsDrawer } from "@/features/projects/drawer/ProjectDetailsDrawer";
import { ProjectList } from "@/features/projects/list/ProjectList";
import type { Locale } from "@/i18n/config";

type ProjectsSectionProps = {
  locale: Locale;
  /** Initially selected project, set when landing on a friendly project URL. */
  activeProjectId?: string;
};

export function ProjectsSection({
  locale,
  activeProjectId,
}: ProjectsSectionProps) {
  const { projects, common } = getContent(locale);

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
          designLabel={projects.labels.design}
        />
      </UISection>

      <ProjectDetailsDrawer
        locale={locale}
        projects={projects.items}
        labels={projects.labels}
        closeLabel={common.close}
        initialProjectId={activeProjectId}
      />
    </>
  );
}
