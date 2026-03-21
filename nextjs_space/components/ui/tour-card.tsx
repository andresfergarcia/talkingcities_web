"use client";

import Image from "next/image";
import { Link } from "@/lib/i18n-link";
import { Clock, MapPin, Headphones, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "@/lib/i18n-context";
import type { Tour } from "@/lib/types";

interface TourCardProps {
  tour: Tour;
  index?: number;
  locale?: string;
}

export default function TourCard({ tour, index = 0, locale }: TourCardProps) {
  const t = useTranslations("tours");
  const safeTour = tour ?? ({} as Tour);
  const isAvailable = safeTour?.status === "available";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index ?? 0) * 0.1 }}
    >
      <Link href={`/tours/${safeTour?.slug ?? ''}`} className="block group">
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
          {/* Image */}
          <div className="relative aspect-[16/10] bg-gray-200 overflow-hidden">
            <Image
              src={safeTour?.image ?? '/images/architecture/krakow_main_square.jpg'}
              alt={safeTour?.title ?? 'Tour'}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Status Badge */}
            <div className="absolute top-3 left-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  isAvailable
                    ? "bg-primary text-white"
                    : "bg-gray-800/70 text-white"
                }`}
              >
                {isAvailable ? t("availableNow") : t("comingSoon")}
              </span>
            </div>
            {/* Price */}
            {isAvailable && (
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                <span className="text-lg font-bold text-primary">
                  {safeTour?.currency ?? '€'}{safeTour?.price?.toFixed?.(2) ?? '0.00'}
                </span>
              </div>
            )}
            {/* Type Badge */}
            <div className="absolute bottom-3 left-3">
              <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                {safeTour?.type ?? ''}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-heading text-lg font-bold text-text mb-1 group-hover:text-primary transition-colors">
              {safeTour?.title ?? ''}
            </h3>
            <p className="text-text-light text-sm mb-3 line-clamp-2">
              {safeTour?.description ?? ''}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-text-light mb-4">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {safeTour?.duration ?? ''}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {safeTour?.distance ?? ''}
              </span>
              <span className="flex items-center gap-1">
                <Headphones className="w-3.5 h-3.5" /> {safeTour?.stops ?? 0} {t("stops")}
              </span>
            </div>

            {/* Languages */}
            <div className="flex items-center gap-1.5 mb-4">
              {safeTour?.languages?.map?.((lang) => (
                <span
                  key={lang}
                  className="px-2 py-0.5 bg-bg-alt text-text-light text-[10px] font-medium rounded"
                >
                  {lang ?? ''}
                </span>
              )) ?? []}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                {isAvailable ? t("buyTour") : t("comingSoon")}
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
