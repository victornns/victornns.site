import { joinClassNames } from "@/lib/tailwind";

import type { ReactNode } from "react";

type UICardLabelProps = {
  children: ReactNode;
  className?: string;
};

export function UICardLabel({ children, className }: UICardLabelProps) {
  return (
    <p className={joinClassNames("text-xs font-light", className)}>
      {children}
    </p>
  );
}
