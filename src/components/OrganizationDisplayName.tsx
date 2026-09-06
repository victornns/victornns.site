import type { ElementType } from "react";

import {
  organizationsById,
  type OrganizationId,
} from "@/content/organizations";

type OrganizationDisplayNameProps = {
  id: OrganizationId;
  className?: string;
  /** Element to render as. Defaults to an inline `span`. */
  as?: ElementType;
};

export function OrganizationDisplayName({
  id,
  className,
  as: Tag = "span",
}: OrganizationDisplayNameProps) {
  const organization = organizationsById[id];
  return (
    organization && <Tag className={className}>{organization.name.display}</Tag>
  );
}
