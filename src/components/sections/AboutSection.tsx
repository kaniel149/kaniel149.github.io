import { motion } from 'framer-motion';
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Photo — asymmetric, dramatic */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative group"
          >
            {/* Glow behind photo */}
            <div className="absolute -inset-4 bg-brand-accent/10 rounded-3xl blur-2xl group-hover:bg-brand-accent/15 transition-all duration-700" />
            {/* Photo frame */}
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/images/kaniel-headshot.jpg"
                alt="Kaniel Tordjman"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent" />
            </div>
            {/* Decorative accent line */}
            <div className="absolute -bottom-3 -end-3 w-24 h-24 border-2 border-brand-accent/20 rounded-2xl" />
          </motion.div>

          {/* Stats row under photo */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs mt-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                className="text-center p-3 bg-brand-surface/80 rounded-xl border border-white/5 hover:border-brand-accent/20 transition-colors"
              >
                <div className="text-xl md:text-2xl font-display font-bold text-brand-accent">
                  {stat.value}
                </div>
                <div className="text-brand-muted text-[11px] mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="lg:col-span-7">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold mb-10 leading-tight"
          >
            {t.about.sectionTitle}
          </motion.h2>

          <div className="space-y-6 text-brand-muted leading-relaxed text-base md:text-lg">
            {[t.about.paragraph1, t.about.paragraph2, t.about.paragraph3].map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.12 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 relative ps-8 py-4"
          >
            <div className="absolute start-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-brand-accent to-brand-warm" />
            <p className="text-brand-text text-base md:text-lg italic leading-relaxed">
              &ldquo;{t.about.quote}&rdquo;
            </p>
          </motion.blockquote>
        </div>
      </div>
    </SectionWrapper>
  );
}
