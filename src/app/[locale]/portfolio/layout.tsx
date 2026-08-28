import type { ReactNode } from "react";

import type { Locale } from "@/i18n/config";
import { getNavbarItems, Navbar } from "@/components/navbar";
import { UIPageMain } from "@/components/ui/UIPageMain";

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
      <Navbar locale={locale} items={getNavbarItems(locale)} />
      <UIPageMain>{children}</UIPageMain>
    </>
  );
}
