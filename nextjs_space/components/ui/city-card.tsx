"use client";

import Image from "next/image";
import { Link } from "@/lib/i18n-link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "@/lib/i18n-context";
import type { City } from "@/lib/types";

interface CityCardProps {
  city: City;
  index?: number;
  locale?: string;
}

export default function CityCard({ city, index = 0, locale }: CityCardProps) {
  const t = useTranslations("cities");
  const safeCity = city ?? ({} as City);
  const href = safeCity?.available ? `/tours?city=${safeCity?.slug ?? ''}` : '#';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index ?? 0) * 0.1 }}
    >
      <Link href={href} className="block group">
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
          <Image
            src={safeCity?.image ?? '/images/architecture/krakow_main_square.jpg'}
            alt={`${safeCity?.name ?? 'City'} - ${safeCity?.tagline ?? ''}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-1">
              {safeCity?.tagline ?? ''}
            </p>
            <h3 className="font-heading text-2xl font-bold text-white mb-1">
              {safeCity?.name ?? ''}
            </h3>
            <p className="text-white/70 text-sm mb-3 line-clamp-2">
              {safeCity?.description ?? ''}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:gap-2 transition-all">
              {safeCity?.available ? t("available") : t("comingSoon")}
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>

          {/* Status */}
          {!safeCity?.available && (
            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-white/80 text-xs font-medium">{t("comingSoon")}</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
