import type { Locale } from "@/i18n/config";

export type Contact = {
  id: string;
  label: string;
  link: {
    display: string;
    href: string;
  };
};

const contactLinks = {
  email: {
    display: "contato@victornns.com",
    href: "mailto:contato@victornns.com",
  },
  phone: {
    display: "+55 11 96739-5380",
    href: "tel:+5511967395380",
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

export const contactsContent: Record<Locale, Contact[]> = {
  pt: [
    { id: "email", label: "E-mail", link: contactLinks.email },
    { id: "phone", label: "Telefone", link: contactLinks.phone },
    { id: "linkedin", label: "LinkedIn", link: contactLinks.linkedin },
    { id: "github", label: "GitHub", link: contactLinks.github },
  ],
  en: [
    { id: "email", label: "Email", link: contactLinks.email },
    { id: "phone", label: "Phone", link: contactLinks.phone },
    { id: "linkedin", label: "LinkedIn", link: contactLinks.linkedin },
    { id: "github", label: "GitHub", link: contactLinks.github },
  ],
};

export const locationContent: Record<Locale, string> = {
  pt: "Atibaia, SP, Brasil / Remoto",
  en: "Atibaia, SP, Brazil / Remote",
};
