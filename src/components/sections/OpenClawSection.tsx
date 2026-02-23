import { motion } from 'framer-motion';
import { MessageSquare, Code, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../hooks/useLanguage';

const levelIcons: LucideIcon[] = [MessageSquare, Code, Bot];

const glowColors = [
  'hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]',
  'hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]',
  'hover:shadow-[0_0_40px_rgba(0,102,255,0.15)]',
];

const accentColors = [
  { bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
  { bg: 'bg-violet-500/10', text: 'text-violet-400' },
  { bg: 'bg-brand-accent/10', text: 'text-brand-accent' },
];

export default function OpenClawSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="openclaw" dark>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t.openclaw.sectionTitle}
        </h2>
        <p className="text-brand-muted text-lg max-w-2xl mx-auto">
          {t.openclaw.sectionSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {t.openclaw.levels.map((level, i) => {
          const Icon = levelIcons[i];
          const accent = accentColors[i];
          return (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative group bg-brand-card border border-white/5 rounded-2xl p-8 text-center transition-all duration-300 hover:border-brand-accent/30 ${glowColors[i]}`}
            >
              <div
                className={`w-16 h-16 rounded-2xl ${accent.bg} flex items-center justify-center mx-auto mb-5`}
              >
                <Icon className={accent.text} size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-1">
                {level.title}
              </h3>
              <span className={`text-sm font-semibold ${accent.text} mb-3 block`}>
                {level.subtitle}
              </span>
              <p className="text-brand-muted text-sm leading-relaxed">
                {level.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center"
      >
        <blockquote className="text-xl md:text-2xl font-bold text-brand-text mb-8 max-w-2xl mx-auto leading-relaxed">
          &ldquo;{t.openclaw.quote}&rdquo;
        </blockquote>
        <a
          href={t.openclaw.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 bg-brand-accent hover:bg-brand-accent-hover text-white hover:shadow-[0_0_20px_rgba(0,102,255,0.3)]"
        >
          {t.openclaw.cta}
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
