import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import Logo from './Logo';

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Projets', path: '/projects' },
  { name: 'Compétences', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

const socials = [
  { icon: Github, href: 'https://github.com/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/yanice-mundele-35545a364', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contact@yanice.dev', label: 'Email' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-charcoal text-cream/70">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo />
              <span className="font-display text-lg font-medium text-cream">
                Yanice Mundele
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/50">
              Développeur web full-stack basé à Kinshasa — je conçois des expériences
              numériques sobres, solides et pensées pour durer.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-cream/40">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className="text-sm text-cream/60 transition-colors duration-300 hover:text-sage-300"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-cream/40">
              Restons en contact
            </h3>
            <div className="mt-5 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/60 transition-all duration-300 ease-soft hover:-translate-y-0.5 hover:border-sage-400 hover:text-sage-300"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/40">
            © {currentYear} Yanice Mundele. Tous droits réservés.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-cream/50 transition-colors duration-300 hover:text-sage-300"
            aria-label="Retour en haut"
          >
            Retour en haut
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
