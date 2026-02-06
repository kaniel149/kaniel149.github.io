import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../hooks/useLanguage';

export default function AboutSection() {
  const { t } = useLanguage();
  const stats = [
    { value: t.about.stats.revenue, label: t.about.stats.revenueLabel },
    { value: t.about.stats.reserve, label: t.about.stats.reserveLabel },
    { value: t.about.stats.languages, label: t.about.stats.languagesLabel },
    { value: t.about.stats.location, label: t.about.stats.locationLabel },
  ];

  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Photo + Stats */}
        <div className="flex flex-col items-center gap-10">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-brand-card border-2 border-brand-accent/40 flex items-center justify-center overflow-hidden"
          >
            <User className="text-brand-muted/30" size={80} />
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center p-4 bg-brand-card/50 rounded-xl border border-white/5"
              >
                <div className="text-2xl md:text-3xl font-bold text-brand-accent">
                  {stat.value}
                </div>
                <div className="text-brand-muted text-xs mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            {t.about.sectionTitle}
          </motion.h2>

          <div className="space-y-5 text-brand-muted leading-relaxed text-base md:text-lg">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t.about.paragraph1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t.about.paragraph2}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {t.about.paragraph3}
            </motion.p>
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 border-s-4 border-brand-accent ps-6 py-2"
          >
            <p className="text-brand-text text-base md:text-lg italic leading-relaxed">
              &ldquo;{t.about.quote}&rdquo;
            </p>
          </motion.blockquote>
        </div>
      </div>
    </SectionWrapper>
  );
}
