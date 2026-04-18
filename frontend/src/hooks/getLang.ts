import { LANG, LANGS, TLang } from "../types/lang";

export const getLang = () => {
  const lang = localStorage.getItem("lang") as TLang;
  if (LANGS.includes(lang)) {
    return lang;
  } else {
    return LANG.EN;
  }
};
