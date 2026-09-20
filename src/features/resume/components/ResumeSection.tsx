import { joinClassNames } from "@/lib/tailwind";

import type { ReactNode } from "react";

type ResumeSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function ResumeSection({
  title,
  description,
  children,
  className,
}: ResumeSectionProps) {
  return (
    <>
      <hr className="my-6" />
      <section className={className}>
        <h2 className="break-after-avoid-page text-base font-bold">{title}</h2>
        {description && (
          <p className="mt-0.5 text-sm text-muted">{description}</p>
        )}
        <div className={joinClassNames(description ? "mt-3" : "mt-2")}>
          {children}
        </div>
      </section>
    </>
  );
}
