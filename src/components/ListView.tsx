import { ReactNode } from "react";
import { UISectionHeader } from "./ui/UISectionHeader";

interface ListViewProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export function ListView({ title, description, children }: ListViewProps) {
  return (
    <section>
      <UISectionHeader title={title} description={description} />
      <ul>{children}</ul>
    </section>
  );
}
