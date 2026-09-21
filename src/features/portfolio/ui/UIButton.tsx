import Link from "next/link";

import { joinClassNames, tw } from "@/lib/tailwind";

import type { ComponentPropsWithoutRef, ReactNode } from "react";

const UI_BUTTON_CLASSNAME = tw`inline-flex items-center justify-center gap-2 bg-black px-4 py-3 leading-none text-white no-underline`;

type UIButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  icon?: ReactNode;
};

export function UIButton({
  children,
  icon,
  href,
  target,
  rel,
  className,
  ...linkProps
}: UIButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
      className={joinClassNames(UI_BUTTON_CLASSNAME, className)}
      {...linkProps}
    >
      {icon}
      {children}
    </Link>
  );
}
