import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useLanguage } from '../../hooks/useLanguage';

export default function SocialProofSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="social-proof" dark>
      {/* Section title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t.socialProof.sectionTitle}
        </h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-20">
        {t.socialProof.stats.map((stat) => (
          <AnimatedCounter
            key={stat.label}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.socialProof.testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-brand-bg/50 border border-white/5 rounded-2xl p-6 md:p-8"
          >
            <Quote className="text-brand-accent/30 mb-4" size={24} />
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div>
              <p className="text-brand-text font-semibold text-sm">
                {testimonial.name}
              </p>
              <p className="text-brand-muted/60 text-xs">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
