import { LANG } from "../../types/lang";
import flag_en from "../../images/icon/EN_flag.svg";
import flag_de from "../../images/icon/DE_flag.svg";

export const routes = {
  aboutUs: "About us",
  services: "Services",
  ourCompany: "About the company",
  portfolio: "Portfolio",
  contacts: "Contacts",
};

export const headerContent = {
  [LANG.EN]: {
    flag: flag_en,
    routes: [
      {
        name: "About us",
        path: `${routes.aboutUs}/en`,
      },
      {
        name: "Services",
        path: `${routes.services}/en`,
      },
      {
        name: "About the company",
        path: `${routes.ourCompany}/en`,
      },
      {
        name: "Portfolio",
        path: `${routes.portfolio}/en`,
      },
      {
        name: "Contacts",
        path: `${routes.contacts}/en`,
      },
    ],
  },
  [LANG.DE]: {
    flag: flag_de,
  routes: [
    {
      name: "Über uns",
      path: `${routes.aboutUs}/de`,
    },
    {
      name: "Dienstleistungen",
      path: `${routes.services}/de`,
    },
    {
      name: "Über das Unternehmen",
      path: `${routes.ourCompany}/de`,
    },
    {
      name: "Portfolio",
      path: `${routes.portfolio}/de`,
    },
    {
      name: "Kontakte",
      path: `${routes.contacts}/de`,
    },
  ],
},
};
