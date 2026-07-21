import { getContent } from "@/content";

import type { Locale } from "@/i18n/config";

import { UISection } from "@/components/ui/UISection";
import { UICard } from "@/components/ui/UICard";
import { UILink } from "@/components/ui/UILink";

type ContactsSectionProps = {
  locale: Locale;
};

export function ContactsSection({ locale }: ContactsSectionProps) {
  const { contacts } = getContent(locale);

  return (
    <UISection
      id="contact"
      title={contacts.title}
    >
      <ul>
        {contacts.items.map((contact) => (
          <li key={contact.id}>
            <UICard.Root spacing="compact">
              <span>{contact.label}: </span>
              <UILink href={contact.link.href}>{contact.link.display}</UILink>
            </UICard.Root>
          </li>
        ))}
      </ul>
    </UISection>
  );
}
