// Custom i18n system without next-intl plugin
import { cache } from 'react';

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

// Type for messages
type MessageKey = string;
type Messages = Record<string, Record<string, string> | string>;

// Cache for loaded messages
const messagesCache: Record<string, Messages> = {};

// Load messages for a locale
export async function loadMessages(locale: string): Promise<Messages> {
  if (messagesCache[locale]) {
    return messagesCache[locale];
  }
  
  try {
    const messages = (await import(`@/messages/${locale}.json`)).default;
    messagesCache[locale] = messages;
    return messages;
  } catch {
    // Fallback to English
    if (locale !== 'en') {
      const messages = (await import(`@/messages/en.json`)).default;
      messagesCache['en'] = messages;
      return messages;
    }
    return {};
  }
}

// Get a nested value from an object using dot notation
function getNestedValue(obj: Messages, path: string): string {
  const keys = path.split('.');
  let current: Messages | string = obj;
  
  for (const key of keys) {
    if (typeof current === 'object' && current !== null && key in current) {
      current = current[key] as Messages | string;
    } else {
      return path; // Return the key if not found
    }
  }
  
  return typeof current === 'string' ? current : path;
}

// Create a translator function
export function createTranslator(messages: Messages) {
  return function t(key: MessageKey): string {
    return getNestedValue(messages, key);
  };
}

// Get messages synchronously (for client components, messages must be passed as props)
export function getMessagesSync(locale: string): Messages {
  return messagesCache[locale] || {};
}

// Validate locale
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
