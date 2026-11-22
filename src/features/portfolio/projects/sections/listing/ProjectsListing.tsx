"use client";

import { useSearchParams } from "next/navigation";

import type { Project, ProjectsListingLabels } from "@/content/projects";
import {
  DEFAULT_PROJECT_FILTERS,
  filterProjects,
  getProjectFiltersSearch,
  parseProjectFilters,
  type ProjectFilterOptions,
  type ProjectFilters,
} from "@/features/portfolio/projects/lib/projectFilters";
import { ProjectFilterControls } from "@/features/portfolio/projects/sections/listing/ProjectFilterControls";
import { ProjectList } from "@/features/portfolio/projects/sections/listing/ProjectList";
import type { Locale } from "@/i18n/config";
import { pushSearch } from "@/lib/history";

type ProjectsListingProps = {
  locale: Locale;
  projects: Project[];
  filterOptions: ProjectFilterOptions;
  labels: ProjectsListingLabels;
  designLabel: string;
};

// A plain history push (not a router navigation) updates `useSearchParams`
// without refetching or remounting the page, so focus and scroll stay put.
function applyFilters(filters: ProjectFilters) {
  pushSearch(
    getProjectFiltersSearch(
      filters,
      new URLSearchParams(window.location.search),
    ),
  );
}

function FilteredProjects({
  locale,
  projects,
  filterOptions,
  labels,
  designLabel,
  filters,
}: ProjectsListingProps & { filters: ProjectFilters }) {
  const visibleProjects = filterProjects(projects, filters);

  return (
    <div className="grid gap-10">
      <ProjectFilterControls
        options={filterOptions}
        filters={filters}
        labels={labels}
        visibleCount={visibleProjects.length}
        totalCount={projects.length}
        onChange={applyFilters}
      />

      {visibleProjects.length > 0 ? (
        <ProjectList
          locale={locale}
          projects={visibleProjects}
          designLabel={designLabel}
        />
      ) : (
        <p className="text-muted">{labels.noResults}</p>
      )}
    </div>
  );
}

export function ProjectsListing(props: ProjectsListingProps) {
  const searchParams = useSearchParams();
  const filters = parseProjectFilters(searchParams, props.filterOptions);

  return <FilteredProjects {...props} filters={filters} />;
}

/** The static HTML can't know the URL query, so it renders the unfiltered list until the client reads it. */
export function ProjectsListingFallback(props: ProjectsListingProps) {
  return <FilteredProjects {...props} filters={DEFAULT_PROJECT_FILTERS} />;
}
