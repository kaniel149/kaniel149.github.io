import {
  Bot,
  Settings,
  TrendingUp,
  Palmtree,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import GlowCard from '../ui/GlowCard';
import { useLanguage } from '../../hooks/useLanguage';

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Settings,
  TrendingUp,
  Palmtree,
  MapPin,
};

export default function PillarsSection() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="pillars" dark>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t.pillars.sectionTitle}
        </h2>
        <p className="text-brand-muted text-lg max-w-2xl mx-auto">
          {t.pillars.sectionSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.pillars.items.map((pillar, i) => {
          const Icon = iconMap[pillar.icon] || Bot;
          return (
            <GlowCard key={pillar.title} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-brand-accent" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-brand-text">
                      {pillar.title}
                    </h3>
                    <span className="text-xs text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded-full">
                      {pillar.percentage}
                    </span>
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </GlowCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
