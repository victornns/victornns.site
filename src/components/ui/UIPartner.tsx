import { UILink } from "./UILink";

interface UIPartnerProps {
  name: string;
  url?: string;
  prefix?: string;
  className?: string;
}

export function UIPartner({ name, url, prefix = "Parceiro:", className }: UIPartnerProps) {
  return (
    <p className={className}>
      {prefix} {url ? <UILink displayName={name} link={url} /> : name}
    </p>
  );
}
