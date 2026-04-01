import { getHomepageContent, getCities, getTours, getTestimonials, getStories } from '@/lib/content';
import { loadMessages, createTranslator } from '@/lib/i18n';
import Hero from '@/components/sections/hero';
import ValueProposition from '@/components/sections/value-proposition';
import HowItWorks from '@/components/sections/how-it-works';
import Commitment from '@/components/sections/commitment';
import Testimonials from '@/components/sections/testimonials';
import CityCard from '@/components/ui/city-card';
import TourCard from '@/components/ui/tour-card';
import { Link } from '@/lib/i18n-link';
import { ArrowRight, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await loadMessages(locale);
  const t = createTranslator(messages);
  
  const content = getHomepageContent();
  const cities = getCities();
  const tours = getTours();
  const testimonials = getTestimonials();
  const stories = getStories();

  const latestStories = stories?.slice?.(0, 3) ?? [];

  return (
    <>
      <Hero
        title={t('hero.title')}
        titleHighlight={t('hero.titleHighlight')}
        subtitle={t('hero.subtitle')}
        backgroundImage={content?.hero?.backgroundImage ?? ''}
        primaryCta={{ text: t('hero.exploreTours'), href: '/tours' }}
        secondaryCta={{ text: t('hero.freeStories'), href: '/stories' }}
        locale={locale}
      />

      <ValueProposition locale={locale} />

      <section className="py-20 bg-bg">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-3">
              {t('tours.availableNow')}
            </h2>
            <p className="text-accent font-semibold text-xl mb-2">{t('tours.comingSoon')}</p>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              {t('tours.pageSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours?.slice?.(0, 6)?.map?.((tour, i) => (
              <TourCard key={tour?.slug ?? i} tour={tour} index={i} locale={locale} />
            )) ?? []}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              {t('common.viewAll')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks locale={locale} />

      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-3">
              {t('cities.title')}
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              {t('cities.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {cities?.map?.((city, i) => (
              <CityCard key={city?.slug ?? i} city={city} index={i} locale={locale} />
            )) ?? []}
          </div>
        </div>
      </section>

      {(latestStories?.length ?? 0) > 0 && (
        <section className="py-20 bg-bg">
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-3">
                {t('stories.pageTitle')}
              </h2>
              <p className="text-text-light text-lg max-w-2xl mx-auto">
                {t('stories.pageSubtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestStories.map((story, i) => (
                <Link key={story?.slug ?? i} href={`/stories/${story?.slug ?? ''}`} className="block group">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative aspect-[16/9] bg-gray-200">
                      <Image
                        src={story?.image ?? '/images/architecture/krakow_main_square.jpg'}
                        alt={story?.title ?? 'Story'}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                          {story?.type ?? ''}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                          {story?.city ?? ''}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {story?.title ?? ''}
                      </h3>
                      <p className="text-text-light text-sm line-clamp-2 mb-3">
                        {story?.introduction ?? ''}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        {t('stories.readFullStory')} <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <BookOpen className="w-4 h-4" /> {t('common.viewAll')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <Testimonials testimonials={testimonials ?? []} locale={locale} />

      <Commitment locale={locale} />

      <section className="py-20 bg-bg-alt">
        <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-text-light text-lg max-w-xl mx-auto mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg text-lg transition-all shadow-lg hover:shadow-xl"
            >
              {t('nav.buyTour')}
            </Link>
            <Link
              href="/stories"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg text-lg transition-all shadow-lg hover:shadow-xl"
            >
              {t('hero.freeStories')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}