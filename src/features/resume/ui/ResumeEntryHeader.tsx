import { OrganizationDisplayName } from "@/components/OrganizationDisplayName";
import type { OrganizationId } from "@/content/organizations";

import type { ReactNode } from "react";

type ResumeEntryHeaderProps = {
  title: string;
  period: ReactNode;
  organizationId: OrganizationId;
};

/** Title + period + organization — the header shared by every experience and education entry. */
export function ResumeEntryHeader({
  title,
  period,
  organizationId,
}: ResumeEntryHeaderProps) {
  return (
    <header className="break-inside-avoid-page break-after-avoid-page">
      <div className="grid grid-cols-1 items-baseline gap-x-4 sm:grid-cols-[minmax(0,1fr)_auto]">
        <h3 className="text-base font-semibold">{title}</h3>
        <span className="mt-0.5 text-xs font-light sm:mt-0 sm:whitespace-nowrap">
          {period}
        </span>
      </div>

      <OrganizationDisplayName
        id={organizationId}
        as="p"
        className="text-sm italic text-muted"
      />
    </header>
  );
}
