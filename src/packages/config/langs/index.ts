import en from "./en.json";
import ru from "./ru.json";
import uk from "./uk.json";
import vi from "./vi.json";

export type LangKey = "en" | "ru" | "uk" | "vi";

export type Translations = {
  [key: string]: string;
};

const langs: Record<LangKey, Translations> = {
  en: en,
  ru: ru,
  uk: uk,
  vi: vi,
};

export const createTFunc = (lang: LangKey, externalLocales?: Translations) => {
  return (key: string) => {
    if (externalLocales) {
      return externalLocales[key] ?? langs[lang][key] ?? langs["en"][key] ?? "";
    }

    return langs[lang][key] ?? langs["en"][key] ?? "";
  };
};
