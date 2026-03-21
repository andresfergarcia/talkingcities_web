"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Counter from "@/components/ui/counter";
import { useTranslations } from "@/lib/i18n-context";

interface CommitmentProps {
  locale?: string;
}

export default function Commitment({ locale }: CommitmentProps) {
  const t = useTranslations("commitment");

  return (
    <section className="py-20 bg-primary-dark text-white">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-accent" />
              <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                {t("title")}
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              {t("title")}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              {t("description")}
            </p>
          </motion.div>

          {/* Stat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 text-center">
              <div className="text-6xl sm:text-7xl font-bold text-gold mb-2">
                <Counter value={40} suffix="%" />
              </div>
              <p className="text-white/70 text-sm max-w-xs">
                {t("statLabel")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
