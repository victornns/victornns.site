import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";

type ProjectsHeroSectionProps = {
  locale: Locale;
};

export function ProjectsHeroSection({ locale }: ProjectsHeroSectionProps) {
  const { projects } = getContent(locale);

  return (
    <section className="grid gap-6 lg:grid-cols-2 lg:gap-12 lg:[align-items:last_baseline]">
      <h1 className="relative w-fit text-6xl font-thin leading-none sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
        {projects.title}
        {/* Hangs off the title's top-right corner, level with its cap height. */}
        <sup className="absolute left-full top-[13%] ml-2 text-xs font-normal leading-none text-muted sm:ml-3 sm:text-sm">
          ({projects.items.length})
        </sup>
      </h1>

      <p className="max-w-md leading-relaxed text-neutral-700">
        {projects.hero.description}
      </p>
    </section>
  );
}
