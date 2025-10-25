import type { OrganizationId } from "./organizations";

export type ProjectKind = "Site Institucional" | "Site Corporativo" | "Landing Page" | "One Page" | "Portal" | "Blog" | "CMS" | "Headless CMS";

export interface Project {
  id: string;
  title: string;
  organizationId?: OrganizationId;
  date: string;
  link: string;
  summary: string[];
  technologies?: string[];
  type?: ProjectKind[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "cms-institucional-para-m2b-pro",
    title: "CMS institucional para M2B Pro",
    organizationId: "aza8-agency",
    date: "Ago 2021",
    link: "https://www.m2bpro.com.br",
    summary: ["Desenvolvimento de CMS corporativo em React e Strapi, com foco em performance e arquitetura headless."],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind", "Strapi", "Node.js", "AWS", "Git", "Clean Architecture"],
    type: ["CMS", "Site Corporativo", "Headless CMS"],
    featured: true,
  },
  {
    id: "site-corporativo-kt-retailing",
    title: "Site corporativo KT Retailing",
    organizationId: "aza8-agency",
    date: "Jun 2021",
    link: "https://kt.com.br",
    summary: ["Site institucional com CMS customizado em Vue.js e Strapi, destacando performance e conteúdo dinâmico."],
    technologies: ["Vue.js", "TypeScript", "Strapi", "Tailwind", "Node.js", "Git", "Performance", "Clean Code"],
    type: ["CMS", "Site Corporativo", "Headless CMS"],
  },
  {
    id: "landing-page-promocional-good-spine",
    title: "Landing page promocional Good Spine",
    date: "Abr 2021",
    link: "https://travesseiro.goodspine.com.br",
    summary: ["Landing page focada em conversão para venda de produtos ortopédicos, otimizada para SEO e performance."],
    technologies: ["Vue.js", "TypeScript", "Tailwind", "Sass", "Git", "UX", "SEO", "Landing Page"],
    type: ["Landing Page"],
  },
  {
    id: "site-institucional-loopa-digital",
    title: "Site institucional Loopa Digital",
    organizationId: "cave-digital-agency",
    date: "Mar 2019",
    link: "https://www.loopa.digital",
    summary: ["Desenvolvimento de site institucional em WordPress com tema customizado e foco em SEO."],
    technologies: ["WordPress", "PHP", "JavaScript", "Sass", "Git", "SEO", "Responsive Design"],
    type: ["CMS", "Site Institucional"],
  },
  {
    id: "site-oficial-galeria-do-rock",
    title: "Site oficial Galeria do Rock",
    organizationId: "cave-digital-agency",
    date: "Fev 2019",
    link: "https://www.galeriadorock.com.br",
    summary: ["Site institucional em WordPress para a Galeria do Rock, ícone cultural de São Paulo."],
    technologies: ["WordPress", "PHP", "JavaScript", "Sass", "SEO", "Performance", "Accessibility"],
    type: ["CMS", "Site Institucional"],
  },
  {
    id: "blog-autoral-juliao-coelho",
    title: "Blog autoral Julião Coelho",
    organizationId: "cave-digital-agency",
    date: "Nov 2018",
    link: "https://www.juliaocoelho.com.br",
    summary: ["Blog pessoal em WordPress com design responsivo, foco em branding e performance."],
    technologies: ["WordPress", "PHP", "JavaScript", "Sass", "SEO", "Performance", "Blog", "Accessibility"],
    type: ["Blog", "CMS"],
  },
  {
    id: "landing-page-covabra",
    title: "Landing page Covabra",
    organizationId: "cave-digital-agency",
    date: "Set 2018",
    link: "",
    summary: ["Landing page promocional para a rede Covabra, otimizada para campanhas digitais."],
    technologies: ["JavaScript", "Node.js", "Gulp", "Sass", "BemCSS", "Git", "Performance", "Landing Page"],
    type: ["Landing Page"],
  },
  {
    id: "landing-corporativa-unic",
    title: "Landing corporativa UNIC",
    organizationId: "cave-digital-agency",
    date: "Ago 2018",
    link: "https://www.unic-corporativos.com.br",
    summary: ["Landing page corporativa com foco em apresentação de serviços e otimização de performance."],
    technologies: ["JavaScript", "Node.js", "Gulp", "Sass", "BemCSS", "Git", "Performance", "UX"],
    type: ["Landing Page", "Site Corporativo"],
  },
  {
    id: "landing-animada-metlycs",
    title: "Landing animada Metlycs",
    organizationId: "l4u-agency",
    date: "Mar 2018",
    link: "https://www.metlycs.com.br",
    summary: ["Landing page dinâmica com animações e interações, desenvolvida para campanhas promocionais."],
    technologies: ["Vue.js", "Node.js", "Pug.js", "CSS animations", "Webpack", "Git", "UX", "Performance"],
    type: ["Landing Page", "One Page"],
  },
  {
    id: "site-institucional-dvl",
    title: "Site institucional DVL",
    organizationId: "l4u-agency",
    date: "Jan 2018",
    link: "https://www.constelacaodvl.com.br",
    summary: ["Desenvolvimento de site institucional com foco em identidade digital e performance."],
    technologies: ["JavaScript", "Node.js", "Heroku", "Sass", "BemCSS", "Git", "SEO", "Performance"],
    type: ["Site Institucional"],
  },
  {
    id: "portal-de-franquias-dia",
    title: "Portal de franquias DIA",
    organizationId: "l4u-agency",
    date: "Out 2017",
    link: "https://www.franquiadia.com.br",
    summary: ["Portal em WordPress para apresentação e captação de franquias da marca DIA."],
    technologies: ["WordPress", "PHP", "JavaScript", "Sass", "SEO", "Performance", "CMS"],
    type: ["CMS", "Portal"],
  },
];
