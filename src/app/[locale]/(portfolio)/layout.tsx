import { navbarLabels } from "@/content/navbar";
import { Navbar } from "@/features/portfolio/navbar/Navbar";
import { getNavbarItems } from "@/features/portfolio/navbar/server/navbarItems";
import { UIPageMain } from "@/features/portfolio/ui/UIPageMain";
import type { Locale } from "@/i18n/config";

import type { ReactNode } from "react";

type PortfolioLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function PortfolioLayout({
  children,
  params,
}: PortfolioLayoutProps) {
  const { locale } = await params;

  return (
    <>
      <Navbar
        locale={locale}
        items={getNavbarItems(locale)}
        labels={navbarLabels[locale]}
      />
      <UIPageMain>{children}</UIPageMain>
    </>
  );
}
