import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, Loader2, Sparkles } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../hooks/useLanguage';

export default function NewsletterSection() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <SectionWrapper id="newsletter" dark>
      <div className="relative max-w-2xl mx-auto">
        {/* Decorative background */}
        <div className="absolute -inset-10 bg-brand-accent/[0.03] rounded-3xl blur-3xl" />

        <div className="relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-brand-warm/10 flex items-center justify-center mx-auto mb-8"
          >
            <Sparkles className="text-brand-accent" size={26} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold mb-4"
          >
            {t.newsletter.sectionTitle}
          </motion.h2>
          <p className="text-brand-muted text-lg mb-10 leading-relaxed max-w-lg mx-auto">
            {t.newsletter.subtitle}
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-emerald-400"
            >
              <Check size={24} />
              <span className="text-lg font-display font-medium">{t.newsletter.success}</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.newsletter.namePlaceholder}
                  className="flex-1 px-5 py-4 bg-brand-bg/80 border border-white/8 rounded-xl text-brand-text placeholder:text-brand-muted/30 focus:outline-none focus:border-brand-accent/40 focus:ring-1 focus:ring-brand-accent/20 transition-all"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.newsletter.emailPlaceholder}
                  required
                  className="flex-1 px-5 py-4 bg-brand-bg/80 border border-white/8 rounded-xl text-brand-text placeholder:text-brand-muted/30 focus:outline-none focus:border-brand-accent/40 focus:ring-1 focus:ring-brand-accent/20 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto px-12 py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-display font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(108,99,255,0.3)] hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    {t.newsletter.sending}
                  </>
                ) : (
                  t.newsletter.cta
                )}
              </button>
              <p className="text-brand-muted/30 text-xs mt-3">
                {t.newsletter.privacy}
              </p>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
