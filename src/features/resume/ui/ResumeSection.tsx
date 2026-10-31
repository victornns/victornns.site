import type { ReactNode } from "react";

type ResumeSectionProps = {
  title: string;
  children: ReactNode;
};

/**
 * A major resume section. The top border + heading treatment (larger,
 * uppercase, tracked) is deliberately louder than an entry's own `h3`, so a
 * section change reads as a bigger jump than the divide between entries.
 */
export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="mt-8">
      <h2 className="text-wide-tracking mb-6 break-after-avoid-page border-b border-black text-lg font-bold">
        {title}
      </h2>
      {children}
    </section>
  );
}
