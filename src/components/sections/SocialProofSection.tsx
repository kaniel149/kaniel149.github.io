import { motion } from 'framer-motion';
import { Rocket, Clock, Code2, Zap } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../hooks/useLanguage';

const statsConfig = [
  { icon: Rocket, color: 'text-brand-accent' },
  { icon: Clock, color: 'text-brand-warm' },
  { icon: Code2, color: 'text-emerald-400' },
  { icon: Zap, color: 'text-amber-400' },
];

export default function SocialProofSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="social-proof" dark>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold mb-4"
        >
          {t.socialProof.sectionTitle}
        </motion.h2>
      </div>

      {/* Real Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {t.socialProof.stats.map((stat, i) => {
          const Icon = statsConfig[i]?.icon || Rocket;
          const color = statsConfig[i]?.color || 'text-brand-accent';
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6 bg-brand-card/50 rounded-2xl border border-white/5 hover:border-brand-accent/20 transition-all duration-500"
            >
              <Icon className={`${color} mx-auto mb-3`} size={28} />
              <div className="text-3xl md:text-4xl font-bold font-display text-brand-text mb-2">
                {stat.value}
              </div>
              <div className="text-brand-muted text-sm">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
