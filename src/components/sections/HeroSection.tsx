import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export default function HeroSection() {
  const { t } = useLanguage();
  const lines = t.hero.headline.split('\n');
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      // Done typing, blink cursor then hide
      const blinkTimer = setTimeout(() => setShowCursor(false), 2000);
      return () => clearTimeout(blinkTimer);
    }

    const currentLine = lines[currentLineIndex];
    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setTypedLines((prev) => {
          const updated = [...prev];
          updated[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return updated;
        });
        setCurrentCharIndex((c) => c + 1);
      }, 40);
      return () => clearTimeout(timer);
    } else {
      // Move to next line after a short pause
      const timer = setTimeout(() => {
        setCurrentLineIndex((l) => l + 1);
        setCurrentCharIndex(0);
        setTypedLines((prev) => [...prev, '']);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, lines]);

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-brand-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/3 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto pt-20">
        {/* Typing headline */}
        <div className="min-h-[180px] md:min-h-[220px] flex flex-col items-center justify-center mb-8">
          {typedLines.map((line, i) => (
            <h1
              key={i}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              {line}
              {i === currentLineIndex && showCursor && (
                <span className="inline-block w-[3px] h-[1em] bg-brand-accent ml-1 animate-pulse" />
              )}
            </h1>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProducts}
            className="px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,255,0.3)] text-base"
          >
            {t.hero.ctaWatch}
          </button>
          <a
            href={`https://kaniel149.github.io/kaniel-landing/#/${t.lang}`}
            className="px-8 py-4 border border-white/20 hover:border-brand-accent/50 text-brand-text rounded-xl transition-all duration-300 hover:bg-white/5 font-medium text-base"
          >
            {t.hero.ctaCourse}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-brand-muted/40" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
