import { ReactNode } from "react";

interface ListViewProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function ListView({ title, description, children }: ListViewProps) {
  return (
    <section>
      <div className="container">
        <header className="mb-10">
          <h2 className="text-5xl font-bold mb-3">{title}</h2>
          {description && <p>{description}</p>}
        </header>
        <ul>{children}</ul>
      </div>
    </section>
  );
}
