import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import {
  locales,
  defaultLocale,
  isValidLocale,
  localeToHtmlLang,
} from "@/i18n/config";
import { getMetadata } from "@/content/metadata";

import "../globals.scss";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  return getMetadata(isValidLocale(locale) ? locale : defaultLocale);
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <html lang={localeToHtmlLang[locale]} className="antialiased">
      <body>{children}</body>
    </html>
  );
}
