import { Fragment } from "react";

import { UILink } from "@/components/ui/UILink";
import { getContent } from "@/content";
import { PROFILE_NAME } from "@/content/about";
import type { Contact } from "@/content/contacts";
import type { Locale } from "@/i18n/config";
import { getPortfolioUrl } from "@/i18n/sections";
import { SEPARATORS } from "@/lib/format";

type ContactListProps = {
  contacts: Contact[];
  location: string;
};

function ContactList({ contacts, location }: ContactListProps) {
  const items = [...contacts, { id: "location", label: location }];

  return (
    <ul className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm">
      {items.map((contact, index) => (
        <Fragment key={contact.id}>
          {index > 0 && (
            <span aria-hidden="true" className="text-muted">
              {SEPARATORS.bullet}
            </span>
          )}
          <li>
            {"link" in contact ? (
              <UILink
                href={contact.link.href}
                underline={false}
                className="text-inherit hover:underline"
              >
                {contact.link.display}
              </UILink>
            ) : (
              contact.label
            )}
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

type ResumeHeaderProps = {
  locale: Locale;
};

export function ResumeHeader({ locale }: ResumeHeaderProps) {
  const { about, contacts, location } = getContent(locale);

  return (
    <header className="break-after-avoid-page">
      <h1 className="text-2xl font-bold">{PROFILE_NAME.full}</h1>

      <p className="mt-1 text-base">
        {about.role.title}{" "}
        <span className="italic text-muted">{about.role.subtitle}</span>
      </p>

      <ContactList contacts={contacts} location={location} />

      <UILink
        href={getPortfolioUrl(locale)}
        className="mt-2 inline-block text-xs text-inherit"
      >
        {about.onlineVersionLabel}
      </UILink>
    </header>
  );
}
