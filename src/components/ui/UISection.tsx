import { joinClassNames } from "@/lib/tailwind";

import type { ReactNode, ElementType } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingSectionProps = {
  level: HeadingLevel;
  children?: ReactNode;
};

function HeadingSection({ level, children }: HeadingSectionProps) {
  const Tag = `h${level}` as ElementType;

  return (
    <Tag className="text-wide-tracking text-xl font-bold sm:text-3xl">
      {/* Decorative prefix, hidden from screen readers so they read the heading text alone. */}
      <span aria-hidden="true">{"//"}</span> {children}
    </Tag>
  );
}

type UISectionProps = {
  id?: string;
  title?: string;
  headingLevel?: HeadingLevel;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function UISection({
  id,
  title,
  headingLevel = 2,
  description,
  children,
  className,
}: UISectionProps) {
  const hasHeader = Boolean(title || description);

  return (
    <section
      id={id}
      className={joinClassNames(id && "scroll-mt-24", className)}
    >
      {hasHeader && (
        <header className={children ? "mb-8" : undefined}>
          {title && (
            <HeadingSection level={headingLevel}>{title}</HeadingSection>
          )}
          {description && <p className="mt-2">{description}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
