"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import type { MouseEvent } from "react";

import {
  getSectionIdFromSlug,
  getSectionSlug,
} from "@/components/navbar/navigation";
import { navbarLabels, switchLocaleLabel } from "@/content/navbar";
import { commonContent } from "@/content/common";
import {
  defaultLocale,
  getLocalizedPath,
  isValidLocale,
  type Locale,
} from "@/i18n/config";

const SKIP_SECTION_SCROLL_ANIMATION_KEY = "skipSectionScrollAnimation";

function isPlainLeftClick(event: MouseEvent<HTMLAnchorElement>) {
  return !(
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}

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
    const restSlug = rest.length > 0 ? `/${rest.join("/")}` : "";
    return getLocalizedPath(
      targetLocale,
      `portfolio/${targetSectionSlug}${restSlug}`,
    );
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  function handleLocaleSwitchClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isPlainLeftClick(event)) {
      return;
    }

    window.sessionStorage.setItem(SKIP_SECTION_SCROLL_ANIMATION_KEY, "1");
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
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    logo: nav.logo,
    resumeHref: nav.resumeUrl,
    portfolioHref: getLocalizedPath(locale, "portfolio"),
    localeHref: {
      pt: toTargetLocalePath(pathname, locale, "pt"),
      en: toTargetLocalePath(pathname, locale, "en"),
    },
    labels,
    handleLocaleSwitchClick,
  };
}
