import { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import PillarsSection from './components/sections/PillarsSection';
import OpenClawSection from './components/sections/OpenClawSection';
import ProductsSection from './components/sections/ProductsSection';
import SocialProofSection from './components/sections/SocialProofSection';
import ContentSection from './components/sections/ContentSection';
import NewsletterSection from './components/sections/NewsletterSection';
import CTASection from './components/sections/CTASection';
import { detectBrowserLanguage } from './utils/detectLanguage';
import { Language } from './i18n/types';

function HomePage() {
  const { lang } = useParams<{ lang: string }>();
  const validLang: Language =
    lang === 'en' || lang === 'es' || lang === 'he' ? lang : 'he';
  const isRtl = validLang === 'he';
  const fontClass = isRtl ? 'font-heebo' : 'font-body';

  useEffect(() => {
    document.documentElement.lang = validLang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [validLang, isRtl]);

  return (
    <div className={`min-h-screen bg-brand-bg text-brand-text ${fontClass}`}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PillarsSection />
        <OpenClawSection />
        <ProductsSection />
        <SocialProofSection />
        <ContentSection />
        <NewsletterSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function LanguageRedirect() {
  const detected = detectBrowserLanguage();
  return <Navigate to={`/${detected}`} replace />;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/:lang" element={<HomePage />} />
        <Route path="*" element={<LanguageRedirect />} />
      </Routes>
    </HashRouter>
  );
}
