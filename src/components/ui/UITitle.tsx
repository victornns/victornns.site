import { UILink } from "./UILink";

interface UITitleProps {
  title: string;
  link?: string;
}

export function UITitle({ title, link }: UITitleProps) {
  return <UILink displayName={title} link={link} className="font-semibold" />;
}
