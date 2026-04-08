"use client";

import Image from "next/image";
import { Link } from "@/lib/i18n-link";
import { motion } from "framer-motion";
import { Headphones, ShoppingCart, ArrowRight } from "lucide-react";
import AudioPlayer from "@/components/ui/audio-player";
import type { Story, Tour } from "@/lib/types";
import { useTranslations } from "@/lib/i18n-context";

interface StoryDetailClientProps {
  story: Story;
  relatedTour: Tour | null;
  locale: string;
}

export default function StoryDetailClient({ story, relatedTour, locale }: StoryDetailClientProps) {
  const safeStory = story ?? ({} as Story);
  const tStories = useTranslations("stories");
  const tCommon = useTranslations("common");
  
  const hasAudio = Object.values(safeStory?.audioFiles ?? {}).some((url) => !!url);

  const l = (obj: any, key: string) => {
    if (!obj) return '';
    return obj[`${key}_${locale}`] || obj[key] || '';
  };

  // Helper for sections which might be localized
  const getSections = (): any[] => {
    const sections = (safeStory as any)[`sections_${locale}`] || safeStory.sections || [];
    return Array.isArray(sections) ? sections : [];
  };

  return (
    <article>
      {/* Hero */}
      <section className="relative">
        <div className="relative aspect-[21/9] max-h-[400px] bg-gray-200">
          <Image
            src={safeStory?.image ?? '/images/architecture/krakow_main_square.jpg'}
            alt={l(safeStory, 'title')}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-content mx-auto px-4 sm:px-6 pb-8">
              <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                {safeStory?.type ?? ''} • {l(safeStory, 'city')}
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
                {l(safeStory, 'title')}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Audio Player */}
        {hasAudio && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <AudioPlayer audioFiles={safeStory?.audioFiles ?? {}} title={tStories('listenIn') || "Listen to this story"} />
          </motion.div>
        )}

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <p className="text-lg text-text leading-relaxed font-heading italic text-text-light">
            {l(safeStory, 'introduction')}
          </p>
        </motion.div>

        {/* Sections */}
        {getSections().map((section: any, i: number) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            {section?.image && (
              <div className="relative aspect-[16/9] bg-gray-200 rounded-xl overflow-hidden mb-6">
                <Image
                  src={section.image}
                  alt={l(section, 'title') || 'Section image'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            )}
            {section?.video && (
              <div className="mb-6 overflow-hidden rounded-xl border border-border bg-black">
                <div className="relative aspect-[16/9] w-full">
                  <iframe
                    src={section.video}
                    title={l(section, 'title') || 'Story video'}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
            <h2 className="font-heading text-2xl font-bold text-text mb-4">
              {l(section, 'title')}
            </h2>
            <p className="text-text-light leading-relaxed text-base">
              {l(section, 'content')}
            </p>
          </motion.section>
        ))}

        {/* Conclusion */}
        {l(safeStory, 'conclusion') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-6 bg-bg-alt rounded-xl border-l-4 border-primary"
          >
            <p className="text-text leading-relaxed font-heading italic">
              {l(safeStory, 'conclusion')}
            </p>
          </motion.div>
        )}

        {/* Related Tour CTA */}
        {relatedTour && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-dark text-white rounded-2xl p-8 text-center"
          >
            <Headphones className="w-10 h-10 text-gold mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold mb-2">
              {tStories('relatedTour') || "Want to Walk Through These Places?"}
            </h3>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              {tStories('relatedTourDesc') || `Experience this story with our GPS-guided audio tour in ${l(relatedTour, 'city')}. Stories play automatically as you walk.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={`/tours/${relatedTour?.slug ?? ''}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all"
              >
                <ShoppingCart className="w-4 h-4" />
                {tCommon('buyTour') || 'Buy Tour'} — {relatedTour?.currency ?? '€'}{relatedTour?.price?.toFixed?.(2) ?? '0.00'}
              </Link>
              <Link
                href="/tours"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-lg transition-all border border-white/30"
              >
                {tCommon('exploreTours')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </article>
  );
}
