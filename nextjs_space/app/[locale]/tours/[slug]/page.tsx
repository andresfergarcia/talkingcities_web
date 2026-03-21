import { getTours, getTourBySlug, getStoryBySlug, getTestimonials } from '@/lib/content';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import TourDetailClient from './_components/tour-detail-client';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const tours = getTours();
  return (tours ?? [])?.map?.((t) => ({ slug: t?.slug ?? '' })) ?? [];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tour = getTourBySlug(params?.slug ?? '');
  return {
    title: tour?.title ?? 'Tour',
    description: tour?.description ?? '',
  };
}

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const tour = getTourBySlug(params?.slug ?? '');
  if (!tour) return notFound();

  const story = tour?.articleSlug ? getStoryBySlug(tour.articleSlug) : undefined;
  const testimonials = getTestimonials();
  const tourTestimonials = testimonials?.filter?.((t) =>
    t?.tour?.toLowerCase?.()?.includes?.(tour?.city?.toLowerCase?.() ?? '') ?? false
  ) ?? [];

  return (
    <div className="pt-20">
      <div className="max-w-content mx-auto px-4 sm:px-6 mt-4">
        <Breadcrumbs
          items={[
            { label: 'Tours', href: '/tours' },
            { label: tour?.title ?? '' },
          ]}
        />
      </div>
      <TourDetailClient
        tour={tour}
        storySlug={story?.slug ?? ''}
        testimonials={tourTestimonials}
        audioFiles={story?.audioFiles ?? { english: '', polish: '', spanish: '', german: '' }}
      />
    </div>
  );
}
