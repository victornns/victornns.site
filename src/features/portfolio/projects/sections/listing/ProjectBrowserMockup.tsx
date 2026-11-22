import type { Project } from "@/content/projects";
import { sanitizeUrlForDisplay } from "@/lib/format";
import { joinClassNames } from "@/lib/tailwind";

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
      className={joinClassNames(
        "overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-black/5",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-neutral-200 bg-neutral-100 px-3 py-2">
        <span className="size-1.5 rounded-full bg-neutral-300" />
        <span className="size-1.5 rounded-full bg-neutral-300" />
        <span className="size-1.5 rounded-full bg-neutral-300" />
        {displayUrl && (
          <span className="mx-auto max-w-[60%] truncate rounded-full bg-neutral-200 px-3 text-[10px] leading-4 text-neutral-500">
            {displayUrl}
          </span>
        )}
      </div>

      <div className="flex aspect-[16/10] flex-col justify-center gap-3 p-5">
        <p className="line-clamp-3 text-lg font-light leading-tight">
          {project.title}
        </p>
        <span className="h-1 w-2/3 rounded-full bg-neutral-200" />
        <span className="h-1 w-1/2 rounded-full bg-neutral-200" />
      </div>
    </div>
  );
}
