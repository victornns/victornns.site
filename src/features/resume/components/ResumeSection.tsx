import type { ReactNode } from "react";

type ResumeSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function ResumeSection({
  title,
  children,
  className,
}: ResumeSectionProps) {
  return (
    <>
      <hr className="my-6" />
      <section className={className}>
        <h2 className="mb-2 break-after-avoid-page text-base font-bold">
          {title}
        </h2>
        {children}
      </section>
    </>
  );
}
