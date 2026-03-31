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

            {/* Journalist's Note (Dinámica según el tipo de tour) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white border-l-4 border-primary rounded-r-xl shadow-sm p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Marca de agua decorativa */}
              <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
                <BookOpen className="w-32 h-32 -mt-4 -mr-4 text-primary" />
              </div>
              
              <h2 className="font-heading text-2xl font-bold text-text mb-4 flex items-center gap-2">
                ✍️ Journalist&apos;s Note
              </h2>
              <div className="space-y-4">
                <p className="text-text-light italic text-lg leading-relaxed">
                  {safeTour?.type?.includes('Voices') 
                    ? "To build this tour, we handed the microphone to those who lived behind the Iron Curtain. By walking these streets with their testimonies, you don't just listen to history; you become a patron. Your purchase directly funds the elders who share their memory with us today."
                    : "As a journalist, I've always believed that every wall has a story. This tour isn't a simple list of architectural facts; it's the result of deep archival research to bring you the raw pulse of the foundations that built this city."}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <span className="text-sm font-bold text-gray-500">A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text">Andrés</p>
                    <p className="text-xs text-text-light uppercase tracking-wider font-semibold">Founder & Journalist</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
