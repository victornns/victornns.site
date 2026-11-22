import type { Project } from "@/content/projects";
import { sanitizeUrlForDisplay } from "@/lib/format";
import { joinClassNames, tw } from "@/lib/tailwind";

// Lifts while the surrounding `group` (the project's card or slide) is hovered or its link has keyboard focus.
const MOCKUP_CLASSNAME = tw`overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-black/5 transition-transform duration-1000 ease-out-expo group-hover:-translate-y-2 group-hover:scale-[1.02] group-has-[a:focus-visible]:-translate-y-2 group-has-[a:focus-visible]:scale-[1.02] motion-reduce:transition-none`;

const TOOLBAR_CLASSNAME = tw`flex items-center gap-1.5 border-b border-neutral-200 bg-neutral-100 px-3 py-2`;

const TOOLBAR_DOT_CLASSNAME = tw`size-1.5 rounded-full bg-neutral-300`;

const URL_BAR_CLASSNAME = tw`mx-auto max-w-[60%] truncate rounded-full bg-neutral-200 px-3 text-[10px] leading-4 text-neutral-500`;

const SCREEN_CLASSNAME = tw`flex aspect-[16/10] flex-col justify-center gap-3 p-5`;

const TEXT_LINE_CLASSNAME = tw`h-1 rounded-full bg-neutral-200`;

type ProjectBrowserMockupProps = {
  project: Project;
  className?: string;
};

function getDisplayUrl({ links }: Project): string | undefined {
  const url = links?.official?.url ?? links?.preview?.url;
  return url && sanitizeUrlForDisplay(url);
}

/** Stand-in for a project screenshot: a browser window showing the project title as its hero. */
export function ProjectBrowserMockup({
  project,
  className,
}: ProjectBrowserMockupProps) {
  const displayUrl = getDisplayUrl(project);

  return (
    <div
      aria-hidden="true"
      className={joinClassNames(MOCKUP_CLASSNAME, className)}
    >
      <div className={TOOLBAR_CLASSNAME}>
        <span className={TOOLBAR_DOT_CLASSNAME} />
        <span className={TOOLBAR_DOT_CLASSNAME} />
        <span className={TOOLBAR_DOT_CLASSNAME} />
        {displayUrl && <span className={URL_BAR_CLASSNAME}>{displayUrl}</span>}
      </div>

      <div className={SCREEN_CLASSNAME}>
        <p className="line-clamp-3 text-lg font-light leading-tight">
          {project.title}
        </p>
        <span className={joinClassNames(TEXT_LINE_CLASSNAME, "w-2/3")} />
        <span className={joinClassNames(TEXT_LINE_CLASSNAME, "w-1/2")} />
      </div>
    </div>
  );
}
