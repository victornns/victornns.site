import { ArrowRightIcon } from "@/features/portfolio/ui/icons/ArrowRightIcon";

type ProjectsScrollCueProps = {
  label: string;
};

/** Decorative pause between the featured carousel and the listing, so it is hidden from assistive tech. */
export function ProjectsScrollCue({ label }: ProjectsScrollCueProps) {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col items-center gap-4 pb-16 text-muted lg:pb-24"
    >
      <p className="text-wide-tracking text-xs">{label}</p>
      <span className="motion-safe:animate-scroll-cue">
        <ArrowRightIcon strokeWidth={1.5} className="rotate-90" />
      </span>
    </div>
  );
}
