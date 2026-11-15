import { UIPageMain } from "@/features/portfolio/ui/UIPageMain";

import type { ReactNode } from "react";

export default function PortfolioTemplate({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <UIPageMain className="motion-safe:animate-page-enter">
      {children}
    </UIPageMain>
  );
}
