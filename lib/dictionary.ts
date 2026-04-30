import { pl } from "@/dictionaries/pl";
import { en } from "@/dictionaries/en";

export type Locale = "pl" | "en";

export const locales: Locale[] = ["pl", "en"];
export const defaultLocale: Locale = "pl";

export function getDictionary(locale: Locale) {
  return locale === "en" ? en : pl;
}

export type Dictionary = ReturnType<typeof getDictionary>;
