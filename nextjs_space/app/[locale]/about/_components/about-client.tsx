"use client";

import Image from "next/image";
import { Link } from "@/lib/i18n-link";
import { motion } from "framer-motion";
import { Heart, Globe, Crown, Users, ArrowRight, Mic } from "lucide-react";
import Counter from "@/components/ui/counter";
import type { AboutContent } from "@/lib/types";
import { useTranslations, useLocale } from "@/lib/i18n-context";

interface AboutClientProps {
  about: AboutContent;
}

export default function AboutClient({ about }: AboutClientProps) {
  const safe = about ?? ({} as AboutContent);
  const t = useTranslations("about");
  const locale = useLocale();

  const l = (obj: any, key: string) => {
    if (!obj) return '';
    return obj[`${key}_${locale}`] || obj[key] || '';
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="relative aspect-[21/9] max-h-[350px] bg-gray-200">
          <Image
            src={safe?.hero?.image ?? '/images/resistance/solidarity_gdansk.jpg'}
            alt="Solidarity movement - Polish resistance"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-content mx-auto px-4 sm:px-6 pb-8">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {l(safe?.hero, 'title')}
              </h1>
              <p className="text-white/80 text-lg mt-2">{l(safe?.hero, 'subtitle')}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-content mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <Mic className="w-8 h-8 text-primary mb-4" />
            <h2 className="font-heading text-3xl font-bold text-text mb-4">{l(safe?.mission, 'title')}</h2>
            <p className="text-text-light leading-relaxed mb-4">{l(safe?.mission, 'content')}</p>
            <p className="text-text-light leading-relaxed">{l(safe?.mission, 'content2')}</p>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 shadow-lg">
            <Image
              src="/images/resistance/ak_soldiers_parasol.jpg"
              alt="Polish resistance fighters - preserving history"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.section>

        {/* Impact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-bg-alt rounded-2xl p-8 sm:p-10"
        >
          <Users className="w-8 h-8 text-primary mb-4" />
          <h2 className="font-heading text-3xl font-bold text-text mb-2">{l(safe?.impact, 'title')}</h2>
          <p className="text-gold font-heading text-lg mb-4">{l(safe?.impact, 'subtitle')}</p>
          <p className="text-text-light leading-relaxed mb-6">{l(safe?.impact, 'content')}</p>
          <div className="bg-white rounded-xl p-6 border-l-4 border-gold">
            <p className="text-text leading-relaxed italic">{l(safe?.impact, 'callToWitness')}</p>
          </div>
        </motion.section>

        {/* Business Model */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Heart className="w-8 h-8 text-accent mb-4" />
          <h2 className="font-heading text-3xl font-bold text-text mb-2">{l(safe?.businessModel, 'title')}</h2>
          <p className="text-gold font-heading text-lg mb-2">{l(safe?.businessModel, 'subtitle')}</p>
          <p className="text-text-light text-lg mb-8 italic">{l(safe?.businessModel, 'philosophy')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <Globe className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading text-xl font-bold text-text mb-2">{l(safe?.businessModel?.freeAccess, 'title')}</h3>
              <p className="text-text-light text-sm leading-relaxed">{l(safe?.businessModel?.freeAccess, 'description')}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <Crown className="w-6 h-6 text-gold mb-3" />
              <h3 className="font-heading text-xl font-bold text-text mb-2">{l(safe?.businessModel?.premiumAccess, 'title')}</h3>
              <p className="text-text-light text-sm leading-relaxed">{l(safe?.businessModel?.premiumAccess, 'description')}</p>
            </div>
          </div>

          {/* 40% Commitment */}
          <div className="bg-primary-dark text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="text-center">
              <div className="font-heading text-5xl font-bold text-gold">
                <Counter value={40} suffix="%" />
              </div>
            </div>
            <p className="text-white/80 leading-relaxed flex-1">
              {l(safe?.businessModel, 'socialCommitment')}
            </p>
          </div>
        </motion.section>

        {/* Origin + CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-heading text-xl text-text-light italic mb-8 max-w-2xl mx-auto">
            {l(safe, 'origin')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all shadow-md"
            >
              {t('exploreTours')} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all shadow-md"
            >
              {t('contactUs')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
