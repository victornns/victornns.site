import { Suspense } from "react";

import { getContent } from "@/content";
import { getProjectFilterOptions } from "@/features/portfolio/projects/lib/projectFilters";
import {
  ProjectsListing,
  ProjectsListingFallback,
} from "@/features/portfolio/projects/sections/listing/ProjectsListing";
import { ProjectsScrollCue } from "@/features/portfolio/projects/sections/listing/ProjectsScrollCue";
import type { Locale } from "@/i18n/config";

type ProjectsListingSectionProps = {
  locale: Locale;
};

export function ProjectsListingSection({
  locale,
}: ProjectsListingSectionProps) {
  const { projects } = getContent(locale);
  const listingProps = {
    locale,
    projects: projects.items,
    filterOptions: getProjectFilterOptions(
      projects.items,
      projects.categoryLabels,
      projects.tagLabels,
    ),
    labels: projects.listing,
    categoryLabels: projects.categoryLabels,
    viewProjectLabel: projects.labels.viewProject,
  };

  return (
    <section>
      <h2 className="sr-only">{projects.listing.title}</h2>
      <ProjectsScrollCue label={projects.listing.scrollCue} />

      {/* Reading the URL query would otherwise opt the whole page out of static rendering. */}
      <Suspense fallback={<ProjectsListingFallback {...listingProps} />}>
        <ProjectsListing {...listingProps} />
      </Suspense>
    </section>
  );
}
