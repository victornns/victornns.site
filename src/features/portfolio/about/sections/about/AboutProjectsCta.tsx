import Link from "next/link";

import { ArrowRightIcon } from "@/features/portfolio/ui/icons/ArrowRightIcon";

type AboutProjectsCtaProps = {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
};

export function AboutProjectsCta({
  title,
  description,
  linkLabel,
  href,
}: AboutProjectsCtaProps) {
  return (
    <div className="group relative flex flex-col gap-8 border p-6 sm:p-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:p-14">
      {/* Sits on the frame's top border, from its outer left edge; on hover it spans to the outer right edge. */}
      <span
        aria-hidden="true"
        className="absolute -left-px -top-px h-0.5 w-12 bg-black transition-[width] duration-500 ease-out group-has-[a:focus-visible]:w-[calc(100%+2px)] group-has-[a:hover]:w-[calc(100%+2px)] sm:w-14"
      />

      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-muted">{description}</p>
      </div>

      <Link
        href={href}
        className="group/link inline-flex shrink-0 items-center gap-2 self-start font-semibold underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:self-auto"
      >
        {linkLabel}
        <ArrowRightIcon className="transition-transform duration-200 group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
}
