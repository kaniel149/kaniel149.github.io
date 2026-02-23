import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useLanguage } from '../../hooks/useLanguage';

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

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-20">
        {t.socialProof.stats.map((stat) => (
          <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>

      {/* Testimonials — staggered masonry-ish */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {t.socialProof.testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className={`group bg-brand-bg/60 border border-white/5 rounded-2xl p-7 hover:border-brand-accent/15 transition-all duration-500 ${i === 1 ? 'md:mt-8' : ''}`}
          >
            <Quote className="text-brand-accent/20 mb-4 group-hover:text-brand-accent/40 transition-colors" size={22} />
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-accent to-brand-warm flex items-center justify-center text-[11px] font-bold text-white">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-brand-text font-semibold text-sm">{testimonial.name}</p>
                <p className="text-brand-muted/50 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
