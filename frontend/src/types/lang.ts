
export const LANG = {
    EN:'en',
    FR:'fr'
} as const;

export type TLang = (typeof LANG)[keyof typeof LANG];

export const LANGS = Object.values(LANG)

export const languagesFullname = {
    [LANG.EN]: 'English',
    [LANG.FR]: 'French',
} as const;

export type TLangFullnameVal = (typeof languagesFullname)[keyof typeof languagesFullname]