import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const ctaText: Record<string, { headline: string; subtitle: string; cta: string }> = {
  he: {
    headline: 'מוכן לבנות את החיים שלך מחדש?',
    subtitle: 'התחל עם המדריך החינמי. 5 דקות קריאה שיכולות לשנות לך את הגישה.',
    cta: 'התחל עכשיו',
  },
  en: {
    headline: 'Ready to Rebuild Your Life?',
    subtitle: 'Start with the free guide. A 5-minute read that can change your approach.',
    cta: 'Start Now',
  },
  es: {
    headline: '\u00bfListo para Reconstruir Tu Vida?',
    subtitle: 'Empieza con la gu\u00eda gratuita. 5 minutos de lectura que pueden cambiar tu enfoque.',
    cta: 'Empezar Ahora',
  },
};

export default function CTASection() {
  const { lang } = useLanguage();
  const text = ctaText[lang] || ctaText.he;

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-accent/5 to-brand-bg" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          {text.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-muted text-lg md:text-xl mb-10"
        >
          {text.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={`https://kaniel149.github.io/kaniel-landing/#/${lang}/guide`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.3)] text-lg"
          >
            {text.cta}
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
