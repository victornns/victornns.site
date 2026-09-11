"use client";

import { useLayoutEffect, useState } from "react";

import { consumeShouldReopenMobileMenu } from "@/lib/localeSwitchState";

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

  return {
    isOpen,
    skipEnterAnimation,
    setIsOpen,
    toggle: () => setIsOpen(!isOpen),
  };
}
