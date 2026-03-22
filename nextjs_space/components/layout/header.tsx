"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/lib/i18n-link";
import { useTranslations } from "@/lib/i18n-context";
import { Menu, X, MapPin, BookOpen, Info, Mail, Headphones } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguagePicker from "@/components/ui/language-picker";

interface HeaderProps {
  locale: string;
}

const navIcons = {
  tours: MapPin,
  stories: BookOpen,
  about: Info,
  contact: Mail,
};

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations("nav");
  
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { href: "/tours", labelKey: "tours", icon: navIcons.tours },
    { href: "/stories", labelKey: "stories", icon: navIcons.stories },
    { href: "/about", labelKey: "about", icon: navIcons.about },
    { href: "/contact", labelKey: "contact", icon: navIcons.contact },
  ];

  useEffect(() => {
    const path = window.location.pathname;
    const isHome = path === "/" || path === `/${locale}` || path === `/${locale}/`;
    setIsHomePage(isHome);
    
    const handleScroll = () => {
      // Verificamos directamente el path para evitar errores de referencia
      const currentPath = window.location.pathname;
      const currentlyHome = currentPath === "/" || currentPath === `/${locale}` || currentPath === `/${locale}/`;
      
      if (!currentlyHome) {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [locale]);

  const shouldShowSolid = !isHomePage || isScrolled;

  const renderLogo = () => {
    if (logoError) {
      return (
        <div className="flex items-center gap-2">
          <Headphones className={`w-7 h-7 transition-colors ${shouldShowSolid ? "text-primary" : "text-white"} group-hover:text-gold`} />
          <span className={`font-heading text-xl sm:text-2xl font-bold transition-colors ${shouldShowSolid ? "text-primary-dark" : "text-white"}`}>
            Talking Cities
          </span>
        </div>
      );
    }

    return (
      <div className="relative h-12 w-[180px] sm:h-16 sm:w-[240px]">
        <Image
          src="/images/logo-color.png"
          alt="Talking Cities"
          fill
          className={`object-contain object-left transition-opacity duration-300 ${shouldShowSolid ? 'opacity-100' : 'opacity-0'}`}
          onError={() => setLogoError(true)}
          sizes="240px"
          priority
        />
        <Image
          src="/images/logo-white.png"
          alt="Talking Cities"
          fill
          className={`object-contain object-left transition-opacity duration-300 ${shouldShowSolid ? 'opacity-0' : 'opacity-100'}`}
          onError={() => setLogoError(true)}
          sizes="240px"
          priority
        />
      </div>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowSolid
          ? "bg-white/95 backdrop-blur-md shadow-md py-1"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            {renderLogo()}
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                  shouldShowSolid
                    ? "text-text hover:bg-primary/10 hover:text-primary"
                    : "text-white/90 hover:bg-white/15 hover:text-white"
                }`}
              >
                <link.icon className="w-4 h-4" />
                {t(link.labelKey)}
              </Link>
            ))}
            
            <LanguagePicker currentLocale={locale} isScrolled={shouldShowSolid} />
            
            <Link
              href="/tours"
              className="ml-2 px-5 py-2.5 bg-accent hover:bg-accent-light text-white rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              {t("buyTour")}
            </Link>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <LanguagePicker currentLocale={locale} isScrolled={shouldShowSolid} />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`p-2 rounded-lg transition-colors ${
                shouldShowSolid
                  ? "text-text hover:bg-gray-100"
                  : "text-white hover:bg-white/15"
              }`}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 shadow-xl"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="font-medium">{t(link.labelKey)}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}