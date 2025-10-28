import { organizationsById, type OrganizationId } from "@/content/organizations";
import { UILink } from "./ui/UILink";

type OrganizationDisplayNameProps = {
  id: OrganizationId;
};

export function OrganizationDisplayName({ id }: OrganizationDisplayNameProps) {
  const org = organizationsById[id];
  if (!org) return null;

  return <UILink href={org.link}>{org.name.display}</UILink>;
}
