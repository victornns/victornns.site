import { joinClassNames } from "@/lib/tailwind";

import type { ComponentPropsWithoutRef } from "react";

export function ArrowRightIcon({
  className,
  fill = "none",
  stroke = "currentColor",
  strokeWidth = 2,
  strokeLinecap = "round",
  strokeLinejoin = "round",
  ...svgProps
}: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={joinClassNames("h-4 w-4 shrink-0", className)}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      {...svgProps}
    >
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}
