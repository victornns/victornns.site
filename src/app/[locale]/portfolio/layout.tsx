import { UIPageMain } from "@/components/ui/UIPageMain";
import { navbarLabels } from "@/content/navbar";
import { Navbar } from "@/features/navbar/Navbar";
import { getNavbarItems } from "@/features/navbar/server/navbarItems";
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
