"use client";

import { Link } from '@/lib/i18n-link';
import { Home, MapPin } from 'lucide-react';
import { useTranslations } from '@/lib/i18n-context';

export default function NotFound() {
  const t = useTranslations('common');
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="text-center px-4">
        <h1 className="font-heading text-6xl sm:text-8xl font-bold text-primary/20 mb-4">404</h1>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text mb-4">
          {t('notFound')}
        </h2>
        <p className="text-text-light mb-8 max-w-md mx-auto">
          {t('notFoundDesc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all"
          >
            <Home className="w-4 h-4" /> {t('goHome')}
          </Link>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all"
          >
            <MapPin className="w-4 h-4" /> {t('exploreTours')}
          </Link>
        </div>
      </div>
    </div>
  );
}
