import { Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.81.11v-3.5a6.37 6.37 0 0 0-.81-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.76a8.28 8.28 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.17Z" />
    </svg>
  );
}

export default function Footer() {
  const { lang, t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.content, href: '#content' },
    { label: t.nav.contact, href: '#newsletter' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com/kaniel.t', icon: <Instagram size={20} /> },
    { label: 'TikTok', href: 'https://tiktok.com/@kaniel.t', icon: <TikTokIcon size={20} /> },
    { label: 'YouTube', href: 'https://youtube.com/@kaniel', icon: <Youtube size={20} /> },
  ];

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-card border-t border-white/5 px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo + Memorial */}
          <div>
            <a
              href={`/#/${lang}`}
              className="text-2xl font-bold tracking-wider text-brand-text hover:text-brand-accent transition-colors"
            >
              KANIEL
            </a>
            <p className="text-brand-muted text-sm mt-4 leading-relaxed max-w-xs">
              AI First Life
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-text font-semibold mb-4 text-sm uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-brand-muted hover:text-brand-text transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-brand-text font-semibold mb-4 text-sm uppercase tracking-wider">
              {t.footer.social}
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-muted hover:text-brand-accent hover:bg-brand-accent/10 transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted/60 text-xs">{t.footer.rights}</p>
          <p className="text-brand-muted/40 text-xs italic">
            {t.footer.memorial}
          </p>
        </div>
      </div>
    </footer>
  );
}
