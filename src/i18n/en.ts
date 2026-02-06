import { Translations } from './types';

export const en: Translations = {
  lang: 'en',
  dir: 'ltr',
  fontFamily: 'font-inter',
  nav: {
    about: 'About',
    products: 'Products',
    content: 'Content',
    contact: 'Contact',
  },
  hero: {
    headline: "We're in a New Era.\nThe Agents Are Ready.\nAre You?",
    subtitle: 'Building an AI-First life from scratch. Entrepreneur, combat reservist, father. From Koh Phangan, Thailand.',
    ctaWatch: 'Get Free Guide',
    ctaCourse: 'Start the Course',
  },
  about: {
    sectionTitle: 'My Story',
    paragraph1:
      'I served in an IDF Special Unit, built a solar energy company from zero to 10 million NIS in revenue, and prepared for US expansion. Then October 7th happened.',
    paragraph2:
      'My brother Avidan was murdered at the Nova Festival. I left everything, served over 400 days in reserve duty, and slowly started rebuilding.',
    paragraph3:
      "Today I live with my family in Koh Phangan, Thailand, building a new life from the ground up - with AI as an integral part of every system. Not as a hobby. As a way of life.",
    quote: 'All we need is to build the right environment for ourselves and for the agents - so they become an integral part of our lives.',
    stats: {
      revenue: '10M',
      revenueLabel: 'NIS Revenue',
      reserve: '400+',
      reserveLabel: 'Days Reserve Duty',
      languages: '3',
      languagesLabel: 'Languages',
      location: 'Koh Phangan',
      locationLabel: 'Thailand',
    },
  },
  pillars: {
    sectionTitle: 'Content Pillars',
    sectionSubtitle: 'Five core topics I cover - from the technical to the personal',
    items: [
      {
        icon: 'Bot',
        title: 'AI First Life',
        description:
          'How to build a life where AI agents are part of your daily routine. From automated morning podcasts to project management.',
        percentage: '30%',
      },
      {
        icon: 'Settings',
        title: 'Systems & Order',
        description:
          'How to stop firefighting and build systems that work - even when you\'re not there.',
        percentage: '25%',
      },
      {
        icon: 'TrendingUp',
        title: 'Survival to Abundance',
        description:
          'The journey from survival to abundance. Why security must come before growth, and how to build the right foundation.',
        percentage: '20%',
      },
      {
        icon: 'Palmtree',
        title: 'Lifestyle Business',
        description:
          "How to have it all - business, family, hobbies, freedom - without compromise. Because today, you actually can.",
        percentage: '20%',
      },
      {
        icon: 'MapPin',
        title: 'My Story',
        description:
          'Behind the scenes. Island life in Thailand, Muay Thai training, family, and the things you only learn when you start over.',
        percentage: '5%',
      },
    ],
    learnMore: 'Learn More',
  },
  products: {
    sectionTitle: 'Start Here',
    sectionSubtitle: 'Three products, one depth level - from free to hands-on',
    items: [
      {
        title: '5 AI Assistants Every Business Owner Needs',
        description:
          'A free PDF guide explaining exactly which AI assistants every business owner needs, and why. Simple language, no BS.',
        price: 'Free',
        cta: 'Download Now',
        link: 'https://kaniel149.github.io/kaniel-landing/#/en/guide',
        badge: 'Free',
      },
      {
        title: 'Your First AI Assistant',
        description:
          'A 30-minute recorded course. 5 lessons. By the end, you\'ll have a working AI system - Claude installed, first assistant built, ready-made templates.',
        price: '$27',
        cta: 'Start Learning',
        link: 'https://kaniel149.github.io/kaniel-landing/#/en',
      },
      {
        title: 'Is Your Business AI-Ready?',
        description:
          'A quick quiz that gives you a personalized score and specific recommendations. Exactly what you need to improve.',
        price: 'Free',
        cta: 'Check Your Score',
        link: 'https://kaniel149.github.io/kaniel-scorecard/#/en',
        badge: 'Free',
      },
    ],
  },
  socialProof: {
    sectionTitle: 'Numbers That Speak',
    stats: [
      { value: '500+', label: 'Followers in First Month' },
      { value: '97%', label: 'Satisfaction Rate' },
      { value: '3', label: 'Languages' },
    ],
    testimonials: [
      {
        text: 'Within a week I built an AI system that saves me 3 hours a day. Kaniel explained it in a way I finally understood.',
        name: 'Daniel K.',
        role: 'Business Owner',
      },
      {
        text: "The AI-First approach changed the way I think about my business. Not just a tool - a way of life.",
        name: 'Joseph M.',
        role: 'Entrepreneur',
      },
      {
        text: 'Finally someone who talks about AI with real examples, no hype, no exaggerated promises.',
        name: 'Michelle R.',
        role: 'Marketing Manager',
      },
    ],
  },
  contentSection: {
    sectionTitle: 'Latest Content',
    sectionSubtitle: 'Videos, tips, and insights - from my life to yours',
    items: [
      { title: 'How AI Changed My Life', platform: 'Instagram', date: 'Feb 2026' },
      { title: 'My Morning with AI Agents', platform: 'Instagram', date: 'Feb 2026' },
      { title: 'I Moved to an Island to Rebuild with AI', platform: 'Instagram', date: 'Feb 2026' },
      { title: 'Why Muay Thai', platform: 'Instagram', date: 'Feb 2026' },
      { title: 'Being Present', platform: 'TikTok', date: 'Feb 2026' },
    ],
    seeAll: 'See All Content',
    instagramUrl: 'https://instagram.com/kaniel.t',
  },
  newsletter: {
    sectionTitle: 'Join the Family',
    subtitle: 'Get weekly insights on AI, systems, and building life on your terms. No spam. Ever.',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    cta: 'Join',
    sending: 'Sending...',
    success: "Awesome! Welcome to the family.",
    privacy: "We'll never spam you. Ever.",
  },
  footer: {
    memorial: "In memory of Avidan Tordjman z\"l",
    rights: '\u00A9 2026 Kaniel Tordjman. All rights reserved.',
    quickLinks: 'Quick Links',
    social: 'Social',
  },
};
