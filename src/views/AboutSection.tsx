import { Fragment } from "react";

import { getContent } from "@/content";
import { PROFILE_NAME, type About } from "@/content/about";
import type { Contact } from "@/content/contacts";
import { SEPARATORS } from "@/lib/format";
import { tw } from "@/lib/tailwind";

import { getLocalizedUrl, type Locale } from "@/i18n/config";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import { LocationPinIcon } from "@/components/icons/LocationPinIcon";
import { UISection } from "@/components/ui/UISection";
import { UISplitColumns } from "@/components/ui/UISplitColumns";
import { UILink } from "@/components/ui/UILink";

type AboutSectionProps = {
  locale: Locale;
};

function Headline({
  role,
  resumeHref,
  resumeLabel,
}: {
  role: About["role"];
  resumeHref: string;
  resumeLabel: string;
}) {
  return (
    <>
      <h1 className="flex flex-col gap-1 text-3xl uppercase sm:text-6xl">
        <span className="font-extrabold">{PROFILE_NAME.first}</span>
        <span>{PROFILE_NAME.last}</span>
      </h1>

      <div className="mt-4 flex items-start gap-5 sm:gap-6">
        <span
          aria-hidden="true"
          className="mt-4 h-1 w-12 shrink-0 bg-black sm:w-14"
        />

        <p>
          <span className="block text-lg font-medium leading-none sm:text-2xl">
            {role.title}
          </span>

          <span className="mt-1 block italic leading-none text-muted">
            {role.subtitle}
          </span>
        </p>
      </div>

      <UILink
        href={resumeHref}
        className="inline-flex items-center gap-1.5 text-sm font-semibold italic md:mt-10"
      >
        <>[{resumeLabel}]</>
        <ExternalLinkIcon />
      </UILink>
    </>
  );
}

function Contacts({ items, location }: { items: Contact[]; location: string }) {
  return (
    <div className="flex flex-col gap-6 border-t pt-6 md:justify-center md:border-l md:border-t-0 md:pl-8 md:pt-0">
      <ul className="flex flex-col gap-4 md:gap-5">
        {items.map((contact) => (
          <li key={contact.id} className="flex flex-col">
            <span className="text-xs text-muted">{contact.label}</span>
            <UILink href={contact.link.href} className="break-words underline">
              {contact.link.display}
            </UILink>
          </li>
        ))}
      </ul>

      <p className="flex items-center gap-1.5 text-xs text-muted">
        <LocationPinIcon />
        {location}
      </p>
    </div>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <p className="text-wide-tracking mb-16 mt-12 flex flex-wrap gap-x-5 gap-y-2 border-y py-4 text-xs text-muted md:text-sm xl:justify-between">
      {items.map((item, index) => (
        <Fragment key={item}>
          {index > 0 && <span>{SEPARATORS.bullet}</span>}
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
        <p key={paragraph} className="mb-4 max-w-screen-md last:mb-0">
          {paragraph}
        </p>
      ))}
    </UISplitColumns>
  );
}

export function AboutSection({ locale }: AboutSectionProps) {
  const { about, contacts, common, location } = getContent(locale);

  return (
    <UISection id="about">
      <UISplitColumns
        asidePosition="right"
        asideWidth={tw`md:w-60 lg:w-96`}
        aside={<Contacts items={contacts} location={location} />}
      >
        <Headline
          role={about.role}
          resumeHref={getLocalizedUrl(locale, "portfolio")}
          resumeLabel={common.resumeOnline}
        />
      </UISplitColumns>
      <Highlights items={about.highlights} />
      <Bio title={about.title} paragraphs={about.summary} />
    </UISection>
  );
}
