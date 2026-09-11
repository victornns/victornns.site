import type { Locale } from "@/i18n/config";

export type NavbarLabels = {
  logo: string;
  openMenu: string;
  closeMenu: string;
  menu: string;
  navigation: string;
};

export const navbarLabels: Record<Locale, NavbarLabels> = {
  pt: {
    logo: "Portfólio",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    menu: "Menu",
    navigation: "Navegação",
  },
  en: {
    logo: "Portfolio",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    navigation: "Navigation",
  },
};
