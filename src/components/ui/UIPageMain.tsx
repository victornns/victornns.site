import type { PropsWithChildren } from "react";

const PAGE_MAIN_CLASSNAME =
  "flex flex-col gap-24 py-16 sm:py-24 px-6 lg:px-12 max-w-screen-2xl";

interface UIPageMainProps extends PropsWithChildren {
  className?: string;
}

export function UIPageMain({ children, className }: UIPageMainProps) {
  return (
    <main
      className={[PAGE_MAIN_CLASSNAME, className].filter(Boolean).join(" ")}
    >
      {children}
    </main>
  );
}
