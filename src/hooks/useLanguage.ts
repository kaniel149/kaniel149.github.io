import { useParams } from 'react-router-dom';
import { Language, Translations, getTranslations } from '../i18n';

export function useLanguage(): { lang: Language; t: Translations } {
  const { lang } = useParams<{ lang: string }>();
  const validLang: Language =
    lang === 'en' || lang === 'es' || lang === 'he' ? lang : 'he';
  return { lang: validLang, t: getTranslations(validLang) };
}
