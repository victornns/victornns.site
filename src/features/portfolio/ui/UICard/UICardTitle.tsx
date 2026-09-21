import { joinClassNames } from "@/lib/tailwind";

import type { ReactNode } from "react";

type UICardTitleProps = {
  children: ReactNode;
  className?: string;
};

export function UICardTitle({ children, className }: UICardTitleProps) {
  return (
    <h3 className={joinClassNames("mb-2 text-lg font-semibold", className)}>
      {children}
    </h3>
  );
}
