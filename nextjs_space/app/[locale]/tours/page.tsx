import { getTours, getSiteSettings } from '@/lib/content';
import TourCard from '@/components/ui/tour-card';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { Headphones, Smartphone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Audio Tours',
  description: 'GPS-guided audio tours of Polish cities. Walk through history with immersive storytelling.',
};

export default async function ToursPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tours = getTours();
  const settings = getSiteSettings();
  const allTours = tours ?? [];

  // Group tours by city
  const toursByCity: Record<string, typeof allTours> = {};
  allTours.forEach((tour) => {
    const city = tour?.city ?? 'Other';
    if (!toursByCity[city]) toursByCity[city] = [];
    toursByCity[city].push(tour);
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Tours' }]} />
          <div className="flex items-center gap-3 mb-4">
            <Headphones className="w-8 h-8 text-gold" />
            <h1 className="font-heading text-3xl sm:text-4xl font-bold">Self-Guided Audio Tours</h1>
          </div>
          <p className="text-white/70 text-lg max-w-2xl">
            Walk through history with GPS-guided audio tours powered by VoiceMap. Stories play automatically as you move through the city.
          </p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-8 bg-accent/10 border-b border-accent/20">
        <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
          <p className="text-accent font-bold text-2xl mb-1">Coming Soon</p>
          <p className="text-text-light">All tours are currently in development. Available in Polish and English.</p>
        </div>
      </section>

      {/* Tours by City */}
      {Object.entries(toursByCity).map(([city, cityTours], idx) => (
        <section key={city} className={`py-16 ${idx % 2 === 0 ? 'bg-bg' : 'bg-white'}`}>
          <div className="max-w-content mx-auto px-4 sm:px-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text mb-8">
              {city}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cityTours.map((tour, i) => (
                <TourCard key={tour?.slug ?? i} tour={tour} index={i} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* How to Use */}
      <section className="py-16 bg-bg-alt">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text mb-8 text-center">
            How to Start Your Tour
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Download VoiceMap', desc: 'Get the free app from Apple Store or Google Play.' },
              { step: '2', title: 'Find Our Tours', desc: 'Search for "Talking Cities" in the app.' },
              { step: '3', title: 'Purchase & Download', desc: 'Buy the tour and download for offline use.' },
              { step: '4', title: 'Walk & Listen', desc: 'Go to the start point. Audio plays automatically via GPS.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-text-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download VoiceMap App */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
          <Smartphone className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
            Download the VoiceMap App
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            Our tours run on VoiceMap, the leading GPS-guided audio tour platform. Download the free app to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={settings?.appLinks?.appleStore ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-primary-dark rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href={settings?.appLinks?.googlePlay ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-primary-dark rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M3.18 23.49c-.34-.4-.54-.96-.54-1.61V2.12C2.64.79 3.64.12 4.64.62l10.2 5.9L18 8.28l-7.3 4.22L3.18 23.49zM11.7 11.5L4.26 23.14l14.06-8.13L11.7 11.5zM4.26.86l7.44 11.64 6.62-3.83L4.26.86zM19.34 9.28l-1.6.92 1.6.92 2.06 1.19c.8.46.8 1.2 0 1.67L19.34 15l1.6-.92-1.6-.92 2.06-1.19L19.34 9.28z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
