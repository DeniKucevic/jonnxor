import "server-only";

const dictionaries = {
  is: () => import("./dictionaries/is.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;
export const getDictionary = async (locale: Locale) => dictionaries[locale]();
