import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ReactNode } from "react";

import { joinClassNames } from "@/lib/tailwind";

interface UILinkProps extends LinkProps {
  children: ReactNode;
  target?: string;
  className?: string;
  underline?: boolean;
}

export function UILink({
  children,
  href,
  target = "_blank",
  className,
  underline = true,
  ...linkProps
}: UILinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={joinClassNames(underline && "underline", className)}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
