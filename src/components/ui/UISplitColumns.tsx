import { joinClassNames, tw } from "@/lib/tailwind";

import type { PropsWithChildren, ReactNode } from "react";

const DEFAULT_ASIDE_WIDTH = tw`md:w-40 lg:w-72`;

type UISplitColumnsProps = PropsWithChildren & {
  aside: ReactNode;
  asidePosition?: "left" | "right";
  asideWidth?: string;
  className?: string;
};

export function UISplitColumns({
  aside,
  asidePosition = "left",
  asideWidth = DEFAULT_ASIDE_WIDTH,
  children,
  className,
}: UISplitColumnsProps) {
  const isAsideRight = asidePosition === "right";

  return (
    <div
      className={joinClassNames(
        "grid gap-2 md:gap-10",
        isAsideRight
          ? "md:grid-cols-[minmax(0,1fr)_auto]"
          : "md:grid-cols-[auto_minmax(0,1fr)]",
        className,
      )}
    >
      <div className={joinClassNames(asideWidth, isAsideRight && "order-last")}>
        {aside}
      </div>
      <div>{children}</div>
    </div>
  );
}
