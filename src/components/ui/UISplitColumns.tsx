import type { PropsWithChildren, ReactNode } from "react";

import { joinClassNames } from "@/lib/tailwind";

interface UISplitColumnsProps extends PropsWithChildren {
  aside: ReactNode;
  className?: string;
}

export function UISplitColumns({
  aside,
  children,
  className,
}: UISplitColumnsProps) {
  return (
    <div
      className={joinClassNames(
        "grid gap-2 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-10",
        className,
      )}
    >
      <div className="sm:w-40 lg:w-72">{aside}</div>
      <div>{children}</div>
    </div>
  );
}
