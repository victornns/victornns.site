import { commonContent } from "@/content/common";
import { aboutContent } from "@/content/about";
import { contactsContent } from "@/content/contacts";
import { experiencesContent } from "@/content/experiences";
import { educationContent } from "@/content/education";
import { projectsContent } from "@/content/projects";
import { techStackContent } from "@/content/techStack";

import type { Locale } from "@/i18n/config";

export function getContent(locale: Locale) {
  return {
    common: commonContent[locale],
    about: aboutContent[locale],
    contacts: contactsContent[locale],
    experiences: experiencesContent[locale],
    education: educationContent[locale],
    projects: projectsContent[locale],
    techStack: techStackContent[locale],
  };
}
