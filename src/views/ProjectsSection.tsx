import { getContent } from "@/content";
import type { Project } from "@/content/projects";
import { TOKENS } from "@/lib/constants";
import { sanitizeUrlForDisplay } from "@/lib/utils";

import type { Locale } from "@/i18n/config";

import { UISection } from "@/components/ui/UISection";
import { UICard } from "@/components/ui/UICard";
import { UILink } from "@/components/ui/UILink";
import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";

type ProjectsSectionProps = {
  locale: Locale;
};

type ProjectItemProps = {
  project: Project;
};

type DesignCreditProps = {
  organizationId?: Project["organizationId"];
};

function DesignCredit({ organizationId }: DesignCreditProps) {
  if (!organizationId) return null;

  return (
    <>
      {TOKENS.separator.default}
      Design: <OrganizationDisplayName id={organizationId} />
    </>
  );
}

function ProjectTitle({ project }: { project: Project }) {
  const previewUrl = project.links?.preview?.url;

  const officialUrl = project.links?.official?.url;
  const isOfficialExpired = project.links?.official?.expired;

  const linkUrl = (!isOfficialExpired ? officialUrl : null) || previewUrl;

  return linkUrl ? <UILink href={linkUrl}>{project.title}</UILink> : project.title;
}

function ProjectLink({ project }: { project: Project }) {
  const officialUrl = project.links?.official?.url;

  return officialUrl ? (
    <>
      {TOKENS.separator.default}
      {sanitizeUrlForDisplay(officialUrl)}
    </>
  ) : null;
}

function ProjectItem({ project }: ProjectItemProps) {
  const { date, organizationId, summary } = project;

  return (
    <UICard.Root>
      <UICard.Label>
        {date}
        <DesignCredit organizationId={organizationId} />
        <ProjectLink project={project} />
      </UICard.Label>
      <UICard.Title>
        <ProjectTitle project={project} />
      </UICard.Title>
      <UICard.Paragraphs data={summary} />
    </UICard.Root>
  );
}

export function ProjectsSection({ locale }: ProjectsSectionProps) {
  const { projects } = getContent(locale);

  return (
    <UISection
      title={projects.title}
      description={projects.description}
    >
      <ul>
        {projects.items.map((project) => (
          <li key={project.id}>
            <ProjectItem project={project} />
          </li>
        ))}
      </ul>
    </UISection>
  );
}
