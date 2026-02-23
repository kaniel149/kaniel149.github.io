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
    <section className="relative py-28 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Dramatic gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-accent/[0.04] to-brand-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-accent/[0.06] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          {text.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-muted text-lg md:text-xl mb-12"
        >
          {text.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <a
            href={`https://kaniel149.github.io/kaniel-landing/#/${lang}/guide`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-12 py-5 bg-brand-accent text-white font-display font-semibold rounded-2xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(108,99,255,0.4)] hover:scale-[1.03] text-lg relative overflow-hidden"
          >
            <span className="relative z-10">{text.cta}</span>
            <ArrowUpRight size={20} className="relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-warm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
