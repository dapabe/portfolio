import { LangAbbr } from "../interfaces/IConfig";

export const LangsSupported: LangAbbr[] = ["es", "en"]

type SupportedLangs = {
  langId: string,
  lang: {
    [K in LangAbbr]: string
  },
};


export const supportedLangs: SupportedLangs[] = [
  {
    langId: "spanish",
    lang: {
      es: "Español",
      en: "Spanish"
    }
  },
  {
    langId: "english",
    lang: {
      es: "Inglés",
      en: "English"
    }
  },
]