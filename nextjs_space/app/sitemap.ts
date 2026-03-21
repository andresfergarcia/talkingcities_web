import { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { getTours, getStories } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const headersList = headers();
  const host = headersList?.get?.('x-forwarded-host') ?? 'talkingcities.eu';
  const protocol = 'https';
  const siteUrl = `${protocol}://${host}`;

  const tours = getTours();
  const stories = getStories();

  const staticPages = [
    { url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${siteUrl}/tours`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${siteUrl}/stories`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ];

  const tourPages = (tours ?? [])?.map?.((t) => ({
    url: `${siteUrl}/tours/${t?.slug ?? ''}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  })) ?? [];

  const storyPages = (stories ?? [])?.map?.((s) => ({
    url: `${siteUrl}/stories/${s?.slug ?? ''}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  })) ?? [];

  return [...staticPages, ...tourPages, ...storyPages];
}
