import { ArrowRightIcon } from "@/features/portfolio/ui/icons/ArrowRightIcon";
import { tw } from "@/lib/tailwind";

// Fills in while the surrounding `group` (the project's card or slide) is hovered or its link has keyboard focus.
const CIRCLE_CLASSNAME = tw`flex size-12 shrink-0 items-center justify-center rounded-full border border-black transition-colors duration-500 group-hover:bg-black group-hover:text-white group-has-[a:focus-visible]:bg-black group-has-[a:focus-visible]:text-white`;

const ICON_CLASSNAME = tw`-rotate-45 transition-transform duration-700 ease-out-expo group-hover:rotate-0 group-has-[a:focus-visible]:rotate-0 motion-reduce:transition-none`;

/** Decorative "open project" cue; the project's link carries the action. */
export function ProjectArrowCircle() {
  return (
    <span aria-hidden="true" className={CIRCLE_CLASSNAME}>
      <ArrowRightIcon className={ICON_CLASSNAME} />
    </span>
  );
}
