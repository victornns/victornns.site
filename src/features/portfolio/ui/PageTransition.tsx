"use client";

import { useEffect } from "react";

import { UIPageMain } from "@/features/portfolio/ui/UIPageMain";
import { tw } from "@/lib/tailwind";

import type { ReactNode } from "react";

const PAGE_ENTER_CLASSNAME = tw`motion-safe:animate-page-enter`;

// Flipped once the first render has hydrated. The server render and the
// hydration pass both see `false`, so the initial load has no fade (which
// would hold back the LCP) and matches the server HTML; every page mounted
// after that is an in-app navigation and fades in.
let hasHydrated = false;

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  useEffect(() => {
    hasHydrated = true;
  }, []);

  return (
    <UIPageMain className={hasHydrated ? PAGE_ENTER_CLASSNAME : undefined}>
      {children}
    </UIPageMain>
  );
}
