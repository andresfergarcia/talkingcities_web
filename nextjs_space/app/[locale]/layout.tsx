import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getSiteSettings } from '@/lib/content';
import { I18nProvider } from '@/lib/i18n-context';
import { loadMessages, locales, type Locale } from '@/lib/i18n';

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const settings = getSiteSettings();
  const baseUrl = process.env.NEXTAUTH_URL || 'https://talkingcities.eu';
  
  // Import messages for the current locale
  const messages = await loadMessages(locale);
  const metadata = messages.metadata as Record<string, string> || {};

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: metadata?.title || `${settings?.siteName ?? 'Talking Cities'} - ${settings?.siteTagline ?? ''}`,
      template: `%s | ${settings?.siteName ?? 'Talking Cities'}`,
    },
    description: metadata?.description || (settings?.siteDescription ?? ''),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'es': `${baseUrl}/es`,
        'pl': `${baseUrl}/pl`,
        'de': `${baseUrl}/de`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      title: settings?.siteName ?? 'Talking Cities',
      description: metadata?.description || (settings?.siteDescription ?? ''),
      images: ['/og-image.png'],
    },
    icons: {
      icon: '/favicon.png',
      shortcut: '/favicon.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming locale is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await loadMessages(locale);
  const settings = getSiteSettings();
  const baseUrl = process.env.NEXTAUTH_URL || 'https://talkingcities.eu';

  return (
    <html lang={locale}>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" async />
        {/* Hreflang tags for SEO */}
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="es" href={`${baseUrl}/es`} />
        <link rel="alternate" hrefLang="pl" href={`${baseUrl}/pl`} />
        <link rel="alternate" hrefLang="de" href={`${baseUrl}/de`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />
      </head>
      <body className="font-body text-text bg-bg min-h-screen">
        <I18nProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer 
            contactEmail={settings?.contactEmail ?? 'info@talkingcities.eu'}
            locale={locale}
          />
        </I18nProvider>
      </body>
    </html>
  );
}
