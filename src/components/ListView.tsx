import { ReactNode } from "react";

interface ListViewProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function ListView({ title, description, children }: ListViewProps) {
  return (
    <section>
      <header className="mb-8">
        <h2 className="text-5xl font-bold mb-3">{title}</h2>
        {description && <p>{description}</p>}
      </header>
      <ul>{children}</ul>
    </section>
  );
}
