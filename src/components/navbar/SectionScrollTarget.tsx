"use client";

import { useEffect } from "react";
import type { SectionId } from "@/content/navbar";
import { scrollToSection } from "@/components/navbar/scrollToSection";

const SKIP_SECTION_SCROLL_ANIMATION_KEY = "skipSectionScrollAnimation";

type SectionScrollTargetProps = {
  sectionId: SectionId;
};

/**
 * Behavior-only helper (renders nothing): on mount, smoothly scrolls to the
 * section matching `sectionId`. Used so that directly visiting a section's
 * friendly URL (e.g. `/projetos`, `/en/projects`) lands on the portfolio
 * page already scrolled to the right place, the same way clicking a navbar
 * link does.
 */
export function SectionScrollTarget({ sectionId }: SectionScrollTargetProps) {
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const shouldSkipAnimation =
        window.sessionStorage.getItem(SKIP_SECTION_SCROLL_ANIMATION_KEY) ===
        "1";

      if (!shouldSkipAnimation) {
        scrollToSection(sectionId, "auto");
        return;
      }

      window.sessionStorage.removeItem(SKIP_SECTION_SCROLL_ANIMATION_KEY);

      const html = document.documentElement;
      const previousScrollBehavior = html.style.scrollBehavior;

      html.style.scrollBehavior = "auto";
      scrollToSection(sectionId, "auto");

      requestAnimationFrame(() => {
        html.style.scrollBehavior = previousScrollBehavior;
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [sectionId]);

  return null;
}
