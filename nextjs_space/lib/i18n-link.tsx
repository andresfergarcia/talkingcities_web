"use client";

import NextLink from 'next/link';
import { useLocale } from './i18n-context';
import { ComponentProps } from 'react';

type LinkProps = Omit<ComponentProps<typeof NextLink>, 'href'> & {
  href: string;
  locale?: string;
};

export function Link({ href, locale: localeProp, ...props }: LinkProps) {
  const currentLocale = useLocale();
  const locale = localeProp || currentLocale;
  
  // Prepend locale to href if it doesn't already have one
  let localizedHref = href;
  if (!href.startsWith('http') && !href.startsWith('#') && !href.startsWith('/api')) {
    // Remove leading slash for processing
    const cleanHref = href.startsWith('/') ? href : `/${href}`;
    // Check if href already has a locale prefix
    const hasLocalePrefix = /^\/(en|es|pl|de)(\/|$)/.test(cleanHref);
    if (!hasLocalePrefix) {
      localizedHref = `/${locale}${cleanHref}`;
    }
  }
  
  return <NextLink href={localizedHref} {...props} />;
}

export function useRouter() {
  const locale = useLocale();
  
  const push = (href: string, options?: { locale?: string }) => {
    const targetLocale = options?.locale || locale;
    let localizedHref = href;
    if (!href.startsWith('http') && !href.startsWith('#')) {
      const cleanHref = href.startsWith('/') ? href : `/${href}`;
      const hasLocalePrefix = /^\/(en|es|pl|de)(\/|$)/.test(cleanHref);
      if (!hasLocalePrefix) {
        localizedHref = `/${targetLocale}${cleanHref}`;
      }
    }
    window.location.href = localizedHref;
  };
  
  const replace = (href: string, options?: { locale?: string }) => {
    const targetLocale = options?.locale || locale;
    let localizedHref = href;
    if (!href.startsWith('http') && !href.startsWith('#')) {
      const cleanHref = href.startsWith('/') ? href : `/${href}`;
      const hasLocalePrefix = /^\/(en|es|pl|de)(\/|$)/.test(cleanHref);
      if (!hasLocalePrefix) {
        localizedHref = `/${targetLocale}${cleanHref}`;
      }
    }
    window.location.replace(localizedHref);
  };
  
  return { push, replace };
}

export function usePathname() {
  if (typeof window === 'undefined') return '/';
  const path = window.location.pathname;
  // Remove locale prefix from path
  return path.replace(/^\/(en|es|pl|de)/, '') || '/';
}
