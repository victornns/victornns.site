import { ReactNode, ElementType } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingSectionProps {
  level: HeadingLevel;
  children?: ReactNode;
}

function HeadingSection({ level, children }: HeadingSectionProps) {
  const Tag = `h${level}` as ElementType;
  const prefix = "//";

  return (
    <Tag className="text-3xl font-medium mb-2">
      {prefix} {children}
    </Tag>
  );
}

interface UISectionProps {
  title: string;
  headingLevel?: HeadingLevel;
  description?: ReactNode;
  children?: ReactNode;
}

export function UISection({ title, headingLevel = 2, description, children }: UISectionProps) {
  return (
    <section>
      <header className={children ? "mb-8" : ""}>
        <HeadingSection level={headingLevel}>{title}</HeadingSection>
        {description && <p>{description}</p>}
      </header>
      {children}
    </section>
  );
}
