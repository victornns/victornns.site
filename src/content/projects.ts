import type { OrganizationId } from "./organizations";
import type { Locale } from "@/i18n/config";

export type ProjectKind = "Site Institucional" | "Site Corporativo" | "Landing Page" | "One Page" | "Portal" | "Blog" | "CMS" | "Headless CMS";

export interface Project {
  id: string;
  slug: string;
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

export interface ProjectsContent {
  title: string;
  description: string;
  items: Project[];
}

/** Raw project entry: `slug` is optional here and resolved (with dedupe) by `withUniqueSlugs`. */
type ProjectInput = Omit<Project, "slug"> & { slug?: string };

/**
 * Resolves each project's public slug, defaulting to its `id`. Manual slugs
 * are respected as-is; only real duplicates get an incremental suffix (e.g.
 * `meu-projeto-2`), keeping slugs unique within each locale.
 */
function withUniqueSlugs(items: ProjectInput[]): Project[] {
  const usedSlugs = new Set<string>();

  return items.map((item) => {
    const baseSlug = item.slug ?? item.id;
    let slug = baseSlug;
    let attempt = 2;

    while (usedSlugs.has(slug)) {
      slug = `${baseSlug}-${attempt}`;
      attempt += 1;
    }

    usedSlugs.add(slug);
    return { ...item, slug };
  });
}

const ptItems: ProjectInput[] = [
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

const enItems: ProjectInput[] = [
      {
        id: "onepage-institucional-aza8",
        title: "Aza8 Institutional One-Page Site",
        organizationId: "aza8-agency",
        date: "Oct.2025",
        links: {
          official: { url: "https://www.aza8.com.br/", expired: true },
          preview: { url: "https://agencia-aza8-website.vercel.app/" },
        },
        summary: ["Institutional one-page site built with React and Next.js using TypeScript, reflecting the brand's positioning and purpose."],
        technologies: ["React.js", "Next.js", "TypeScript", "Tailwind", "Node.js", "Vercel", "Git", "Responsive Design", "Performance"],
        type: ["One Page", "Site Institucional"],
      },
      {
        id: "landing-page-sao-lucas-medical-tech",
        title: "São Lucas Hospital Landing Page – Medical Tech",
        organizationId: "aza8-agency",
        date: "May.2025",
        links: { preview: { url: "https://aza8-sao-lucas-landing-page.vercel.app/" } },
        summary: ["Institutional landing page built with Vue.js, focused on SEO, performance, and responsiveness."],
        technologies: ["Vue.js", "JavaScript", "Sass", "Node.js", "Git", "SEO", "Performance", "Responsive Design"],
        type: ["Landing Page", "Site Institucional"],
        highlight: true,
      },
      {
        id: "landing-page-vpl-protecao-veicular",
        title: "VPL Vehicle Protection Landing Page",
        organizationId: "aza8-agency",
        date: "Apr.2025",
        links: { preview: { url: "https://vpl-website.vercel.app/" } },
        summary: ["Institutional and commercial landing page built with Vue.js, focused on SEO and lead generation."],
        technologies: ["Vue.js", "JavaScript", "Sass", "Node.js", "Git", "SEO", "Performance", "Responsive Design"],
        type: ["Landing Page", "Site Institucional"],
      },
      {
        id: "site-corporativo-banco-digimais",
        title: "Banco Digimais Corporate Website",
        organizationId: "aza8-agency",
        date: "Feb.2025",
        links: { official: { url: "https://www.bancodigimais.com.br/", expired: false }, preview: { url: "https://banco-digimais-website.vercel.app/" } },
        summary: ["Corporate website built with React and Next.js, featuring multiple institutional pages with a focus on performance, accessibility, and SEO."],
        technologies: ["React.js", "Next.js", "TypeScript", "Tailwind", "Node.js", "Vercel", "Git", "SEO", "Accessibility", "Performance"],
        type: ["Site Corporativo", "CMS"],
        highlight: true,
      },
      {
        id: "cms-artec-revestimentos",
        title: "Artec Revestimentos Institutional CMS",
        organizationId: "aza8-agency",
        date: "Feb.2023",
        links: { official: { url: "https://artecrevestimentos.com.br/", expired: false } },
        summary: ["Corporate CMS built with Vue.js, Nuxt, and Strapi, featuring a product catalog, blog, and headless admin panel."],
        technologies: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind", "Strapi", "Node.js", "REST API", "Git", "Performance"],
        type: ["CMS", "Site Corporativo", "Headless CMS"],
        highlight: true,
      },
      {
        id: "cms-institucional-para-m2b-pro",
        title: "Institutional CMS for M2B Pro",
        organizationId: "aza8-agency",
        date: "Nov.2021",
        links: { official: { url: "https://www.m2bpro.com.br", expired: false } },
        summary: ["Development of a corporate CMS with React and Strapi, focused on performance and headless architecture."],
        technologies: ["React.js", "Next.js", "TypeScript", "Tailwind", "Strapi", "Node.js", "AWS", "Git", "Clean Architecture"],
        type: ["CMS", "Site Corporativo", "Headless CMS"],
        featured: true,
        highlight: true,
      },
      {
        id: "site-corporativo-kt-retailing",
        title: "KT Retailing Corporate Website",
        organizationId: "aza8-agency",
        date: "Jun.2021",
        links: { official: { url: "https://kt.com.br", expired: false } },
        summary: ["Institutional website with a custom CMS built with Vue.js and Strapi, highlighting performance and dynamic content."],
        technologies: ["Vue.js", "TypeScript", "Strapi", "Tailwind", "Node.js", "Git", "Performance", "Clean Code"],
        type: ["CMS", "Site Corporativo", "Headless CMS"],
        highlight: true,
      },
      {
        id: "site-estatico-casa-cortinas-persianas",
        title: "Casa Cortinas & Persianas Static Website",
        organizationId: "aza8-agency",
        date: "Mar.2021",
        links: { official: { url: "https://produtos.casacortinasepersianas.com.br/", expired: false } },
        summary: ["Institutional website built with Vue.js and Nuxt using static generation (SSG), focused on lightweight performance."],
        technologies: ["Vue.js", "Nuxt.js", "JavaScript", "Tailwind", "Node.js", "Git", "Performance", "Responsive Design"],
        type: ["Site Institucional"],
      },
      {
        id: "memorial-avarc-homenagem-covid19",
        title: "Avarc Memorial - Tribute to COVID-19 Victims",
        organizationId: "ministerio-publico-sp",
        date: "Feb.2021",
        links: { official: { url: "https://www.memorialavarc.com.br/", expired: false } },
        summary: ["Volunteer institutional website built with Vue.js and Nuxt, focused on accessibility and dynamic content integration."],
        technologies: ["Vue.js", "Nuxt.js", "JavaScript", "Sass", "Node.js", "Git", "Responsive Design", "Accessibility"],
        type: ["Site Institucional", "CMS"],
        highlight: true,
      },
      {
        id: "landing-page-promocional-good-spine",
        title: "Good Spine Promotional Landing Page",
        date: "Apr.2021",
        links: { official: { url: "https://travesseiro.goodspine.com.br", expired: false } },
        summary: ["Landing page focused on conversion for selling orthopedic products, optimized for SEO and performance."],
        technologies: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind", "Sass", "Git", "UX", "SEO", "Landing Page"],
        type: ["Landing Page"],
        highlight: true,
      },
      {
        id: "site-institucional-loopa-digital",
        title: "Loopa Digital Institutional Website",
        organizationId: "cave-digital-agency",
        date: "Feb.2019",
        links: { official: { url: "https://www.loopa.digital", expired: false } },
        summary: ["Development of an institutional website on WordPress with a custom theme, focused on SEO."],
        technologies: ["WordPress", "PHP", "JavaScript", "Sass", "Git", "SEO", "Responsive Design"],
        type: ["CMS", "Site Institucional"],
      },
      {
        id: "site-oficial-galeria-do-rock",
        title: "Galeria do Rock Official Website",
        organizationId: "cave-digital-agency",
        date: "Jan.2019",
        links: { official: { url: "https://www.galeriadorock.com.br", expired: false } },
        summary: ["Institutional WordPress website for Galeria do Rock, a cultural icon of São Paulo."],
        technologies: ["WordPress", "PHP", "JavaScript", "Sass", "SEO", "Performance", "Accessibility"],
        type: ["CMS", "Site Institucional"],
        highlight: true,
      },
      {
        id: "blog-autoral-juliao-coelho",
        title: "Julião Coelho Personal Blog",
        organizationId: "cave-digital-agency",
        date: "Nov.2018",
        links: { official: { url: "https://www.juliaocoelho.com.br", expired: false } },
        summary: ["Personal blog built on WordPress with responsive design, focused on branding and performance."],
        technologies: ["WordPress", "PHP", "JavaScript", "Sass", "SEO", "Performance", "Blog", "Accessibility"],
        type: ["Blog", "CMS"],
      },
      {
        id: "landing-page-covabra",
        title: "Covabra Landing Page",
        organizationId: "cave-digital-agency",
        date: "Sep.2018",
        summary: ["Promotional landing page for the Covabra retail chain, optimized for digital campaigns."],
        technologies: ["JavaScript", "Node.js", "Gulp", "Sass", "BemCSS", "Git", "Performance", "Landing Page"],
        type: ["Landing Page"],
      },
      {
        id: "landing-corporativa-unic",
        title: "UNIC Corporate Landing Page",
        organizationId: "cave-digital-agency",
        date: "Aug.2018",
        links: { official: { url: "https://www.unic-corporativos.com.br", expired: false } },
        summary: ["Corporate landing page focused on showcasing services and performance optimization."],
        technologies: ["JavaScript", "Node.js", "Gulp", "Sass", "BemCSS", "Git", "Performance", "UX"],
        type: ["Landing Page", "Site Corporativo"],
      },
      {
        id: "landing-animada-metlycs",
        title: "Metlycs Animated Landing Page",
        organizationId: "l4u-agency",
        date: "Mar.2018",
        links: { official: { url: "https://www.metlycs.com.br", expired: false } },
        summary: ["Dynamic landing page with animations and interactions, developed for promotional campaigns."],
        technologies: ["Vue.js", "Node.js", "Pug.js", "CSS animations", "Webpack", "Git", "UX", "Performance"],
        type: ["Landing Page", "One Page"],
        highlight: true,
      },
      {
        id: "site-institucional-dvl",
        title: "DVL Institutional Website",
        organizationId: "l4u-agency",
        date: "Jan.2018",
        links: { official: { url: "https://www.constelacaodvl.com.br", expired: false } },
        summary: ["Development of an institutional website focused on digital identity and performance."],
        technologies: ["JavaScript", "Node.js", "Heroku", "Sass", "BemCSS", "Git", "SEO", "Performance"],
        type: ["Site Institucional"],
      },
      {
        id: "portal-de-franquias-dia",
        title: "DIA Franchise Portal",
        organizationId: "l4u-agency",
        date: "Oct.2017",
        links: { official: { url: "https://www.franquiadia.com.br", expired: false } },
        summary: ["WordPress portal for showcasing and attracting franchises for the DIA brand."],
        technologies: ["WordPress", "PHP", "JavaScript", "Sass", "SEO", "Performance", "CMS"],
        type: ["CMS", "Portal"],
        highlight: true,
      },
];

export const projectsContent: Record<Locale, ProjectsContent> = {
  pt: {
    title: "Projetos",
    description: "Seleção de blogs, websites, campanhas, CMS e soluções web desenvolvidas",
    items: withUniqueSlugs(ptItems),
  },
  en: {
    title: "Projects",
    description: "Selection of blogs, websites, campaigns, CMS and web solutions developed",
    items: withUniqueSlugs(enItems),
  },
};
