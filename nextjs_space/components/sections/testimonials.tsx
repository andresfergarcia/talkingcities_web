"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useTranslations } from "@/lib/i18n-context";
import type { Testimonial } from "@/lib/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
  locale?: string;
}

export default function Testimonials({ testimonials, locale }: TestimonialsProps) {
  const t = useTranslations("testimonials");
  const [current, setCurrent] = useState(0);
  const safeTestimonials = testimonials ?? [];

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % safeTestimonials.length);
  }, [safeTestimonials.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + safeTestimonials.length) % safeTestimonials.length);
  }, [safeTestimonials.length]);

  useEffect(() => {
    if (safeTestimonials.length <= 1) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next, safeTestimonials.length]);

  return null;

  const testimonial = safeTestimonials[current];

  return (
    <section className="py-20 bg-bg">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-3">
            {t("title")}
          </h2>
          <p className="text-text-light text-lg">{t("subtitle")}</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg text-center"
            >
              <Quote className="w-10 h-10 text-primary/20 mx-auto mb-4" />
              <p className="text-text text-lg sm:text-xl leading-relaxed mb-6 italic">
                &ldquo;{testimonial?.quote ?? ''}&rdquo;
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial?.rating ?? 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="font-semibold text-text">{testimonial?.author ?? ''}</p>
              <p className="text-text-light text-sm">
                {testimonial?.location ?? ''} &bull; {testimonial?.tour ?? ''}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {safeTestimonials.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-text hover:bg-primary hover:text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-text hover:bg-primary hover:text-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {safeTestimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === current ? "bg-primary" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
