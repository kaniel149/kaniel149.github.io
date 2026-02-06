import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, Loader2 } from 'lucide-react';
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
    // Simulated submission
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <SectionWrapper id="newsletter" dark>
      <div className="max-w-xl mx-auto text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-8"
        >
          <Mail className="text-brand-accent" size={28} />
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t.newsletter.sectionTitle}
        </h2>
        <p className="text-brand-muted text-lg mb-10 leading-relaxed">
          {t.newsletter.subtitle}
        </p>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-3 text-green-400"
          >
            <Check size={24} />
            <span className="text-lg font-medium">{t.newsletter.success}</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.newsletter.namePlaceholder}
                className="flex-1 px-5 py-3.5 bg-brand-bg border border-white/10 rounded-xl text-brand-text placeholder:text-brand-muted/40 focus:outline-none focus:border-brand-accent/50 transition-colors"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.emailPlaceholder}
                required
                className="flex-1 px-5 py-3.5 bg-brand-bg border border-white/10 rounded-xl text-brand-text placeholder:text-brand-muted/40 focus:outline-none focus:border-brand-accent/50 transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto px-10 py-3.5 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
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
            <p className="text-brand-muted/40 text-xs mt-2">
              {t.newsletter.privacy}
            </p>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
}
