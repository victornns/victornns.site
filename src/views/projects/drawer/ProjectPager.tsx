type NavButtonProps = {
  direction: "previous" | "next";
  label: string;
  onClick: () => void;
};

function NavButton({ direction, label, onClick }: NavButtonProps) {
  const isPrevious = direction === "previous";

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-8 items-center justify-center px-1 text-muted transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      <span className="relative block h-3.5 w-3.5" aria-hidden="true">
        <span
          className={
            isPrevious
              ? "absolute left-0 top-1/2 block h-px w-3 -translate-y-1/2 bg-current"
              : "absolute right-0 top-1/2 block h-px w-3 -translate-y-1/2 bg-current"
          }
        />
        <span
          className={
            isPrevious
              ? "absolute left-0 top-1/2 block h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-l border-current"
              : "absolute right-0 top-1/2 block h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r border-t border-current"
          }
        />
      </span>
    </button>
  );
}

type ProjectPagerProps = {
  currentIndex: number;
  totalProjects: number;
  previousLabel: string;
  nextLabel: string;
  onPrevious: () => void;
  onNext: () => void;
};

export function ProjectPager({
  currentIndex,
  totalProjects,
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
}: ProjectPagerProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <NavButton
          direction="previous"
          label={previousLabel}
          onClick={onPrevious}
        />
        <NavButton direction="next" label={nextLabel} onClick={onNext} />
      </div>

      <p className="text-wide-tracking text-xs text-muted">
        {currentIndex + 1}/{totalProjects}
      </p>
    </div>
  );
}
