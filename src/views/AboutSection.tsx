import { Fragment } from "react";

import { getContent } from "@/content";
import { PROFILE_NAME } from "@/content/about";
import { TOKENS } from "@/lib/constants";

import type { Locale } from "@/i18n/config";
import { UISection } from "@/components/ui/UISection";

type AboutSectionProps = {
  locale: Locale;
  /** "portfolio" (default) shows the short bio; "resume" shows the longer, curriculo-focused one. */
  variant?: "portfolio" | "resume";
};

export function AboutSection({
  locale,
  variant = "portfolio",
}: AboutSectionProps) {
  const { about } = getContent(locale);
  const paragraphs = variant === "resume" ? about.resumeSummary : about.summary;

  return (
    <UISection id="about">
      <h1 className="text-3xl sm:text-6xl uppercase">
        <span className="font-bold">{PROFILE_NAME.first}</span>
        <br />
        {PROFILE_NAME.last}
      </h1>
      <p className="uppercase mt-3 before:inline-block before:h-1 before:w-14 before:bg-black before:content-[''] before:mr-6">
        Front-End Engineer
        <span className="text-xs"> & Full-Stack Developer</span>
      </p>
      <p className="mt-8 mb-16 border-y py-4 px-1 text-xs md:text-sm text-muted text-wide-tracking text-bold flex gap-x-4 gap-y-2 sm:gap-x-6 xl:justify-between flex-wrap">
        {about.description.map((item, index) => (
          <Fragment key={item}>
            {index > 0 && <span>{TOKENS.separator.bullet}</span>}
            <span>{item}</span>
          </Fragment>
        ))}
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-52">
        <h2 className="text-wide-tracking font-bold">{about.title}</h2>
        <div className="max-w-screen-sm">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </UISection>
  );
}
