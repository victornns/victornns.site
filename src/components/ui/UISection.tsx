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
    <Tag className="text-wide-tracking mb-2 text-xl font-bold sm:text-3xl">
      {prefix} {children}
    </Tag>
  );
}

interface UISectionProps {
  id?: string;
  title?: string;
  headingLevel?: HeadingLevel;
  description?: ReactNode;
  children?: ReactNode;
}

export function UISection({
  id,
  title,
  headingLevel = 2,
  description,
  children,
}: UISectionProps) {
  const hasHeader = Boolean(title || description);

  return (
    <section id={id} className={id ? "scroll-mt-24" : undefined}>
      {hasHeader && (
        <header className={children ? "mb-8" : undefined}>
          {title && (
            <HeadingSection level={headingLevel}>{title}</HeadingSection>
          )}
          {description && <p>{description}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
