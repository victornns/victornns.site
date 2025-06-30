import Link from "next/link";

interface UITitleProps {
  title: string;
  link?: string;
}

export function UITitle({ title, link }: UITitleProps) {
  const titleElement = <h3 className="font-medium text-lg">{title}</h3>;

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {titleElement}
      </Link>
    );
  }

  return titleElement;
}
