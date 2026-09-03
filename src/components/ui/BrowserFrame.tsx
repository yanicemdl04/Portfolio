import React from 'react';

interface BrowserFrameProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Cadre de navigateur minimaliste utilisé pour présenter les aperçus de
 * projets : ancre le mockup dans un contexte "site web réel" sans dépendre
 * d'une capture d'écran externe fragile.
 */
const BrowserFrame: React.FC<BrowserFrameProps> = ({ url, children, className = '' }) => {
  return (
    <div className={`flex flex-col overflow-hidden border border-b-0 border-charcoal/10 bg-linen ${className}`}>
      <div className="flex shrink-0 items-center gap-2 border-b border-charcoal/10 bg-beige-100 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-charcoal/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-charcoal/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-charcoal/15" />
        <div className="ml-3 flex-1 truncate rounded-full bg-linen/80 px-3 py-1 font-mono text-[11px] text-charcoal/45">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
};

export default BrowserFrame;
