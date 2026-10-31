import { UILink } from "@/components/ui/UILink";
import { getContent } from "@/content";
import { PROFILE_NAME } from "@/content/about";
import type { Contact } from "@/content/contacts";
import type { Locale } from "@/i18n/config";
import { getPortfolioUrl } from "@/i18n/sections";
import { sanitizeUrlForDisplay, SEPARATORS } from "@/lib/format";

type ContactListProps = {
  contacts: Contact[];
  location: string;
};

function ContactList({ contacts, location }: ContactListProps) {
  const items = [...contacts, { id: "location", label: location }];

  return (
    <ul className="mt-2">
      {items.map((contact, index) => (
        <li key={contact.id} className="inline">
          {index > 0 && (
            <span aria-hidden="true" className="text-muted">
              {SEPARATORS.bullet}
            </span>
          )}
          {"link" in contact ? (
            <UILink href={contact.link.href}>{contact.link.display}</UILink>
          ) : (
            contact.label
          )}
        </li>
      ))}
    </ul>
  );
}

type ResumeHeaderProps = {
  locale: Locale;
};

export function ResumeHeader({ locale }: ResumeHeaderProps) {
  const { about, contacts, location } = getContent(locale);
  const portfolioUrl = getPortfolioUrl(locale);

  return (
    <header className="break-after-avoid-page">
      <h1 className="text-2xl font-bold">{PROFILE_NAME.full}</h1>

      <ContactList contacts={contacts} location={location} />

      <p className="mt-2">
        <span className="font-semibold">{about.onlineVersionLabel}:</span>{" "}
        <UILink href={portfolioUrl} className="text-inherit">
          {sanitizeUrlForDisplay(portfolioUrl)}
        </UILink>
      </p>
    </header>
  );
}
