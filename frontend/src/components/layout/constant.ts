import { LANG } from "../../types/lang";
import flag_en from "../../images/icon/EN_flag.svg";
import flag_de from "../../images/icon/DE_flag.svg";

export const routes = {
  ABOUT_US: "about-us",
  SERVICES: "services",
  OUR_COMPANY: "our-company",
  PORTFOLIO: "portfolio",
  CONTACTS: "contacts",

};

export const headerContent = {
  [LANG.EN]: {
    flag: flag_en,
    button: 'Request a Consultation Now',
    routes: [
      {
        name: "About us",
        path: routes.ABOUT_US,
      },
      {
        name: "Services",
        path: routes.SERVICES,
      },
      {
        name: "About the company",
        path: routes.OUR_COMPANY,
      },
      {
        name: "Portfolio",
        path: routes.PORTFOLIO,
      },
      {
        name: "Contacts",
        path: routes.CONTACTS,
      },
    ],
  },
  [LANG.DE]: {
    flag: flag_de,
    button: 'Jetzt Beratung anfragen',
  routes: [
    {
      name: "Über uns",
      path: routes.ABOUT_US,
    },
    {
      name: "Dienstleistungen",
      path:routes.SERVICES,
    },
    {
      name: "Über das Unternehmen",
      path: routes.OUR_COMPANY,
    },
    {
      name: "Portfolio",
      path: routes.PORTFOLIO,
    },
    {
      name: "Kontakte",
      path: routes.CONTACTS,
    },
  ],
},
};
