"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

import { dispatchProjectOpen } from "@/views/projects/drawer/useActiveProject";
import { getProjectPath } from "@/views/projects/projectRoutes";
import { isPlainLeftClick } from "@/lib/navigation";

import type { Project } from "@/content/projects";
import type { Locale } from "@/i18n/config";

type ProjectLinkProps = {
  locale: Locale;
  project: Project;
  className?: string;
  children: ReactNode;
};

export function ProjectLink({
  locale,
  project,
  className,
  children,
}: ProjectLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isPlainLeftClick(event)) {
      return;
    }

    event.preventDefault();
    dispatchProjectOpen(locale, project);
  }

  return (
    <Link
      href={getProjectPath(locale, project)}
      scroll={false}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}
