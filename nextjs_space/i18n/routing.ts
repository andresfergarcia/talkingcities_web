import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "pl", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pl: "Polski",
  de: "Deutsch",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  pl: "🇵🇱",
  de: "🇩🇪",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
