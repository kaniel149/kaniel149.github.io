import { motion } from 'framer-motion';
import { Download, BookOpen, ClipboardCheck, Phone } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../hooks/useLanguage';

const productIcons = [Download, BookOpen, ClipboardCheck, Phone];

const cardAccents = [
  'from-emerald-500/10 to-transparent',
  'from-violet-500/10 to-transparent',
  'from-blue-500/10 to-transparent',
  'from-brand-warm/10 to-transparent',
];

export default function ProductsSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="products">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold mb-4"
        >
          {t.products.sectionTitle}
        </motion.h2>
        <p className="text-brand-muted text-lg max-w-2xl mx-auto">
          {t.products.sectionSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.products.items.map((product, i) => {
          const Icon = productIcons[i];
          const isConsulting = i === 3;
          return (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`relative group ${isConsulting ? 'lg:-mt-4' : ''}`}
            >
              {/* Premium glow for consulting */}
              {isConsulting && (
                <div className="absolute -inset-1 bg-brand-warm/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              )}
              <div className={`relative h-full flex flex-col bg-brand-surface border rounded-2xl p-7 transition-all duration-500 hover:border-brand-accent/30 hover:shadow-[0_0_40px_rgba(108,99,255,0.08)] ${isConsulting ? 'border-brand-warm/20 ring-1 ring-brand-warm/10' : 'border-white/5'}`}>
                {/* Top gradient */}
                <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${cardAccents[i]} rounded-t-2xl pointer-events-none`} />

                {/* Badge */}
                {product.badge && (
                  <span className={`absolute top-4 end-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${isConsulting ? 'bg-brand-warm/15 text-brand-warm' : 'bg-brand-accent/15 text-brand-accent'}`}>
                    {product.badge}
                  </span>
                )}

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${isConsulting ? 'bg-brand-warm/10 text-brand-warm' : 'bg-brand-accent/10 text-brand-accent'}`}>
                  <Icon size={28} />
                </div>

                <h3 className="font-display text-lg font-bold mb-2 text-brand-text relative">
                  {product.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed flex-1 mb-5 relative">
                  {product.description}
                </p>

                <div className="mb-5 relative">
                  <span className={`text-2xl font-display font-bold ${isConsulting ? 'text-brand-warm' : 'text-brand-accent'}`}>
                    {product.price}
                  </span>
                </div>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative block w-full text-center py-3.5 rounded-xl font-display font-semibold transition-all duration-300 ${isConsulting ? 'bg-brand-warm hover:bg-brand-warm/90 text-white hover:shadow-[0_0_30px_rgba(255,107,74,0.3)]' : 'bg-brand-accent hover:bg-brand-accent-hover text-white hover:shadow-[0_0_30px_rgba(108,99,255,0.3)]'}`}
                >
                  {product.cta}
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
