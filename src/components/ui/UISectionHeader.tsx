import { FC } from "react";

interface UISectionHeaderProps {
  title?: string;
  description?: string;
}

export const UISectionHeader: FC<UISectionHeaderProps> = ({ title, description }) => (
  <header className="mb-8">
    {title && <h2 className="text-4xl font-medium mb-2">{title}</h2>}
    {description && <p>{description}</p>}
  </header>
);
