import Image from "next/image";

import type { Project } from "@/content/projects";
import { ProjectMockup } from "@/features/portfolio/projects/components/ProjectMockup";
import { getPrimaryProjectUrl } from "@/features/portfolio/projects/lib/projectLinks";
import { tw } from "@/lib/tailwind";

// Zooms in slightly while the surrounding `group` is hovered or its link has keyboard focus.
const COVER_CLASSNAME = tw`object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-[1.03] group-has-[a:focus-visible]:scale-[1.03] motion-reduce:transition-none`;

const LINK_CLASSNAME = tw`group absolute inset-0 flex items-center justify-center`;

type ProjectPreviewProps = {
  project: Project;
  /** `next/image` sizes of the stage the preview fills. */
  sizes: string;
  /** Width and placement of the mockup shown when the project has no cover. */
  mockupClassName?: string;
  priority?: boolean;
  /** Links the preview to the project's public address, when it has one. */
  linked?: boolean;
};

/**
 * The project's main visual, filling a `relative` stage: its cover image when
 * it has one, otherwise its screenshots (or a placeholder) on device mockups.
 */
export function ProjectPreview({
  project,
  sizes,
  mockupClassName,
  priority,
  linked = false,
}: ProjectPreviewProps) {
  const cover = project.images?.cover;
  const url = linked ? getPrimaryProjectUrl(project) : null;

  const preview = cover ? (
    <Image
      src={cover}
      alt=""
      fill
      sizes={sizes}
      priority={priority}
      className={COVER_CLASSNAME}
    />
  ) : (
    <ProjectMockup
      project={project}
      sizes={sizes}
      priority={priority}
      className={mockupClassName}
    />
  );

  if (!url) return preview;

  return (
    // Same destination as the drawer's "view project" action, which is the
    // accessible one, so this pointer shortcut stays out of the tab order.
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      aria-hidden="true"
      className={LINK_CLASSNAME}
    >
      {preview}
    </a>
  );
}
