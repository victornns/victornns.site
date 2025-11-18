import type { OrganizationId } from "./organizations";

export type ProjectKind = "Site Institucional" | "Site Corporativo" | "Landing Page" | "One Page" | "Portal" | "Blog" | "CMS" | "Headless CMS";

export interface Project {
  id: string;
  title: string;
  organizationId?: OrganizationId;
  date: string;
  links?: {
    official?: {
      url: string;
      expired?: boolean;
    };
    preview?: {
      url: string;
    };
  };
  summary: string[];
  technologies?: string[];
  type?: ProjectKind[];
  featured?: boolean;
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    id: "onepage-institucional-aza8",
    title: "One Page institucional Aza8",
    organizationId: "aza8-agency",
    date: "Out.2025",
    links: {
      official: { url: "https://www.aza8.com.br/", expired: true },
      preview: { url: "https://agencia-aza8-website.vercel.app/" },
    },
    summary: ["One Page institucional desenvolvida em React e Next.js com TypeScript, refletindo o posicionamento e propósito da marca."],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind", "Node.js", "Vercel", "Git", "Responsive Design", "Performance"],
    type: ["One Page", "Site Institucional"],
  },
  {
    id: "landing-page-sao-lucas-medical-tech",
    title: "Landing page Hospital São Lucas – Medical Tech",
    organizationId: "aza8-agency",
    date: "Mai.2025",
    links: { preview: { url: "https://aza8-sao-lucas-landing-page.vercel.app/" } },
    summary: ["Landing page institucional com Vue.js, focada em SEO, performance e responsividade."],
    technologies: ["Vue.js", "JavaScript", "Sass", "Node.js", "Git", "SEO", "Performance", "Responsive Design"],
    type: ["Landing Page", "Site Institucional"],
    highlight: true,
  },
  {
    id: "landing-page-vpl-protecao-veicular",
    title: "Landing page VPL Proteção Veicular",
    organizationId: "aza8-agency",
    date: "Abr.2025",
    links: { preview: { url: "https://vpl-website.vercel.app/" } },
    summary: ["Landing page institucional e comercial desenvolvida em Vue.js, com foco em SEO e captação de leads."],
    technologies: ["Vue.js", "JavaScript", "Sass", "Node.js", "Git", "SEO", "Performance", "Responsive Design"],
    type: ["Landing Page", "Site Institucional"],
  },
  {
    id: "site-corporativo-banco-digimais",
    title: "Site corporativo Banco Digimais",
    organizationId: "aza8-agency",
    date: "Fev.2025",
    links: { official: { url: "https://www.bancodigimais.com.br/", expired: false }, preview: { url: "https://banco-digimais-website.vercel.app/" } },
    summary: ["Site corporativo desenvolvido em React e Next.js, com múltiplas páginas institucionais, foco em performance, acessibilidade e SEO."],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind", "Node.js", "Vercel", "Git", "SEO", "Accessibility", "Performance"],
    type: ["Site Corporativo", "CMS"],
    highlight: true,
  },
  {
    id: "cms-artec-revestimentos",
    title: "CMS institucional Artec Revestimentos",
    organizationId: "aza8-agency",
    date: "Fev.2023",
    links: { official: { url: "https://artecrevestimentos.com.br/", expired: false } },
    summary: ["CMS corporativo em Vue.js, Nuxt e Strapi com catálogo de produtos, blog e painel administrativo headless."],
    technologies: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind", "Strapi", "Node.js", "API REST", "Git", "Performance"],
    type: ["CMS", "Site Corporativo", "Headless CMS"],
    highlight: true,
  },
  {
    id: "cms-institucional-para-m2b-pro",
    title: "CMS institucional para M2B Pro",
    organizationId: "aza8-agency",
    date: "Nov.2021",
    links: { official: { url: "https://www.m2bpro.com.br", expired: false } },
    summary: ["Desenvolvimento de CMS corporativo em React e Strapi, com foco em performance e arquitetura headless."],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind", "Strapi", "Node.js", "AWS", "Git", "Clean Architecture"],
    type: ["CMS", "Site Corporativo", "Headless CMS"],
    featured: true,
    highlight: true,
  },
  {
    id: "site-corporativo-kt-retailing",
    title: "Site corporativo KT Retailing",
    organizationId: "aza8-agency",
    date: "Jun.2021",
    links: { official: { url: "https://kt.com.br", expired: false } },
    summary: ["Site institucional com CMS customizado em Vue.js e Strapi, destacando performance e conteúdo dinâmico."],
    technologies: ["Vue.js", "TypeScript", "Strapi", "Tailwind", "Node.js", "Git", "Performance", "Clean Code"],
    type: ["CMS", "Site Corporativo", "Headless CMS"],
    highlight: true,
  },
  {
    id: "site-estatico-casa-cortinas-persianas",
    title: "Site estático Casa Cortinas & Persianas",
    organizationId: "aza8-agency",
    date: "Mar.2021",
    links: { official: { url: "https://produtos.casacortinasepersianas.com.br/", expired: false } },
    summary: ["Site institucional em Vue.js e Nuxt com geração estática (SSG), focado em leveza e performance."],
    technologies: ["Vue.js", "Nuxt.js", "JavaScript", "Tailwind", "Node.js", "Git", "Performance", "Responsive Design"],
    type: ["Site Institucional"],
  },
  {
    id: "memorial-avarc-homenagem-covid19",
    title: "Memorial Avarc - Homenagem às Vítimas da COVID-19",
    organizationId: "ministerio-publico-sp",
    date: "Fev.2021",
    links: { official: { url: "https://www.memorialavarc.com.br/", expired: false } },
    summary: ["Site institucional voluntário desenvolvido em Vue.js e Nuxt, com foco em acessibilidade e integração de conteúdo dinâmico."],
    technologies: ["Vue.js", "Nuxt.js", "JavaScript", "Sass", "Node.js", "Git", "Responsive Design", "Accessibility"],
    type: ["Site Institucional", "CMS"],
    highlight: true,
  },
  {
    id: "landing-page-promocional-good-spine",
    title: "Landing page promocional Good Spine",
    date: "Abr.2021",
    links: { official: { url: "https://travesseiro.goodspine.com.br", expired: false } },
    summary: ["Landing page focada em conversão para venda de produtos ortopédicos, otimizada para SEO e performance."],
    technologies: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind", "Sass", "Git", "UX", "SEO", "Landing Page"],
    type: ["Landing Page"],
    highlight: true,
  },
  {
    id: "site-institucional-loopa-digital",
    title: "Site institucional Loopa Digital",
    organizationId: "cave-digital-agency",
    date: "Fev.2019",
    links: { official: { url: "https://www.loopa.digital", expired: false } },
    summary: ["Desenvolvimento de site institucional em WordPress com tema customizado e foco em SEO."],
    technologies: ["WordPress", "PHP", "JavaScript", "Sass", "Git", "SEO", "Responsive Design"],
    type: ["CMS", "Site Institucional"],
  },
  {
    id: "site-oficial-galeria-do-rock",
    title: "Site oficial Galeria do Rock",
    organizationId: "cave-digital-agency",
    date: "Jan.2019",
    links: { official: { url: "https://www.galeriadorock.com.br", expired: false } },
    summary: ["Site institucional em WordPress para a Galeria do Rock, ícone cultural de São Paulo."],
    technologies: ["WordPress", "PHP", "JavaScript", "Sass", "SEO", "Performance", "Accessibility"],
    type: ["CMS", "Site Institucional"],
    highlight: true,
  },
  {
    id: "blog-autoral-juliao-coelho",
    title: "Blog autoral Julião Coelho",
    organizationId: "cave-digital-agency",
    date: "Nov.2018",
    links: { official: { url: "https://www.juliaocoelho.com.br", expired: false } },
    summary: ["Blog pessoal em WordPress com design responsivo, foco em branding e performance."],
    technologies: ["WordPress", "PHP", "JavaScript", "Sass", "SEO", "Performance", "Blog", "Accessibility"],
    type: ["Blog", "CMS"],
  },
  {
    id: "landing-page-covabra",
    title: "Landing page Covabra",
    organizationId: "cave-digital-agency",
    date: "Set.2018",
    summary: ["Landing page promocional para a rede Covabra, otimizada para campanhas digitais."],
    technologies: ["JavaScript", "Node.js", "Gulp", "Sass", "BemCSS", "Git", "Performance", "Landing Page"],
    type: ["Landing Page"],
  },
  {
    id: "landing-corporativa-unic",
    title: "Landing corporativa UNIC",
    organizationId: "cave-digital-agency",
    date: "Ago.2018",
    links: { official: { url: "https://www.unic-corporativos.com.br", expired: false } },
    summary: ["Landing page corporativa com foco em apresentação de serviços e otimização de performance."],
    technologies: ["JavaScript", "Node.js", "Gulp", "Sass", "BemCSS", "Git", "Performance", "UX"],
    type: ["Landing Page", "Site Corporativo"],
  },
  {
    id: "landing-animada-metlycs",
    title: "Landing animada Metlycs",
    organizationId: "l4u-agency",
    date: "Mar.2018",
    links: { official: { url: "https://www.metlycs.com.br", expired: false } },
    summary: ["Landing page dinâmica com animações e interações, desenvolvida para campanhas promocionais."],
    technologies: ["Vue.js", "Node.js", "Pug.js", "CSS animations", "Webpack", "Git", "UX", "Performance"],
    type: ["Landing Page", "One Page"],
    highlight: true,
  },
  {
    id: "site-institucional-dvl",
    title: "Site institucional DVL",
    organizationId: "l4u-agency",
    date: "Jan.2018",
    links: { official: { url: "https://www.constelacaodvl.com.br", expired: false } },
    summary: ["Desenvolvimento de site institucional com foco em identidade digital e performance."],
    technologies: ["JavaScript", "Node.js", "Heroku", "Sass", "BemCSS", "Git", "SEO", "Performance"],
    type: ["Site Institucional"],
  },
  {
    id: "portal-de-franquias-dia",
    title: "Portal de franquias DIA",
    organizationId: "l4u-agency",
    date: "Out.2017",
    links: { official: { url: "https://www.franquiadia.com.br", expired: false } },
    summary: ["Portal em WordPress para apresentação e captação de franquias da marca DIA."],
    technologies: ["WordPress", "PHP", "JavaScript", "Sass", "SEO", "Performance", "CMS"],
    type: ["CMS", "Portal"],
    highlight: true,
  },
];
