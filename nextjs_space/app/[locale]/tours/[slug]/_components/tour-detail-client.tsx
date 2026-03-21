"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock, MapPin, Headphones, Globe, Star, CheckCircle,
  ExternalLink, BookOpen, ArrowRight, ShoppingCart
} from "lucide-react";
import AudioPlayer from "@/components/ui/audio-player";
import type { Tour, Testimonial } from "@/lib/types";

interface TourDetailClientProps {
  tour: Tour;
  storySlug: string;
  testimonials: Testimonial[];
  audioFiles: {
    english: string;
    polish: string;
    spanish: string;
    german: string;
  };
}

export default function TourDetailClient({ tour, storySlug, testimonials, audioFiles }: TourDetailClientProps) {
  const safeTour = tour ?? ({} as Tour);
  const safeTestimonials = testimonials ?? [];
  const isAvailable = safeTour?.status === 'available';
  const hasAudio = Object.values(audioFiles ?? {}).some((url) => !!url);

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="relative aspect-[21/9] max-h-[400px] bg-gray-200">
          <Image
            src={safeTour?.image ?? '/images/architecture/krakow_main_square.jpg'}
            alt={safeTour?.title ?? 'Tour'}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-content mx-auto px-4 sm:px-6 pb-8">
              <span className="px-3 py-1 bg-gold/90 text-primary-dark text-xs font-semibold rounded-full">
                {safeTour?.type ?? ''}
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
                {safeTour?.title ?? ''}
              </h1>
              <p className="text-white/80 text-lg mt-2 font-heading italic">
                {safeTour?.subtitle ?? ''}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-content mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-md p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-text mb-4">About This Tour</h2>
              <p className="text-text-light leading-relaxed text-lg">
                {safeTour?.description ?? ''}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-text mb-4">Tour Highlights</h2>
              <ul className="space-y-3">
                {safeTour?.highlights?.map?.((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-text-light">{h ?? ''}</span>
                  </li>
                )) ?? []}
              </ul>
            </motion.div>

            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-text mb-4">What&apos;s Included</h2>
              <ul className="space-y-3">
                {safeTour?.includes?.map?.((inc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-light">{inc ?? ''}</span>
                  </li>
                )) ?? []}
              </ul>
            </motion.div>

            {/* Audio Preview */}
            {hasAudio && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-heading text-2xl font-bold text-text mb-4">Listen to a Preview</h2>
                <AudioPlayer audioFiles={audioFiles} title="Audio Preview - Full Article" />
              </motion.div>
            )}

            {/* Related Story */}
            {storySlug && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-bg-alt rounded-xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-text">Free Story Available</h3>
                </div>
                <p className="text-text-light mb-4">Read the complete oral history article for this city — completely free.</p>
                <Link
                  href={`/stories/${storySlug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
                >
                  Read the Story <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )}

            {/* Testimonials */}
            {(safeTestimonials?.length ?? 0) > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="font-heading text-2xl font-bold text-text mb-4">Traveler Reviews</h2>
                <div className="space-y-4">
                  {safeTestimonials?.slice?.(0, 3)?.map?.((t, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                      <div className="flex gap-0.5 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className={`w-4 h-4 ${s <= (t?.rating ?? 0) ? 'fill-gold text-gold' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <p className="text-text-light italic mb-2">&ldquo;{t?.quote ?? ''}&rdquo;</p>
                      <p className="text-sm font-medium text-text">{t?.author ?? ''} — {t?.location ?? ''}</p>
                    </div>
                  )) ?? []}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Purchase Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                {isAvailable ? (
                  <>
                    <div className="text-center mb-5">
                      <span className="text-4xl font-bold text-primary font-heading">
                        {safeTour?.currency ?? '€'}{safeTour?.price?.toFixed?.(2) ?? '0.00'}
                      </span>
                      <p className="text-text-light text-sm mt-1">per person</p>
                    </div>
                    <button
                      onClick={() => window.open(safeTour?.voicemapUrl ?? '', '_blank', 'noopener,noreferrer')}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-light text-white font-bold rounded-lg text-lg transition-all shadow-md hover:shadow-lg"
                    >
                      <ShoppingCart className="w-5 h-5" /> Buy Tour
                    </button>
                    <p className="text-center text-xs text-text-light mt-3">Opens in VoiceMap</p>
                  </>
                ) : (
                  <div className="text-center">
                    <span className="text-2xl font-bold text-text-light">Coming Soon</span>
                    <p className="text-text-light text-sm mt-2">This tour is currently in development.</p>
                  </div>
                )}

                <hr className="my-5 border-gray-100" />

                {/* Quick Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-text-light">Duration:</span>
                    <span className="font-medium text-text ml-auto">{safeTour?.duration ?? ''}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-text-light">Distance:</span>
                    <span className="font-medium text-text ml-auto">{safeTour?.distance ?? ''}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Headphones className="w-4 h-4 text-primary" />
                    <span className="text-text-light">Stops:</span>
                    <span className="font-medium text-text ml-auto">{safeTour?.stops ?? 0}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-text-light">Languages:</span>
                    <span className="font-medium text-text ml-auto">
                      {safeTour?.languages?.join?.(", ") ?? ''}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* VoiceMap Link */}
              {isAvailable && safeTour?.voicemapUrl && (
                <button
                  onClick={() => window.open(safeTour?.voicemapUrl ?? '', '_blank', 'noopener,noreferrer')}
                  className="flex items-center gap-3 p-4 bg-bg-alt rounded-xl hover:bg-bg-alt/80 transition-colors w-full text-left"
                >
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-text text-sm">View on VoiceMap</p>
                    <p className="text-text-light text-xs">Our tours are powered by VoiceMap GPS technology</p>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
