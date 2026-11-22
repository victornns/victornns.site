"use client";

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { useEffect, useId, useRef, useState } from "react";

import { UIParagraphs } from "@/components/ui/UIParagraphs";
import type {
  Project,
  ProjectCategory,
  ProjectsFeaturedLabels,
} from "@/content/projects";
import { ProjectArrowCircle } from "@/features/portfolio/projects/components/ProjectArrowCircle";
import { ProjectBrowserMockup } from "@/features/portfolio/projects/components/ProjectBrowserMockup";
import { ProjectLink } from "@/features/portfolio/projects/components/ProjectLink";
import { ProjectTechnologies } from "@/features/portfolio/projects/components/ProjectTechnologies";
import { getProjectPath } from "@/features/portfolio/projects/lib/projectPaths";
import { ArrowRightIcon } from "@/features/portfolio/ui/icons/ArrowRightIcon";
import type { Locale } from "@/i18n/config";
import { padNumber, SEPARATORS } from "@/lib/format";
import { joinClassNames, tw } from "@/lib/tailwind";

import type { KeyboardEvent, MouseEvent } from "react";

// The section reaches the viewport's edge, past the page gutter, so the next
// slide peeks in from the right instead of being cut at the content edge.
const SECTION_CLASSNAME = tw`-mx-6 overflow-x-clip px-6 lg:-mx-12 lg:px-12`;

const NAV_BUTTON_CLASSNAME = tw`flex size-[52px] shrink-0 items-center justify-center rounded-full border border-black transition-colors duration-500 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black`;

const SLIDE_CLASSNAME = tw`group relative min-w-0 flex-[0_0_86%] transition-opacity duration-500 ease-out-expo motion-reduce:transition-none lg:flex-[0_0_72%]`;

const STAGE_CLASSNAME = tw`relative flex aspect-square origin-bottom-left items-center justify-center overflow-hidden bg-neutral-100 transition-transform duration-700 ease-out-expo motion-reduce:transition-none sm:aspect-[4/3] lg:aspect-video`;

const TITLE_LINK_CLASSNAME = tw`after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`;

const PROGRESS_CLASSNAME = tw`absolute -top-px left-0 h-[3px] bg-black transition-[width] duration-500 ease-out-expo motion-reduce:transition-none`;

type FeaturedProjectsCarouselProps = {
  locale: Locale;
  projects: Project[];
  labels: ProjectsFeaturedLabels;
  categoryLabels: Record<ProjectCategory, string>;
};

type EmblaApi = NonNullable<UseEmblaCarouselType[1]>;

/** Share of one slide's width a drag must cover to move to the neighbouring slide. */
const LIGHT_SWIPE_THRESHOLD = 0.05;

/** Below this share of a slide, a press counts as a click rather than a drag. */
const CLICK_TOLERANCE = 0.01;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Signed number of slides (fractional) the carousel moved since `startProgress`. */
function getDraggedSlides(emblaApi: EmblaApi, startProgress: number): number {
  const [firstSnap, secondSnap] = emblaApi.scrollSnapList();
  if (secondSnap === undefined) return 0;

  return (emblaApi.scrollProgress() - startProgress) / (secondSnap - firstSnap);
}

export function FeaturedProjectsCarousel({
  locale,
  projects,
  labels,
  categoryLabels,
}: FeaturedProjectsCarouselProps) {
  const titleId = useId();
  const [viewportRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: false,
    duration: 20,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const count = projects.length;

  const dragRef = useRef({ startIndex: 0, startProgress: 0, slides: 0 });

  useEffect(() => {
    if (!emblaApi) return;
    const api = emblaApi;
    const drag = dragRef.current;

    function syncSelectedIndex() {
      setSelectedIndex(api.selectedScrollSnap());
    }

    function startDrag() {
      drag.startIndex = api.selectedScrollSnap();
      drag.startProgress = api.scrollProgress();
      drag.slides = 0;
    }

    // Embla only changes slides on a fast flick or a drag past half a slide,
    // so a short, slow drag would snap back; move to the neighbour it pointed at.
    function endDrag() {
      drag.slides = getDraggedSlides(api, drag.startProgress);
      const isSnappingBack = api.selectedScrollSnap() === drag.startIndex;

      if (isSnappingBack && Math.abs(drag.slides) >= LIGHT_SWIPE_THRESHOLD) {
        api.scrollTo(drag.startIndex + Math.sign(drag.slides));
      }
    }

    api
      .on("select", syncSelectedIndex)
      .on("pointerDown", startDrag)
      .on("pointerUp", endDrag);

    return () => {
      api
        .off("select", syncSelectedIndex)
        .off("pointerDown", startDrag)
        .off("pointerUp", endDrag);
    };
  }, [emblaApi]);

  function selectSlide(index: number) {
    emblaApi?.scrollTo(index, prefersReducedMotion());
  }

  /** Steps through the slides, wrapping around at both ends. */
  function step(offset: number) {
    selectSlide((selectedIndex + offset + count) % count);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") step(-1);
    if (event.key === "ArrowRight") step(1);
  }

  /**
   * A click on a slide that isn't selected brings it forward instead of
   * opening the project, and the click that ends a drag does neither.
   * Keyboard activation (`detail` 0) is never a drag.
   */
  function handleSlideClick(event: MouseEvent, index: number) {
    const isEndOfDrag =
      event.detail > 0 && Math.abs(dragRef.current.slides) >= CLICK_TOLERANCE;
    if (!isEndOfDrag && index === selectedIndex) return;

    event.preventDefault();
    event.stopPropagation();
    if (!isEndOfDrag) selectSlide(index);
  }

  return (
    <section
      aria-roledescription={labels.carousel}
      aria-labelledby={titleId}
      onKeyDown={handleKeyDown}
      className={SECTION_CLASSNAME}
    >
      <div className="mb-8 flex items-center gap-4">
        <h2 id={titleId} className="text-wide-tracking text-sm">
          {labels.title}
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-black" />
        <p className="text-wide-tracking text-xs text-muted">
          {padNumber(selectedIndex + 1)} / {padNumber(count)}
        </p>
        <button
          type="button"
          aria-label={labels.previous}
          onClick={() => step(-1)}
          className={NAV_BUTTON_CLASSNAME}
        >
          <ArrowRightIcon className="rotate-180" />
        </button>
        <button
          type="button"
          aria-label={labels.next}
          onClick={() => step(1)}
          className={NAV_BUTTON_CLASSNAME}
        >
          <ArrowRightIcon />
        </button>
      </div>

      <div ref={viewportRef}>
        <div className="flex touch-pan-y touch-pinch-zoom gap-16">
          {projects.map((project, index) => {
            const isSelected = index === selectedIndex;

            return (
              <div
                key={project.id}
                role="group"
                aria-roledescription={labels.slide}
                aria-label={`${index + 1} / ${count}`}
                onClickCapture={(event) => handleSlideClick(event, index)}
                className={joinClassNames(
                  SLIDE_CLASSNAME,
                  !isSelected && "cursor-pointer opacity-40",
                )}
              >
                <div
                  className={joinClassNames(
                    STAGE_CLASSNAME,
                    !isSelected && "scale-[.92]",
                  )}
                >
                  <span className="text-wide-tracking absolute right-[18px] top-4 text-xs text-muted">
                    {categoryLabels[project.category]}
                    {SEPARATORS.bullet}
                    {project.date}
                  </span>
                  <ProjectBrowserMockup
                    project={project}
                    className="mt-[3%] w-4/5 lg:w-3/5"
                  />
                </div>

                <div className="flex flex-col gap-6 pt-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
                  <div className="flex min-w-0 flex-col gap-3">
                    <h3 className="text-3xl font-light leading-tight sm:text-4xl xl:text-5xl">
                      <ProjectLink
                        projectId={project.id}
                        href={getProjectPath(locale, project)}
                        className={TITLE_LINK_CLASSNAME}
                      >
                        {project.title}
                      </ProjectLink>
                    </h3>
                    <ProjectTechnologies technologies={project.technologies} />
                  </div>

                  <div className="flex shrink-0 items-end gap-7">
                    <UIParagraphs
                      data={project.summary}
                      className="max-w-[34ch] leading-relaxed text-neutral-700"
                    />
                    <ProjectArrowCircle />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div aria-hidden="true" className="relative mt-9 h-px bg-neutral-300">
        <span
          className={PROGRESS_CLASSNAME}
          style={{ width: `${((selectedIndex + 1) / count) * 100}%` }}
        />
      </div>
    </section>
  );
}
