"use client";

import { useEffect } from "react";
import type { SectionId } from "@/content/navbar";
import { scrollToSection } from "@/components/navbar/scrollToSection";

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
      scrollToSection(sectionId, "auto");
    });

    return () => cancelAnimationFrame(frame);
  }, [sectionId]);

  return null;
}
