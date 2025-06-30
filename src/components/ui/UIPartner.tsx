import Link from "next/link";

interface UIPartnerProps {
  name: string;
  url?: string;
  prefix?: string;
  className?: string;
}

export function UIPartner({ name, url, prefix = "Parceiro:", className }: UIPartnerProps) {
  return (
    <p className={className}>
      {prefix}{" "}
      {url ? (
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </Link>
      ) : (
        name
      )}
    </p>
  );
}
