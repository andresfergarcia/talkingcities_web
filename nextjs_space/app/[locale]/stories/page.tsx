import { getStories } from '@/lib/content';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { Link } from '@/lib/i18n-link';
import Image from 'next/image';
import { BookOpen, ArrowRight } from 'lucide-react';
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
    title: t('stories.pageTitle'),
    description: t('stories.pageSubtitle'),
  };
}

export default async function StoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await loadMessages(locale);
  const t = createTranslator(messages);
  const stories = getStories();

  const cityNamesDict = (messages.cityNames as Record<string, string>) || {};
  const storyTypesDict = (messages.storyTypes as Record<string, string>) || {};

  const getCityName = (city: string) => {
    if (!city) return '';
    const key = city.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cityNamesDict[key] || city;
  };

  const getStoryType = (type: string) => {
    if (!type) return '';
    const key = type.toLowerCase().replace(/[^a-z0-9]/g, '');
    return storyTypesDict[key] || type;
  };

  const l = (obj: any, key: string) => {
    if (!obj) return '';
    return obj[`${key}_${locale}`] || obj[key] || '';
  };

  // Group stories by city
  const storiesByCity: Record<string, typeof stories> = {};
  const cityOrder = ['Poland', 'Warsaw', 'Krakow', 'Wroclaw', 'Poznan', 'Zielona Góra'];
  
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
          <Breadcrumbs items={[{ label: t('nav.stories') }]} />
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-gold" />
            <h1 className="font-heading text-3xl sm:text-4xl font-bold">{t('stories.pageTitle')}</h1>
          </div>
          <p className="text-white/70 text-lg max-w-2xl">
            {t('stories.pageSubtitle')}
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
                {getCityName(city)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cityStories.map((story, i) => (
                  <Link key={story?.slug ?? i} href={`/stories/${story?.slug ?? ''}`} className="block group">
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-100">
                      <div className="relative aspect-[16/9] bg-gray-200">
                        <Image
                          src={story?.image ?? '/images/architecture/krakow_main_square.jpg'}
                          alt={l(story, 'title') || 'Story'}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                            {getStoryType(story?.type ?? '')}
                          </span>
                        </div>
                        {/* Audio badge */}
                        {story?.audioFiles && Object.values(story.audioFiles).some(v => v) && (
                          <div className="absolute bottom-3 right-3">
                            <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full flex items-center gap-1">
                              🎧 Audio
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
                          {l(story, 'title')}
                        </h3>
                        <p className="text-text-light text-sm line-clamp-3 mb-4">
                          {l(story, 'introduction')}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                          {t('stories.readFullStory')} <ArrowRight className="w-4 h-4" />
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
            <h3 className="font-heading text-xl font-bold text-text mb-2">{t('stories.noStories')}</h3>
          </div>
        </section>
      )}
    </div>
  );
}
