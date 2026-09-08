import type { PropsWithChildren } from "react";

import { tw, joinClassNames } from "@/lib/tailwind";

const PAGE_MAIN_CLASSNAME = tw`grid max-w-screen-2xl grid-cols-1 gap-24 px-6 py-16 sm:py-24 lg:px-12`;

interface UIPageMainProps extends PropsWithChildren {
  className?: string;
}

export function UIPageMain({ children, className }: UIPageMainProps) {
  return (
    <main className={joinClassNames(PAGE_MAIN_CLASSNAME, className)}>
      {children}
    </main>
  );
}
