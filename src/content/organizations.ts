export type OrganizationType = {
  id: string;
  name: {
    full: string;
    display: string;
  };
  link?: string;
};

export const organizations = [
  {
    id: "one-bra-agency",
    name: {
      full: "Bespoke One.bra (Leo Burnett)",
      display: "Bespoke One.bra",
    },
    link: "https://onebra.ag/",
  },
  {
    id: "aza8-agency",
    name: {
      full: "Aza8 Agência Criativa 360",
      display: "Aza8",
    },
    link: "https://www.aza8.com.br/",
  },
  {
    id: "one-digital-agency",
    name: {
      full: "Agência One Digital",
      display: "One Digital",
    },
    link: "https://www.one.com.br/",
  },
  {
    id: "cave-digital-agency",
    name: {
      full: "Agência Cave Digital",
      display: "Cave Digital",
    },
    link: "https://www.cavedigital.com",
  },
  {
    id: "profit-e-agency",
    name: {
      full: "Agência Profit-e E-commerce Solutions",
      display: "Profit-e",
    },
    link: "https://www.profite.com.br/",
  },
  {
    id: "l4u-agency",
    name: {
      full: "Agência L4U - Loading For You",
      display: "L4U",
    },
    link: "https://www.l4u.com.br/",
  },
] as const satisfies readonly OrganizationType[];

export type Organization = (typeof organizations)[number];
export type OrganizationId = Organization["id"];

export const organizationsById = Object.fromEntries(organizations.map((org) => [org.id, org])) as Record<OrganizationId, Organization>;
