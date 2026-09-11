import type { Locale } from "@/i18n/config";

export type CommonContent = {
  present: string;
  close: string;
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
};

export const commonContent: Record<Locale, CommonContent> = {
  pt: {
    present: "Atualmente",
    close: "Fechar",
    notFound: {
      title: "Página não encontrada",
      description: "O endereço acessado não existe ou foi movido.",
      backHome: "Voltar ao início",
    },
  },
  en: {
    present: "Present",
    close: "Close",
    notFound: {
      title: "Page not found",
      description: "The page you requested doesn't exist or has moved.",
      backHome: "Back to home",
    },
  },
};

/** Aria-label naming the target language, always spoken in that language regardless of the current locale. */
export const switchLocaleLabels: Record<Locale, string> = {
  pt: "Trocar para português",
  en: "Switch to English",
};
