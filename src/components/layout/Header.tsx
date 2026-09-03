import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Projets', path: '/projects' },
  { name: 'Compétences', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-soft ${
        scrolled
          ? 'border-b border-charcoal/8 bg-cream/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-custom flex h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Logo />
          <span className="font-display text-lg font-medium leading-none text-charcoal">
            Yanice<span className="text-sage-500">.</span>
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `link-underline py-2 text-sm font-medium tracking-tight transition-colors duration-300 ${
                  isActive ? 'text-charcoal' : 'text-charcoal/55 hover:text-charcoal'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="/CV_Yanice_Mundele.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-charcoal/25 px-5 py-2.5 text-sm font-medium text-charcoal transition-all duration-300 ease-soft hover:-translate-y-0.5 hover:border-sage-400 hover:text-sage-500"
          >
            Télécharger le CV
            <ArrowDown size={14} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-beige-200 md:hidden"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col justify-between overflow-y-auto bg-cream px-6 pb-10 pt-6 md:hidden"
          >
            <ul className="flex flex-col divide-y divide-charcoal/8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-4 font-display text-2xl font-medium ${
                        isActive ? 'text-sage-500' : 'text-charcoal'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <a
              href="/CV_Yanice_Mundele.pdf"
              download
              onClick={closeMenu}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/25 px-6 py-3.5 text-base font-medium text-charcoal"
            >
              Télécharger le CV
              <ArrowDown size={16} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
