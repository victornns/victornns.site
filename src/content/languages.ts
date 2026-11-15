import type { Locale } from "@/i18n/config";

export type Language = {
  id: string;
  name: string;
  level: string;
};

export type LanguagesContent = {
  title: string;
  items: Language[];
};

export const languagesContent: Record<Locale, LanguagesContent> = {
  pt: {
    title: "Idiomas",
    items: [
      {
        id: "english",
        name: "Inglês",
        level: "Leitura técnica avançada; conversação básica",
      },
    ],
  },
  en: {
    title: "Languages",
    items: [
      {
        id: "english",
        name: "English",
        level: "Advanced technical reading; basic conversation",
      },
    ],
  },
};
