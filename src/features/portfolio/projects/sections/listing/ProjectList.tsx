import type { Project, ProjectCategory } from "@/content/projects";
import { ProjectCard } from "@/features/portfolio/projects/sections/listing/ProjectCard";
import type { Locale } from "@/i18n/config";

type ProjectListProps = {
  locale: Locale;
  projects: Project[];
  /** Every project, so card numbers stay the same whatever the filters show. */
  allProjects: Project[];
  categoryLabels: Record<ProjectCategory, string>;
  viewProjectLabel: string;
};

export function ProjectList({
  locale,
  projects,
  allProjects,
  categoryLabels,
  viewProjectLabel,
}: ProjectListProps) {
  return (
    <ul className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard
            locale={locale}
            project={project}
            number={allProjects.indexOf(project) + 1}
            total={allProjects.length}
            categoryLabel={categoryLabels[project.category]}
            viewProjectLabel={viewProjectLabel}
          />
        </li>
      ))}
    </ul>
  );
}
