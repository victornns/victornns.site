import { contactLinks } from "@/content/contacts";
import type { Locale } from "@/i18n/config";

export type FooterContent = {
  contact: {
    label: string;
    description: string;
    href: string;
  };
  backToTop: string;
};

export const footerContent: Record<Locale, FooterContent> = {
  pt: {
    contact: {
      label: "Vamos conversar",
      description:
        "Tem um projeto em mente ou quer saber mais sobre o meu trabalho? Me chame no WhatsApp.",
      href: contactLinks.whatsapp.href,
    },
    backToTop: "Voltar ao topo",
  },
  en: {
    contact: {
      label: "Let's talk",
      description:
        "Have a project in mind or want to know more about my work? Message me on WhatsApp.",
      href: contactLinks.whatsapp.href,
    },
    backToTop: "Back to top",
  },
};
