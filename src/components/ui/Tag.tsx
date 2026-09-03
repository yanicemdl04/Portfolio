import React from 'react';

const Tag: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <span
    className={`inline-flex items-center rounded-full border border-charcoal/10 bg-linen px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-umber-500 ${className}`}
  >
    {children}
  </span>
);

export default Tag;
