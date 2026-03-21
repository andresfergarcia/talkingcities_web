"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "@/lib/i18n-link";
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n";
import { ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LanguagePickerProps {
  currentLocale: string;
  isScrolled?: boolean;
}

export default function LanguagePicker({ currentLocale, isScrolled = true }: LanguagePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    // Navigate to the same path with new locale
    const newPath = `/${newLocale}${pathname}`;
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; samesite=lax`;
    window.location.href = newPath;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all ${
          isScrolled
            ? "text-text hover:bg-gray-100"
            : "text-white hover:bg-white/10"
        }`}
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {localeFlags[currentLocale as Locale]} {currentLocale.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                  locale === currentLocale
                    ? "bg-primary/5 text-primary font-medium"
                    : "text-text"
                }`}
              >
                <span className="text-lg">{localeFlags[locale]}</span>
                <span className="text-sm">{localeNames[locale]}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
