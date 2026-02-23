import { motion } from 'framer-motion';
import { MessageSquare, Code, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../hooks/useLanguage';

const levelIcons: LucideIcon[] = [MessageSquare, Code, Bot];

const levelStyles = [
  {
    border: 'border-emerald-500/20',
    glow: 'hover:shadow-[0_0_50px_rgba(16,185,129,0.12)]',
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-400',
    accent: 'text-emerald-400',
    tag: 'bg-emerald-500/10 text-emerald-400',
    scale: 'md:scale-[0.95]',
    opacity: 'opacity-70 hover:opacity-100',
  },
  {
    border: 'border-violet-500/20',
    glow: 'hover:shadow-[0_0_50px_rgba(139,92,246,0.12)]',
    iconBg: 'bg-violet-500/10',
    iconText: 'text-violet-400',
    accent: 'text-violet-400',
    tag: 'bg-violet-500/10 text-violet-400',
    scale: 'md:scale-100',
    opacity: 'opacity-80 hover:opacity-100',
  },
  {
    border: 'border-brand-accent/30',
    glow: 'hover:shadow-[0_0_60px_rgba(108,99,255,0.2)]',
    iconBg: 'bg-brand-accent/15',
    iconText: 'text-brand-accent',
    accent: 'text-brand-accent',
    tag: 'bg-brand-accent/15 text-brand-accent',
    scale: 'md:scale-[1.05]',
    opacity: 'opacity-100',
  },
];

export default function OpenClawSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="openclaw" dark>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold mb-4"
        >
          {t.openclaw.sectionTitle}
        </motion.h2>
        <p className="text-brand-muted text-lg max-w-2xl mx-auto">
          {t.openclaw.sectionSubtitle}
        </p>
      </div>

      {/* Progression arrow visual */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mb-14 items-end">
        {t.openclaw.levels.map((level, i) => {
          const Icon = levelIcons[i];
          const style = levelStyles[i];
          const isLast = i === 2;
          return (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18, duration: 0.6 }}
              className={`relative group ${style.scale} ${style.opacity} transition-all duration-500`}
            >
              {/* Premium glow for OpenClaw */}
              {isLast && (
                <div className="absolute -inset-1 bg-brand-accent/10 rounded-3xl blur-xl" />
              )}
              <div
                className={`relative bg-brand-surface border ${style.border} rounded-2xl p-8 text-center transition-all duration-500 ${style.glow} ${isLast ? 'ring-1 ring-brand-accent/20' : ''}`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${style.iconBg} flex items-center justify-center mx-auto mb-5`}
                >
                  <Icon className={style.iconText} size={30} />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-text mb-1.5">
                  {level.title}
                </h3>
                <span className={`text-sm font-semibold ${style.accent} mb-4 block`}>
                  {level.subtitle}
                </span>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {level.description}
                </p>
                {isLast && (
                  <div className="mt-5">
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${style.tag}`}>
                      ★ Premium
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center"
      >
        <blockquote className="font-display text-xl md:text-2xl font-bold text-brand-text mb-8 max-w-2xl mx-auto leading-relaxed">
          &ldquo;{t.openclaw.quote}&rdquo;
        </blockquote>
        <a
          href={t.openclaw.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-9 py-4 rounded-2xl font-display font-semibold transition-all duration-300 bg-brand-accent hover:bg-brand-accent-hover text-white hover:shadow-[0_0_40px_rgba(108,99,255,0.3)] hover:scale-[1.02]"
        >
          {t.openclaw.cta}
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
