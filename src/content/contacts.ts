export interface Contact {
  id: string;
  label: string;
  link: {
    display: string;
    href: string;
  };
}

export const contacts: Contact[] = [
  {
    id: "email",
    label: "E-mail",
    link: {
      display: "victor.nascimento.ns@gmail.com",
      href: "mailto:victor.nascimento.ns@gmail.com",
    },
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    link: {
      display: "linkedin.com/in/victor-nascimento-ns",
      href: "https://www.linkedin.com/in/victor-nascimento-ns/",
    },
  },
  {
    id: "github",
    label: "GitHub",
    link: {
      display: "github.com/victornns",
      href: "https://github.com/victornns/",
    },
  },
];
