import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-50 dark:bg-background-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Logo className="h-10 w-auto" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold font-poppins dark:text-primary text-background-400">
                Yanice Mundele
              </h3>
              <p className="text-sm text-gray-600 dark:text-text-medium">
                Développeur Web Full Stack
              </p>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-text-medium hover:text-background-400 dark:hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yanice-mundele-35545a364" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-text-medium hover:text-background-400 dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@yanice.dev" 
              className="text-gray-600 dark:text-text-medium hover:text-background-400 dark:hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-background-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-text-medium mb-4 md:mb-0">
            © {currentYear} Yanice Mundele. Tous droits réservés.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center text-sm text-gray-600 dark:text-text-medium hover:text-background-400 dark:hover:text-primary transition-colors"
            aria-label="Retour en haut"
          >
            <span className="mr-2">Retour en haut</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;