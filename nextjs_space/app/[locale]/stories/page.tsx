import { getStories } from '@/lib/content';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { Link } from '@/lib/i18n-link';
import Image from 'next/image';
import { BookOpen, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stories of Resilience',
  description: 'Free oral histories from Polish cities. Preserving memory, accessible to all.',
};

export default async function StoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const stories = getStories();

  // Group stories by city
  const storiesByCity: Record<string, typeof stories> = {};
  const cityOrder = ['Warsaw', 'Krakow', 'Wroclaw', 'Poznan', 'Zielona G\u00f3ra'];
  
  stories?.forEach?.((story) => {
    const city = story?.city ?? 'Other';
    if (!storiesByCity[city]) storiesByCity[city] = [];
    storiesByCity[city].push(story);
  });

  // Sort by city order
  const orderedCities = cityOrder.filter(c => storiesByCity[c]);
  // Add any remaining cities not in the predefined order
  Object.keys(storiesByCity).forEach(c => {
    if (!orderedCities.includes(c)) orderedCities.push(c);
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Stories' }]} />
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-gold" />
            <h1 className="font-heading text-3xl sm:text-4xl font-bold">Stories of Resilience</h1>
          </div>
          <p className="text-white/70 text-lg max-w-2xl">
            Free oral histories from Polish cities &mdash; preserving memory, accessible to all.
          </p>
        </div>
      </section>

      {/* Stories by City */}
      {orderedCities.map((city, idx) => {
        const cityStories = storiesByCity[city] ?? [];
        return (
          <section key={city} className={`py-16 ${idx % 2 === 0 ? 'bg-bg' : 'bg-white'}`}>
            <div className="max-w-content mx-auto px-4 sm:px-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text mb-8 border-b-2 border-primary/20 pb-3">
                {city}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cityStories.map((story, i) => (
                  <Link key={story?.slug ?? i} href={`/stories/${story?.slug ?? ''}`} className="block group">
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-100">
                      <div className="relative aspect-[16/9] bg-gray-200">
                        <Image
                          src={story?.image ?? '/images/architecture/krakow_main_square.jpg'}
                          alt={story?.title ?? 'Story'}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                            {story?.type ?? ''}
                          </span>
                        </div>
                        {/* Audio badge */}
                        {story?.audioFiles && Object.values(story.audioFiles).some(v => v) && (
                          <div className="absolute bottom-3 right-3">
                            <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full flex items-center gap-1">
                              🎧 Audio Available
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                          {story?.title ?? ''}
                        </h3>
                        <p className="text-text-light text-sm line-clamp-3 mb-4">
                          {story?.introduction ?? ''}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                          Read Full Story <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {(stories?.length ?? 0) === 0 && (
        <section className="py-16 bg-bg">
          <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
            <BookOpen className="w-12 h-12 text-text-light mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold text-text mb-2">More Stories Coming Soon</h3>
            <p className="text-text-light">We are currently working on new oral histories.</p>
          </div>
        </section>
      )}
    </div>
  );
}
