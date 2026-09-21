import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";
import type { Project } from "@/content/projects";
import { SEPARATORS } from "@/lib/format";

export function ProjectHeading({ project }: { project: Project }) {
  const eyebrow = project.type?.join(SEPARATORS.bullet);

  return (
    <div className="space-y-3">
      {eyebrow && (
        <p className="text-wide-tracking text-xs text-muted">{eyebrow}</p>
      )}

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
