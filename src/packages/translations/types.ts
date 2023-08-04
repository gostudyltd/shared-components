export type Language = 'en' | 'ru' | 'uk';

export type TranslationType<T extends object> = { [lang in Language]?: T };

export type PropsWithContentLanguage<T extends object> = T & {
  language: Language;
};
