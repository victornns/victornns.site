import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface UILinkProps extends LinkProps {
  children: ReactNode;
  target?: string;
  className?: string;
}

export function UILink({
  children,
  href,
  target = "_blank",
  className,
  ...linkProps
}: UILinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={className ?? "underline"}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
