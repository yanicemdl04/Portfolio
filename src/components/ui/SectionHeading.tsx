import React from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  index?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * En-tête de section standardisé : label (eyebrow) + titre + sous-titre.
 * Assure une hiérarchie visuelle cohérente sur l'ensemble du site.
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  index,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {(eyebrow || index) && (
        <Reveal>
          <div className={`mb-4 flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}>
            {index && (
              <span className="font-mono text-xs tracking-wider text-umber">{index}</span>
            )}
            {index && eyebrow && <span className="h-px w-6 bg-umber/40" aria-hidden="true" />}
            {eyebrow && (
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-sage-500">
                {eyebrow}
              </span>
            )}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className="text-display-md font-display font-medium leading-tight text-charcoal">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p className="mt-4 text-base leading-relaxed text-charcoal/65 md:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
