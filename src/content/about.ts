import type { Locale } from "@/i18n/config";

export interface About {
  title: string;
  description: string[];
  paragraphs: string[];
}

export const DEV_NAME = "Victor Nascimento N. Silva";

export const aboutContent: Record<Locale, About> = {
  pt: {
    title: "Sobre",
    description: [DEV_NAME, "Desde 1995", "São Paulo, Brasil", "Full-Stack Web Developer", "10+ anos em Web", "Remoto"],
    paragraphs: [
      "Desenvolvedor front-end com 10+ anos de experiência em interfaces, performance e arquitetura web.",
      "Também atuo como freelancer full-stack, conduzindo projetos end-to-end sob demanda.",
    ],
  },
  en: {
    title: "About",
    description: [DEV_NAME, "Since 1995", "São Paulo, Brazil", "Full-Stack Web Developer", "10+ years in Web", "Remote"],
    paragraphs: [
      "Front-end developer with 10+ years of experience in interfaces, performance, and web architecture.",
      "I also work as a full-stack freelancer, leading end-to-end projects on demand.",
    ],
  },
};
