import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";
import type { Project } from "@/content/projects";
import { SEPARATORS } from "@/lib/format";

type ProjectHeadingProps = {
  project: Project;
  categoryLabel: string;
};

export function ProjectHeading({
  project,
  categoryLabel,
}: ProjectHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-wide-tracking text-xs text-muted">{categoryLabel}</p>

      <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
        {project.title}
      </h2>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
        <span>{project.date}</span>
        {project.organizationId && (
          <>
            <span>{SEPARATORS.default}</span>
            <OrganizationDisplayName id={project.organizationId} />
          </>
        )}
      </div>
    </div>
  );
}
