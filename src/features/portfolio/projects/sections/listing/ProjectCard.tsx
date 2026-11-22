import { UIParagraphs } from "@/components/ui/UIParagraphs";
import type { Project } from "@/content/projects";
import { ProjectArrowCircle } from "@/features/portfolio/projects/components/ProjectArrowCircle";
import { ProjectBrowserMockup } from "@/features/portfolio/projects/components/ProjectBrowserMockup";
import { ProjectLink } from "@/features/portfolio/projects/components/ProjectLink";
import { ProjectTechnologies } from "@/features/portfolio/projects/components/ProjectTechnologies";
import { getProjectPath } from "@/features/portfolio/projects/lib/projectPaths";
import { ArrowRightIcon } from "@/features/portfolio/ui/icons/ArrowRightIcon";
import type { Locale } from "@/i18n/config";
import { padNumber, SEPARATORS } from "@/lib/format";
import { tw } from "@/lib/tailwind";

const STAGE_CLASSNAME = tw`relative flex aspect-square items-center justify-center overflow-hidden bg-neutral-100`;

const VIEW_PROJECT_BADGE_CLASSNAME = tw`text-wide-tracking pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 scale-90 items-center gap-2 rounded-full bg-black px-5 py-3.5 text-xs text-white opacity-0 transition duration-700 ease-out-expo group-hover:scale-100 group-hover:opacity-100 group-has-[a:focus-visible]:scale-100 group-has-[a:focus-visible]:opacity-100 motion-reduce:transition-none`;

const TITLE_LINK_CLASSNAME = tw`after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`;

type ProjectCardProps = {
  locale: Locale;
  project: Project;
  /** 1-based position among all projects, kept stable while filtering. */
  number: number;
  total: number;
  categoryLabel: string;
  viewProjectLabel: string;
};

export function ProjectCard({
  locale,
  project,
  number,
  total,
  categoryLabel,
  viewProjectLabel,
}: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col gap-6">
      <div className={STAGE_CLASSNAME}>
        <span
          aria-hidden="true"
          className="text-wide-tracking absolute right-4 top-4 text-xs text-muted"
        >
          {padNumber(number)}
          {SEPARATORS.default}
          {padNumber(total)}
        </span>

        <ProjectBrowserMockup project={project} className="w-4/5" />

        <span aria-hidden="true" className={VIEW_PROJECT_BADGE_CLASSNAME}>
          {viewProjectLabel}
          <ArrowRightIcon className="h-3 w-3 -rotate-45" />
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-wide-tracking flex items-center gap-3 text-xs">
          <span>{padNumber(number)}</span>
          <span aria-hidden="true" className="h-px flex-1 bg-black" />
          <span>
            {categoryLabel}
            {SEPARATORS.bullet}
            {project.date}
          </span>
        </p>

        <div className="flex items-end justify-between gap-5">
          <h3 className="text-2xl font-light leading-tight xl:text-3xl">
            {/* Stretches its click area to the whole (relatively positioned)
                card via after:inset-0, so the title is the only link but the
                entire card is clickable. */}
            <ProjectLink
              projectId={project.id}
              href={getProjectPath(locale, project)}
              className={TITLE_LINK_CLASSNAME}
            >
              {project.title}
            </ProjectLink>
          </h3>

          <ProjectArrowCircle />
        </div>

        <UIParagraphs
          data={project.summary}
          className="max-w-prose leading-relaxed text-neutral-700"
        />

        <ProjectTechnologies technologies={project.technologies} />
      </div>
    </article>
  );
}
