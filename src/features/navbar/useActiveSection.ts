"use client";

import { useEffect, useRef, useState } from "react";

import { getActiveSectionId } from "@/features/navbar/lib/sectionScroll";
import { sectionOrder, type SectionId } from "@/i18n/sections";

const SCROLL_IDLE_MS = 150;

/** Highlights whichever section is currently in view, following the scroll position. */
export function useActiveSection() {
  const [activeSectionId, setActiveSectionId] = useState<SectionId | null>(
    null,
  );

  // Set while a click's own scroll-to animation is still moving: clicking a
  // link marks it active right away (see markActive below), but the
  // resulting smooth scroll passes through other sections' zones on the way
  // to its target, and live scroll-spy updates would otherwise flip the
  // active link back and forth before settling on the right one.
  const suppressScrollSpyRef = useRef(false);
  const scrollFrameRef = useRef<number | null>(null);
  const scrollIdleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  useEffect(() => {
    function recomputeActiveSection() {
      scrollFrameRef.current = null;
      setActiveSectionId(getActiveSectionId(sectionOrder));
    }

    function handleScroll() {
      if (scrollIdleTimeoutRef.current !== null) {
        clearTimeout(scrollIdleTimeoutRef.current);
      }
      // Once scrolling actually settles, resume following the real scroll
      // position — this is what lifts the suppression above.
      scrollIdleTimeoutRef.current = setTimeout(() => {
        suppressScrollSpyRef.current = false;
        recomputeActiveSection();
      }, SCROLL_IDLE_MS);

      if (suppressScrollSpyRef.current) {
        return;
      }

      if (scrollFrameRef.current === null) {
        scrollFrameRef.current = requestAnimationFrame(recomputeActiveSection);
      }
    }

    recomputeActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current);
      }
      if (scrollIdleTimeoutRef.current !== null) {
        clearTimeout(scrollIdleTimeoutRef.current);
      }
    };
  }, []);

  /** Marks a section active right away (e.g. when its navbar link is clicked), holding that state until the resulting scroll settles. */
  function markActive(sectionId: SectionId) {
    suppressScrollSpyRef.current = true;
    setActiveSectionId(sectionId);
  }

  return { activeSectionId, markActive };
}
