import { Language } from '../i18n/types';

export function detectBrowserLanguage(): Language {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('he')) return 'he';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('en')) return 'en';
  // Default to Hebrew
  return 'he';
}
