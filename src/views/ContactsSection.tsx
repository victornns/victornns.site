import { contacts } from "@/content/contacts";

import { UISection } from "@/components/ui/UISection";
import { UICard } from "@/components/ui/UICard";
import { UILink } from "@/components/ui/UILink";

export function ContactsSection() {
  return (
    <UISection title="Contatos">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <UICard.Root>
              <span>{contact.label}: </span>
              <UILink href={contact.link.href}>{contact.link.display}</UILink>
            </UICard.Root>
          </li>
        ))}
      </ul>
    </UISection>
  );
}
