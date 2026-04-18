
export const LANG = {
    EN:'en',
    DE:'de'
} as const;

export type TLang = (typeof LANG)[keyof typeof LANG];

export const LANGS = Object.values(LANG)

export const languagesFullname = {
    [LANG.EN]: 'English',
    [LANG.DE]: 'German',
} as const;
export const languagesSmallname = {
    [LANG.EN]: 'EN',
    [LANG.DE]: 'DE',
} as const;

export type TLangFullnameVal = (typeof languagesFullname)[keyof typeof languagesFullname]