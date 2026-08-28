import type { Locale } from "@/i18n/config";

export interface About {
  title: string;
  description: string[];
  /** Short, concise bio — used on the portfolio page. */
  summary: string[];
  /** Longer, resume-focused bio — used on the curriculo page. */
  resumeSummary: string[];
}

export const PROFILE_NAME = {
  first: "Victor",
  last: "Nascimento N. S.",
  full: "Victor Nascimento N. Silva",
};

export const aboutContent: Record<Locale, About> = {
  pt: {
    title: "Sobre",
    description: [
      "10+ anos em Web",
      "React & Next.js",
      "TypeScript & Node.js",
      "Arquitetura & Web Performance",
      "Atibaia - SP, Brasil",
      "Remoto",
    ],
    summary: [
      "Desenvolvedor front-end com 10+ anos de experiência em interfaces, performance e arquitetura web.",
      "Também atuo como freelancer full-stack, conduzindo projetos end-to-end sob demanda.",
    ],
    resumeSummary: [
      "Desenvolvedor front-end com mais de 10 anos de experiência, especializado em interfaces, performance e arquitetura de aplicações web modernas com React, Next.js, TypeScript e Node.js.",
      "Atuo também como freelancer full-stack, conduzindo projetos end-to-end — do levantamento de requisitos à entrega em produção — para clientes remotos no Brasil e no exterior.",
      "Tenho foco em código limpo, boas práticas de arquitetura e performance, buscando sempre entregar produtos escaláveis e de fácil manutenção.",
    ],
  },
  en: {
    title: "About",
    description: [
      "10+ years in Web",
      "React & Next.js",
      "TypeScript & Node.js",
      "Architecture & Web Performance",
      "Atibaia - SP, Brazil",
      "Remote",
    ],
    summary: [
      "Front-end developer with 10+ years of experience in interfaces, performance, and web architecture.",
      "I also work as a full-stack freelancer, leading end-to-end projects on demand.",
    ],
    resumeSummary: [
      "Front-end developer with 10+ years of experience, specialized in interfaces, performance, and architecture of modern web applications with React, Next.js, TypeScript, and Node.js.",
      "I also work as a full-stack freelancer, leading end-to-end projects — from gathering requirements to shipping to production — for remote clients in Brazil and abroad.",
      "I focus on clean code and solid architecture and performance practices, always aiming to deliver scalable, easy-to-maintain products.",
    ],
  },
};
