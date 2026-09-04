import { Fragment } from "react";

import { getContent } from "@/content";
import { PROFILE_NAME, type About } from "@/content/about";
import { TOKENS } from "@/lib/constants";

import type { Locale } from "@/i18n/config";
import { UISection } from "@/components/ui/UISection";
import { UISplitColumns } from "@/components/ui/UISplitColumns";

type AboutSectionProps = {
  locale: Locale;
};

function Headline() {
  return (
    <h1 className="flex flex-col gap-1 text-3xl uppercase sm:text-6xl">
      <span className="font-bold">{PROFILE_NAME.first}</span>
      <span>{PROFILE_NAME.last}</span>
    </h1>
  );
}

function Tagline({ role }: { role: About["role"] }) {
  return (
    <div className="flex items-start gap-5 mt-4 sm:gap-6">
      <span
        aria-hidden="true"
        className="mt-4 h-1 w-12 shrink-0 bg-black sm:w-14"
      />

      <p>
        <span className="block text-lg font-medium leading-none sm:text-2xl">
          {role.title}
        </span>

        <span className="mt-2 block text-sm italic leading-none text-muted">
          {role.subtitle}
        </span>
      </p>
    </div>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <p className="mt-8 mb-16 border-y py-4 text-xs md:text-sm text-muted text-wide-tracking text-bold flex gap-x-5 gap-y-2 flex-wrap 2xl:justify-between">
      {items.map((item, index) => (
        <Fragment key={item}>
          {index > 0 && <span>{TOKENS.separator.bullet}</span>}
          <span>{item}</span>
        </Fragment>
      ))}
    </p>
  );
}

function Bio({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <UISplitColumns
      aside={<h2 className="text-wide-tracking font-bold">{title}</h2>}
    >
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="mb-4 last:mb-0 max-w-screen-md">
          {paragraph}
        </p>
      ))}
    </UISplitColumns>
  );
}

export function AboutSection({ locale }: AboutSectionProps) {
  const { about } = getContent(locale);

  return (
    <UISection id="about">
      <Headline />
      <Tagline role={about.role} />
      <Highlights items={about.highlights} />
      <Bio title={about.title} paragraphs={about.summary} />
    </UISection>
  );
}
