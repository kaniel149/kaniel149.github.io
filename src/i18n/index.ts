import { Language, Translations } from './types';
import { he } from './he';
import { en } from './en';
import { es } from './es';

export type { Language, Translations };

export const translations: Record<Language, Translations> = { he, en, es };

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}
