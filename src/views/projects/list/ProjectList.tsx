import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";
import { UICard } from "@/components/ui/UICard";
import { ProjectLink } from "@/views/projects/list/ProjectLink";
import { sanitizeUrlForDisplay, SEPARATORS } from "@/lib/format";

import type { Project } from "@/content/projects";
import type { Locale } from "@/i18n/config";

type ProjectListProps = {
  locale: Locale;
  projects: Project[];
  designLabel: string;
};

function DesignCredit({
  organizationId,
  label,
}: {
  organizationId?: Project["organizationId"];
  label: string;
}) {
  if (!organizationId) return null;

  return (
    <>
      {SEPARATORS.default}
      {label}: <OrganizationDisplayName id={organizationId} />
    </>
  );
}

function ProjectUrl({ project }: { project: Project }) {
  const officialUrl = project.links?.official?.url;

  return officialUrl ? (
    <>
      {SEPARATORS.default}
      {sanitizeUrlForDisplay(officialUrl)}
    </>
  ) : null;
}

function ProjectItem({
  locale,
  project,
  designLabel,
}: {
  locale: Locale;
  project: Project;
  designLabel: string;
}) {
  const { date, organizationId, summary } = project;

  return (
    <div className="group relative">
      <UICard.Root className="transition-colors group-focus-within:bg-neutral-50 group-hover:bg-neutral-50">
        <UICard.Label>
          {date}
          <DesignCredit organizationId={organizationId} label={designLabel} />
          <ProjectUrl project={project} />
        </UICard.Label>
        <UICard.Title>
          {/* Stretches its click area to the whole (relatively positioned)
              card via after:inset-0, so the title is the only visible link
              but the entire card is clickable. */}
          <ProjectLink
            locale={locale}
            project={project}
            className="after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {project.title}
          </ProjectLink>
        </UICard.Title>
        <UICard.Paragraphs data={summary} />
      </UICard.Root>
    </div>
  );
}

export function ProjectList({
  locale,
  projects,
  designLabel,
}: ProjectListProps) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectItem
            locale={locale}
            project={project}
            designLabel={designLabel}
          />
        </li>
      ))}
    </ul>
  );
}
