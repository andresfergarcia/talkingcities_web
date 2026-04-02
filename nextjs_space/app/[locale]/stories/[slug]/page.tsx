import { getStories, getStoryBySlug, getTourBySlug } from '@/lib/content';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import StoryDetailClient from './_components/story-detail-client';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { loadMessages, createTranslator } from '@/lib/i18n';

export async function generateStaticParams() {
  const stories = getStories();
  return (stories ?? [])?.map?.((s) => ({ slug: s?.slug ?? '' })) ?? [];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const story = getStoryBySlug(params?.slug ?? '');
  return {
    title: story?.title ?? 'Story',
    description: story?.introduction?.slice?.(0, 160) ?? '',
  };
}

export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  const messages = await loadMessages(locale);
  const t = createTranslator(messages);
  
  const story = getStoryBySlug(slug);
  if (!story) return notFound();

  const relatedTour = story?.relatedTourSlug ? getTourBySlug(story.relatedTourSlug) : undefined;

  const cityNamesDict = (messages.cityNames as Record<string, string>) || {};
  const getCityName = (city: string) => {
    if (!city) return '';
    const key = city.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cityNamesDict[key] || city;
  };

  const l = (obj: any, key: string) => {
    if (!obj) return '';
    return obj[`${key}_${locale}`] || obj[key] || '';
  };

  return (
    <div className="pt-20">
      <div className="max-w-content mx-auto px-4 sm:px-6 mt-4">
        <Breadcrumbs
          items={[
            { label: t('nav.stories') || 'Stories', href: '/stories' },
            { label: getCityName(story?.city || ''), href: '/stories' },
            { label: l(story, 'title') },
          ]}
        />
      </div>
      <StoryDetailClient
        story={story}
        relatedTour={relatedTour ?? null}
        locale={locale}
      />
    </div>
  );
}
