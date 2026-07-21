import { aboutContent, DEV_NAME } from "@/content/about";
import { TOKENS } from "@/lib/constants";

import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";

const APP_DOMAIN = "https://www.victornns.com/";

export function getMetadata(locale: Locale): Metadata {
  const about = aboutContent[locale];

  return {
    title: DEV_NAME,
    description: about.description.join(TOKENS.separator.bullet),
    metadataBase: new URL(APP_DOMAIN),
  };
}
