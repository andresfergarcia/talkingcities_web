"use client";

import { createContext, useContext, ReactNode } from 'react';
import type { Locale } from './i18n';

type Messages = Record<string, Record<string, string> | string>;

interface I18nContextValue {
  locale: string;
  messages: Messages;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

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

export function I18nProvider({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: string;
  messages: Messages;
}) {
  const t = (key: string) => getNestedValue(messages, key);
  
  return (
    <I18nContext.Provider value={{ locale, messages, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslations(namespace?: string) {
  const context = useContext(I18nContext);
  
  if (!context) {
    throw new Error('useTranslations must be used within an I18nProvider');
  }
  
  return (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return context.t(fullKey);
  };
}

export function useLocale() {
  const context = useContext(I18nContext);
  
  if (!context) {
    throw new Error('useLocale must be used within an I18nProvider');
  }
  
  return context.locale;
}
