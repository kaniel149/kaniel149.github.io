import { motion } from 'framer-motion';
import { Instagram, Play, ArrowUpRight } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../hooks/useLanguage';

function TikTokSmallIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.81.11v-3.5a6.37 6.37 0 0 0-.81-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.76a8.28 8.28 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.17Z" />
    </svg>
  );
}

export default function ContentSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="content">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold mb-3"
          >
            {t.contentSection.sectionTitle}
          </motion.h2>
          <p className="text-brand-muted text-lg max-w-xl">
            {t.contentSection.sectionSubtitle}
          </p>
        </div>
        <a
          href={t.contentSection.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors font-display font-medium shrink-0"
        >
          {t.contentSection.seeAll}
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.contentSection.items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="group bg-brand-surface border border-white/5 rounded-2xl overflow-hidden hover:border-brand-accent/20 transition-all duration-500 cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="aspect-video bg-gradient-to-br from-brand-accent/5 to-brand-surface flex items-center justify-center relative overflow-hidden">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-accent/20 group-hover:scale-110 transition-all duration-500">
                <Play className="text-brand-accent" size={22} />
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                {item.platform === 'Instagram' ? (
                  <Instagram size={13} className="text-brand-muted/50" />
                ) : (
                  <TikTokSmallIcon />
                )}
                <span className="text-brand-muted/50 text-xs">{item.platform}</span>
                <span className="text-brand-muted/25 text-xs">{item.date}</span>
              </div>
              <h3 className="text-brand-text font-medium text-sm leading-snug group-hover:text-brand-accent transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
