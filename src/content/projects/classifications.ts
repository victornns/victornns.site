import type { Locale } from "@/i18n/config";

type LocalizedLabel = Record<Locale, string>;

export const PROJECT_CATEGORIES = {
  website: { pt: "Website", en: "Website" },
  landingPage: { pt: "Landing Page", en: "Landing Page" },
  webApp: { pt: "Aplicação Web", en: "Web Application" },
  portal: { pt: "Portal", en: "Portal" },
  ecommerce: { pt: "E-commerce", en: "E-commerce" },
  designSystem: { pt: "Design System", en: "Design System" },
  emailDevelopment: { pt: "E-mail Development", en: "Email Development" },
} as const satisfies Record<string, LocalizedLabel>;

export type ProjectCategory = keyof typeof PROJECT_CATEGORIES;

export const PROJECT_TAGS = {
  cms: { pt: "CMS", en: "CMS" },
  headlessCms: { pt: "Headless CMS", en: "Headless CMS" },
  institutional: { pt: "Institucional", en: "Institutional" },
  blog: { pt: "Blog", en: "Blog" },
  onboarding: { pt: "Onboarding", en: "Onboarding" },
  ssr: { pt: "SSR", en: "SSR" },
  ssg: { pt: "SSG", en: "SSG" },
  isr: { pt: "ISR", en: "ISR" },
  seo: { pt: "SEO", en: "SEO" },
  performance: { pt: "Performance", en: "Performance" },
  accessibility: { pt: "Acessibilidade", en: "Accessibility" },
  fullStack: { pt: "Full-Stack", en: "Full-Stack" },
  openSource: { pt: "Open Source", en: "Open Source" },
  personal: { pt: "Pessoal", en: "Personal" },
  volunteer: { pt: "Voluntário", en: "Volunteer" },
  react: { pt: "React", en: "React" },
  nextjs: { pt: "Next.js", en: "Next.js" },
  vue: { pt: "Vue.js", en: "Vue.js" },
  nuxt: { pt: "Nuxt.js", en: "Nuxt.js" },
  typescript: { pt: "TypeScript", en: "TypeScript" },
  tailwind: { pt: "Tailwind CSS", en: "Tailwind CSS" },
  strapi: { pt: "Strapi", en: "Strapi" },
  wordpress: { pt: "WordPress", en: "WordPress" },
} as const satisfies Record<string, LocalizedLabel>;

export type ProjectTag = keyof typeof PROJECT_TAGS;

/** Tags offered as filters on the projects page, in display order. */
export const FILTERABLE_TAGS = [
  "cms",
  "headlessCms",
  "openSource",
  "personal",
  "volunteer",
] as const satisfies readonly ProjectTag[];
