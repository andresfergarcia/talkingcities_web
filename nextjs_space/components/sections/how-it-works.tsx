"use client";

import { motion } from "framer-motion";
import { Globe, Navigation } from "lucide-react";
import { Link } from "@/lib/i18n-link";
import { useTranslations } from "@/lib/i18n-context";

interface HowItWorksProps {
  locale?: string;
}

export default function HowItWorks({ locale }: HowItWorksProps) {
  const t = useTranslations("howItWorks");

  const paths = [
    {
      icon: Globe,
      title: t("fromAnywhere"),
      description: t("fromAnywhereDesc"),
      cta: { text: t("exploreFreeStories"), href: "/stories" as const },
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Navigation,
      title: t("onTheStreets"),
      description: t("onTheStreetsDesc"),
      cta: { text: t("viewTours"), href: "/tours" as const },
      gradient: "from-accent to-accent-light",
    },
  ];

  return (
    <section className="py-20 bg-bg-alt">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-3">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paths.map((path, i) => {
            const IconComp = path.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${path.gradient} flex items-center justify-center mb-6`}
                >
                  <IconComp className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-text mb-3">
                  {path.title}
                </h3>
                <p className="text-text-light mb-6 leading-relaxed">
                  {path.description}
                </p>
                <Link
                  href={path.cta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all"
                >
                  {path.cta.text}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
