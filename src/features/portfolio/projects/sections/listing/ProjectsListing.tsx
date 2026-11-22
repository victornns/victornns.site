"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

import type {
  Project,
  ProjectCategory,
  ProjectsListingLabels,
} from "@/content/projects";
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
import { ShowAllProjectsButton } from "@/features/portfolio/projects/sections/listing/ShowAllProjectsButton";
import type { Locale } from "@/i18n/config";
import { pushSearch } from "@/lib/history";

const INITIAL_VISIBLE_PROJECTS = 12;

type ProjectsListingProps = {
  locale: Locale;
  projects: Project[];
  filterOptions: ProjectFilterOptions;
  labels: ProjectsListingLabels;
  categoryLabels: Record<ProjectCategory, string>;
  viewProjectLabel: string;
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
  categoryLabels,
  viewProjectLabel,
  filters,
}: ProjectsListingProps & { filters: ProjectFilters }) {
  const [showAll, setShowAll] = useState(false);
  const matchingProjects = filterProjects(projects, filters);
  const visibleProjects = showAll
    ? matchingProjects
    : matchingProjects.slice(0, INITIAL_VISIBLE_PROJECTS);
  const hiddenCount = matchingProjects.length - visibleProjects.length;

  function changeFilters(nextFilters: ProjectFilters) {
    setShowAll(false);
    applyFilters(nextFilters);
  }

  return (
    <div className="grid gap-16">
      <ProjectFilterControls
        options={filterOptions}
        filters={filters}
        labels={labels}
        visibleCount={visibleProjects.length}
        totalCount={projects.length}
        onChange={changeFilters}
      />

      {visibleProjects.length > 0 ? (
        <ProjectList
          locale={locale}
          projects={visibleProjects}
          allProjects={projects}
          categoryLabels={categoryLabels}
          viewProjectLabel={viewProjectLabel}
        />
      ) : (
        <p className="text-muted">{labels.noResults}</p>
      )}

      {hiddenCount > 0 && (
        <ShowAllProjectsButton
          label={labels.showAll}
          hiddenCount={hiddenCount}
          onClick={() => setShowAll(true)}
        />
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
