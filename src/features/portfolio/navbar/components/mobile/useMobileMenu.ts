"use client";

import { useEffect, useLayoutEffect, useState } from "react";

import { consumeShouldReopenMobileMenu } from "@/lib/localeSwitchState";

// Matches Tailwind's `xl` breakpoint, where the desktop nav replaces the menu.
const DESKTOP_NAV_MEDIA_QUERY = "(min-width: 1280px)";

export function useMobileMenu() {
  const [isOpen, setIsOpenState] = useState(false);
  const [skipEnterAnimation, setSkipEnterAnimation] = useState(false);

  // Any deliberate open/close (hamburger button, close button, nav link)
  // should always animate normally — only the one-time reopen below skips it.
  function setIsOpen(open: boolean) {
    setSkipEnterAnimation(false);
    setIsOpenState(open);
  }

  // Runs before paint so a menu reopened after a locale switch (see
  // localeSwitchState) doesn't flash closed first. Bypasses the wrapper above
  // so the entrance animation is skipped for this specific reopen: the menu
  // was already open right before the switch, so nothing is visibly "opening".
  useLayoutEffect(() => {
    if (consumeShouldReopenMobileMenu()) {
      setSkipEnterAnimation(true);
      setIsOpenState(true);
    }
  }, []);

  useEffect(() => {
    const desktopNav = window.matchMedia(DESKTOP_NAV_MEDIA_QUERY);

    function closeWhenDesktopNavAppears(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsOpenState(false);
      }
    }

    desktopNav.addEventListener("change", closeWhenDesktopNavAppears);
    return () =>
      desktopNav.removeEventListener("change", closeWhenDesktopNavAppears);
  }, []);

  return {
    isOpen,
    skipEnterAnimation,
    setIsOpen,
    toggle: () => setIsOpen(!isOpen),
  };
}
