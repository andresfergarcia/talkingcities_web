"use client";

import Image from "next/image";
import { Link } from "@/lib/i18n-link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  title: string;
  titleHighlight: string;
  subtitle: string;
  backgroundImage: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  locale?: string;
}

export default function Hero({
  title = "",
  titleHighlight = "",
  subtitle = "",
  backgroundImage = "",
  primaryCta,
  secondaryCta,
  locale,
}: HeroProps) {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || '/images/architecture/krakow_main_square.jpg'}
          alt="Historic Polish city architecture"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            {title ?? ''}
            <br />
            <span className="text-gold">{titleHighlight ?? ''}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8"
        >
          {subtitle ?? ''}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={(primaryCta?.href ?? '/tours') as "/tours" | "/stories"}
            className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg text-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            {primaryCta?.text ?? 'Explore Tours'}
          </Link>
          <Link
            href={(secondaryCta?.href ?? '/stories') as "/tours" | "/stories"}
            className="px-8 py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold rounded-lg text-lg transition-all border border-white/30"
          >
            {secondaryCta?.text ?? 'Free Stories'}
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
}
