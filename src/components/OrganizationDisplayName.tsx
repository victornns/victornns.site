import { organizationsById, type OrganizationId } from "@/content/organizations";

type OrganizationDisplayNameProps = {
  id: OrganizationId;
  className?: string;
};

export function OrganizationDisplayName({ id, className }: OrganizationDisplayNameProps) {
  const organization = organizationsById[id];
  return (
    organization && (
      <>
        <span className={className}>{organization.name.display}</span>
      </>
    )
  );
}
