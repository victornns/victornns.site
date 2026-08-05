"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import {
  getSectionIdFromSlug,
  getSectionSlug,
  sectionOrder,
} from "@/components/navbar/navigation";
import {
  consumeShouldReopenMobileMenu,
  prepareLocaleSwitch,
} from "@/components/navbar/localeSwitchState";
import { getActiveSectionId } from "@/components/navbar/scrollToSection";
import { getTranslatedProjectSlug } from "@/components/projects/projectRoutes";
import { navbarLabels, switchLocaleLabel, type SectionId } from "@/content/navbar";
import { commonContent } from "@/content/common";
import {
  defaultLocale,
  getLocalizedPath,
  isValidLocale,
  type Locale,
} from "@/i18n/config";

function toTargetLocalePath(
  pathname: string,
  locale: Locale,
  targetLocale: Locale,
): string {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  const sourceLocale: Locale = isValidLocale(firstSegment)
    ? firstSegment
    : locale;
  const pathWithoutLocale = isValidLocale(firstSegment)
    ? segments.slice(1)
    : segments;

  if (pathWithoutLocale.length === 0) {
    return getLocalizedPath(targetLocale, "portfolio");
  }

  const [root, maybeSection, ...rest] = pathWithoutLocale;

  if (root === "portfolio") {
    if (!maybeSection) {
      return getLocalizedPath(targetLocale, "portfolio");
    }

    const sectionId = getSectionIdFromSlug(sourceLocale, maybeSection);
    if (!sectionId) {
      const fallbackSlug = ["portfolio", maybeSection, ...rest].join("/");
      return getLocalizedPath(targetLocale, fallbackSlug);
    }

    const targetSectionSlug = getSectionSlug(targetLocale, sectionId);
    const [projectSlug] = rest;

    const translatedProjectSlug =
      sectionId === "projects" && projectSlug
        ? getTranslatedProjectSlug(sourceLocale, targetLocale, projectSlug)
        : undefined;

    const targetSlug = translatedProjectSlug
      ? `portfolio/${targetSectionSlug}/${translatedProjectSlug}`
      : `portfolio/${targetSectionSlug}`;

    return getLocalizedPath(targetLocale, targetSlug);
  }

  if (
    root === commonContent.pt.resumeSlug ||
    root === commonContent.en.resumeSlug
  ) {
    return getLocalizedPath(targetLocale, commonContent[targetLocale].resumeSlug);
  }

  const fallbackPath = pathWithoutLocale.join("/");
  return targetLocale === defaultLocale
    ? `/${fallbackPath}`
    : `/${targetLocale}/${fallbackPath}`;
}

export function useNavbar(locale: Locale) {
  const [isMobileMenuOpenState, setIsMobileMenuOpenState] = useState(false);
  const [skipMobileMenuEnterAnimation, setSkipMobileMenuEnterAnimation] =
    useState(false);
  const pathname = usePathname();

  // Any deliberate open/close (hamburger button, close button, nav link)
  // should always animate normally — only the one-time reopen below skips it.
  function setIsMobileMenuOpen(next: boolean | ((current: boolean) => boolean)) {
    setSkipMobileMenuEnterAnimation(false);
    setIsMobileMenuOpenState(next);
  }

  // Runs before paint so a menu reopened after a locale switch (see
  // localeSwitchState) doesn't flash closed first. Bypasses the wrapper above
  // so the entrance animation is skipped for this specific reopen: the menu
  // was already open right before the switch, so nothing is visibly "opening".
  useLayoutEffect(() => {
    if (consumeShouldReopenMobileMenu()) {
      setSkipMobileMenuEnterAnimation(true);
      setIsMobileMenuOpenState(true);
    }
  }, []);

  const [activeSectionId, setActiveSectionIdState] = useState<SectionId | null>(
    null,
  );

  // Set while a click's own scroll-to animation is still moving: clicking a
  // link marks it active right away (see setActiveSectionId below), but the
  // resulting smooth scroll passes through other sections' zones on the way
  // to its target, and live scroll-spy updates would otherwise flip the
  // active link back and forth before settling on the right one.
  const suppressScrollSpyRef = useRef(false);
  const scrollFrameRef = useRef<number | null>(null);
  const scrollIdleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  // Highlights the navbar link for whichever section is currently in view.
  useEffect(() => {
    function recomputeActiveSection() {
      scrollFrameRef.current = null;
      setActiveSectionIdState(getActiveSectionId(sectionOrder));
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
      }, 150);

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
  function setActiveSectionId(sectionId: SectionId) {
    suppressScrollSpyRef.current = true;
    setActiveSectionIdState(sectionId);
  }

  const nav = navbarLabels[locale];

  const labels = {
    close: nav.closeMenu,
    menu: nav.menu,
    navigation: nav.navigation,
    resume: nav.resume,
    openMenu: nav.openMenu,
    switchToEnglish: switchLocaleLabel.en,
    switchToPortuguese: switchLocaleLabel.pt,
  };

  return {
    isMobileMenuOpen: isMobileMenuOpenState,
    setIsMobileMenuOpen,
    skipMobileMenuEnterAnimation,
    activeSectionId,
    setActiveSectionId,
    logo: nav.logo,
    resumeHref: nav.resumeUrl,
    portfolioHref: getLocalizedPath(locale, "portfolio"),
    localeHref: {
      pt: toTargetLocalePath(pathname, locale, "pt"),
      en: toTargetLocalePath(pathname, locale, "en"),
    },
    labels,
    handleLocaleSwitchClick: prepareLocaleSwitch,
  };
}
