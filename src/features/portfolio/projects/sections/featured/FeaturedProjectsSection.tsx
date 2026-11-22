import { getContent } from "@/content";
import { FeaturedProjectsCarousel } from "@/features/portfolio/projects/sections/featured/FeaturedProjectsCarousel";
import type { Locale } from "@/i18n/config";

type FeaturedProjectsSectionProps = {
  locale: Locale;
};

export function FeaturedProjectsSection({
  locale,
}: FeaturedProjectsSectionProps) {
  const { projects } = getContent(locale);
  const featuredProjects = projects.items.filter((project) => project.featured);

  if (featuredProjects.length === 0) return null;

  return (
    <FeaturedProjectsCarousel
      locale={locale}
      projects={featuredProjects}
      labels={projects.featured}
      categoryLabels={projects.categoryLabels}
    />
  );
}
