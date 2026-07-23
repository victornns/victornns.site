import { notFound } from "next/navigation";

import { locales, defaultLocale, isValidLocale, localeToHtmlLang } from "@/i18n/config";
import { getMetadata } from "@/content/metadata";
import { TOKENS } from "@/lib/constants";

import "../globals.scss";

import type { Metadata } from "next";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  return getMetadata(isValidLocale(locale) ? locale : defaultLocale);
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const mainClasses = "flex flex-col gap-16 pt-28 pb-16 px-6 md:px-12";

  return (
    <html
      lang={localeToHtmlLang[locale]}
      className="antialiased"
    >
      <body style={{ maxWidth: TOKENS.layout.maxWidth }}>
        <main className={mainClasses}>{children}</main>
      </body>
    </html>
  );
}
