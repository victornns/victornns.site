import { PageTransition } from "@/features/portfolio/ui/PageTransition";

import type { ReactNode } from "react";

export default function PortfolioTemplate({
  children,
}: {
  children: ReactNode;
}) {
  return <PageTransition>{children}</PageTransition>;
}
