import { getTours, getTourBySlug, getStoryBySlug, getTestimonials } from '@/lib/content';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import TourDetailClient from './_components/tour-detail-client';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { loadMessages } from '@/lib/i18n';

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

export default async function TourDetailPage({ params }: { params: { locale: string; slug: string } }) {
  const tour = getTourBySlug(params?.slug ?? '');
  if (!tour) return notFound();

  // 1. Cargamos los diccionarios y extraemos los tres bloques que necesitamos
  const messages = await loadMessages(params.locale);
  const journalistNoteText = (messages.journalistNote || {}) as Record<string, string>;
  const toursText = (messages.tours || {}) as Record<string, string>;
  const navText = (messages.nav || {}) as Record<string, string>;

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
            // 2. Dinamizamos la palabra "Tours" en las migas de pan
            { label: navText.tours || 'Tours', href: `/${params.locale}/tours` },
            { label: tour?.title ?? '' },
          ]}
        />
      </div>
      <TourDetailClient
        tour={tour}
        storySlug={story?.slug ?? ''}
        testimonials={tourTestimonials}
        audioFiles={story?.audioFiles ?? { english: '', polish: '', spanish: '', german: '' }}
        journalistNoteText={journalistNoteText}
        toursText={toursText} // 3. Enviamos el nuevo paquete al componente visual
      />
    </div>
  );
}