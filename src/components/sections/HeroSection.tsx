import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary orb */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-accent/[0.07] blur-[100px] animate-float" />
      {/* Warm accent orb */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-warm/[0.04] blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
      {/* Subtle top gradient */}
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-brand-accent/[0.03] blur-[150px]" />
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(108,99,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.3) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />
    </div>
  );
}

export default function HeroSection() {
  const { t } = useLanguage();
  const lines = t.hero.headline.split('\n');
  const [typedLines, setTypedLines] = useState<string[]>(['']);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setDoneTyping(true);
      const blinkTimer = setTimeout(() => setShowCursor(false), 2500);
      return () => clearTimeout(blinkTimer);
    }

    const currentLine = lines[currentLineIndex];
    if (currentCharIndex < currentLine.length) {
      const speed = Math.random() * 30 + 25; // variable speed for realism
      const timer = setTimeout(() => {
        setTypedLines((prev) => {
          const updated = [...prev];
          updated[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return updated;
        });
        setCurrentCharIndex((c) => c + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLineIndex((l) => l + 1);
        setCurrentCharIndex(0);
        setTypedLines((prev) => [...prev, '']);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, lines]);

  const scrollToProducts = useCallback(() => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingOrbs />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-bg" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-brand-bg/80" />

      <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto pt-24">
        {/* Small tag above headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase border border-brand-accent/20 text-brand-accent bg-brand-accent/5">
            AI First Life
          </span>
        </motion.div>

        {/* Typing headline */}
        <div className="min-h-[200px] md:min-h-[260px] flex flex-col items-center justify-center mb-10">
          {typedLines.map((line, i) => (
            <h1
              key={i}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              {line}
              {i === currentLineIndex && showCursor && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  className="inline-block w-[4px] h-[0.85em] bg-brand-accent ms-1 rounded-sm -mb-1"
                />
              )}
            </h1>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={doneTyping ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed opacity-0"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={doneTyping ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
        >
          <button
            onClick={scrollToProducts}
            className="group relative px-9 py-4 bg-brand-accent text-white font-display font-semibold rounded-2xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(108,99,255,0.4)] hover:scale-[1.02] text-base overflow-hidden"
          >
            <span className="relative z-10">{t.hero.ctaWatch}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-warm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </button>
          <a
            href={`https://kaniel149.github.io/kaniel-landing/#/${t.lang}`}
            className="px-9 py-4 border border-white/10 hover:border-brand-accent/40 text-brand-text rounded-2xl transition-all duration-300 hover:bg-brand-accent/5 font-display font-medium text-base"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-brand-accent/40" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
