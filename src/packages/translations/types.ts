export type Language = 'en' | 'ru' | 'uk';

export type TranslationType<T extends object> = { [lang in Language]?: T };
