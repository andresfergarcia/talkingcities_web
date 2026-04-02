import { getAboutContent } from '@/lib/content';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import AboutClient from './_components/about-client';
import type { Metadata } from 'next';
import { loadMessages, createTranslator } from '@/lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await loadMessages(locale);
  const t = createTranslator(messages);
  
  return {
    title: t('about.pageTitle'),
    description: t('about.mission'),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await loadMessages(locale);
  const t = createTranslator(messages);
  const about = getAboutContent();
  
  return (
    <div className="pt-20">
      <div className="max-w-content mx-auto px-4 sm:px-6 mt-4">
        <Breadcrumbs items={[{ label: t('nav.about') }]} />
      </div>
      <AboutClient about={about} />
    </div>
  );
}
