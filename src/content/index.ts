import { commonContent } from "@/content/common";
import { aboutContent } from "@/content/about";
import { contactsContent } from "@/content/contacts";
import { experiencesContent } from "@/content/experiences";
import { projectsContent } from "@/content/projects";

import type { Locale } from "@/i18n/config";

export function getContent(locale: Locale) {
  return {
    common: commonContent[locale],
    about: aboutContent[locale],
    contacts: contactsContent[locale],
    experiences: experiencesContent[locale],
    projects: projectsContent[locale],
  };
}
