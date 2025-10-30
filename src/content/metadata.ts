import { about, DEV_NAME } from "@/content/about";
import { TOKENS } from "@/lib/constants";

import type { Metadata } from "next";

const APP_DOMAIN = "https://www.victornns.com/";

export const metadata: Metadata = {
  title: DEV_NAME,
  description: about.description.join(TOKENS.separator.bullet),
  metadataBase: new URL(APP_DOMAIN),
};
