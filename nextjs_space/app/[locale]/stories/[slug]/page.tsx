import { getStories, getStoryBySlug, getTourBySlug } from '@/lib/content';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import StoryDetailClient from './_components/story-detail-client';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

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

export default function StoryDetailPage({ params }: { params: { slug: string } }) {
  const story = getStoryBySlug(params?.slug ?? '');
  if (!story) return notFound();

  const relatedTour = story?.relatedTourSlug ? getTourBySlug(story.relatedTourSlug) : undefined;

  return (
    <div className="pt-20">
      <div className="max-w-content mx-auto px-4 sm:px-6 mt-4">
        <Breadcrumbs
          items={[
            { label: 'Stories', href: '/stories' },
            { label: story?.city ?? '', href: '/stories' },
            { label: story?.title ?? '' },
          ]}
        />
      </div>
      <StoryDetailClient
        story={story}
        relatedTour={relatedTour ?? null}
      />
    </div>
  );
}
