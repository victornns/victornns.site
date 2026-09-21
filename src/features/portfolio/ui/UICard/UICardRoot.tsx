import { joinClassNames } from "@/lib/tailwind";

import type { ReactNode } from "react";

type UICardRootProps = {
  children: ReactNode;
  className?: string;
  spacing?: "compact" | "default";
};

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
