import { useId } from "react";

import type { ProjectsListingLabels, ProjectTag } from "@/content/projects";
import {
  ALL_CATEGORIES,
  DEFAULT_PROJECT_FILTERS,
  hasActiveProjectFilters,
  type ProjectFilterOptions,
  type ProjectFilters,
} from "@/features/portfolio/projects/lib/projectFilters";
import { padNumber } from "@/lib/format";
import { joinClassNames, tw } from "@/lib/tailwind";

import type { ReactNode } from "react";

type FilterButtonVariant = "tab" | "pill";

const FILTER_BUTTON_CLASSNAME = tw`transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`;

const VARIANT_CLASSNAMES: Record<
  FilterButtonVariant,
  { base: string; pressed: string; idle: string }
> = {
  tab: {
    base: tw`border-b-2 pb-3 lg:text-lg`,
    pressed: tw`border-black text-black`,
    idle: tw`border-transparent text-neutral-600 hover:text-black`,
  },
  pill: {
    base: tw`rounded-full border px-5 py-2 text-sm`,
    pressed: tw`border-black bg-black text-white`,
    idle: tw`border-neutral-400 text-neutral-600 hover:border-black hover:text-black`,
  },
};

const CLEAR_FILTERS_BUTTON_CLASSNAME = tw`text-sm underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`;

const STATUS_CLASSNAME = tw`text-wide-tracking flex items-center pb-5 text-xs text-neutral-600 lg:border-l lg:py-5 lg:pl-12`;

type FilterButtonProps = {
  variant: FilterButtonVariant;
  pressed: boolean;
  onClick: () => void;
  children: ReactNode;
};

function FilterButton({
  variant,
  pressed,
  onClick,
  children,
}: FilterButtonProps) {
  const classNames = VARIANT_CLASSNAMES[variant];

  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={joinClassNames(
        FILTER_BUTTON_CLASSNAME,
        classNames.base,
        pressed ? classNames.pressed : classNames.idle,
      )}
    >
      {children}
    </button>
  );
}

type ProjectFilterControlsProps = {
  options: ProjectFilterOptions;
  filters: ProjectFilters;
  labels: ProjectsListingLabels;
  visibleCount: number;
  totalCount: number;
  onChange: (filters: ProjectFilters) => void;
};

export function ProjectFilterControls({
  options,
  filters,
  labels,
  visibleCount,
  totalCount,
  onChange,
}: ProjectFilterControlsProps) {
  const tagsLabelId = useId();

  function selectCategory(category: ProjectFilters["category"]) {
    onChange({ ...filters, category });
  }

  function toggleTag(tag: ProjectTag) {
    const tags = filters.tags.includes(tag)
      ? filters.tags.filter((selectedTag) => selectedTag !== tag)
      : [...filters.tags, tag];

    onChange({ ...filters, tags });
  }

  return (
    <div className="border-t border-neutral-400">
      <div className="flex flex-wrap justify-between gap-x-12 border-b">
        <div
          role="group"
          aria-label={labels.categories}
          className="flex flex-wrap gap-x-8 gap-y-4 pb-5 pt-7 lg:gap-x-12"
        >
          <FilterButton
            variant="tab"
            pressed={filters.category === ALL_CATEGORIES}
            onClick={() => selectCategory(ALL_CATEGORIES)}
          >
            {labels.allCategories}
            <sup className="ml-1 text-xs">{padNumber(totalCount)}</sup>
          </FilterButton>

          {options.categories.map(({ id, label, count }) => (
            <FilterButton
              key={id}
              variant="tab"
              pressed={filters.category === id}
              onClick={() => selectCategory(id)}
            >
              {label}
              <sup className="ml-1 text-xs">{padNumber(count)}</sup>
            </FilterButton>
          ))}
        </div>

        <p role="status" className={STATUS_CLASSNAME}>
          {labels.showing} {padNumber(visibleCount)} / {padNumber(totalCount)}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-12 gap-y-4 pt-10">
        {options.tags.length > 0 && (
          <div
            role="group"
            aria-labelledby={tagsLabelId}
            className="flex flex-wrap items-center gap-3"
          >
            <span id={tagsLabelId} className="mr-3 text-sm text-neutral-600">
              {labels.tags}
            </span>

            {options.tags.map(({ id, label }) => (
              <FilterButton
                key={id}
                variant="pill"
                pressed={filters.tags.includes(id)}
                onClick={() => toggleTag(id)}
              >
                {label}
              </FilterButton>
            ))}
          </div>
        )}

        <span
          aria-hidden="true"
          className="hidden h-px flex-1 bg-neutral-300 lg:block"
        />

        {hasActiveProjectFilters(filters) && (
          <button
            type="button"
            onClick={() => onChange(DEFAULT_PROJECT_FILTERS)}
            className={CLEAR_FILTERS_BUTTON_CLASSNAME}
          >
            {labels.clearFilters}
          </button>
        )}
      </div>
    </div>
  );
}
