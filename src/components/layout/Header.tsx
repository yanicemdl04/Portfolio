import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Projets', path: '/projects' },
    { name: 'Compétences', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-background/90 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center" onClick={closeMenu}>
          <Logo className="h-10 w-auto" />
          <span className="ml-2 text-xl font-semibold font-poppins dark:text-primary text-background-400">
            Yanice<span className="hidden sm:inline">.dev</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors relative py-2 
                ${isActive 
                  ? 'text-background-400 dark:text-primary' 
                  : 'text-gray-700 dark:text-text-medium hover:text-background-400 dark:hover:text-text-light'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-background-50 text-gray-700 dark:text-primary transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <a 
            href="/CV_Yanice_Mundele.pdf" 
            download
            className="inline-flex items-center px-4 py-2 border border-primary bg-transparent hover:bg-primary/10 text-background-400 dark:text-primary rounded-md transition-colors text-sm font-medium"
          >
            <Download size={16} className="mr-2" />
            CV
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-background-50 text-gray-700 dark:text-primary transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-text-light"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-background z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-20`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-xl font-medium transition-colors 
                ${isActive 
                  ? 'text-background-400 dark:text-primary' 
                  : 'text-gray-700 dark:text-text-medium'}`
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
          
          <a 
            href="/CV_Yanice_Mundele.pdf" 
            download
            className="inline-flex items-center px-6 py-3 border border-primary bg-transparent hover:bg-primary/10 text-background-400 dark:text-primary rounded-md transition-colors text-lg font-medium mt-4"
            onClick={closeMenu}
          >
            <Download size={20} className="mr-2" />
            Télécharger CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;