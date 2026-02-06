import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlowCard({
  children,
  className = '',
  delay = 0,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className={`relative group bg-brand-card border border-white/5 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-brand-accent/30 hover:shadow-[0_0_30px_rgba(0,102,255,0.08)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
