"use client";

import Link from "next/link";

import { dispatchProjectOpen } from "@/features/projects/lib/projectOpenEvent";
import { isPlainLeftClick } from "@/lib/navigation";

import type { MouseEvent, ReactNode } from "react";

type ProjectLinkProps = {
  projectId: string;
  href: string;
  className?: string;
  children: ReactNode;
};

export function ProjectLink({
  projectId,
  href,
  className,
  children,
}: ProjectLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isPlainLeftClick(event)) {
      return;
    }

    event.preventDefault();
    dispatchProjectOpen(projectId, href);
  }

  return (
    <Link
      href={href}
      scroll={false}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}
