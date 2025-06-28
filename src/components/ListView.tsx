import { ReactNode } from "react";

interface ListViewProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function ListView({ title, description, children }: ListViewProps) {
  return (
    <section>
      <header>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </header>
      <ul className="flex flex-col gap-5">{children}</ul>
    </section>
  );
}
