import type { ReactNode } from "react";

import { joinClassNames } from "@/lib/tailwind";

interface UICardRootProps {
  children: ReactNode;
  className?: string;
  spacing?: "compact" | "default";
}

const spacingClasses = {
  compact: "py-4",
  default: "py-6",
};

export function UICardRoot({
  children,
  className,
  spacing = "default",
}: UICardRootProps) {
  return (
    <div
      className={joinClassNames("border-b", spacingClasses[spacing], className)}
    >
      {children}
    </div>
  );
}
