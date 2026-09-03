import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * Monogramme sobre "YM" — remplace l'icône générique précédente.
 * Un simple carré à coin arrondi, brun charbon, avec un point sauge
 * en accent : identité minimale, mémorable, sans effet superflu.
 */
const Logo: React.FC<LogoProps> = ({ className = 'h-9 w-9' }) => {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center rounded-lg bg-charcoal text-cream ${className}`}
    >
      <span className="font-display text-[0.95em] font-medium leading-none">YM</span>
      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-sage-400" aria-hidden="true" />
    </span>
  );
};

export default Logo;
