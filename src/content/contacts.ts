import type { Locale } from "@/i18n/config";

export interface Contact {
  id: string;
  label: string;
  link: {
    display: string;
    href: string;
  };
}

export interface ContactsContent {
  title: string;
  items: Contact[];
}

const contactLinks = {
  email: {
    display: "victor.nascimento.ns@gmail.com",
    href: "mailto:victor.nascimento.ns@gmail.com",
  },
  linkedin: {
    display: "linkedin.com/in/victor-nascimento-ns",
    href: "https://www.linkedin.com/in/victor-nascimento-ns/",
  },
  github: {
    display: "github.com/victornns",
    href: "https://github.com/victornns/",
  },
};

export const contactsContent: Record<Locale, ContactsContent> = {
  pt: {
    title: "Contato",
    items: [
      { id: "email", label: "E-mail", link: contactLinks.email },
      { id: "linkedin", label: "LinkedIn", link: contactLinks.linkedin },
      { id: "github", label: "GitHub", link: contactLinks.github },
    ],
  },
  en: {
    title: "Contact",
    items: [
      { id: "email", label: "Email", link: contactLinks.email },
      { id: "linkedin", label: "LinkedIn", link: contactLinks.linkedin },
      { id: "github", label: "GitHub", link: contactLinks.github },
    ],
  },
};
