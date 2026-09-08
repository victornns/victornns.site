import type { ReactNode } from "react";

import { joinClassNames } from "@/lib/tailwind";

interface UICardLabelProps {
  children: ReactNode;
  className?: string;
}

export function UICardLabel({ children, className }: UICardLabelProps) {
  return (
    <p className={joinClassNames("text-xs font-light", className)}>
      {children}
    </p>
  );
}
