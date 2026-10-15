import { joinClassNames } from "@/lib/tailwind";

import type { ReactNode } from "react";

type ResumeSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

/**
 * A major resume section. The top border + heading treatment (small,
 * uppercase, tracked) is deliberately louder than an entry's own `h3`, so a
 * section change reads as a bigger jump than the divide between entries.
 */
export function ResumeSection({
  title,
  children,
  className,
}: ResumeSectionProps) {
  return (
    <section className={joinClassNames("mt-8 border-t pt-6", className)}>
      <h2 className="text-wide-tracking mb-3 break-after-avoid-page text-xs font-bold">
        {title}
      </h2>
      {children}
    </section>
  );
}
