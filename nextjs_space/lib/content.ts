import path from 'path';
import fs from 'fs';
import type { SiteSettings, HomepageContent, Tour, City, Testimonial, Story, AboutContent } from './types';

function loadJSON<T>(filename: string): T {
  const filePath = path.join(process.cwd(), 'data', 'content', filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as T;
}

export function getSiteSettings(): SiteSettings {
  return loadJSON<SiteSettings>('site-settings.json');
}

export function getHomepageContent(): HomepageContent {
  return loadJSON<HomepageContent>('homepage.json');
}

export function getTours(): Tour[] {
  const data = loadJSON<{ tours: Tour[] }>('tours.json');
  return data?.tours ?? [];
}

export function getTourBySlug(slug: string): Tour | undefined {
  const tours = getTours();
  return tours?.find?.((t) => t?.slug === slug);
}

export function getCities(): City[] {
  const data = loadJSON<{ cities: City[] }>('cities.json');
  return data?.cities ?? [];
}

export function getTestimonials(): Testimonial[] {
  const data = loadJSON<{ testimonials: Testimonial[] }>('testimonials.json');
  return data?.testimonials ?? [];
}

export function getStories(): Story[] {
  const data = loadJSON<{ stories: Story[] }>('stories.json');
  return data?.stories ?? [];
}

export function getStoryBySlug(slug: string): Story | undefined {
  const stories = getStories();
  return stories?.find?.((s) => s?.slug === slug);
}

export function getAboutContent(): AboutContent {
  return loadJSON<AboutContent>('about.json');
}
