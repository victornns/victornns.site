import { padNumber } from "@/lib/format";

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
      <span aria-hidden="true" className="h-px flex-1 bg-neutral-300" />
      <button
        type="button"
        onClick={onClick}
        className="flex min-h-14 items-center gap-1.5 rounded-full border border-black px-7 font-medium transition-colors duration-500 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        {label}
        <sup className="text-xs">{padNumber(hiddenCount)}</sup>
      </button>
      <span aria-hidden="true" className="h-px flex-1 bg-neutral-300" />
    </div>
  );
}
