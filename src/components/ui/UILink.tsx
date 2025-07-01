import Link from "next/link";

interface UILinkProps {
  displayName: string;
  link?: string;
  className?: string;
}

const isExternalLink = (link: string): boolean => link.startsWith("http") || link.startsWith("//");

const getSpanClassName = (link?: string, customClassName?: string): string => {
  return `${link ? "underline bg-gray-100" : ""} ${customClassName || ""}`.trim();
};

export function UILink({ displayName, link, className }: UILinkProps) {
  const displayNameStyle = getSpanClassName(link, className);
  const displayNameElement = <span className={displayNameStyle}>{displayName}</span>;

  if (link) {
    const isExternal = isExternalLink(link);
    return (
      <Link href={link} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
        {displayNameElement}
      </Link>
    );
  }

  return displayNameElement;
}
