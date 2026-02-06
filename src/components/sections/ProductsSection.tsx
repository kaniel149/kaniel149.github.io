import { motion } from 'framer-motion';
import { Download, BookOpen, ClipboardCheck } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../hooks/useLanguage';

const productIcons = [
  <Download size={32} key="download" />,
  <BookOpen size={32} key="book" />,
  <ClipboardCheck size={32} key="clipboard" />,
];

export default function ProductsSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="products">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t.products.sectionTitle}
        </h2>
        <p className="text-brand-muted text-lg max-w-2xl mx-auto">
          {t.products.sectionSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.products.items.map((product, i) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative group"
          >
            <div className="bg-brand-card border border-white/5 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:border-brand-accent/30 hover:shadow-[0_0_40px_rgba(0,102,255,0.1)]">
              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 end-4 text-xs font-semibold bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6">
                {productIcons[i]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-brand-text">
                {product.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed flex-1 mb-6">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-2xl font-bold text-brand-accent">
                  {product.price}
                </span>
              </div>

              {/* CTA */}
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-300 bg-brand-accent hover:bg-brand-accent-hover text-white hover:shadow-[0_0_20px_rgba(0,102,255,0.3)]"
              >
                {product.cta}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
