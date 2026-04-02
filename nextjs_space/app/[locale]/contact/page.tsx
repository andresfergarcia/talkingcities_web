import { getSiteSettings } from '@/lib/content';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import ContactForm from '@/components/forms/contact-form';
import { Mail, MapPin, Headphones } from 'lucide-react';
import type { Metadata } from 'next';
import { loadMessages, createTranslator } from '@/lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await loadMessages(locale);
  const t = createTranslator(messages);
  
  return {
    title: t('contact.pageTitle'),
    description: t('contact.pageSubtitle'),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await loadMessages(locale);
  const t = createTranslator(messages);
  const settings = getSiteSettings();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary-dark text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: t('nav.contact') }]} />
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-8 h-8 text-gold" />
            <h1 className="font-heading text-3xl sm:text-4xl font-bold">{t('contact.getInTouch')}</h1>
          </div>
          <p className="text-white/70 text-lg max-w-2xl">
            {t('contact.pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-bg">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-text mb-6">{t('contact.sendMessage')}</h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <Mail className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold text-text mb-2">{t('contact.emailUs')}</h3>
                <a
                  href={`mailto:${settings?.contactEmail ?? ''}`}
                  className="text-primary hover:text-primary-dark transition-colors text-sm"
                >
                  {settings?.contactEmail ?? ''}
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold text-text mb-2">{t('contact.location')}</h3>
                <p className="text-text-light text-sm">{t('contact.locationValue')}</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <Headphones className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold text-text mb-2">{t('contact.witness')}</h3>
                <p className="text-text-light text-sm">
                  {t('contact.witnessDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
