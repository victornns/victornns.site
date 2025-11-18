import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface UILinkProps extends LinkProps {
  children: ReactNode;
  target?: string;
}

export function UILink({ children, href, target = "_blank", ...linkProps }: UILinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="underline"
      {...linkProps}
    >
      {children}
    </Link>
  );
}
