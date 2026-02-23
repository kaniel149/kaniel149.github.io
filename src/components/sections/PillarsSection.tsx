import { motion } from 'framer-motion';
import {
  Bot,
  Settings,
  TrendingUp,
  Palmtree,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../hooks/useLanguage';

const iconMap: Record<string, LucideIcon> = {
  Bot, Settings, TrendingUp, Palmtree, MapPin,
};

const pillarColors = [
  'from-brand-accent/20 to-brand-accent/5',
  'from-violet-500/20 to-violet-500/5',
  'from-emerald-500/20 to-emerald-500/5',
  'from-amber-500/20 to-amber-500/5',
  'from-rose-500/20 to-rose-500/5',
];

export default function PillarsSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="pillars" dark>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold mb-4"
        >
          {t.pillars.sectionTitle}
        </motion.h2>
        <p className="text-brand-muted text-lg max-w-2xl mx-auto">
          {t.pillars.sectionSubtitle}
        </p>
      </div>

      {/* Bento-style grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {t.pillars.items.map((pillar, i) => {
          const Icon = iconMap[pillar.icon] || Bot;
          // First two cards span 3 cols, next three span 2 cols
          const span = i < 2 ? 'md:col-span-3' : 'md:col-span-2';
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`${span} group relative`}
            >
              <div className="relative bg-brand-bg/60 border border-white/5 rounded-2xl p-7 h-full hover:border-brand-accent/20 transition-all duration-500 overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute top-0 end-0 w-32 h-32 bg-gradient-to-bl ${pillarColors[i]} rounded-bl-full opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />

                <div className="relative flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent/10 transition-colors duration-300">
                    <Icon className="text-brand-accent" size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-lg font-semibold text-brand-text">
                        {pillar.title}
                      </h3>
                      <span className="text-[10px] font-bold text-brand-accent bg-brand-accent/10 px-2.5 py-0.5 rounded-full">
                        {pillar.percentage}
                      </span>
                    </div>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
