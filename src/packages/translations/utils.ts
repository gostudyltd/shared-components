import { TranslationType } from "./types";

export const getTranslationByLang = <
  T extends object,
  K extends TranslationType<T>
>(
  translations: K,
  language: string,
  defaultLanguage: keyof K
) => {
  const lang = language as keyof K;
  return translations[lang]
    ? translations[lang]
    : translations[defaultLanguage];
};
