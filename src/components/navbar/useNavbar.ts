"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";

import {
  getSectionIdFromSlug,
  getSectionSlug,
} from "@/components/navbar/navigation";
import {
  consumeShouldReopenMobileMenu,
  prepareLocaleSwitch,
} from "@/components/navbar/localeSwitchState";
import { getTranslatedProjectSlug } from "@/components/projects/projectRoutes";
import { navbarLabels, switchLocaleLabel } from "@/content/navbar";
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
