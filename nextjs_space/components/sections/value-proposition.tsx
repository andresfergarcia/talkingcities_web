"use client";

import { motion } from "framer-motion";
import { Headphones, MapPin, Heart } from "lucide-react";
import { useTranslations } from "@/lib/i18n-context";

interface ValuePropositionProps {
  locale?: string;
}

export default function ValueProposition({ locale }: ValuePropositionProps) {
  const t = useTranslations("valueProposition");

  const features = [
    {
      icon: Headphones,
      title: t("immersiveAudio"),
      description: t("immersiveAudioDesc"),
    },
    {
      icon: MapPin,
      title: t("gpsGuided"),
      description: t("gpsGuidedDesc"),
    },
    {
      icon: Heart,
      title: t("socialImpact"),
      description: t("socialImpactDesc"),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-4xl font-bold text-text mb-3"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-light text-lg max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const IconComp = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-bg rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <IconComp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
