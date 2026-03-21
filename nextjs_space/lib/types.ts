// ===== CONTENT TYPES =====

export interface SiteSettings {
  siteName: string;
  logoColorPath: string;
  logoWhitePath: string;
  siteTagline: string;
  siteDescription: string;
  contactEmail: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
  voicemapPublisher: string;
  appLinks: {
    googlePlay: string;
    appleStore: string;
  };
  currency: string;
  defaultLanguage: string;
}

export interface HeroCTA {
  text: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface HomepageContent {
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    backgroundImage: string;
    cta: {
      primary: HeroCTA;
      secondary: HeroCTA;
    };
  };
  valueProposition: {
    title: string;
    subtitle: string;
    features: Feature[];
  };
  howItWorks: {
    title: string;
    fromHome: {
      title: string;
      description: string;
      icon: string;
      cta: HeroCTA;
    };
    onTheStreets: {
      title: string;
      description: string;
      icon: string;
      cta: HeroCTA;
    };
  };
  featuredCities: {
    title: string;
    subtitle: string;
  };
  commitment: {
    title: string;
    description: string;
    stat: {
      value: number;
      label: string;
    };
  };
}

export interface Tour {
  slug: string;
  city: string;
  citySlug: string;
  title: string;
  subtitle: string;
  type: string;
  description: string;
  price: number;
  currency: string;
  duration: string;
  distance: string;
  stops: number;
  languages: string[];
  image: string;
  highlights: string[];
  includes: string[];
  voicemapUrl: string;
  status: 'available' | 'coming-soon';
  articleSlug: string;
}

export interface City {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  available: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
  tour: string;
}

export interface StorySection {
  title: string;
  content: string;
  image: string;
}

export interface Story {
  slug: string;
  city: string;
  citySlug: string;
  type: string;
  title: string;
  introduction: string;
  image: string;
  sections: StorySection[];
  conclusion: string;
  audioFiles: {
    english: string;
    polish: string;
    spanish: string;
    german: string;
  };
  relatedTourSlug: string;
}

export interface AboutContent {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  mission: {
    title: string;
    content: string;
    content2: string;
  };
  impact: {
    title: string;
    subtitle: string;
    content: string;
    callToWitness: string;
  };
  businessModel: {
    title: string;
    subtitle: string;
    philosophy: string;
    freeAccess: {
      title: string;
      description: string;
    };
    premiumAccess: {
      title: string;
      description: string;
    };
    socialCommitment: string;
  };
  origin: string;
}
