import { getAboutContent } from '@/lib/content';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import AboutClient from './_components/about-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission to preserve the voices that built the city.',
};

export default function AboutPage() {
  const about = getAboutContent();
  return (
    <div className="pt-20">
      <div className="max-w-content mx-auto px-4 sm:px-6 mt-4">
        <Breadcrumbs items={[{ label: 'About' }]} />
      </div>
      <AboutClient about={about} />
    </div>
  );
}
