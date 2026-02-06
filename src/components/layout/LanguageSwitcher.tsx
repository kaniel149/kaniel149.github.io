import { useNavigate } from 'react-router-dom';
import { Language } from '../../i18n/types';

interface LanguageSwitcherProps {
  currentLang: Language;
  className?: string;
}

const flags: Record<Language, string> = {
  he: '\uD83C\uDDEE\uD83C\uDDF1',
  en: '\uD83C\uDDEC\uD83C\uDDE7',
  es: '\uD83C\uDDEA\uD83C\uDDF8',
};

export default function LanguageSwitcher({ currentLang, className = '' }: LanguageSwitcherProps) {
  const navigate = useNavigate();

  const switchLanguage = (lang: Language) => {
    navigate(`/${lang}`);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {(Object.keys(flags) as Language[]).map((lang) => (
        <button
          key={lang}
          onClick={() => switchLanguage(lang)}
          aria-label={`Switch to ${lang}`}
          className={`text-xl transition-all duration-200 hover:scale-110 ${
            currentLang === lang ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-80'
          }`}
        >
          {flags[lang]}
        </button>
      ))}
    </div>
  );
}
