import { aboutContent, PROFILE_NAME } from "@/content/about";
import { TOKENS } from "@/lib/constants";

import type { Locale } from "@/i18n/config";
import type { Metadata } from "next";

const APP_DOMAIN = "https://www.victornns.com/";

export function getMetadata(locale: Locale): Metadata {
  const about = aboutContent[locale];

  return {
    title: PROFILE_NAME.full,
    description: about.highlights.join(TOKENS.separator.bullet),
    metadataBase: new URL(APP_DOMAIN),
  };
}
