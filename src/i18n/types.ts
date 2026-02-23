export type Language = 'he' | 'en' | 'es';

export interface Translations {
  lang: Language;
  dir: 'rtl' | 'ltr';
  fontFamily: string;
  nav: {
    about: string;
    products: string;
    content: string;
    contact: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    ctaWatch: string;
    ctaCourse: string;
  };
  about: {
    sectionTitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    quote: string;
    stats: {
      revenue: string;
      revenueLabel: string;
      reserve: string;
      reserveLabel: string;
      languages: string;
      languagesLabel: string;
      location: string;
      locationLabel: string;
    };
  };
  pillars: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
      percentage: string;
    }>;
    learnMore: string;
  };
  openclaw: {
    sectionTitle: string;
    sectionSubtitle: string;
    levels: Array<{
      title: string;
      subtitle: string;
      description: string;
    }>;
    quote: string;
    cta: string;
    ctaLink: string;
  };
  products: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      title: string;
      description: string;
      price: string;
      cta: string;
      link: string;
      badge?: string;
    }>;
  };
  socialProof: {
    sectionTitle: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  contentSection: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      title: string;
      platform: string;
      date: string;
    }>;
    seeAll: string;
    instagramUrl: string;
  };
  newsletter: {
    sectionTitle: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    cta: string;
    sending: string;
    success: string;
    privacy: string;
  };
  footer: {
    memorial: string;
    rights: string;
    quickLinks: string;
    social: string;
  };
}
