"use client";

import { Link } from "@/lib/i18n-link";
import { useTranslations } from "@/lib/i18n-context";
import Image from "next/image";
import { MapPin, BookOpen, Mail, Heart } from "lucide-react";
import NewsletterForm from "../forms/newsletter-form";

interface FooterProps {
  contactEmail?: string;
  locale?: string;
}

export default function Footer({ contactEmail = "info@talkingcities.eu", locale }: FooterProps) {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-primary-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-content mx-auto px-4 sm:px-6 py-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold mb-2">
              {t("newsletter")}
            </h3>
            <p className="text-white/70 mb-6 text-sm">
              {t("tagline")}
            </p>
            <NewsletterForm locale={locale} />
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-content mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand - ESTRUCTURA LIMPIA PARA CENTRADO */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Image
              src="/images/logo-white.png"
              alt="Talking Cities Logo"
              width={100} // Aumentado para que se vea mejor
              height={60}
              className="h-auto w-auto max-w-[100px] mb-4" 
            />
            <p className="text-white/60 text-sm leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">
              {t("explore")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tours" className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> {tNav("tours")}
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" /> {tNav("stories")}
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">
              {t("aboutSection")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors">
                  {t("ourMission")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white text-sm transition-colors">
                  {tNav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">
              {t("getInTouch")}
            </h4>
            <a
              href={`mailto:${contactEmail ?? ''}`}
              className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" /> {contactEmail ?? ''}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-4 sm:px-6 py-5">
          <p className="text-center text-white/40 text-xs flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-accent" /> by Talking Cities &copy; 2026. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}