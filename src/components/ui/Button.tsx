import React from 'react';

type Variant = 'solid' | 'outline' | 'ghost' | 'inverse';
type Size = 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const sizeClasses: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const variantClasses: Record<Variant, string> = {
  solid:
    'bg-charcoal text-cream hover:bg-sage-500 active:bg-sage-600 shadow-soft hover:shadow-soft-lg',
  outline:
    'border border-charcoal/25 text-charcoal hover:border-sage-400 hover:text-sage-500 bg-transparent',
  ghost: 'text-charcoal hover:text-sage-500 bg-transparent',
  inverse: 'bg-cream text-charcoal hover:bg-sage-400 hover:text-cream shadow-soft hover:shadow-soft-lg',
};

/**
 * Bouton système : 3 variantes, feedback de hover/active maîtrisé
 * (couleur, ombre, translation légère), pas d'effets flashy.
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...rest
}) => {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight
    transition-all duration-300 ease-soft will-change-transform
    hover:-translate-y-0.5 active:translate-y-0 active:duration-150
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream
    disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0
    ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 ease-soft group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 ease-soft group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
};

export default Button;
