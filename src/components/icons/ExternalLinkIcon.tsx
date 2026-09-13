import { joinClassNames } from "@/lib/tailwind";

import type { ComponentPropsWithoutRef } from "react";

export function ExternalLinkIcon({
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
      <path d="M14 4h6v6" />
      <path d="m20 4-10 10" />
      <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
    </svg>
  );
}
