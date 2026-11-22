import Image from "next/image";

import type { DesktopDevice, Project } from "@/content/projects";
import { BrowserFrame } from "@/features/portfolio/projects/components/devices/BrowserFrame";
import { LaptopFrame } from "@/features/portfolio/projects/components/devices/LaptopFrame";
import { MonitorFrame } from "@/features/portfolio/projects/components/devices/MonitorFrame";
import { PhoneFrame } from "@/features/portfolio/projects/components/devices/PhoneFrame";
import { getPrimaryProjectUrl } from "@/features/portfolio/projects/lib/projectLinks";
import { sanitizeUrlForDisplay } from "@/lib/format";
import { joinClassNames, tw } from "@/lib/tailwind";

import type { ComponentType, ReactNode } from "react";

type DesktopFrameProps = {
  address?: string;
  className?: string;
  children: ReactNode;
};

const DESKTOP_FRAMES = {
  browser: BrowserFrame,
  laptop: LaptopFrame,
  monitor: MonitorFrame,
} satisfies Record<DesktopDevice, ComponentType<DesktopFrameProps>>;

// The phone takes up a fraction of the mockup, so it needs far fewer pixels.
const PHONE_SCREENSHOT_SIZES = "(min-width: 1024px) 15vw, 40vw";

// Lifts while the surrounding `group` (the project's card or slide, or the
// preview's own link) is hovered or its link has keyboard focus.
const MOCKUP_CLASSNAME = tw`relative transition-transform duration-1000 ease-out-expo group-hover:-translate-y-2 group-hover:scale-[1.02] group-has-[a:focus-visible]:-translate-y-2 group-has-[a:focus-visible]:scale-[1.02] motion-reduce:transition-none`;

const PLACEHOLDER_LINE_CLASSNAME = tw`h-[0.8cqw] rounded-full bg-neutral-200`;

type ProjectMockupProps = {
  project: Project;
  /** `next/image` sizes of the space the mockup sits in. */
  sizes: string;
  priority?: boolean;
  className?: string;
};

type ScreenshotProps = {
  src: string;
  sizes: string;
  priority?: boolean;
};

function Screenshot({ src, sizes, priority }: ScreenshotProps) {
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover object-top"
    />
  );
}

/** Stands in for a desktop screenshot: the project title as the page's hero. */
function ScreenPlaceholder({ title }: { title: string }) {
  return (
    <div className="flex h-full flex-col justify-center gap-[2.4cqw] p-[5cqw]">
      <p className="line-clamp-3 text-[5.5cqw] font-light leading-tight">
        {title}
      </p>
      <span className={joinClassNames(PLACEHOLDER_LINE_CLASSNAME, "w-2/3")} />
      <span className={joinClassNames(PLACEHOLDER_LINE_CLASSNAME, "w-1/2")} />
    </div>
  );
}

/**
 * The project shown on devices: its desktop screenshot in its desktop frame,
 * its mobile screenshot on a phone, or both side by side. Without a desktop
 * screenshot the desktop frame shows a placeholder, so every project gets a
 * mockup. Decorative: the project's title and link carry its meaning.
 */
export function ProjectMockup({
  project,
  sizes,
  priority,
  className,
}: ProjectMockupProps) {
  const { desktop, mobile } = project.images ?? {};
  const url = getPrimaryProjectUrl(project);
  const address = url ? sanitizeUrlForDisplay(url) : undefined;
  const DesktopFrame = DESKTOP_FRAMES[project.device ?? "browser"];
  const showsDesktop = Boolean(desktop) || !mobile;

  return (
    <div
      aria-hidden="true"
      className={joinClassNames(MOCKUP_CLASSNAME, className)}
    >
      {showsDesktop && (
        <DesktopFrame
          address={address}
          className={mobile ? "w-[88%]" : undefined}
        >
          {desktop ? (
            <Screenshot src={desktop} sizes={sizes} priority={priority} />
          ) : (
            <ScreenPlaceholder title={project.title} />
          )}
        </DesktopFrame>
      )}

      {mobile && (
        <PhoneFrame
          address={address}
          className={
            showsDesktop
              ? "absolute bottom-0 right-0 w-[22%]"
              : "mx-auto w-[30%]"
          }
        >
          <Screenshot
            src={mobile}
            sizes={PHONE_SCREENSHOT_SIZES}
            priority={priority}
          />
        </PhoneFrame>
      )}
    </div>
  );
}
