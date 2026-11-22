import { padNumber } from "@/lib/format";
import { tw } from "@/lib/tailwind";

const BUTTON_CLASSNAME = tw`flex min-h-14 items-center gap-1.5 rounded-full border border-black px-7 font-medium transition-colors duration-500 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`;

const RULE_CLASSNAME = tw`h-px flex-1 bg-neutral-300`;

type ShowAllProjectsButtonProps = {
  label: string;
  hiddenCount: number;
  onClick: () => void;
};

export function ShowAllProjectsButton({
  label,
  hiddenCount,
  onClick,
}: ShowAllProjectsButtonProps) {
  return (
    <div className="flex items-center gap-6 lg:pt-8">
      <span aria-hidden="true" className={RULE_CLASSNAME} />
      <button type="button" onClick={onClick} className={BUTTON_CLASSNAME}>
        {label}
        <sup className="text-xs">{padNumber(hiddenCount)}</sup>
      </button>
      <span aria-hidden="true" className={RULE_CLASSNAME} />
    </div>
  );
}
